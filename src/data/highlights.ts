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
    id: 'arcadia',
    title: 'ARCADIA',
    subtitle: 'GAMING & LASER FIREWORKS FEST',
    image: arcadiaImg,
    video: '/videos/tesla22.mp4',
    desc: 'High-voltage gaming arena, VR simulations, laser fireworks show, and night entertainment.',
    category: 'ENTERTAINMENT'
  },
  {
    id: 'auto-expo',
    title: 'AUTO EXPO',
    subtitle: 'SUPERBIKES & EV SHOWCASE',
    image: autoExpoImg,
    video: '/videos/tesla20.mp4',
    desc: 'Exotic superbikes, electric vehicles, autonomous robotics, and hyper-car mechanical displays.',
    category: 'EXHIBITION'
  },
  {
    id: 'proshow',
    title: 'PROSHOW',
    subtitle: 'LIVE ARTIST NIGHT',
    image: proshowImg,
    video: '/videos/tesla24.mp4',
    desc: 'Electrifying musical night featuring celebrity artists, violinist virtuosos, and live bands.',
    category: 'CULTURAL'
  }
];
