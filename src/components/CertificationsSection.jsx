
const certifications = [
  {
    number: "01",
    title: "Google IT Support",
    provider: "Google",
    category: "IT & Technical Support",
    description:
      "Training in IT support fundamentals, troubleshooting, operating systems, networking, and system administration.",
    icon: "01",
    link: "/certificates/google-it-support.pdf",
  },
  {
    number: "02",
    title: "Web Development",
    provider: "Certificate provider to be confirmed",
    category: "Web Development",
    description:
      "Certification demonstrating learning in web development fundamentals and building websites.",
    icon: "02",
    link: "/certificates/coursera-responsive.pdf",
  },
  {
    number: "03",
    title: "Django",
    provider: "Certificate provider to be confirmed",
    category: "Backend Development",
    description:
      "Certification demonstrating learning in Django and Python web application development.",
    icon: "03",
    link: "/certificates/django.pdf",
  },
];

export default function CertificationsSection() {
  return (
    <section
      className="section certifications-section"
      id="certifications"
    >
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">
            06 / PROFESSIONAL DEVELOPMENT
          </span>

          <h2>Certifications</h2>

          <p>
            Professional learning and technical skills development.
          </p>
        </div>

        <div className="certifications-grid">
          {certifications.map((cert) => (
            <article
              className="certification-card"
              key={cert.number}
            >
              <div className="certification-top">
                <span className="certification-icon">
                  {cert.icon}
                </span>

                <span className="certification-label">
                  {cert.category}
                </span>
              </div>

              <h3>{cert.title}</h3>

              <p className="certification-provider">
                {cert.provider}
              </p>

              <p className="certification-description">
                {cert.description}
              </p>

              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="certificate-link"
              >
                View Certificate ↗
              </a>

              <div className="certification-footer">
                <span>Certificate {cert.number}</span>
                <span className="certification-check">✓</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
