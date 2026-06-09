import { useState } from "react";
import { useNavigate } from "react-router";
import { motion, AnimatePresence } from "motion/react";

import wavyLogo from "@/images/duck-club/logo-wavy-white.png";
import wavyBlack from "@/images/duck-club/logo-wavy-black.png";
import dckLogo from "@/images/duck-club/logo-dck-white.png";
import dckRed from "@/images/duck-club/logo-dck-red.png";
import dckBrown from "@/images/duck-club/logo-dck-brown.png";
import dckPink from "@/images/duck-club/logo-dck-pink.png";
import dckBlack from "@/images/duck-club/logo-dck-black.png";
import dckGray from "@/images/duck-club/logo-dck-gray.png";
import ovalLogo from "@/images/duck-club/logo-oval-white.png";
import ovalPink from "@/images/duck-club/logo-oval-pink.png";
import ovalYellow from "@/images/duck-club/logo-oval-yellow.png";
import ovalBlack from "@/images/duck-club/logo-oval-black.png";
import ovalGreen from "@/images/duck-club/logo-oval-green.png";
import ovalCoffee from "@/images/duck-club/logo-oval-coffee.png";
import duckIllustration from "@/images/duck-club/logo-duck-cw01.png";
import duckV2 from "@/images/duck-club/logo-duck-cw02.png";
import duckV3 from "@/images/duck-club/logo-duck-cw03.png";
import duckV4 from "@/images/duck-club/logo-duck-cw04.png";
import duckV5 from "@/images/duck-club/logo-duck-cw05.png";
import duckV6 from "@/images/duck-club/logo-duck-cw06.png";
import process1 from "@/images/duck-club/process-01.jpg";
import process2 from "@/images/duck-club/process-02.jpg";
import process3 from "@/images/duck-club/process-03.jpg";
import process4 from "@/images/duck-club/process-04.jpg";
import process5 from "@/images/duck-club/process-05.jpg";
import process6 from "@/images/duck-club/process-06.jpg";
import process7 from "@/images/duck-club/process-07.jpg";
import process8 from "@/images/duck-club/process-08.jpg";
import process9 from "@/images/duck-club/process-09.jpg";
import bannerStory0 from "@/images/duck-club/banner-story-00.png";
import bannerStory1 from "@/images/duck-club/banner-story-01.png";
import bannerStory2 from "@/images/duck-club/banner-story-02.png";
import bannerStory3 from "@/images/duck-club/banner-story-03.png";
import bannerStory4 from "@/images/duck-club/banner-story-04.png";
import bannerStory5 from "@/images/duck-club/banner-story-05.png";

const COLORWAYS = [
  { name: "BLACK", hex: "#0C0C0C", light: false },
  { name: "BURGUNDY", hex: "#7A1E2E", light: false },
  { name: "CHARCOAL", hex: "#2A2A2A", light: false },
  { name: "STONE", hex: "#4A4A4A", light: false },
  { name: "CREAM", hex: "#F0EDE8", light: true },
  { name: "SLATE", hex: "#1C2630", light: false },
];

const OVAL_COLORWAYS = [
  { name: "WHITE", src: ovalLogo, swatch: "#F0EDE8" },
  { name: "BLACK", src: ovalBlack, swatch: "#0C0C0C" },
  { name: "BURGUNDY", src: ovalLogo, swatch: "#7A1E2E" },
  { name: "PINK", src: ovalPink, swatch: "#E8A0A8" },
  { name: "YELLOW", src: ovalYellow, swatch: "#E8D060" },
  { name: "GREEN", src: ovalGreen, swatch: "#4A7A50" },
  { name: "COFFEE", src: ovalCoffee, swatch: "#7A5A40" },
];

const WAVY_COLORWAYS = [
  { name: "WHITE", src: wavyLogo, swatch: "#F0EDE8" },
  { name: "BLACK", src: wavyBlack, swatch: "#0C0C0C" },
];

const DCK_COLORWAYS = [
  { name: "WHITE", src: dckLogo, swatch: "#F0EDE8" },
  { name: "RED", src: dckRed, swatch: "#8B2020" },
  { name: "BROWN", src: dckBrown, swatch: "#7A5030" },
  { name: "PINK", src: dckPink, swatch: "#D48090" },
  { name: "BLACK", src: dckBlack, swatch: "#0C0C0C" },
  { name: "GRAY", src: dckGray, swatch: "#888888" },
];

const DUCK_COLORWAYS = [
  { name: "CW 01", src: duckIllustration, swatch: "#F0EDE8" },
  { name: "CW 02", src: duckV2, swatch: "#C8A060" },
  { name: "CW 03", src: duckV3, swatch: "#7A5A40" },
  { name: "CW 04", src: duckV4, swatch: "#4A7A50" },
  { name: "CW 05", src: duckV5, swatch: "#7A1E2E" },
  { name: "CW 06", src: duckV6, swatch: "#3A5A7A" },
];

