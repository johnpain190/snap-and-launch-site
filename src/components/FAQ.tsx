
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16">FAQ</h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-800 pb-4"
            >
              <button
                className="w-full flex justify-between items-center text-left py-4 hover:text-emerald-400 transition-colors duration-200"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-medium pr-4">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-6 h-6 text-emerald-400 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-6 h-6 flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="pb-4 text-gray-400 leading-relaxed animate-fade-in">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
