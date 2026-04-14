import React from 'react';
import { motion } from 'framer-motion';

const poetryAndStories = [
  { id: 1, type: 'poetry', title: 'Ngắm Trăng (Vọng Nguyệt)', text: "Trong tù không rượu cũng không hoa,\nCảnh đẹp đêm nay, khó hững hờ;\nNgười ngắm trăng soi ngoài cửa sổ,\nTrăng nhòm khe cửa ngắm nhà thơ." },
  { id: 2, type: 'story', title: 'Đôi Dép Cao Su', text: "Đôi dép lốp được cắt từ chiếc lốp ô tô hỏng, gắn với Bác trong suốt hai cuộc kháng chiến phòng kỳ. Dù đi nước ngoài hay tiếp khách quốc tế, Bác vẫn thường đi đôi dép giản dị này..." },
  { id: 3, type: 'poetry', title: 'Không Có Gì Quý Hơn Độc Lập Tự Do', text: "Nước Việt Nam là một, dân tộc Việt Nam là một.\nSông có thể cạn, núi có thể mòn,\nsong chân lý đó không bao giờ thay đổi." },
  { id: 4, type: 'story', title: 'Bác Hồ với Thiếu Nhi', text: "Năm 1946, khi các cháu mồ côi đến thăm, Bác đã ôm hôn từng cháu, chia kẹo và căn dặn các cháu cố gắng rèn luyện, học tập để xứng đáng với tương lai." },
  { id: 5, type: 'poetry', title: 'Tự Khuyên Mình', text: "Ví không có cảnh đông tàn,\nThì đâu có cảnh huy hoàng ngày xuân;\nNghĩ mình trong bước gian truân,\nTai ương rèn luyện tinh thần thêm hăng." }
];

const PoetryStories = () => {
  return (
    <section className="poetry-stories-section normal-layout">
      <div className="container">
        <h2 className="section-title text-center">Không Gian Thơ Ca & Chuyện Kể</h2>
        
        <div className="ps-grid">
          {poetryAndStories.map((item, i) => (
            <motion.div 
              key={item.id} 
              className={`ps-card static-card ${item.type}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
            >
              {item.type === 'poetry' ? (
                <>
                  <h4 className="calligraphy-font">{item.title}</h4>
                  <p className="calligraphy-font">{item.text}</p>
                </>
              ) : (
                <>
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </>
              )}
              <div className="card-badge">{item.type === 'poetry' ? 'Thơ ca' : 'Chuyện kể'}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PoetryStories;
