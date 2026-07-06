import Image from "next/image";
import styles from "./page.module.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PreFooterCTA } from "@/components/PreFooterCTA";

// Reusable icons for situations and fits
const situations = [
  { icon: "🚜", title: "Equipment Theft", desc: "Deterring and preventing the theft of expensive machinery and tools from open construction yards." },
  { icon: "📦", title: "Material Theft", desc: "Protecting stored lumber, steel, and other valuable building supplies from unauthorized removal." },
  { icon: "⚡", title: "Copper Theft", desc: "Securing wiring, pipes, and electrical panels from scrap metal thieves before installation." },
  { icon: "🚶", title: "Trespassing", desc: "Stopping unauthorized individuals from entering hazardous active work zones after hours." },
  { icon: "🎨", title: "Vandalism", desc: "Preventing property damage, graffiti, and destruction of partially completed builds." },
  { icon: "🚧", title: "Gate Access Control", desc: "Verifying credentials and logging entries for all workers, vendors, and visitors." },
  { icon: "🌌", title: "After-Hours Activity", desc: "Monitoring the site when workers are gone to detect and report suspicious activity." },
  { icon: "⛺", title: "Homeless Encampments", desc: "Safely deterring encampments from forming on or near the project perimeter." },
  { icon: "🔥", title: "Fire Watch Needs", desc: "Conducting continuous patrols to identify fire hazards, smoke, or equipment overheating." },
  { icon: "🚚", title: "Vendor Access Issues", desc: "Resolving check-in conflicts and managing delivery logistics after hours." },
];

const properties = [
  { icon: "🏢", label: "Commercial Construction" },
  { icon: "🏡", label: "Residential Developments" },
  { icon: "🛣️", label: "Infrastructure Projects" },
  { icon: "🏭", label: "Industrial Builds" },
  { icon: "🔨", label: "Renovation Projects" },
  { icon: "🚜", label: "Equipment Yards" },
  { icon: "⛺", label: "Temporary Jobsites" },
];

const coverageOptions = [
  { service: "Overnight & After-Hours Patrols", schedule: "6 PM - 6 AM Daily", desc: "Dedicated physical patrols and perimeter checks during dark hours when the site is most vulnerable." },
  { service: "Weekend Coverage", schedule: "Fri 6 PM - Mon 6 AM", desc: "Full 48-hour coverage throughout the weekend to prevent vandalism and material theft during downtime." },
  { service: "Holiday & Project Shutdowns", schedule: "24/7 Focus", desc: "Extended site monitoring during holiday breaks and scheduled project standstills." },
  { service: "Gate Control & Visitor Logs", schedule: "Day / Flexible Shifts", desc: "Worker, vendor, and delivery logging during high-traffic daytime construction hours." },
];

