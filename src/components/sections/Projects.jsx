import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { X, ExternalLink, Download, FileText } from 'lucide-react';
import Container from '../ui/Container';
import styles from '../../styles/modules/Projects.module.css';

gsap.registerPlugin(ScrollTrigger);

// Project Data
const projectsData = {
  operational: [
    {
      id: 'op1',
      title: 'Rooftop Solar • 1.2 MW • Jaipur, Rajasthan',
      projectType: 'Rooftop Solar',
      capacity: '1.2 MW',
      location: 'Jaipur, Rajasthan',
      status: 'Operational',
      statusColor: 'green',
      model: 'CAPEX',
      image: '/images/projects/rooftop-jaipur.png',
      shortDescription: 'Representative project executed in collaboration with EPC partners — capacity: 1.2 MW.',
      bullets: [
        'Scope: Feasibility · Design · EPC · Commissioning',
        'Model: CAPEX'
      ],
      altText: 'Rooftop Solar installation at Jaipur, 1.2 MW — representative image.'
    },
    {
      id: 'op2',
      title: 'Ground-Mounted Solar • 15 MW • Tumkur, Karnataka',
      projectType: 'Ground-Mounted Solar',
      capacity: '15 MW',
      location: 'Tumkur, Karnataka',
      status: 'Operational',
      statusColor: 'green',
      model: 'OPEX',
      image: '/images/projects/ground-tumkur.png',
      shortDescription: 'Representative project executed in collaboration with EPC partners — capacity: 15 MW.',
      bullets: [
        'Scope: Feasibility · Design · EPC · Commissioning',
        'Model: OPEX'
      ],
      altText: 'Ground-Mounted Solar installation at Tumkur, 15 MW — representative image.'
    },
    {
      id: 'op3',
      title: 'Rooftop Solar • 1.4 MW • Bangalore, Karnataka',
      projectType: 'Rooftop Solar',
      capacity: '1.4 MW',
      location: 'Bangalore, Karnataka',
      status: 'Operational',
      statusColor: 'green',
      model: 'CAPEX',
      image: '/images/projects/rooftop-bangalore.png',
      shortDescription: 'Representative project executed in collaboration with EPC partners — capacity: 1.4 MW.',
      bullets: [
        'Scope: Feasibility · Design · EPC · Commissioning',
        'Model: CAPEX'
      ],
      altText: 'Rooftop Solar installation at Bangalore, 1.4 MW — representative image.'
    }
  ],
  upcoming: [
    {
      id: 'up1',
      title: 'Ground-Mounted Solar • 25 MW • Rajkot, Gujarat',
      projectType: 'Ground-Mounted Solar',
      capacity: '25 MW',
      location: 'Rajkot, Gujarat',
      status: 'Under Development',
      statusColor: 'amber',
      model: 'Group Captive',
      image: '/images/projects/ground-tumkur.png',
      shortDescription: 'Under development — expected commissioning Q3 2026.',
      bullets: [
        'Scope: Survey · Design · Regulatory',
        'Model: Group Captive'
      ],
      altText: 'Ground-Mounted Solar project at Rajkot, 25 MW — representative image.',
      codEstimate: 'Q3 2026'
    },
    {
      id: 'up2',
      title: 'Hybrid Wind-Solar • 50 MW • Dharwad, Karnataka',
      projectType: 'Hybrid Wind-Solar',
      capacity: '50 MW',
      location: 'Dharwad, Karnataka',
      status: 'Planned',
      statusColor: 'blue',
      model: 'PPA',
      image: '/images/projects/rooftop-bangalore.png',
      shortDescription: 'Planned project — subject to regulatory approvals.',
      bullets: [
        'Scope: Feasibility · Pre-development',
        'Model: PPA'
      ],
      altText: 'Hybrid Wind-Solar project at Dharwad, 50 MW — representative image.',
      codEstimate: 'Q1 2027'
    }
  ]
};

const metrics = [
  { value: '50+', label: 'Projects executed across industrial & commercial sites' },
  { value: 'MW-scale', label: 'Solar, wind & hybrid capacity enabled' },
  { value: 'Pan-India', label: 'Execution through proven delivery partners' }
];

