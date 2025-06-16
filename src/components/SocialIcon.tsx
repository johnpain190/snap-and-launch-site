
import { scrollToConnectWallet } from "@/utils/navigation";

interface SocialIconProps {
  name: string;
  symbol: string;
}

export const SocialIcon = ({ name, symbol }: SocialIconProps) => {
  return (
    <button 
      onClick={scrollToConnectWallet}
      className="w-8 h-8 text-black hover:text-gray-600 transition-colors duration-200 flex items-center justify-center"
      aria-label={name}
    >
      <span className="text-lg font-medium">{symbol}</span>
    </button>
  );
};
