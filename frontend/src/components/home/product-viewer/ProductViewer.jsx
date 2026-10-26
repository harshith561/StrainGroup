'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

const products = [
  {
    colorName: 'black',
    gradient: 'radial-gradient(circle, rgba(203,208,219,1) 0%, rgba(170,173,183,1) 100%)',
    image: '/assets/showcase_black-BJotsqei.png',
    title: 'OBSIDIAN TORUS',
    price: '$289.00',
    details: 'Glossy dark 3D torus fashion rings with circular custom typography.',
  },
  {
    colorName: 'blue',
    gradient: 'radial-gradient(circle, rgba(208,221,234,1) 0%, rgba(165,187,209,1) 100%)',
    image: '/assets/showcase_blue-C5q3oofu.png',
    title: 'COBALT TORUS',
    price: '$310.00',
    details: 'Azure smooth-finish 3D torus fashion rings with circular custom typography.',
  },
  {
    colorName: 'red',
    gradient: 'radial-gradient(circle, rgba(249,219,219,1) 0%, rgba(211,165,165,1) 100%)',
    image: '/assets/showcase_red-DXVEAuCv.png',
    title: 'CRIMSON TORUS',
    price: '$299.00',
    details: 'Scarlet glossy-coat 3D torus fashion rings with circular custom typography.',
  },
  {
    colorName: 'green',
    gradient: 'radial-gradient(circle, rgba(188,211,203,1) 0%, rgba(135,193,174,1) 100%)',
    image: '/assets/showcase_green-Bd5gogVn.png',
    title: 'EMERALD TORUS',
    price: '$325.00',
    details: 'Forest green glazed 3D torus fashion rings with circular custom typography.',
  },
  {
    colorName: 'yellow',
    gradient: 'radial-gradient(circle, rgba(219,219,212,1) 0%, rgba(206,205,173,1) 100%)',
    image: '/assets/showcase_yellow-CsUU_SOt.png',
    title: 'SUNSET TORUS',
    price: '$340.00',
    details: 'Lemon yellow highlight 3D torus fashion rings with circular custom typography.',
  },
];

const colorStyles = {
  black: { dot: 'bg-[#111111]', ring: 'ring-[#111111]' },
  blue: { dot: 'bg-[#2a69ac]', ring: 'ring-[#2a69ac]' },
  red: { dot: 'bg-[#c52222]', ring: 'ring-[#c52222]' },
  green: { dot: 'bg-[#00a859]', ring: 'ring-[#00a859]' },
  yellow: { dot: 'bg-[#e5a00d]', ring: 'ring-[#e5a00d]' },
};

