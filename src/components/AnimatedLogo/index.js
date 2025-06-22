'use client';
import React from 'react';
import styles from './AnimatedLogo.module.css';

const AnimatedLogo = ({ width = 200, height = 60, animate = true }) => {
  return (
    <div className={styles.logoContainer}>
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width={width} 
        height={height} 
        viewBox="0 0 200 60"
        className={animate ? styles.animated : ''}
      >
        <defs>
          {/* Gradient for ship hull */}
          <linearGradient id="animatedShipGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{stopColor:'#1e3a8a', stopOpacity:1}} />
            <stop offset="50%" style={{stopColor:'#3b82f6', stopOpacity:1}} />
            <stop offset="100%" style={{stopColor:'#1e40af', stopOpacity:1}} />
          </linearGradient>
          
          {/* Animated gradient for waves */}
          <linearGradient id="animatedWaveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{stopColor:'#0ea5e9', stopOpacity:0.8}}>
              <animate attributeName="stop-opacity" values="0.8;1;0.8" dur="2s" repeatCount="indefinite" />
            </stop>
            <stop offset="50%" style={{stopColor:'#0284c7', stopOpacity:1}} />
            <stop offset="100%" style={{stopColor:'#0369a1', stopOpacity:0.8}}>
              <animate attributeName="stop-opacity" values="0.8;1;0.8" dur="2s" repeatCount="indefinite" begin="1s" />
            </stop>
          </linearGradient>
          
          {/* Drop shadow filter */}
          <filter id="animatedDropShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="1" dy="2" stdDeviation="1" floodColor="#000000" floodOpacity="0.2"/>
          </filter>
        </defs>
        
        {/* Background circle for logo mark */}
        <circle 
          cx="30" 
          cy="30" 
          r="25" 
          fill="#f8fafc" 
          stroke="#e2e8f0" 
          strokeWidth="1" 
          filter="url(#animatedDropShadow)"
          className={animate ? styles.logoBackground : ''}
        />
        
        {/* Animated ocean waves */}
        <path 
          d="M8,40 Q15,35 22,40 T36,40 Q43,35 50,40" 
          stroke="url(#animatedWaveGradient)" 
          strokeWidth="2" 
          fill="none"
          className={animate ? styles.wave1 : ''}
        />
        <path 
          d="M8,43 Q15,38 22,43 T36,43 Q43,38 50,43" 
          stroke="url(#animatedWaveGradient)" 
          strokeWidth="1.5" 
          fill="none" 
          opacity="0.7"
          className={animate ? styles.wave2 : ''}
        />
        
        {/* Ship hull with subtle animation */}
        <path 
          d="M12,32 L48,32 L45,38 L15,38 Z" 
          fill="url(#animatedShipGradient)" 
          filter="url(#animatedDropShadow)"
          className={animate ? styles.shipHull : ''}
        />
        
        {/* Ship superstructure */}
        <rect 
          x="20" 
          y="25" 
          width="12" 
          height="7" 
          fill="#1e40af" 
          rx="1"
          className={animate ? styles.shipStructure : ''}
        />
        <rect 
          x="32" 
          y="20" 
          width="8" 
          height="12" 
          fill="#1e3a8a" 
          rx="1"
          className={animate ? styles.shipBridge : ''}
        />
        
        {/* Animated ship windows */}
        <rect x="22" y="27" width="2" height="2" fill="#60a5fa" rx="0.5" className={animate ? styles.window : ''} />
        <rect x="25" y="27" width="2" height="2" fill="#60a5fa" rx="0.5" className={animate ? styles.window : ''} style={{animationDelay: '0.2s'}} />
        <rect x="28" y="27" width="2" height="2" fill="#60a5fa" rx="0.5" className={animate ? styles.window : ''} style={{animationDelay: '0.4s'}} />
        <rect x="34" y="22" width="2" height="2" fill="#60a5fa" rx="0.5" className={animate ? styles.window : ''} style={{animationDelay: '0.6s'}} />
        <rect x="34" y="25" width="2" height="2" fill="#60a5fa" rx="0.5" className={animate ? styles.window : ''} style={{animationDelay: '0.8s'}} />
        
        {/* Animated mast and beacon */}
        <line 
          x1="36" 
          y1="20" 
          x2="36" 
          y2="12" 
          stroke="#1e3a8a" 
          strokeWidth="1.5"
          className={animate ? styles.mast : ''}
        />
        <circle 
          cx="36" 
          cy="12" 
          r="1" 
          fill="#ef4444"
          className={animate ? styles.beacon : ''}
        />
        
        {/* Anchor symbol */}
        <g transform="translate(42,28)" className={animate ? styles.anchor : ''}>
          <path d="M0,-2 L0,4 M-2,2 L2,2 M-1,4 L1,4" stroke="#1e40af" strokeWidth="1" fill="none"/>
          <circle cx="0" cy="-2" r="1" fill="none" stroke="#1e40af" strokeWidth="1"/>
        </g>
        
        {/* Company name with fade-in animation */}
        <text 
          x="70" 
          y="25" 
          fontFamily="'Segoe UI', 'Roboto', sans-serif" 
          fontSize="18" 
          fontWeight="700" 
          fill="#1e293b"
          className={animate ? styles.companyName : ''}
        >
          AD SHIPPING
        </text>
        <text 
          x="70" 
          y="40" 
          fontFamily="'Segoe UI', 'Roboto', sans-serif" 
          fontSize="11" 
          fontWeight="500" 
          fill="#3b82f6" 
          letterSpacing="1px"
          className={animate ? styles.servicesText : ''}
        >
          SERVICES
        </text>
        
        {/* Decorative line with draw animation */}
        <line 
          x1="70" 
          y1="30" 
          x2="190" 
          y2="30" 
          stroke="#e2e8f0" 
          strokeWidth="1"
          className={animate ? styles.decorativeLine : ''}
        />
      </svg>
    </div>
  );
};

export default AnimatedLogo;
