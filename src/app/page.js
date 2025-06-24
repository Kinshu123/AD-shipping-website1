'use client';
import React, { useState, useEffect } from 'react';
import { Row, Col, Card, Button, Timeline, Badge, Carousel, Statistic } from 'antd';
import {
  ArrowRightOutlined,
  SafetyCertificateOutlined,
  TrophyOutlined,
  TeamOutlined,
  GlobalOutlined,
  CheckCircleOutlined,
  StarFilled,
  PlayCircleOutlined,
  PhoneOutlined,
  MailOutlined
} from '@ant-design/icons';
import Link from 'next/link';
import Image from 'next/image';
import HeroSection from '../components/HeroSection';
import ServiceCard from '../components/ServiceCard';
import TeamSection from '../components/TeamSection';
import servicesData from '../utils/servicesData';
import styles from './page.module.css';

export default function Home() {
  const [animate, setAnimate] = useState(false);

  // Display featured services
  const featuredServices = servicesData.slice(0, 3);

  // Company achievements
  const achievements = [
    {
      year: "2005",
      title: "Company Founded",
      description: "AD Shipping Services established in Abu Dhabi"
    },
    {
      year: "2010",
      title: "Fleet Expansion",
      description: "Expanded fleet to 25+ vessels"
    },
    {
      year: "2015",
      title: "International Recognition",
      description: "Received ISO certification for quality management"
    },
    {
      year: "2020",
      title: "Digital Transformation",
      description: "Implemented advanced maritime technologies"
    },
    {
      year: "2024",
      title: "Industry Leader",
      description: "Recognized as leading maritime service provider"
    }
  ];

  // Client testimonials
  const testimonials = [
    {
      name: "Ahmed Al-Rashid",
      company: "Gulf Maritime Corp",
      rating: 5,
      text: "AD Shipping Services has been our trusted partner for over 8 years. Their expertise in shipbuilding and maintenance is unmatched.",
      image: "/images/team-1.svg"
    },
    {
      name: "Sarah Johnson",
      company: "International Shipping Ltd",
      rating: 5,
      text: "Professional, reliable, and always delivering on time. Their dry dock services have kept our fleet in perfect condition.",
      image: "/images/team-2.svg"
    },
    {
      name: "Mohammed Hassan",
      company: "Emirates Port Authority",
      rating: 5,
      text: "Exceptional quality and attention to detail. AD Shipping Services consistently exceeds our expectations.",
      image: "/images/team-3.svg"
    }
  ];

  // Why choose us features
  const whyChooseUs = [
    {
      icon: <SafetyCertificateOutlined />,
      title: "Safety First",
      description: "Certified safety protocols and international compliance standards"
    },
    {
      icon: <TrophyOutlined />,
      title: "Award Winning",
      description: "Recognized excellence in maritime services and customer satisfaction"
    },
    {
      icon: <TeamOutlined />,
      title: "Expert Team",
      description: "Highly skilled professionals with decades of maritime experience"
    },
    {
      icon: <GlobalOutlined />,
      title: "Global Reach",
      description: "Serving clients worldwide with comprehensive maritime solutions"
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <section className={`${styles.section} ${styles.aboutSection}`}>
        <div className="container">
          <Row gutter={[48, 48]} align="middle">
            <Col xs={24} lg={12}>
              <div className={styles.aboutImageContainer}>
                <div className={styles.aboutImageWrapper}>
                  <Image
                    src="/images/gallery/IMG_5735.JPG"
                    alt="AD Shipping Services - Maritime Excellence"
                    width={600}
                    height={400}
                    className={styles.aboutImage}
                  />
                  <div className={styles.imageOverlay}>
                    <Button
                      type="primary"
                      shape="circle"
                      size="large"
                      icon={<PlayCircleOutlined />}
                      className={styles.playButton}
                    />
                  </div>
                </div>
               
              </div>
            </Col>
            <Col xs={24} lg={12}>
              <div className={styles.aboutContent}>
                <Badge.Ribbon text="Industry Leader" color="blue">
                  <div className={styles.aboutHeader}>
                    <h2 className={styles.aboutTitle}>
                      Leading Maritime Solutions Provider
                    </h2>
                    <p className={styles.aboutSubtitle}>
                      Delivering Excellence Since 2005
                    </p>
                  </div>
                </Badge.Ribbon>

                <p className={styles.aboutDescription}>
                  AD Shipping Services has established itself as a premier maritime services provider,
                  offering comprehensive solutions from shipbuilding and modifications to dry dock
                  services and port operations. Our commitment to quality, safety, and innovation
                  has made us the trusted choice for clients worldwide.
                </p>

                <div className={styles.aboutFeatures}>
                  {whyChooseUs.map((feature, index) => (
                    <div key={index} className={styles.featureItem}>
                      <div className={styles.featureIcon}>{feature.icon}</div>
                      <div className={styles.featureContent}>
                        <h4 className={styles.featureTitle}>{feature.title}</h4>
                        <p className={styles.featureDescription}>{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className={styles.aboutActions}>
                  <Button
                    type="primary"
                    size="large"
                    className={styles.primaryButton}
                    icon={<ArrowRightOutlined />}
                  >
                    <Link href="/about">Discover Our Story</Link>
                  </Button>
                  <Button
                    size="large"
                    className={styles.secondaryButton}
                    icon={<PhoneOutlined />}
                  >
                    <Link href="/contact">Get In Touch</Link>
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>

      {/* Services Section */}
      <section className={`${styles.section} ${styles.servicesSection}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <Badge count="Featured" color="blue" className={styles.sectionBadge}>
              <h2 className={styles.sectionTitle}>Our Core Services</h2>
            </Badge>
            <p className={styles.sectionDescription}>
              Comprehensive maritime solutions tailored to meet your specific operational requirements
            </p>
          </div>

          <Row gutter={[32, 32]} className={styles.servicesGrid}>
            {featuredServices.map((service, index) => (
              <Col xs={24} md={8} key={service.id}>
                <div className={`${styles.serviceCardWrapper} ${animate ? styles.slideUp : ''}`}
                     style={{ animationDelay: `${index * 0.2}s` }}>
                  <ServiceCard
                    icon={service.icon}
                    title={service.title}
                    description={service.description}
                    link={service.link}
                  />
                </div>
              </Col>
            ))}
          </Row>

          <div className={styles.sectionFooter}>
            <Button
              type="primary"
              size="large"
              className={styles.viewAllButton}
              icon={<ArrowRightOutlined />}
            >
              <Link href="/services">Explore All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Company Timeline
      <section className={`${styles.section} ${styles.timelineSection}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Our Journey</h2>
            <p className={styles.sectionDescription}>
              Two decades of growth, innovation, and maritime excellence
            </p>
          </div>

          <div className={styles.timelineContainer}>
            <Timeline
              mode="alternate"
              className={styles.timeline}
              items={achievements.map((achievement, index) => ({
                children: (
                  <div className={styles.timelineItem}>
                    <div className={styles.timelineYear}>{achievement.year}</div>
                    <h4 className={styles.timelineTitle}>{achievement.title}</h4>
                    <p className={styles.timelineDescription}>{achievement.description}</p>
                  </div>
                ),
                color: index % 2 === 0 ? 'blue' : 'green'
              }))}
            />
          </div>
        </div>
      </section> */}

      {/* Statistics Section */}
      <section className={styles.statsSection}>
        <div className="container">
          <Row gutter={[32, 32]} justify="center">
            <Col xs={12} sm={6}>
              <Card className={styles.statCard} bordered={false}>
                <Statistic
                  title="Years of Experience"
                  value={19}
                  suffix="+"
                  className={styles.statistic}
                />
              </Card>
            </Col>
            <Col xs={12} sm={6}>
              <Card className={styles.statCard} bordered={false}>
                <Statistic
                  title="Projects Completed"
                  value={500}
                  suffix="+"
                  className={styles.statistic}
                />
              </Card>
            </Col>
            <Col xs={12} sm={6}>
              <Card className={styles.statCard} bordered={false}>
                <Statistic
                  title="Vessels Built"
                  value={50}
                  suffix="+"
                  className={styles.statistic}
                />
              </Card>
            </Col>
            <Col xs={12} sm={6}>
              <Card className={styles.statCard} bordered={false}>
                <Statistic
                  title="Satisfied Clients"
                  value={300}
                  suffix="+"
                  className={styles.statistic}
                />
              </Card>
            </Col>
          </Row>
        </div>
      </section>

      
      {/* Team Section */}
      <TeamSection />

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaContent}>
            <div className={styles.ctaHeader}>
              <h2 className={styles.ctaTitle}>Ready to Set Sail?</h2>
              <p className={styles.ctaSubtitle}>
                Partner with us for your next maritime project
              </p>
            </div>
            <p className={styles.ctaDescription}>
              From concept to completion, we deliver maritime solutions that exceed expectations.
              Contact our expert team today to discuss your requirements and discover how we can
              help you achieve your maritime goals.
            </p>
            <div className={styles.ctaActions}>
              <Button
                type="primary"
                size="large"
                className={styles.ctaPrimary}
                icon={<MailOutlined />}
              >
                <Link href="/contact">Get Free Quote</Link>
              </Button>
              <Button
                size="large"
                className={styles.ctaSecondary}
                icon={<PhoneOutlined />}
              >
                <Link href="tel:+919909480248">Call Now</Link>
              </Button>
            </div>
            <div className={styles.ctaContact}>
              <span>Or call us directly: </span>
              <a href="tel:+919909480248" className={styles.phoneLink}>+91-9909480248</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
