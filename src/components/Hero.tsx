
import { Button } from "@/components/ui/button";
import { CountdownTimer } from "./CountdownTimer";
import { useWalletConnection } from "@/hooks/useWalletConnection";

export const Hero = () => {
  const { handleConnectWallet } = useWalletConnection();

  return (
    <section className="relative min-h-[70vh] sm:min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-teal-800 via-teal-900 to-teal-950 px-4">
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between space-y-8 sm:space-y-12 lg:space-y-0 lg:space-x-16">
          {/* Left Content */}
          <div className="flex-1 space-y-6 sm:space-y-8 text-center lg:text-left w-full">
            {/* Vision Logo */}
            <div className="flex items-center justify-center lg:justify-start mb-6 sm:mb-8">
              <img 
                src="https://sbcdn.bitpanda.com/329x132/2faff4e106/vsn_logo-name.png"
                alt="Vision"
                className="h-12 sm:h-14 md:h-16"
              />
            </div>
            
            <div className="space-y-4 sm:space-y-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white px-2">
                Eine neue Ära<br />
                beginnt in...
              </h2>
              <p className="text-lg sm:text-xl text-white/80 px-2">
                Powered by Vision.
              </p>
            </div>

            {/* Airdrop Text and Connect Wallet Button */}
            <div className="space-y-4 sm:space-y-6 pt-4 sm:pt-8 px-2">
              <div className="space-y-3 sm:space-y-4">
                <p className="text-base sm:text-lg text-white/90">
                  Verbinde dein Wallet und sichere dir deinen Platz für den Airdrop beim Launch.
                </p>
                <p className="text-sm sm:text-md text-yellow-300 font-semibold">
                  Nur begrenzte Plätze verfügbar!
                </p>
              </div>
              <Button 
                onClick={handleConnectWallet}
                data-connect-wallet
                className="interact-button bg-white text-teal-900 hover:bg-gray-100 font-semibold px-6 sm:px-8 py-2.5 sm:py-3 text-base sm:text-lg rounded-md w-full sm:w-auto"
              >
                Wallet verbinden
              </Button>
            </div>
          </div>

          {/* Countdown Timer */}
          <div className="flex-1 flex justify-center lg:justify-end w-full">
            <CountdownTimer />
          </div>
        </div>
      </div>
    </section>
  );
};
