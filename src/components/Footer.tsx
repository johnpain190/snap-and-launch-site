
export const Footer = () => {
  const scrollToConnectWallet = () => {
    const connectWalletButton = document.querySelector('[data-connect-wallet]');
    if (connectWalletButton) {
      connectWalletButton.scrollIntoView({ 
        behavior: 'smooth',
        block: 'center'
      });
    }
  };

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

  const legalLinks = [
    "Impressum",
    "Datenschutzerklärung", 
    "Geschäftsbedingungen und Richtlinien",
    "Hinweisgeber",
    "Complaints",
    "Bug Bounty",
    "Cookie settings"
  ];

  const mediaLogos = [
    {
      name: "Bloomberg",
      src: "https://sbcdn.bitpanda.com/500x102/ad04ac45f1/bloomberg-logo-white.png",
      alt: "Bloomberg"
    },
    {
      name: "TechCrunch", 
      src: "https://sbcdn.bitpanda.com/500x71/9be9840de7/techcrunch-logo-white.png",
      alt: "TechCrunch"
    },
    {
      name: "CNBC",
      src: "https://sbcdn.bitpanda.com/500x68/08e67f4838/cnbc-logo-white.png", 
      alt: "CNBC"
    }
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
                    <button 
                      onClick={scrollToConnectWallet}
                      className="text-gray-600 hover:text-black transition-colors duration-200 text-sm text-left"
                    >
                      {link}
                    </button>
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
                  <button 
                    onClick={scrollToConnectWallet}
                    className="text-gray-600 hover:text-black transition-colors duration-200 text-sm text-left"
                  >
                    {link}
                  </button>
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
                  <button 
                    onClick={scrollToConnectWallet}
                    className="text-gray-600 hover:text-black transition-colors duration-200 text-sm text-left"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* App Download Section */}
        <div className="mb-12">
          <h3 className="font-semibold mb-4 text-black">App holen</h3>
          <div className="flex space-x-4">
            <button onClick={scrollToConnectWallet} className="block">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png"
                alt="Get it on Google Play"
                className="h-12"
              />
            </button>
            <button onClick={scrollToConnectWallet} className="block">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/2560px-Download_on_the_App_Store_Badge.svg.png"
                alt="Download on the App Store"
                className="h-12"
              />
            </button>
          </div>
        </div>

        {/* Company Links */}
        <div className="flex flex-wrap gap-6 mb-8">
          {companyLinks.map((link, index) => (
            <button 
              key={index}
              onClick={scrollToConnectWallet}
              className="text-black hover:text-gray-600 transition-colors duration-200 font-medium"
            >
              {link}
            </button>
          ))}
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4">
          {socialIcons.map((icon, index) => (
            <button 
              key={index}
              onClick={scrollToConnectWallet}
              className="w-8 h-8 text-black hover:text-gray-600 transition-colors duration-200 flex items-center justify-center"
              aria-label={icon.name}
            >
              <span className="text-lg font-medium">{icon.symbol}</span>
            </button>
          ))}
        </div>
      </div>
      
      {/* Final Footer Section */}
      <div className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            {/* Legal Links */}
            <div className="flex flex-wrap gap-4 mb-6 lg:mb-0">
              {legalLinks.map((link, index) => (
                <button 
                  key={index}
                  onClick={scrollToConnectWallet}
                  className="text-white hover:text-gray-300 transition-colors duration-200 text-sm"
                >
                  {link}
                </button>
              ))}
            </div>
            
            {/* Copyright */}
            <div className="text-white text-sm mb-6 lg:mb-0">
              © 2025 Bitpanda GmbH
            </div>
          </div>
          
          {/* Media Logos */}
          <div className="flex flex-wrap justify-center lg:justify-start items-center gap-8 mt-8 pt-8 border-t border-gray-800">
            {mediaLogos.map((logo, index) => (
              <button key={index} onClick={scrollToConnectWallet}>
                <img 
                  src={logo.src}
                  alt={logo.alt}
                  className="h-8 opacity-70 hover:opacity-100 transition-opacity duration-200"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
