import React, { useRef, useEffect, useState } from 'react'
import '../styles/Projects.css'
const project1 = process.env.PUBLIC_URL + '/p1.png'
const project2 = process.env.PUBLIC_URL + '/p2.png'
const project3 = process.env.PUBLIC_URL + '/p3.png'
const project4 = process.env.PUBLIC_URL + '/p4.png'
const projects = [
  {
id: '01',
name: 'APOLLO CREATIONS',
tag: 'ვებ დიზაინი',
img: project1,
href: 'https://apollocreations.net',
  },
  {
id: '02',
name: 'Rent Car Geo',
tag: 'მანქანების გაქირავება',
img: project2,
href: 'https://rentcargeo.com',
  },
  {
id: '03',
name: 'GREENHALL CAPITAL PARTNERS',
tag: 'კორპორატიული საიტი',
img: project3,
href: 'https://greenhallcapital.com',
  },
  {
id: '04',
name: 'UTOPIA VIP TRAVEL',
tag: 'ტურისტული სააგენტო',
img: project4,
href: 'https://utopiaviptravel.com',
  },
]
function ProjectCard({ project, index }) {
const [visible, setVisible] = useState(false)
const ref = useRef(null)
useEffect(() => {
const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.12 }
    )
if (ref.current) observer.observe(ref.current)
return () => observer.disconnect()
  }, [])
return (
<a
ref={ref}
href={project.href}
target="_blank"
rel="noopener noreferrer"
className={`prj-card ${visible ? 'prj-card--visible' : ''}`}
style={{ transitionDelay: `${index * 0.1}s` }}
>
{/* glass shimmer border */}
<div className="prj-glass-border" />
{/* image */}
<div className="prj-img-wrap">
<img src={project.img} alt={project.name} className="prj-img" />
<div className="prj-img-glow" />
</div>
{/* footer */}
<div className="prj-footer">
<div className="prj-meta">
<span className="prj-index">{project.id}</span>
<span className="prj-tag">{project.tag}</span>
<h3 className="prj-name">{project.name}</h3>
</div>
<div className="prj-arrow">
<svg width="14" height="14" viewBox="0 0 16 16" fill="none">
<path d="M3 13L13 3M13 3H6M13 3V10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
</div>
</div>
</a>
  )
}
function Projects() {
return (
<div className="projects-container" id="work">
<h2 className="prj-heading">
<span className="prj-heading-line prj-heading-line--left" />
        ჩვენი პროექტები
<span className="prj-heading-line prj-heading-line--right" />
</h2>
<div className="prj-grid">
{projects.map((p, i) => (
<ProjectCard key={p.id} project={p} index={i} />
        ))}
</div>
<a href="#work" className="prj-all-btn">იხილე ყველა პროექტი</a>
</div>
  )
}
export default Projects