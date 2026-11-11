import React from 'react';
import { factoryInfo } from '../data/factoryData';
import ContactForm from '../components/ContactForm';
import {
  IconMapPin,
  IconPhone,
  IconMail,
  IconWhatsApp,
  IconShieldCheck,
} from '../components/Icons';
import '../styles/contact.css';

export default function Contact() {
  return (
    <div className="contact-page">
      {/* ================= HERO WITH BACKGROUND IMAGE ================= */}
      <section className="contact-hero" aria-labelledby="contact-hero-heading">
        <div className="contact-hero-bg" aria-hidden="true">
          <img
            src="/assets/contact1.jfif"
            alt=""
            className="contact-hero-bg-img"
            loading="eager"
            decoding="async"
            referrerPolicy="no-referrer"
          />
          <div className="contact-hero-overlay" />
        </div>

        <div className="app-container contact-hero-content">
          <span className="section-kicker contact-hero-kicker">
            Direct Procurement &amp; Logistics
          </span>
          <h1
            id="contact-hero-heading"
            className="section-title contact-hero-title"
          >
            Contact EcoLead Industries
          </h1>
          <p className="section-subtitle contact-hero-subtitle">
            Connect directly with our metallurgical sales engineers, scrap
            battery procurement team, or environmental compliance officers.
          </p>
        </div>
      </section>

      {/* ================= FORM + INFO GRID ================= */}
      <section className="section-wrapper">
        <div className="app-container">
          <div className="contact-layout-grid">
            {/* ---------- Left: Contact Form ---------- */}
            <div className="contact-form-col">
              <span className="section-kicker">Send an Official Enquiry</span>
              <h2 className="section-title contact-form-heading">
                Commercial &amp; Technical Message
              </h2>
              <p className="section-subtitle contact-form-lead">
                Fill out the required information below. Submissions are routed
                immediately to the appropriate department desk.
              </p>
              <ContactForm defaultType="General Enquiry" />
            </div>

            {/* ---------- Right: Contact Information ---------- */}
            <div className="contact-info-card">
              <div>
                <h3 className="contact-info-heading">Factory Headquarters</h3>

                <div className="contact-info-list">
                  <div className="contact-info-block">
                    <div className="contact-info-icon-box">
                      <IconMapPin size={22} />
                    </div>
                    <div>
                      <div className="contact-info-label">Factory Address</div>
                      <div className="contact-info-val">
                        {factoryInfo.address}
                      </div>
                    </div>
                  </div>

                  <div className="contact-info-block">
                    <div className="contact-info-icon-box">
                      <IconPhone size={22} />
                    </div>
                    <div>
                      <div className="contact-info-label">
                        Telephone Logistics
                      </div>
                      <div className="contact-info-val">
                        {factoryInfo.phone}
                      </div>
                    </div>
                  </div>

                  <div className="contact-info-block">
                    <div className="contact-info-icon-box">
                      <IconMail size={22} />
                    </div>
                    <div>
                      <div className="contact-info-label">
                        Official Correspondence
                      </div>
                      <div className="contact-info-val">
                        {factoryInfo.email}
                      </div>
                      <div className="contact-info-secondary">
                        {factoryInfo.salesEmail}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* WhatsApp Quick Link */}
              <div>
                <div className="contact-info-mini-label">
                  Instant Commercial Desk
                </div>
                <a
                  href={`https://wa.me/${factoryInfo.whatsapp.replace(
                    /[^0-9]/g,
                    ''
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whatsapp-direct-btn whatsapp-direct-btn-full"
                >
                  <IconWhatsApp size={22} />
                  <span>Chat on WhatsApp: {factoryInfo.whatsapp}</span>
                </a>
              </div>

              {/* Map Simulation Frame */}
              <div>
                <div className="contact-info-mini-label">
                  Industrial Corridor Location
                </div>
                <div className="factory-map-frame">
                  <div className="map-placeholder-overlay">
                    <div className="map-pin-pulse">
                      <IconMapPin size={26} />
                    </div>
                    <div className="map-title">
                      EcoLead Industries Main Plant
                    </div>
                    <div className="map-subtitle">
                      Plot 42-48, Green Metallurgy Industrial Corridor
                    </div>
                    <div className="map-gate-note">
                      Gate 1: Inbound ULAB Docks · Gate 2: Ingot Dispatch
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}