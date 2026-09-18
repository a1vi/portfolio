export type ProjectStatus = 'complete' | 'in-progress' | 'under-review' | 'released' | 'testing'

export const statusLabel: Record<ProjectStatus, string> = {
  complete: 'Complete',
  released: 'Published',
  testing: 'Field Testing',
  'under-review': 'Under Review',
  'in-progress': 'In Progress',
}

export interface ProjectLink {
  label: string
  href: string
  kind: 'github' | 'steam' | 'artstation' | 'web'
}

export interface Project {
  id: string
  title: string
  tagline: string
  /** main quests are the flagship pieces; side quests are smaller tools & experiments */
  tier: 'main' | 'side'
  category: string
  platform: string
  role: string
  year: string
  description: string
  technologies: string[]
  features: string[]
  architecture: string[]
  links: ProjectLink[]
  status: ProjectStatus
  /** splat colour for this quest */
  paint: string
  /** project images under public/projects/… (first one is the hero) */
  images?: string[]
  /** phone screenshots are shown as a row of frames instead of one wide hero */
  portrait?: boolean
  /** official art fallback for the backdrop (public/art/desktop/wallpaper-N.jpg) */
  art: number
}

export const projects: Project[] = [
  /* ── main quests ─────────────────────────────────────────────────────── */
  {
    id: 'firehawk',
    title: 'Firehawk: Firefighting Drone',
    tagline: 'Autonomous UAV with flame/gas detection and ball-extinguisher release',
    tier: 'main',
    category: 'Autonomous UAV & Robotics',
    platform: 'Pixhawk PX4 · Arduino · ESP8266 · GPS',
    role: 'Lead Embedded & Systems Engineer',
    year: '2025–2026',
    description:
      'Designed and built an autonomous firefighting unmanned aerial vehicle capable of detecting hazardous fires and deploying fire-extinguishing balls in inaccessible environments. Integrated Pixhawk PX4 flight controller, Arduino Nano for sensor acquisition, ESP8266 Wi-Fi telemetry, GPS navigation, and servo-actuated payload drop mechanics.',
    technologies: ['Pixhawk PX4', 'Arduino Nano', 'ESP8266', 'GPS', 'Flame Sensors', 'MQ-2 Sensor', 'Telemetry', 'C++'],
    features: [
      'Autonomous waypoint traversal and fail-safe Return-to-Launch (RTL)',
      'Multi-sensor array detecting flame spectra and toxic combustion gases',
      'Servo-actuated dual release mechanism for rapid fire suppression balls',
      'Wireless long-range telemetry downlink to simulated ground station',
      'Field-tested emergency response protocol for high-risk industrial zones',
    ],
    architecture: ['Flight Control (PX4)', 'Sensor Acquisition (Arduino)', 'Telemetry Link (ESP8266)', 'Servo Release Mechanism', 'Ground Control Station'],
    links: [
      { label: 'Google Scholar', href: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=pNZDfB8AAAAJ&citation_for_view=pNZDfB8AAAAJ:d1gkVwhDpl0C', kind: 'web' },
      { label: 'GitHub', href: 'https://github.com/alvi-codes', kind: 'github' },
    ],
    status: 'complete',
    paint: '#ea6c1b',
    art: 10,
  },
  {
    id: 'openlane-parameter-sweep',
    title: 'OpenLane Parameter Sweep',
    tagline: 'Automated parameter tuning framework for timing closure on SkyWater 130nm',
    tier: 'main',
    category: 'VLSI & EDA Automation',
    platform: 'OpenLane · OpenROAD · SKY130 PDK',
    role: 'Physical Design & EDA Researcher',
    year: '2025–2026',
    description:
      'Automated multi-design parameter sweep framework for OpenLane to systematically evaluate digital IC configurations and achieve timing closure on the SkyWater 130 nm PDK. Explores high-dimensional design spaces across core utilization, placement density, and routing margins to eliminate setup and hold violations.',
    technologies: ['OpenLane', 'OpenROAD', 'SkyWater 130nm PDK', 'Python', 'Tcl', 'Bash', 'EDA Automation'],
    features: [
      'Grid search exploration across core utilization, placement density, and routing layers',
      'Timing closure optimization resolving Worst Negative Slack (WNS) and Total Negative Slack (TNS)',
      'Comprehensive multi-benchmark comparison of Power, Performance, and Area (PPA)',
      'Automated log parsing, metric aggregation, and Pareto frontier generation',
      'Published research with open-source reproducibility on GitHub',
    ],
    architecture: ['Parameter Space Generator', 'OpenLane Workflow Engine', 'STA Slack Analyzer', 'PPA Aggregator', 'Pareto Frontier Evaluator'],
    links: [
      { label: 'GitHub Repository', href: 'https://github.com/alvi-codes/openlane-parameter-sweep', kind: 'github' },
      { label: 'Google Scholar', href: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=pNZDfB8AAAAJ&citation_for_view=pNZDfB8AAAAJ:2osOgNQ5qMEC', kind: 'web' },
    ],
    status: 'complete',
    paint: '#3a96aa',
    art: 9,
  },
  {
    id: 'cnn-ai-accelerator',
    title: 'CNN AI Accelerator on SKY130',
    tagline: 'Complete RTL-to-GDSII flow for a CNN hardware accelerator using OpenLane',
    tier: 'main',
    category: 'Digital IC Design & ASIC',
    platform: 'Verilog · OpenLane · SkyWater 130nm',
    role: 'Digital IC Designer',
    year: '2025',
    description:
      'Full physical design implementation of a Convolutional Neural Network hardware accelerator from Verilog RTL to clean GDSII layout on the open-source SkyWater 130nm process. Executed logic synthesis, floorplanning, power grid routing, placement, clock tree synthesis (CTS), routing, and DRC/LVS physical verification.',
    technologies: ['Verilog HDL', 'OpenLane', 'SKY130 PDK', 'Yosys', 'Magic', 'KLayout', 'Netgen', 'OpenSTA'],
    features: [
      'Parallel Multiply-Accumulate (MAC) processing unit for high-throughput 2D convolution',
      'Pipelined dataflow with dedicated on-chip line buffers minimizing memory access latency',
      'Robust power distribution network (PDN) engineered to prevent IR drop anomalies',
      'DRC, LVS, and antenna-check clean layout ready for SkyWater shuttle fabrication',
      'Static timing analysis verified with positive slack at target operating frequencies',
    ],
    architecture: ['Verilog RTL Architecture', 'Yosys Logic Synthesis', 'Floorplan & PDN Grid', 'CTS & Cell Placement', 'Magic / KLayout GDSII'],
    links: [
      { label: 'GitHub', href: 'https://github.com/alvi-codes', kind: 'github' },
    ],
    status: 'complete',
    paint: '#f14352',
    art: 12,
  },
  {
    id: 'ml-ppa-optimization',
    title: 'ML-based PPA Optimization',
    tagline: 'Machine learning workflow to predict and optimize IC power, performance, and area',
    tier: 'main',
    category: 'Machine Learning for EDA',
    platform: 'Python · Scikit-Learn · OpenLane',
    role: 'Machine Learning Researcher',
    year: '2025–2026',
    description:
      'Developed a machine learning workflow to analyze and optimize power, performance, and area metrics for OpenLane digital IC designs. By training surrogate regression models on historical execution data, the tool predicts timing slack and wire congestion prior to complete place-and-route runs, cutting design iteration times.',
    technologies: ['Python', 'Scikit-Learn', 'Pandas', 'NumPy', 'OpenLane', 'EDA Algorithms'],
    features: [
      'Fast surrogate prediction of post-routing slack without running full PnR flows',
      'Feature importance ranking revealing dominant floorplan and CTS parameters',
      'Automated recommendations for optimal clock period and core density combinations',
      'Evaluated across multiple open-source RISC-V and DSP benchmark cores',
    ],
    architecture: ['Design Feature Extractor', 'Dataset Normalizer', 'Ensemble ML Regressors', 'Surrogate Predictor', 'Parameter Optimizer'],
    links: [
      { label: 'GitHub', href: 'https://github.com/alvi-codes', kind: 'github' },
    ],
    status: 'complete',
    paint: '#d4a900',
    art: 7,
  },
  {
    id: 'deforestation-detection',
    title: 'Deforestation Detection (CNN)',
    tagline: 'Satellite image classification pipeline for environmental monitoring in Dhaka',
    tier: 'main',
    category: 'Computer Vision & Remote Sensing',
    platform: 'Python · TensorFlow · OpenCV · Satellite Data',
    role: 'Lead ML Researcher',
    year: '2024–2025',
    description:
      'Developed a satellite image classification and land-cover segmentation pipeline for detecting deforestation patterns in the Dhaka metropolitan area. Preprocessed high-resolution multi-spectral satellite imagery, applied feature extraction and CNN architectures, and quantified green canopy depletion over multi-year intervals. Published at IEEE ICCIT 2025.',
    technologies: ['Python', 'CNN', 'TensorFlow', 'OpenCV', 'Satellite Imagery', 'GIS', 'Remote Sensing'],
    features: [
      'Multi-spectral satellite image preprocessing and spectral vegetation index extraction',
      'Deep convolutional neural network architecture trained for dense canopy classification',
      'Accurate quantification of urban vegetation loss across metropolitan Dhaka sectors',
      'Published in the 28th International Conference on Computer and Information Technology (ICCIT 2025)',
    ],
    architecture: ['Satellite Imagery Ingestion', 'Spectral Normalization', 'CNN Feature Extractor', 'Canopy Classifier', 'Depletion Analytics'],
    links: [
      { label: 'IEEE ICCIT Publication', href: 'https://doi.org/10.1109/ICCIT68739.2025.11491473', kind: 'web' },
      { label: 'Google Scholar', href: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=pNZDfB8AAAAJ&citation_for_view=pNZDfB8AAAAJ:u5HHmVD_uO8C', kind: 'web' },
    ],
    status: 'released',
    paint: '#0c8e5e',
    art: 4,
  },

  /* ── side quests ─────────────────────────────────────────────────────── */
  {
    id: 'smart-elevator',
    title: 'Smart Elevator Control System',
    tagline: 'Embedded elevator control with floor scheduling and motor simulation in Proteus',
    tier: 'side',
    category: 'Embedded Systems',
    platform: 'Proteus · Embedded C · Microcontrollers',
    role: 'Embedded Systems Engineer',
    year: '2024',
    description:
      'Designed and simulated a smart embedded elevator control system in Proteus ISIS using microcontrollers. Implemented multi-floor hall request scheduling, DC motor direction and PWM speed control, external interrupt handling, and automated door safety interlocks.',
    technologies: ['Proteus', 'Embedded C', 'Microcontroller', 'Interrupt Handling', 'PWM Control'],
    features: [
      'Efficient multi-floor call scheduling and floor request prioritization',
      'DC motor direction and speed management with H-bridge simulation',
      'Interrupt-driven safety limit switches and automated door timer logic',
      'Full Proteus ISIS circuit design with interactive user keypad and indicators',
    ],
    architecture: ['Floor Sensor Logic', 'Scheduler Algorithm', 'Motor Driver Interface', 'Proteus Simulation Environment'],
    links: [
      { label: 'GitHub', href: 'https://github.com/alvi-codes', kind: 'github' },
    ],
    status: 'complete',
    paint: '#3a96aa',
    art: 1,
  },
  {
    id: 'cubesat-payload',
    title: 'CubeSat Environmental Payload',
    tagline: 'Embedded payload subsystem for atmospheric telemetry acquisition',
    tier: 'side',
    category: 'Aerospace & Telemetry',
    platform: 'Microcontroller · I2C · SPI · Sensors',
    role: 'Payload Systems Engineer',
    year: '2024',
    description:
      'Designed an embedded payload for monitoring atmospheric parameters in low Earth orbit simulation, acquiring temperature, barometric pressure, humidity, and light intensity. Integrated multi-sensor I2C and SPI buses, executed real-time telemetry packetization, and sent data to a ground station receiver.',
    technologies: ['I2C', 'SPI', 'Telemetry', 'Microcontroller', 'Embedded C', 'Sensors'],
    features: [
      'Multi-sensor digital bus interface combining I2C and SPI communication lines',
      'Telemetry packet formatting with cyclic redundancy check (CRC) verification',
      'Low-power sensor polling cycles designed for satellite energy budgets',
      'Downlink data verification on simulated ground terminal interface',
    ],
    architecture: ['Sensor Transducers', 'Bus Interface (I2C/SPI)', 'Telemetry Packetizer', 'RF Downlink Simulator'],
    links: [
      { label: 'GitHub', href: 'https://github.com/alvi-codes', kind: 'github' },
    ],
    status: 'complete',
    paint: '#b94abb',
    art: 11,
  },
  {
    id: 'gas-leakage-alarm',
    title: 'Gas Leakage Detection & Alarm',
    tagline: 'ATmega32 embedded system with MQ-2 sensors and relay cutoff mechanism',
    tier: 'side',
    category: 'Industrial Safety & Embedded',
    platform: 'ATmega32 · MQ-2 · AVR Studio · C',
    role: 'Firmware & Hardware Developer',
    year: '2023–2024',
    description:
      'Developed an ATmega32-based embedded safety system for detecting combustible LPG gas leakage using MQ-2 sensors. Integrated real-time analog-to-digital conversion, 16x2 LCD display, acoustic piezo alarm, and a relay-triggered solenoid cutoff valve for immediate accident prevention.',
    technologies: ['ATmega32', 'MQ-2 Gas Sensor', 'Embedded C', 'AVR Studio', 'Relay Interfacing', 'LCD 16x2'],
    features: [
      'Fast-response gas concentration threshold monitoring with ATmega32 ADC',
      'Automated relay safety trip for solenoid gas valve isolation',
      'Real-time LCD readout of PPM levels with acoustic buzzer alert',
      'Built-in calibration routine to adapt to ambient environmental conditions',
    ],
    architecture: ['MQ-2 Gas Transducer', 'ATmega32 Microcontroller', 'Relay Cutoff Circuit', 'LCD & Audio Alert Subsystem'],
    links: [
      { label: 'GitHub', href: 'https://github.com/alvi-codes', kind: 'github' },
    ],
    status: 'complete',
    paint: '#eb523d',
    art: 2,
  },
  {
    id: 'buck-boost-converter',
    title: 'Buck-Boost DC-DC with PI Control',
    tagline: 'Closed-loop power converter simulation in MATLAB/Simulink with PI regulation',
    tier: 'side',
    category: 'Power Electronics & Control',
    platform: 'MATLAB · Simulink · Control Systems',
    role: 'Control Systems Engineer',
    year: '2024',
    description:
      'Designed and simulated a closed-loop buck-boost DC-DC converter in MATLAB/Simulink. Implemented and tuned a Proportional-Integral (PI) controller to regulate output voltage under varying load conditions and input fluctuations, analyzing transient response, stability, and power efficiency.',
    technologies: ['MATLAB', 'Simulink', 'Control Systems', 'Power Electronics', 'PI Tuning'],
    features: [
      'Closed-loop PWM regulation stabilizing output against dynamic step loads',
      'Bode plot frequency response and phase margin stability analysis',
      'Inductor current ripple and capacitor voltage ripple minimization',
      'High conversion efficiency demonstrated across buck, boost, and transition regimes',
    ],
    architecture: ['Converter Topology', 'PWM Modulator', 'PI Controller', 'Feedback Compensation Network'],
    links: [
      { label: 'GitHub', href: 'https://github.com/alvi-codes', kind: 'github' },
    ],
    status: 'complete',
    paint: '#d4a900',
    art: 6,
  },
  {
    id: 'fire-detection-alarm',
    title: 'Fire Detection & Alarm System',
    tagline: 'Multi-sensor fire hazard alarm system programmed on ATmega32',
    tier: 'side',
    category: 'Safety & Embedded Systems',
    platform: 'ATmega32 · Flame Sensors · Thermistor · C',
    role: 'Firmware Developer',
    year: '2023',
    description:
      'Developed an embedded fire detection system using optical flame sensors, temperature sensors, and an ATmega32 microcontroller. Programmed the controller to continuously monitor environmental conditions and activate alarms during fire outbreak for early warning applications.',
    technologies: ['ATmega32', 'Flame Sensors', 'Temperature Sensors', 'AVR Studio', 'C'],
    features: [
      'Dual optical flame spectrum and thermal sensor monitoring',
      'Interrupt-driven alarm response ensuring sub-second warning latency',
      'Relay safety activation for emergency suppression systems',
      'Diagnostics LED indicators for system status and line integrity',
    ],
    architecture: ['Flame & Heat Sensors', 'ATmega32 Controller', 'Relay Interfacing', 'Strobe & Piezo Sirens'],
    links: [
      { label: 'GitHub', href: 'https://github.com/alvi-codes', kind: 'github' },
    ],
    status: 'complete',
    paint: '#f14352',
    art: 3,
  },
]
