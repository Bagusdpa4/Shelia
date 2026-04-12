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

      {/* Header Logo - Center */}
      <motion.div
        // Animasi muncul sedikit dari bawah untuk konten utama
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="relative z-10 flex flex-col items-center text-center"
      >
        {/* <div className="lg:mb-30 mb-12 flex w-full justify-center xl:mb-16">
          <img
            src="/Teks Sellgo.png"
            alt="SellGo Logo"
            className="h-auto w-[40%] lg:w-[60%] xl:w-[20%]"
          />
        </div> */}

        {/* Main Container */}
        <div className="mb-10 text-center lg:mb-20 xl:mb-16">
          <h1 className="text-primary text-2xl font-black uppercase tracking-tight lg:text-7xl xl:text-3xl">
            Request Demo
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
            <div className="absolute left-4 top-4 h-6 w-6 rounded-tl-lg border-l-4 border-t-4 border-slate-200 lg:h-12 lg:w-12" />
            <div className="absolute right-4 top-4 h-6 w-6 rounded-tr-lg border-r-4 border-t-4 border-slate-200 lg:h-12 lg:w-12" />
            <div className="absolute bottom-4 left-4 h-6 w-6 rounded-bl-lg border-b-4 border-l-4 border-slate-200 lg:h-12 lg:w-12" />
            <div className="absolute bottom-4 right-4 h-6 w-6 rounded-br-lg border-b-4 border-r-4 border-slate-200 lg:h-12 lg:w-12" />

            <img
              src="/qr-code.png"
              alt="QR Code"
              className="lg:h-120 lg:w-120 h-40 w-40 object-contain xl:h-56 xl:w-56"
            />
          </div>
          <span className="mt-6 text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500 lg:mt-10 lg:text-3xl xl:text-sm">
            Scan with your camera app
          </span>
        </div>

        {/* Sales Contact Card */}
        <div className="mt-12 flex w-full max-w-sm items-center gap-4 rounded-2xl border border-slate-100 bg-[#DFE0FF] p-4 text-left lg:mt-20 lg:max-w-6xl lg:gap-8 lg:p-8 xl:mt-10 xl:max-w-md xl:gap-4 xl:p-4">
          <div className="bg-primary lg:h-30 lg:w-30 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-white lg:rounded-2xl xl:h-12 xl:w-12">
            <FaPhoneAlt className="text-sm lg:text-5xl xl:text-lg" />
          </div>
          <div>
            <h4 className="text-primary text-[10px] font-bold lg:text-3xl xl:text-sm">
              Or speak directly with our sales representative
            </h4>
            <p className="text-[9px] font-medium text-black lg:text-3xl xl:text-[11px]">
              Our team is happy to give you a live walkthrough of the platform.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Bottom Navigation */}
      <div className="mt-16 flex w-full justify-center lg:mt-24 xl:mt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex items-center gap-6 p-3 lg:gap-8 lg:p-6 xl:gap-4 xl:p-4"
        >
          {/* Tombol Kembali */}
          <button
            onClick={() => navigate(-1)}
            className="group flex cursor-pointer items-center gap-4 rounded-full border border-slate-100 bg-white px-6 py-2 shadow-lg transition-all hover:scale-110 hover:bg-slate-50 lg:px-12 lg:py-8 xl:px-4 xl:py-4"
          >
            <FaArrowLeft className="group-hover:text-primary text-lg text-slate-500 lg:text-4xl xl:text-xl" />
            <span className="group-hover:text-primary text-sm font-bold uppercase text-slate-500 lg:text-2xl xl:text-base">
              Kembali
            </span>
          </button>

          {/* Divider vertikal tipis agar mirip desain referensi */}
          <div className="h-8 w-1 bg-slate-200 lg:h-16" />

          {/* Tombol Home */}
          <button
            onClick={() => navigate("/")}
            className="bg-primary/10 text-primary hover:bg-primary flex h-12 w-12 cursor-pointer items-center justify-center rounded-full transition-all duration-300 hover:scale-110 hover:text-white lg:h-24 lg:w-24 xl:h-14 xl:w-14"
          >
            <FaHome className="text-xl lg:text-5xl xl:text-2xl" />
          </button>
        </motion.div>
      </div>
    </div>
  );
};
