'use client';
import React from 'react';
import { Breadcrumb } from 'antd';
import Link from 'next/link';
import styles from './PageHeader.module.css';

const PageHeader = ({ title, breadcrumbs }) => {
  return (
    <div className={styles.pageHeader}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h1 className={styles.title}>{title}</h1>
        
        {breadcrumbs && (
          <Breadcrumb className={styles.breadcrumb}>
            <Breadcrumb.Item>
              <Link href="/">Home</Link>
            </Breadcrumb.Item>
            {breadcrumbs.map((item, index) => (
              <Breadcrumb.Item key={index}>
                {item.link ? (
                  <Link href={item.link}>{item.label}</Link>
                ) : (
                  item.label
                )}
              </Breadcrumb.Item>
            ))}
          </Breadcrumb>
        )}
      </div>
    </div>
  );
};

export default PageHeader;