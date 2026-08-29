const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const ffmpeg = require('ffmpeg-static');

const videoPath = path.resolve('public/videos/bgvideofinal.mp4');
const outDir = path.resolve('public/hero-frames');

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
} else {
  fs.readdirSync(outDir).forEach(f => fs.unlinkSync(path.join(outDir, f)));
}

console.log(`Using ffmpeg at: ${ffmpeg}`);
console.log(`Extracting frames from: ${videoPath}`);
console.log(`Outputting to: ${outDir}`);

// Extract at 30fps (or native fps), scaled to 1280x720 to keep file sizes manageable
// Using libwebp with quality 75 for massive size savings
const cmd = `"${ffmpeg}" -i "${videoPath}" -c:v libwebp -lossless 0 -q:v 75 -vf "scale=1280:-1" "${path.join(outDir, 'frame_%04d.webp')}"`;

try {
  execSync(cmd, { stdio: 'inherit' });
  const frames = fs.readdirSync(outDir);
  console.log(`Successfully extracted ${frames.length} frames.`);
} catch (e) {
  console.error("Error extracting frames:", e.message);
}
