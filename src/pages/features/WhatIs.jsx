import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowLeft, FaHome, FaRobot } from "react-icons/fa";
import { AiOutlineGlobal } from "react-icons/ai";
import { IoReceipt } from "react-icons/io5";
import { CiMapPin } from "react-icons/ci";
import { CiCircleCheck, CiCircleMore } from "react-icons/ci";
import { CgSandClock } from "react-icons/cg";

export const WhatIs = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  const coreValues = [
    {
      title: "Digitalization and Operational Transparency",
      description:
        "Digitizes daily cleaning activities, making operations more visible, structured, and easier to monitor.",
      icon: <AiOutlineGlobal />,
      bgIcon: "bg-slate-200",
    },
    {
      title: "Optimizing Response Speed",
      description:
        "The system helps teams respond faster to urgent requests and operational issues with better coordination.",
      icon: <FaRobot />,
      bgIcon: "bg-slate-200",
    },
    {
      title: "Logistics Control Accuracy",
      description:
        "Cleaning supplies and equipment can be monitored more accurately to support efficient and well-managed operations.",
      icon: <IoReceipt />,
      bgIcon: "bg-slate-200",
    },
    {
      title: "Cleaning Staff Management",
      description:
        "Task assignments become more organized, helping create a more disciplined and professional service.",
      icon: <CiMapPin />,
      bgIcon: "bg-slate-200",
    },
  ];

  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-white px-6 py-8 font-sans lg:px-10 lg:py-16 xl:px-4 xl:py-10">
      {/* Background Decor */}
      <div className="pointer-events-none absolute -left-20 -top-20 h-80 w-80 rounded-full bg-sky-200 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-sky-200 blur-[120px]" />

      {/* Top Navigation */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 mb-8 flex w-full items-center justify-between lg:mb-16 xl:mb-12"
      >
        <button
          onClick={() => navigate(-1)}
          className="hover:bg-primary border-primary group flex cursor-pointer items-center gap-2 rounded-full border bg-white px-4 py-2 shadow-lg transition-all hover:scale-110 lg:gap-4 lg:px-8 lg:py-4 xl:gap-3 xl:px-6 xl:py-3"
        >
          <FaArrowLeft className="text-primary text-base group-hover:text-white lg:text-4xl xl:text-lg" />
          <span className="text-primary text-sm font-bold uppercase group-hover:text-white lg:text-3xl xl:text-base">
            Back
          </span>
        </button>
        <button
          onClick={() => navigate("/")}
          className="bg-primary/10 text-primary hover:bg-primary flex h-10 w-10 cursor-pointer items-center justify-center rounded-full transition-all duration-300 hover:scale-110 hover:text-white lg:h-24 lg:w-24 xl:h-12 xl:w-12"
        >
          <FaHome className="text-lg lg:text-5xl xl:text-xl" />
        </button>
      </motion.div>

      {/* Main Container */}
      <div className="mx-auto w-full max-w-5xl grow">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col space-y-12"
        >
          {/* HERO SECTION - Title kiri, Dashboard card kanan */}
          <section className="flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:gap-2 xl:gap-6">
            {/* Kiri: Title + Subtitle + Desc */}
            <div className="flex flex-1 flex-col gap-3">
              <h1 className="text-3xl font-black text-black lg:text-7xl xl:text-4xl">
                Shelter Cleaning
              </h1>
              <p className="text-primary text-base font-bold leading-tight lg:text-4xl xl:text-lg">
                Solutions for Managing Cleaning Service Operations
              </p>
              <p className="lg:max-w-120 mt-2 max-w-sm text-justify text-sm font-semibold leading-relaxed text-slate-500 lg:text-3xl xl:max-w-xl xl:text-xl">
                A app that can helps companies ensure their cleaning services
                are not only carried out but also properly managed, documented,
                and maintained at a consistent quality level.
              </p>
            </div>

            {/* Kanan: Dashboard Card */}
            <div className="w-full flex-1 lg:max-w-3xl xl:max-w-md">
              <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-xl">
                {/* Header */}
                <div className="mb-4 flex items-center justify-between">
                  <p className="text-sm font-bold text-slate-700 lg:text-3xl xl:text-base">
                    Today's Schedule
                  </p>
                  <span className="text-primary text-base lg:text-4xl xl:text-lg">
                    📅
                  </span>
                </div>

                {/* Schedule Items */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3 rounded-xl border border-blue-100 bg-blue-50 p-3">
                    <div className="hidden h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-200 text-sm font-bold text-green-800 lg:flex lg:h-14 lg:w-14 lg:text-4xl xl:flex xl:h-8 xl:w-8 xl:text-2xl">
                      <CiCircleCheck />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs font-semibold text-slate-700 lg:text-2xl xl:text-xs">
                        Main Lobby Sanitization
                      </p>
                      <p className="text-xs text-slate-700 lg:text-xl xl:text-xs">
                        Completed at 08:30 AM
                      </p>
                    </div>
                    <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs font-bold text-green-700 lg:text-lg xl:text-xs">
                      COMPLETED
                    </span>
                  </div>

                  <div className="flex items-center gap-3 rounded-xl border border-blue-100 bg-blue-50 p-3">
                    <div className="hidden h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-200 text-sm font-bold text-blue-800 lg:flex lg:h-14 lg:w-14 lg:text-4xl xl:flex xl:h-8 xl:w-8 xl:text-2xl">
                      <CgSandClock />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs font-bold text-slate-700 lg:text-2xl xl:text-xs">
                        West Wing Glass Care
                      </p>
                      <p className="text-xs text-slate-700 lg:text-xl xl:text-xs">
                        Scheduled for 10:15 AM
                      </p>
                    </div>
                    <span className="rounded-full bg-blue-500 px-2 py-0.5 text-xs font-semibold text-white lg:text-lg xl:text-xs">
                      PROGRESS
                    </span>
                  </div>

                  <div className="flex items-center gap-3 rounded-xl border border-blue-100 bg-blue-50 p-3">
                    <div className="hidden h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-200 text-sm font-bold text-slate-800 lg:flex lg:h-14 lg:w-14 lg:text-4xl xl:flex xl:h-8 xl:w-8 xl:text-2xl">
                      <CiCircleMore />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs font-bold text-slate-700 lg:text-2xl xl:text-xs">
                        Executive Suite Polishing
                      </p>
                      <p className="text-xs text-slate-700 lg:text-xl xl:text-xs">
                        Upcoming task
                      </p>
                    </div>
                    <span className="rounded-full bg-orange-100 px-2 py-0.5 text-xs font-bold text-orange-600 lg:text-lg xl:text-xs">
                      PENDING
                    </span>
                  </div>
                </div>

                {/* Stats Row */}
                <div className="mt-4 flex justify-between border-t border-slate-100 pt-4 text-center">
                  <div>
                    <p className="text-primary text-lg font-black lg:text-4xl xl:text-xl">
                      24
                    </p>
                    <p className="text-xs font-semibold uppercase text-slate-400 lg:text-xl xl:text-xs">
                      Staff Active
                    </p>
                  </div>
                  <div>
                    <p className="text-primary text-lg font-black lg:text-4xl xl:text-xl">
                      98%
                    </p>
                    <p className="text-xs font-semibold uppercase text-slate-400 lg:text-xl xl:text-xs">
                      Success Rate
                    </p>
                  </div>
                  <div>
                    <p className="text-primary text-lg font-black lg:text-4xl xl:text-xl">
                      142
                    </p>
                    <p className="text-xs font-semibold uppercase text-slate-400 lg:text-xl xl:text-xs">
                      Total Tasks
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CORE PILLARS */}
          <section className="space-y-4 rounded-2xl bg-slate-100 p-6">
            <span className="text-xs font-semibold uppercase tracking-widest text-slate-500 lg:text-3xl xl:text-base">
              Core Pillars
            </span>
            <div className="space-y-6 pt-10">
              {coreValues.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.1,
                    duration: 0.4,
                    ease: "easeOut",
                  }}
                  className="flex items-center gap-4 rounded-2xl border border-slate-400 bg-white px-5 py-6 shadow-xl"
                >
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center self-center rounded-xl lg:h-24 lg:w-24 xl:h-12 xl:w-12 ${item.bgIcon}`}
                  >
                    {React.cloneElement(item.icon, {
                      className: "text-lg lg:text-6xl xl:text-3xl text-black",
                    })}
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-primary text-sm font-bold lg:text-5xl xl:text-2xl">
                      {item.title}
                    </p>
                    <p className="text-bold text-sm leading-snug text-slate-500 lg:text-4xl xl:text-lg">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* CONCLUSION */}
          <section className="pb-20 text-left">
            <p className="text-primary text-justify text-xl font-bold leading-snug lg:text-5xl xl:text-2xl">
              Shelter Cleaning helps companies move from conventional cleaning
              operations into a more modern and controlled service model
            </p>
          </section>
        </motion.div>
      </div>
    </div>
  );
};
