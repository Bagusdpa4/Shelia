import React, { useState, useEffect } from "react";
import { Loading } from "../components/assets/loading/Loading";
import { HiArrowNarrowLeft } from "react-icons/hi"; // Opsional: Tambah icon panah

export const Error404 = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const minimumLoadTime = 800;
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, minimumLoadTime);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="bg-white relative flex min-h-screen select-none flex-col items-center justify-center overflow-hidden px-6 font-sans">
      {/* Background Decor - Abstract Blue Blobs */}
      <div className="absolute -left-24 -top-24 h-96 w-96 rounded-full bg-primary blur-3xl" />
      <div className="bg-primary absolute -bottom-24 -right-24 h-96 w-96 rounded-full blur-3xl" />

      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Number 404 */}
        <h1 className="text-slate-300 text-[12rem] font-black leading-none tracking-tighter lg:text-[18rem]">
          404
        </h1>

        {/* Text Content */}
        <div className="-mt-8 flex flex-col items-center gap-2 lg:-mt-16">
          <h2 className="text-2xl font-black uppercase italic tracking-widest text-black lg:text-5xl">
            Halaman <span className="text-primary">Tidak Ditemukan</span>
          </h2>
          <p className="text-slate-500 max-w-md text-sm font-medium lg:text-lg">
            Maaf, sepertinya halaman yang Anda cari telah dipindahkan atau tidak
            lagi tersedia dalam ekosistem kami.
          </p>
        </div>

        {/* Action Button */}
        <div className="mt-12">
          <a
            href="/"
            className="group flex items-center gap-3 rounded-2xl border-2 border-black bg-black px-8 py-4 text-lg font-bold text-white transition-all hover:bg-transparent hover:text-black active:scale-95"
          >
            <HiArrowNarrowLeft className="text-2xl transition-transform group-hover:-translate-x-2" />
            Kembali ke Homepage
          </a>
        </div>
      </div>

      {/* Footer Branding Sederhana */}
      <div className="absolute bottom-10 text-center">
        <p className="text-slate-300 text-[10px] font-bold uppercase tracking-[0.5em] lg:text-lg">
          Shelter Indonesia • Ecosystem 2026
        </p>
      </div>
    </div>
  );
};
