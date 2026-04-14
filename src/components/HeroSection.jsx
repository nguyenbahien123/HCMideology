import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const VietNamFlag = () => (
  <svg viewBox="0 0 300 200" className="vn-flag-svg" xmlns="http://www.w3.org/2000/svg">
    <rect width="300" height="200" fill="#DA251D" />
    <polygon fill="#FFFF00" points="150,30 167,85 220,85 177,117 194,172 150,140 106,172 123,117 80,85 133,85" />
  </svg>
);

const quotes = [
  "\"Tôi chỉ có một sự ham muốn, ham muốn tột bậc, là làm sao cho nước ta được hoàn toàn độc lập, dân ta được hoàn toàn tự do...\"",
  "\"Dân ta phải biết sử ta, cho tường gốc tích nước nhà Việt Nam.\"",
  "\"Không có gì quý hơn độc lập, tự do.\"",
  "\"Một năm khởi đầu từ mùa xuân. Một đời khởi đầu từ tuổi trẻ. Tuổi trẻ là mùa xuân của xã hội.\"",
  "\"Nước Việt Nam là một, Dân tộc Việt Nam là một. Sông có thể cạn, núi có thể mòn, song chân lý ấy không bao giờ thay đổi.\""
];

const HeroSection = ({ isPlaying, toggleMusic }) => {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    // Lấy ngẫu nhiên quote
    setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
  }, []);

  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const scrollToNext = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <section ref={heroRef} className="hero-section">
      <motion.div className="hero-bg" style={{ y: heroY }}></motion.div>
      <div className="hero-overlay"></div>

      {/* Music Toggle */}
      <motion.button
        className={`music-toggle-btn ${isPlaying ? 'playing' : ''}`}
        onClick={toggleMusic}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
        title="Bật / Tắt lời tuyên ngôn độc lập"
      >
        <VietNamFlag />
      </motion.button>

      <motion.div className="hero-content" style={{ opacity: heroOpacity }}>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Hồ Chí Minh
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="hero-subtitle"
        >
          Hành trình cứu nước
        </motion.h2>

        <motion.p
          className="hero-quote calligraphy"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.8 }}
        >
          {quote}
        </motion.p>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="explore-btn"
          onClick={scrollToNext}
        >
          Khám phá di sản
          <ChevronDown className="pulse-icon" />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default HeroSection;
