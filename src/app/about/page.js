'use client';
import React, { useState, useEffect } from 'react';
import { Typography, Row, Col, Card, Timeline, Avatar, Statistic, Progress, Badge, Button } from 'antd';
import {
  SafetyCertificateOutlined,
  TeamOutlined,
  RocketOutlined,
  CheckCircleOutlined,
  TrophyOutlined,
  GlobalOutlined,
  HeartOutlined,
  StarOutlined,
  EnvironmentOutlined,
  PhoneOutlined,
  MailOutlined,
  CalendarOutlined,
  UserOutlined,
  AimOutlined,
  BulbOutlined
} from '@ant-design/icons';
import Image from 'next/image';
import Link from 'next/link';
import PageHeader from '../../components/PageHeader';
import TeamSection from '../../components/TeamSection';
import styles from './page.module.css';

const { Title, Paragraph } = Typography;

export default function AboutPage() {
  const [animate, setAnimate] = useState(false);
  const [counters, setCounters] = useState({
    experience: 0,
    projects: 0,
    vessels: 0,
    clients: 0
  });

  const breadcrumbs = [
    { label: 'About Us' }
  ];

  // Company statistics
  const stats = [
    { title: "Years of Excellence", value: 19, suffix: "+", icon: <CalendarOutlined />, color: "#1890ff" },
    { title: "Projects Completed", value: 500, suffix: "+", icon: <CheckCircleOutlined />, color: "#52c41a" },
    { title: "Vessels Built", value: 50, suffix: "+", icon: <RocketOutlined />, color: "#722ed1" },
    { title: "Satisfied Clients", value: 300, suffix: "+", icon: <UserOutlined />, color: "#fa8c16" }
  ];

  // Core values with enhanced descriptions
  const coreValues = [
    {
      icon: <TrophyOutlined />,
      title: "Excellence",
      description: "Striving for the highest standards in all our maritime services and operations",
      color: "#1890ff"
    },
    {
      icon: <SafetyCertificateOutlined />,
      title: "Safety",
      description: "Prioritizing the well-being of our team, clients, and the marine environment",
      color: "#52c41a"
    },
    {
      icon: <HeartOutlined />,
      title: "Integrity",
      description: "Operating with honesty, transparency, and ethical business practices",
      color: "#f5222d"
    },
    {
      icon: <BulbOutlined />,
      title: "Innovation",
      description: "Embracing cutting-edge technologies and sustainable maritime solutions",
      color: "#fa8c16"
    },
    {
      icon: <GlobalOutlined />,
      title: "Sustainability",
      description: "Committed to minimizing environmental impact and promoting green shipping",
      color: "#13c2c2"
    },
    {
      icon: <TeamOutlined />,
      title: "Teamwork",
      description: "Fostering collaboration and clear communication across all levels",
      color: "#722ed1"
    }
  ];

  // Enhanced company milestones
  const milestones = [
    {
      year: "2005",
      title: "Foundation & Vision",
      description: "AD Shipping Services was founded with a vision to become India's premier maritime services provider",
      icon: <RocketOutlined />,
      image: "/images/gallery/IMG_0291.JPG",
      achievements: ["Established headquarters in Gujarat", "Initial fleet of 3 tugboats", "First maritime contracts secured"]
    },
    {
      year: "2008",
      title: "Service Expansion",
      description: "Expanded operations to include comprehensive vessel maintenance and repair services",
      icon: <SafetyCertificateOutlined />,
      image: "/images/gallery/IMG_0292.JPG",
      achievements: ["First dry-docking facility established", "ISO 9001 certification achieved", "Team expanded to 50+ professionals"]
    },
    {
      year: "2012",
      title: "Shipbuilding Excellence",
      description: "Entered the shipbuilding sector with focus on custom vessel construction",
      icon: <TrophyOutlined />,
      image: "/images/gallery/IMG_5732.JPG",
      achievements: ["First custom vessel delivered", "Advanced shipyard facilities", "Strategic partnerships formed"]
    },
    {
      year: "2015",
      title: "Fleet Modernization",
      description: "Celebrated a decade of operations with significant fleet expansion and modernization",
      icon: <GlobalOutlined />,
      image: "/images/gallery/IMG_5733.JPG",
      achievements: ["Fleet size doubled", "Offshore supply vessels added", "Regional expansion initiated"]
    },
    {
      year: "2018",
      title: "Specialized Operations",
      description: "Became a key player in SPM operations and offshore loading services",
      icon: <StarOutlined />,
      image: "/images/gallery/IMG_5734.JPG",
      achievements: ["SPM operations launched", "Advanced equipment acquired", "Industry recognition received"]
    },
    {
      year: "2020",
      title: "Digital Transformation",
      description: "Implemented cutting-edge digital solutions across all maritime operations",
      icon: <BulbOutlined />,
      image: "/images/gallery/IMG_5735.JPG",
      achievements: ["Digital fleet management", "IoT integration", "Remote monitoring systems"]
    },
    {
      year: "2024",
      title: "Industry Leadership",
      description: "Recognized as a leading maritime services provider with sustainable practices",
      icon: <CheckCircleOutlined />,
      image: "/images/gallery/IMG_0309.JPG",
      achievements: ["Sustainability initiatives", "Market leadership", "Future expansion plans"]
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 500);

    // Animate counters
    if (animate) {
      const duration = 2000;
      const steps = 60;
      const stepTime = duration / steps;

      stats.forEach((stat, index) => {
        let current = 0;
        const increment = stat.value / steps;

        const counter = setInterval(() => {
          current += increment;
          if (current >= stat.value) {
            current = stat.value;
            clearInterval(counter);
          }

          setCounters(prev => ({
            ...prev,
            [Object.keys(prev)[index]]: Math.floor(current)
          }));
        }, stepTime);
      });
    }

    return () => clearTimeout(timer);
  }, [animate]);

  return (
    <div className={styles.container}>
      <PageHeader title="About AD Shipping Services" breadcrumbs={breadcrumbs} />

      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className="container">
          <Row gutter={[48, 48]} align="middle">
            <Col xs={24} lg={12}>
              <div className={`${styles.heroContent} ${animate ? styles.slideUp : ''}`}>
                <Badge.Ribbon text="Est. 2005" color="blue">
                  <div className={styles.heroHeader}>
                    <Title level={1} className={styles.heroTitle}>
                      Navigating Excellence for Two Decades
                    </Title>
                    <Paragraph className={styles.heroSubtitle}>
                      Leading Maritime Solutions Provider
                    </Paragraph>
                  </div>
                </Badge.Ribbon>

                <Paragraph className={styles.heroDescription}>
                  AD Shipping Services stands as a testament to Indian maritime excellence.
                  For nearly two decades, we have been at the forefront of shipbuilding,
                  vessel maintenance, and comprehensive maritime solutions, serving clients
                  across the globe with unwavering commitment to quality and innovation.
                </Paragraph>

                <div className={styles.heroStats}>
                  <Row gutter={[24, 24]}>
                    {stats.map((stat, index) => (
                      <Col xs={12} sm={6} key={index}>
                        <div className={styles.statItem}>
                          <div className={styles.statIcon} style={{ color: stat.color }}>
                            {stat.icon}
                          </div>
                          <div className={styles.statNumber}>
                            {Object.values(counters)[index]}{stat.suffix}
                          </div>
                          <div className={styles.statLabel}>{stat.title}</div>
                        </div>
                      </Col>
                    ))}
                  </Row>
                </div>

                <div className={styles.heroActions}>
                  <Button type="primary" size="large" className={styles.primaryBtn}>
                    <Link href="/services">Explore Our Services</Link>
                  </Button>
                  <Button size="large" className={styles.secondaryBtn}>
                    <Link href="/contact">Get In Touch</Link>
                  </Button>
                </div>
              </div>
            </Col>
            <Col xs={24} lg={12}>
              <div className={styles.heroImageContainer}>
                <div className={styles.heroImageWrapper}>
                  <Image
                    src="/images/gallery/IMG_0292.JPG"
                    alt="AD Shipping Services - Maritime Excellence"
                    width={600}
                    height={500}
                    className={styles.heroImage}
                  />
                  <div className={styles.imageOverlay}>
                    <div className={styles.overlayContent}>
                      <EnvironmentOutlined className={styles.overlayIcon} />
                      <span>Gujarat, India</span>
                    </div>
                  </div>
                </div>
                <div className={styles.floatingCard}>
                  <div className={styles.cardContent}>
                    <TrophyOutlined className={styles.cardIcon} />
                    <div>
                      <div className={styles.cardTitle}>Industry Leader</div>
                      <div className={styles.cardSubtitle}>Maritime Excellence</div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className={`${styles.section} ${styles.missionSection}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <Title level={2} className={styles.sectionTitle}>Our Mission & Vision</Title>
            <Paragraph className={styles.sectionDescription}>
              Driving maritime excellence through innovation, safety, and sustainable practices
            </Paragraph>
          </div>

          <Row gutter={[48, 48]} align="middle">
            <Col xs={24} lg={12}>
              <Card className={styles.missionCard} bordered={false}>
                <div className={styles.cardHeader}>
                  <div className={styles.cardIcon} style={{ background: 'linear-gradient(135deg, #1890ff 0%, #096dd9 100%)' }}>
                    <AimOutlined />
                  </div>
                  <Title level={3} className={styles.cardTitle}>Our Mission</Title>
                </div>
                <Paragraph className={styles.cardDescription}>
                  To provide reliable, modern, and cost-effective maritime services that comply with
                  the highest applicable quality, safety, and environmental standards. We are committed
                  to delivering innovative solutions that exceed our clients' expectations while
                  contributing to the sustainable development of the maritime industry.
                </Paragraph>
                <div className={styles.cardFeatures}>
                  <div className={styles.feature}>
                    <CheckCircleOutlined className={styles.featureIcon} />
                    <span>Quality Assurance</span>
                  </div>
                  <div className={styles.feature}>
                    <CheckCircleOutlined className={styles.featureIcon} />
                    <span>Safety Standards</span>
                  </div>
                  <div className={styles.feature}>
                    <CheckCircleOutlined className={styles.featureIcon} />
                    <span>Environmental Compliance</span>
                  </div>
                </div>
              </Card>
            </Col>

            <Col xs={24} lg={12}>
              <Card className={styles.visionCard} bordered={false}>
                <div className={styles.cardHeader}>
                  <div className={styles.cardIcon} style={{ background: 'linear-gradient(135deg, #52c41a 0%, #389e0d 100%)' }}>
                    <StarOutlined />
                  </div>
                  <Title level={3} className={styles.cardTitle}>Our Vision</Title>
                </div>
                <Paragraph className={styles.cardDescription}>
                  To be the "First Choice" maritime services provider in India and the region,
                  recognized for our excellence, innovation, and commitment to sustainable practices.
                  We envision a future where AD Shipping Services leads the transformation of the
                  maritime industry through cutting-edge technology and unparalleled service quality.
                </Paragraph>
                <div className={styles.visionGoals}>
                  <div className={styles.goal}>
                    <div className={styles.goalNumber}>2030</div>
                    <div className={styles.goalText}>Market Leadership Goal</div>
                  </div>
                  <div className={styles.goal}>
                    <div className={styles.goalNumber}>100%</div>
                    <div className={styles.goalText}>Sustainable Operations</div>
                  </div>
                </div>
              </Card>
            </Col>
          </Row>
        </div>
      </section>

      {/* Core Values Section */}
      <section className={`${styles.section} ${styles.valuesSection}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <Title level={2} className={styles.sectionTitle}>Our Core Values</Title>
            <Paragraph className={styles.sectionDescription}>
              The principles that guide every decision and action we take
            </Paragraph>
          </div>

          <Row gutter={[32, 32]}>
            {coreValues.map((value, index) => (
              <Col xs={24} sm={12} lg={8} key={index}>
                <Card className={styles.valueCard} bordered={false}>
                  <div className={styles.valueIcon} style={{ color: value.color }}>
                    {value.icon}
                  </div>
                  <Title level={4} className={styles.valueTitle}>{value.title}</Title>
                  <Paragraph className={styles.valueDescription}>
                    {value.description}
                  </Paragraph>
                  <div className={styles.valueProgress}>
                    <Progress
                      percent={100}
                      strokeColor={value.color}
                      showInfo={false}
                      strokeWidth={4}
                    />
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </section>

      {/* Company Journey Timeline */}
      <section className={`${styles.section} ${styles.timelineSection}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <Title level={2} className={styles.sectionTitle}>Our Journey Through Time</Title>
            <Paragraph className={styles.sectionDescription}>
              Two decades of growth, innovation, and maritime excellence
            </Paragraph>
          </div>

          <div className={styles.timelineContainer}>
            <Timeline
              mode="alternate"
              className={styles.enhancedTimeline}
              items={milestones.map((milestone, index) => ({
                dot: (
                  <div className={styles.timelineDot} style={{ background: `linear-gradient(135deg, ${coreValues[index % coreValues.length].color} 0%, ${coreValues[index % coreValues.length].color}80 100%)` }}>
                    {milestone.icon}
                  </div>
                ),
                children: (
                  <Card className={styles.timelineCard} bordered={false}>
                    <div className={styles.timelineCardHeader}>
                      <div className={styles.timelineYear}>{milestone.year}</div>
                      <Title level={4} className={styles.timelineTitle}>{milestone.title}</Title>
                    </div>
                    <Paragraph className={styles.timelineDescription}>
                      {milestone.description}
                    </Paragraph>
                    <div className={styles.timelineImage}>
                      <Image
                        src={milestone.image}
                        alt={milestone.title}
                        width={300}
                        height={200}
                        className={styles.milestoneImage}
                      />
                    </div>
                    <div className={styles.achievements}>
                      <Title level={5} className={styles.achievementsTitle}>Key Achievements:</Title>
                      <ul className={styles.achievementsList}>
                        {milestone.achievements.map((achievement, idx) => (
                          <li key={idx} className={styles.achievementItem}>
                            <CheckCircleOutlined className={styles.achievementIcon} />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Card>
                ),
                color: coreValues[index % coreValues.length].color
              }))}
            />
          </div>
        </div>
      </section>

      {/* Leadership Message */}
      <section className={`${styles.section} ${styles.leadershipSection}`}>
        <div className="container">
          <Row gutter={[48, 48]} align="middle">
            <Col xs={24} lg={12}>
              <div className={styles.leadershipContent}>
                <Title level={2} className={styles.leadershipTitle}>
                  A Message from Our Leadership
                </Title>
                <Paragraph className={styles.leadershipQuote}>
                  "At AD Shipping Services, we believe that our success is built on the foundation
                  of trust, innovation, and unwavering commitment to excellence. As we look towards
                  the future, we remain dedicated to pushing the boundaries of what's possible in
                  the maritime industry while staying true to our core values."
                </Paragraph>
                <div className={styles.leadershipSignature}>
                  <div className={styles.signatureInfo}>
                    <Title level={4} className={styles.signatureName}>Amit Vora</Title>
                    <Paragraph className={styles.signatureTitle}>Managing Director</Paragraph>
                  </div>
                  <div className={styles.contactInfo}>
                    <div className={styles.contactItem}>
                      <PhoneOutlined className={styles.contactIcon} />
                      <span>+91-9909480248</span>
                    </div>
                    <div className={styles.contactItem}>
                      <MailOutlined className={styles.contactIcon} />
                      <span>adshippingservices@gmail.com</span>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={24} lg={12}>
              <div className={styles.leadershipImageContainer}>
                <Image
                  src="/images/gallery/IMG_4540.JPG"
                  alt="AD Shipping Services Leadership"
                  width={500}
                  height={400}
                  className={styles.leadershipImage}
                />
                <div className={styles.leadershipOverlay}>
                  <div className={styles.overlayText}>
                    <Title level={3} className={styles.overlayTitle}>Leading with Vision</Title>
                    <Paragraph className={styles.overlayDescription}>
                      Guiding the maritime industry towards a sustainable future
                    </Paragraph>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>

      {/* Call to Action */}
      <section className={`${styles.section} ${styles.ctaSection}`}>
        <div className="container">
          <div className={styles.ctaContent}>
            <Title level={2} className={styles.ctaTitle}>
              Ready to Partner with Industry Leaders?
            </Title>
            <Paragraph className={styles.ctaDescription}>
              Join hundreds of satisfied clients who trust AD Shipping Services for their maritime needs.
              Let's discuss how we can help you achieve your goals.
            </Paragraph>
            <div className={styles.ctaActions}>
              <Button type="primary" size="large" className={styles.ctaPrimary}>
                <Link href="/contact">Start Your Project</Link>
              </Button>
              <Button size="large" className={styles.ctaSecondary}>
                <Link href="/services">Explore Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <TeamSection />
    </div>
  );
}