
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
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
      </div>
    </section>
  );
};
