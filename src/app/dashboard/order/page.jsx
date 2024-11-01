"use client"
import React from 'react';

// Sample order data
const orders = [
  { id: 1, title: "Orange", quantity: 2, price: 5.50 },
  { id: 2, title: "Tangerine", quantity: 1, price: 3.00 },
  { id: 3, title: "Raspberry", quantity: 3, price: 10.00 },
];

const Page = () => {
  const handleProceed = () => {
    // Add functionality to handle proceeding (e.g., navigate to payment)
    console.log("Proceed to next step");
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Order Summary</h1>
      <div className="bg-white p-4 rounded shadow">
        {orders.map(order => (
          <div key={order.id} className="flex justify-between mb-2">
            <div>
              <b>{order.title}</b> x {order.quantity}
            </div>
            <div>${(order.price * order.quantity).toFixed(2)}</div>
          </div>
        ))}
        <div className="mt-4 flex justify-end">
          <button
            onClick={handleProceed}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Proceed
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
