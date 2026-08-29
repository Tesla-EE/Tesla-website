import arcadiaImg from '../assets/arcadia.jpg';
import autoExpoImg from '../assets/auto-expo.jpg';
import proshowImg from '../assets/proshow.jpg';

export interface HighlightItem {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  video?: string;
  desc: string;
  category: string;
}

export const highlightsData: HighlightItem[] = [
  {
    id: 'proshow',
    title: 'TESLA 24',
    subtitle: 'LIVE ARTIST NIGHT',
    image: proshowImg,
    video: '/videos/tesla24.mp4',
    desc: 'Electrifying musical night featuring celebrity artists, violinist virtuosos, and live bands.',
    category: 'CULTURAL'
  },
  {
    id: 'arcadia',
    title: 'TESLA 22',
    subtitle: 'GAMING & LASER FIREWORKS FEST',
    image: arcadiaImg,
    video: '/videos/tesla22.mp4',
    desc: 'High-voltage gaming arena, VR simulations, laser fireworks show, and night entertainment.',
    category: 'ENTERTAINMENT'
  },
  {
    id: 'auto-expo',
    title: 'TESLA 20',
    subtitle: 'SUPERBIKES & EV SHOWCASE',
    image: autoExpoImg,
    video: '/videos/tesla20.mp4',
    desc: 'Exotic superbikes, electric vehicles, autonomous robotics, and hyper-car mechanical displays.',
    category: 'EXHIBITION'
  }
];
