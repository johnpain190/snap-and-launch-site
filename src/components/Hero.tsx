
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 29,
    hours: 20,
    minutes: 5,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleConnectWallet = () => {
    console.log("Connect wallet clicked");
    // Wallet connection logic would go here
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-teal-800 via-teal-900 to-teal-950">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between space-y-12 lg:space-y-0 lg:space-x-16">
          {/* Left Content */}
          <div className="flex-1 space-y-8 text-center lg:text-left">
            {/* Vision Logo */}
            <div className="flex items-center justify-center lg:justify-start space-x-3 mb-8">
              {/* Vision star icon */}
              <div className="text-white">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 0L24.7 15.3L40 20L24.7 24.7L20 40L15.3 24.7L0 20L15.3 15.3L20 0Z" fill="white"/>
                </svg>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-white">Vision</h1>
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
              <p className="text-lg text-white/90">
                Save your spot for the airdrop at the launch
              </p>
              <Button 
                onClick={handleConnectWallet}
                className="bg-white text-teal-900 hover:bg-gray-100 font-semibold px-8 py-3 text-lg rounded-md"
              >
                Connect Wallet
              </Button>
            </div>
          </div>

          {/* Countdown Timer */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="flex space-x-8 lg:space-x-12">
              <div className="text-center">
                <div className="text-6xl lg:text-8xl font-bold text-white mb-2">
                  {timeLeft.days.toString().padStart(2, '0')}
                </div>
                <div className="text-white/70 text-lg">Days</div>
              </div>
              <div className="text-center">
                <div className="text-6xl lg:text-8xl font-bold text-white mb-2">
                  {timeLeft.hours.toString().padStart(2, '0')}
                </div>
                <div className="text-white/70 text-lg">Hours</div>
              </div>
              <div className="text-center">
                <div className="text-6xl lg:text-8xl font-bold text-white mb-2">
                  {timeLeft.minutes.toString().padStart(2, '0')}
                </div>
                <div className="text-white/70 text-lg">Minutes</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