export default function ProductViewer() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSwapping, setIsSwapping] = useState(false);
  const sectionRef = useRef(null);

  const selectProduct = (index) => {
    if (index === currentIndex || isSwapping) return;
    setIsSwapping(true);
    setCurrentIndex(index);
    setTimeout(() => setIsSwapping(false), 350);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isSwapping) {
        selectProduct(currentIndex === products.length - 1 ? 0 : currentIndex + 1);
      }
    }, 4000);
    return () => clearInterval(timer);
  }, [currentIndex, isSwapping]);

  const current = products[currentIndex];

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden transition-colors duration-700 ease-out py-8 px-4 sm:py-10 sm:px-6 md:py-12 md:px-8 lg:h-screen lg:min-h-[680px] lg:max-h-[960px] lg:py-0 lg:px-12 flex items-center justify-center border-t border-white/5"
      style={{ background: current.gradient }}
    >
      {/* Background Kinetic Typography */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none z-[1] whitespace-nowrap font-display text-transparent font-black leading-none text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[15rem] [-webkit-text-stroke:2px_rgba(255,255,255,0.12)] opacity-60 sm:opacity-75">
        DIFFERENT
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:grid lg:grid-cols-[220px_1fr_160px] items-center justify-center gap-4 sm:gap-5 lg:gap-8">
        {/* Left Color Control */}
        <div className="flex flex-col items-center lg:items-start gap-2 sm:gap-2.5 lg:gap-4 w-full">
          <span className="font-mono text-xs sm:text-[13px] font-bold tracking-[0.2em] text-neutral-800 uppercase">
            CHOOSE A COLOR
          </span>
          <div className="flex flex-row flex-wrap justify-center items-center lg:flex-col lg:items-start gap-1.5 sm:gap-2 lg:gap-3.5 max-w-sm sm:max-w-md lg:max-w-none">
            {products.map((item, idx) => {
              const active = idx === currentIndex;
              const colorStyle = colorStyles[item.colorName] || colorStyles.black;
              return (
                <button
                  key={item.colorName}
                  className={`group inline-flex items-center gap-2 sm:gap-2.5 py-1 px-2.5 sm:px-3 rounded-full font-sans text-xs sm:text-[13px] tracking-wide uppercase transition-all duration-200 cursor-pointer ${
                    active
                      ? 'text-black font-black scale-105 lg:translate-x-3'
                      : 'text-neutral-700 hover:text-black font-extrabold'
                  }`}
                  onClick={() => selectProduct(idx)}
                  aria-label={`Select ${item.colorName} torus`}
                >
                  <span
                    className={`w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full shrink-0 transition-transform duration-200 ${colorStyle.dot} ${
                      active
                        ? `scale-115 ring-2 ring-offset-2 ring-offset-transparent ${colorStyle.ring} shadow-sm`
                        : 'opacity-85 group-hover:opacity-100 group-hover:scale-110'
                    }`}
                  />
                  {item.colorName}
                </button>
              );
            })}
          </div>
        </div>

        {/* Center 3D Torus Product Display */}
        <div className="flex items-center justify-center w-full my-0.5 sm:my-1 lg:my-0">
          <div
            className={`flex flex-row items-center justify-center gap-3 sm:gap-5 md:gap-7 lg:gap-10 xl:gap-14 w-full transition-all duration-300 ${
              isSwapping ? 'opacity-40 scale-95' : 'opacity-100 scale-100'
            }`}
          >
            <div className="flex items-center justify-center shrink-0 transition-all duration-500 opacity-100">
              <img
                src={current.image}
                alt={current.title}
                className="w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 lg:w-64 lg:h-64 xl:w-72 xl:h-72 object-contain drop-shadow-[0_15px_25px_rgba(0,0,0,0.18)] select-none pointer-events-none animate-[spin_30s_linear_infinite]"
              />
            </div>
            <div className="flex items-center justify-center shrink-0 transition-all duration-500 opacity-100">
              <img
                src={current.image}
                alt={current.title}
                className="w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 lg:w-64 lg:h-64 xl:w-72 xl:h-72 object-contain drop-shadow-[0_15px_25px_rgba(0,0,0,0.18)] select-none pointer-events-none animate-[spin_30s_linear_infinite]"
              />
            </div>
          </div>
        </div>

        {/* Right Arrow Controls */}
        <div className="flex justify-center lg:justify-end items-center w-full">
          <div className="flex flex-row lg:flex-col items-center justify-center gap-3 sm:gap-4 font-mono">
            <button
              className="w-9 h-9 sm:w-10 sm:h-10 lg:w-11 lg:h-11 rounded-full border border-black/20 bg-transparent flex items-center justify-center text-neutral-900 transition-all duration-200 hover:bg-black hover:text-white hover:border-black hover:scale-105 active:scale-95 cursor-pointer shadow-sm"
              onClick={() => selectProduct(currentIndex === 0 ? products.length - 1 : currentIndex - 1)}
              aria-label="Previous product"
            >
              <ChevronUp size={16} />
            </button>
            <span className="text-sm sm:text-base font-bold text-neutral-900 min-w-7 text-center select-none">
              0{currentIndex + 1}
            </span>
            <button
              className="w-9 h-9 sm:w-10 sm:h-10 lg:w-11 lg:h-11 rounded-full border border-black/20 bg-transparent flex items-center justify-center text-neutral-900 transition-all duration-200 hover:bg-black hover:text-white hover:border-black hover:scale-105 active:scale-95 cursor-pointer shadow-sm"
              onClick={() => selectProduct(currentIndex === products.length - 1 ? 0 : currentIndex + 1)}
              aria-label="Next product"
            >
              <ChevronDown size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
