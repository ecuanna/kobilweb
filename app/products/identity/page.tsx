import type { ReactNode } from 'react';

const A = {
  logo: '/assets/logos/KOBIL_logo 1.svg',
  logoFooter: '/assets/logos/KOBIL_logo 1.svg',

  identityLogo: '/assets/logos/logo-identity.svg',
  mpowerLogo: '/assets/logos/logo-mpower.svg',

  ctaImage:
    'https://www.figma.com/api/mcp/asset/505a0666-b2ba-437b-9cfc-4e2f5e4da660',
};

const productLinks = [
  {
    label: 'mPower',
    href: '/products/mpower',
    soon: false,
  },
  {
    label: 'IDentity',
    href: '/products/identity',
    soon: false,
  },
  {
    label: 'SuperApp Platform',
    href: '/products/superapp',
    soon: false,
  },
  {
    label: 'AI Trust',
    href: '/products/ai-trust',
    soon: true,
  },
];

const stats = [
  {
    value: '1',
    label: 'Identity layer',
    body: 'A central structure for secure recognition, authentication, and approval flows.',
  },
  {
    value: '4',
    label: 'Security functions',
    body: 'Authentication, signing, wallet, and confirmation flows connected through one layer.',
  },
  {
    value: '∞',
    label: 'Use cases',
    body: 'From banking to healthcare, enterprise access, public services, and commerce.',
  },
];

const benefits = [
  {
    title: 'Secure digital identity',
    body: 'Enable users to be recognized and verified across digital channels with a consistent identity layer.',
  },
  {
    title: 'Device-bound trust',
    body: 'Use the user’s device as a trusted factor in authentication and transaction approval journeys.',
  },
  {
    title: 'Strong authentication',
    body: 'Support multi-factor authentication for high-risk actions and sensitive processes.',
  },
  {
    title: 'Transaction approval',
    body: 'Protect payments, document approvals, contract flows, and access requests with secure confirmation.',
  },
  {
    title: 'Centralized control',
    body: 'Manage authentication, consent, and authorization logic from a single secure structure.',
  },
  {
    title: 'Scalable integration',
    body: 'Connect identity flows to banking, enterprise, healthcare, mobility, and public service platforms.',
  },
];

const capabilities = [
  {
    title: 'Secure user sign-in',
    body: 'Enables users to access digital channels in a controlled and secure way.',
  },
  {
    title: 'Multi-factor authentication',
    body: 'Allows additional verification steps for risky or critical actions.',
  },
  {
    title: 'Centralized management',
    body: 'Enables identity and authentication flows across different digital channels to be managed from a single structure.',
  },
  {
    title: 'Transaction approval',
    body: 'Provides a secure approval mechanism for actions such as money transfers, contract approvals, or access to sensitive data.',
  },
  {
    title: 'Authorization and access control',
    body: 'Helps manage which services users can access and under which conditions.',
  },
  {
    title: 'Device identification',
    body: 'Considers the user’s device as part of the identity verification process.',
  },
];

const secureCards = [
  {
    title: 'Digital onboarding',
    body: 'AI-powered KYC processes get you up and running in seconds.',
  },
  {
    title: 'Secure authentication',
    body: 'Forget passwords. One device. One click. One trust.',
  },
  {
    title: 'Transaction approval',
    body: 'Every payment, every approval – verified and digitally signed, instantly.',
  },
];

const faq = [
  {
    question: 'What is KOBIL IDentity?',
    answer:
      'KOBIL IDentity is a digital identity infrastructure that helps organizations recognize, authenticate, authorize, and protect users across digital channels.',
  },
  {
    question: 'Can IDentity support multi-factor authentication?',
    answer:
      'Yes. IDentity can support additional verification layers for sensitive actions, high-risk sessions, and transaction approval flows.',
  },
  {
    question: 'Is IDentity device-bound?',
    answer:
      'Yes. The user’s device can become part of the trusted identity layer, helping improve security and reduce account takeover risks.',
  },
  {
    question: 'Can IDentity be integrated into existing systems?',
    answer:
      'Yes. IDentity is designed to support integration with enterprise platforms, financial services, digital services, and SuperApp ecosystems.',
  },
  {
    question: 'Which industries can use IDentity?',
    answer:
      'IDentity can support banking, fintech, insurance, healthcare, government, education, mobility, retail, and enterprise workplace scenarios.',
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

function ProductHeader() {
  return (
    <header className="productIdentityHeader">
      <div className="announcement">
        <span>New!</span>
        KOBIL AI Agent Trust Infrastructure
        <a>Learn More</a>
        <b>EN⌄</b>
      </div>

      <nav className="productIdentityNav">
        <a href="/" aria-label="KOBIL home">
          <img className="siteLogo" src={A.logo} alt="KOBIL" />
        </a>

        <div className="productIdentityLinks">
          <div className="productMegaItem">
            <a href="/products/identity" className="active">
              Products
            </a>

            <div className="productMegaMenu">
              <div className="productMegaMenuLinks">
                <strong>Products</strong>

                {productLinks.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className={item.href === '/products/identity' ? 'active' : ''}
                  >
                    {item.label}
                    {item.soon && <span>Soon...</span>}
                  </a>
                ))}
              </div>

              <div className="productMegaMenuFeature">
                <div className="productMegaImage">
                  <div className="productMegaImageOrb">
                    <span>id</span>
                    <span>ai</span>
                    <span>kyc</span>
                  </div>
                </div>

                <p>POWERED by KOBIL</p>
                <h3>Global SuperApp Trend Radar</h3>
                <p>
                  Success stories, benchmarks, key market trends of multi sided
                  mobile platforms.
                </p>

                <a href="/resources/insights">Learn More ↗</a>
              </div>
            </div>
          </div>

          <a href="/solutions">Solutions</a>
          <a href="/industries">Industries</a>
          <a href="/venture">Ventures</a>
          <a href="/resources/insights">Resources</a>
          <a href="/company">Company</a>
        </div>

        <Button>Book a demo</Button>
      </nav>
    </header>
  );
}

