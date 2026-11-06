export interface EventSchedule {
  id: string;
  name: string;
  date: string;
  time: string;
  location: string;
  description: string;
  mapUrl: string;
}

export const WEDDING_CONFIG = {
  couple: {
    groom: "Shubham",
    bride: "Bride", // Replace with bride's name
  },
  targetDate: "2027-02-14T10:30:00+05:30", // ISO date string with IST timezone
  hashtag: "#ShubhVivah",
  events: [
    {
      id: "haldi",
      name: "Haldi Ceremony",
      date: "February 13, 2027",
      time: "10:00 AM onwards",
      location: "Family Residence / Banquet Lawn",
      description: "An auspicious morning filled with turmeric, music, and blessings.",
      mapUrl: "https://maps.google.com",
    },
    {
      id: "sangeet",
      name: "Sangeet & Ring Ceremony",
      date: "February 13, 2027",
      time: "07:00 PM onwards",
      location: "Grand Ballroom, City Center",
      description: "An evening of dance performances, music, and celebrations.",
      mapUrl: "https://maps.google.com",
    },
    {
      id: "wedding",
      name: "The Wedding (Lagna Muhurat)",
      date: "February 14, 2027",
      time: "10:30 AM (Muhurat: 11:15 AM)",
      location: "Main Wedding Hall",
      description: "The traditional ceremony, Saptapadi, and exchange of vows.",
      mapUrl: "https://maps.google.com",
    },
  ] as EventSchedule[],
};