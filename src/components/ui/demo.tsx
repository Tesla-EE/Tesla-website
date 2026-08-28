import HeroSection from "@/components/ui/hero-odyssey";

const settings = {
  hue: 220,
  speed: 1.6,
  intensity: 0.6,
  xOffset: 0,
  size: 2,
};

export default function Demo(props: Partial<typeof settings>) {
  const s = { ...settings, ...props };
  return (
    <div className="h-screen w-screen">
      <HeroSection {...s} />
    </div>
  );
}
