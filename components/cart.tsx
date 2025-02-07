// import Image from "next/image";
// import Link from "next/link";

// const Cart = () => {
//   return (
//     <div className="w-full px-4 py-8 max-w-6xl mx-auto">
//       {/* Cart Section */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//         {/* Cart Items */}
//         <div className="md:col-span-2 rounded-lg p-6">
//           <table className="w-full text-left">
//             <thead>
//               <tr className="bg-yellow-100">
//                 <th className="py-2 px-4">Product</th>
//                 <th className="py-2 px-4">Price</th>
//                 <th className="py-2 px-4">Quantity</th>
//                 <th className="py-2 px-4">Subtotal</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td className="py-4 px-4 flex items-center">
//                   <Image
//                     src="/sofa.png"
//                     height={100}
//                     width={100}
//                     alt="Asgard sofa"
//                     className="w-16 h-16 rounded-md mr-4"
//                   />
//                   Asgard sofa
//                 </td>
//                 <td className="py-4 px-4">Rs. 250,000.00</td>
//                 <td className="py-4 px-4">
//                   <input
//                     type="number"
//                     min="1"
//                     defaultValue="1"
//                     className="w-12 text-center border border-gray-300 rounded-lg"
//                   />
//                 </td>
//                 <td className="py-4 px-4">Rs. 250,000.00</td>
//                 <td className="py-4 px-4 text-center">
//                   <button className="text-yellow-500 hover:text-yellow-600">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="h-5 w-5"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth="2"
//                         d="M19 7l-.867 12.142A2 2 0 0116.136 21H7.864a2 2 0 01-1.997-1.858L5 7m5 4v6m4-6v6m1-10V5a2 2 0 00-2-2H9a2 2 0 00-2 2v2m5 4h.01"
//                       />
//                     </svg>
//                   </button>
//                 </td>
//               </tr>
//             </tbody>
//           </table>
//         </div>

//         {/* Cart Totals */}
//         <div className="bg-yellow-50 rounded-lg p-6">
//           <h2 className="text-xl font-semibold mb-4">Cart Totals</h2>
//           <div className="flex justify-between mb-2">
//             <span>Subtotal</span>
//             <span>Rs. 250,000.00</span>
//           </div>
//           <div className="flex justify-between font-semibold text-lg mb-4">
//             <span>Total</span>
//             <span className="text-[#B88E2F]">Rs. 250,000.00</span>
//           </div>
//           <div className="flex justify-center items-center">
//           <button className=" my-6 h-[64px] w-[205px] border hover:text-white py-2 rounded-lg hover:bg-gray-800 transition duration-300">
//             <Link href="/checkout">Check Out</Link>
//           </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cart;

'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Asgard Sofa', price: 250000, quantity: 1, image: '/sofa.png' },
  ]);

  const updateQuantity = (id: number, quantity: number) => {
    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity: quantity } : item))
    );
  };

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="w-full px-4 py-8 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="md:col-span-2 rounded-lg p-6 bg-white shadow-md">
          {cartItems.length > 0 ? (
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-yellow-100">
                  <th className="py-2 px-4">Product</th>
                  <th className="py-2 px-4">Price</th>
                  <th className="py-2 px-4">Quantity</th>
                  <th className="py-2 px-4">Subtotal</th>
                  <th className="py-2 px-4">Action</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id} className="border-b">
                    <td className="py-4 px-4 flex items-center">
                      <Image src={item.image} height={100} width={100} alt={item.name} className="w-16 h-16 rounded-md mr-4" />
                      {item.name}
                    </td>
                    <td className="py-4 px-4">Rs. {item.price.toLocaleString()}</td>
                    <td className="py-4 px-4">
                      <input
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                        className="w-12 text-center border border-gray-300 rounded-lg"
                      />
                    </td>
                    <td className="py-4 px-4">Rs. {(item.price * item.quantity).toLocaleString()}</td>
                    <td className="py-4 px-4 text-center">
                      <button onClick={() => removeItem(item.id)} className="text-red-500 hover:text-red-600">
                        ❌
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="text-center text-gray-500">Your cart is empty.</p>
          )}
        </div>

        {/* Cart Totals */}
        <div className="bg-yellow-50 rounded-lg p-6 shadow-md">
          <h2 className="text-xl font-semibold mb-4">Cart Totals</h2>
          <div className="flex justify-between mb-2">
            <span>Subtotal</span>
            <span>Rs. {subtotal.toLocaleString()}</span>
          </div>
          <div className="flex justify-between font-semibold text-lg mb-4">
            <span>Total</span>
            <span className="text-[#B88E2F]">Rs. {subtotal.toLocaleString()}</span>
          </div>
          <div className="flex justify-center items-center">
            {cartItems.length > 0 ? (
              <Link href="/checkout">
                <button className="my-6 h-[64px] w-[205px] border hover:text-white py-2 rounded-lg hover:bg-gray-800 transition duration-300">
                  Check Out
                </button>
              </Link>
            ) : (
              <button disabled className="my-6 h-[64px] w-[205px] border bg-gray-300 text-gray-500 py-2 rounded-lg cursor-not-allowed">
                Check Out
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

