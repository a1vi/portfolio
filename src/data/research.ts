/**
 * Research & Treatise: Timing closure in OpenROAD/OpenLane and Satellite Deforestation Detection.
 * Atair Rahman Alvi — BRAC University, Dept. of Electrical and Electronic Engineering.
 */

export interface BenchRow {
  model: string
  base: number
  tuned: number
}

export interface Chapter {
  id: string
  numeral: string
  title: string
  short: string
  paint: string
  art: number
}

export const research = {
  id: 'openlane-timing-closure',
  title: 'OpenLane Parameter Sweep',
  subtitle: 'Automated Parameter Tuning for Timing Closure in OpenROAD/OpenLane: A Comprehensive Multi-Design Grid Search Framework on the SkyWater 130 nm PDK',
  institution: 'BRAC University',
  department: 'Electrical and Electronic Engineering',
  submitted: '2025–2026',
  supervisor: 'MG Sorwar Hossain, PhD',
  authors: ['MD. Atair Rahman Alvi', 'Tahmid Noor Rahman'],
  grade: 'A',
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

  /* the optimization pipeline */
  chain: [
    {
      step: 'Synthesis & Floorplan',
      question: 'What is the optimal core utilization?',
      facets: ['FP_CORE_UTIL', 'Aspect Ratio', 'PDN Grid Spacing'],
      text: 'Determining the spatial budget and cell density to prevent downstream routing congestion while maintaining a compact silicon die footprint.',
    },
    {
      step: 'Placement & CTS',
      question: 'How to minimize clock skew & congestion?',
      facets: ['PL_TARGET_DENSITY', 'CTS Skew Balance', 'Buffer Insertion'],
      text: 'Balancing clock arrival times across sequential registers with buffer trees to preserve timing margins prior to detailed routing.',
    },
    {
      step: 'Routing & Timing Closure',
      question: 'Can all setup/hold violations be cleared?',
      facets: ['GLB_RT_ADJUSTMENT', 'WNS Elimination', 'DRC/LVS Clean'],
      text: 'Resolving global and detailed routing conflicts, eliminating negative slack, and verifying layout integrity for tapeout readiness.',
    },
  ],

  /* how the framework was built and evaluated */
  corpus: [
    { title: 'Benchmarks', text: 'Open-source benchmark circuits including CNN AI accelerators, cryptographic engines (AES/SHA), and digital signal processing cores.' },
    { title: 'Search Space', text: 'Grid search space spanning 24+ critical OpenLane variables across floorplanning, placement density, CTS, and routing.' },
    { title: 'Orchestration', text: 'Dockerized OpenLane execution pipeline with automated batch orchestration and telemetry logging.' },
    { title: 'Metric Extraction', text: 'Automated extraction of Worst Negative Slack (WNS), Total Negative Slack (TNS), die area, wirelength, and power from OpenSTA and Magic logs.' },
    { title: 'Pareto Optimization', text: 'Pareto frontier evaluation identifying non-dominated configurations balancing timing closure against silicon area.' },
    { title: 'Open Source', text: 'Reproducible framework, scripts, and benchmark configurations published on GitHub (alvi-codes).' },
  ],

  /* Timing slack improvements, default vs tuned */
  bench: {
    eu: {
      title: 'Worst Negative Slack (WNS, ns)',
      rows: [
        { model: 'CNN Accelerator', base: -2.45, tuned: 0.12 },
        { model: 'AES-128 Core', base: -1.80, tuned: 0.08 },
        { model: 'SHA-256 Engine', base: -3.15, tuned: 0.05 },
        { model: 'FIR Filter 41-Tap', base: -1.20, tuned: 0.22 },
      ] as BenchRow[],
    },
    ea: {
      title: 'Total Negative Slack (TNS, ns)',
      rows: [
        { model: 'CNN Accelerator', base: -48.6, tuned: 0.0 },
        { model: 'AES-128 Core', base: -32.4, tuned: 0.0 },
        { model: 'SHA-256 Engine', base: -64.1, tuned: 0.0 },
      ] as BenchRow[],
    },
    note: 'Automated parameter tuning eliminated 100% of Total Negative Slack across all benchmark cores, achieving complete timing closure on SkyWater 130nm.',
  },

  /* example timing diagnostic */
  example: {
    prompt:
      'Timing violation report on critical path during standard OpenLane flow on SkyWater 130nm:',
    baseline: {
      model: 'Default OpenLane Flow',
      text: 'Endpoint: r_conv_reg[31] (clk falling edge). Path delay: 12.45ns. Required time: 10.00ns. Slack: -2.45ns (VIOLATED). Routing congestion hot-spots detected in metal 3 and metal 4 layers with excessive antenna violations.',
    },
    tuned: {
      model: 'Grid Search Tuned Flow',
      text: 'Endpoint: r_conv_reg[31] (clk falling edge). Path delay: 9.88ns. Required time: 10.00ns. Slack: +0.12ns (MET). Optimized cell density (PL_TARGET_DENSITY=0.45) and routing adjustments cleared congestion. DRC, LVS, and Antenna checks: 100% CLEAN.',
    },
  },
}

export const chapters: Chapter[] = [
  { id: 'thesis', numeral: 'I', title: 'The Framework', short: 'Framework', paint: '#f14352', art: 4 },
  { id: 'chain', numeral: 'II', title: 'Design Flow', short: 'Flow', paint: '#ea6c1b', art: 12 },
  { id: 'corpus', numeral: 'III', title: 'The Methodology', short: 'Methodology', paint: '#d4a900', art: 7 },
  { id: 'trial', numeral: 'IV', title: 'Timing Closure', short: 'Timing', paint: '#0c8e5e', art: 14 },
  { id: 'voice', numeral: 'V', title: 'Diagnostics', short: 'Diagnostics', paint: '#3a96aa', art: 9 },
]
