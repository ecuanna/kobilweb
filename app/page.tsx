import type { ReactNode } from 'react';

const A = {
  hero: 'https://www.figma.com/api/mcp/asset/91f9f214-bb42-4e52-8ea1-b1f812a5a0b6',

  logo: '/assets/logos/KOBIL_logo 1.svg',
  logoFooter: 'https://www.figma.com/api/mcp/asset/23ebc7a7-718a-4189-8a5a-81447bd804cf',

  venture: '/assets/logos/logo-ventures.svg',

  // Kart logoları
  forbes: '/assets/logos/logo-forbes.svg',
  sparkLogo: '/assets/logos/logo-spark.svg',
  esappLogo: '/assets/logos/logo-esapp.svg',
  caareLogo: '/assets/logos/logo_care.svg',
  skorLogo: '/assets/logos/logo-skor.svg',

  neomLogo: '/assets/logos/logo-neom.svg',
  mercanLogo: '/assets/logos/logo-mercan.svg',
  pawLogo: '/assets/logos/logo-paw.svg',

  card1: 'https://www.figma.com/api/mcp/asset/5bf2286e-67da-46f0-8551-0357b9951c82',
  card2: 'https://www.figma.com/api/mcp/asset/525c8b85-382e-4a7a-93f1-b16e82e66586',
  card3: 'https://www.figma.com/api/mcp/asset/00058782-f712-4da7-beda-8df20fa947b0',
  card4: 'https://www.figma.com/api/mcp/asset/698f1044-6605-43c3-8908-6d78b7edf624',
  card5: 'https://www.figma.com/api/mcp/asset/1fe6a2aa-2ab4-4cb8-90aa-2e81a6f89cff',
  card6: 'https://www.figma.com/api/mcp/asset/94d8d652-a33c-4662-998e-a8664ce29059',
  card7: 'https://www.figma.com/api/mcp/asset/9507d00d-db4e-4ea8-aa2c-c7429c8d97fb',
  card8: 'https://www.figma.com/api/mcp/asset/54f6dba2-945a-41dc-b113-1a8ed2848335',

  phone1: '/assets/phone/phone1-spark.svg',
  phone2: 'https://www.figma.com/api/mcp/asset/a80de6e3-b197-4147-bf46-a032d7668b04',
  phone3: 'https://www.figma.com/api/mcp/asset/a923c391-ff8a-403f-bab9-00b831214474',
  phone4: 'https://www.figma.com/api/mcp/asset/69e9d094-9333-4986-b385-7c73aafd17f7',
  phone5: 'https://www.figma.com/api/mcp/asset/cb678f8d-cce9-4403-9236-6a3fe065f052',
  phone6: 'https://www.figma.com/api/mcp/asset/656f49f5-5410-4df0-89ad-828c2fdc07d4',

  cta: 'https://www.figma.com/api/mcp/asset/505a0666-b2ba-437b-9cfc-4e2f5e4da660',
};

const ventures = [
  {
    no: '01',
    tag: 'MEDIA SUPER APP',
    logo: A.forbes,
    logoClass: 'logoForbes',
    name: 'Forbes Magazine',
    image: A.card1,
    phone: A.phone1,
    title: 'Where Media Earns Trust, Not Just Attention',
    body: 'Forbes Connect moves media beyond publishing. Built on KOBIL’s SuperApp infrastructure, it brings verified identities, native brand communities, and integrated payments into one platform by turning visibility into measurable, lasting value.',
  },
  {
    no: '02',
    tag: 'MOBILITY SUPER APP',
    logo: A.sparkLogo,
    logoClass: 'logoSpark',
    name: 'Spark Connect',
    image: A.card2,
    phone: A.phone1,
    title: 'Where Mobility Earns Trust, Not Just Attention',
    body: 'SPARK unifies fragmented EV charging networks into a single identity-verified ecosystem. With integrated payments, secure communication, and SuperApp architecture, it removes friction between drivers and infrastructure.',
  },
  {
    no: '03',
    tag: 'ESPORTS SUPER APP',
    logo: A.esappLogo,
    logoClass: 'logoEsapp',
    name: 'ESAPP Esports',
    image: A.card3,
    phone: A.phone2,
    title: 'Where Media Earns Trust, Not Just Attention',
    body: 'ESAPP brings tournaments, communities, and content into one verified digital space. Built on KOBIL’s identity infrastructure, it delivers a platform young users can explore freely — and one parents can trust completely.',
  },
  {
    no: '04',
    tag: 'SOCIAL SUPER APP',
    logo: A.caareLogo,
    logoClass: 'logoCaare',
    name: 'Caree Social',
    image: A.card4,
    phone: A.phone3,
    title: 'Where Media Earns Trust, Not Just Attention',
    body: 'A social platform model that combines verified identity, trusted communication, native communities, and digital services inside a secure SuperApp experience.',
  },
  {
    no: '05',
    tag: 'ENTERTAINMENT SUPER APP',
    logo: A.skorLogo,
    logoClass: 'logoSkor',
    name: 'Skor',
    image: A.card5,
    phone: A.phone1,
    title: 'Where Media Earns Trust, Not Just Attention',
    body: 'Entertainment journeys become measurable and secure with identity, payments, community tools, and partner services connected in one digital platform.',
  },
  {
    no: '06',
    tag: 'TRAVEL SUPER APP',
    logo: A.neomLogo,
    logoClass: 'logoText',
    name: 'Neom',
    image: A.card6,
    phone: A.phone5,
    title: 'Where Media Earns Trust, Not Just Attention',
    body: 'Travel experiences connect hotels, mobility, identity, access, and secure payment flows in a seamless SuperApp built for ambitious destination ecosystems.',
  },
  {
    no: '07',
    tag: 'E-COMMERCE SUPER APP',
    logo: A.mercanLogo,
    logoClass: 'logoMark',
    name: 'Mercan',
    image: A.card7,
    phone: A.phone4,
    title: 'Where Media Earns Trust, Not Just Attention',
    body: 'Commerce can move beyond isolated carts with verified users, secure checkout, loyalty, messaging, and partner services in one trusted digital environment.',
  },
  {
    no: '08',
    tag: 'TRAVEL SUPER APP',
    logo: A.pawLogo,
    logoClass: 'logoMarkAlt',
    name: 'Paw',
    image: A.card8,
    phone: A.phone6,
    title: 'Where Media Earns Trust, Not Just Attention',
    body: 'A trusted digital layer for service platforms that require identity, secure communication, transparent transactions, and scalable partner integrations.',
  },
];