const Projects = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const [activeTab, setActiveTab] = useState('operational');
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = activeTab === 'operational' ? projectsData.operational : projectsData.upcoming;

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headerRef.current?.children || [],
        { y: 20, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const openModal = (project) => setSelectedProject(project);
  const closeModal = () => setSelectedProject(null);

  return (
    <section className={styles.section} ref={sectionRef} id="projects">
      <Container>
        {/* Section Header */}
        <div className={styles.header} ref={headerRef}>
          <h2 className={styles.heading}>Projects & Execution Experience</h2>
          <p className={styles.subheading}>
            Representative projects executed and an active development pipeline delivered through strategic EPC and technology partners.
          </p>
        </div>

        {/* Credibility Metrics Strip */}
        <div className={styles.metricsStrip}>
          {metrics.map((metric, i) => (
            <div key={i} className={styles.metricItem}>
              <span className={styles.metricValue}>{metric.value}</span>
              <span className={styles.metricLabel}>{metric.label}</span>
            </div>
          ))}
        </div>

        {/* Tab Navigation */}
        <div className={styles.tabNav} role="tablist">
          <button
            role="tab"
            aria-selected={activeTab === 'operational'}
            className={`${styles.tab} ${activeTab === 'operational' ? styles.tabActive : ''}`}
            onClick={() => setActiveTab('operational')}
          >
            Operational Projects
          </button>
          <button
            role="tab"
            aria-selected={activeTab === 'upcoming'}
            className={`${styles.tab} ${activeTab === 'upcoming' ? styles.tabActive : ''}`}
            onClick={() => setActiveTab('upcoming')}
          >
            Upcoming Projects
          </button>
        </div>

        {/* Projects Grid */}
        <div className={styles.projectsGrid} role="tabpanel">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`${styles.projectTile} ${project.status !== 'Operational' ? styles.upcomingTile : ''}`}
            >
              {/* Project Image */}
              <div className={styles.imageWrapper}>
                <img
                  src={project.image}
                  alt={project.altText}
                  loading="lazy"
                  className={styles.projectImage}
                />
                <span className={`${styles.statusBadge} ${styles[`status${project.statusColor}`]}`}>
                  {project.status}
                </span>
              </div>

              {/* Project Content */}
              <div className={styles.projectContent}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.shortDescription}</p>

                <ul className={styles.bulletList}>
                  {project.bullets.map((bullet, i) => (
                    <li key={i} className={styles.bullet}>{bullet}</li>
                  ))}
                </ul>

                {project.codEstimate && (
                  <p className={styles.codEstimate}>Expected COD: {project.codEstimate}</p>
                )}

                {/* Action Links */}
                <div className={styles.actionLinks}>
                  <button
                    className={styles.primaryAction}
                    onClick={() => openModal(project)}
                  >
                    View Project Details
                  </button>
                  <button className={styles.secondaryAction}>
                    Request Similar Project Estimate
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Micro-Disclaimer */}
        <p className={styles.disclaimer}>
          Project details shown are representative of execution experience and development pipeline delivered through strategic EPC and technology partners. Project ownership and client names are displayed only with explicit approval.
        </p>

        {/* Execution Summary Strip */}
        <div className={styles.summaryStrip}>
          <div className={styles.summaryContent}>
            <div className={styles.summaryText}>
              <h4 className={styles.summaryHeadline}>Execution footprint & pipeline</h4>
              <p className={styles.summaryDescription}>
                Representative projects across manufacturing, healthcare, hospitality, education, IT and logistics.
              </p>
            </div>
            <div className={styles.summaryActions}>
              <button className={styles.ctaButton}>
                <FileText size={16} />
                Request Project Pack
              </button>
              <button className={styles.ctaButtonOutline}>
                <ExternalLink size={16} />
                Speak to an Energy Expert
              </button>
            </div>
          </div>
        </div>
      </Container>

      {/* Project Modal */}
      {selectedProject && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <button className={styles.modalClose} onClick={closeModal}>
              <X size={24} />
            </button>

            <div className={styles.modalContent}>
              <img
                src={selectedProject.image}
                alt={selectedProject.altText}
                className={styles.modalImage}
              />

              <div className={styles.modalDetails}>
                <span className={`${styles.statusBadge} ${styles[`status${selectedProject.statusColor}`]}`}>
                  {selectedProject.status}
                </span>

                <h3 className={styles.modalTitle}>{selectedProject.projectType}</h3>

                <div className={styles.modalMeta}>
                  <div className={styles.metaItem}>
                    <span className={styles.metaLabel}>Location</span>
                    <span className={styles.metaValue}>{selectedProject.location}</span>
                  </div>
                  <div className={styles.metaItem}>
                    <span className={styles.metaLabel}>Capacity</span>
                    <span className={styles.metaValue}>{selectedProject.capacity}</span>
                  </div>
                  <div className={styles.metaItem}>
                    <span className={styles.metaLabel}>Model</span>
                    <span className={styles.metaValue}>{selectedProject.model}</span>
                  </div>
                  {selectedProject.codEstimate && (
                    <div className={styles.metaItem}>
                      <span className={styles.metaLabel}>Expected COD</span>
                      <span className={styles.metaValue}>{selectedProject.codEstimate}</span>
                    </div>
                  )}
                </div>

                <div className={styles.modalTimeline}>
                  <span className={styles.timelineLabel}>Timeline:</span>
                  <span className={styles.timelineValue}>Survey → Design → EPC → Commissioning</span>
                </div>

                <p className={styles.modalDescription}>{selectedProject.shortDescription}</p>

                <button className={styles.downloadButton}>
                  <Download size={16} />
                  Download Project Datasheet (PDF)
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