function ProductMobileHeader() {
  return (
    <header className="productMobileHeader">
      <div className="mobileAnnouncement">
        <span>New!</span>
        <strong>KOBIL AI Agent Trust Infrastructure</strong>
        <a>Learn More</a>
      </div>

      <nav className="mobileNav">
        <a href="/" aria-label="KOBIL home">
          <img className="mobileSiteLogo" src={A.logo} alt="KOBIL" />
        </a>

        <button className="mobileMenuButton" type="button" aria-label="Open menu">
          <span />
          <span />
          <span />
        </button>
      </nav>
    </header>
  );
}

function ProductSubnav() {
  return (
    <nav className="productIdentitySubnav" aria-label="Product navigation">
      {productLinks.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className={item.href === '/products/identity' ? 'active' : ''}
        >
          {item.label}
          {item.soon && <span>Soon...</span>}
        </a>
      ))}
    </nav>
  );
}

function IdentityHeroGraphic() {
  return (
    <div className="identityHeroGraphic" aria-hidden="true">
      <div className="identityIdCard">
        <div className="identityAvatar" />
        <div>
          <strong>John Dorethy</strong>
          <span>g7dfd27a2</span>
        </div>
        <i />
      </div>

      <div className="identityChatCard">
        <div className="identityChatHeader">
          <span />
          <div>
            <strong>Sales Team</strong>
            <small>12 participants</small>
          </div>
        </div>

        <div className="identityChatBubble">
          I’m sharing the document. Once approved, I’ll proceed.
        </div>

        <div className="identityFileCard">
          <b>Non-Disclosure Agreement.pdf</b>
          <small>8.5 KB</small>
        </div>

        <div className="identityChatBubble right">
          I’ll proceed accordingly.
        </div>
      </div>

      <div className="identitySignatureCard">
        <span>Set Your Signature</span>
        <strong>Julia Miller</strong>
      </div>

      <div className="identitySmartCard">
        <span>🔒</span>
        VIRTUAL SMART CARD
      </div>
    </div>
  );
}

function ProductHero() {
  return (
    <section className="productIdentityHero">
      <div className="productIdentityHeroBg" />

      <div className="productIdentityHeroInner">
        <img
          className="productIdentityLogo"
          src={A.identityLogo}
          alt="KOBIL IDentity"
        />

        <h1>The future of mobile identity starts here.</h1>

        <p>
          KOBIL IDentity is not just a product, it’s your digital fingerprint,
          securely anchored to your device and powered by cutting-edge AI
          technology.
        </p>
      </div>
    </section>
  );
}

function ProductOverview() {
  return (
    <section className="productIdentityOverview">
      <div className="productIdentityTextBlock">
        <span className="productIdentityTag">OVERVIEW</span>

        <h2>Manage digital identity processes through a single security layer.</h2>

        <p>
          IDentity enables users to be securely recognized, verified, and
          authorized across digital channels. It brings user login, device
          identification, multi-factor authentication, access control, and
          transaction approval into one centralized identity structure.
        </p>
      </div>

      <IdentityHeroGraphic />
    </section>
  );
}

function ProductStats() {
  return (
    <section className="productIdentityStats">
      {stats.map((item) => (
        <article key={item.label}>
          <strong>{item.value}</strong>
          <h3>{item.label}</h3>
          <p>{item.body}</p>
        </article>
      ))}
    </section>
  );
}

