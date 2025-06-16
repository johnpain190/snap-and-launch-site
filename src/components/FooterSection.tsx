
import { scrollToConnectWallet } from "@/utils/navigation";

interface FooterSectionProps {
  title: string;
  links: string[];
}

export const FooterSection = ({ title, links }: FooterSectionProps) => {
  return (
    <div>
      <h3 className="font-semibold mb-4 text-black">{title}</h3>
      <ul className="space-y-3">
        {links.map((link, index) => (
          <li key={index}>
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
  );
};
