import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowLeft, FaHome, FaPhoneAlt } from "react-icons/fa";

export const RequestDemo = () => {
  const navigate = useNavigate();

  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-white px-6 py-8 font-sans lg:px-20 lg:py-16">
      {/* Background Decor */}
      <div className="pointer-events-none absolute -left-20 -top-20 h-80 w-80 rounded-full bg-sky-200 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-sky-200 blur-[120px]" />

      {/* Top Navigation */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 mb-8 flex w-full items-center justify-between lg:mb-16 xl:mb-10"
      >
        {/* Tombol Kembali - kiri atas */}
        <button
          onClick={() => navigate(-1)}
          className="hover:bg-primary border-primary group flex cursor-pointer items-center gap-2 rounded-full border bg-white px-4 py-2 shadow-lg transition-all hover:scale-110 lg:gap-4 lg:px-8 lg:py-4 xl:gap-3 xl:px-6 xl:py-3"
        >
          <FaArrowLeft className="text-primary text-base group-hover:text-white lg:text-4xl xl:text-lg" />
          <span className="text-primary text-sm font-bold uppercase group-hover:text-white lg:text-3xl xl:text-base">
            Back
          </span>
        </button>

        {/* Tombol Home - kanan atas */}
        <button
          onClick={() => navigate("/")}
          className="bg-primary/10 text-primary hover:bg-primary flex h-10 w-10 cursor-pointer items-center justify-center rounded-full transition-all duration-300 hover:scale-110 hover:text-white lg:h-24 lg:w-24 xl:h-12 xl:w-12"
        >
          <FaHome className="text-lg lg:text-5xl xl:text-xl" />
        </button>
      </motion.div>

      {/* Header Logo - Center */}
      <motion.div
        // Animasi muncul sedikit dari bawah untuk konten utama
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="relative z-10 flex flex-col items-center pt-2 text-center lg:pt-20 xl:pt-4"
      >
        <div className="mb-12 mt-0 flex w-full justify-center lg:mb-20 lg:mt-20 xl:mb-6 xl:mt-0">
          <h1 className="text-primary text-2xl font-black tracking-tight lg:text-8xl xl:text-3xl">
            Shelter Cleaning
          </h1>
        </div>

        {/* Main Container */}
        <div className="mb-10 text-center lg:mb-20 xl:mb-12">
          <h1 className="text-2xl font-black uppercase tracking-tight text-sky-500 lg:text-6xl xl:text-3xl">
            Demo Request
          </h1>
          <p className="mt-4 text-sm font-semibold text-black lg:mt-8 lg:text-4xl xl:mt-2 xl:text-lg">
            Ready to transform your operations? Book a demo with our experts to
            see how our product can drive growth for your business
          </p>
        </div>

        {/* QR Code Area */}
        <div className="relative flex flex-col items-center">
          <div className="relative rounded-3xl bg-white p-6 shadow-2xl lg:p-16 xl:p-8">
            {/* Siku Dekorasi (Corner Frame) */}
            <div className="border-primary absolute left-4 top-4 h-6 w-6 rounded-tl-lg border-l-4 border-t-4 lg:h-20 lg:w-20" />
            <div className="border-primary absolute right-4 top-4 h-6 w-6 rounded-tr-lg border-r-4 border-t-4 lg:h-20 lg:w-20" />
            <div className="border-primary absolute bottom-4 left-4 h-6 w-6 rounded-bl-lg border-b-4 border-l-4 lg:h-20 lg:w-20" />
            <div className="border-primary absolute bottom-4 right-4 h-6 w-6 rounded-br-lg border-b-4 border-r-4 lg:h-20 lg:w-20" />

            <img
              src="/qr-code.png"
              alt="QR Code"
              className="lg:h-120 lg:w-120 h-40 w-40 object-contain xl:h-60 xl:w-60"
            />
          </div>
          <span className="mt-6 text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500 lg:mt-10 lg:text-3xl xl:text-sm">
            Scan with your camera app
          </span>
        </div>
      </motion.div>
    </div>
  );
};
