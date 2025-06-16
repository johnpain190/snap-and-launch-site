
import { Button } from "@/components/ui/button";

interface ConnectWalletButtonProps {
  variant?: "primary" | "secondary";
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
}

export const ConnectWalletButton = ({ 
  variant = "primary", 
  className = "", 
  onClick,
  children 
}: ConnectWalletButtonProps) => {
  const baseClasses = "interact-button font-semibold";
  
  const variantClasses = {
    primary: "bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded-md",
    secondary: "bg-white text-teal-900 hover:bg-gray-100 px-8 py-3 text-lg rounded-md"
  };

  return (
    <Button 
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </Button>
  );
};
