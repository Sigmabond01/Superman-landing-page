"use client";
import React from "react";
import { motion } from "motion/react";



const transition = {
  type: "spring" as const,
  mass: 0.5,
  damping: 11.5,
  stiffness: 200,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children
}) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative ">
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-blue-900 hover:text-red-600 font-bold dark:text-blue-300 dark:hover:text-red-400">
        {item}
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}>
          {active === item && (
            <div
              className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4">
              <motion.div
                transition={transition}
                // layoutId ensures smooth animation
                layoutId="active"
                className="bg-gradient-to-br from-blue-50 to-red-50 dark:from-blue-950 dark:to-red-950 backdrop-blur-sm rounded-2xl overflow-hidden border-2 border-blue-600/30 dark:border-blue-400/30 shadow-xl shadow-blue-500/20">
                <motion.div
                  // layout ensures smooth animation
                  layout
                  className="w-max h-full p-4">
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)}
      className="relative font-ccultimatum border-2 border-blue-600/50 dark:bg-gradient-to-bl dark:from-blue-950 dark:to-red-950 dark:border-blue-400/30 bg-gradient-to-r from-blue-100 to-red-100 shadow-lg shadow-blue-500/30 px-6 py-3 rounded-full"
    >
      <div className="flex items-center justify-between w-full">
        <div className="pl-2">
          <img
            src="/superman-shield-symbol.png"
            alt="Logo"
            className="h-10 w-auto object-contain"
          />
        </div>

        <div className="flex items-center space-x-14">
          {children}
        </div>
      </div>
    </nav>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  src
}) => {
  return (
    <a href={href} className="flex space-x-2 hover:bg-blue-50 dark:hover:bg-blue-900/20 p-2 rounded-lg transition-colors">
      <img
        src={src}
        width={140}
        height={70}
        alt={title}
        className="shrink-0 rounded-md shadow-2xl border border-blue-300 dark:border-blue-600" />
      <div>
        <h4 className="text-xl font-bold mb-1 text-blue-900 dark:text-blue-300">
          {title}
        </h4>
        <p className="text-blue-700 text-sm max-w-[10rem] dark:text-blue-400">
          {description}
        </p>
      </div>
    </a>
  );
};

export const HoveredLink = ({
  children,
  ...rest
}) => {
  return (
    <a
      {...rest}
      className="text-blue-700 dark:text-blue-300 hover:text-red-600 dark:hover:text-red-400 font-medium transition-colors">
      {children}
    </a>
  );
};