
import { Shield, TrendingUp, Users, Zap } from "lucide-react";

export const Features = () => {
  const features = [
    {
      icon: Shield,
      title: "SUPPLY",
      description: "Startangebot: 4,2 Milliarden VSN"
    },
    {
      icon: TrendingUp,
      title: "STAKING",
      description: "Staking mit dynamischer Emission – ab 5% pro Jahr"
    },
    {
      icon: Users,
      title: "GOVERNANCE",
      description: "Die Community entscheidet über Emissionen, Token-Burns und Weiterentwicklungen"
    },
    {
      icon: Zap,
      title: "REVENUE",
      description: "A portion of the fees from the entire product suite fund ecosystem"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Bereit für Wachstum. Entwickelt für die Zukunft.
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Ein Token-Modell, das Verfügbarkeit, Belohnungen und Mitbestimmung ins Gleichgewicht bringt.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-black/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-emerald-500/50 transition-all duration-300 hover:transform hover:-translate-y-2"
            >
              <feature.icon className="w-12 h-12 text-emerald-400 mb-6" />
              <h3 className="text-xl font-semibold mb-4 text-emerald-400">
                {feature.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Donut Chart Section */}
        <div className="mt-20 flex flex-col lg:flex-row items-center justify-between space-y-12 lg:space-y-0">
          <div className="flex-1 space-y-6">
            <h3 className="text-3xl font-bold">
              Ein Token-Modell, das Verfügbarkeit, Belohnungen und Mitbestimmung ins Gleichgewicht bringt.
            </h3>
          </div>
          
          <div className="flex-1 flex justify-center">
            <div className="relative w-64 h-64">
              {/* Simplified donut chart representation */}
              <div className="w-full h-full rounded-full border-8 border-gray-700 relative">
                <div className="absolute inset-0 rounded-full" style={{
                  background: `conic-gradient(from 0deg, #10b981 0deg 234deg, #374151 234deg 270deg, #6b7280 270deg 306deg, #a3e635 306deg 324deg, #10b981 324deg 360deg)`
                }}></div>
                <div className="absolute inset-4 bg-black rounded-full"></div>
              </div>
              
              {/* Legend */}
              <div className="absolute -right-20 top-1/2 transform -translate-y-1/2 space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-lime-400 rounded-full"></div>
                  <span>5% Liquidity provision</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
                  <span>10% Commercial activities & ecosystem grants</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
                  <span>20% Treasury</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                  <span>65% Public circulating supply</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
