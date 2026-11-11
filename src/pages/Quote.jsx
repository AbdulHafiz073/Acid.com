import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import ContactForm from '../components/ContactForm';
import { IconShieldCheck, IconRecycle, IconArrowLeft } from '../components/Icons';

export default function Quote() {
  const [searchParams] = useSearchParams();
  const initialProduct = searchParams.get('product') || '';

  // Determine likely enquiry type based on query
  let defaultType = 'Recycled Lead Purchase';
  if (initialProduct.toLowerCase().includes('plastic') || initialProduct.toLowerCase().includes('polypropylene')) {
    defaultType = 'Plastic Granules Purchase';
  } else if (initialProduct.toLowerCase().includes('scrap') || initialProduct.toLowerCase().includes('battery')) {
    defaultType = 'Used Battery Supply';
  }

  return (
    <div className="quote-page">
      <section className="products-hero" style={{ background: 'linear-gradient(135deg, var(--color-primary-dark) 0%, var(--color-primary) 70%, var(--color-secondary) 100%)' }}>
        <div className="app-container">
          <Link to="/products" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#CBD5E1', fontSize: '0.85rem', marginBottom: '1rem' }}>
            <IconArrowLeft size={16} />
            <span>Back to Products</span>
          </Link>
          <span className="section-kicker" style={{ color: '#4ade80' }}>Factory-Direct Pricing &amp; Contract Terms</span>
          <h1 className="section-title" style={{ color: '#FFFFFF' }}>
            Request Quotation &amp; Supply Terms
          </h1>
          <p className="section-subtitle" style={{ color: '#CBD5E1', maxWidth: '780px' }}>
            {initialProduct ? (
              <span>Requesting procurement pricing for: <strong style={{ color: '#FFFFFF' }}>{initialProduct}</strong></span>
            ) : (
              'Submit your volume requirements for refined pure lead ingots, master alloys, recycled polypropylene pellets, or scrap battery disposal contracts.'
            )}
          </p>
        </div>
      </section>

      <section className="section-wrapper">
        <div className="app-container" style={{ maxWidth: '880px' }}>
          <div style={{ marginBottom: '2.5rem', textAlign: 'center' }}>
            <span className="section-kicker">Instant Technical Review</span>
            <h2 className="section-title">Commercial Quotation Form</h2>
            <p className="section-subtitle">
              Provide your delivery destination, required tonnage, testing standards, and payment terms. Our commercial managers reply with formal proforma terms within 24 hours.
            </p>
          </div>

          <ContactForm defaultType={defaultType} defaultProduct={initialProduct} />

          {/* Quotation Terms Guarantee */}
          <div style={{ marginTop: '3rem', backgroundColor: 'var(--color-bg-white)', borderRadius: 'var(--radius-xl)', padding: '2rem', border: '1px solid var(--color-border)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
            <div>
              <div style={{ color: 'var(--color-primary)', fontWeight: 700, fontSize: '0.95rem', marginBottom: '0.25rem' }}>
                ✓ LME Index Linked
              </div>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>
                Competitive commercial settlement indexed to London Metal Exchange (LME) cash settlement prices.
              </p>
            </div>
            <div>
              <div style={{ color: 'var(--color-primary)', fontWeight: 700, fontSize: '0.95rem', marginBottom: '0.25rem' }}>
                ✓ Spectrometer Certified
              </div>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>
                Full Optical Emission Spectrometer (OES) chemical certificates provided with every ingot batch.
              </p>
            </div>
            <div>
              <div style={{ color: 'var(--color-primary)', fontWeight: 700, fontSize: '0.95rem', marginBottom: '0.25rem' }}>
                ✓ Secure Logistics
              </div>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>
                Strapped 1-ton bundles loaded with weather-proof shrink film on containerized trucks or rail.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
