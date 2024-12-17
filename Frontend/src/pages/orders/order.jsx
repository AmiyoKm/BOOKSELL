

import React, { useContext, useEffect, useState } from 'react'
import { ChevronRightIcon } from 'lucide-react'
import axios from 'axios'
import { OrderContext } from '../../contexts/GlobalContextProvider'



const Orders= () => {
  const {currentUser} = useContext(OrderContext)
    const [data, setData] = useState([])
   const getBooks=() =>{

   }

    useEffect(()=> {
        const fetchOrders =async()=>{
            try {
                const response = await axios.get(`http://localhost:5000/api/order/${currentUser._id}`)
                setData(response.data)
                console.log(response)
            } catch (error) {
                console.log(error)
            }
        }
        fetchOrders()
    },[])


  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Your Orders</h1>
      <div className="space-y-6">
        {data.map((order) => (
          <div key={order._id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold text-gray-800">Order #{order._id}</h2>
                <span className="text-sm text-gray-600">Ordered At:  {new Date(order.createdAt).toLocaleString('en-US', {
                    day: '2-digit',
                    month: 'long',
                    year: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                    hour12: true,
                    timeZone: 'Asia/Dhaka'
                  })}</span>
              </div>
              <div className="mt-2 flex justify-between items-center">
                <span className="text-lg font-medium text-gray-800">
                  ${order.totalPrice.toFixed(2)}
                </span>
                 <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                  order.status === 'Pending' ? 'bg-yellow-200 text-yellow-800' :
                  order.status === 'Shipped' ? 'bg-blue-200 text-blue-800' :
                  'bg-green-200 text-green-800'
                }`}>
                  Pending
                </span> 
              </div>
            </div>
            {/* <div className="px-6 py-4">
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Items</h3>
              <ul className="space-y-2">
                {order.items.map((item) => (
                  <li key={item.id} className="flex justify-between items-center">
                    <span className="text-gray-800">{item.name}</span>
                    <div className="flex items-center">
                      <span className="text-gray-600 mr-4">x{item.quantity}</span>
                      <span className="font-medium text-gray-800">${item.price.toFixed(2)}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div> */}
            <div className="px-6 py-4 bg-gray-50 flex justify-end">
              <button className="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200">
                View Details
                <ChevronRightIcon className="w-5 h-5 ml-1" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Orders