const LOGOS = [
  {
    id: "wavy",
    name: "WAVY WORDMARK",
    src: wavyLogo,
    alt: "Duck Club wavy wordmark logo",
  },
  {
    id: "dck",
    name: "DCK MARK",
    src: dckLogo,
    alt: "DCK abbreviated logo mark",
  },
  {
    id: "oval",
    name: "OVAL BADGE",
    src: ovalLogo,
    alt: "Duck with oval badge logo",
  },
  {
    id: "duck",
    name: "DUCK / CLUB",
    src: duckIllustration,
    alt: "Duck Club stacked logo",
  },
];

const BANNER_IMAGES = [
  { src: bannerStory0, alt: "Duck Club banner story 0" },
  { src: bannerStory1, alt: "Duck Club banner story 1" },
  { src: bannerStory2, alt: "Duck Club banner story 2" },
  { src: bannerStory3, alt: "Duck Club banner story 3" },
  { src: bannerStory4, alt: "Duck Club banner story 4" },
  { src: bannerStory5, alt: "Duck Club banner story 5" },
];

const PROCESS_IMAGES = [
  { src: process1, alt: "Duck Club process photo 1" },
  { src: process2, alt: "Duck Club process photo 2" },
  { src: process3, alt: "Duck Club process photo 3" },
  { src: process4, alt: "Duck Club process photo 4" },
  { src: process5, alt: "Duck Club process photo 5" },
  { src: process6, alt: "Duck Club process photo 6" },
  { src: process7, alt: "Duck Club process photo 7" },
  { src: process8, alt: "Duck Club process photo 8" },
  { src: process9, alt: "Duck Club process photo 9" },
];

