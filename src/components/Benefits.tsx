
export const Benefits = () => {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
            Traden. Verdienen. Aktiv sein.
          </h2>
          <p className="text-xl text-gray-400">
            Das Vision Treueprogramm: Je aktiver du bist, desto mehr Vorteile schaltest du frei.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Left side - BITPANDA DEFI WALLET */}
          <div className="space-y-8">
            <h3 className="text-xl font-bold text-white mb-6">BITPANDA DEFI WALLET:</h3>
            <ul className="space-y-4 text-white">
              <li className="flex items-start space-x-3">
                <span className="text-white mt-1">•</span>
                <span>20% Ermäßigung auf Trading-Gebühren bei Zahlung mit VSN</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-white mt-1">•</span>
                <span>Mehr XP für Missionen – bessere Platzierung bei Airdrops</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-white mt-1">•</span>
                <span>Early Access zu Launchpad-Projekten</span>
              </li>
            </ul>
          </div>

          {/* Right side - 3D Image placeholder */}
          <div className="flex justify-center">
            <div className="w-64 h-64 bg-gradient-to-br from-teal-400/20 to-emerald-400/20 rounded-full flex items-center justify-center">
              <div className="w-32 h-32 bg-gradient-to-br from-teal-400 via-emerald-400 to-cyan-400 rounded-2xl opacity-50"></div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Left side - 3D Image placeholder */}
          <div className="flex justify-center">
            <div className="w-64 h-64 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 rounded-full flex items-center justify-center">
              <div className="w-32 h-32 bg-gradient-to-br from-emerald-400 via-teal-400 to-green-400 rounded-2xl opacity-50"></div>
            </div>
          </div>

          {/* Right side - BITPANDA.COM */}
          <div className="space-y-8">
            <h3 className="text-xl font-bold text-white mb-6">BITPANDA.COM:</h3>
            <ul className="space-y-4 text-white">
              <li className="flex items-start space-x-3">
                <span className="text-white mt-1">•</span>
                <span>20% Ermäßigung auf Trading-Gebühren bei Zahlung mit VSN</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-white mt-1">•</span>
                <span>Giveaways über Bitpanda Spotlight</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-white mt-1">•</span>
                <span>Schnellerer Zugang zum Bitpanda Club</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section with title and donut chart */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h3 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
              Bereit für Wachstum. Entwickelt für die Zukunft.
            </h3>
            <p className="text-lg text-gray-400">
              Ein Token-Modell, das Verfügbarkeit, Belohnungen und Mitbestimmung ins Gleichgewicht bringt.
            </p>
          </div>
          
          <div className="flex justify-center">
            <div className="relative">
              {/* Donut Chart */}
              <div className="w-80 h-80 relative">
                <div className="w-full h-full rounded-full relative" style={{
                  background: `conic-gradient(from 0deg, #10b981 0deg 234deg, #6b7280 234deg 270deg, #9ca3af 270deg 306deg, #a3e635 306deg 324deg, #10b981 324deg 360deg)`
                }}>
                  <div className="absolute inset-12 bg-black rounded-full"></div>
                </div>
              </div>
              
              {/* Legend */}
              <div className="absolute -right-32 top-1/2 transform -translate-y-1/2 space-y-3 text-sm text-white">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-lime-400 rounded-full"></div>
                  <span>5%<br />Liquidity provision</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
                  <span>10%<br />Commercial activities<br />& ecosystem grants</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                  <span>20%<br />Treasury</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                  <span>65%<br />Public circulating<br />supply</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
