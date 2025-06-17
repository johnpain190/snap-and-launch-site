
import { useState, useEffect } from "react";

interface CountdownTimerProps {
  targetDate?: string; // Optional prop, will default to July 16th
}

export const CountdownTimer = ({ targetDate }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set target date to July 16th, 2025 at midnight (you can adjust the year if needed)
    const target = targetDate ? new Date(targetDate) : new Date('2025-07-16T00:00:00');

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = target.getTime() - now;

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
  }, [targetDate]);

  return (
    <div className="flex space-x-4 sm:space-x-6 md:space-x-8 lg:space-x-12 justify-center w-full">
      <div className="text-center">
        <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-bold text-white mb-1 sm:mb-2">
          {timeLeft.days.toString().padStart(2, '0')}
        </div>
        <div className="text-white/70 text-sm sm:text-base lg:text-lg">Tage</div>
      </div>
      <div className="text-center">
        <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-bold text-white mb-1 sm:mb-2">
          {timeLeft.hours.toString().padStart(2, '0')}
        </div>
        <div className="text-white/70 text-sm sm:text-base lg:text-lg">Stunden</div>
      </div>
      <div className="text-center">
        <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-bold text-white mb-1 sm:mb-2">
          {timeLeft.minutes.toString().padStart(2, '0')}
        </div>
        <div className="text-white/70 text-sm sm:text-base lg:text-lg">Minuten</div>
      </div>
    </div>
  );
};
