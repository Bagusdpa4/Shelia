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
      title: "Start of Shift",
      subtitle: "Task Discovery",
      desc: "Staff members log in to the app and start their shift. The system then automatically displays a list of that day's assigned tasks, organized by location or worksite. This eliminates the need for time consuming manual briefings because staff members can view task priorities, completion deadlines, and special instructions.",
      images: "/step/step1.PNG",
    },
    {
      title: "Task",
      subtitle: "Execution",
      desc: "Task execution is tracked visually within the app. Personnel capture a 'before' image when starting an assignment and an 'after' image when completing it. These dual photos serve as proof that the area has been cleaned and the task is officially closed.",
      images: "/step/step2.PNG",
    },
    {
      title: "Material Management: ",
      subtitle: "Inventory Log",
      desc: "Staff members can record the amount of cleaning chemicals and work supplies used in this menu. The data is linked directly to the central system, which monitors the remaining stock in real time and sends out restocking alerts before supplies run out.",
      images: "/step/step3.jpg",
    },
    {
      title: "Task Completion: ",
      subtitle: "Proof of Work",
      desc: "After cleaning the area, the system requires photos to be taken with the app's camera. These photos provide visual evidence that operational standards have been met and prevent data manipulation.",
      images: "/step/step4.jpg",
    },
    {
      title: "End of Day: ",
      subtitle: "Automated Reporting",
      desc: "As the shift comes to a close, staff no longer need to compile manual reports on paper. Instead, the system automatically summarizes all activities into a single dashboard page.",
      images: "/step/step5.PNG",
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-white px-6 py-8 font-sans lg:px-16 lg:py-24 xl:px-10 xl:py-16">
      {/* 1. Background Decor - Ditaruh di luar Card supaya tidak kena overflow-hidden */}
      <div className="pointer-events-none absolute -left-20 -top-20 h-80 w-80 rounded-full bg-sky-200 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-sky-200 blur-[120px]" />

      {/* Top Navigation */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 mb-8 flex w-full items-center justify-between lg:mb-16 xl:mb-12"
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

      {/* Header Halaman */}
      {/* <div className="mb-4 flex w-full justify-center lg:mb-20 xl:mb-10">
        <img
          src="/Teks Sellgo.png"
          alt="Teks Sellgo Logo"
          className="h-auto w-[40%] object-contain lg:w-[50%] xl:w-[15%]"
        />
      </div> */}
      <div className="mb-10 text-center lg:mb-20 xl:mb-16">
        <h1 className="text-primary text-2xl font-black tracking-tight lg:text-7xl xl:text-3xl">
          HOW THIS APP WORK
        </h1>
        <p className="mt-4 text-sm font-medium text-black lg:mt-8 lg:text-[34px] xl:mt-2 xl:text-lg">
          The Shelter Cleaning System digitalize all operational routines, from
          the start of the shift to the end-of-day report.
        </p>
      </div>

      {/* Container Step */}
      <div className="mx-auto flex max-w-5xl flex-col gap-20 lg:gap-28 xl:gap-0">
        {steps.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className={`flex flex-col items-center lg:flex-row ${
              index % 2 !== 0 ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* Bagian Teks */}
            <div className="flex-1 space-y-4 text-left">
              <div className="space-y-1">
                <h2 className="text-primary text-3xl font-extrabold leading-tight lg:text-7xl xl:text-5xl">
                  {item.title}
                </h2>
                <p className="text-lg font-extrabold leading-tight text-sky-400 lg:text-6xl xl:text-2xl">
                  {item.subtitle}
                </p>
              </div>
              <p className="max-w-md text-sm text-justify font-semibold leading-relaxed text-black lg:text-[33px] xl:text-xl">
                {item.desc}
              </p>
            </div>

            {/* Phone Frame Section */}
            <div className="flex w-full flex-1 justify-center">
              <div className="max-w-62.5 lg:max-w-100 xl:max-w-80 w-full">
                <PhoneFrame screenshot={item.images} index={index} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
