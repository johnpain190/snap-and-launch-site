
import { Button } from "@/components/ui/button";
import { Menu, X, Search } from "lucide-react";
import { useState } from "react";
import { NAVIGATION_ITEMS } from "@/constants/navigation";
import { ConnectWalletButton } from "./ConnectWalletButton";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="https://sbcdn.bitpanda.com/500x147/3d8067ec09/bitpanda-fcb-acb-nfl-psg-atp.gif"
              alt="Bitpanda"
              className="h-8"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {NAVIGATION_ITEMS.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative text-gray-700 hover:text-black transition-colors duration-200 text-sm font-medium"
              >
                {item.name}
                {item.badge && (
                  <span className="absolute -top-2 -right-8 bg-emerald-500 text-white text-xs px-2 py-0.5 rounded-full font-bold">
                    {item.badge}
                  </span>
                )}
              </a>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <Search className="w-5 h-5 text-gray-600 cursor-pointer hover:text-black" />
            
            {/* Language/Region selector */}
            <div className="flex items-center space-x-1 cursor-pointer">
              <div className="w-6 h-4 bg-gradient-to-r from-black via-red-600 to-yellow-400 rounded-sm"></div>
              <span className="text-sm text-gray-700">▼</span>
            </div>
            
            <span className="text-sm text-gray-700 cursor-pointer hover:text-black">
              Einloggen
            </span>
            
            <ConnectWalletButton>
              Connect wallet
            </ConnectWalletButton>
          </div>

          {/* Mobile right side actions */}
          <div className="flex lg:hidden items-center space-x-2">
            <ConnectWalletButton className="text-xs px-3 py-1.5">
              Connect
            </ConnectWalletButton>
            
            {/* Mobile menu button */}
            <button
              className="p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} className="text-black" /> : <Menu size={24} className="text-black" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-200 shadow-lg">
            <nav className="px-4 py-6 space-y-4">
              {NAVIGATION_ITEMS.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-gray-700 hover:text-black transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                  {item.badge && (
                    <span className="ml-2 bg-emerald-500 text-white text-xs px-2 py-0.5 rounded-full font-bold">
                      {item.badge}
                    </span>
                  )}
                </a>
              ))}
              <div className="pt-4 space-y-3">
                <Button variant="outline" className="w-full border-gray-300 text-gray-700">
                  Einloggen
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
