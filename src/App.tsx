import { FlipCard } from "./components/FlipCard";
import { EventTimeline } from "./components/EventTimeline";
import { RsvpForm } from "./components/RsvpForm";
import { useCountdown } from "./hooks/useCountdown";
import { WEDDING_CONFIG } from "./config/weddingData";

export default function App() {
  const timeLeft = useCountdown(WEDDING_CONFIG.targetDate);

  return (
    <div className="min-h-screen bg-wedding-bg text-zinc-100 flex flex-col justify-between selection:bg-wedding-gold selection:text-black">
      {/* Top Subtle Header */}
      <header className="py-6 px-4 text-center border-b border-wedding-border/40">
        <span className="font-serif tracking-widest text-sm text-wedding-gold/80 uppercase">
          {WEDDING_CONFIG.hashtag}
        </span>
      </header>

      {/* Hero Countdown Section */}
      <section className="py-24 px-4 flex flex-col items-center justify-center text-center">
        <div className="mb-4 inline-block px-4 py-1.5 rounded-full border border-wedding-gold/30 bg-wedding-gold/5 text-wedding-gold text-xs uppercase tracking-widest">
          Save The Date
        </div>
        
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif text-white tracking-wide mt-2 mb-6">
          {WEDDING_CONFIG.couple.groom} & {WEDDING_CONFIG.couple.bride}
        </h1>

        <p className="text-zinc-400 font-sans text-sm sm:text-base max-w-md mx-auto mb-14 leading-relaxed">
          We invite you to join us as we celebrate our new beginning.
        </p>

        {/* GSAP Split-Flap Clock */}
        <div className="flex gap-2 sm:gap-6 items-center justify-center bg-wedding-card/50 p-6 sm:p-10 rounded-2xl border border-wedding-border/80 shadow-2xl">
          <FlipCard digit={timeLeft.days} label="Days" />
          <span className="text-2xl sm:text-5xl font-mono text-zinc-600 -mt-6">:</span>
          <FlipCard digit={timeLeft.hours} label="Hours" />
          <span className="text-2xl sm:text-5xl font-mono text-zinc-600 -mt-6">:</span>
          <FlipCard digit={timeLeft.minutes} label="Minutes" />
          <span className="text-2xl sm:text-5xl font-mono text-zinc-600 -mt-6">:</span>
          <FlipCard digit={timeLeft.seconds} label="Seconds" />
        </div>
      </section>

      {/* Timeline Section */}
      <EventTimeline />

      {/* RSVP Section */}
      <RsvpForm />

      {/* Footer */}
      <footer className="py-8 text-center border-t border-wedding-border/40 text-xs text-zinc-500 font-mono">
        Made with celebration in mind • {new Date().getFullYear()}
      </footer>
    </div>
  );
}