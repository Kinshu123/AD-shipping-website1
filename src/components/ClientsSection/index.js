import React from 'react';
import styles from './ClientsSection.module.css';

const clients = [
  {
    name: 'Shreeji Group',
    logo: '/images/shreeji-group-logo.png',
    alt: 'Shreeji Group Logo',
  },
  {
    name: 'Arvind & Company',
    logo: '/images/arvind-company-logo.png',
    alt: 'Arvind & Company Logo',
  },
];

const ClientsSection = () => (
  <section className={styles.clientsSection}>
    <div className="container">
      <h2 className={styles.title}>Our Valued Clients</h2>
      <p className={styles.subtitle}>
        We are proud to partner with industry leaders who trust us with their maritime needs.
        Our commitment to excellence has earned us long-term relationships with clients across the globe.
      </p>
      <div className={styles.logosContainer}>
        {clients.map((client) => (
          <div className={styles.logoCard} key={client.name}>
            <img 
              src={client.logo} 
              alt={client.alt} 
              className={styles.logoImg} 
              loading="lazy"
            />
            <div className={styles.clientName}>{client.name}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ClientsSection;