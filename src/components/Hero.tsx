import { Button } from "@/components/ui/button";
import { CountdownTimer } from "./CountdownTimer";
import { useWalletConnection } from "@/hooks/useWalletConnection";

export const Hero = () => {
  const { handleConnectWallet } = useWalletConnection();

  return (
    <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-teal-800 via-teal-900 to-teal-950">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between space-y-12 lg:space-y-0 lg:space-x-16">
          {/* Left Content */}
          <div className="flex-1 space-y-8 text-center lg:text-left">
            {/* Vision Logo */}
            <div className="flex items-center justify-center lg:justify-start mb-8">
              <img 
                src="https://sbcdn.bitpanda.com/329x132/2faff4e106/vsn_logo-name.png"
                alt="Vision"
                className="h-16"
              />
            </div>
            
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight text-white">
                Eine neue Ära<br />
                beginnt in...
              </h2>
              <p className="text-xl text-white/80">
                Powered by Vision.
              </p>
            </div>

            {/* Airdrop Text and Connect Wallet Button */}
            <div className="space-y-6 pt-8">
              <div className="space-y-4">
                <p className="text-lg text-white/90">
                  Verbinde dein Wallet und sichere dir deinen Platz für den Airdrop beim Launch.
                </p>
                <p className="text-md text-yellow-300 font-semibold">
                  Nur begrenzte Plätze verfügbar!
                </p>
              </div>
              <Button 
                onClick={handleConnectWallet}
                data-connect-wallet
                className="interact-button bg-white text-teal-900 hover:bg-gray-100 font-semibold px-8 py-3 text-lg rounded-md"
              >
                Wallet verbinden
              </Button>
            </div>
          </div>

          {/* Countdown Timer */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <CountdownTimer targetDays={30} />
          </div>
        </div>
      </div>
    </section>
  );
};