function ProductApproach() {
  return (
    <section className="productIdentityApproach">
      <div className="productIdentityTextBlock white">
        <span className="productIdentityTag">APPROACH</span>

        <h2>A layered approach to digital identity</h2>

        <p>
          IDentity organizes digital identity around core identity, trust
          functions, security functions, and industry-specific use cases. This
          layered structure helps institutions manage authentication, consent,
          confirmation, signing, and wallet-based interactions within a
          consistent identity framework.
        </p>
      </div>

      <div className="identityLayerDiagram" aria-hidden="true">
        <div className="layerCircle outer">
          <span>Industries Enabled</span>
        </div>
        <div className="layerCircle middle">
          <span>Security Functions</span>
        </div>
        <div className="layerCircle inner">
          <span>Trust Functions</span>
        </div>
        <div className="layerCircle core">
          <strong>Core ID</strong>
        </div>
      </div>
    </section>
  );
}

function ProductBenefits() {
  return (
    <section className="productIdentityBenefits">
      <div className="productIdentitySectionHead">
        <span className="productIdentityTag">BENEFITS</span>
        <h2>What IDentity helps you secure</h2>
      </div>

      <div className="productIdentityBenefitGrid">
        {benefits.map((item) => (
          <article key={item.title}>
            <span />
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function ProductCapabilities() {
  return (
    <section className="productIdentityCapabilities">
      <div className="productIdentityTextBlock white">
        <span className="productIdentityTag">FEATURES</span>

        <h2>Core capabilities of IDentity</h2>

        <p>
          IDentity supports digital identity processes with configurable
          components. Organizations can integrate security flows from user login
          to transaction approval into their services.
        </p>

        <div className="productCapabilityList">
          {capabilities.map((item, index) => (
            <details key={item.title} open={index === 0}>
              <summary>{item.title}</summary>
              <p>{item.body}</p>
            </details>
          ))}
        </div>
      </div>

      <div className="identityCapabilityVisual" aria-hidden="true">
        <div className="identityShield">
          <span>Protect your ID</span>
          <span>Device-Bound</span>
          <span>Protected sign in</span>
          <span>Single Sign On SSO</span>
          <span>Secure payment approvals</span>
        </div>
      </div>
    </section>
  );
}

function ProductSecureCards() {
  return (
    <section className="productIdentitySecure">
      <div className="productIdentitySectionHead">
        <span className="productIdentityTag">SECURE</span>

        <h2>From secure identity to trusted transactions.</h2>
      </div>

      <div className="productSecureGrid">
        {secureCards.map((item) => (
          <article key={item.title}>
            <div className="productSecureVisual" aria-hidden="true">
              <div />
              <span />
            </div>

            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function ProductCrossSell() {
  return (
    <section className="productIdentityCrossSell">
      <div>
        <span className="productIdentityTag">MPOWER</span>

        <h2>From Secure Transactions to Transactions. One Click. One Trust.</h2>

        <p>
          mPower connects people, processes, and data in a secure digital
          workplace. It complements IDentity by helping organizations manage
          communication, approvals, access, and digital workflows from one
          trusted platform.
        </p>

        <a href="/products/mpower">Explore mPower ↗</a>
      </div>

      <div className="productCrossSellCards" aria-hidden="true">
        <span>Digital onboarding</span>
        <span>Secure authentication</span>
        <span>Transaction approval</span>
      </div>
    </section>
  );
}

function ProductCta() {
  return (
    <section className="productIdentityCta">
      <img src={A.ctaImage} alt="" />

      <div>
        <p>Take the Next Step</p>
        <h2>See IDentity in action</h2>
        <Button light>Book a demo</Button>
      </div>
    </section>
  );
}

function ProductFaq() {
  return (
    <section className="productIdentityFaq">
      <h2>FAQ IDentity</h2>

      <div className="productFaqTabs">
        <button type="button" className="active">
          General
        </button>
        <button type="button">Security</button>
        <button type="button">Integration</button>
        <button type="button">Usage</button>
        <button type="button">Support</button>
      </div>

      <div className="productFaqList">
        {faq.map((item, index) => (
          <details key={item.question} open={index === 0}>
            <summary>{item.question}</summary>
            <p>{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

function ProductFooter() {
  return (
    <footer id="contact" className="footer productIdentityFooter">
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
              <a>{idx === 1 ? 'SuperApp Platform' : 'SuperApp Platform'}</a>
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

export default function ProductsIdentityPage() {
  return (
    <main className="productIdentityPage">
      <div className="productIdentityDesktopHeader">
        <ProductHeader />
      </div>

      <div className="productIdentityMobileHeader">
        <ProductMobileHeader />
      </div>

      <ProductSubnav />
      <ProductHero />
      <ProductOverview />
      <ProductStats />
      <ProductApproach />
      <ProductBenefits />
      <ProductCapabilities />
      <ProductSecureCards />
      <ProductCrossSell />
      <ProductCta />
      <ProductFaq />
      <ProductFooter />
    </main>
  );
}
