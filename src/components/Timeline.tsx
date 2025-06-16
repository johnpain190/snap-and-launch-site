
export const Timeline = () => {
  const timelineEvents = [
    {
      date: "9. Juli",
      time: "10:00 MESZ",
      title: "Die Merge-Phase beginnt",
      color: "from-teal-400 to-emerald-400"
    },
    {
      date: "16. Juli",
      time: "10:00 MESZ", 
      title: "Trading von BEST und PAN wird gestoppt",
      color: "from-purple-400 to-pink-400"
    },
    {
      date: "16. Juli",
      time: "14:00 MESZ",
      title: "Start des Tradings von Vision (VSN)",
      color: "from-emerald-400 to-teal-400"
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-teal-400 via-purple-400 to-emerald-400"></div>
          
          {/* Timeline Events */}
          <div className="space-y-24">
            {timelineEvents.map((event, index) => (
              <div key={index} className="relative flex items-center justify-center">
                {/* Event Circle */}
                <div className={`absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r ${event.color} rounded-full border-4 border-black z-10`}></div>
                
                {/* Event Content */}
                <div className="flex items-center justify-between w-full max-w-4xl">
                  {index % 2 === 0 ? (
                    <>
                      <div className="w-1/2 pr-8 text-right">
                        <div className="space-y-2">
                          <h3 className="text-2xl font-bold">{event.date}</h3>
                          <p className="text-gray-400">{event.time}</p>
                          <p className="text-lg">{event.title}</p>
                        </div>
                      </div>
                      <div className="w-1/2 pl-8">
                        <div className={`w-24 h-24 bg-gradient-to-r ${event.color} rounded-2xl transform rotate-12 opacity-80`}></div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="w-1/2 pr-8 flex justify-end">
                        <div className={`w-24 h-24 bg-gradient-to-r ${event.color} rounded-2xl transform -rotate-12 opacity-80`}></div>
                      </div>
                      <div className="w-1/2 pl-8">
                        <div className="space-y-2">
                          <h3 className="text-2xl font-bold">{event.date}</h3>
                          <p className="text-gray-400">{event.time}</p>
                          <p className="text-lg">{event.title}</p>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
