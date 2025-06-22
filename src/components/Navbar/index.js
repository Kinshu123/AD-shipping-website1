'use client';
import React, { useState, useEffect } from 'react';
import { Layout, Menu, Button, Drawer } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css';

const { Header } = Layout;

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 100) {
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

  const menuItems = [
    { key: 'home', label: <Link href="/">Home</Link> },
    { key: 'about', label: <Link href="/about">About Us</Link> },
    { key: 'services', label: <Link href="/services">Services</Link> },
    { key: 'gallery', label: <Link href="/gallery">Gallery</Link> },
    { key: 'contact', label: <Link href="/contact">Contact</Link> },
  ];

  return (
    <Header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.logo}>
        <Link href="/">
          <Image src="/images/logo.svg" alt="AD Shipping Services" width={180} height={50} />
        </Link>
      </div>
      <div className={styles.menuContainer}>
        <div className={styles.desktopMenu}>
          <Menu mode="horizontal" items={menuItems} className={styles.menu} />
        </div>
        <div className={styles.mobileMenu}>
          <Button type="text" onClick={showDrawer} className={styles.menuButton}>
            <MenuOutlined />
          </Button>
          <Drawer
            title="AD Shipping Services"
            placement="right"
            onClose={onClose}
            open={visible}
            width={250}
          >
            <Menu mode="vertical" items={menuItems} />
          </Drawer>
        </div>
      </div>
    </Header>
  );
};

export default Navbar;