import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause } from 'lucide-react';

const artifacts = [
  { id: 1, name: 'Bộ Quần Áo Kaki', img: 'https://laodongthudo.vn/stores/news_dataimages/ngocthang/092020/01/10/2306_BY_quYn_ao_cYa_Bac_YYYc_trYng_bay_tYi_BTLSQG.jpg?rt=20200902075837', desc: 'Bộ đồ sờn vai đi cùng năm tháng.' },
  { id: 2, name: 'Đôi Dép Cao Su', img: 'https://hnm.1cdn.vn/2024/05/18/doi-dep-cua-ct-hcm.jpg', desc: 'Đúc từ lốp xe phế liệu, cùng hành quân ra trận.' },
  { id: 3, name: 'Máy Đánh Chữ', img: 'https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2020/9/1/832571/Nha-BH-8.jpg', desc: 'Bác đã dùng để soạn thảo các chỉ thị quan trọng.' }
];

const Artifacts = ({ isPlaying, toggleAudio }) => {
  return (
    <section className="artifacts-section">
      <div className="container">
        <h2 className="section-title text-center">Kỷ Vật & Âm Thanh Lịch Sử</h2>
        
        <div className="artifacts-layout">
          <div className="audio-player-card card-bg">
            <img src="https://file3.qdnd.vn/data/images/0/2022/06/14/minhanh/untitled-8.jpg?w=400" alt="Bác Hồ đọc Tuyên ngôn độc lập" style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: '8px', marginBottom: '1.5rem', filter: 'sepia(0.4)' }} />
            <h3>Tuyên Ngôn Độc Lập (1945)</h3>
            <p className="audio-desc">"Hỡi đồng bào cả nước... Tất cả mọi người đều sinh ra có quyền bình đẳng..."</p>
            
            <button className="play-button" onClick={toggleAudio}>
              {isPlaying ? <Pause size={28} /> : <Play size={28} />}
            </button>
            <div className="waveform-placeholder" style={{ opacity: isPlaying ? 1 : 0.3, transition: 'opacity 0.3s' }}>
              <div className="wave-bar"></div>
              <div className="wave-bar"></div>
              <div className="wave-bar"></div>
              <div className="wave-bar"></div>
              <div className="wave-bar"></div>
              <div className="wave-bar"></div>
            </div>
          </div>

          <div className="artifacts-grid">
            {artifacts.map((item) => (
              <motion.div 
                key={item.id} 
                className="artifact-card card-bg"
                whileHover={{ scale: 1.05, rotate: item.id % 2 === 0 ? 2 : -2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="artifact-img-wrap">
                  <img src={item.img} alt={item.name} />
                </div>
                <h4>{item.name}</h4>
                <p>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Artifacts;
