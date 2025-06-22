'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Button, Row, Col } from 'antd';
import Link from 'next/link';
import styles from './HeroSection.module.css';

const HeroSection = () => {
  const [animate, setAnimate] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef(null);
  const playPromise = useRef(null);

  useEffect(() => {
    // Check if video is supported
    const isVideoSupported = document.createElement('video').canPlayType('video/mp4');
    if (!isVideoSupported) {
      setVideoError(true);
      return;
    }

    // Trigger animations after component mounts
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 300);

    // Handle video play
    const handleVideoPlay = async () => {
      if (!videoRef.current) return;
      
      try {
        playPromise.current = videoRef.current.play();
        await playPromise.current;
      } catch (error) {
        console.error("Video play failed:", error);
        setVideoError(true);
      }
    };

    // Handle video error
    const handleVideoError = () => {
      console.log("Video error occurred");
      setVideoError(true);
    };

    const video = videoRef.current;
    if (video) {
      video.addEventListener('loadedmetadata', handleVideoPlay, { once: true });
      video.addEventListener('error', handleVideoError, { once: true });
      
      // Try to play immediately if metadata is already loaded
      if (video.readyState >= 2) {
        handleVideoPlay().catch(console.error);
      }
    }

    // Set a timeout to show fallback if video doesn't load within 3 seconds
    const fallbackTimer = setTimeout(() => {
      if (video && (video.readyState < 3 || video.paused)) {
        setVideoError(true);
      }
    }, 3000);

    // Cleanup function
    return () => {
      clearTimeout(timer);
      clearTimeout(fallbackTimer);
      if (video) {
        video.removeEventListener('loadedmetadata', handleVideoPlay);
        video.removeEventListener('error', handleVideoError);
      }
      if (playPromise.current) {
        playPromise.current.catch(() => {});
      }
    };
  }, []);

  return (
    <div className={styles.heroContainer}>
      <div className={styles.videoContainer}>
        {!videoError ? (
          <video 
            ref={videoRef}
            autoPlay 
            loop 
            muted 
            playsInline
            className={styles.videoBackground}
            onError={() => setVideoError(true)}
          >
            <source 
              src="https://vod-progressive-ak.vimeocdn.com/exp=1750598776~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F291%2F19%2F476459481%2F2127038540.mp4~hmac=ff8a826172828a9ee6e9c351d4d6128799015a0a6e313269985032d07d6c9134/vimeo-prod-skyfire-std-us/01/291/19/476459481/2127038540.mp4" 
              type="video/mp4" 
            />
            Your browser does not support the video tag.
          </video>
        ) : (
          <div className={styles.fallbackImage}></div>
        )}
      </div>
      <div className={styles.overlay}></div>
      
      {/* Rest of your component remains the same */}
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