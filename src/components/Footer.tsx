
import { scrollToConnectWallet } from "@/utils/navigation";
import { FooterSection } from "./FooterSection";
import { SocialIcon } from "./SocialIcon";
import { MediaLogo } from "./MediaLogo";
import { 
  FOOTER_SECTIONS, 
  PRODUKTE_LINKS, 
  BITPANDA_TECH_LINKS, 
  COMPANY_LINKS,
  SOCIAL_ICONS,
  LEGAL_LINKS,
  MEDIA_LOGOS
} from "@/constants/footer";

export const Footer = () => {
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
          {FOOTER_SECTIONS.map((section, index) => (
            <FooterSection
              key={index}
              title={section.title}
              links={section.links}
            />
          ))}

          {/* Produkte section */}
          <FooterSection
            title="Produkte"
            links={PRODUKTE_LINKS}
          />

          {/* Bitpanda Technology Solutions section */}
          <FooterSection
            title="Bitpanda Technology Solutions"
            links={BITPANDA_TECH_LINKS}
          />
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
          {COMPANY_LINKS.map((link, index) => (
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
          {SOCIAL_ICONS.map((icon, index) => (
            <SocialIcon
              key={index}
              name={icon.name}
              symbol={icon.symbol}
            />
          ))}
        </div>
      </div>
      
      {/* Final Footer Section */}
      <div className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            {/* Legal Links */}
            <div className="flex flex-wrap gap-4 mb-6 lg:mb-0">
              {LEGAL_LINKS.map((link, index) => (
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
            {MEDIA_LOGOS.map((logo, index) => (
              <MediaLogo
                key={index}
                src={logo.src}
                alt={logo.alt}
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
