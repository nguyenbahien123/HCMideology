import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';

const ThemeToggle = ({ theme, toggleTheme }) => {
  return (
    <motion.button 
      className="theme-toggle-btn"
      onClick={toggleTheme}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1 }}
      title="Chuyển thời kỳ Lịch sử"
    >
      <div className="theme-toggle-icon">
        {theme === 'light' ? <Sun size={20} /> : <Moon size={20} />}
      </div>
      <span className="theme-toggle-text">
        {theme === 'light' ? 'Bình minh' : 'Đêm đen'}
      </span>
    </motion.button>
  );
};

export default ThemeToggle;