const faq = [
  'Is your webview secure? Why don’t you use default webview?',
  'How do you protect my data?',
  'Can I deploy this app on-premises?',
  'Where is your application deployed?',
  'Should I deploy my own application on same data center?',
  'When there is an update how can we deploy it?',
  'Can I customize look and feel?',
  'Are commissions charged on payments?',
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

function BrandLogo({
  logo,
  logoClass,
  name,
}: {
  logo: string;
  logoClass: string;
  name: string;
}) {
  return (
    <div className={`logoFrame ${logoClass}`}>
      <img
        className="brandLogo"
        src={logo}
        alt={`${name} logo`}
        loading="lazy"
      />
    </div>
  );
}

function VentureCard({ item }: { item: (typeof ventures)[number] }) {
  return (
    <article className="ventureCard">
      <div className="cardTop">
        <span>{item.no}</span>
        <strong>{item.tag}</strong>
      </div>

      <div className="brandSlot">
        <BrandLogo logo={item.logo} logoClass={item.logoClass} name={item.name} />
      </div>

      <p className="eyebrow">{item.name}</p>
      <h3>{item.title}</h3>
      <p className="cardBody">{item.body}</p>

      <div className="visual">
        <img className="photo" src={item.image} alt="" />
        <div className="phone">
          <img src={item.phone} alt="Mobile app preview" />
        </div>
      </div>
    </article>
  );
}

export default function Page() {
  return (
    <main>
      <header className="siteHeader">
        <div className="announcement">
          <span>New!</span>
          KOBIL AI Agent Trust Infrastructure
          <a>Learn More</a>
          <b>EN⌄</b>
        </div>

        <nav className="nav">
          <a href="#" aria-label="KOBIL home">
            <img className="siteLogo" src={A.logo} alt="KOBIL" />
          </a>

          <div className="links">
            <a>Products</a>
            <a>Solutions</a>
            <a>Industries</a>
            <a className="active">Ventures</a>
            <a>Resources</a>
            <a>Company</a>
          </div>

          <Button>Book a demo</Button>
        </nav>
      </header>

      <section className="hero">
        <img className="heroBg" src={A.hero} alt="" />
        <img className="ventureLogo" src={A.venture} alt="Ventures" />

        <p>YOUR TECHNOLOGY PARTNER</p>
        <h1>Build with KOBIL trusted digital platforms</h1>

        <div className="ticker">
          <span>Media Super App</span>
          <i />
          <span>Airport Super App</span>
          <i />
          <span>Telecom Super App</span>
          <i />
          <span>Travel Super App</span>
          <i />
          <span>Mobility Super App</span>
          <i />
          <span>Espor Super App</span>
        </div>
      </section>

      <section className="gridWrap">
        <div className="cardsGrid">
          <div className="column">
            {ventures
              .filter((_, i) => i % 2 === 0)
              .map((item) => (
                <VentureCard key={item.no} item={item} />
              ))}
          </div>

          <div className="column shifted">
            {ventures
              .filter((_, i) => i % 2 === 1)
              .map((item) => (
                <VentureCard key={item.no} item={item} />
              ))}
          </div>
        </div>
      </section>

      <section className="faq">
        <h2>FAQ Ventures</h2>

        <div className="faqList">
          {faq.map((q, i) => (
            <details key={q} open={i === 4}>
              <summary>{q}</summary>
              {i === 4 && (
                <p>
                  SuperApp can be used from the shared data center or it can be
                  deployed on desired location. Mini Apps and other web assets
                  can be deployed to any desired server.
                </p>
              )}
            </details>
          ))}
        </div>
      </section>

      <section className="cta">
        <img src={A.cta} alt="" />

        <div>
          <h2>
            <span>Your Platform Is Ready.</span>
            <br />
            Your Idea Just Needs to Start.
          </h2>

          <p>
            KOBIL Ventures gives founders the infrastructure and support to
            build trusted SuperApps without starting from scratch.
          </p>

          <Button light>Learn More</Button>
        </div>
      </section>

      <footer id="contact" className="footer">
        <div className="footerTop">
          <a href="#" aria-label="KOBIL home">
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
                <a>{idx === 5 ? 'Spark Connect SuperApp' : 'SuperApp Platform'}</a>
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
    </main>
  );
}
