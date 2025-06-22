'use client';
import React, { useState, useEffect } from 'react';
import { Layout, Menu, Button, Drawer, Badge, Dropdown } from 'antd';
import {
  MenuOutlined,
  PhoneOutlined,
  MailOutlined,
  GlobalOutlined,
  DownOutlined,
  CloseOutlined
} from '@ant-design/icons';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from '../Logo';
import styles from './Navbar.module.css';

const { Header } = Layout;

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  // Services dropdown items
  const servicesItems = [
    { key: 'shipbuilding', label: <Link href="/services#shipbuilding">Shipbuilding</Link> },
    { key: 'modification', label: <Link href="/services#modification">Ship Modifications</Link> },
    { key: 'drydock', label: <Link href="/services#drydock">Dry-Dock Services</Link> },
    { key: 'port-services', label: <Link href="/services#port-services">Port & Harbor</Link> },
    { key: 'towing', label: <Link href="/services#towing">Towing & Support</Link> },
    { key: 'workshop', label: <Link href="/services#workshop">Workshop Services</Link> },
  ];

  const menuItems = [
    {
      key: 'home',
      label: <Link href="/" className={pathname === '/' ? styles.activeLink : ''}>Home</Link>
    },
    {
      key: 'about',
      label: <Link href="/about" className={pathname === '/about' ? styles.activeLink : ''}>About Us</Link>
    },
    {
      key: 'services',
      label: (
        <Dropdown
          menu={{ items: servicesItems }}
          trigger={['hover']}
          placement="bottomLeft"
          className={styles.dropdown}
        >
          <Link href="/services" className={pathname === '/services' ? styles.activeLink : ''}>
            Services <DownOutlined className={styles.dropdownIcon} />
          </Link>
        </Dropdown>
      ),
    },
    {
      key: 'gallery',
      label: <Link href="/gallery" className={pathname === '/gallery' ? styles.activeLink : ''}>Gallery</Link>
    },
    {
      key: 'contact',
      label: <Link href="/contact" className={pathname === '/contact' ? styles.activeLink : ''}>Contact</Link>
    },
  ];

  const mobileMenuItems = [
    { key: 'home', label: <Link href="/" onClick={onClose}>Home</Link> },
    { key: 'about', label: <Link href="/about" onClick={onClose}>About Us</Link> },
    { key: 'services', label: <Link href="/services" onClick={onClose}>Services</Link> },
    { key: 'shipbuilding', label: <Link href="/services#shipbuilding" onClick={onClose} className={styles.subMenuItem}>Shipbuilding</Link> },
    { key: 'modification', label: <Link href="/services#modification" onClick={onClose} className={styles.subMenuItem}>Ship Modifications</Link> },
    { key: 'drydock', label: <Link href="/services#drydock" onClick={onClose} className={styles.subMenuItem}>Dry-Dock Services</Link> },
    { key: 'port-services', label: <Link href="/services#port-services" onClick={onClose} className={styles.subMenuItem}>Port & Harbor</Link> },
    { key: 'towing', label: <Link href="/services#towing" onClick={onClose} className={styles.subMenuItem}>Towing & Support</Link> },
    { key: 'workshop', label: <Link href="/services#workshop" onClick={onClose} className={styles.subMenuItem}>Workshop Services</Link> },
    { key: 'gallery', label: <Link href="/gallery" onClick={onClose}>Gallery</Link> },
    { key: 'contact', label: <Link href="/contact" onClick={onClose}>Contact</Link> },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className={styles.topBar}>
        <div className={styles.topBarContent}>
          <div className={styles.topBarLeft}>
            <div className={styles.topBarItem}>
              <PhoneOutlined className={styles.topBarIcon} />
              <span>+91-9909480248</span>
            </div>
            <div className={styles.topBarItem}>
              <MailOutlined className={styles.topBarIcon} />
              <span>adshippingservices@gmail.com</span>
            </div>
          </div>
          <div className={styles.topBarRight}>
            <div className={styles.topBarItem}>
              <GlobalOutlined className={styles.topBarIcon} />
              <span>Serving Worldwide</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <Header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
        <div className={styles.headerContent}>
          <div className={styles.logo}>
            <Link href="/">
              <Logo width={scrolled ? 160 : 180} height={scrolled ? 48 : 54} variant="default" />
            </Link>
          </div>

          <div className={styles.menuContainer}>
            <div className={styles.desktopMenu}>
              <Menu
                mode="horizontal"
                items={menuItems}
                className={styles.menu}
                selectedKeys={[pathname.split('/')[1] || 'home']}
              />
              <div className={styles.headerActions}>
                <Button
                  type="primary"
                  size="large"
                  className={styles.ctaButton}
                >
                  <Link href="/contact">Get Quote</Link>
                </Button>
              </div>
            </div>

            <div className={styles.mobileMenu}>
              <Button
                type="text"
                onClick={showDrawer}
                className={styles.menuButton}
                icon={<MenuOutlined />}
                size="large"
              />
              <Drawer
                title={
                  <div className={styles.drawerHeader}>
                    <Logo width={140} height={42} variant="default" />
                  </div>
                }
                placement="right"
                onClose={onClose}
                open={visible}
                width={280}
                className={styles.mobileDrawer}
                closeIcon={<CloseOutlined />}
              >
                <Menu
                  mode="vertical"
                  items={mobileMenuItems}
                  className={styles.mobileMenuList}
                  selectedKeys={[pathname.split('/')[1] || 'home']}
                />
                <div className={styles.drawerFooter}>
                  <Button
                    type="primary"
                    size="large"
                    block
                    className={styles.drawerCta}
                  >
                    <Link href="/contact" onClick={onClose}>Get Quote</Link>
                  </Button>
                  <div className={styles.drawerContact}>
                    <div className={styles.drawerContactItem}>
                      <PhoneOutlined />
                      <span>+91-9909480248</span>
                    </div>
                    <div className={styles.drawerContactItem}>
                      <MailOutlined />
                      <span>adshippingservices@gmail.com</span>
                    </div>
                  </div>
                </div>
              </Drawer>
            </div>
          </div>
        </div>
      </Header>
    </>
  );
};

export default Navbar;