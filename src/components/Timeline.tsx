
import { Button } from "@/components/ui/button";

export const Timeline = () => {
  const timelineEvents = [
    {
      date: "9. Juli",
      time: "10:00 MESZ",
      title: "Die Merge-Phase beginnt",
      image: "https://sbcdn.bitpanda.com/150x150/601bc70f40/merge-timeline-1.png"
    },
    {
      date: "16. Juli",
      time: "10:00 MESZ", 
      title: "Trading von BEST und PAN wird gestoppt",
      image: "https://sbcdn.bitpanda.com/150x150/22aba66fb3/merge-timeline-2.png"
    },
    {
      date: "16 Juli",
      time: "14:00 MESZ",
      title: "Start des Tradings von Vision (VSN)",
      image: "https://sbcdn.bitpanda.com/150x148/7d63fdd307/merge-timeline-3.png"
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold mb-6 text-white">
            BEST + PAN = VSN
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            BEST und Pantos werden zu einem einzigen Ökosystem-Token zusammengeführt.
          </p>
          <Button className="bg-white text-black hover:bg-gray-200 px-8 py-3 rounded-full font-medium">
            Learn more about the merge
          </Button>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-teal-400 via-purple-400 to-emerald-400"></div>
          
          {/* Timeline Events */}
          <div className="space-y-24">
            {timelineEvents.map((event, index) => (
              <div key={index} className="relative flex items-center justify-center">
                {/* Event Circle */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-teal-400 rounded-full border-4 border-black z-10"></div>
                
                {/* Event Content */}
                <div className="flex items-center justify-between w-full max-w-6xl">
                  {index % 2 === 0 ? (
                    <>
                      <div className="w-1/2 pr-16 text-right">
                        <div className="space-y-2">
                          <h3 className="text-2xl font-bold text-white">{event.date}</h3>
                          <p className="text-gray-400 font-medium">{event.time}</p>
                          <p className="text-lg text-white">{event.title}</p>
                        </div>
                      </div>
                      <div className="w-1/2 pl-16 flex justify-start">
                        <img 
                          src={event.image} 
                          alt={event.title}
                          className="w-32 h-32 object-contain"
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="w-1/2 pr-16 flex justify-end">
                        <img 
                          src={event.image} 
                          alt={event.title}
                          className="w-32 h-32 object-contain"
                        />
                      </div>
                      <div className="w-1/2 pl-16">
                        <div className="space-y-2">
                          <h3 className="text-2xl font-bold text-white">{event.date}</h3>
                          <p className="text-gray-400 font-medium">{event.time}</p>
                          <p className="text-lg text-white">{event.title}</p>
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
