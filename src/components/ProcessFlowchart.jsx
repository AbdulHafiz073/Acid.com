import React, { useState } from 'react';
import { processStages } from '../data/factoryData';
import { IconCheck, IconArrowRight, IconShieldCheck, IconChevronDown } from './Icons';
import ProcessModal from './ProcessModal';

export default function ProcessFlowchart({ isPreview = false }) {
  const [selectedStage, setSelectedStage] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredStages = processStages.filter((stage) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'inbound') return stage.id <= 3;
    if (activeFilter === 'separation') return stage.id >= 4 && stage.id <= 5;
    if (activeFilter === 'metallurgy') return stage.id >= 6 && stage.id <= 8;
    if (activeFilter === 'refining') return stage.id >= 9;
    return true;
  });

  const displayStages = isPreview ? processStages.slice(0, 4) : filteredStages;

  const handlePrevStage = () => {
    if (!selectedStage) return;
    const prev = processStages.find((s) => s.id === selectedStage.id - 1);
    if (prev) setSelectedStage(prev);
  };

  const handleNextStage = () => {
    if (!selectedStage) return;
    const next = processStages.find((s) => s.id === selectedStage.id + 1);
    if (next) setSelectedStage(next);
  };

  return (
    <div className="flowchart-root">
      {/* Top Schematic Quick-Scroller (Only on full view) */}
      {!isPreview && (
        <div className="schematic-overview">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-primary)', letterSpacing: '0.05em' }}>
              Process Schematic Quick Jump (Click Any Stage)
            </span>
            <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
              11 Continuous Metallurgical Stages
            </span>
          </div>

          <div className="schematic-track">
            {processStages.map((stage, idx) => (
              <React.Fragment key={stage.id}>
                <div
                  className={`schematic-step-node ${selectedStage?.id === stage.id ? 'active' : ''}`}
                  onClick={() => setSelectedStage(stage)}
                  title={`Open ${stage.step}: ${stage.title}`}
                  role="button"
                  tabIndex={0}
                >
                  <div className="schematic-node-num">{stage.id < 10 ? `0${stage.id}` : stage.id}</div>
                  <div className="schematic-node-label">{stage.title.split('&')[0].trim()}</div>
                </div>
                {idx < processStages.length - 1 && <div className="schematic-connector" />}
              </React.Fragment>
            ))}
          </div>

          {/* Category Filter Tabs */}
          <div className="process-phase-nav" style={{ marginTop: '1.25rem' }}>
            <button
              type="button"
              className={`phase-pill-btn ${activeFilter === 'all' ? 'active' : ''}`}
              onClick={() => setActiveFilter('all')}
            >
              All 11 Stages
            </button>
            <button
              type="button"
              className={`phase-pill-btn ${activeFilter === 'inbound' ? 'active' : ''}`}
              onClick={() => setActiveFilter('inbound')}
            >
              01-03: Inbound & Safety
            </button>
            <button
              type="button"
              className={`phase-pill-btn ${activeFilter === 'separation' ? 'active' : ''}`}
              onClick={() => setActiveFilter('separation')}
            >
              04-05: Breaking & Acid
            </button>
            <button
              type="button"
              className={`phase-pill-btn ${activeFilter === 'metallurgy' ? 'active' : ''}`}
              onClick={() => setActiveFilter('metallurgy')}
            >
              06-08: Smelting & Plastics
            </button>
            <button
              type="button"
              className={`phase-pill-btn ${activeFilter === 'refining' ? 'active' : ''}`}
              onClick={() => setActiveFilter('refining')}
            >
              09-11: Refining & Dispatch
            </button>
          </div>
        </div>
      )}

      {/* Main Timeline Section */}
      <div className="process-timeline-container">
        {/* Central Spine line */}
        <div className="timeline-spine" />

        {/* Steps */}
        {displayStages.map((stage, index) => {
          const isLeft = index % 2 === 0;
          return (
            <React.Fragment key={stage.id}>
              <div className={`timeline-step-row ${isLeft ? 'row-left' : 'row-right'}`}>
                {/* Central Step Marker */}
                <div
                  className="timeline-step-marker"
                  onClick={() => setSelectedStage(stage)}
                  title={`View details for ${stage.step}`}
                  role="button"
                  tabIndex={0}
                >
                  {stage.id < 10 ? `0${stage.id}` : stage.id}
                </div>

                {/* Card Container */}
                <div className="timeline-card-half">
                  <div
                    className="process-card"
                    onClick={() => setSelectedStage(stage)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setSelectedStage(stage);
                      }
                    }}
                  >
                    {/* Visual box */}
                    <div className="process-card-image-box">
                      <img
                        src={stage.image}
                        alt={`${stage.step} - ${stage.title}`}
                        className="process-card-image"
                        referrerPolicy="no-referrer"
                        loading="lazy"
                      />
                      <div className="process-step-indicator">{stage.step}</div>
                      <div className="process-recovered-pill">
                        Output: {stage.recoveredMaterial.split(',')[0]}
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="process-card-body">
                      <div className="process-card-phase">{stage.phase}</div>
                      <h3 className="process-card-title">{stage.title}</h3>
                      <p className="process-card-desc">{stage.shortDesc}</p>

                      <ul className="process-card-bullets">
                        {stage.bulletPoints.slice(0, 2).map((item, i) => (
                          <li key={i} className="process-card-bullet">
                            <IconCheck size={16} className="process-bullet-icon" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="process-card-footer">
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#166534', fontSize: '0.8rem', fontWeight: 600 }}>
                          <IconShieldCheck size={16} />
                          <span>Safety Compliant</span>
                        </div>
                        <span className="explore-details-btn">
                          <span>Explore Details</span>
                          <IconArrowRight size={16} />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Connecting animated arrow between steps */}
              {index < displayStages.length - 1 && (
                <div className="timeline-direction-arrow">
                  <IconChevronDown size={28} />
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* Modal View for In-Depth Exploration */}
      {selectedStage && (
        <ProcessModal
          stage={selectedStage}
          onClose={() => setSelectedStage(null)}
          onPrev={handlePrevStage}
          onNext={handleNextStage}
          totalStages={processStages.length}
        />
      )}
    </div>
  );
}
