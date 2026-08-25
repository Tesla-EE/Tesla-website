export interface CompetitionItem {
  id: string;
  title: string;
  subtitle: string;
  desc: string;
  prize: string;
  badge?: string;
  iconName: 'Code' | 'ShieldAlert' | 'Trophy';
  teamSize: string;
  venue: string;
  image: string;
}

export const competitionsData: CompetitionItem[] = [
  {
    id: 'comp-1',
    title: '24-HR ELECTRIC HACKATHON',
    subtitle: 'HARDWARE + SOFTWARE SPRINT',
    desc: 'Build functional energy prototypes to solve real-world grid stabilization and IoT problems.',
    prize: '₹50,000 CASH',
    badge: 'NEW',
    iconName: 'Code',
    teamSize: '2 - 4 Members',
    venue: 'Main Seminar Hall',
    image: '/images/events/comp_hackathon.jpg'
  },
  {
    id: 'comp-2',
    title: 'ROBO WARRIORS ARENA',
    subtitle: 'BOT COMBAT LEAGUE',
    desc: 'Custom-built heavyweight robot warfare battle in a bulletproof steel cage arena.',
    prize: '₹40,000 CASH',
    badge: 'NEW',
    iconName: 'ShieldAlert',
    teamSize: 'Up to 5 Members',
    venue: 'Outdoor Sports Arena',
    image: '/images/events/comp_robowars.jpg'
  },
  {
    id: 'comp-3',
    title: 'CIRCUIT DEBUGGING MASTER',
    subtitle: 'FAULT ISOLATION CHALLENGE',
    desc: 'Troubleshoot complex high-frequency PCB circuit boards under intense timed rounds.',
    prize: '₹30,000 CASH',
    badge: 'NEW',
    iconName: 'Trophy',
    teamSize: 'Individual / Pair',
    venue: 'Advanced EE Lab 3',
    image: '/images/events/comp_circuits.jpg'
  }
];
