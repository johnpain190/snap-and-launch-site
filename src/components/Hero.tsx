
import { useState, useEffect } from "react";
import { Sparkles } from "lucide-react";

export const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 29,
    hours: 20,
    minutes: 18,
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

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-teal-900 via-slate-800 to-emerald-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-32 h-32 bg-teal-400/30 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-emerald-400/30 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-400/20 rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex flex-col lg:flex-row items-center justify-between space-y-12 lg:space-y-0">
          {/* Left Content */}
          <div className="flex-1 space-y-8">
            <div className="flex items-center justify-center lg:justify-start space-x-3 mb-6">
              <Sparkles className="w-8 h-8 text-emerald-400" />
              <h1 className="text-5xl lg:text-6xl font-bold">Vision</h1>
            </div>
            
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
                Eine neue Ära<br />
                beginnt in...
              </h2>
              <p className="text-xl text-gray-300">
                Powered by Vision.
              </p>
            </div>
          </div>

          {/* Countdown Timer */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="flex space-x-8">
              <div className="text-center">
                <div className="text-6xl lg:text-7xl font-bold text-white mb-2">
                  {timeLeft.days.toString().padStart(2, '0')}
                </div>
                <div className="text-gray-400 text-lg">Days</div>
              </div>
              <div className="text-center">
                <div className="text-6xl lg:text-7xl font-bold text-white mb-2">
                  {timeLeft.hours.toString().padStart(2, '0')}
                </div>
                <div className="text-gray-400 text-lg">Hours</div>
              </div>
              <div className="text-center">
                <div className="text-6xl lg:text-7xl font-bold text-white mb-2">
                  {timeLeft.minutes.toString().padStart(2, '0')}
                </div>
                <div className="text-gray-400 text-lg">Minutes</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
