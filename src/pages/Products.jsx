import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/factoryData';
import ProductCard from '../components/ProductCard';
import { IconRecycle, IconArrowRight, IconShieldCheck } from '../components/Icons';
import '../styles/products.css';

export default function Products() {
  const [filter, setFilter] = useState('all');

  const filtered = products.filter((p) => {
    if (filter === 'all') return true;
    if (filter === 'lead') return p.id.includes('lead');
    if (filter === 'plastic') return p.id === 'plastic-granules';
    if (filter === 'byproducts')
      return p.id === 'treated-acid' || p.id === 'metal-scrap';
    return true;
  });

  return (
    <div className="products-page">
      {/* ================= HERO WITH BACKGROUND IMAGE ================= */}
      <section className="products-hero" aria-labelledby="products-hero-heading">
        <div className="products-hero-bg" aria-hidden="true">
          <img
            src="/public/assets/product.jfif"
            alt=""
            className="products-hero-bg-img"
            loading="eager"
            decoding="async"
            referrerPolicy="no-referrer"
          />
          <div className="products-hero-overlay" />
        </div>

        <div className="app-container products-hero-content">
          <span className="section-kicker products-hero-kicker">
            Refined &amp; Certified Secondary Outputs
          </span>
          <h1
            id="products-hero-heading"
            className="section-title products-hero-title"
          >
            Recovered Products &amp; Commercial Materials
          </h1>
          <p className="section-subtitle products-hero-subtitle">
            Through our closed-loop 11-stage recycling process, we produce
            99.97% pure refined lead ingots, customized metallurgical alloys,
            high-impact polypropylene granules, and treated chemical byproducts
            compliant with international industrial standards.
          </p>

          {/* Filter pills */}
          <div className="products-filter-row">
            <button
              type="button"
              className={`phase-pill-btn ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              All Recovered Materials ({products.length})
            </button>
            <button
              type="button"
              className={`phase-pill-btn ${filter === 'lead' ? 'active' : ''}`}
              onClick={() => setFilter('lead')}
            >
              Pure Lead &amp; Master Alloys
            </button>
            <button
              type="button"
              className={`phase-pill-btn ${filter === 'plastic' ? 'active' : ''}`}
              onClick={() => setFilter('plastic')}
            >
              Polypropylene Granules (PP)
            </button>
            <button
              type="button"
              className={`phase-pill-btn ${filter === 'byproducts' ? 'active' : ''}`}
              onClick={() => setFilter('byproducts')}
            >
              Chemical &amp; Metal Byproducts
            </button>
          </div>
        </div>
      </section>

      {/* ================= PRODUCTS GRID ================= */}
      <section className="section-wrapper">
        <div className="app-container">
          <div className="products-grid">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Quality & Batch Assurance Banner */}
          <div className="products-quality-banner">
            <div className="products-quality-text">
              <div className="products-quality-kicker">
                <IconShieldCheck size={18} />
                <span>Certificate of Chemical Analysis (COA)</span>
              </div>
              <h3 className="products-quality-heading">
                Every Ingot &amp; Polymer Batch Independently Verified
              </h3>
              <p className="products-quality-desc">
                Our on-site Optical Emission Spectrometer (OES) inspects melt
                heats down to parts-per-million (ppm) levels. Chemical
                composition certificates and batch reports are dispatched with
                every consignment.
              </p>
            </div>
            <Link to="/quote" className="btn btn-primary">
              <span>Request Batch Price Quote</span>
              <IconArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}