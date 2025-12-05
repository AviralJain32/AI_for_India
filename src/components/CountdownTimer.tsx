
import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, Users } from 'lucide-react';

interface TimeUnit {
  value: number;
  label: string;
}

interface CountdownProps {
  targetDate: Date;
}

const CountdownTimer = ({ targetDate }: CountdownProps) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const timeUnits: TimeUnit[] = [
    { value: timeLeft.days, label: 'Days' },
    { value: timeLeft.hours, label: 'Hours' },
    { value: timeLeft.minutes, label: 'Minutes' },
    { value: timeLeft.seconds, label: 'Seconds' },
  ];

  return (
    <section className="py-20 relative bg-dark-navy">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Upcoming AI Summit <span className="text-saffron">2025</span>
            </h2>
            
            {/* Countdown Timer */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {timeUnits.map((unit, index) => (
                <div 
                  key={unit.label} 
                  className="glass-card p-4 rounded-xl text-center animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`text-4xl font-bold ${index === 0 ? 'text-saffron' : index === 1 ? 'text-neon-blue' : index === 2 ? 'text-neon-teal' : 'text-neon-pink'}`}>
                    {String(unit.value).padStart(2, '0')}
                  </div>
                  <div className="text-white/70 text-sm mt-1">
                    {unit.label}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Event Details */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-white/80">
                <Calendar className="h-5 w-5 text-saffron" />
                <span>March 15-17, 2025</span>
              </div>
              <div className="flex items-center space-x-3 text-white/80">
                <MapPin className="h-5 w-5 text-saffron" />
                <span>Bangalore International Convention Centre</span>
              </div>
              <div className="flex items-center space-x-3 text-white/80">
                <Users className="h-5 w-5 text-saffron" />
                <span>5000+ Attendees Expected</span>
              </div>
            </div>
          </div>
          
          {/* Summit Image */}
          <div className="rounded-xl overflow-hidden shadow-lg hover-scale">
            <img 
              src="/lovable-uploads/e5898c17-d2dc-405e-be5a-34f134593225.png" 
              alt="AI Summit Conference Hall" 
              className="w-full h-full object-cover rounded-xl hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountdownTimer;
