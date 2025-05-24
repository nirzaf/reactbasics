import { type FC } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero: FC = () => {
  return (
    <div className="hero-container">
      <motion.div 
        className="hero-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Welcome to Employee Directory
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Discover our amazing team members and their skills
        </motion.p>
        
        <Link to="/employees">
          <motion.button
            className="hero-button"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Team
          </motion.button>
        </Link>
      </motion.div>
      
      <motion.div 
        className="hero-image"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <motion.div 
          className="floating-card"
          animate={{ 
            y: [0, -15, 0],
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 3,
            ease: "easeInOut"
          }}
        >
          <div className="card-content">
            <div className="card-avatar"></div>
            <div className="card-info">
              <div className="card-line"></div>
              <div className="card-line short"></div>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          className="floating-card second"
          animate={{ 
            y: [0, -20, 0],
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 4,
            ease: "easeInOut",
            delay: 0.5
          }}
        >
          <div className="card-content">
            <div className="card-avatar"></div>
            <div className="card-info">
              <div className="card-line"></div>
              <div className="card-line short"></div>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          className="floating-card third"
          animate={{ 
            y: [0, -12, 0],
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 3.5,
            ease: "easeInOut",
            delay: 1
          }}
        >
          <div className="card-content">
            <div className="card-avatar"></div>
            <div className="card-info">
              <div className="card-line"></div>
              <div className="card-line short"></div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
