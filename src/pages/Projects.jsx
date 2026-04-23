import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import PageTransition from '../components/PageTransition';
import './Projects.css';

const Projects = () => {
  const { t } = useTranslation();

  const projects = [
    { id: 1, title: 'Bakuriani Apartment', type: t('proj.1.type', 'Full Interior Architecture'), year: '2025', desc: t('proj.1.desc', 'A mountain retreat designed around warmth and refuge — oak joinery, travertine surfaces, and a bespoke fireplace wall.'), image: '/projects/bakuriani/IMG_5532.jpeg' },
    { id: 2, title: 'Vera Penthouse', type: t('proj.2.type', 'Residential Concept'), year: '2024', desc: t('proj.2.desc', 'A penthouse conceived around panoramic city views, Venetian plaster, and restrained warm-toned luxury.'), image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1440&q=80' },
    { id: 3, title: 'Saburtalo Residence', type: t('proj.3.type', 'Space Planning & Styling'), year: '2024', desc: t('proj.3.desc', 'Maximizing space in a compact footprint through custom integrated joinery and a continuous warm palette.'), image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1440&q=80' },
  ];

  return (
    <PageTransition title={t('projects.title')} description={t('projects.intro')}>
    <div className="portfolio-page">
      <div className="container section">
        <header className="portfolio-header">
          <h1 className="heading-large">{t('projects.title')}</h1>
          <p className="text-body portfolio-intro">
            {t('projects.intro')}
          </p>
        </header>

        <div className="portfolio-list">
          {projects.map((project) => (
             <Link to={`/projects/${project.id}`} key={project.id} className="portfolio-item">
                <div className="portfolio-image-wrapper">
                  <img src={project.image} alt={project.title} loading="lazy" />
                </div>
                <div className="portfolio-item-meta">
                  <div className="meta-left">
                    <h2 className="heading-medium">{project.title}</h2>
                    <span className="project-type">{project.type} &mdash; {project.year}</span>
                  </div>
                  <div className="meta-right">
                    <p className="text-body">{project.desc}</p>
                    <span className="view-project-link">{t('projects.view')}</span>
                  </div>
                </div>
             </Link>
          ))}
        </div>
      </div>
    </div>
    </PageTransition>
  );
};

export default Projects;
