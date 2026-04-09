import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { PhoneFrame } from "../../components/assets/phoneFrame/PhoneFrame";
import { FaArrowLeft, FaHome } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export const HowItWorks = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);

  const steps = [
    {
      step: "STEP 01",
      title: "MCP Perencanaan Jadwal",
      desc: "Menyusun jadwal kerja cleaning secara terstruktur untuk setiap area dan periode tertentu.",
      image: "/step/step01.png",
      bgColor: "text-sky-400",
    },
    {
      step: "STEP 02",
      title: "Penugasan Operasional",
      desc: "Menugaskan pekerjaan kepada petugas sesuai jadwal dan kebutuhan operasional.",
      image: "/step/step02.png",
      bgColor: "text-sky-400",
    },
    {
      step: "STEP 03",
      title: "Monitoring Real-time",
      desc: "Memantau status kebersihan dan kinerja petugas secara langsung melalui dashboard.",
      image: "/step/step03.png",
      bgColor: "text-sky-400",
    },
    {
      step: "STEP 04",
      title: "Evaluasi Data-Driven",
      desc: "Melakukan evaluasi berbasis data untuk meningkatkan kualitas dan efisiensi kerja.",
      image: "/step/step04.png",
      bgColor: "text-sky-400",
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-white px-6 py-8 font-sans lg:px-16 lg:py-24 xl:px-10 xl:py-16">
      {/* 1. Background Decor - Ditaruh di luar Card supaya tidak kena overflow-hidden */}
      <div className="pointer-events-none absolute -left-20 -top-20 h-80 w-80 rounded-full bg-sky-200 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-sky-200 blur-[120px]" />

      {/* Header Halaman */}
      <div className="mb-10 text-center lg:mb-20 xl:mb-16">
        <h1 className="text-primary text-2xl font-black tracking-tight lg:text-6xl xl:text-3xl">
          HOW IT WORKS
        </h1>
        <p className="font-semi-bold mt-4 text-sm text-slate-500 lg:mt-8 lg:text-4xl xl:mt-2 xl:text-lg">
          Alur kerja SHELIA dalam mengelola operasional cleaning
        </p>
      </div>

      {/* Container Step */}
      <div className="mx-auto flex max-w-5xl flex-col gap-20 lg:gap-40 xl:gap-20">
        {steps.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className={`flex flex-col items-center gap-10 lg:flex-row ${
              index % 2 !== 0 ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* Bagian Teks */}
            <div className="flex-1 space-y-4 text-left">
              <span className="text-primary inline-block rounded-full bg-blue-200 px-6 py-2 text-sm font-bold lg:text-2xl xl:text-lg">
                {item.step}
              </span>
              <h2
                className={`text-2xl font-black leading-tight xl:text-5xl ${item.bgColor} lg:text-6xl`}
              >
                {item.title.split(" ").map((word, i) => (
                  <span
                    key={i}
                    className={i === 0 ? "text-primary block" : "block"}
                  >
                    {word}{" "}
                  </span>
                ))}
              </h2>
              <p className="max-w-md text-sm font-bold leading-relaxed text-slate-500 lg:text-4xl xl:text-xl">
                {item.desc}
              </p>
            </div>

            {/* Phone Frame Section */}
            <div className="flex w-full flex-1 justify-center">
              <div className="max-w-62.5 lg:max-w-100 xl:max-w-65 w-full">
                <PhoneFrame screenshot={item.image} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Navigation Bar Bawah */}
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
