import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { PhoneFrame } from "../../components/assets/phoneFrame/PhoneFrame";
import { FeatureTabs } from "../../components/assets/features/FeatureTabs";
import { FaArrowLeft, FaHome, FaCheckCircle } from "react-icons/fa";
import {
  MdDashboard,
  MdAssignment,
  MdInventory,
  MdFactCheck,
} from "react-icons/md";

export const AllFeatures = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("Dashboard");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      id: "Dashboard",
      icon: <MdDashboard />,
      contents: [
        {
          title: "Dashboard Monitoring",
          subtitle: "Semua yang kamu butuhkan, ada di satu layar.",
          image: "/features/Dashboard.png",
          list: [
            "Jadwal tahunan terorganisir",
            "Monitoring progress",
            "Import dari Excel",
            "Evaluasi mudah",
          ],
        },
      ],
    },
    {
      id: "Direct Task",
      icon: <MdAssignment />,
      contents: [
        {
          title: "Direct Task",
          // subtitle: "Penugasan instan tanpa hambatan.",
          image: "/features/Direct Task.png",
          list: [
            // "Quick assign",
            // "Notifikasi real-time",
            // "Prioritas tugas",
            // "Foto bukti kerja",
          ],
        },
      ],
    },
    {
      id: "Inventory",
      icon: <MdInventory />,
      contents: [
        {
          title: "Inventory",
          // subtitle: "Kontrol stok alat dan bahan pembersih.",
          image: "/features/Inventory.png",
          list: [
            //   "Update stok otomatis",
            //   "Alert stok rendah",
            //   "Riwayat pemakaian",
            //   "Manajemen supplier",
          ],
        },
      ],
    },
    {
      id: "Stock Opname",
      icon: <MdFactCheck />,
      contents: [
        {
          title: "Stock Opname",
          // subtitle: "Audit stok jadi lebih cepat dan akurat.",
          image: "/features/Stock Opname.png",
          list: [
            //   "Scan barcode",
            //   "Rekonsiliasi data",
            //   "Laporan selisih",
            //   "Approval digital",
          ],
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

      <div className="flex w-full max-w-7xl flex-col items-center">
        {/* Header Section */}
        <div className="px-10 py-6 text-center lg:py-20 xl:py-6">
          <h1 className="text-primary py-2 text-2xl font-black uppercase tracking-tight lg:text-7xl xl:text-4xl">
            All Features
          </h1>
          <p className="mt-4 text-sm font-semibold text-slate-500 lg:text-4xl xl:text-lg">
            Jelajahi seluruh fitur SHELIA untuk mendukung operasional cleaning
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

        {/* Content Section - Dinamis Kanan Kiri */}
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
                  className={`flex w-full flex-col items-center gap-12 lg:gap-16 ${currentData.contents.length > 1 ? "lg:flex-row lg:justify-center" : "lg:flex-row lg:justify-center lg:gap-6"} ${index % 2 !== 0 && currentData.contents.length > 1 ? "lg:flex-row-reverse" : ""}`}
                >
                  {/* Phone Frame Section */}
                  <div className="flex w-full flex-1 justify-center">
                    <div className="max-w-62.5 lg:max-w-100 xl:max-w-65 w-full">
                      <PhoneFrame screenshot={content.image} />
                    </div>
                  </div>

                  {/* Details Section */}
                  <div className="w-full flex-1 space-y-4 text-left">
                    <h2 className="text-primary text-4xl font-black leading-tight lg:text-7xl xl:text-5xl">
                      {content.title}
                    </h2>
                    <p className="text-xl font-bold text-sky-400 lg:text-4xl xl:text-2xl">
                      {content.subtitle}
                    </p>

                    <div className="space-y-4 pt-4">
                      {content.list.map((item, i) => (
                        <motion.div
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          key={i}
                          className="flex items-center gap-4 rounded-2xl border border-slate-300 bg-white p-4 shadow-sm lg:p-4 xl:p-4"
                        >
                          <FaCheckCircle className="text-primary text-lg lg:text-2xl xl:text-xl" />
                          <span className="font-semibold text-black lg:text-3xl xl:text-lg">
                            {item}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom Navigation */}
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
