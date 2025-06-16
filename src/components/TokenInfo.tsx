
import { Database, Award, DollarSign, Coins } from "lucide-react";

export const TokenInfo = () => {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-white">
            Vision: Dein Super-Token fürs Web3
          </h2>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto">
            Vision (VSN) verbindet alles in Bitpanda Web3 – Staking, Sparen, Rewards, Abstimmungen und mehr.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            <div className="text-center space-y-6">
              <div className="flex justify-center">
                <Database className="w-12 h-12 text-emerald-400" />
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-gray-300 uppercase tracking-wider">STAKING</h3>
                <p className="text-white font-medium text-lg">
                  Verdiene bis zu 10% APY – flexibel und emissionsbasiert
                </p>
              </div>
            </div>
            
            <div className="text-center space-y-6">
              <div className="flex justify-center">
                <Award className="w-12 h-12 text-emerald-400" />
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-gray-300 uppercase tracking-wider">GOVERNANCE</h3>
                <p className="text-white font-medium text-lg">
                  Stimme ab über Staking-Raten, Reward-Pools und Protokoll-Updates
                </p>
              </div>
            </div>
            
            <div className="text-center space-y-6">
              <div className="flex justify-center">
                <DollarSign className="w-12 h-12 text-emerald-400" />
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-gray-300 uppercase tracking-wider">UTILITY</h3>
                <p className="text-white font-medium text-lg">
                  Zahle Gebühren mit VSN – in der Wallet, im Broker, im Protokoll und auf der Vision Chain*
                </p>
              </div>
            </div>
            
            <div className="text-center space-y-6">
              <div className="flex justify-center">
                <Coins className="w-12 h-12 text-emerald-400" />
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-gray-300 uppercase tracking-wider">ACCESS</h3>
                <p className="text-white font-medium text-lg">
                  Schalte Premium-Features über das Vision Treueprogramm frei*
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
