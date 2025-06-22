'use client';
import React from 'react';

const Logo = ({ 
  width = 200, 
  height = 60, 
  variant = 'default', // 'default', 'white', 'dark', 'minimal'
  className = '' 
}) => {
  // Color schemes for different variants
  const colorSchemes = {
    default: {
      background: '#f8fafc',
      border: '#e2e8f0',
      shipGradient: ['#1e3a8a', '#3b82f6', '#1e40af'],
      waveGradient: ['#0ea5e9', '#0284c7', '#0369a1'],
      shipDetails: '#1e40af',
      shipStructure: '#1e3a8a',
      windows: '#60a5fa',
      beacon: '#ef4444',
      primaryText: '#1e293b',
      secondaryText: '#3b82f6',
      decorativeLine: '#e2e8f0'
    },
    white: {
      background: '#ffffff',
      border: '#f1f5f9',
      shipGradient: ['#1e3a8a', '#3b82f6', '#1e40af'],
      waveGradient: ['#0ea5e9', '#0284c7', '#0369a1'],
      shipDetails: '#1e40af',
      shipStructure: '#1e3a8a',
      windows: '#60a5fa',
      beacon: '#ef4444',
      primaryText: '#1e293b',
      secondaryText: '#3b82f6',
      decorativeLine: '#f1f5f9'
    },
    dark: {
      background: '#1e293b',
      border: '#334155',
      shipGradient: ['#3b82f6', '#60a5fa', '#2563eb'],
      waveGradient: ['#0ea5e9', '#38bdf8', '#0284c7'],
      shipDetails: '#3b82f6',
      shipStructure: '#2563eb',
      windows: '#93c5fd',
      beacon: '#f87171',
      primaryText: '#f8fafc',
      secondaryText: '#60a5fa',
      decorativeLine: '#475569'
    },
    minimal: {
      background: 'transparent',
      border: 'transparent',
      shipGradient: ['#64748b', '#94a3b8', '#475569'],
      waveGradient: ['#94a3b8', '#cbd5e1', '#64748b'],
      shipDetails: '#64748b',
      shipStructure: '#475569',
      windows: '#94a3b8',
      beacon: '#64748b',
      primaryText: '#1e293b',
      secondaryText: '#64748b',
      decorativeLine: '#e2e8f0'
    }
  };

  const colors = colorSchemes[variant] || colorSchemes.default;
  const gradientId = `shipGradient-${variant}`;
  const waveGradientId = `waveGradient-${variant}`;

  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={width} 
      height={height} 
      viewBox="0 0 200 60"
      className={className}
    >
      <defs>
        {/* Gradient for ship hull */}
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor: colors.shipGradient[0], stopOpacity: 1}} />
          <stop offset="50%" style={{stopColor: colors.shipGradient[1], stopOpacity: 1}} />
          <stop offset="100%" style={{stopColor: colors.shipGradient[2], stopOpacity: 1}} />
        </linearGradient>
        
        {/* Gradient for waves */}
        <linearGradient id={waveGradientId} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{stopColor: colors.waveGradient[0], stopOpacity: 0.8}} />
          <stop offset="50%" style={{stopColor: colors.waveGradient[1], stopOpacity: 1}} />
          <stop offset="100%" style={{stopColor: colors.waveGradient[2], stopOpacity: 0.8}} />
        </linearGradient>
        
        {/* Drop shadow filter */}
        <filter id={`dropShadow-${variant}`} x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="1" dy="2" stdDeviation="1" floodColor="#000000" floodOpacity="0.2"/>
        </filter>
      </defs>
      
      {/* Background circle for logo mark */}
      {variant !== 'minimal' && (
        <circle 
          cx="30" 
          cy="30" 
          r="25" 
          fill={colors.background} 
          stroke={colors.border} 
          strokeWidth="1" 
          filter={`url(#dropShadow-${variant})`}
        />
      )}
      
      {/* Ocean waves */}
      <path 
        d="M8,40 Q15,35 22,40 T36,40 Q43,35 50,40" 
        stroke={`url(#${waveGradientId})`} 
        strokeWidth="2" 
        fill="none"
      />
      <path 
        d="M8,43 Q15,38 22,43 T36,43 Q43,38 50,43" 
        stroke={`url(#${waveGradientId})`} 
        strokeWidth="1.5" 
        fill="none" 
        opacity="0.7"
      />
      
      {/* Modern ship design */}
      {/* Ship hull */}
      <path 
        d="M12,32 L48,32 L45,38 L15,38 Z" 
        fill={`url(#${gradientId})`} 
        filter={variant !== 'minimal' ? `url(#dropShadow-${variant})` : 'none'}
      />
      
      {/* Ship superstructure */}
      <rect x="20" y="25" width="12" height="7" fill={colors.shipDetails} rx="1"/>
      <rect x="32" y="20" width="8" height="12" fill={colors.shipStructure} rx="1"/>
      
      {/* Ship details */}
      <rect x="22" y="27" width="2" height="2" fill={colors.windows} rx="0.5"/>
      <rect x="25" y="27" width="2" height="2" fill={colors.windows} rx="0.5"/>
      <rect x="28" y="27" width="2" height="2" fill={colors.windows} rx="0.5"/>
      <rect x="34" y="22" width="2" height="2" fill={colors.windows} rx="0.5"/>
      <rect x="34" y="25" width="2" height="2" fill={colors.windows} rx="0.5"/>
      
      {/* Mast and antenna */}
      <line x1="36" y1="20" x2="36" y2="12" stroke={colors.shipStructure} strokeWidth="1.5"/>
      <circle cx="36" cy="12" r="1" fill={colors.beacon}/>
      
      {/* Anchor symbol */}
      <g transform="translate(42,28)">
        <path d="M0,-2 L0,4 M-2,2 L2,2 M-1,4 L1,4" stroke={colors.shipDetails} strokeWidth="1" fill="none"/>
        <circle cx="0" cy="-2" r="1" fill="none" stroke={colors.shipDetails} strokeWidth="1"/>
      </g>
      
      {/* Company name with modern typography */}
      <text 
        x="70" 
        y="25" 
        fontFamily="'Segoe UI', 'Roboto', sans-serif" 
        fontSize="18" 
        fontWeight="700" 
        fill={colors.primaryText}
      >
        AD SHIPPING
      </text>
      <text 
        x="70" 
        y="40" 
        fontFamily="'Segoe UI', 'Roboto', sans-serif" 
        fontSize="11" 
        fontWeight="500" 
        fill={colors.secondaryText} 
        letterSpacing="1px"
      >
        SERVICES
      </text>
      
      {/* Decorative line */}
      <line 
        x1="70" 
        y1="30" 
        x2="190" 
        y2="30" 
        stroke={colors.decorativeLine} 
        strokeWidth="1"
      />
    </svg>
  );
};

export default Logo;
