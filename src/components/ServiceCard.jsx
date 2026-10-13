import React from "react"
import { motion } from "motion/react"

const ServiceCard = ({ service, index }) => {
  return (
    <div
    className="relative overflow-hidden max-w-lg m-2 sm:m-4 rounded-xl border border-gray-200
    dark:border-gray-700 shadow-2xl shadow-gray-100 dark:shadow-white/5 transition-all 
    duration-300 hover:scale-100 hover:-translate-y-1 hover:border-blue-500 transform-gpu">

      <div className="flex flex-1 items-center gap-10 p-8 transition-all rounded-[10px]
      bg-white dark:bg-gray-900 z-10 relative">

        <div className="bg-gray-100 dark:bg-gray-700 rounded-full">
          <img src={service.icon} alt=""
            className="max-w-24 bg-white dark:bg-gray-900 
            rounded-full m-2"
          />
        </div>

        <div className="flex-1">
          <h3 className="font-bold">{service.title}</h3>
          <p className="text-sm mt-2">{service.description}</p>
        </div>
      </div>
    </div>
  )
}

export default ServiceCard;
