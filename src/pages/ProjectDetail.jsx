import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import PageTransition from '../components/PageTransition';
import './ProjectDetail.css';

const ProjectDetail = () => {
  const { id } = useParams();
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // Mock data representing a rich case study
  const project = {
    title: t('detail.project.title'),
    type: t('detail.project.type'),
    location: t('detail.project.location'),
    scope: t('detail.project.scope'),
    year: '2025',
    status: t('detail.project.status'),
    heroImage: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1920&q=80',
    conceptText: t('detail.project.conceptText'),
    gallery: [
      'https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1616137508930-74e20792dbca?auto=format&fit=crop&w=1000&q=80'
    ],
    highlightImage: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1440&q=80',
    highlightTitle: t('detail.project.highlightTitle'),
    highlightText: t('detail.project.highlightText')
  };

  return (
    <PageTransition title={project.title} description={project.conceptText}>
    <article className="project-detail">
      {/* Hero */}
      <div className="project-hero">
        <img src={project.heroImage} alt={project.title} />
      </div>

      <div className="container">
        {/* Header & Meta */}
        <header className="project-header section">
          <div className="project-title-area">
            <h1 className="heading-large">{project.title}</h1>
          </div>
          <div className="project-meta-grid">
            <div className="meta-stat">
              <span className="meta-label">{t('detail.meta.location')}</span>
              <span className="meta-value">{project.location}</span>
            </div>
            <div className="meta-stat">
              <span className="meta-label">{t('detail.meta.scope')}</span>
              <span className="meta-value">{project.scope}</span>
            </div>
            <div className="meta-stat">
              <span className="meta-label">{t('detail.meta.year')}</span>
              <span className="meta-value">{project.year}</span>
            </div>
            <div className="meta-stat">
              <span className="meta-label">{t('detail.meta.status')}</span>
              <span className="meta-value">{project.status}</span>
            </div>
          </div>
        </header>

        {/* The Concept */}
        <section className="project-concept section" style={{ paddingTop: 0 }}>
          <div className="concept-grid">
            <div>
              <h2 className="heading-medium">{t('detail.concept.title')}</h2>
            </div>
            <div>
              <p className="text-body" style={{ fontSize: '1.15rem' }}>{project.conceptText}</p>
            </div>
          </div>
        </section>

        {/* 2-Col Gallery */}
        <section className="project-gallery">
          {project.gallery.map((img, idx) => (
            <div key={idx} className="gallery-item">
              <img src={img} alt={`${project.title} detail ${idx + 1}`} loading="lazy" />
            </div>
          ))}
        </section>

        {/* Highlight Section */}
        <section className="project-highlight section">
          <div className="highlight-image">
            <img src={project.highlightImage} alt={project.highlightTitle} loading="lazy" />
          </div>
          <div className="highlight-content">
            <h3 className="heading-medium">{project.highlightTitle}</h3>
            <p className="text-body">{project.highlightText}</p>
          </div>
        </section>

        {/* Footer CTA */}
        <section className="project-footer section">
          <div className="footer-cta-box">
            <h2 className="heading-medium">{t('detail.cta.title')}</h2>
            <Link to="/contact" className="btn-primary" style={{ marginTop: '2.5rem' }}>{t('detail.cta.button')}</Link>
          </div>
        </section>
      </div>
    </article>
    </PageTransition>
  );
};

export default ProjectDetail;
