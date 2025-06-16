
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus } from "lucide-react";

export const FAQ = () => {
  const faqs = [
    {
      question: "Was steckt hinter dem Merge von BEST und Pantos?",
      answer: "Der Merge von BEST und Pantos zu VSN schafft ein einheitliches Ökosystem-Token, das alle Funktionen in Bitpanda Web3 verbindet."
    },
    {
      question: "Wie viele VSN bekomme ich für meine BEST oder PAN?",
      answer: "Die Umtauschrate wird vor dem Merge bekannt gegeben. Alle Details zum Umtauschprozess findest du in unserem Whitepaper."
    },
    {
      question: "Was passiert, wenn ich dem Merge nicht zustimme?",
      answer: "Du hast die Möglichkeit, deine Token vor dem Merge zu verkaufen. Nach dem Merge werden nur noch VSN-Token unterstützt."
    },
    {
      question: "Wird es im Vision Treueprogramm ebenfalls VIP-Levels geben?",
      answer: "Ja, das Vision Treueprogramm wird verschiedene Level haben, die zusätzliche Vorteile und Features freischalten."
    },
    {
      question: "Was passiert mit den aktuellen Vorteilen aus dem BEST Treueprogramm?",
      answer: "Alle aktuellen Vorteile werden in das neue Vision Treueprogramm übertragen und erweitert."
    },
    {
      question: "Behalte ich meine Mitgliedschaft im Bitpanda Club?",
      answer: "Ja, deine Club-Mitgliedschaft bleibt bestehen und wird automatisch auf das neue System übertragen."
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16 text-white">FAQ</h2>
        
        <Accordion type="single" collapsible className="w-full space-y-0">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border-b border-gray-700 last:border-b-0"
            >
              <AccordionTrigger className="flex justify-between items-center py-6 text-left hover:no-underline hover:text-white text-white font-medium text-lg [&>svg]:hidden group">
                <span className="pr-4">{faq.question}</span>
                <Plus className="h-6 w-6 shrink-0 text-emerald-400 transition-transform duration-200 group-data-[state=open]:rotate-45" />
              </AccordionTrigger>
              <AccordionContent className="pb-6 pt-0 text-gray-400 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
