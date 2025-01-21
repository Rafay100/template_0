import { createClient } from '@sanity/client';
import fetch from 'node-fetch';
import dotenv from 'dotenv';

dotenv.config();

const client = createClient({
  projectId: "5yxghlu6", // Update if necessary
  dataset: "production",
  useCdn: false, // Don't use CDN for write operations
  apiVersion: '2025-01-13',
  token: process.env.SANITY_TOKEN || "skzXv3hc765L4AVyezT0wVfp2fezKhyyWyn0qR1opZ88hCa4Awk8n7QxOnue9BFXAjz7d0iMCt2eoFsQFyq3BF8B0IglXenSUJIu8hTLhgnbylaWpKuDzHthTJgomLRpUJSMv7vXVYcb1JD40qWIUSu0hPFwHY2RtBEe8Rjj81CnZ5DKIdpg",
});

// Function to upload an image to Sanity
async function uploadImageToSanity(imageUrl) {
  try {
    console.log(`Uploading image: ${imageUrl}`);

    const response = await fetch(imageUrl);
    if (!response.ok) {
      throw new Error(`Failed to fetch image: ${imageUrl} - Status: ${response.status}`);
    }

    const buffer = await response.arrayBuffer();
    const asset = await client.assets.upload('image', Buffer.from(buffer), {
      filename: imageUrl.split('/').pop(),
    });

    console.log(`Image uploaded successfully: ${asset._id}`);
    return asset._id;
  } catch (error) {
    console.error(`Failed to upload image: ${imageUrl}`, error.message);
    return null;
  }
}

// Function to upload a single product to Sanity
async function uploadProduct(product) {
  try {
    const imageId = await uploadImageToSanity(product.imagePath);

    if (imageId) {
      const document = {
        _id: product.id, // Ensure the product has an _id field
        _type: 'product',
        id: product.id,
        name: product.name,
        image: {
          _type: 'image',
          asset: {
            _ref: imageId,
          },
        },
        price: parseFloat(product.price),
        description: product.description,
        discountPercentage: product.discountPercentage,
        isFeaturedProduct: product.isFeaturedProduct,
        stockLevel: product.stockLevel,
        category: product.category,
      };

      const createdProduct = await client.createOrReplace(document);
      console.log(`Product "${product.name}" uploaded successfully:`, createdProduct);
    } else {
      console.log(`Product "${product.name}" skipped due to image upload failure.`);
    }
  } catch (error) {
    console.error(`Error uploading product "${product.name}":`, error.message);
  }
}

// Function to fetch products from the provided API and upload them to Sanity
async function migrateProducts() {
  try {
    const response = await fetch('https://template-0-beta.vercel.app/api/product');

    if (!response.ok) {
      throw new Error(`Failed to fetch products - Status: ${response.status}`);
    }

    const products = await response.json();

    for (const product of products) {
      await uploadProduct(product);
    }
  } catch (error) {
    console.error('Error fetching products:', error.message);
  }
}

// Start the migration process
migrateProducts()
  .then(() => console.log('Product migration completed successfully.'))
  .catch((error) => console.error('Error during migration:', error.message));
