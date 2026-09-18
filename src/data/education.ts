export interface Section {
  label: string
  /** bullet / tag list */
  items?: string[]
  /** ordered progression, rendered with arrows */
  steps?: string[]
  /** free text (used for "The Chapter" reflections) */
  text?: string
}

export interface Milestone {
  id: string
  year: string
  /** short chapter name shown next to the year */
  chapter: string
  title: string
  subtitle: string
  /** major chapters are set larger; minor ones are visually subordinate */
  weight: 'major' | 'minor'
  /** id of the chapter this entry belongs under (rendered nested) */
  parent?: string
  /** official art for the record panel (public/art/desktop/wallpaper-N.jpg) */
  art: number
  /** splat colour for this chapter */
  paint: string
  tags: string[]
  summary: string
  meta?: { label: string; value: string }[]
  sections?: Section[]
}

export const journey: Milestone[] = [
  {
    id: 'ssc',
    art: 9,
    paint: '#3a96aa',
    year: '2016–2018',
    chapter: 'Foundation',
    title: 'Mograpara H.G.G.S Smrity Biddayoton',
    subtitle: 'Secondary School Certificate (SSC) · Science Stream',
    weight: 'minor',
    tags: ['education'],
    summary: 'Secondary education in Sonargaon, Narayangonj in the science stream, where curiosity in mathematics and physical sciences took root.',
    meta: [
      { label: 'Result', value: 'GPA 4.83 / 5.00' },
      { label: 'Passing Year', value: '2018' },
    ],
  },
  {
    id: 'hsc',
    art: 7,
    paint: '#ea6c1b',
    year: '2018–2020',
    chapter: 'Higher Secondary',
    title: 'Dr. Mahamubur Rahman Mollah College',
    subtitle: 'Higher Secondary Certificate (HSC) · Science Stream, Demra, Dhaka',
    weight: 'minor',
    tags: ['education'],
    summary: 'Intensive higher secondary study focusing on advanced physics, calculus, and chemistry, building analytical fundamentals for an engineering career.',
    meta: [
      { label: 'Result', value: 'GPA 4.92 / 5.00' },
      { label: 'Passing Year', value: '2020' },
    ],
  },
  {
    id: 'brac',
    art: 11,
    paint: '#d4a900',
    year: '2021–2026',
    chapter: 'The Beginning',
    title: 'BRAC University',
    subtitle: 'B.Sc. in Electrical and Electronic Engineering (EEE)',
    weight: 'major',
    tags: ['education'],
    summary: 'Five years in the Department of Electrical and Electronic Engineering mastering circuit theory, VLSI design, semiconductor devices, embedded systems, and control engineering.',
    meta: [
      { label: 'CGPA', value: '3.52 / 4.00' },
      { label: 'Degree', value: 'B.Sc. in EEE' },
    ],
    sections: [
      {
        label: 'Core Focus',
        items: ['VLSI & Physical Design', 'Embedded Systems & IoT', 'Digital Signal Processing', 'Power Electronics & Control', 'Machine Learning'],
      },
    ],
  },
  {
    id: 'firehawk',
    parent: 'brac',
    art: 10,
    paint: '#f14352',
    year: '2025–2026',
    chapter: 'Capstone',
    title: 'Firehawk: Autonomous Firefighting Drone',
    subtitle: 'Senior Capstone Design Project · Dept. of EEE',
    weight: 'major',
    tags: ['development', 'robotics'],
    summary: 'Engineered an autonomous firefighting UAV combining Pixhawk PX4 flight control, Arduino Nano, flame and toxic gas sensors, GPS navigation, and emergency ball deployment.',
    sections: [
      { label: 'Engineering Stack', items: ['Pixhawk PX4', 'Arduino Nano', 'ESP8266 Wi-Fi Telemetry', 'GPS Navigation', 'Servo Release Mechanism'] },
      { label: 'The Chapter', text: 'Integrating real-time hardware telemetry and fail-safe autonomy to tackle real-world emergency firefighting challenges.' },
    ],
  },
  {
    id: 'excelerate',
    art: 1,
    paint: '#0c8e5e',
    year: '2025',
    chapter: 'Industry',
    title: 'Excelerate',
    subtitle: 'Associate Project Manager Intern · Remote',
    weight: 'major',
    tags: ['work', 'leadership'],
    summary: 'Supported project planning, sprint coordination, and technical documentation for cross-functional remote teams. Maintained tracking systems and facilitated stakeholder communication to ensure on-time delivery.',
    sections: [
      { label: 'Key Duties', items: ['Project planning & task coordination', 'Sprint tracking & roadmap maintenance', 'Stakeholder communication', 'Technical documentation'] },
      { label: 'The Chapter', text: 'Bridging engineering rigor with agile project management practices in a dynamic remote environment.' },
    ],
  },
  {
    id: 'iccit',
    art: 4,
    paint: '#3a96aa',
    year: '2025',
    chapter: 'Conference Publication',
    title: 'IEEE ICCIT 2025',
    subtitle: '28th International Conference on Computer and Information Technology',
    weight: 'major',
    tags: ['research'],
    summary: 'Presented and published peer-reviewed research on "Satellite Image Classification for Deforestation Detection in Dhaka Using CNN" held in Cox’s Bazar, Bangladesh.',
    meta: [
      { label: 'DOI', value: '10.1109/ICCIT68739.2025.11491473' },
      { label: 'Pages', value: '5895–5899' },
    ],
    sections: [
      { label: 'Contribution', items: ['Remote sensing data pipeline', 'Deep CNN model training', 'Dhaka regional canopy change analysis', 'IEEE Xplore indexation'] },
    ],
  },
  {
    id: 'openlane',
    art: 12,
    paint: '#eb523d',
    year: '2025–2026',
    chapter: 'Silicon Craft',
    title: 'Physical Design & EDA Automation',
    subtitle: 'OpenROAD & OpenLane Research on SkyWater 130nm',
    weight: 'major',
    tags: ['development', 'research'],
    summary: 'Formulated an automated grid-search framework for timing closure and PPA optimization on the open-source SkyWater 130 nm PDK, achieving 100% negative slack elimination across digital designs.',
    sections: [
      { label: 'Specialization', items: ['RTL-to-GDSII Synthesis', 'Floorplanning & Power Grid', 'Clock Tree Synthesis (CTS)', 'Detailed Routing & STA', 'DRC/LVS Verification'] },
      { label: 'The Chapter', text: 'Pioneering open-source silicon design automation and timing closure to make custom ASIC development accessible.' },
    ],
  },
]
