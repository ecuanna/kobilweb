import type { ReactNode } from 'react';

const A = {
  logo: '/assets/logos/KOBIL_logo 1.svg',
  logoFooter: '/assets/logos/KOBIL_logo 1.svg',

  insightImageQuantum:
    'https://www.figma.com/api/mcp/asset/387c4b87-c0c2-40b7-81b5-a1d6c8bcac26',
  insightImageRsac:
    'https://www.figma.com/api/mcp/asset/322b584e-29fa-44ad-a96e-a19b611a68a8',

  ctaBg:
    'https://www.figma.com/api/mcp/asset/b056a08e-8163-4ffc-b1b7-6fd1c892e30f',
};

const tabs = ['All', 'Insights', 'Case Studies', 'E-Books', 'Developer Resources'];

const insights = [
  {
    image: A.insightImageQuantum,
    tags: ['New Release', 'Security', 'Technology'],
    language: 'English',
    date: 'April 2, 2026',
    title: 'KOBIL-Produkte sind Quantum-ready – World Quantum Day 14. April',
    body: 'KOBIL, führender Anbieter von Sicherheits- und Identitätsmanagement-Lösungen, stellt seine Produkte auf eine quantensichere Architektur um. Aktuelle KOBIL-Lösungen sind ab sofort mit hybrider Kryptografie ausgestattet und damit „Quantum-ready“.',
  },
  {
    image: A.insightImageQuantum,
    tags: ['New Release', 'Security', 'Technology'],
    language: 'German',
    date: 'April 2, 2026',
    title: 'KOBIL-Produkte sind Quantum-ready – World Quantum Day 14. April',
    body: 'KOBIL, führender Anbieter von Sicherheits- und Identitätsmanagement-Lösungen, stellt seine Produkte auf eine quantensichere Architektur um. Aktuelle KOBIL-Lösungen sind ab sofort mit hybrider Kryptografie ausgestattet und damit „Quantum-ready“.',
  },
  {
    image: A.insightImageRsac,
    tags: ['Conference', 'AI'],
    language: 'English',
    date: 'April 2, 2026',
    title: 'RSAC 2026: KOBIL presents OneID4All and OneApp4All',
    body: 'KOBIL, a leading provider of security and identity management solutions, will present four technologies at RSA Conference 2026 in San Francisco: With KOBIL AI Trust, every AI agent receives a verified digital identity.',
  },
  {
    image: A.insightImageRsac,
    tags: ['Conference', 'AI'],
    language: 'German',
    date: 'April 2, 2026',
    title: 'RSAC 2026: KOBIL presents OneID4All and OneApp4All',
    body: 'KOBIL, a leading provider of security and identity management solutions, will present four technologies at RSA Conference 2026 in San Francisco: With KOBIL AI Trust, every AI agent receives a verified digital identity.',
  },
  {
    image: A.insightImageQuantum,
    tags: ['New Release', 'Security', 'Technology'],
    language: 'English',
    date: 'April 2, 2026',
    title: 'KOBIL-Produkte sind Quantum-ready – World Quantum Day 14. April',
    body: 'KOBIL, führender Anbieter von Sicherheits- und Identitätsmanagement-Lösungen, stellt seine Produkte auf eine quantensichere Architektur um. Aktuelle KOBIL-Lösungen sind ab sofort mit hybrider Kryptografie ausgestattet und damit „Quantum-ready“.',
  },
  {
    image: A.insightImageQuantum,
    tags: ['New Release', 'Security', 'Technology'],
    language: 'German',
    date: 'April 2, 2026',
    title: 'KOBIL-Produkte sind Quantum-ready – World Quantum Day 14. April',
    body: 'KOBIL, führender Anbieter von Sicherheits- und Identitätsmanagement-Lösungen, stellt seine Produkte auf eine quantensichere Architektur um. Aktuelle KOBIL-Lösungen sind ab sofort mit hybrider Kryptografie ausgestattet und damit „Quantum-ready“.',
  },
];

function Button({
  children,
  light = false,
}: {
  children: ReactNode;
  light?: boolean;
}) {
  return (
    <a className={light ? 'button light' : 'button'} href="#contact">
      {children}
      <span>↗</span>
    </a>
  );
}

