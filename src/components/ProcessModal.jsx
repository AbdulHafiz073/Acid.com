import React, { useEffect } from 'react';
import { IconX, IconShieldCheck, IconCheck, IconArrowLeft, IconArrowRight, IconSettings, IconRecycle } from './Icons';

export default function ProcessModal({ stage, onClose, onPrev, onNext, totalStages = 11 }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && onPrev) onPrev();
      if (e.key === 'ArrowRight' && onNext) onNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    // Prevent background scrolling while modal is open
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose, onPrev, onNext]);

  if (!stage) return null;

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div className="modal-content-card" onClick={(e) => e.stopPropagation()}>
        {/* Header Visual */}
        <div className="modal-header-image">
          <img
            src={stage.image}
            alt={stage.title}
            referrerPolicy="no-referrer"
            loading="lazy"
          />
          <button
            type="button"
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Close stage details"
          >
            <IconX size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="modal-body">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
            <span className="modal-step-tag">{stage.step} of 11</span>
            <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--color-text-muted)', textTransform: 'uppercase' }}>
              Phase: {stage.phase}
            </span>
          </div>

          <h2 id="modal-title" className="modal-title">{stage.title}</h2>
          <p className="modal-full-text">{stage.fullDesc}</p>

          {/* Operational Specifics */}
          <div style={{ marginBottom: '1.75rem' }}>
            <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--color-text-main)', marginBottom: '0.75rem' }}>
              Key Operational Procedures:
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {stage.bulletPoints.map((bullet, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.9rem', color: 'var(--color-text-body)' }}>
                  <IconCheck size={18} style={{ color: 'var(--color-accent)', flexShrink: 0, marginTop: '2px' }} />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Specs & Material Breakdown */}
          <div className="modal-spec-grid">
            <div className="modal-spec-box">
              <div className="modal-spec-label">
                <IconRecycle size={14} style={{ display: 'inline', marginRight: '4px' }} />
                Recovered Output Fraction
              </div>
              <div className="modal-spec-val">{stage.recoveredMaterial}</div>
            </div>
            <div className="modal-spec-box">
              <div className="modal-spec-label">
                <IconSettings size={14} style={{ display: 'inline', marginRight: '4px' }} />
                Industrial Equipment
              </div>
              <div className="modal-spec-val">{stage.machineryUsed}</div>
            </div>
          </div>

          {/* Safety & Environmental Controls */}
          <div className="modal-safety-box">
            <div className="modal-safety-title">
              <IconShieldCheck size={18} />
              <span>Safety & Environmental Protection Protocol</span>
            </div>
            <p style={{ fontSize: '0.9rem', color: '#14532d', lineHeight: 1.55 }}>
              {stage.safetyEnv}
            </p>
          </div>

          {/* Modal Navigation Footer */}
          <div className="modal-nav-footer">
            <button
              type="button"
              className="btn btn-outline btn-sm"
              onClick={onPrev}
              disabled={stage.id === 1}
              style={{ opacity: stage.id === 1 ? 0.4 : 1, cursor: stage.id === 1 ? 'not-allowed' : 'pointer' }}
            >
              <IconArrowLeft size={16} />
              <span>Previous Stage</span>
            </button>

            <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-text-muted)' }}>
              Stage {stage.id} / {totalStages}
            </span>

            <button
              type="button"
              className="btn btn-primary btn-sm"
              onClick={onNext}
              disabled={stage.id === totalStages}
              style={{ opacity: stage.id === totalStages ? 0.4 : 1, cursor: stage.id === totalStages ? 'not-allowed' : 'pointer' }}
            >
              <span>Next Stage</span>
              <IconArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
