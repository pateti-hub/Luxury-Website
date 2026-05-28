import { copyFile, mkdir, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const rootDir = fileURLToPath(new URL('../', import.meta.url))
const publicDir = join(rootDir, 'public')
const rootFilesDir = rootDir

await Promise.all([
  mkdir(join(publicDir, 'videos'), { recursive: true }),
  mkdir(join(publicDir, 'images'), { recursive: true }),
  mkdir(join(publicDir, 'icons'), { recursive: true }),
])

const svgToWebp = async (filePath, svg) => {
  await mkdir(dirname(filePath), { recursive: true })
  await sharp(Buffer.from(svg)).webp({ quality: 92 }).toFile(filePath)
}

const gradientCard = (title, accentA, accentB, accentC) => `
<svg xmlns="http://www.w3.org/2000/svg" width="1920" height="1080" viewBox="0 0 1920 1080">
  <defs>
    <linearGradient id="bg" x1="0" x2="1" y1="0" y2="1">
      <stop offset="0%" stop-color="#0b0a09"/>
      <stop offset="52%" stop-color="${accentA}"/>
      <stop offset="100%" stop-color="${accentB}"/>
    </linearGradient>
    <radialGradient id="glow" cx="35%" cy="32%" r="70%">
      <stop offset="0%" stop-color="${accentC}" stop-opacity="0.55"/>
      <stop offset="100%" stop-color="#000" stop-opacity="0"/>
    </radialGradient>
    <filter id="blur"><feGaussianBlur stdDeviation="24"/></filter>
  </defs>
  <rect width="1920" height="1080" fill="url(#bg)"/>
  <rect width="1920" height="1080" fill="url(#glow)"/>
  <g opacity="0.55" filter="url(#blur)">
    <ellipse cx="300" cy="220" rx="260" ry="170" fill="${accentC}"/>
    <ellipse cx="1540" cy="240" rx="320" ry="180" fill="#f3e8d0" opacity="0.18"/>
  </g>
  <g opacity="0.75">
    <rect x="180" y="120" width="1560" height="840" fill="none" stroke="rgba(255,255,255,0.18)" stroke-width="2"/>
    <rect x="260" y="190" width="640" height="700" rx="18" fill="rgba(255,255,255,0.04)"/>
    <rect x="940" y="160" width="640" height="740" rx="18" fill="rgba(255,255,255,0.05)"/>
    <path d="M260 760H1580" stroke="rgba(255,255,255,0.16)" stroke-width="2"/>
    <path d="M940 160V900" stroke="rgba(255,255,255,0.12)" stroke-width="2"/>
  </g>
  <g font-family="Georgia, serif" fill="#fdfbf7">
    <text x="260" y="970" font-size="58" letter-spacing="8">${title}</text>
  </g>
</svg>`

const textures = [
  ['hero-poster.webp', gradientCard('NOIR ESTATE', '#161513', '#0c0b09', '#c5a059')],
  ['penthouse-01.webp', gradientCard('PENTHOUSE 01', '#151412', '#0f0e0d', '#c7a46f')],
  ['penthouse-02.webp', gradientCard('PENTHOUSE 02', '#1a1713', '#0f0e0c', '#9f7f64')],
  ['penthouse-03.webp', gradientCard('PENTHOUSE 03', '#11110f', '#0b0b0a', '#c5a059')],
  ['architecture-detail-01.webp', gradientCard('ARCH DETAIL 01', '#141311', '#0e0d0c', '#8f7a6b')],
  ['architecture-detail-02.webp', gradientCard('ARCH DETAIL 02', '#131211', '#0c0b0a', '#c9b89c')],
  ['texture-marble.webp', `
    <svg xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024">
      <defs>
        <linearGradient id="m" x1="0" x2="1" y1="0" y2="1"><stop offset="0%" stop-color="#f7f4f0"/><stop offset="100%" stop-color="#cfc8bf"/></linearGradient>
      </defs>
      <rect width="1024" height="1024" fill="url(#m)"/>
      <g fill="none" stroke="#a59687" stroke-opacity="0.45" stroke-width="8">
        <path d="M-20 180C180 120 260 230 420 180s230-100 400-40 200 80 240 20"/>
        <path d="M-10 460c120-60 180-30 280 40s200 80 330 15 210-150 440-90"/>
        <path d="M40 820c160-160 310-40 430-90s180-180 340-150 120 160 210 210"/>
      </g>
    </svg>`],
  ['texture-glass.webp', `
    <svg xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024">
      <defs>
        <linearGradient id="g" x1="0" x2="1" y1="0" y2="1"><stop offset="0%" stop-color="#d9e0e4" stop-opacity="0.82"/><stop offset="100%" stop-color="#7b8b92" stop-opacity="0.38"/></linearGradient>
      </defs>
      <rect width="1024" height="1024" fill="#e7ecef"/>
      <rect x="64" y="64" width="896" height="896" rx="56" fill="url(#g)" opacity="0.55"/>
      <g fill="rgba(255,255,255,0.18)">
        <circle cx="240" cy="220" r="100"/>
        <circle cx="780" cy="370" r="170"/>
        <circle cx="400" cy="760" r="210"/>
      </g>
      <g stroke="rgba(255,255,255,0.38)" stroke-width="3">
        <path d="M120 860L860 140"/>
        <path d="M160 160h700"/>
        <path d="M180 260h450"/>
      </g>
    </svg>`],
  ['texture-grain.webp', `
    <svg xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024">
      <rect width="1024" height="1024" fill="#0b0b0a"/>
      <g fill="rgba(255,255,255,0.18)">
        ${Array.from({ length: 850 }, (_, index) => {
          const x = (index * 137) % 1024
          const y = (index * 251) % 1024
          const size = 0.8 + ((index * 17) % 21) / 30
          return `<rect x="${x}" y="${y}" width="${size}" height="${size}" rx="0.25" />`
        }).join('')}
      </g>
    </svg>`],
  ['floorplan-01.webp', `
    <svg xmlns="http://www.w3.org/2000/svg" width="1920" height="1080" viewBox="0 0 1920 1080">
      <rect width="1920" height="1080" fill="#f7f4f0"/>
      <g stroke="#161513" stroke-width="4" fill="none" opacity="0.88">
        <rect x="140" y="130" width="1640" height="820"/>
        <path d="M260 260h540v420H260zM860 260h620v220H860zM860 520h620v430H860z"/>
        <path d="M340 680h360M970 360h420M970 720h420" stroke-width="2" opacity="0.55"/>
      </g>
      <g fill="#161513" font-family="Georgia, serif">
        <text x="260" y="940" font-size="54" letter-spacing="6">PRIVATE FLOORPLAN A</text>
      </g>
    </svg>`],
  ['floorplan-02.webp', `
    <svg xmlns="http://www.w3.org/2000/svg" width="1920" height="1080" viewBox="0 0 1920 1080">
      <rect width="1920" height="1080" fill="#fdfbf7"/>
      <g stroke="#121212" stroke-width="4" fill="none" opacity="0.9">
        <rect x="180" y="120" width="1560" height="840"/>
        <path d="M280 240h540v620H280zM900 240h640v300H900zM900 580h640v280H900z"/>
        <path d="M520 240v620M1140 240v620" stroke-width="2" opacity="0.42"/>
      </g>
      <g fill="#121212" font-family="Georgia, serif">
        <text x="280" y="920" font-size="54" letter-spacing="6">PRIVATE FLOORPLAN B</text>
      </g>
    </svg>`],
  ['drone-estate-01.webp', gradientCard('DRONE ESTATE 01', '#141816', '#0b0b0a', '#20413d')],
  ['drone-estate-02.webp', gradientCard('DRONE ESTATE 02', '#111512', '#0b0b0a', '#59705c')],
  ['lifestyle-01.webp', gradientCard('LIFESTYLE 01', '#15110f', '#0c0b0a', '#b98f56')],
  ['lifestyle-02.webp', gradientCard('LIFESTYLE 02', '#171513', '#0c0b0a', '#8c7a6b')],
]

for (const [name, svg] of textures) {
  await svgToWebp(join(publicDir, 'images', name), svg)
}

await writeFile(
  join(publicDir, 'icons', 'logo-gold.svg'),
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" role="img" aria-label="Noir Estate logo"><defs><linearGradient id="a" x1="0" x2="1" y1="0" y2="1"><stop offset="0%" stop-color="#f6ead3"/><stop offset="100%" stop-color="#a77c2f"/></linearGradient></defs><rect width="240" height="240" rx="64" fill="#0e0d0b"/><path d="M56 164V76l56 52V76h16v88l-56-52v52H56Zm112 0V76h16v72l20-24h18l-30 35 33 41h-19l-22-28v28h-16Z" fill="url(#a)"/></svg>`,
)

const videos = [
  ['hero-mansion-loop.mp4', 'hero-mansion-loop.mp4'],
  ['penthouse-render-series.mp4', 'Penthouse Render Series.mp4'],
  ['architecture-detail-01.mp4', 'architecture-detail-01.mp4'],
  ['architecture-detail-02.mp4', 'architecture-detail-02.mp4'],
  ['drone-estate-01.mp4', 'drone-estate-01.mp4'],
  ['lifestyle-01.mp4', 'lifestyle-01.mp4'],
  ['lifestyle-02.mp4', 'lifestyle-02.mp4'],
  ['penthouse-02.mp4', 'penthouse-02.mp4'],
  ['penthouse-03.mp4', 'penthouse-03.mp4'],
]

for (const [target, source] of videos) {
  await copyFile(join(rootFilesDir, source), join(publicDir, 'videos', target))
}
