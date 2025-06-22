'use client';

import React, { useState, useEffect } from 'react';
import { Button, Row, Col } from 'antd';
import Link from 'next/link';
import styles from './HeroSection.module.css';

const HeroSection = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.heroContainer}>
      <video 
        autoPlay 
        loop 
        muted 
        className={styles.videoBackground}
        src="https://vod-progressive-ak.vimeocdn.com/exp=1750598776~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F291%2F19%2F476459481%2F2127038540.mp4~hmac=ff8a826172828a9ee6e9c351d4d6128799015a0a6e313269985032d07d6c9134/vimeo-prod-skyfire-std-us/01/291/19/476459481/2127038540.mp4"
      />
      <div className={styles.overlay}></div>
      
      {/* Main content */}
      <div className={styles.content}>
        <Row justify="center">
          <Col xs={24} sm={22} md={20} lg={18} xl={16}>
            <div className={`${styles.textContent} ${animate ? styles.fadeIn : ''}`}>
              <h1 className={styles.title}>AD Shipping Services</h1>
              <h2 className={styles.subtitle}>Shipbuilding, Modification & Dry Dock Experts</h2>
              <p className={styles.description}>
                Providing comprehensive maritime solutions with excellence and reliability since 2005.
                Our expert team delivers top-quality services for all your shipping needs.
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default HeroSection;