function InsightsHeader() {
  return (
    <header className="siteHeader">
      <div className="announcement">
        <span>New!</span>
        KOBIL AI Agent Trust Infrastructure
        <a>Learn More</a>
        <b>EN⌄</b>
      </div>

      <nav className="nav">
        <a href="/" aria-label="KOBIL home">
          <img className="siteLogo" src={A.logo} alt="KOBIL" />
        </a>

        <div className="links">
          <a href="/products">Products</a>
          <a href="/solutions">Solutions</a>
          <a href="/industries">Industries</a>
          <a href="/venture">Ventures</a>
          <a href="/resources/insights" className="active">
            Resources
          </a>
          <a href="/company">Company</a>
        </div>

        <Button>Book a demo</Button>
      </nav>
    </header>
  );
}

function InsightCard({ item }: { item: (typeof insights)[number] }) {
  return (
    <article className="insightCard">
      <div className="insightImage">
        <img src={item.image} alt="" loading="lazy" />
      </div>

      <div className="insightMeta">
        <div className="insightTags">
          {item.tags.map((tag) => (
            <span className="insightTag" key={tag}>
              {tag}
            </span>
          ))}

          <span className="insightLanguage">{item.language}</span>
        </div>

        <time>{item.date}</time>
      </div>

      <h2>{item.title}</h2>
      <p>{item.body}</p>
    </article>
  );
}

function InsightsCta() {
  return (
    <section className="insightsCta">
      <img src={A.ctaBg} alt="" />

      <div>
        <h2>Embark on Your Digital Journey with Our Solutions</h2>
        <p>
          See how identity, security, and platform architecture come together to
          enable trusted digital transformation.
        </p>

        <div className="insightsCtaActions">
          <Button>Book a free demo</Button>
          <Button light>Contact sales</Button>
        </div>
      </div>
    </section>
  );
}

function InsightsFooter() {
  return (
    <footer id="contact" className="footer insightsFooter">
      <div className="footerTop">
        <a href="/" aria-label="KOBIL home">
          <img className="footerLogo" src={A.logoFooter} alt="KOBIL" />
        </a>

        <div className="footerMenus">
          {[
            'Company',
            'Products',
            'Solutions',
            'Industries',
            'Resources',
            'KOBIL Ventures',
          ].map((title, idx) => (
            <div key={title}>
              <h4>{title}</h4>
              <a>{idx === 0 ? 'About Us' : 'mPower'}</a>
              <a>{idx === 1 ? 'IDentity' : 'FAQs'}</a>
              <a>{idx === 4 ? 'Insights' : 'SuperApp Platform'}</a>
            </div>
          ))}
        </div>
      </div>

      <div className="footerBottom">
        <div>
          <Button>Contact us</Button>
          <Button light>Book a free demo</Button>
        </div>

        <p>+49 (0) 6241 3004 0 &nbsp;&nbsp; hello@kobil.com</p>
      </div>

      <div className="legal">
        © 2026 KOBIL. All Rights Reserved.
        <span>Privacy | Imprint & Disclaimer | Responsible Disclosure</span>
      </div>
    </footer>
  );
}

export default function ResourcesInsightsPage() {
  return (
    <main className="insightsPage">
      <InsightsHeader />

      <section className="insightsHero">
        <div>
          <h1>The Knowledge Behind Secure Digital Transformation.</h1>
          <p>
            Insights, case studies, technical guides, and research built for
            people making decisions on identity, security, and platform
            architecture.
          </p>
        </div>
      </section>

      <section className="insightsPanel">
        <div className="insightsTabs">
          {tabs.map((tab, index) => (
            <button className={index === 0 ? 'active' : ''} key={tab} type="button">
              {tab}
            </button>
          ))}
        </div>

        <div className="insightsGrid">
          {insights.map((item, index) => (
            <InsightCard item={item} key={`${item.title}-${index}`} />
          ))}
        </div>
      </section>

      <InsightsCta />
      <InsightsFooter />
    </main>
  );
}
