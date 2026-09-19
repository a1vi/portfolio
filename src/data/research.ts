/**
 * Research & Treatise: Timing closure in OpenROAD/OpenLane and Satellite Deforestation Detection.
 * Atair Rahman Alvi — BRAC University, Dept. of Electrical and Electronic Engineering.
 */

export interface ResearchPaper {
  id: string
  title: string
  subtitle: string
  institution: string
  department: string
  submitted: string
  supervisor: string
  authors: string[]
  grade: string
  url: string
  review: string[]
  keywords: string[]
  abstract: string
  stats: Array<{ value: string; unit?: string; label: string }>
  paint: string
  art: number
}

export const research: ResearchPaper[] = [
  {
    id: 'openlane-timing-closure',
    title: 'OpenLane Parameter Sweep',
    subtitle: 'Automated Parameter Tuning for Timing Closure in OpenROAD/OpenLane: A Comprehensive Multi-Design Grid Search Framework on the SkyWater 130 nm PDK',
    institution: 'BRAC University',
    department: 'Electrical and Electronic Engineering',
    submitted: '2025–2026',
    supervisor: 'MG Sorwar Hossain, PhD',
    authors: ['MD. Atair Rahman Alvi', 'Tahmid Noor Rahman'],
    grade: 'A',
    url: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=pNZDfB8AAAAJ&citation_for_view=pNZDfB8AAAAJ:2osOgNQ5qMEC',
    review: [
      'IEEE ICCIT 2025 (Deforestation Detection)',
      'OpenLane Physical Design Framework',
      'Google Scholar Citations Index',
    ],
    keywords: [
      'OpenLane',
      'OpenROAD',
      'SkyWater 130nm PDK',
      'Timing Closure',
      'Physical Design',
      'EDA Automation',
      'CNN AI Accelerator',
      'Deforestation Detection',
    ],
    abstract:
      'Physical design closure in open-source EDA flows often demands exhaustive trial-and-error iterations across conflicting layout parameters. This research introduces a comprehensive multi-design grid search framework for OpenROAD and OpenLane on the SkyWater 130 nm PDK. By systematically tuning core utilization, placement density, and routing margins, the framework achieves zero setup and hold timing violations across diverse benchmark circuits while optimizing power, performance, and area (PPA).',
    stats: [
      { value: '130', unit: 'nm', label: 'SkyWater PDK' },
      { value: '100', unit: '%', label: 'timing closure rate' },
      { value: '+0.12', unit: 'ns', label: 'positive WNS slack' },
      { value: '10+', label: 'designs swept' },
      { value: '1', label: 'IEEE paper published' },
    ],
    paint: '#f14352',
    art: 4,
  },
  {
    id: 'deforestation-detection',
    title: 'Satellite Deforestation Detection',
    subtitle: 'Deep Learning Based Environmental Monitoring Using Satellite Imagery for Deforestation Detection in Dhaka Metropolitan Region',
    institution: 'BRAC University',
    department: 'Electrical and Electronic Engineering',
    submitted: '2024–2025',
    supervisor: 'MG Sorwar Hossain, PhD',
    authors: ['MD. Atair Rahman Alvi', 'Tahmid Noor Rahman'],
    grade: 'A',
    url: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=pNZDfB8AAAAJ&citation_for_view=pNZDfB8AAAAJ:u5HHmVD_uO8C',
    review: [
      'IEEE ICCIT 2025',
      'Remote Sensing',
      'Environmental Monitoring',
    ],
    keywords: [
      'Deep Learning',
      'CNN',
      'Satellite Imagery',
      'Deforestation Detection',
      'Environmental Monitoring',
      'Remote Sensing',
      'GIS',
      'TensorFlow',
    ],
    abstract:
      'This research addresses the critical need for automated deforestation monitoring in urban and peri-urban areas using deep learning techniques applied to satellite imagery. The study focuses on the Dhaka metropolitan region, developing a convolutional neural network (CNN) architecture capable of identifying vegetation cover loss with high accuracy.',
    stats: [
      { value: '95+', unit: '%', label: 'classification accuracy' },
      { value: '1000+', label: 'satellite images processed' },
      { value: 'Dhaka', label: 'study region' },
      { value: '2024-2025', label: 'time period' },
      { value: '1', label: 'IEEE conference paper' },
    ],
    paint: '#ea6c1b',
    art: 12,
  },
  {
    id: 'firehawk-drone',
    title: 'Firehawk Autonomous Drone',
    subtitle: 'Autonomous Firefighting Drone System with Real-time Flame Detection and Emergency Payload Deployment',
    institution: 'BRAC University',
    department: 'Electrical and Electronic Engineering',
    submitted: '2025–2026',
    supervisor: 'MG Sorwar Hossain, PhD',
    authors: ['MD. Atair Rahman Alvi', 'Firehawk Capstone Team'],
    grade: 'A',
    url: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=pNZDfB8AAAAJ&citation_for_view=pNZDfB8AAAAJ:d1gkVwhDpl0C',
    review: [
      'Capstone Project',
      'Autonomous Systems',
      'Emergency Response',
    ],
    keywords: [
      'Autonomous Drone',
      'Fire Detection',
      'Pixhawk PX4',
      'Arduino',
      'GPS Navigation',
      'Emergency Response',
      'Embedded Systems',
      'Telemetry',
    ],
    abstract:
      'The Firehawk project demonstrates the development of an autonomous firefighting drone capable of real-time flame detection, GPS navigation, and emergency payload deployment. The system integrates multiple sensors and control systems to provide rapid response to fire emergencies in hard-to-reach areas.',
    stats: [
      { value: 'Real-time', label: 'flame detection' },
      { value: 'GPS', label: 'autonomous navigation' },
      { value: '2', label: 'servo mechanisms' },
      { value: 'Automated', label: 'payload deployment' },
      { value: 'Field', label: 'tested system' },
    ],
    paint: '#0c8e5e',
    art: 14,
  },
]
