
import { useState, useEffect } from "react";

interface CountdownTimerProps {
  targetDays: number;
}

export const CountdownTimer = ({ targetDays }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + targetDays);

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
  }, [targetDays]);

  return (
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
  );
};
