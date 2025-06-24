'use client';
import React, { useState, useEffect } from 'react';
import { Typography, Divider, Button, Input, Form, message, Statistic, Row, Col, Badge } from 'antd';
import {
  EnvironmentOutlined,
  PhoneOutlined,
  MailOutlined,
  ClockCircleOutlined,
  FacebookOutlined,
  TwitterOutlined,
  LinkedinOutlined,
  YoutubeOutlined,
  SendOutlined,
  RocketOutlined,
  TeamOutlined,
  SafetyCertificateOutlined,
  HeartOutlined,
  GlobalOutlined,
  TrophyOutlined,
  ArrowUpOutlined
} from '@ant-design/icons';
import Link from 'next/link';
import styles from './Footer.module.css';

const { Title, Paragraph } = Typography;

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [newsletterForm] = Form.useForm();
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [stats, setStats] = useState({
    projects: 0,
    clients: 0,
    experience: 0,
    vessels: 0
  });

  // Company statistics
  const companyStats = [
    { title: "Projects Completed", value: 500, suffix: "+", icon: <RocketOutlined />, color: "#52c41a" },
    { title: "Happy Clients", value: 300, suffix: "+", icon: <HeartOutlined />, color: "#f5222d" },
    { title: "Years Experience", value: 19, suffix: "+", icon: <SafetyCertificateOutlined />, color: "#1890ff" },
    { title: "Vessels Built", value: 50, suffix: "+", icon: <TrophyOutlined />, color: "#722ed1" }
  ];

  // Enhanced social media links
  const socialMediaLinks = [
    {
      icon: <FacebookOutlined />,
      url: "#",
      color: "#4267B2",
      name: "Facebook",
      followers: "2.5K"
    },
    {
      icon: <TwitterOutlined />,
      url: "#",
      color: "#1DA1F2",
      name: "Twitter",
      followers: "1.8K"
    },
    {
      icon: <LinkedinOutlined />,
      url: "#",
      color: "#0077B5",
      name: "LinkedIn",
      followers: "3.2K"
    },
    {
      icon: <YoutubeOutlined />,
      url: "#",
      color: "#FF0000",
      name: "YouTube",
      followers: "1.2K"
    }
  ];

  // Newsletter subscription handler
  const handleNewsletterSubmit = (values) => {
    message.success('Thank you for subscribing to our newsletter!');
    newsletterForm.resetFields();
  };

  // Back to top functionality
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);

    // Animate statistics
    const animateStats = () => {
      companyStats.forEach((stat, index) => {
        let current = 0;
        const increment = stat.value / 50;
        const timer = setInterval(() => {
          current += increment;
          if (current >= stat.value) {
            current = stat.value;
            clearInterval(timer);
          }
          setStats(prev => ({
            ...prev,
            [Object.keys(prev)[index]]: Math.floor(current)
          }));
        }, 50);
      });
    };

    const timer = setTimeout(animateStats, 1000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  return (
    <footer className={styles.footer}>
      {/* Company Statistics Section */}
      <div className={styles.statsSection}>
        <div className={styles.footerContent}>
          <div className={styles.statsHeader}>
            <Title level={3} className={styles.statsTitle}>Our Achievements</Title>
            <Paragraph className={styles.statsDescription}>
              Two decades of maritime excellence and innovation
            </Paragraph>
          </div>
          <Row gutter={[32, 32]} className={styles.statsGrid}>
            {companyStats.map((stat, index) => (
              <Col xs={12} sm={6} key={index}>
                <div className={styles.statCard}>
                  <div className={styles.statIcon} style={{ color: stat.color }}>
                    {stat.icon}
                  </div>
                  <Statistic
                    value={Object.values(stats)[index]}
                    suffix={stat.suffix}
                    className={styles.statistic}
                  />
                  <div className={styles.statTitle}>{stat.title}</div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </div>

      <div className={styles.footerContent}>
        {/* Company Info */}
        <div className={`${styles.footerColumn} ${styles.companyInfo}`}>
          <Title level={4} className={styles.footerTitle}>About AD Shipping</Title>
          <Paragraph className={styles.footerText}>
            Leading Indian shipbuilder and marine service provider with extensive experience in
            shipbuilding, modifications, dry-docking, and comprehensive maritime solutions.
          </Paragraph>

          {/* Enhanced Social Media */}
          <div className={styles.socialSection}>
            <Title level={5} className={styles.socialTitle}>Follow Us</Title>
            <div className={styles.socialIcons}>
              {socialMediaLinks.map((social, index) => (
                <div key={index} className={styles.socialIconWrapper}>
                  <a
                    href={social.url}
                    aria-label={social.name}
                    className={styles.socialIcon}
                    style={{ '--social-color': social.color }}
                  >
                    {social.icon}
                  </a>
                  <span className={styles.socialFollowers}>{social.followers}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className={styles.newsletterSection}>
            <Title level={5} className={styles.newsletterTitle}>Stay Updated</Title>
            <Paragraph className={styles.newsletterDescription}>
              Get the latest maritime industry news and company updates.
            </Paragraph>
            <Form form={newsletterForm} onFinish={handleNewsletterSubmit} className={styles.newsletterForm}>
              <Form.Item
                name="email"
                rules={[
                  { required: true, message: 'Please enter your email!' },
                  { type: 'email', message: 'Please enter a valid email!' }
                ]}
              >
                <Input
                  placeholder="Enter your email address"
                  className={styles.newsletterInput}
                  suffix={
                    <Button
                      type="primary"
                      htmlType="submit"
                      icon={<SendOutlined />}
                      className={styles.newsletterButton}
                    />
                  }
                />
              </Form.Item>
            </Form>
          </div>
        </div>

        {/* Quick Links */}
        <div className={styles.footerColumn}>
          <Title level={4} className={styles.footerTitle}>Quick Navigation</Title>
          <ul className={styles.footerLinks}>
            <li><Link href="/"><GlobalOutlined className={styles.linkIcon} />Home</Link></li>
            <li><Link href="/about"><TeamOutlined className={styles.linkIcon} />About Us</Link></li>
            <li><Link href="/services"><RocketOutlined className={styles.linkIcon} />Services</Link></li>
            <li><Link href="/gallery"><TrophyOutlined className={styles.linkIcon} />Gallery</Link></li>
            <li><Link href="/contact"><MailOutlined className={styles.linkIcon} />Contact</Link></li>
          </ul>

          {/* Quick Contact */}
          <div className={styles.quickContact}>
            <Title level={5} className={styles.quickContactTitle}>Quick Contact</Title>
            <div className={styles.quickContactItem}>
              <PhoneOutlined className={styles.quickContactIcon} />
              <a href="tel:+919909480248">+91-9909480248</a>
            </div>
            <div className={styles.quickContactItem}>
              <MailOutlined className={styles.quickContactIcon} />
              <a href="mailto:adshippingservices@gmail.com">Email Us</a>
            </div>
          </div>
        </div>

        {/* Services */}
        <div className={styles.footerColumn}>
          <Title level={4} className={styles.footerTitle}>Our Services</Title>
          <ul className={styles.footerLinks}>
            <li><Link href="/services#shipbuilding"><RocketOutlined className={styles.linkIcon} />Shipbuilding</Link></li>
            <li><Link href="/services#modification"><SafetyCertificateOutlined className={styles.linkIcon} />Ship Modifications</Link></li>
            <li><Link href="/services#drydock"><TrophyOutlined className={styles.linkIcon} />Dry-Dock Services</Link></li>
            <li><Link href="/services#port-services"><GlobalOutlined className={styles.linkIcon} />Port & Harbor</Link></li>
            <li><Link href="/services#towing"><TeamOutlined className={styles.linkIcon} />Towing & Support</Link></li>
            <li><Link href="/services#workshop"><HeartOutlined className={styles.linkIcon} />Workshop Services</Link></li>
          </ul>

          {/* Service Highlights */}
         
        </div>

        {/* Enhanced Contact Info */}
        <div className={styles.footerColumn}>
          <Title level={4} className={styles.footerTitle}>Get In Touch</Title>

          {/* Headquarters */}
          <div className={styles.contactSection}>
            <div className={styles.contactHeader}>
              <EnvironmentOutlined className={styles.contactHeaderIcon} />
              <Title level={5} className={styles.contactSectionTitle}>Headquarters</Title>
            </div>
            <div className={styles.contactDetails}>
              <Paragraph className={styles.contactAddress}>
                PLOT NO.6, NEAR INDANE GAS GODOWN,<br />
                OPP. RAILWAY STATION, BEDI BUNDAR ROAD,<br />
                M.P SHAH UDHYOGNAGAR, JAMNAGAR,<br />
                GUJARAT, INDIA-361008
              </Paragraph>
            </div>
          </div>

          {/* Contact Methods */}
          <div className={styles.contactMethods}>
            <div className={styles.contactMethod}>
              <PhoneOutlined className={styles.contactMethodIcon} />
              <div className={styles.contactMethodInfo}>
                <div className={styles.contactMethodLabel}>Phone</div>
                <div className={styles.contactMethodValue}>
                  <a href="tel:+919909480248">+91-9909480248</a>
                </div>
                <div className={styles.contactMethodValue}>
                  <a href="tel:+917600271333">+91-7600271333</a>
                </div>
              </div>
            </div>

            <div className={styles.contactMethod}>
              <MailOutlined className={styles.contactMethodIcon} />
              <div className={styles.contactMethodInfo}>
                <div className={styles.contactMethodLabel}>Email</div>
                <div className={styles.contactMethodValue}>
                  <a href="mailto:adshippingservices@gmail.com">adshippingservices@gmail.com</a>
                </div>
                <div className={styles.contactMethodValue}>
                  <a href="mailto:voratirth1245@gmail.com">voratirth1245@gmail.com</a>
                </div>
              </div>
            </div>

            <div className={styles.contactMethod}>
              <ClockCircleOutlined className={styles.contactMethodIcon} />
              <div className={styles.contactMethodInfo}>
                <div className={styles.contactMethodLabel}>Working Hours</div>
                <div className={styles.contactMethodValue}>Mon - Thu: 8:00 AM - 5:00 PM</div>
                <div className={styles.contactMethodValue}>Friday: 8:00 AM - 12:00 PM</div>
                <div className={styles.contactMethodValue}>Weekend: Closed</div>
              </div>
            </div>
          </div>

          {/* Emergency Contact */}
          <div className={styles.emergencyContact}>
            <div className={styles.emergencyHeader}>
              <PhoneOutlined className={styles.emergencyIcon} />
              <span>24/7 Emergency Support</span>
            </div>
            <Button
              type="primary"
              danger
              className={styles.emergencyButton}
              href="tel:+919909480248"
            >
              Call Emergency: +91-9909480248
            </Button>
          </div>
        </div>
      </div>

      <Divider className={styles.divider} />

      {/* Enhanced Footer Bottom */}
      <div className={styles.footerBottom}>
        <div className={styles.footerContent}>
          <div className={styles.footerBottomLeft}>
            <div className={styles.copyright}>
              © {currentYear} AD Shipping Services. All Rights Reserved.
            </div>
            <div className={styles.companyTagline}>
              Leading Maritime Excellence Since 2005
            </div>
          </div>

          <div className={styles.footerBottomCenter}>
            <div className={styles.legalLinks}>
              <Link href="/privacy-policy">Privacy Policy</Link>
              <Link href="/terms">Terms of Service</Link>
              <Link href="/sitemap">Sitemap</Link>
              <Link href="/careers">Careers</Link>
            </div>
          </div>

          <div className={styles.footerBottomRight}>
            <div className={styles.certifications}>
              <Badge count="ISO 9001" className={styles.certBadge} />
              <Badge count="Maritime Certified" className={styles.certBadge} />
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      {showBackToTop && (
        <Button
          type="primary"
          shape="circle"
          icon={<ArrowUpOutlined />}
          className={styles.backToTop}
          onClick={scrollToTop}
          size="large"
        />
      )}
    </footer>
  );
};

export default Footer;