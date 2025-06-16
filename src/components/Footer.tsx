
export const Footer = () => {
  const footerSections = [
    {
      title: "Investieren",
      links: [
        "Kryptowährungen",
        "Krypto-Indizes", 
        "Aktien*",
        "ETFs*",
        "Edelmetalle",
        "Rohstoffe*"
      ]
    },
    {
      title: "Profitieren",
      links: [
        "Cash Plus",
        "Staking",
        "BEST",
        "Tell-a-Friend",
        "Affiliate werden"
      ]
    },
    {
      title: "Lernen",
      links: [
        "Kryptowährungen",
        "Investieren",
        "Finanzplanung",
        "Blockchain",
        "Krypto-Sicherheit"
      ]
    },
    {
      title: "Features",
      links: [
        "Club",
        "Payments",
        "Sparplan",
        "Swap",
        "Sicherheit"
      ]
    },
    {
      title: "Produkte",
      links: [
        "Card",
        "BEST",
        "Pantos",
        "App",
        "Bitpanda Custody"
      ]
    },
    {
      title: "Bitpanda Technology Solutions",
      links: [
        "Home",
        "Plattform",
        "Kunden",
        "Partner",
        "Einblicke"
      ]
    }
  ];

  const companyLinks = [
    "Über uns",
    "Karriere", 
    "Presse",
    "Blog",
    "Hilfe"
  ];

  const legalLinks = [
    "Impressum",
    "Datenschutzerklärung",
    "Geschäftsbedingungen und Richtlinien",
    "Hinweisgeber",
    "Complaints",
    "Bug Bounty",
    "Cookie settings"
  ];

  const partnerLogos = ["Bloomberg", "TechCrunch", "CNBC"];

  return (
    <footer className="bg-white text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href="#" 
                      className="text-gray-600 hover:text-black transition-colors duration-200 text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* App Download Section */}
        <div className="mb-12">
          <h3 className="font-semibold mb-4">App holen</h3>
          <div className="flex space-x-4">
            <div className="bg-black text-white px-4 py-2 rounded-lg flex items-center space-x-2">
              <span className="text-sm">Download on the</span>
              <span className="font-semibold">App Store</span>
            </div>
            <div className="bg-black text-white px-4 py-2 rounded-lg flex items-center space-x-2">
              <span className="text-sm">Get it on</span>
              <span className="font-semibold">Google Play</span>
            </div>
          </div>
        </div>

        {/* Company Links */}
        <div className="flex flex-wrap gap-6 mb-8">
          {companyLinks.map((link, index) => (
            <a 
              key={index}
              href="#" 
              className="text-gray-600 hover:text-black transition-colors duration-200"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4 mb-8">
          {['f', 'X', 't', 'r', 'in', 'yt', 'd', 'ig'].map((icon, index) => (
            <a 
              key={index}
              href="#" 
              className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors duration-200"
            >
              <span className="text-sm font-semibold">{icon}</span>
            </a>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-start space-y-6 lg:space-y-0">
            {/* Legal Links */}
            <div className="flex flex-wrap gap-4 text-sm text-gray-600">
              {legalLinks.map((link, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="hover:text-black transition-colors duration-200"
                >
                  {link}
                </a>
              ))}
            </div>

            {/* Copyright */}
            <div className="text-sm text-gray-600">
              © 2025 Bitpanda GmbH
            </div>
          </div>

          {/* Partner Logos */}
          <div className="flex items-center space-x-8 mt-8 pt-8 border-t border-gray-200">
            {partnerLogos.map((logo, index) => (
              <div key={index} className="text-gray-400 font-semibold">
                {logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
