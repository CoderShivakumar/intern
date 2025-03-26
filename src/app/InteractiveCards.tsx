
import { useState } from "react";
import { motion } from "framer-motion";

export default function InteractiveCards() {
  return (
    <div className="flex justify-center items-center min-h-screen gap-16 bg-blue-100 p-6">
      {/* Rotate Clockwise */}
      <motion.div
        className="w-40 h-60 bg-blue-500 rounded-2xl flex justify-center items-center shadow-lg text-white text-xl font-bold text-center"
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.9 }}
      >
        Rotate Clockwise
      </motion.div>

      {/* Rotate Counterclockwise */}
      <motion.div
        className="w-40 h-60 bg-green-500 rounded-2xl flex justify-center items-center shadow-lg text-white text-xl font-bold text-center"
        whileHover={{ rotate: -360 }}
        transition={{ duration: 0.9 }}
      >
        Rotate Anticlockwise
      </motion.div>

      {/* Flip */}
      <motion.div
        className="w-40 h-60 bg-red-500 rounded-2xl flex justify-center items-center shadow-lg text-white text-xl font-bold text-center"
        whileHover={{ scale: 1.2, rotateY: 180 }}
        transition={{ duration: 0.9 }}
      >
        Flip
      </motion.div>
    </div>
  );
}
