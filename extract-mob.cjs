const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const ffmpeg = require('ffmpeg-static');

const videoPath = path.resolve('public/videos/bg2mob.mp4');
const outDir = path.resolve('public/hero-mob-frames');

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
} else {
  fs.readdirSync(outDir).forEach(f => fs.unlinkSync(path.join(outDir, f)));
}

console.log(`Using ffmpeg at: ${ffmpeg}`);
console.log(`Extracting frames from: ${videoPath}`);
console.log(`Outputting to: ${outDir}`);

// Extract at 30fps (or native fps), scaled for mobile (e.g., width 720, maintain aspect ratio)
const cmd = `"${ffmpeg}" -i "${videoPath}" -c:v libwebp -lossless 0 -q:v 75 -vf "scale=720:-1" "${path.join(outDir, 'frame_%04d.webp')}"`;

try {
  execSync(cmd, { stdio: 'inherit' });
  const frames = fs.readdirSync(outDir);
  console.log(`Successfully extracted ${frames.length} frames.`);
} catch (e) {
  console.error("Error extracting frames:", e.message);
}
