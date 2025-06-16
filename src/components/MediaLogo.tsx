
import { scrollToConnectWallet } from "@/utils/navigation";

interface MediaLogoProps {
  src: string;
  alt: string;
  className?: string;
}

export const MediaLogo = ({ src, alt, className = "h-8" }: MediaLogoProps) => {
  return (
    <button onClick={scrollToConnectWallet}>
      <img 
        src={src}
        alt={alt}
        className={`${className} opacity-70 hover:opacity-100 transition-opacity duration-200`}
      />
    </button>
  );
};
