'use client';

import React, { useState, useEffect } from 'react';
import { Button, Row, Col, Statistic, Card } from 'antd';
import {
  PlayCircleOutlined,
  PhoneOutlined,
  RocketOutlined,
  SafetyCertificateOutlined,
  TeamOutlined,
  TrophyOutlined
} from '@ant-design/icons';
import Link from 'next/link';
import AnimatedLogo from '../AnimatedLogo';
import styles from './HeroSection.module.css';

const HeroSection = () => {
  const [animate, setAnimate] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      title: "Leading Maritime Solutions",
      subtitle: "Shipbuilding, Modification & Dry Dock Experts",
      description: "Providing comprehensive maritime solutions with excellence and reliability since 2005. Our expert team delivers top-quality services for all your shipping needs.",
      cta1: { text: "Explore Services", link: "/services", type: "primary" },
      cta2: { text: "Get Quote", link: "/contact", type: "outline" }
    },
    {
      title: "Advanced Shipbuilding",
      subtitle: "Custom Vessels Built to Perfection",
      description: "From mini bulk carriers to specialized stone carrier barges, we design and construct vessels that meet the highest industry standards with precision engineering.",
      cta1: { text: "View Fleet", link: "/gallery", type: "primary" },
      cta2: { text: "Learn More", link: "/about", type: "outline" }
    },
    {
      title: "Expert Dry Dock Services",
      subtitle: "Complete Maintenance & Repair Solutions",
      description: "Our state-of-the-art dry dock facilities provide comprehensive maintenance, repair, and modification services to keep your vessels operating at peak performance.",
      cta1: { text: "Our Services", link: "/services#drydock", type: "primary" },
      cta2: { text: "Contact Us", link: "/contact", type: "outline" }
    }
  ];

  

  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 300);

    // Auto-slide functionality
    const slideTimer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 8000);

    return () => {
      clearTimeout(timer);
      clearInterval(slideTimer);
    };
  }, [heroSlides.length]);

  const currentSlideData = heroSlides[currentSlide];

  return (
    <div className={styles.heroContainer}>
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className={styles.videoBackground}
        src="https://vod-progressive-ak.vimeocdn.com/exp=1750598776~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F291%2F19%2F476459481%2F2127038540.mp4~hmac=ff8a826172828a9ee6e9c351d4d6128799015a0a6e313269985032d07d6c9134/vimeo-prod-skyfire-std-us/01/291/19/476459481/2127038540.mp4"
      />

      {/* Gradient Overlay */}
      <div className={styles.overlay}></div>

      {/* Animated Logo Watermark */}
      <div className={styles.logoWatermark}>
        <AnimatedLogo width={120} height={36} animate={animate} />
      </div>

      {/* Main Content */}
      <div className={styles.content}>
        <div className="container">
          <Row justify="center" align="middle" className={styles.heroRow}>
            <Col xs={24} sm={22} md={20} lg={18} xl={16}>
              <div className={`${styles.textContent} ${animate ? styles.slideUp : ''}`}>
                <div className={styles.badge}>
                  <SafetyCertificateOutlined className={styles.badgeIcon} />
                  <span>Trusted Maritime Partner Since 2005</span>
                </div>

                <h1 className={styles.title}>
                  {currentSlideData.title}
                </h1>

                <h2 className={styles.subtitle}>
                  {currentSlideData.subtitle}
                </h2>

                <p className={styles.description}>
                  {currentSlideData.description}
                </p>

                <div className={styles.ctaButtons}>
                  <Button
                    type="primary"
                    size="large"
                    className={`${styles.ctaButton} ${styles.primaryCta}`}
                    icon={<RocketOutlined />}
                  >
                    <Link href={currentSlideData.cta1.link}>
                      {currentSlideData.cta1.text}
                    </Link>
                  </Button>

                  <Button
                    size="large"
                    className={`${styles.ctaButton} ${styles.secondaryCta}`}
                    icon={<PhoneOutlined />}
                  >
                    <Link href={currentSlideData.cta2.link}>
                      {currentSlideData.cta2.text}
                    </Link>
                  </Button>

                  <Button
                    type="text"
                    size="large"
                    className={styles.playButton}
                    icon={<PlayCircleOutlined />}
                  >
                    Watch Our Story
                  </Button>
                </div>

                {/* Slide Indicators */}
                <div className={styles.slideIndicators}>
                  {heroSlides.map((_, index) => (
                    <button
                      key={index}
                      className={`${styles.indicator} ${index === currentSlide ? styles.active : ''}`}
                      onClick={() => setCurrentSlide(index)}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>

   

      {/* Scroll Indicator */}
      <div className={styles.scrollIndicator}>
        <div className={styles.scrollMouse}>
          <div className={styles.scrollWheel}></div>
        </div>
        <span className={styles.scrollText}>Scroll to explore</span>
      </div>
    </div>
  );
};

export default HeroSection;