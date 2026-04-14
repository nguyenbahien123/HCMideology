import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import HeroSection from './components/HeroSection';
import JourneyMap from './components/JourneyMap';
import TimelineSection from './components/TimelineSection';
import PoetryStories from './components/PoetryStories';
import Artifacts from './components/Artifacts';
import './App.css';

// Tích hợp file audio nội bộ
import tuyenNgonDocLapAudio from './assets/tuyenngondoclap.mp3';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100, damping: 30, restDelta: 0.001
  });

  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = 0.8;
      // Thử phát nhạc tự động (Autoplay)
      audio.play().then(() => {
        setIsPlaying(true);
      }).catch(err => {
        console.log("Trình duyệt chặn Autoplay cho tới khi người dùng tương tác.", err);
        setIsPlaying(false);
      });
    }
    
    // Xóa audio khi unmount
    return () => {
      if (audio) audio.pause();
    };
  }, []);

  const toggleAudio = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play().catch(e => console.log("Không thể phát nhạc:", e));
    }
    setIsPlaying(!isPlaying);
  };

  const handleAudioEnded = () => {
    setIsPlaying(false);
  };

  return (
    <div className="app-container">
      {/* Audio Element gốc */}
      <audio 
        ref={audioRef} 
        src={tuyenNgonDocLapAudio} 
        onEnded={handleAudioEnded} 
      />

      <motion.div className="progress-bar" style={{ scaleX }} />
      
      {/* Truyền trạng thái audio xuống các mảnh */}
      <HeroSection isPlaying={isPlaying} toggleMusic={toggleAudio} />
      <JourneyMap />
      <TimelineSection />
      <PoetryStories />
      <Artifacts isPlaying={isPlaying} toggleAudio={toggleAudio} />
      
      <footer className="footer">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="footer-content"
        >
          <p className="quote">"Không có gì quý hơn độc lập, tự do"</p>
          <p className="author">- Hồ Chí Minh -</p>
        </motion.div>
      </footer>
    </div>
  );
}

export default App;
