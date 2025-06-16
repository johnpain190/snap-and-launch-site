
export const TokenInfo = () => {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Vision: Dein Super-Token fürs Web3
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Vision (VSN) verbindet alles in Bitpanda Web3 – Staking, Sparen, Rewards, Abstimmungen und mehr.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-r from-teal-400 to-emerald-400 rounded-full mx-auto flex items-center justify-center">
                <div className="w-8 h-8 bg-white rounded-full"></div>
              </div>
              <h3 className="text-xl font-semibold">STAKING</h3>
              <p className="text-gray-400">
                Verdiene bis zu 10% APY – flexibel und emissionsbasiert
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mx-auto flex items-center justify-center">
                <div className="w-8 h-8 bg-white rounded-full"></div>
              </div>
              <h3 className="text-xl font-semibold">GOVERNANCE</h3>
              <p className="text-gray-400">
                Stimme ab über Staking-Raten, Reward-Pools und Protokoll-Updates
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full mx-auto flex items-center justify-center">
                <div className="w-8 h-8 bg-white rounded-full"></div>
              </div>
              <h3 className="text-xl font-semibold">UTILITY</h3>
              <p className="text-gray-400">
                Zahle Gebühren mit VSN – in der Wallet, im Broker, im Protokoll und auf der Vision Chain*
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mx-auto flex items-center justify-center">
                <div className="w-8 h-8 bg-white rounded-full"></div>
              </div>
              <h3 className="text-xl font-semibold">ACCESS</h3>
              <p className="text-gray-400">
                Schalte Premium-Features über das Vision Treueprogramm frei*
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