function LogoCard({ logo, index }: { logo: (typeof LOGOS)[0]; index: number }) {
  const [activeColor, setActiveColor] = useState(0);
  const [activeOval, setActiveOval] = useState(0);

  const isWavy = logo.id === "wavy";
  const isDck = logo.id === "dck";
  const isOval = logo.id === "oval";
  const isDuck = logo.id === "duck";

  const wavyCw = WAVY_COLORWAYS[activeOval];
  const dckCw = DCK_COLORWAYS[activeOval];
  const ovalCw = OVAL_COLORWAYS[activeOval];
  const duckCw = DUCK_COLORWAYS[activeOval];
  const bgCw = COLORWAYS[activeColor];

  const swapMode = isWavy || isDck || isOval || isDuck;
  const activeCw = isWavy ? wavyCw : isDck ? dckCw : isOval ? ovalCw : duckCw;

  const displaySrc = swapMode ? activeCw.src : logo.src;
  const bgColor = swapMode ? "#0C0C0C" : bgCw.hex;
  const isLight = swapMode ? false : bgCw.light;
  const colorLabel = swapMode ? activeCw.name : bgCw.name;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="flex flex-col h-full bg-card border border-border"
    >
      {/* Logo display */}
      <div
        className="relative w-full aspect-square overflow-hidden transition-colors duration-500"
        style={{
          backgroundColor: bgColor,
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={swapMode ? activeCw.name : bgCw.name}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="absolute inset-0 flex items-center justify-center p-8 md:p-10"
          >
            <img
              src={displaySrc}
              alt={logo.alt}
              className="block max-h-[70%] max-w-[90%] w-auto h-auto object-contain"
              style={{
                filter: isLight ? "invert(1)" : "none",
              }}
              decoding="async"
            />
          </motion.div>
        </AnimatePresence>
        {/* Color name badge */}
        <span
          className="absolute bottom-3 right-3 opacity-50"
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "0.55rem",
            letterSpacing: "0.25em",
            color: isLight ? "#0C0C0C" : "#F0EDE8",
          }}
        >
          {colorLabel}
        </span>
      </div>

      {/* Info row + swatches */}
      <div className="flex items-center justify-between px-4 py-4 border-t border-border mt-auto">
        <span
          className="text-muted-foreground"
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 600,
            fontSize: "0.75rem",
            letterSpacing: "0.2em",
          }}
        >
          {logo.name}
        </span>

        {swapMode ? (
          /* Image-swap swatches */
          <div className="flex items-center gap-2">
            {(isWavy
              ? WAVY_COLORWAYS
              : isDck
                ? DCK_COLORWAYS
                : isOval
                  ? OVAL_COLORWAYS
                  : DUCK_COLORWAYS
            ).map((c, i) => (
              <button
                key={c.name}
                onClick={() => setActiveOval(i)}
                title={c.name}
                className="transition-transform duration-200 hover:scale-110"
                style={{
                  width: "14px",
                  height: "14px",
                  borderRadius: "50%",
                  backgroundColor: c.swatch,
                  border:
                    i === activeOval
                      ? "2px solid #F0EDE8"
                      : "2px solid transparent",
                  outline: i === activeOval ? "1px solid #555555" : "none",
                  outlineOffset: "1px",
                  cursor: "pointer",
                }}
              />
            ))}
          </div>
        ) : (
          /* Background-color swatches (fallback) */
          <div className="flex items-center gap-2">
            {COLORWAYS.map((c, i) => (
              <button
                key={c.name}
                onClick={() => setActiveColor(i)}
                title={c.name}
                className="transition-transform duration-200 hover:scale-110"
                style={{
                  width: "14px",
                  height: "14px",
                  borderRadius: "50%",
                  backgroundColor: c.hex,
                  border:
                    i === activeColor
                      ? "2px solid #F0EDE8"
                      : "2px solid transparent",
                  outline: i === activeColor ? "1px solid #555555" : "none",
                  outlineOffset: "1px",
                  cursor: "pointer",
                }}
              />
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}

function MediaSlot({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative aspect-square bg-card border border-border overflow-hidden flex items-center justify-center">
      <img
        src={src}
        alt={alt}
        className="block max-w-full max-h-full w-auto h-auto object-contain"
        loading="lazy"
        decoding="async"
      />
    </div>
  );
}

function SectionDivider({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-6 py-12">
      <div className="flex-1 h-px bg-border" />
      <span
        className="text-muted-foreground shrink-0"
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: "0.6rem",
          letterSpacing: "0.35em",
        }}
      >
        {label}
      </span>
      <div className="flex-1 h-px bg-border" />
    </div>
  );
}

export function DuckClubPage() {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen flex flex-col bg-background text-foreground"
      style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
    >
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 border-b border-border sticky top-0 z-10 bg-background">
        <button
          onClick={() => navigate("/portfolio")}
          className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors duration-200"
          style={{ cursor: "pointer" }}
        >
          <span style={{ fontSize: "1.1rem" }}>←</span>
          <span
            className="tracking-[0.25em]"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.65rem",
            }}
          >
            PORTFOLIO
          </span>
        </button>
        <span
          className="text-muted-foreground tracking-[0.3em]"
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "0.65rem",
          }}
        >
          DUCK CLUB
        </span>
      </header>

      <main className="flex-1 px-6 py-10 md:py-14 max-w-screen-xl mx-auto w-full">
        {/* Page title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <div
            className="leading-none uppercase"
            style={{
              fontFamily: "'Big Shoulders Display', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(2.5rem, 8vw, 8rem)",
              lineHeight: 0.92,
            }}
          >
            <span className="text-foreground">DUCK </span>
            <span style={{ color: "var(--burgundy)" }}>CLUB.</span>
          </div>
          <p
            className="mt-4 text-muted-foreground max-w-sm"
            style={{
              fontFamily: "'Barlow', sans-serif",
              fontWeight: 300,
              fontSize: "0.8rem",
              letterSpacing: "0.08em",
            }}
          >
            Brand identity, logo system & visual language. Click the swatches to
            preview each mark in different colorways.
          </p>
        </motion.div>

        {/* ── LOGOS ── */}
        <div
          className="text-muted-foreground mb-6"
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "0.6rem",
            letterSpacing: "0.35em",
          }}
        >
          01 — LOGO SYSTEM
        </div>

        <div className="grid grid-cols-2 gap-px bg-border">
          {LOGOS.map((logo, i) => (
            <LogoCard key={logo.id} logo={logo} index={i} />
          ))}
        </div>

        <SectionDivider label="02 — BRAND APPLICATIONS" />

        {/* Social media / banners placeholder */}
        <div
          className="text-muted-foreground mb-6"
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 600,
            fontSize: "0.75rem",
            letterSpacing: "0.2em",
          }}
        >
          BANNERS & SOCIAL POSTS
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-border mb-12">
          {BANNER_IMAGES.map((image) => (
            <MediaSlot key={image.alt} src={image.src} alt={image.alt} />
          ))}
        </div>

        <SectionDivider label="03 — PROCESS" />

        {/* Process photos placeholder */}
        <div
          className="text-muted-foreground mb-6"
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 600,
            fontSize: "0.75rem",
            letterSpacing: "0.2em",
          }}
        >
          WORK IN PROGRESS
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-border mb-16">
          {PROCESS_IMAGES.map((image) => (
            <MediaSlot key={image.alt} src={image.src} alt={image.alt} />
          ))}
        </div>
      </main>
    </div>
  );
}
