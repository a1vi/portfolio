export interface Experience {
  id: string
  org: string
  role: string
  kind: 'work' | 'teaching' | 'leadership'
  /** decimal years, e.g. 2023.5 = mid 2023 (used for the duration stat) */
  start: number
  end: number
  /** still running: the end is "now" */
  ongoing?: boolean
  period: string
  location: string
  paint: string
  /** character art for the record's portrait (public/art/mobile/chara-N.jpg) */
  portrait: number
  summary: string
  duties: string[]
  tech: string[]
  /** official art for the backdrop (public/art/desktop/wallpaper-N.jpg) */
  art: number
}

export const experience: Experience[] = [
  {
    id: 'excelerate',
    org: 'Excelerate',
    role: 'Associate Project Manager Intern',
    kind: 'work',
    start: 2025.65,
    end: 2025.85,
    period: 'Sep 2025',
    location: 'Remote',
    paint: '#0c8e5e',
    portrait: 1,
    summary:
      'Supported project planning, sprint coordination, and technical documentation for distributed teams. Maintained tracking systems and facilitated stakeholder communication to ensure on-time delivery.',
    duties: [
      'Agile project planning, backlog grooming, and task breakdown',
      'Sprint tracking across distributed project boards and tracking systems',
      'Facilitated cross-functional stakeholder communication and status reviews',
      'Created and maintained project deliverables and process documentation',
    ],
    tech: ['Agile / Scrum', 'Project Planning', 'Task Coordination', 'Documentation', 'Stakeholder Communication'],
    art: 1,
  },
  {
    id: 'vlsi-research',
    org: 'BRAC University · Dept. of EEE',
    role: 'VLSI & Physical Design Researcher',
    kind: 'leadership',
    start: 2024.5,
    end: 2026.5,
    ongoing: true,
    period: '2024 · present',
    location: 'Dhaka, Bangladesh',
    paint: '#3a96aa',
    portrait: 2,
    summary:
      'Leading research in automated parameter tuning and physical design timing closure on open-source EDA tools (OpenROAD, OpenLane) using the SkyWater 130 nm PDK.',
    duties: [
      'Developed automated multi-design parameter sweep workflows for OpenLane',
      'Optimized setup and hold slack (WNS/TNS) to achieve 100% timing closure',
      'Engineered RTL-to-GDSII digital IC flows for CNN hardware accelerators',
      'Conducted DRC, LVS, and antenna physical verification in Magic and KLayout',
    ],
    tech: ['OpenLane', 'OpenROAD', 'SkyWater 130nm', 'Verilog', 'Python', 'Tcl', 'STA'],
    art: 9,
  },
  {
    id: 'firehawk-lead',
    org: 'Firehawk Capstone Team',
    role: 'Lead Embedded & Systems Engineer',
    kind: 'leadership',
    start: 2025.0,
    end: 2026.2,
    period: '2025 · 2026',
    location: 'Dhaka, Bangladesh',
    paint: '#ea6c1b',
    portrait: 3,
    summary:
      'Led the engineering of the Firehawk autonomous firefighting drone, from hardware sensor integration to telemetry and emergency payload deployment.',
    duties: [
      'Integrated Pixhawk PX4 autopilot with GPS and telemetry radio links',
      'Developed Arduino firmware for real-time flame and MQ-2 gas sensor polling',
      'Engineered dual servo-actuated fire extinguisher ball drop mechanism',
      'Conducted field flight tests, waypoint missions, and safety fail-safe protocols',
    ],
    tech: ['Pixhawk PX4', 'Arduino Nano', 'ESP8266', 'GPS', 'Sensors', 'Servos', 'C++'],
    art: 10,
  },
  {
    id: 'ml-research',
    org: 'ELITE Research Lab / BRAC University',
    role: 'Machine Learning Researcher',
    kind: 'work',
    start: 2024.0,
    end: 2025.3,
    period: '2024 · 2025',
    location: 'Dhaka, Bangladesh',
    paint: '#f14352',
    portrait: 4,
    summary:
      'Conducted deep learning research on satellite image classification for environmental monitoring, successfully publishing at IEEE ICCIT 2025.',
    duties: [
      'Engineered spectral image preprocessing and normalization pipelines for satellite tiles',
      'Trained and evaluated deep Convolutional Neural Networks (CNNs)',
      'Analyzed temporal vegetation cover loss across the Dhaka metropolitan region',
      'Authored paper and presented findings at IEEE ICCIT 2025 (Cox’s Bazar)',
    ],
    tech: ['Python', 'TensorFlow', 'OpenCV', 'CNNs', 'Remote Sensing', 'GIS'],
    art: 4,
  },
]

export const kindLabel: Record<Experience['kind'], string> = {
  work: 'Work',
  teaching: 'Academic',
  leadership: 'Engineering',
}
