
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
    }
  ];

  const produkteLinks = [
    "Card",
    "BEST",
    "Pantos",
    "App",
    "Bitpanda Custody"
  ];

  const bitpandaTechLinks = [
    "Home",
    "Plattform",
    "Kunden",
    "Partner",
    "Einblicke"
  ];

  const companyLinks = ["Über uns", "Karriere", "Presse", "Blog", "Hilfe"];

  const socialIcons = [
    { name: "Facebook", symbol: "f" },
    { name: "Twitter", symbol: "𝕏" },
    { name: "Telegram", symbol: "t" },
    { name: "Reddit", symbol: "r" },
    { name: "LinkedIn", symbol: "in" },
    { name: "YouTube", symbol: "yt" },
    { name: "Discord", symbol: "d" },
    { name: "Instagram", symbol: "ig" }
  ];

  return (
    <footer className="bg-white text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Logo */}
        <div className="mb-12">
          <img 
            src="https://sbcdn.bitpanda.com/3912x1183/4a12f4c044/bitpanda_en_trimmed.png" 
            alt="Bitpanda" 
            className="h-8"
          />
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-12">
          {/* First 4 sections */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold mb-4 text-black">{section.title}</h3>
              <ul className="space-y-3">
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

          {/* Produkte section */}
          <div>
            <h3 className="font-semibold mb-4 text-black">Produkte</h3>
            <ul className="space-y-3">
              {produkteLinks.map((link, linkIndex) => (
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

          {/* Bitpanda Technology Solutions section */}
          <div>
            <h3 className="font-semibold mb-4 text-black">Bitpanda Technology Solutions</h3>
            <ul className="space-y-3">
              {bitpandaTechLinks.map((link, linkIndex) => (
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
        </div>

        {/* App Download Section */}
        <div className="mb-12">
          <h3 className="font-semibold mb-4 text-black">App holen</h3>
          <div className="flex space-x-4">
            <a href="#" className="block">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png"
                alt="Get it on Google Play"
                className="h-12"
              />
            </a>
            <a href="#" className="block">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/2560px-Download_on_the_App_Store_Badge.svg.png"
                alt="Download on the App Store"
                className="h-12"
              />
            </a>
          </div>
        </div>

        {/* Company Links */}
        <div className="flex flex-wrap gap-6 mb-8">
          {companyLinks.map((link, index) => (
            <a 
              key={index}
              href="#" 
              className="text-black hover:text-gray-600 transition-colors duration-200 font-medium"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4">
          {socialIcons.map((icon, index) => (
            <a 
              key={index}
              href="#" 
              className="w-8 h-8 text-black hover:text-gray-600 transition-colors duration-200 flex items-center justify-center"
              aria-label={icon.name}
            >
              <span className="text-lg font-medium">{icon.symbol}</span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};
