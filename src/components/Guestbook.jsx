import React, { useState } from 'react';

const initialMessages = [
  { id: 1, name: 'Trần Văn A', message: 'Kính cẩn nghiêng mình trước anh linh Chủ tịch Hồ Chí Minh.' },
  { id: 2, name: 'Nguyễn Thị B', message: 'Tự hào là thế hệ trẻ Việt Nam, học tập và làm theo tấm gương đạo đức của Bác.' },
  { id: 3, name: 'Lê Hoàng C', message: 'Di sản của Người sẽ sống mãi bến không thời gian.' }
];

const Guestbook = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [name, setName] = useState('');
  const [msg, setMsg] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !msg.trim()) return;
    
    setMessages([{ id: Date.now(), name, message: msg }, ...messages]);
    setName('');
    setMsg('');
  };

  return (
    <section className="guestbook-section">
      <div className="container">
        <h2 className="section-title text-center">Sổ Lưu Bút Thế Hệ</h2>
        
        <div className="guestbook-layout">
          {/* Sổ tay Note form */}
          <div className="guestbook-form-wrap card-bg">
            <h3 className="calligraphy-font text-center">Để lại đôi dòng tâm sự</h3>
            <form onSubmit={handleSubmit} className="guestbook-form">
              <div className="form-group">
                <label>Tên của bạn</label>
                <input 
                  type="text" 
                  value={name} 
                  onChange={(e) => setName(e.target.value)} 
                  placeholder="Nhập tên..." 
                />
              </div>
              <div className="form-group">
                <label>Cảm nghĩ</label>
                <textarea 
                  value={msg} 
                  onChange={(e) => setMsg(e.target.value)} 
                  placeholder="Tri ân..." 
                  rows="4"
                ></textarea>
              </div>
              <button type="submit" className="submit-btn calligraphy-font">Gửi Lưu Bút</button>
            </form>
          </div>

          {/* Cột hiển thị Mock Data */}
          <div className="guestbook-entries">
            {messages.map((item) => (
              <div key={item.id} className="gb-entry card-bg">
                <h4>{item.name}</h4>
                <p className="calligraphy-font">"{item.message}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guestbook;
