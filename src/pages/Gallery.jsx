import React, { useState } from 'react';
import { galleryItems } from '../data/factoryData';
import { IconZoomIn, IconFilter } from '../components/Icons';
import Lightbox from '../components/Lightbox';
import '../styles/gallery.css';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState(null);

  const filteredItems = galleryItems.filter((item) => {
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

  const activeItem = activeLightboxIndex !== null ? filteredItems[activeLightboxIndex] : null;

  return (
    <div className="gallery-page">
      <section className="gallery-hero">
        <div className="app-container">
          <span className="section-kicker" style={{ color: '#4ade80' }}>Industrial Visual Showcase</span>
          <h1 className="section-title" style={{ color: '#FFFFFF' }}>
            Factory & Machinery Gallery
          </h1>
          <p className="section-subtitle" style={{ color: '#CBD5E1', maxWidth: '780px' }}>
            High-resolution visual documentation of our secondary lead metallurgy plant, automated battery breaker systems, rotary smelting furnaces, and clean environmental protection units.
          </p>

          <div style={{ display: 'flex', gap: '0.5rem', marginTop: '2rem', flexWrap: 'wrap' }}>
            <button
              type="button"
              className={`phase-pill-btn ${activeCategory === 'all' ? 'active' : ''}`}
              onClick={() => { setActiveCategory('all'); setActiveLightboxIndex(null); }}
            >
              All Photographs ({galleryItems.length})
            </button>
            <button
              type="button"
              className={`phase-pill-btn ${activeCategory === 'facility' ? 'active' : ''}`}
              onClick={() => { setActiveCategory('facility'); setActiveLightboxIndex(null); }}
            >
              Production Floor & Docks
            </button>
            <button
              type="button"
              className={`phase-pill-btn ${activeCategory === 'machinery' ? 'active' : ''}`}
              onClick={() => { setActiveCategory('machinery'); setActiveLightboxIndex(null); }}
            >
              Recycling Machinery
            </button>
            <button
              type="button"
              className={`phase-pill-btn ${activeCategory === 'products' ? 'active' : ''}`}
              onClick={() => { setActiveCategory('products'); setActiveLightboxIndex(null); }}
            >
              Lead Ingots & Polymers
            </button>
            <button
              type="button"
              className={`phase-pill-btn ${activeCategory === 'environment' ? 'active' : ''}`}
              onClick={() => { setActiveCategory('environment'); setActiveLightboxIndex(null); }}
            >
              Pollution Control & ETP
            </button>
          </div>
        </div>
      </section>

      <section className="section-wrapper">
        <div className="app-container">
          <div className="gallery-grid">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className="gallery-item-card"
                onClick={() => setActiveLightboxIndex(index)}
                role="button"
                tabIndex={0}
                title="Click to view full-size image"
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setActiveLightboxIndex(index);
                  }
                }}
              >
                <div className="gallery-img-wrap">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="gallery-thumb-img"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="gallery-overlay-badge">
                    <IconZoomIn size={18} />
                  </div>
                </div>
                <div className="gallery-info">
                  <h3 className="gallery-item-title">{item.title}</h3>
                  <p className="gallery-item-caption">{item.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox for gallery */}
      {activeItem && (
        <Lightbox
          image={activeItem.image}
          title={activeItem.title}
          caption={activeItem.caption}
          onClose={() => setActiveLightboxIndex(null)}
          onPrev={activeLightboxIndex > 0 ? () => setActiveLightboxIndex(activeLightboxIndex - 1) : null}
          onNext={activeLightboxIndex < filteredItems.length - 1 ? () => setActiveLightboxIndex(activeLightboxIndex + 1) : null}
        />
      )}
    </div>
  );
}
