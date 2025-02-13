"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Banner from "../../../public/images/Headers.png";
import AllButtons from "../buttons/allButtons";

const slides = [
  {
    id: 1,
    title: "Petualangan Terakhir",
    desc: "Saksikan petualangan epik dalam film terbaru yang akan membawa Anda ke dunia penuh aksi dan ketegangan.",
    img: Banner,
  },
  {
    id: 2,
    title: "Dunia Tanpa Batas",
    desc: "Film sci-fi yang membawa Anda ke petualangan luar angkasa yang penuh misteri dan keajaiban.",
    img: Banner,
  },
  {
    id: 3,
    title: "Misi Rahasia",
    desc: "Aksi mata-mata yang penuh ketegangan dan kejutan menanti Anda dalam film terbaru ini.",
    img: Banner,
  },
];

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fungsi untuk berpindah slide secara otomatis
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Ganti slide setiap 5 detik

    return () => clearInterval(interval);
  }, [currentIndex]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
      {/* Container untuk animasi */}
      <motion.div
        className="flex"
        initial={{ x: 0 }}
        animate={{ x: `-${currentIndex * 100}%` }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        drag="x"
        dragConstraints={{ left: -200, right: 200 }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="relative min-w-full h-[500px] md:h-[600px] flex items-center justify-center"
          >
            {/* Background Image */}
            <Image
              src={slide.img}
              alt={slide.title}
              fill
              style={{ objectFit: "cover" }}
              className="absolute inset-0"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />

            {/* Content */}
            <div className="relative right-96 top-24 z-10 text-white px-6 max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold">{slide.title}</h1>
              <p className="mt-3 text-lg font-normal md:text-xl">
                {slide.desc}
              </p>

              {/* Button */}
              <AllButtons
                title="▶ Tonton Sekarang"
                classname="mt-5 px-6 py-3 bg-black text-white font-semibold rounded-sm shadow-lg hover:bg-gray-300 transition"
              />
            </div>
          </div>
        ))}
      </motion.div>

      {/* <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white hover:bg-black/70 transition">
        <ChevronLeftIcon size={32} />
      </button>
      <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white hover:bg-black/70 transition">
        <ChevronRightIcon size={32} />
      </button> */}

      {/* Indikator yang bisa diklik */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition ${
              currentIndex === index ? "bg-white scale-125" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
