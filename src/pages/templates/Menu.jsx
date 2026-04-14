import React from "react";
import { motion } from "framer-motion";
import { FaHome } from "react-icons/fa";
import { IoGridOutline, IoBulbSharp } from "react-icons/io5";
import { FaRocket, FaArrowLeft } from "react-icons/fa6";
import { HiChevronRight } from "react-icons/hi";
import { GiBroom } from "react-icons/gi";
import { useNavigate } from "react-router-dom";

export const Menu = () => {
  const navigate = useNavigate();

  const menuItems = [
    {
      title: "What is Shelter Cleaning ?",
      desc: "Discover our philosophy of clinical curation and meticulous environmental management.",
      icon: <GiBroom />,
      bgIcon: "bg-slate-200",
      path: "/what-is",
    },
    {
      title: "What this can do",
      desc: "Explore dynamic workflows designed to automate and elevate your operational standards.",
      icon: <IoBulbSharp />,
      bgIcon: "bg-slate-200",
      path: "/how-it-works",
    },
    {
      title: "All Features",
      desc: "A comprehensive overview of our platform capabilities and specialized modules.",
      icon: <IoGridOutline />,
      bgIcon: "bg-slate-200",
      path: "/all-features",
    },
    {
      title: "Request Demo",
      desc: "Transform your facility today. Get a tailored walkthrough of the SHELIA ecosystem.",
      icon: <FaRocket />,
      bgIcon: "bg-slate-200",
      path: "/req-demo",
    },
  ];

  return (
    <motion.div
      // Wrapper utama untuk transisi antar halaman
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7 }}
      className="relative flex min-h-screen w-full select-none flex-col items-center justify-center overflow-hidden bg-white p-6 font-sans"
    >
      {/* 1. Background Decor - Ditaruh di luar Card supaya tidak kena overflow-hidden */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-96 w-96 rounded-full bg-blue-300/20 blur-[80px]" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-96 w-96 rounded-full bg-blue-300/20 blur-[80px]" />

      {/* Container Menu Utama */}
      <motion.div
        // Animasi Slide Up yang lebih smooth
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: 0.8,
          ease: [0.16, 1, 0.3, 1], // Custom cubic-bezier untuk efek 'out-expo'
          delay: 0.1,
        }}
        className="relative z-10 w-full max-w-sm overflow-hidden p-0 backdrop-blur-md lg:max-w-5xl lg:p-8 xl:max-w-lg xl:p-4"
      >
        {/* Header Section */}
        <div className="py-6 text-center lg:py-20 xl:py-6">
          <h1 className="py-2 text-xl font-black tracking-tight text-black lg:py-4 lg:text-8xl xl:py-2 xl:text-3xl">
            Shelter Cleaning
          </h1>
          <p className="text-sm font-semibold text-slate-500 lg:text-4xl xl:text-lg">
            Experience Excellence in Curation. High-end precision and impeccable
            care for modern professional environments.
          </p>
        </div>

        {/* List Menu */}
        <div className="flex flex-col gap-0 lg:gap-10 xl:gap-4">
          {menuItems.map((item, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate(item.path)}
              className="group flex w-full cursor-pointer items-center justify-between rounded-[1.5rem] border border-slate-300 bg-white p-4 shadow-xl transition-all hover:shadow-md lg:rounded-[3rem] lg:p-8 xl:rounded-[2rem] xl:p-5"
            >
              <div className="flex items-center gap-4 lg:gap-8 xl:gap-6">
                <div
                  className={`lg:h-30 flex h-10 w-10 items-center justify-center rounded-xl lg:w-60 xl:h-12 xl:w-12 ${item.bgIcon}`}
                >
                  {React.cloneElement(item.icon, {
                    className: "text-lg xl:text-2xl text-primary lg:text-7xl",
                  })}
                </div>
                <div className="space-y-4 px-4 text-left">
                  <h3 className="text-base font-bold text-black lg:text-5xl lg:font-bold xl:text-lg xl:font-bold">
                    {item.title}
                  </h3>
                  <p className="text-xs font-semibold text-slate-500 lg:text-4xl xl:text-sm">
                    {item.desc}
                  </p>
                </div>
              </div>
              <HiChevronRight className="hidden text-slate-400 lg:block lg:text-9xl xl:block xl:text-2xl" />
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Navigation Bar Bawah */}
      <div className="mt-16 flex w-full justify-center lg:mt-12 xl:mt-10">
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
            className="border-primary hover:bg-primary group flex cursor-pointer items-center gap-4 rounded-full border bg-white px-6 py-2 shadow-lg transition-all hover:scale-110 lg:px-12 lg:py-8 xl:px-4 xl:py-4"
          >
            <FaArrowLeft className="text-primary text-base group-hover:text-white lg:text-4xl xl:text-lg" />
            <span className="text-primary text-sm font-bold uppercase group-hover:text-white lg:text-3xl xl:text-base">
              Back
            </span>
          </button>

          {/* Divider vertikal tipis agar mirip desain referensi */}
          <div className="bg-primary h-8 w-1 lg:h-16" />

          {/* Tombol Home */}
          <button
            onClick={() => navigate("/")}
            className="bg-primary/10 text-primary hover:bg-primary flex h-10 w-10 cursor-pointer items-center justify-center rounded-full transition-all duration-300 hover:scale-110 hover:text-white lg:h-24 lg:w-24 xl:h-12 xl:w-12"
          >
            <FaHome className="text-lg lg:text-5xl xl:text-xl" />
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
};
