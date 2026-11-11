import React, { useEffect } from 'react';
import { IconX, IconArrowLeft, IconArrowRight } from './Icons';

export default function Lightbox({ image, title, caption, onClose, onPrev, onNext }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && onPrev) onPrev();
      if (e.key === 'ArrowRight' && onNext) onNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose, onPrev, onNext]);

  if (!image) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(5, 26, 46, 0.94)',
        backdropFilter: 'blur(12px)',
        zIndex: 2000,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
      }}
      onClick={onClose}
    >
      {/* Close button */}
      <button
        type="button"
        onClick={onClose}
        style={{
          position: 'absolute',
          top: '1.5rem',
          right: '1.5rem',
          width: '44px',
          height: '44px',
          borderRadius: '50%',
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          color: '#FFFFFF',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          cursor: 'pointer',
          transition: 'all 0.2s ease',
        }}
        aria-label="Close image viewer"
      >
        <IconX size={24} />
      </button>

      {/* Main image presentation */}
      <div
        style={{
          position: 'relative',
          maxWidth: '1100px',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={image}
          alt={title || 'Factory View'}
          referrerPolicy="no-referrer"
          style={{
            maxWidth: '100%',
            maxHeight: '75vh',
            objectFit: 'contain',
            borderRadius: 'var(--radius-lg)',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
          }}
        />

        {/* Caption */}
        <div style={{ marginTop: '1.25rem', textAlign: 'center', maxWidth: '700px' }}>
          <h3 style={{ color: '#FFFFFF', fontSize: '1.25rem', marginBottom: '0.4rem' }}>{title}</h3>
          {caption && <p style={{ color: '#94A3B8', fontSize: '0.925rem' }}>{caption}</p>}
        </div>

        {/* Prev / Next controls */}
        {onPrev && (
          <button
            type="button"
            onClick={onPrev}
            style={{
              position: 'absolute',
              left: '-2rem',
              top: '45%',
              transform: 'translateY(-50%)',
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255, 255, 255, 0.15)',
              color: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: 'none',
              cursor: 'pointer',
            }}
            aria-label="Previous photograph"
          >
            <IconArrowLeft size={24} />
          </button>
        )}

        {onNext && (
          <button
            type="button"
            onClick={onNext}
            style={{
              position: 'absolute',
              right: '-2rem',
              top: '45%',
              transform: 'translateY(-50%)',
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255, 255, 255, 0.15)',
              color: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: 'none',
              cursor: 'pointer',
            }}
            aria-label="Next photograph"
          >
            <IconArrowRight size={24} />
          </button>
        )}
      </div>
    </div>
  );
}
