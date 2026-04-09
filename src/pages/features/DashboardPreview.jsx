import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaHome } from "react-icons/fa";

export const DashboardPreview = () => {
  const navigate = useNavigate();

  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-white py-10 font-sans">
      {/* Background Decor - Lingkaran Blur Halus */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-96 w-96 rounded-full bg-blue-300/20 blur-[80px]" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-96 w-96 rounded-full bg-blue-300/20 blur-[80px]" />

      <div className="flex w-full max-w-6xl flex-col items-center px-6">
        {/* Header Section */}
        <header className="mb-10 text-center lg:mb-20 xl:mb-10">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-primary text-2xl font-black tracking-tight lg:text-7xl xl:text-4xl"
          >
            Dashboard Preview
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-sm font-semibold text-sky-400 lg:mt-8 lg:text-4xl xl:mt-2 xl:text-xl"
          >
            Pantau operasional secara real-time dalam satu tampilan
          </motion.p>
        </header>

        {/* 1. TOP BAR BROWSER (DI DALAM MOTION) */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          // rounded-t-3xl: Hanya melengkung di bagian atas
          // border-b-0: Menghilangkan garis bawah agar tidak tumpang tindih dengan gambar
          className="relative w-full max-w-5xl rounded-t-3xl border border-b-0 border-slate-300 bg-slate-50/50 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]"
        >
          <div className="flex items-center gap-2 px-5 py-4">
            <div className="flex gap-2">
              <div className="h-3 w-3 rounded-full bg-red-400" />
              <div className="h-3 w-3 rounded-full bg-yellow-400" />
              <div className="h-3 w-3 rounded-full bg-green-400" />
            </div>
            <div className="mx-auto flex h-7 w-2/3 items-center justify-center rounded-lg border border-slate-200 bg-white px-4 text-[11px] font-medium text-slate-400 shadow-sm">
              shelia.management.app/dashboard/real-time
            </div>
          </div>
        </motion.div>

        {/* 2. GAMBAR DASHBOARD (DI LUAR MOTION) */}
        <div className="relative w-full max-w-5xl overflow-hidden rounded-b-3xl border border-slate-300 bg-white shadow-xl">
          <img
            src="/features/Dashboard-Preview.png"
            alt="Dashboard SHELIA Web"
            className="block h-auto w-full"
          />
        </div>

        {/* Info Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-20 max-w-4xl text-center"
        >
          <p className="text-sm font-semibold leading-relaxed text-black lg:text-3xl xl:text-2xl">
            Semua data operasional ditampilkan secara ringkas dan real-time
            untuk membantu pengambilan keputusan lebih cepat. SHELIA dirancang
            untuk memberikan transparansi penuh atas kinerja tim kebersihan
            Anda.
          </p>
        </motion.div>

        {/* Floating Navigation Navigation */}
        <div className="mt-16 flex w-full justify-center lg:mt-24 xl:mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex items-center gap-6 p-3 lg:gap-8 lg:p-6 xl:gap-4 xl:p-4"
          >
            <button
              onClick={() => navigate(-1)}
              className="group flex cursor-pointer items-center gap-4 rounded-full border border-slate-100 bg-white px-6 py-2 shadow-lg transition-all hover:scale-110 hover:bg-slate-50 lg:px-12 lg:py-8 xl:px-4 xl:py-4"
            >
              <FaArrowLeft className="group-hover:text-primary text-lg text-slate-500 lg:text-4xl xl:text-xl" />
              <span className="group-hover:text-primary text-sm font-bold uppercase text-slate-500 lg:text-2xl xl:text-base">
                Kembali
              </span>
            </button>

            <div className="h-8 w-1 bg-slate-200 lg:h-16" />

            <button
              onClick={() => navigate("/")}
              className="bg-primary/10 text-primary hover:bg-primary flex h-12 w-12 cursor-pointer items-center justify-center rounded-full transition-all duration-300 hover:scale-110 hover:text-white lg:h-24 lg:w-24 xl:h-14 xl:w-14"
            >
              <FaHome className="text-xl lg:text-5xl xl:text-2xl" />
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
