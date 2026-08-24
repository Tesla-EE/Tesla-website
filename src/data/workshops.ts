export interface WorkshopItem {
  id: string;
  title: string;
  subtitle: string;
  desc: string;
  badge?: string;
  iconName: 'Cpu' | 'Zap' | 'Radio';
  date: string;
  instructor: string;
  seatsLeft: number;
}

export const workshopsData: WorkshopItem[] = [
  {
    id: 'ws-1',
    title: 'AI & ROBOTICS AUTOMATION',
    subtitle: 'HANDS-ON HARDWARE WORKSHOP',
    desc: 'Master ROS2, embedded microcontroller programming, and autonomous robot navigation.',
    badge: 'NEW',
    iconName: 'Cpu',
    date: 'DAY 1 - 09:30 AM',
    instructor: 'Dr. V. Sharma (IIT M)',
    seatsLeft: 15
  },
  {
    id: 'ws-2',
    title: 'EV POWER ELECTRONICS',
    subtitle: 'HIGH-VOLTAGE BATTERY TECH',
    desc: 'Deep dive into electric powertrain design, BMS algorithms, and regenerative braking circuits.',
    badge: 'NEW',
    iconName: 'Zap',
    date: 'DAY 1 - 02:00 PM',
    instructor: 'Er. A. Kulkarni (Tesla Motors)',
    seatsLeft: 8
  },
  {
    id: 'ws-3',
    title: '6G & SATELLITE COMM',
    subtitle: 'RF SIGNAL PROCESSING',
    desc: 'Build SDR receivers, analyze microwave signals, and simulate satellite link budgets.',
    badge: 'NEW',
    iconName: 'Radio',
    date: 'DAY 2 - 10:00 AM',
    instructor: 'Prof. R. Menon (ISRO)',
    seatsLeft: 22
  }
];
