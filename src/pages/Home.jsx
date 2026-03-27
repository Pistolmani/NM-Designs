import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import './Home.css';

const Home = () => {
  const { t } = useTranslation();

  const featuredProjects = [
    { id: 1, title: 'Vake Residence', year: '2025', category: 'Interior Concept', image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1440&q=80' },
    { id: 2, title: 'Mtatsminda Apartment', year: '2024', category: 'Full Renovation', image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80' },
    { id: 3, title: 'Saburtalo Studio', year: '2024', category: 'Space Planning', image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80' }
  ];

  const services = [
    "Full interior design",
    "Space and furniture planning",
    "Custom furniture design",
    "Technical documentation and drawings",
    "3D visualizations",
    "Material and finish selection",
    "Lighting and electrical layout planning"
  ];

  const processSteps = [
    { num: '01', title: 'Discovery', desc: 'Understanding your vision, lifestyle, and the architectural context.' },
    { num: '02', title: 'Concept', desc: 'Developing the mood, layout, and visual aesthetic through 3D renders.' },
    { num: '03', title: 'Detailing', desc: 'Producing precise technical drawings and selecting materials.' }
  ];

  return (
    <PageTransition title="Home" description="Warm, refined, and deeply personal interiors in Tbilisi Georgia.">
    <div className="home-page">
      {/* 1. Hero */}
      <section className="hero-section container">
        <div className="hero-content">
          <h1 className="heading-large hero-title">
            Warm, refined, and deeply personal interiors.
          </h1>
          <p className="text-body hero-subtitle">
            We craft minimalist spaces in Tbilisi that elevate contemporary living. 
            Let's build your sanctuary.
          </p>
          <Link to="/contact" className="btn-primary">
            Inquire Now
          </Link>
        </div>
        <div className="hero-image-wrapper">
          <img 
            src="https://images.unsplash.com/photo-1600210491369-e753d80a41f3?auto=format&fit=crop&w=1200&q=80" 
            alt="Warm minimalist interior" 
            className="hero-image"
          />
        </div>
      </section>

      {/* 2. Selected Works */}
      <section className="section container selected-works">
        <div className="section-header">
          <h2 className="heading-medium">Selected Works</h2>
          <Link to="/projects" className="link-arrow">View all projects <ArrowRight size={16} /></Link>
        </div>
        <div className="works-grid">
          {featuredProjects.map((project, index) => (
            <Link to={`/projects/${project.id}`} key={project.id} className={`work-card work-card-${index}`}>
              <div className="work-image-container">
                <img src={project.image} alt={project.title} className="work-image" />
              </div>
              <div className="work-meta">
                <h3 className="heading-small">{project.title}</h3>
                <span className="work-category">{project.category} &mdash; {project.year}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 3. Studio Preview */}
      <section className="section container studio-preview" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="studio-grid">
          <div className="studio-title-area">
            <h2 className="heading-medium">The Studio</h2>
          </div>
          <div className="studio-text-area">
            <p className="text-body" style={{ marginBottom: '2rem', fontSize: '1.25rem' }}>
              NM Designs is founded on the belief that spaces profoundly impact how we feel and live. 
              Led by Nini, we specialize in warm minimalism—stripping away the unnecessary to reveal elegance, calm, and purpose in every corner.
            </p>
            <Link to="/studio" className="link-arrow">Read our story <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

      {/* 4. Services */}
      <section className="section container services-preview">
        <div className="section-header">
          <h2 className="heading-medium">Our Expertise</h2>
        </div>
        <div className="services-list">
          {services.map((service, idx) => (
            <div key={idx} className="service-item">
              <span className="service-number">0{idx + 1}</span>
              <h3 className="heading-small service-name">{service}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Process */}
      <section className="section container process-preview">
        <h2 className="heading-medium" style={{ marginBottom: '4rem', textAlign: 'center' }}>The Approach</h2>
        <div className="process-grid">
          {processSteps.map((step) => (
            <div key={step.num} className="process-card">
              <span className="process-num">{step.num}</span>
              <h3 className="heading-small process-title">{step.title}</h3>
              <p className="text-body">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Contact CTA */}
      <section className="section container contact-cta">
        <div className="cta-box">
          <h2 className="heading-large">Ready to transform your space?</h2>
          <p className="text-body" style={{ margin: '1.5rem auto 3rem auto', maxWidth: '500px', opacity: 0.8 }}>
            We take on a limited number of projects each year to ensure the highest level of detail and care.
          </p>
          <Link to="/contact" className="btn-primary" style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)', border: 'none' }}>
            Start a Project
          </Link>
        </div>
      </section>
    </div>
    </PageTransition>
  );
};

export default Home;
