import React from 'react';
import { Link } from 'react-router-dom';
import { factoryInfo } from '../data/factoryData';
import { IconMapPin, IconPhone, IconMail, IconRecycle, IconWhatsApp } from './Icons';
import '../styles/footer.css';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="app-container">
        <div className="footer-top-grid">
          

          {/* Brand info */}
          <div className="footer-brand-col">
            <div className="footer-brand-title">
              
  <img
    src="/assets/logo3.png"
    alt="EcoLead Battery Logo"
    className="brand-logo"
  />
              Eco<span>Lead</span> Industries
              
            </div>
            <p className="footer-brand-desc">
              World-class lead-acid battery recycling and secondary lead metallurgy. Engineered closed-loop recovery with zero-liquid-discharge (ZLD) and advanced pulse-jet emissions abatement.
            </p>
            <div className="footer-cert-tags">
              <span className="footer-cert-tag">Capacity: {factoryInfo.annualCapacity}</span>
              <span className="footer-cert-tag">Recovery: {factoryInfo.recoveryRate}</span>
              <span className="footer-cert-tag">Closed-Loop Water</span>
            </div>
          </div>

          {/* 11 Stages quick link */}
          <div>
            <h4 className="footer-col-title">Recycling Stages</h4>
            <ul className="footer-links-list">
              <li><Link to="/process" className="footer-link">01. Battery Receipt & Weighing</Link></li>
              <li><Link to="/process" className="footer-link">02. Inspection & Sorting</Link></li>
              <li><Link to="/process" className="footer-link">04. Dismantling & Separation</Link></li>
              <li><Link to="/process" className="footer-link">05. Acid Recovery & Neutralization</Link></li>
              <li><Link to="/process" className="footer-link">06. Rotary Smelting Furnace</Link></li>
              <li><Link to="/process" className="footer-link">07. Polypropylene Granulation</Link></li>
              <li><Link to="/process" className="footer-link">10. Waste Treatment & APCS</Link></li>
              <li><Link to="/process" className="footer-link" style={{ color: 'var(--color-accent)' }}>View All 11 Stages →</Link></li>
            </ul>
          </div>

          {/* Recovered Products & Facility */}
          <div>
            <h4 className="footer-col-title">Products & Plant</h4>
            <ul className="footer-links-list">
              <li><Link to="/products" className="footer-link">Refined Pure Lead Ingots (99.97%)</Link></li>
              <li><Link to="/products" className="footer-link">Antimonial & Calcium Lead Alloys</Link></li>
              <li><Link to="/products" className="footer-link">Recycled PP Copolymer Granules</Link></li>
              <li><Link to="/products" className="footer-link">Industrial Sodium Sulfate</Link></li>
              <li><Link to="/infrastructure" className="footer-link">Heavy Machinery & Furnaces</Link></li>
              <li><Link to="/environmental" className="footer-link">Effluent Treatment Plant (ETP)</Link></li>
              <li><Link to="/compliance" className="footer-link">Quality & Spectrometry Testing</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="footer-col-title">Factory Logistics</h4>
            <div className="footer-contact-items">
              <div className="footer-contact-item">
                <IconMapPin size={18} className="footer-contact-icon" />
                <span>{factoryInfo.address}</span>
              </div>
              <div className="footer-contact-item">
                <IconPhone size={18} className="footer-contact-icon" />
                <span>{factoryInfo.phone}</span>
              </div>
              <div className="footer-contact-item">
                <IconMail size={18} className="footer-contact-icon" />
                <span>{factoryInfo.email}</span>
              </div>
              <div className="footer-contact-item">
                <IconWhatsApp size={18} className="footer-contact-icon" />
                <span>WhatsApp: {factoryInfo.whatsapp}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom-bar">
          <div>
            © {new Date().getFullYear()} EcoLead Industries. All rights reserved. Industrial Closed-Loop Metallurgy.
          </div>
          <div className="footer-bottom-links">
            <Link to="/environmental" className="footer-link">Environmental Policy</Link>
            <Link to="/compliance" className="footer-link">Safety Standards</Link>
            <Link to="/quote" className="footer-link">Request Quote</Link>
            <Link to="/admin" className="footer-link">Admin Portal</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
