import React from "react";
import { motion } from "framer-motion";

export const PhoneFrame = ({ children, screenshot }) => {
  return (
    <div className="lg:max-w-120 xl:max-w-70 relative mx-auto w-full max-w-60">
      <motion.div
        whileHover={{ y: -10 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="aspect-9/19.5 lg:border-12 relative z-20 w-full overflow-hidden rounded-[2.5rem] border-[6px] border-slate-900 bg-slate-900 shadow-2xl lg:rounded-[3.5rem] xl:rounded-[2.8rem] xl:border-8"
      >
        {/* Notch / Dynamic Island Style */}
        <div className="absolute left-1/2 top-0 z-40 h-4 w-20 -translate-x-1/2 rounded-b-xl bg-slate-900 lg:h-8 lg:w-28 xl:h-5 xl:w-20"></div>

        {/* Screen */}
        <div className="relative h-full w-full overflow-hidden rounded-[1.8rem] bg-white pt-4 lg:rounded-[2.8rem] xl:rounded-[2.2rem]">
          <img
            src={screenshot}
            alt="App Screenshot"
            className="h-full w-full object-cover object-top"
          />
          <div className="absolute inset-0 z-30">{children}</div>     
        </div>
      </motion.div>
      {/* Buttons (Volume & Power) - Skala disesuaikan untuk LG */}
      <div className="absolute -left-1 top-20 h-8 w-1 rounded-l-md bg-slate-800 lg:-left-2 lg:top-32 lg:h-20 lg:w-1.5 xl:-left-1 xl:top-24 xl:h-12" />
      <div className="absolute -right-1 top-28 h-12 w-1 rounded-r-md bg-slate-800 lg:-right-2 lg:top-48 lg:h-28 lg:w-1.5 xl:-right-1 xl:top-32 xl:h-16" />
      {/* Glow Effect yang lebih dramatis */}
      <div className="absolute inset-0 -z-10 scale-95 bg-blue-500/10 blur-[60px] lg:blur-[100px]" />
    </div>
  );
};
