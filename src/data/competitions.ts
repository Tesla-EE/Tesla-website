export interface CompetitionItem {
  id: string;
  title: string;
  subtitle: string;
  desc: string;
  prize: string;
  badge?: string;
  isCompleted?: boolean;
  iconName: 'Code' | 'ShieldAlert' | 'Trophy';
  teamSize: string;
  venue: string;
  image: string;
  registrationLink?: string;
}

export const competitionsData: CompetitionItem[] = [
  {
    id: 'comp-1',
    title: 'TREASURE HUNT',
    subtitle: 'CAMPUS EXPLORATION CHALLENGE',
    desc: 'Decipher cryptic clues, solve riddles, and race against time across the campus.',
    prize: '₹25,000 CASH',
    badge: 'NEW',
    isCompleted: false,
    iconName: 'Trophy',
    teamSize: '3 - 4 Members',
    venue: 'Campus Wide',
    image: '/images/competition/Treasure hunt.jpeg',
    registrationLink: 'https://forms.gle/hbohcSF5346Xp7xo6'
  },
  {
    id: 'comp-2',
    title: 'PHOTOGRAPHY COMPETITION',
    subtitle: 'VISUAL STORYTELLING CONTEST',
    desc: 'Capture the essence of energy, technology, and festival spirit through your lens.',
    prize: '₹15,000 CASH',
    badge: 'NEW',
    isCompleted: false,
    iconName: 'Code',
    teamSize: 'Individual',
    venue: 'Online / Campus',
    image: '/images/competition/Photography Competition.jpeg',
    registrationLink: 'https://docs.google.com/forms/d/1Udkz28G_eGP73ChpzblS9dvYm4dg4d-3R9OL-USV1PM/viewform'
  },
  {
    id: 'comp-3',
    title: 'BGMI TOURNAMENT',
    subtitle: 'BATTLEGROUNDS MOBILE INDIA',
    desc: 'High-stakes battle royale tournament. Squad up, strategize, and claim the chicken dinner.',
    prize: '₹30,000 CASH',
    badge: 'NEW',
    isCompleted: false,
    iconName: 'ShieldAlert',
    teamSize: '4 Members Squad',
    venue: 'Main Esports Arena',
    image: '/images/competition/Battlegrounds Mobile India Tournament.jpeg',
    registrationLink: 'https://forms.gle/xeCfDnDrwfb8YJar9'
  },
  {
    id: 'comp-4',
    title: 'MINI MILITIA',
    subtitle: 'DOODLE ARMY COMBAT LEAGUE',
    desc: 'Intense multiplayer tactical warfare battle. Out-aim, out-fly, and survive.',
    prize: '₹10,000 CASH',
    badge: 'COMPLETED',
    isCompleted: true,
    iconName: 'ShieldAlert',
    teamSize: 'Solo / Squad',
    venue: 'Gaming Arena',
    image: '/images/competition/Mini Militia.jpeg'
  },
  {
    id: 'comp-5',
    title: 'E-FOOTBALL',
    subtitle: 'CONSOLE & MOBILE LEAGUE',
    desc: 'Ultimate digital pitch clash. Showcase your tactics, skills, and precision to dominate the tournament.',
    prize: '₹20,000 CASH',
    badge: 'COMPLETED',
    isCompleted: true,
    iconName: 'Trophy',
    teamSize: 'Solo / 1v1',
    venue: 'Virtual Arena Hall',
    image: '/images/competition/E-FOOTBALL.jpeg'
  }
];
