'use client';
import React from 'react';
import { Typography, Divider } from 'antd';
import { 
  EnvironmentOutlined, 
  PhoneOutlined, 
  MailOutlined, 
  ClockCircleOutlined,
  FacebookOutlined,
  TwitterOutlined,
  LinkedinOutlined,
  YoutubeOutlined
} from '@ant-design/icons';
import Link from 'next/link';
import styles from './Footer.module.css';

const { Title } = Typography;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        {/* Company Info */}
        <div className={`${styles.footerColumn} ${styles.companyInfo}`}>
          <Title level={4} className={styles.footerTitle}>About Us</Title>
          <p className={styles.footerText}>
            AD Shipping Services is a leading Indian shipbuilder and marine service provider with extensive experience in shipbuilding, modifications, dry-docking, and marine support services.
          </p>
          <div className={styles.socialIcons}>
            <a href="#" aria-label="Facebook" className={styles.socialIcon}><FacebookOutlined /></a>
            <a href="#" aria-label="Twitter" className={styles.socialIcon}><TwitterOutlined /></a>
            <a href="#" aria-label="LinkedIn" className={styles.socialIcon}><LinkedinOutlined /></a>
            <a href="#" aria-label="YouTube" className={styles.socialIcon}><YoutubeOutlined /></a>
          </div>
        </div>
        
        {/* Quick Links */}
        <div className={styles.footerColumn}>
          <Title level={4} className={styles.footerTitle}>Quick Links</Title>
          <ul className={styles.footerLinks}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/fleet">Our Fleet</Link></li>
            <li><Link href="/gallery">Gallery</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
        
        {/* Services */}
        <div className={styles.footerColumn}>
          <Title level={4} className={styles.footerTitle}>Our Services</Title>
          <ul className={styles.footerLinks}>
            <li><Link href="/services#shipbuilding">Shipbuilding</Link></li>
            <li><Link href="/services#modification">Ship Modifications</Link></li>
            <li><Link href="/services#drydock">Dry-Dock Services</Link></li>
            <li><Link href="/services#port-services">Port & Harbor</Link></li>
            <li><Link href="/services#towing">Towing & Support</Link></li>
            <li><Link href="/services#workshop">Workshop Services</Link></li>
          </ul>
        </div>
        
        {/* Contact Info */}
        <div className={styles.footerColumn}>
          <Title level={4} className={styles.footerTitle}>Contact Us</Title>
          <ul className={styles.contactList}>
            <li>
              <EnvironmentOutlined className={styles.contactIcon} />
              <div className={styles.contactInfo}>
                <div>PLOT NO.6, NEAR INDANE GAS GODOWN,</div>
                <div>OPP. RAILWAY STATION, BEDI BUNDAR ROAD,</div>
                <div>M.P SHAH UDHYOGNAGAR, JAMNAGAR,</div>
                <div>GUJARAT, INDIA-361008</div>
              </div>
            </li>
            <li>
              <PhoneOutlined className={styles.contactIcon} />
              <div className={styles.contactInfo}>
                <div>Mr. Amit Vora: <a href="tel:+919909480248">+91-9909480248</a></div>
                <div>Mr. Tirth A Vora: <a href="tel:+917600271333">+91-7600271333</a></div>
              </div>
            </li>
            <li>
              <MailOutlined className={styles.contactIcon} />
              <div className={styles.contactInfo}>
                <div><a href="mailto:adshippingservices@gmail.com">adshippingservices@gmail.com</a></div>
                <div><a href="mailto:voratirth1245@gmail.com">voratirth1245@gmail.com</a></div>
              </div>
            </li>
            <li>
              <ClockCircleOutlined className={styles.contactIcon} />
              <div className={styles.contactInfo}>
                <div>Mon - Sat: 9:00 AM - 6:00 PM</div>
                <div>Sunday: Closed</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      
      <Divider className={styles.divider} />
      
      <div className={styles.footerBottom}>
        <div className={styles.footerContent}>
          <div className={styles.copyright}>
            © {currentYear} AD Shipping Services. All Rights Reserved.
          </div>
          <div className={styles.legalLinks}>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <span className={styles.divider}>|</span>
            <Link href="/terms">Terms of Service</Link>
            <span className={styles.divider}>|</span>
            <Link href="/sitemap">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;