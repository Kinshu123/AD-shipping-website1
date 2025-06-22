'use client';
import React, { useState, useEffect } from 'react';
import { Typography, Row, Col, Divider, List, Card, Button, Badge, Progress, Statistic, Tabs } from 'antd';
import {
  CheckCircleOutlined,
  SafetyCertificateOutlined,
  TrophyOutlined,
  TeamOutlined,
  ClockCircleOutlined,
  ToolOutlined,
  RocketOutlined,
  GlobalOutlined,
  PhoneOutlined,
  MailOutlined,
  ArrowRightOutlined,
  StarFilled,
  PlayCircleOutlined
} from '@ant-design/icons';
import Image from 'next/image';
import Link from 'next/link';
import PageHeader from '../../components/PageHeader';
import ServiceCard from '../../components/ServiceCard';
import servicesData from '../../utils/servicesData';
import styles from './page.module.css';

const { Title, Paragraph } = Typography;
const { TabPane } = Tabs;

export default function ServicesPage() {
  const [animate, setAnimate] = useState(false);
  const [activeService, setActiveService] = useState(0);

  const breadcrumbs = [
    { label: 'Services' }
  ];

  // Enhanced service statistics
  const serviceStats = [
    { title: "Projects Completed", value: 500, suffix: "+", icon: <CheckCircleOutlined />, color: "#52c41a" },
    { title: "Years Experience", value: 19, suffix: "+", icon: <TrophyOutlined />, color: "#1890ff" },
    { title: "Expert Technicians", value: 150, suffix: "+", icon: <TeamOutlined />, color: "#722ed1" },
    { title: "Client Satisfaction", value: 98, suffix: "%", icon: <StarFilled />, color: "#fa8c16" }
  ];

  // Why choose us features
  const whyChooseFeatures = [
    {
      icon: <SafetyCertificateOutlined />,
      title: "Industry Experience",
      description: "Over 19 years of proven expertise in maritime services and shipbuilding",
      stats: "500+ Projects",
      color: "#1890ff"
    },
    {
      icon: <SafetyCertificateOutlined />,
      title: "Quality Assurance",
      description: "ISO certified processes ensuring the highest standards of quality and reliability",
      stats: "ISO 9001:2015",
      color: "#52c41a"
    },
    {
      icon: <GlobalOutlined />,
      title: "Safety First",
      description: "Comprehensive safety protocols and regular training for secure operations",
      stats: "Zero Incidents",
      color: "#f5222d"
    },
    {
      icon: <RocketOutlined />,
      title: "Innovation",
      description: "Cutting-edge technology and innovative solutions for modern maritime challenges",
      stats: "Latest Tech",
      color: "#fa8c16"
    },
    {
      icon: <ClockCircleOutlined />,
      title: "Timely Delivery",
      description: "Committed to delivering projects on time without compromising on quality",
      stats: "98% On-Time",
      color: "#722ed1"
    },
    {
      icon: <TeamOutlined />,
      title: "Expert Team",
      description: "Highly skilled professionals with extensive maritime industry experience",
      stats: "150+ Experts",
      color: "#13c2c2"
    }
  ];

  // Service categories for better organization
  const serviceCategories = [
    {
      title: "Shipbuilding & Construction",
      description: "Custom vessel design and construction services",
      services: servicesData.filter(s => s.category === 'shipbuilding'),
      icon: <RocketOutlined />,
      color: "#1890ff"
    },
    {
      title: "Maintenance & Repair",
      description: "Comprehensive vessel maintenance and repair solutions",
      services: servicesData.filter(s => s.category === 'maintenance'),
      icon: <ToolOutlined />,
      color: "#52c41a"
    },
    {
      title: "Support Services",
      description: "Marine support and operational assistance",
      services: servicesData.filter(s => s.category === 'support'),
      icon: <TeamOutlined />,
      color: "#722ed1"
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.container}>
      <PageHeader title="Our Maritime Services" breadcrumbs={breadcrumbs} />

      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className="container">
          <Row gutter={[48, 48]} align="middle">
            <Col xs={24} lg={12}>
              <div className={`${styles.heroContent} ${animate ? styles.slideUp : ''}`}>
                <Badge.Ribbon text="Full Service Provider" color="blue">
                  <div className={styles.heroHeader}>
                    <Title level={1} className={styles.heroTitle}>
                      Comprehensive Maritime Solutions
                    </Title>
                    <Paragraph className={styles.heroSubtitle}>
                      From Concept to Completion
                    </Paragraph>
                  </div>
                </Badge.Ribbon>

                <Paragraph className={styles.heroDescription}>
                  AD Shipping Services delivers end-to-end maritime solutions with unmatched expertise
                  in shipbuilding, vessel modifications, dry-docking, and marine support services.
                  Our commitment to excellence, safety, and innovation makes us the preferred choice
                  for maritime projects across India and beyond.
                </Paragraph>

                <div className={styles.heroStats}>
                  <Row gutter={[24, 24]}>
                    {serviceStats.map((stat, index) => (
                      <Col xs={12} sm={6} key={index}>
                        <Card className={styles.statCard} bordered={false}>
                          <Statistic
                            title={stat.title}
                            value={stat.value}
                            suffix={stat.suffix}
                            prefix={<div className={styles.statIcon} style={{ color: stat.color }}>{stat.icon}</div>}
                            className={styles.statistic}
                          />
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </div>

                <div className={styles.heroActions}>
                  <Button type="primary" size="large" className={styles.primaryBtn}>
                    <Link href="#services">Explore Services</Link>
                  </Button>
                  <Button size="large" className={styles.secondaryBtn} icon={<PlayCircleOutlined />}>
                    Watch Our Work
                  </Button>
                </div>
              </div>
            </Col>
            <Col xs={24} lg={12}>
              <div className={styles.heroImageContainer}>
                <div className={styles.heroImageWrapper}>
                  <Image
                    src="/images/gallery/IMG_5735.JPG"
                    alt="AD Shipping Services - Maritime Excellence"
                    width={600}
                    height={500}
                    className={styles.heroImage}
                  />
                  <div className={styles.imageOverlay}>
                    <div className={styles.overlayContent}>
                      <Title level={3} className={styles.overlayTitle}>19+ Years</Title>
                      <Paragraph className={styles.overlayText}>of Maritime Excellence</Paragraph>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>

      {/* Services Overview */}
      <section className={`${styles.section} ${styles.servicesSection}`} id="services">
        <div className="container">
          <div className={styles.sectionHeader}>
            <Title level={2} className={styles.sectionTitle}>Our Core Services</Title>
            <Paragraph className={styles.sectionDescription}>
              Comprehensive maritime solutions tailored to meet your specific operational requirements
            </Paragraph>
          </div>

          <Row gutter={[32, 32]}>
            {servicesData.map((service, index) => (
              <Col xs={24} md={8} key={service.id}>
                <div className={`${styles.serviceCardWrapper} ${animate ? styles.slideUp : ''}`}
                     style={{ animationDelay: `${index * 0.1}s` }}>
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
        </div>
      </section>

      {/* Service Categories */}
      <section className={`${styles.section} ${styles.categoriesSection}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <Title level={2} className={styles.sectionTitle}>Service Categories</Title>
            <Paragraph className={styles.sectionDescription}>
              Organized expertise across all maritime service domains
            </Paragraph>
          </div>

          <Tabs
            defaultActiveKey="0"
            centered
            size="large"
            className={styles.serviceTabs}
            onChange={(key) => setActiveService(parseInt(key))}
          >
            {serviceCategories.map((category, index) => (
              <TabPane
                tab={
                  <div className={styles.tabHeader}>
                    <div className={styles.tabIcon} style={{ color: category.color }}>
                      {category.icon}
                    </div>
                    <span>{category.title}</span>
                  </div>
                }
                key={index}
              >
                <div className={styles.categoryContent}>
                  <Row gutter={[32, 32]}>
                    <Col xs={24} lg={8}>
                      <Card className={styles.categoryCard} bordered={false}>
                        <div className={styles.categoryHeader}>
                          <div className={styles.categoryIcon} style={{ background: `${category.color}20`, color: category.color }}>
                            {category.icon}
                          </div>
                          <Title level={3} className={styles.categoryTitle}>{category.title}</Title>
                        </div>
                        <Paragraph className={styles.categoryDescription}>
                          {category.description}
                        </Paragraph>
                        <div className={styles.categoryStats}>
                          <div className={styles.statItem}>
                            <span className={styles.statNumber}>{category.services?.length || servicesData.length}</span>
                            <span className={styles.statLabel}>Services</span>
                          </div>
                          <div className={styles.statItem}>
                            <span className={styles.statNumber}>100+</span>
                            <span className={styles.statLabel}>Projects</span>
                          </div>
                        </div>
                      </Card>
                    </Col>
                    <Col xs={24} lg={16}>
                      <Row gutter={[24, 24]}>
                        {(category.services?.length ? category.services : servicesData).map((service, idx) => (
                          <Col xs={24} sm={12} key={idx}>
                            <Card className={styles.serviceDetailCard} bordered={false}>
                              <div className={styles.serviceDetailHeader}>
                                <div className={styles.serviceDetailIcon}>
                                  {service.icon}
                                </div>
                                <Title level={4} className={styles.serviceDetailTitle}>
                                  {service.title}
                                </Title>
                              </div>
                              <Paragraph className={styles.serviceDetailDescription}>
                                {service.description}
                              </Paragraph>
                              <Button
                                type="link"
                                className={styles.serviceDetailLink}
                                icon={<ArrowRightOutlined />}
                              >
                                <Link href={`#${service.link.split('#')[1]}`}>Learn More</Link>
                              </Button>
                            </Card>
                          </Col>
                        ))}
                      </Row>
                    </Col>
                  </Row>
                </div>
              </TabPane>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Detailed Service Descriptions */}
      {servicesData.map((service, index) => (
        <section
          className={`${styles.serviceDetailSection} ${index % 2 === 0 ? styles.evenSection : styles.oddSection}`}
          key={service.id}
          id={service.link.split('#')[1]}
        >
          <div className="container">
            <Row gutter={[48, 48]} align="middle">
              <Col xs={24} lg={12} className={index % 2 === 0 ? styles.orderMobile2 : ''}>
                <div className={styles.serviceImageContainer}>
                  <div className={styles.serviceImageWrapper}>
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={600}
                      height={400}
                      className={styles.serviceImage}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = '/images/placeholder-service.jpg';
                      }}
                    />
                    <div className={styles.serviceImageOverlay}>
                      <Button
                        type="primary"
                        shape="circle"
                        size="large"
                        icon={<PlayCircleOutlined />}
                        className={styles.playButton}
                      />
                    </div>
                  </div>
                  <div className={styles.serviceBadge}>
                    <div className={styles.badgeContent}>
                      <div className={styles.badgeIcon}>{service.icon}</div>
                      <span className={styles.badgeText}>Expert Service</span>
                    </div>
                  </div>
                </div>
              </Col>
              <Col xs={24} lg={12} className={index % 2 === 0 ? styles.orderMobile1 : ''}>
                <div className={styles.serviceContent}>
                  <Badge count="Featured" color="blue" className={styles.serviceBadgeRibbon}>
                    <Title level={2} className={styles.serviceTitle}>{service.title}</Title>
                  </Badge>

                  <Paragraph className={styles.serviceOverview}>
                    {service.details?.overview || service.description}
                  </Paragraph>

                  <div className={styles.serviceFeatures}>
                    <Title level={4} className={styles.featuresTitle}>
                      <CheckCircleOutlined className={styles.featuresIcon} />
                      Key Features & Benefits
                    </Title>
                    <List
                      dataSource={service.details?.features || [
                        "Professional expertise and experience",
                        "Quality assurance and safety standards",
                        "Timely project completion",
                        "Competitive pricing and value"
                      ]}
                      renderItem={(item) => (
                        <List.Item className={styles.featureItem}>
                          <CheckCircleOutlined className={styles.featureBullet} />
                          <span className={styles.featureText}>{item}</span>
                        </List.Item>
                      )}
                    />
                  </div>

                  <div className={styles.serviceProcess}>
                    <Title level={4} className={styles.processTitle}>
                      <ToolOutlined className={styles.processIcon} />
                      Our Process
                    </Title>
                    <Paragraph className={styles.processDescription}>
                      {service.details?.process || "Our systematic approach ensures quality delivery from initial consultation through project completion, with regular updates and quality checkpoints throughout the process."}
                    </Paragraph>
                  </div>

                  <div className={styles.serviceActions}>
                    <Button type="primary" size="large" className={styles.serviceBtn}>
                      <Link href="/contact">Get Quote</Link>
                    </Button>
                    <Button size="large" className={styles.serviceSecondaryBtn}>
                      <Link href="/gallery">View Projects</Link>
                    </Button>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </section>
      ))}

      {/* Why Choose Us */}
      <section className={`${styles.section} ${styles.whyChooseSection}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <Title level={2} className={styles.sectionTitle}>Why Choose AD Shipping Services</Title>
            <Paragraph className={styles.sectionDescription}>
              When you partner with us, you benefit from our unwavering commitment to excellence,
              safety, and customer satisfaction backed by decades of maritime expertise.
            </Paragraph>
          </div>

          <Row gutter={[32, 32]}>
            {whyChooseFeatures.map((feature, index) => (
              <Col xs={24} sm={12} lg={8} key={index}>
                <Card className={styles.whyChooseCard} bordered={false}>
                  <div className={styles.whyChooseHeader}>
                    <div className={styles.whyChooseIcon} style={{ color: feature.color }}>
                      {feature.icon}
                    </div>
                    <div className={styles.whyChooseStats}>
                      <span className={styles.statsText}>{feature.stats}</span>
                    </div>
                  </div>
                  <Title level={4} className={styles.whyChooseTitle}>{feature.title}</Title>
                  <Paragraph className={styles.whyChooseDescription}>
                    {feature.description}
                  </Paragraph>
                  <div className={styles.whyChooseProgress}>
                    <Progress
                      percent={95}
                      strokeColor={feature.color}
                      showInfo={false}
                      strokeWidth={6}
                    />
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </section>

      {/* Process Overview */}
      <section className={`${styles.section} ${styles.processSection}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <Title level={2} className={styles.sectionTitle}>Our Service Process</Title>
            <Paragraph className={styles.sectionDescription}>
              A systematic approach ensuring quality delivery from consultation to completion
            </Paragraph>
          </div>

          <Row gutter={[32, 32]} justify="center">
            <Col xs={24} sm={12} md={6}>
              <div className={styles.processStep}>
                <div className={styles.processNumber}>01</div>
                <div className={styles.processIcon}>
                  <PhoneOutlined />
                </div>
                <Title level={4} className={styles.processStepTitle}>Consultation</Title>
                <Paragraph className={styles.processStepDescription}>
                  Initial discussion to understand your requirements and project scope
                </Paragraph>
              </div>
            </Col>
            <Col xs={24} sm={12} md={6}>
              <div className={styles.processStep}>
                <div className={styles.processNumber}>02</div>
                <div className={styles.processIcon}>
                  <ToolOutlined />
                </div>
                <Title level={4} className={styles.processStepTitle}>Planning</Title>
                <Paragraph className={styles.processStepDescription}>
                  Detailed project planning with timeline, resources, and quality checkpoints
                </Paragraph>
              </div>
            </Col>
            <Col xs={24} sm={12} md={6}>
              <div className={styles.processStep}>
                <div className={styles.processNumber}>03</div>
                <div className={styles.processIcon}>
                  <RocketOutlined />
                </div>
                <Title level={4} className={styles.processStepTitle}>Execution</Title>
                <Paragraph className={styles.processStepDescription}>
                  Professional execution with regular updates and quality monitoring
                </Paragraph>
              </div>
            </Col>
            <Col xs={24} sm={12} md={6}>
              <div className={styles.processStep}>
                <div className={styles.processNumber}>04</div>
                <div className={styles.processIcon}>
                  <CheckCircleOutlined />
                </div>
                <Title level={4} className={styles.processStepTitle}>Delivery</Title>
                <Paragraph className={styles.processStepDescription}>
                  Final delivery with comprehensive testing and ongoing support
                </Paragraph>
              </div>
            </Col>
          </Row>
        </div>
      </section>

      {/* Call to Action */}
      <section className={`${styles.section} ${styles.ctaSection}`}>
        <div className="container">
          <div className={styles.ctaContent}>
            <div className={styles.ctaHeader}>
              <Title level={2} className={styles.ctaTitle}>
                Ready to Start Your Maritime Project?
              </Title>
              <Paragraph className={styles.ctaSubtitle}>
                Let's discuss your requirements and create the perfect solution
              </Paragraph>
            </div>
            <Paragraph className={styles.ctaDescription}>
              Our team of maritime experts is ready to help you achieve your goals.
              From initial consultation to project completion, we're committed to
              delivering exceptional results that exceed your expectations.
            </Paragraph>
            <div className={styles.ctaActions}>
              <Button type="primary" size="large" className={styles.ctaPrimary}>
                <Link href="/contact">Get Free Consultation</Link>
              </Button>
              <Button size="large" className={styles.ctaSecondary}>
                <Link href="/gallery">View Our Work</Link>
              </Button>
            </div>
            <div className={styles.ctaContact}>
              <div className={styles.contactItem}>
                <PhoneOutlined className={styles.contactIcon} />
                <span>Call us: +91-9909480248</span>
              </div>
              <div className={styles.contactItem}>
                <MailOutlined className={styles.contactIcon} />
                <span>Email: adshippingservices@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}