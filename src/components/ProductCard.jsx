import React from 'react';
import { Link } from 'react-router-dom';
import { IconCheck, IconArrowRight } from './Icons';

export default function ProductCard({ product }) {
  return (
    <article className="product-card">
      <div className="product-card-media">
        <img
          src={product.image}
          alt={product.title}
          className="product-card-img"
          referrerPolicy="no-referrer"
          loading="lazy"
        />
        <div className="product-purity-badge">{product.purity}</div>
      </div>

      <div className="product-card-body">
        <span className="product-category-kicker">{product.category}</span>
        <h3 className="product-title">{product.title}</h3>
        <p className="product-desc">{product.description}</p>

        {/* Specifications strip */}
        <div className="product-specs-table">
          {product.specs.map((spec, idx) => (
            <div key={idx} className="product-spec-row">
              <span className="product-spec-label">{spec.label}:</span>
              <span className="product-spec-val">{spec.value}</span>
            </div>
          ))}
        </div>

        {/* Applications */}
        <div className="product-apps-block">
          <div className="product-apps-title">Key Industrial Applications:</div>
          <ul className="product-apps-list">
            {product.applications.slice(0, 3).map((app, idx) => (
              <li key={idx} className="product-app-item">
                <IconCheck size={14} style={{ color: 'var(--color-accent)', flexShrink: 0 }} />
                <span>{app}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="product-card-actions">
          <Link
            to={`/quote?product=${encodeURIComponent(product.title)}`}
            className="btn btn-primary btn-sm"
            style={{ width: '100%' }}
          >
            <span>Request Ingot / Resin Quote</span>
            <IconArrowRight size={15} />
          </Link>
        </div>
      </div>
    </article>
  );
}
