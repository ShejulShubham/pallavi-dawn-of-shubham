import React from "react";
import { MapPin, Clock, Calendar } from "lucide-react";
import { WEDDING_CONFIG } from "../config/weddingData";

export const EventTimeline: React.FC = () => {
  return (
    <section id="itinerary" className="py-20 px-4 max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-serif text-wedding-gold tracking-wide">
          Wedding Festivities
        </h2>
        <div className="w-16 h-[2px] bg-wedding-gold/40 mx-auto mt-4" />
      </div>

      <div className="space-y-6">
        {WEDDING_CONFIG.events.map((evt, idx) => (
          <div
            key={evt.id}
            className="relative border border-wedding-border bg-wedding-card/70 backdrop-blur-md rounded-xl p-6 sm:p-8 hover:border-wedding-gold/50 transition-colors shadow-lg"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-wedding-border/60 pb-4 mb-4">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-wedding-gold/80">
                  Event 0{idx + 1}
                </span>
                <h3 className="text-2xl font-serif text-white mt-1">{evt.name}</h3>
              </div>
              <div className="flex flex-col sm:items-end text-sm text-zinc-300 gap-1 font-mono">
                <span className="inline-flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-wedding-gold" /> {evt.date}
                </span>
                <span className="inline-flex items-center gap-2">
                  <Clock className="w-4 h-4 text-wedding-gold" /> {evt.time}
                </span>
              </div>
            </div>

            <p className="text-zinc-400 text-sm leading-relaxed mb-6">{evt.description}</p>

            <div className="flex items-center justify-between flex-wrap gap-4 pt-2">
              <span className="inline-flex items-center gap-2 text-sm text-zinc-300">
                <MapPin className="w-4 h-4 text-wedding-gold shrink-0" />
                {evt.location}
              </span>
              <a
                href={evt.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 py-2 text-xs uppercase tracking-wider font-semibold rounded-md border border-wedding-gold/40 text-wedding-gold hover:bg-wedding-gold hover:text-black transition-all"
              >
                Get Directions
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};