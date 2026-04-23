import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import PageTransition from '../components/PageTransition';
import './ProjectDetail.css';

const PROJECTS = [
  {
    id: '1',
    title: 'Bakuriani Apartment',
    location: 'Bakuriani, Georgia',
    scope: 'Full Interior Architecture & 3D Visualization',
    year: '2025',
    status: 'Visualization',
    heroImage: '/projects/bakuriani/IMG_5532.jpeg',
    conceptText: 'Designed as a mountain retreat, this Bakuriani apartment embraces warmth and refuge. The palette draws from the surrounding landscape — oak joinery, travertine surfaces, and a bespoke fireplace wall anchored by a textured feature panel. Every room balances material richness with functional calm.',
    rooms: [
      {
        labelKey: 'detail.room.living',
        portrait: false,
        images: [
          { src: '/projects/bakuriani/IMG_5530.jpeg', full: true },
          { src: '/projects/bakuriani/IMG_5531.jpeg' },
          { src: '/projects/bakuriani/IMG_5533.jpeg' },
        ],
      },
      {
        labelKey: 'detail.room.kitchen',
        portrait: false,
        images: [
          { src: '/projects/bakuriani/IMG_5534.jpeg' },
          { src: '/projects/bakuriani/IMG_5535.jpeg' },
          { src: '/projects/bakuriani/IMG_5536.jpeg' },
          { src: '/projects/bakuriani/IMG_5537.jpeg' },
        ],
      },
      {
        labelKey: 'detail.room.bathroom',
        portrait: true,
        images: [
          { src: '/projects/bakuriani/IMG_5538.jpeg' },
          { src: '/projects/bakuriani/IMG_5539.jpeg' },
          { src: '/projects/bakuriani/IMG_5540.jpeg' },
          { src: '/projects/bakuriani/IMG_5541.jpeg' },
        ],
      },
      {
        labelKey: 'detail.room.plan',
        floorPlan: true,
        images: [
          { src: '/projects/bakuriani/Screenshot 2026-03-07 234727.png', full: true },
        ],
      },
    ],
  },
  {
    id: '2',
    title: 'Vera Penthouse',
    location: 'Tbilisi, Georgia',
    scope: 'Full Interior Design',
    year: '2024',
    status: 'Concept / Visualization',
    heroImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1920&q=80',
    conceptText: 'A penthouse in the Vera district conceived around light, symmetry, and restrained luxury. The design foregrounds panoramic city views through a disciplined material palette of Venetian plaster, warm brass, and linen textiles.',
    rooms: [],
  },
  {
    id: '3',
    title: 'Saburtalo Residence',
    location: 'Tbilisi, Georgia',
    scope: 'Space Planning & Custom Furniture',
    year: '2024',
    status: 'Concept / Visualization',
    heroImage: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1920&q=80',
    conceptText: 'Maximizing a compact footprint in central Saburtalo through custom integrated joinery, a rational spatial sequence, and a continuous warm-toned palette that makes the apartment feel larger than its dimensions suggest.',
    rooms: [],
  },
];

const ProjectDetail = () => {
  const { id } = useParams();
  const { t } = useTranslation();

  const project = PROJECTS.find(p => p.id === id) || PROJECTS[0];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <PageTransition title={project.title} description={project.conceptText}>
      <article className="project-detail">
        <div className="project-hero">
          <img src={project.heroImage} alt={project.title} />
        </div>

        <div className="container">
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

          {project.rooms.length > 0 && (
            <div className="project-rooms">
              {project.rooms.map((room, rIdx) => (
                <section key={rIdx} className="room-section">
                  <span className="room-label">{t(room.labelKey)}</span>
                  <div className="room-grid">
                    {room.images.map((img, iIdx) => (
                      <div
                        key={iIdx}
                        className={`room-grid-item${img.full ? ' room-grid-item--full' : ''}${room.floorPlan ? ' room-grid-item--plan' : ''}`}
                        style={{
                          aspectRatio: img.full
                            ? (room.floorPlan ? '4/3' : '16/9')
                            : room.portrait
                            ? '3/4'
                            : '4/3',
                        }}
                      >
                        <img
                          src={img.src}
                          alt={`${project.title} — ${t(room.labelKey)}`}
                          loading="lazy"
                        />
                      </div>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          )}

          <section className="project-footer section">
            <div className="footer-cta-box">
              <h2 className="heading-medium">{t('detail.cta.title')}</h2>
              <Link to="/contact" className="btn-primary" style={{ marginTop: '2.5rem' }}>
                {t('detail.cta.button')}
              </Link>
            </div>
          </section>
        </div>
      </article>
    </PageTransition>
  );
};

export default ProjectDetail;
