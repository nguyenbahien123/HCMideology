import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const mapData = [
  {
    id: 1,
    country: "Pháp",
    period: "1911 - 1923",
    position: { top: "30%", left: "48%" },
    img: "https://media.baovanhoa.vn/zoom/600_400/Portals/0/EasyGalleryImages/1/39490/b%C3%A1c-H%E1%BB%93.jpg",
    events: [
      "Năm 1911, đặt chân đến bến cảng Marseille, bắt đầu chặng đường trực tiếp khảo sát các nước tư bản chủ nghĩa.",
      "Tháng 7/1920, đọc Sơ thảo lần thứ nhất những luận cương của V.I. Lênin, tìm thấy con đường cứu nước giành độc lập."
    ]
  },
  {
    id: 2,
    country: "Mỹ",
    period: "1912 - 1913",
    position: { top: "32%", left: "24%" },
    img: "https://media.baovanhoa.vn/zoom/600_400/Portals/0/EasyGalleryImages/1/39490/b%C3%A1c-H%E1%BB%93.jpg", // Tượng Nữ thần tự do thập niên 20
    events: [
      "Vừa lao động nhọc nhằn để kiếm sống, vừa đi sâu khảo sát đời sống của giai cấp công nhân và nhân dân lao động.",
      "Nghiên cứu trực tiếp bản Tuyên ngôn Độc lập Mỹ năm 1776, đúc kết tư tưởng tiến bộ về quyền bình đẳng của các dân tộc."
    ]
  },
  {
    id: 3,
    country: "Anh",
    period: "1913 - 1917",
    position: { top: "25%", left: "46%" },
    img: "https://tulieuhochiminh.vnulib.edu.vn/bitstream/VNUHCM/13507/1/BHSNGPDT-27.jpg", // Cảng London lịch sử
    events: [
      "Tham gia Công đoàn Cảng London, rèn luyện bản lĩnh chính trị trong phong trào đấu tranh của công nhân quốc tế.",
      "Vừa cào tuyết, đốt lò, vừa miệt mài tự học ngoại ngữ và chủ động nghiên cứu tư tưởng chính trị thời đại."
    ]
  },
  {
    id: 4,
    country: "Liên Xô",
    period: "1923 - 1924",
    position: { top: "22%", left: "62%" },
    img: "https://file3.qdnd.vn/data/images/0/2022/06/14/minhanh/untitled-8.jpg",
    events: [
      "Phát biểu tại Đại hội V của Quốc tế Cộng sản, bảo vệ xuất sắc luận điểm về cách mạng giải phóng thuộc địa.",
      "Học tập, nghiên cứu lý luận chủ nghĩa Mác - Lênin và phương pháp cách mạng tại trường Đại học Phương Đông."
    ]
  },
  {
    id: 5,
    country: "Trung Quốc",
    period: "1924 - 1930",
    position: { top: "45%", left: "75%" },
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGkXL5T9y7S2GCgwkEU7lg6LXJKrg_XWC-gA&s",
    events: [
      "Mở các lớp huấn luyện chính trị tại Quảng Châu, đào tạo cán bộ nòng cốt và xuất bản tác phẩm 'Đường Kách mệnh'.",
      "Mùa xuân năm 1930, chủ trì Hội nghị hợp nhất các tổ chức cộng sản, thành lập Đảng Cộng sản Việt Nam tại Hương Cảng."
    ]
  },
  {
    id: 6,
    country: "Thái Lan",
    period: "1928 - 1929",
    position: { top: "52%", left: "72%" },
    img: "https://thanhnien.mediacdn.vn/uploaded/dinhphu/2019_01_29/dongchinguyenaiquoc_FZCV.jpg?width=500",
    events: [
      "Hoạt động cách mạng dưới bí danh Thầu Chín, hòa mình vào lao động sản xuất và đời sống của kiều bào.",
      "Lập hội thân ái, xuất bản báo chí, xây dựng cơ sở quần chúng vững chắc để chuẩn bị lực lượng."
    ]
  }
];

const JourneyMap = () => {
  const [activeNode, setActiveNode] = useState(null);

  return (
    <section className="map-section">
      <div className="container">
        <h2 className="section-title text-center">Bản đồ Hành trình Cứu nước (1911 - 1941)</h2>
        <div className="map-container">
          {/* Detailed Image Map */}
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg"
            alt="World Map"
            className="world-map-svg"
            style={{ opacity: 0.3, filter: 'sepia(1) hue-rotate(340deg) saturate(1.5)' }}
          />

          {mapData.map((node) => (
            <div
              key={node.id}
              className="map-node"
              style={{ left: node.position.left, top: node.position.top }}
              onMouseEnter={() => setActiveNode(node)}
              onMouseLeave={() => setActiveNode(null)}
            >
              <div className="pulse-dot"></div>
              {/* Optional: Always show country name label */}
              <span className="map-node-label">{node.country}</span>
            </div>
          ))}

          <AnimatePresence>
            {activeNode && (
              <motion.div
                className="map-tooltip"
                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                style={{
                  left: `calc(${activeNode.position.left} + 20px)`,
                  top: `calc(${activeNode.position.top} - 100px)`
                }}
              >
                <img src={activeNode.img} alt={activeNode.country} className="tooltip-img" />
                <div className="tooltip-header">
                  <h4>{activeNode.country}</h4>
                  <span className="tooltip-time">{activeNode.period}</span>
                </div>
                <ul className="tooltip-events-list">
                  {activeNode.events.map((ev, i) => (
                    <li key={i}>{ev}</li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default JourneyMap;
