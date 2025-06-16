import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set target date to 30 days from now
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 30);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleConnectWallet = () => {
    console.log("Connect wallet clicked");
    // Wallet connection logic would go here
  };

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
                className="bg-white text-teal-900 hover:bg-gray-100 font-semibold px-8 py-3 text-lg rounded-md"
              >
                Wallet verbinden
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
                <div className="text-white/70 text-lg">Tage</div>
              </div>
              <div className="text-center">
                <div className="text-6xl lg:text-8xl font-bold text-white mb-2">
                  {timeLeft.hours.toString().padStart(2, '0')}
                </div>
                <div className="text-white/70 text-lg">Stunden</div>
              </div>
              <div className="text-center">
                <div className="text-6xl lg:text-8xl font-bold text-white mb-2">
                  {timeLeft.minutes.toString().padStart(2, '0')}
                </div>
                <div className="text-white/70 text-lg">Minuten</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
