
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

          {/* Right side - First Image */}
          <div className="flex justify-center">
            <img 
              src="https://sbcdn.bitpanda.com/2000x900/f7753d023f/w3-main_wallet.png" 
              alt="Bitpanda DeFi Wallet"
              className="w-full max-w-md"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Left side - Second Image */}
          <div className="flex justify-center">
            <img 
              src="https://sbcdn.bitpanda.com/2000x900/63e6d86434/web3_cube_var3_redshift_main_rs_camera_mp14-m1p-08094_2025-03-07_13-38-08_.png" 
              alt="Web3 Cube"
              className="w-full max-w-md"
            />
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

        {/* New section - Bereit für Wachstum */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Left side - Text */}
          <div className="space-y-8">
            <h3 className="text-4xl font-bold text-white mb-6">
              Bereit für Wachstum. Entwickelt für die Zukunft.
            </h3>
            <p className="text-gray-400 text-lg">
              Ein Token-Modell, das Verfügbarkeit, Belohnungen und Mitbestimmung ins Gleichgewicht bringt.
            </p>
          </div>

          {/* Right side - Chart Image */}
          <div className="flex justify-center">
            <img 
              src="https://sbcdn.bitpanda.com/2000x1200/14ebaf846e/250610_vision-announcement_distribition-graph_2000x1200.png" 
              alt="Distribution Chart"
              className="w-full max-w-lg"
            />
          </div>
        </div>

        {/* New section - 4 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">SUPPLY</h3>
            <p className="text-white font-medium">
              Startangebot: 4,2 Milliarden VSN
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">STAKING</h3>
            <p className="text-white font-medium">
              Staking mit dynamischer Emission – ab 5% pro Jahr
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">GOVERNANCE</h3>
            <p className="text-white font-medium">
              Die Community entscheidet über Emissionen, Token-Burns und Weiterentwicklungen
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">REVENUE</h3>
            <p className="text-white font-medium">
              A portion of the fees from the entire product suite fund ecosystem
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
