import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { PhoneFrame } from "../../components/assets/phoneFrame/PhoneFrame";
import { FeatureTabs } from "../../components/assets/features/FeatureTabs";
import {
  FaArrowLeft,
  FaHome,
  FaCheckCircle,
  FaRegFileAlt,
} from "react-icons/fa";
import { MdOutlineTask, MdAssignment } from "react-icons/md";
import { FiUsers } from "react-icons/fi";
import { FaBoxArchive } from "react-icons/fa6";

export const AllFeatures = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("Cleaning Schedule");

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);

  const features = [
    {
      id: "Cleaning Schedule",
      icon: <FaRegFileAlt />,
      contents: [
        {
          description:
            "The master cleaning schedule manages cleaning service activities by work area. This feature displays a list of routine tasks in calendar format.",
          image: "/features/feature1.PNG",
          list: [
            "Structured Annual Planning",
            "Monitoring Progress",
            "Import from Excel",
            "Effortless Evaluation",
          ],
        },
      ],
    },
    {
      id: "Logistic Request",
      icon: <FaBoxArchive />,
      contents: [
        {
          description:
            "Manage the workflow of operational goods requests from sites in a more structured manner, starting from needs submission and approval process. With this feature, every request is clearly logged, its status can be monitored, and the distribution process becomes more transparent.",
          image: "/features/feature2.jpg",
          // list: [
          //   "Structured Annual Planning",
          //   "Monitoring Progress",
          //   "Import from Excel",
          //   "Effortless Evaluation",
          // ],
        },
      ],
    },
    {
      id: "Direct Task",
      icon: <MdAssignment />,
      contents: [
        {
          description:
            "This feature records additional work outside of the regular schedule. For  direct assignments or area with specific complaints. Users can view a list of additional tasks that need to be completed and immediately assign them to cleaning service staff.",
          image: "/features/feature3.jpg",
          // list: [
          //   "Structured Annual Planning",
          //   "Monitoring Progress",
          //   "Import from Excel",
          //   "Effortless Evaluation",
          // ],
        },
      ],
    },
    {
      id: "Reliever",
      icon: <FiUsers />,
      contents: [
        {
          description:
            "This feature manages substitute staff when primary staff members are unable to attend, ensuring that operations and work schedules continue without any gaps in staffing.",
          image: ["/features/feature4.jpg", "/features/feature4-1.jpg"],
          // list: [
          //   "Structured Annual Planning",
          //   "Monitoring Progress",
          //   "Import from Excel",
          //   "Effortless Evaluation",
          // ],
        },
      ],
    },
    {
      id: "Stock Opname",
      icon: <MdOutlineTask />,
      contents: [
        {
          description:
            "Monitor the availability of operational inventory more efficiently. This feature allows users to view available inventory levels, record outgoing items, and track inventory movement history.",
          image: "/features/feature5.jpg",
          // list: [
          //   "Structured Annual Planning",
          //   "Monitoring Progress",
          //   "Import from Excel",
          //   "Effortless Evaluation",
          // ],
        },
      ],
    },
  ];

  const currentData = features.find((f) => f.id === activeTab);

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-white py-12 font-sans">
      {/* Background Decor - Lingkaran Blur Halus */}
      <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-sky-200 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-sky-200 blur-[120px]" />

      {/* Top Navigation */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex w-full items-center justify-between px-6 pt-6 lg:px-12 xl:px-8"
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

      <div className="flex w-full max-w-7xl flex-col items-center">
        {/* Header Section */}
        <div className="px-10 py-6 text-center lg:py-20 xl:py-6">
          <h1 className="text-primary py-2 text-2xl font-black uppercase tracking-tight lg:text-7xl xl:text-4xl">
            All Features
          </h1>
          <p className="mt-4 text-sm font-semibold text-slate-500 lg:text-4xl xl:text-lg">
            A digital cleaning management system for full transparency,
            efficiency, and quality control.
          </p>
        </div>

        {/* Dynamic Tab Navigation Component */}
        <div className="w-full overflow-hidden">
          <FeatureTabs
            items={features}
            activeTab={activeTab}
            onTabChange={setActiveTab}
          />
        </div>

        {/* Content Section */}
        <div className="flex w-full items-center justify-center bg-slate-100 p-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="flex w-full flex-col gap-20"
            >
              {currentData.contents.map((content, index) => (
                <div
                  key={index}
                  className="flex w-full flex-col items-center gap-10 lg:flex-row lg:items-center lg:gap-4"
                >
                  {/* LEFT - Phone Frame */}
                  <div className="flex w-full flex-1 justify-center">
                    <div className="max-w-62.5 lg:max-w-100 w-full xl:max-w-80">
                      <PhoneFrame screenshot={content.image} />
                    </div>
                  </div>

                  {/* RIGHT - Details */}
                  <div className="w-full flex-1 space-y-5 text-left">
                    {/* Title = activeTab */}
                    <h2 className="text-primary text-4xl font-black leading-tight lg:text-8xl xl:text-5xl">
                      {activeTab}
                    </h2>

                    {/* Description */}
                    <p className="text-justify text-sm font-semibold leading-relaxed text-slate-500 lg:text-4xl xl:text-base">
                      {content.description}
                    </p>

                    {/* List - hanya tampil jika ada */}
                    {content.list && (
                      <div className="space-y-3 pt-2">
                        {content.list.map((item, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
                          >
                            <FaCheckCircle className="text-primary shrink-0 text-lg lg:text-2xl xl:text-xl" />
                            <span className="text-sm font-semibold text-black lg:text-3xl xl:text-lg">
                              {item}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