export default function ConstructionSiteSecurityPage() {
  return (
    <main className={styles.main}>
      {/* ===== NAVBAR ===== */}
      <Navbar />

      {/* ===== SECTION 1: HERO ===== */}
      <section className={styles.hero} id="hero">
        <div className={styles.heroBg}>
          <Image
            src="/construction_security_hero.png"
            alt="Secure Guard officer standing in front of a busy construction site at twilight with crane and scaffolding"
            fill
            className={styles.heroBgImg}
            priority
            quality={90}
          />
          <div className={styles.heroOverlay} />
        </div>
        <div className={`container ${styles.heroWrapper}`}>
          <div className={styles.heroContent}>
            <div className={styles.heroBadge} id="hero-badge">
              <span className={styles.heroBadgeDot} />
              Construction Site Security Services
            </div>
            <h1 className={styles.heroTitle} id="hero-title">
              Protect Equipment, Materials, Workers, <span className={styles.heroTitleAccent}>and Jobsite Progress After Hours</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Secure Guard Security Services delivers responsive, de-escalation-focused protection for active work zones. Reduce theft, manage access control, and keep your project on schedule.
            </p>
            <div className={styles.heroCtas}>
              <a 
                href="https://www.secureguardservices.com/contact" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.btnPrimary} 
                id="hero-cta-primary"
              >
                Request a Free Quote
              </a>
              <a 
                href="#solution" 
                className={styles.btnOutline} 
                id="hero-cta-secondary"
              >
                Explore Solutions
              </a>
            </div>
          </div>
        </div>
        <div className={styles.heroScroll} aria-hidden="true">
          <span className={styles.heroScrollDot} />
        </div>
      </section>

      {/* ===== SECTION 2: REAL-LIFE PROBLEM ===== */}
      <section className={styles.whySection} id="problem">
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTag}>Real-Life Problem</span>
            <h2 className={styles.sectionTitle}>
              Challenges of Securing an <span className={styles.titleAccent}>Active Construction Jobsite</span>
            </h2>
          </div>
          <div className={styles.whyGrid}>
            <div className={styles.whyText}>
              <p className={styles.bodyText}>
                Construction sites are vulnerable to theft, vandalism, trespassing, equipment damage, copper theft, material loss, and unauthorized entry. Many sites are open, temporary, and difficult to secure with cameras alone.
              </p>
              <p className={styles.bodyText}>
                When tools, machinery, or materials disappear, it can delay the project, increase costs, and create safety risks. Clients need visible security, patrol documentation, access control, and fast reporting.
              </p>
            </div>
            <div className={styles.whyCards}>
              {[
                { icon: "🚜", title: "Equipment & Material Theft", desc: "Stored tools, lumber, and heavy machinery are high-value targets for after-hours thieves." },
                { icon: "⚡", title: "Copper & Metal Theft", desc: "Unsecured wiring, pipes, and electrical panels attract scrap metal thieves, causing massive damage." },
                { icon: "🚶", title: "Trespassing & Liability", desc: "Open boundaries and active hazards create serious safety and liability risks from trespassers." },
                { icon: "🎨", title: "Vandalism & Delays", desc: "Graffiti, property damage, or arson can derail project timelines and inflate costs." },
              ].map((c) => (
                <div key={c.title} className={styles.whyCard}>
                  <div className={styles.whyCardIconWrapper}>
                    <span className={styles.whyCardIcon}>{c.icon}</span>
                  </div>
                  <div className={styles.whyCardContent}>
                    <h3 className={styles.whyCardTitle}>{c.title}</h3>
                    <p className={styles.whyCardDesc}>{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 3: SECURE GUARD SOLUTION ===== */}
      <section className={styles.addonSection} id="solution">
        <div className="container">
          <div className={styles.addonGrid}>
            <div className={styles.addonImageCol}>
              <Image 
                src="/construction_security_patrol.png" 
                alt="Secure Guard officer conducting patrol checks at a construction site" 
                width={600} 
                height={500} 
                className={styles.addonImage} 
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className={styles.addonContent}>
              <span className={styles.sectionTag}>Secure Guard Solution</span>
              <h2 className={styles.sectionTitle}>
                Visible Patrols & <span className={styles.titleAccent}>Jobsite Site Security</span>
              </h2>
              <p className={styles.bodyText}>
                Secure Guard provides construction site security officers, mobile patrols, gate control, equipment checks, material yard monitoring, perimeter patrols, fire watch support, and incident reporting.
              </p>
              <p className={styles.bodyText}>
                Our officers are trained to maintain tight access logs, conduct regular safety checks on machinery, prevent trespassing, and ensure a professional, documented presence. We help protect your investment and maintain workflow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 4: CUSTOMIZABLE COVERAGE (TOWER SECTION APPROACH) ===== */}
      <section className={styles.towerSection} id="coverage">
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTagLight}>Customizable Coverage</span>
            <h2 className={styles.sectionTitleLight}>
              Flexible Security Scheduling <span className={styles.titleAccentGold}>for Construction Projects</span>
            </h2>
          </div>
          <p className={styles.bodyTextCenteredLight}>
            Coverage can be scheduled overnight, on weekends, during holidays, or throughout the project depending on the site’s risk level. We align our security presence with your milestones.
          </p>

          {/* Coverage Options Table */}
          <div className={styles.tableWrapper} id="coverage-table">
            <table className={styles.pricingTable}>
              <thead>
                <tr>
                  <th>Coverage Type</th>
                  <th>Schedule Focus</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                {coverageOptions.map((row) => (
                  <tr key={row.service}>
                    <td className={styles.tdComponent}>{row.service}</td>
                    <td>
                      <span className={styles.badgeOptional}>{row.schedule}</span>
                    </td>
                    <td className={styles.tdDesc}>{row.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ===== SECTION 5: WHAT THIS MEANS FOR THE CLIENT ===== */}
      <section className={styles.opsSection} id="benefits">
        <div className="container">
          <div className={styles.opsGrid}>
            <div className={styles.opsText}>
              <span className={styles.sectionTagLight}>Client Value</span>
              <h2 className={styles.sectionTitleLight}>
                What This Means <span className={styles.titleAccentGold}>for the Client</span>
              </h2>
              <p className={styles.bodyTextLight}>
                By deploying Secure Guard, you establish a reliable security presence that reduces material loss, deters trespassing, and ensures a safer jobsite environment.
              </p>
            </div>
            <div className={styles.opsFeatures}>
              {[
                "Reduced theft, vandalism, and trespassing",
                "Better protection for equipment and materials",
                "Documented patrols and site activity",
                "Support for worker and vendor access control",
                "Faster reporting of suspicious activity",
                "Improved jobsite safety and accountability",
                "Flexible coverage during high-risk project phases",
              ].map((benefit, idx) => (
                <div key={idx} className={styles.opsFeatureItem}>
                  <span className={styles.opsFeatureIcon}>🛡️</span>
                  <span className={styles.opsFeatureLabel}>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 6: COMMON SITUATIONS ===== */}
      <section className={styles.addonSectionAlt} id="situations">
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTag}>Field Expertise</span>
            <h2 className={styles.sectionTitle}>
              Common Construction Site <span className={styles.titleAccent}>Security Situations We Handle</span>
            </h2>
          </div>
          <div className={styles.situationsGrid}>
            {situations.map((sit, index) => (
              <div key={index} className={styles.situationCard}>
                <div className={styles.situationHeader}>
                  <span className={styles.situationIcon}>{sit.icon}</span>
                  <h3 className={styles.situationTitle}>{sit.title}</h3>
                </div>
                <p className={styles.situationDesc}>{sit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 7: BEST FIT FOR ===== */}
      <section className={`${styles.gallerySection} ${styles.bestFitSection}`} id="best-fit">
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTagLight}>Best Fit For</span>
            <h2 className={styles.sectionTitleLight}>
              Projects We <span className={styles.titleAccentGold}>Secure & Protect</span>
            </h2>
            <p className={sectionSubtextTextClass() /* fallback since CSS modules variables are local */}>
              Our construction security services are optimized for various development scales, from local renovations to massive infrastructure projects.
            </p>
          </div>
          <div className={styles.propertiesGrid}>
            {properties.map((prop, idx) => (
              <div key={idx} className={styles.propertyCard}>
                <div className={styles.propertyIcon}>{prop.icon}</div>
                <span className={styles.propertyLabel}>{prop.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PRE-FOOTER CTA ===== */}
      <PreFooterCTA />

      {/* ===== FOOTER ===== */}
      <Footer />
    </main>
  );
}

// Small helper for CSS classes if sectionSubtextLight doesn't match perfectly.
function sectionSubtextTextClass() {
  return `${styles.sectionSubtextLight} ${styles.bodyTextCenteredLight}`;
}
