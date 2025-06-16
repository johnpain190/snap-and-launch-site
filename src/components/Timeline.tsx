
import { Button } from "@/components/ui/button";
import { TIMELINE_EVENTS } from "@/constants/timeline";
import { scrollToConnectWallet } from "@/utils/navigation";

export const Timeline = () => {
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

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-teal-400 via-purple-400 to-emerald-400"></div>
          
          {/* Timeline Events - Vertical Layout */}
          <div className="space-y-16 relative">
            {TIMELINE_EVENTS.map((event, index) => (
              <div key={index} className="relative flex items-center">
                {/* Event Circle */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rounded-full z-10 border-4 border-black"></div>
                
                {/* Event Content - Alternating sides */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'ml-auto text-left pl-8'}`}>
                  {/* Event Image */}
                  <div className={`mb-4 flex ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                    <img 
                      src={event.image} 
                      alt={event.title}
                      className="w-20 h-20 object-contain"
                    />
                  </div>
                  
                  {/* Event Details */}
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-white">{event.date}</h3>
                    <p className="text-gray-400 font-medium text-sm">{event.time}</p>
                    <p className="text-base text-white leading-tight">{event.title}</p>
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
