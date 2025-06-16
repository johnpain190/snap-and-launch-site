
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Investieren", href: "#invest" },
    { name: "Fusion", href: "#fusion" },
    { name: "Web3", href: "#web3", badge: "NEU" },
    { name: "Features", href: "#features" },
    { name: "Bildung", href: "#education" },
    { name: "Business", href: "#business" },
    { name: "Unternehmen", href: "#company" },
    { name: "Hilfe", href: "#help" },
  ];

  return (
    <header className="relative z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-teal-400 to-emerald-400 rounded-lg flex items-center justify-center">
              <span className="text-black font-bold text-lg">B</span>
            </div>
            <span className="text-xl font-bold">bitpanda</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium"
              >
                {item.name}
                {item.badge && (
                  <span className="absolute -top-2 -right-8 bg-emerald-400 text-black text-xs px-2 py-0.5 rounded-full font-bold">
                    {item.badge}
                  </span>
                )}
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-sm"></div>
              <span className="text-sm">Einloggen</span>
            </div>
            <Button className="bg-emerald-500 hover:bg-emerald-600 text-black font-semibold px-6">
              Jetzt loslegen
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-slate-900/95 backdrop-blur-md border-t border-white/20">
            <nav className="px-4 py-6 space-y-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-gray-300 hover:text-white transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                  {item.badge && (
                    <span className="ml-2 bg-emerald-400 text-black text-xs px-2 py-0.5 rounded-full font-bold">
                      {item.badge}
                    </span>
                  )}
                </a>
              ))}
              <div className="pt-4 space-y-3">
                <Button variant="outline" className="w-full">
                  Einloggen
                </Button>
                <Button className="w-full bg-emerald-500 hover:bg-emerald-600 text-black font-semibold">
                  Jetzt loslegen
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
