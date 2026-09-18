/**
 * The archive: hardware, silicon architectures, and intelligent systems.
 */

export type Collection = 'robotics' | 'silicon' | 'embedded'

export interface Piece {
  id: string
  title: string
  collection: Collection
  year: string
  tools: string[]
  video?: string
  image: string
  link: string
  linkLabel: string
  note: string
  fit?: 'cover' | 'contain'
}

export const collections: { id: Collection; title: string; short: string; paint: string }[] = [
  { id: 'robotics', title: 'Autonomous Robotics & UAV', short: 'Robotics', paint: '#ea6c1b' },
  { id: 'silicon', title: 'VLSI & Physical Design', short: 'VLSI', paint: '#3a96aa' },
  { id: 'embedded', title: 'Embedded & Control Systems', short: 'Embedded', paint: '#d4a900' },
]

export const archive: Piece[] = [
  /* ── robotics ──────────────────────────────────────────────────────── */
  {
    id: 'firehawk-uav',
    title: 'Firehawk Firefighting Drone',
    collection: 'robotics',
    year: '2025–2026',
    tools: ['Pixhawk PX4', 'Arduino Nano', 'ESP8266', 'GPS', 'Flame/Gas Sensors'],
    image: 'achievement-24.jpg',
    video: 'achievement-24.mp4',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=pNZDfB8AAAAJ&citation_for_view=pNZDfB8AAAAJ:d1gkVwhDpl0C',
    linkLabel: 'Google Scholar',
    note: 'Autonomous firefighting unmanned aerial vehicle capable of detecting flame/gas signatures and releasing suppression balls in hazardous environments.',
  },
  {
    id: 'cubesat-telemetry',
    title: 'CubeSat Environmental Payload',
    collection: 'robotics',
    year: '2024',
    tools: ['Microcontroller', 'I2C/SPI Sensors', 'Telemetry Protocol'],
    image: 'space-week.jpg',
    video: 'space-week.mp4',
    link: 'https://github.com/alvi-codes',
    linkLabel: 'GitHub',
    note: 'Embedded space telemetry payload monitoring atmospheric parameters with robust packetization and ground station transmission.',
  },

  /* ── silicon ────────────────────────────────────────────────────────── */
  {
    id: 'openlane-timing',
    title: 'OpenLane Parameter Sweep Framework',
    collection: 'silicon',
    year: '2025–2026',
    tools: ['OpenLane', 'OpenROAD', 'SkyWater 130nm PDK', 'Python', 'Tcl'],
    image: 'panel-2025.jpg',
    video: 'panel-2025.mp4',
    link: 'https://github.com/alvi-codes/openlane-parameter-sweep',
    linkLabel: 'GitHub',
    note: 'Automated multi-design grid-search EDA framework eliminating 100% of negative slack across digital benchmark cores on SkyWater 130nm.',
  },
  {
    id: 'cnn-accelerator-asic',
    title: 'CNN AI Accelerator RTL-to-GDSII',
    collection: 'silicon',
    year: '2025',
    tools: ['Verilog HDL', 'OpenLane', 'Yosys', 'Magic', 'SkyWater 130nm'],
    image: 'teaser-spring-24.jpg',
    video: 'teaser-spring-24.mp4',
    link: 'https://github.com/alvi-codes',
    linkLabel: 'GitHub',
    note: 'Full digital IC design and physical verification of a hardware CNN accelerator for parallel spatial convolution on silicon.',
  },
  {
    id: 'ppa-opt-ml',
    title: 'ML-Based PPA Optimization',
    collection: 'silicon',
    year: '2025–2026',
    tools: ['Python', 'Scikit-Learn', 'Pandas', 'OpenLane'],
    image: 'orientation-2023.jpg',
    video: 'orientation-2023.mp4',
    link: 'https://github.com/alvi-codes',
    linkLabel: 'GitHub',
    note: 'Surrogate regression modeling predicting layout congestion and timing violations prior to detailed routing, accelerating design closure.',
  },

  /* ── embedded ───────────────────────────────────────────────────────── */
  {
    id: 'deforestation-cnn',
    title: 'Satellite Deforestation Detection (ICCIT)',
    collection: 'embedded',
    year: '2025',
    tools: ['Python', 'CNN', 'TensorFlow', 'Remote Sensing', 'GIS'],
    image: 'orientation-fall-23.jpg',
    video: 'orientation-fall-23.mp4',
    link: 'https://doi.org/10.1109/ICCIT68739.2025.11491473',
    linkLabel: 'IEEE ICCIT',
    note: 'Satellite image classification pipeline for tracking urban canopy loss across Dhaka using convolutional neural networks, presented at IEEE ICCIT 2025.',
  },
  {
    id: 'smart-elevator-proteus',
    title: 'Smart Elevator Control System',
    collection: 'embedded',
    year: '2024',
    tools: ['Proteus ISIS', 'Embedded C', 'Microcontrollers', 'PWM'],
    image: 'orientation-spring-24.jpg',
    video: 'orientation-spring-24.mp4',
    link: 'https://github.com/alvi-codes',
    linkLabel: 'GitHub',
    note: 'Embedded elevator controller simulation in Proteus with multi-floor scheduling algorithms, interrupt safety handling, and motor PWM control.',
  },
  {
    id: 'gas-leak-detector',
    title: 'ATmega32 Gas Leakage Alarm & Cutoff',
    collection: 'embedded',
    year: '2023–2024',
    tools: ['ATmega32', 'MQ-2 Gas Sensor', 'Relay Interfacing', 'AVR Studio'],
    image: 'bufl-intro.jpg',
    video: 'bufl-intro.mp4',
    link: 'https://github.com/alvi-codes',
    linkLabel: 'GitHub',
    note: 'Industrial combustible gas hazard detection system with automated relay safety cutoff valve and real-time LCD concentration readouts.',
  },
  {
    id: 'buck-boost-regulator',
    title: 'Buck-Boost DC-DC PI Controller',
    collection: 'embedded',
    year: '2024',
    tools: ['MATLAB', 'Simulink', 'Power Electronics', 'Control Theory'],
    image: 'isle-cinematic-1.jpg',
    video: 'isle-cinematic-1.mp4',
    link: 'https://github.com/alvi-codes',
    linkLabel: 'GitHub',
    note: 'Closed-loop DC-DC power regulation with tuned PI controller in MATLAB/Simulink, stabilizing voltage against dynamic load transients.',
  },
]

export const collectionOf = (id: Collection) => collections.find((c) => c.id === id)!
export const pieceUrl = (file: string) => `/creative/${file}`
