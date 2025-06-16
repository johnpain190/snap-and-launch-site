
export const Benefits = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Traden. Verdienen. Aktiv sein.
          </h2>
          <p className="text-xl text-gray-400">
            Das Vision Treueprogramm: Je aktiver du bist, desto mehr Vorteile schaltest du frei.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Benefits */}
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-teal-900/50 to-emerald-900/50 backdrop-blur-sm rounded-2xl p-8 border border-emerald-500/30">
              <h3 className="text-2xl font-bold mb-6 text-emerald-400">BITPANDA DEFI WALLET:</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start space-x-3">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span>20% Ermäßigung auf Trading-Gebühren bei Zahlung mit VSN</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span>Mehr XP für Missionen – bessere Platzierung bei Airdrops</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span>Early Access zu Launchpad-Projekten</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-slate-900/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-600/30">
              <h3 className="text-2xl font-bold mb-6 text-gray-300">BITPANDA.COM:</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start space-x-3">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span>20% Ermäßigung auf Trading-Gebühren bei Zahlung mit VSN</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span>Giveaways über Bitpanda Spotlight</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span>Schnellerer Zugang zum Bitpanda Club</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right side - 3D Graphics */}
          <div className="flex flex-col items-center space-y-8">
            <div className="relative">
              <div className="w-48 h-48 bg-gradient-to-r from-teal-400 to-emerald-400 rounded-full opacity-20 blur-xl"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 bg-gradient-to-br from-teal-400 via-emerald-400 to-cyan-400 rounded-2xl transform rotate-12 shadow-2xl"></div>
              </div>
            </div>
            
            <div className="relative">
              <div className="w-40 h-40 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full opacity-20 blur-xl"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-28 h-28 bg-gradient-to-br from-emerald-400 via-teal-400 to-green-400 rounded-2xl transform -rotate-12 shadow-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
