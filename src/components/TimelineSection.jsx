import React from 'react';
import { motion } from 'framer-motion';

const timelineData = [
  {
    id: 1,
    period: "1890 - 1911",
    title: "Quê hương và Thời niên thiếu",
    image: "https://hnm.1cdn.vn/2021/06/15/hanoimoi.com.vn-uploads-images-tuandiep-2021-06-15-_bac-ho.jpg",
    events: [
      { date: "19/05/1890", text: "Cậu bé Nguyễn Sinh Cung ra đời tại Làng Sen, xã Kim Liên, huyện Nam Đàn, tỉnh Nghệ An trong một gia đình nhà nho yêu nước." },
      { date: "1895 - 1901", text: "Sống ở Huế cùng gia đình, tận mắt chứng kiến nỗi khổ của nhân dân dưới ách thống trị của thực dân. Lớn lên, Bác lấy tên là Nguyễn Tất Thành." },
      { date: "1908 - 1910", text: "Tham gia phong trào chống thuế ở Trung Kỳ, sau đó đi dần vào Nam, dừng chân dạy học tại trường Dục Thanh (Phan Thiết)." },
      { date: "Đầu năm 1911", text: "Vào Sài Gòn, ấp ủ hoài bão tìm một con đường cứu nước mới, khác với các bậc tiền bối." }
    ]
  },
  {
    id: 2,
    period: "1911 - 1920",
    title: "Ra đi tìm đường cứu nước",
    image: "https://file.qdnd.vn/data/images/0/2021/05/28/tranyen/bh32.jpg?dpi=150&quality=100&w=575",
    events: [
      { date: "05/06/1911", text: "Chàng thanh niên Nguyễn Tất Thành (với tên gọi Văn Ba) lên con tàu Amiral Latouche-Tréville từ Bến Nhà Rồng (Sài Gòn), bắt đầu hành trình vạn dặm ra nước ngoài." },
      { date: "1911 - 1917", text: "Đi qua nhiều nước ở châu Âu, châu Phi, châu Mỹ. Bác vừa lao động vất vả để kiếm sống, vừa quan sát, học hỏi và nhận ra rằng: Ở đâu bọn đế quốc cũng tàn bạo, ở đâu người lao động cũng bị áp bức." },
      { date: "1917", text: "Trở lại nước Pháp, tham gia phong trào công nhân Pháp và lấy tên là Nguyễn Ái Quốc." },
      { date: "1919", text: "Gửi \"Bản yêu sách của nhân dân An Nam\" tới Hội nghị Versailles, đòi quyền tự quyết cho dân tộc." },
      { date: "Tháng 7/1920", text: "Đọc Sơ thảo lần thứ nhất những luận cương về vấn đề dân tộc và vấn đề thuộc địa của V.I. Lênin, tìm ra con đường giải phóng dân tộc: Con đường Cách mạng Vô sản." }
    ]
  },
  {
    id: 3,
    period: "1921 - 1930",
    title: "Hoạt động quốc tế & Chuẩn bị lập Đảng",
    image: "https://file3.qdnd.vn/data/images/0/2022/06/14/minhanh/untitled-8.jpg",
    events: [
      { date: "1921 - 1923", text: "Tham gia sáng lập Hội Liên hiệp thuộc địa ở Pháp, chủ nhiệm kiêm chủ bút báo Người cùng khổ (Le Paria)." },
      { date: "1923 - 1924", text: "Đến Liên Xô dự Hội nghị Quốc tế Nông dân và Đại hội lần thứ V của Quốc tế Cộng sản." },
      { date: "1924 - 1927", text: "Về Quảng Châu (Trung Quốc), thành lập Hội Việt Nam Cách mạng Thanh niên, mở lớp huấn luyện cán bộ, ra báo Thanh niên và xuất bản tác phẩm Đường Kách mệnh (1927)." },
      { date: "03/02/1930", text: "Tại Cửu Long (Hồng Kông), Bác chủ trì Hội nghị hợp nhất các tổ chức cộng sản, chính thức thành lập Đảng Cộng sản Việt Nam." }
    ]
  },
  {
    id: 4,
    period: "1941 - 1945",
    title: "Về nước & Lãnh đạo Cách mạng",
    image: "https://cdn-i.doisongphapluat.com.vn/476/2019/9/2/quang-truong-ba-dinh.jpg",
    events: [
      { date: "28/01/1941", text: "Bác trở về nước sau 30 năm bôn ba, sống và làm việc tại hang Pác Bó (Cao Bằng). Từ năm 1942, Người lấy tên là Hồ Chí Minh." },
      { date: "Tháng 5/1941", text: "Chủ trì Hội nghị Trung ương Đảng lần thứ 8, thành lập Mặt trận Việt Minh." },
      { date: "22/12/1944", text: "Chỉ thị thành lập Đội Việt Nam Tuyên truyền Giải phóng quân (tiền thân của Quân đội Nhân dân Việt Nam)." },
      { date: "Tháng 8/1945", text: "Lãnh đạo toàn dân tổng khởi nghĩa, giành chính quyền trong Cách mạng Tháng Tám." },
      { date: "02/09/1945", text: "Tại Quảng trường Ba Đình (Hà Nội), Bác đọc Tuyên ngôn Độc lập, khai sinh ra nước Việt Nam Dân chủ Cộng hòa." }
    ]
  },
  {
    id: 5,
    period: "1946 - 1969",
    title: "Kháng chiến kiến quốc",
    image: "https://daknong.1cdn.vn/thumbs/900x600/2024/12/19/baolamdong.vn-file-e7837c02845ffd04018473e6df282e92-122024-_hcm-dang-webbia_20241219195904.jpg",
    events: [
      { date: "19/12/1946", text: "Ra Lời kêu gọi Toàn quốc kháng chiến, lãnh đạo nhân dân tiến hành cuộc kháng chiến trường kỳ chống thực dân Pháp." },
      { date: "1954", text: "Cùng Trung ương Đảng lãnh đạo chiến dịch Điện Biên Phủ thành công \"lừng lẫy năm châu, chấn động địa cầu\"." },
      { date: "1954 - 1969", text: "Lãnh đạo đồng thời hai nhiệm vụ chiến lược: Xây dựng Chủ nghĩa Xã hội ở miền Bắc và đấu tranh giải phóng miền Nam, thống nhất đất nước." },
      { date: "02/09/1969", text: "Chủ tịch Hồ Chí Minh qua đời, để lại Bản Di chúc lịch sử, là tài sản tinh thần vô giá cho Đảng và nhân dân ta." }
    ]
  }
];

const TimelineItem = ({ data, index }) => {
  const isEven = index % 2 === 0;

  return (
    <div className={`timeline-item ${isEven ? 'left' : 'right'}`}>
      <div className="timeline-content card-bg">
        <motion.div
          className="timeline-period"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
        >
          {data.period}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="timeline-title">{data.title}</h3>
        </motion.div>

        <div className="timeline-events">
          {data.events.map((ev, i) => (
            <motion.div
              key={i}
              className="event-card"
              initial={{ opacity: 0, x: isEven ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="event-date">{ev.date}</div>
              <div className="event-text">{ev.text}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="image-container"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <img src={data.image} alt={data.title} className="timeline-image" loading="lazy" />
        </motion.div>
      </div>
      <div className="timeline-dot"></div>
    </div>
  );
};

const TimelineSection = () => {
  return (
    <section className="timeline-section">
      <div className="container">
        <h2 className="section-title text-center">Cuộc đời và sự nghiệp của Hồ Chí Minh</h2>
        <div className="timeline-container">
          <div className="timeline-line"></div>
          {timelineData.map((item, index) => (
            <TimelineItem key={item.id} data={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
