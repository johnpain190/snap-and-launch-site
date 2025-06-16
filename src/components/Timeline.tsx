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

  const scrollToConnectWallet = () => {
    const connectWalletButton = document.querySelector('[data-connect-wallet]');
    if (connectWalletButton) {
      connectWalletButton.scrollIntoView({ 
        behavior: 'smooth',
        block: 'center'
      });
    }
  };

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-bold mb-6 text-white">
            BEST + PAN = VSN
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            BEST und Pantos werden zu einem einzigen Ökosystem-Token zusammengeführt.
          </p>
          <Button 
            onClick={scrollToConnectWallet}
            className="bg-white text-black hover:bg-gray-200 px-8 py-3 rounded-full font-medium"
          >
            Learn more about the merge
          </Button>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Horizontal Timeline Line */}
          <div className="absolute top-[120px] left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-teal-400 via-purple-400 to-emerald-400"></div>
          
          {/* Timeline Events - Horizontal Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative px-8">
            {timelineEvents.map((event, index) => (
              <div key={index} className="relative text-left">
                {/* Event Circle */}
                <div className="absolute top-[117px] left-[50%] transform -translate-x-1/2 w-1.5 h-1.5 bg-white rounded-full z-10"></div>
                
                {/* Event Content */}
                <div className="text-center">
                  {/* Event Image */}
                  <div className="mb-8 flex justify-center">
                    <img 
                      src={event.image} 
                      alt={event.title}
                      className="w-20 h-20 object-contain"
                    />
                  </div>
                  
                  {/* Event Details */}
                  <div className="space-y-1 pt-8">
                    <h3 className="text-lg font-bold text-white">{event.date}</h3>
                    <p className="text-gray-400 font-medium text-xs">{event.time}</p>
                    <p className="text-sm text-white leading-tight mt-2">{event.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
