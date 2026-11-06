import React, { useState } from "react";
import confetti from "canvas-confetti";

export const RsvpForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", guests: "1", attending: "yes", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production: Send payload via fetch() to Formspree, Google App Script, or Firebase
    setSubmitted(true);
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.8 },
      colors: ["#D4AF37", "#F3E5AB", "#8B1E2D"],
    });
  };

  return (
    <section id="rsvp" className="py-20 px-4 max-w-xl mx-auto">
      <div className="border border-wedding-border bg-wedding-card rounded-2xl p-8 sm:p-10 shadow-2xl relative">
        <h2 className="text-2xl sm:text-3xl font-serif text-center text-wedding-gold mb-2">
          Will You Join Us?
        </h2>
        <p className="text-center text-zinc-400 text-xs sm:text-sm mb-8 uppercase tracking-widest">
          Kindly RSVP by January 15, 2027
        </p>

        {submitted ? (
          <div className="text-center py-8">
            <h4 className="text-xl font-serif text-wedding-gold mb-2">Thank you!</h4>
            <p className="text-zinc-300 text-sm">We have received your response and look forward to celebrating together.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-xs uppercase tracking-widest text-zinc-400 mb-2">Full Name</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-black/40 border border-wedding-border rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-wedding-gold"
                placeholder="Your Name"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs uppercase tracking-widest text-zinc-400 mb-2">Attendance</label>
                <select
                  value={formData.attending}
                  onChange={(e) => setFormData({ ...formData, attending: e.target.value })}
                  className="w-full bg-black/40 border border-wedding-border rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-wedding-gold"
                >
                  <option value="yes">Attending</option>
                  <option value="regret">Cannot Attend</option>
                </select>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-zinc-400 mb-2">Total Guests</label>
                <select
                  value={formData.guests}
                  onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                  className="w-full bg-black/40 border border-wedding-border rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-wedding-gold"
                >
                  <option value="1">1 Person</option>
                  <option value="2">2 Persons</option>
                  <option value="3">3 Persons</option>
                  <option value="4+">4+ Persons</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-widest text-zinc-400 mb-2">Warm Wishes / Note</label>
              <textarea
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-black/40 border border-wedding-border rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-wedding-gold"
                placeholder="Leave a blessing or note..."
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-gradient-to-r from-wedding-gold to-amber-300 text-black font-semibold uppercase tracking-wider text-sm rounded-lg hover:brightness-110 transition-all shadow-md mt-4"
            >
              Confirm RSVP
            </button>
          </form>
        )}
      </div>
    </section>
  );
};