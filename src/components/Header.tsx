
import { Button } from "@/components/ui/button";
import { Menu, X, Search, ChevronDown } from "lucide-react";
import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationMenus = {
    "Investieren": [
      {
        title: "Kryptowährungen",
        description: "Kaufe, verkaufe und tausche Kryptowährungen",
        icon: "🪙"
      },
      {
        title: "Aktien*",
        description: "Investiere provisionsfrei in Aktien",
        icon: "📊"
      },
      {
        title: "ETFs*",
        description: "Rund um die Uhr in ETFs investieren",
        icon: "🕐"
      },
      {
        title: "Kryptoindizes",
        description: "Der weltweit erste echte Kryptoindex",
        icon: "🏀"
      },
      {
        title: "Edelmetalle",
        description: "Investiere in Edelmetalle",
        icon: "🥇"
      },
      {
        title: "Rohstoffe*",
        description: "Investiere in Rohstoffe*",
        icon: "💰"
      },
      {
        title: "Leverage",
        description: "Long- oder Short-Leverage bei den Top-Kryptowährungen",
        icon: "💜"
      }
    ],
    "Fusion": [
      {
        title: "Bitpanda Fusion",
        description: "Umfassende Liquidität zu den besten Preisen",
        icon: "🔄"
      }
    ],
    "Web3": [
      {
        title: "Web3 Services",
        description: "Entdecke die Zukunft des Internets",
        icon: "🌐"
      }
    ],
    "Features": [
      {
        title: "Sparplan",
        description: "Erstelle individuelle Sparpläne für Bitcoin oder jedes andere beliebige Asset",
        icon: "💳"
      },
      {
        title: "Bitpanda Spotlight",
        description: "eine neue Art zu investieren",
        icon: "💰"
      },
      {
        title: "Bitpanda Limit Orders",
        description: "Mit Limit Orders per Autopilot investieren",
        icon: "✅"
      },
      {
        title: "Die Bitpanda Card & ihre Vorteile",
        description: "Deine Visa-Karte mit Cashback in BTC",
        icon: "💳"
      },
      {
        title: "BEST Rewards",
        description: "Erhalte Rewards für jede Transaktion",
        icon: "💎"
      },
      {
        title: "Staking",
        description: "Mit nur einem Klick beliebte Coins und Token staken",
        icon: "📈"
      },
      {
        title: "Bitpanda Cash Plus",
        description: "Erziele hohe Renditen von 24/7-Verfügbarkeit",
        icon: "💰"
      },
      {
        title: "Bitpanda Club",
        description: "Ein exklusives Feature für unsere wertvollsten Kunden",
        icon: "💎"
      }
    ],
    "Bildung": [
      {
        title: "Bitpanda Academy",
        description: "Erfahre alles, was du über persönliche Finanzen, digitale Vermögenswerte, Zukunftstechnologien und mehr wissen musst",
        icon: "🎓"
      },
      {
        title: "Wie steige ich ins Trading mit Kryptowährungen ein?",
        description: "KRYPTO",
        icon: "📱"
      },
      {
        title: "Bitcoin-ETFs: ein Überblick",
        description: "BITCOIN",
        icon: "💰"
      },
      {
        title: "Was ist ein Bullenmarkt?",
        description: "TRENDS",
        icon: "📈"
      },
      {
        title: "Was ist Staking?",
        description: "STAKING",
        icon: "🌱"
      }
    ],
    "Business": [
      {
        title: "Bitpanda Technology Solutions",
        description: "Nutzen Sie unsere Tech-Infrastruktur, um Ihren Nutzern eine einzigartige Tradingerfahrung bieten zu können",
        icon: "💻"
      },
      {
        title: "Bitpanda Custody",
        description: "Unsere versicherte, benutzerfreundliche Wallet-Plattform für institutionelle Sicherheit, Automatisierung und Verwaltung von Krypto-Assets über Blockchains und DeFi",
        icon: "🏛️"
      },
      {
        title: "Bitpanda Wealth",
        description: "Krypto-Investments für vermögende Investoren",
        icon: "💎"
      }
    ],
    "Unternehmen": [
      {
        title: "Über",
        description: "Über Bitpanda",
        icon: "ℹ️"
      },
      {
        title: "Sicherheit",
        description: "Sicherheitsmaßnahmen",
        icon: "🔒"
      },
      {
        title: "Presse",
        description: "Pressemitteilungen",
        icon: "📰"
      },
      {
        title: "Karriere",
        description: "Jobs bei Bitpanda",
        icon: "💼"
      },
      {
        title: "Partnerschaft",
        description: "Partner werden",
        icon: "🤝"
      },
      {
        title: "Warum Bitpanda",
        description: "Unsere Vorteile",
        icon: "⭐"
      }
    ],
    "Hilfe": [
      {
        title: "Support Center",
        description: "Hilfe und Support",
        icon: "❓"
      }
    ]
  };

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
    <header className="relative z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/b373ed2c-30ec-4ac2-980e-97425bb9b33b.png"
              alt="Vision Logo"
              className="h-8"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center">
            <NavigationMenu>
              <NavigationMenuList className="space-x-2">
                {navigation.map((item) => (
                  <NavigationMenuItem key={item.name}>
                    <NavigationMenuTrigger className="text-gray-700 hover:text-black transition-colors duration-200 text-sm font-medium bg-transparent hover:bg-gray-50 data-[state=open]:bg-gray-50">
                      {item.name}
                      {item.badge && (
                        <span className="ml-2 bg-emerald-500 text-white text-xs px-2 py-0.5 rounded-full font-bold">
                          {item.badge}
                        </span>
                      )}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="z-[100] bg-white border border-gray-200 shadow-xl rounded-lg p-6 w-[600px] mt-2">
                      <div className="grid grid-cols-1 gap-4">
                        {navigationMenus[item.name]?.map((menuItem, index) => (
                          <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                            <div className="text-2xl flex-shrink-0">{menuItem.icon}</div>
                            <div className="flex-1">
                              <h3 className="font-medium text-gray-900 text-sm leading-tight">{menuItem.title}</h3>
                              <p className="text-gray-600 text-xs mt-1 leading-relaxed">{menuItem.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Right side actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <Search className="w-5 h-5 text-gray-600 cursor-pointer hover:text-black" />
            
            {/* German flag selector */}
            <div className="flex items-center space-x-1 cursor-pointer group">
              <div className="w-6 h-4 relative overflow-hidden rounded-sm border border-gray-300">
                <div className="w-full h-1/3 bg-black"></div>
                <div className="w-full h-1/3 bg-red-600"></div>
                <div className="w-full h-1/3 bg-yellow-400"></div>
              </div>
              <ChevronDown className="w-3 h-3 text-gray-700 group-hover:text-black" />
            </div>
            
            <span className="text-sm text-gray-700 cursor-pointer hover:text-black">
              Einloggen
            </span>
            
            <Button className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6 py-2 rounded-md">
              Jetzt loslegen
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} className="text-black" /> : <Menu size={24} className="text-black" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-[100]">
            <nav className="px-4 py-6 space-y-4">
              {navigation.map((item) => (
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
                <Button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold">
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
