export interface SkillCategory {
  id: string
  title: string
  /** short name for the collapsed banner */
  short: string
  paint: string
  /** character portrait (public/art/mobile/chara-N.jpg) */
  portrait: number
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'programming',
    portrait: 1,
    title: 'Programming & Simulation',
    short: 'Programming',
    paint: '#f14352',
    skills: ['Python', 'C', 'MATLAB', 'Simulink', 'Verilog HDL', 'LaTeX', 'AVR Studio', 'PSPICE'],
  },
  {
    id: 'vlsi-eda',
    portrait: 2,
    title: 'VLSI & Physical Design (EDA)',
    short: 'VLSI & EDA',
    paint: '#3a96aa',
    skills: ['OpenLane', 'OpenROAD', 'SkyWater 130nm PDK', 'Cadence', 'Magic', 'KLayout', 'Yosys', 'STA'],
  },
  {
    id: 'embedded-iot',
    portrait: 3,
    title: 'Embedded Systems & IoT',
    short: 'Embedded',
    paint: '#ea6c1b',
    skills: ['Arduino', 'Raspberry Pi', 'ESP8266 / ESP32', 'ATmega32 Microcontroller', 'Pixhawk PX4', 'I2C / SPI', 'Sensors & Servos'],
  },
  {
    id: 'ai-ml',
    portrait: 7,
    title: 'Data & Machine Intelligence',
    short: 'AI / ML',
    paint: '#0c8e5e',
    skills: ['Machine Learning', 'CNN Image Classification', 'Deep Learning', 'TensorFlow', 'OpenCV', 'Scikit-Learn', 'Pandas', 'NumPy'],
  },
  {
    id: 'hardware-tools',
    portrait: 4,
    title: 'Hardware & Engineering Tools',
    short: 'Engineering',
    paint: '#d4a900',
    skills: ['Proteus ISIS', 'Altium Designer', 'AutoCAD', 'Control Systems', 'Power Electronics', 'Oscilloscopes', 'PCB Design'],
  },
  {
    id: 'management',
    portrait: 5,
    title: 'Management & Soft Skills',
    short: 'Management',
    paint: '#b94abb',
    skills: ['Agile & Sprint Planning', 'Task Coordination', 'Technical Documentation', 'Team Leadership', 'Problem Solving', 'Adaptability'],
  },
]
