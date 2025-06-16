
import { Button } from "@/components/ui/button";

export const Tokenomics = () => {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-12">
          <h2 className="text-5xl lg:text-6xl font-bold">
            BEST + PAN = VSN
          </h2>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            BEST und Pantos werden zu einem einzigen Ökosystem-Token zusammengeführt.
          </p>
          
          <Button 
            variant="outline" 
            className="bg-white text-black hover:bg-gray-100 px-8 py-3 text-lg font-semibold"
          >
            Learn more about the merge
          </Button>
        </div>
      </div>
    </section>
  );
};
