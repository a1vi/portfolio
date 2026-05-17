import { CodeIcon, Github, Globe, HomeIcon } from 'lucide-svelte';
// Navbar Icons
import GithubSvg from '$lib/imgs/github.svg';
import GithubDarkSvg from '$lib/imgs/github-dark.svg';

import GmailSvg from '$lib/imgs/gmail.svg';
import GmailDarkSvg from '$lib/imgs/gmail-dark.svg';

import LinkedinSvg from '$lib/imgs/linkedin.svg';
import LinkedinDarkSvg from '$lib/imgs/linkedin-dark.svg';

import ProfileImg from '$lib/imgs/profile_alvi.jpg';

// Institution logos as inline SVG data URIs (base-path agnostic)
const BracuLogo = `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMDAgMjAwIj4KICA8cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0id2hpdGUiLz4KICA8Y2lyY2xlIGN4PSIxMDAiIGN5PSI5NSIgcj0iNzUiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzFhM2E4ZiIgc3Ryb2tlLXdpZHRoPSI2Ii8+CiAgPGNpcmNsZSBjeD0iMTAwIiBjeT0iOTUiIHI9IjY3IiBmaWxsPSJ3aGl0ZSIvPgogIDxwYXRoIGQ9Ik0gNTIgMTE4IFEgNzAgMTA4IDEwMCAxMTIgTCAxMDAgMTM4IFEgNzAgMTM0IDUyIDE0NCBaIiBmaWxsPSIjMWEzYThmIiBvcGFjaXR5PSIwLjg1Ii8+CiAgPHBhdGggZD0iTSAxNDggMTE4IFEgMTMwIDEwOCAxMDAgMTEyIEwgMTAwIDEzOCBRIDEzMCAxMzQgMTQ4IDE0NCBaIiBmaWxsPSIjNTU1NTU1IiBvcGFjaXR5PSIwLjg1Ii8+CiAgPGxpbmUgeDE9IjEwMCIgeTE9IjExMiIgeDI9IjEwMCIgeTI9IjEzOCIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgPHBhdGggZD0iTSA1OCAxMDQgUSAxMDAgOTYgMTQyIDEwNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMWEzYThmIiBzdHJva2Utd2lkdGg9IjIuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CiAgPHBhdGggZD0iTSA2MiAxMTAgUSAxMDAgMTAyIDEzOCAxMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzc3Nzc3NyIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KICA8dGV4dCB4PSIxMDAiIHk9IjcyIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjMWEzYThmIiBmb250LWZhbWlseT0iR2VvcmdpYSwnVGltZXMgTmV3IFJvbWFuJyxzZXJpZiIgZm9udC1zaXplPSIyNiIgZm9udC13ZWlnaHQ9ImJvbGQiIGxldHRlci1zcGFjaW5nPSIzIj5CUkFDPC90ZXh0PgogIDx0ZXh0IHg9IjEwMCIgeT0iOTIiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiMxYTNhOGYiIGZvbnQtZmFtaWx5PSJHZW9yZ2lhLCdUaW1lcyBOZXcgUm9tYW4nLHNlcmlmIiBmb250LXNpemU9IjEzIiBmb250LXdlaWdodD0iYm9sZCIgbGV0dGVyLXNwYWNpbmc9IjIiPlVOSVZFUlNJVFk8L3RleHQ+CiAgPHRleHQgeD0iMTAwIiB5PSIxODUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiMzMzMzMzMiIGZvbnQtZmFtaWx5PSJHZW9yZ2lhLCdUaW1lcyBOZXcgUm9tYW4nLHNlcmlmIiBmb250LXNpemU9IjExIiBmb250LXN0eWxlPSJpdGFsaWMiIGxldHRlci1zcGFjaW5nPSIxIj5JbnNwaXJpbmcgRXhjZWxsZW5jZTwvdGV4dD4KPC9zdmc+`;

const HscLogo =
	`data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><defs><linearGradient id='bg' x1='0%25' y1='0%25' x2='100%25' y2='100%25'><stop offset='0%25' style='stop-color:%230d3b6e'/><stop offset='100%25' style='stop-color:%231a6496'/></linearGradient><linearGradient id='ac' x1='0%25' y1='0%25' x2='100%25' y2='0%25'><stop offset='0%25' style='stop-color:%2356CCF2'/><stop offset='100%25' style='stop-color:%232F80ED'/></linearGradient></defs><rect width='100' height='100' rx='14' fill='url(%23bg)'/><rect x='0' y='0' width='100' height='5' rx='14' fill='url(%23ac)'/><rect x='28' y='22' width='19' height='24' rx='2' fill='white' opacity='0.15'/><rect x='53' y='22' width='19' height='24' rx='2' fill='white' opacity='0.15'/><rect x='46' y='22' width='8' height='24' rx='1' fill='%2356CCF2' opacity='0.5'/><line x1='32' y1='29' x2='44' y2='29' stroke='white' stroke-width='1.2' opacity='0.5'/><line x1='32' y1='33' x2='44' y2='33' stroke='white' stroke-width='1.2' opacity='0.5'/><line x1='32' y1='37' x2='44' y2='37' stroke='white' stroke-width='1.2' opacity='0.5'/><line x1='56' y1='29' x2='68' y2='29' stroke='white' stroke-width='1.2' opacity='0.5'/><line x1='56' y1='33' x2='68' y2='33' stroke='white' stroke-width='1.2' opacity='0.5'/><line x1='56' y1='37' x2='68' y2='37' stroke='white' stroke-width='1.2' opacity='0.5'/><text x='50' y='63' text-anchor='middle' fill='white' font-family='Arial,sans-serif' font-size='16' font-weight='900' letter-spacing='2'>HSC</text><rect x='18' y='67' width='64' height='1.2' rx='1' fill='url(%23ac)' opacity='0.6'/><text x='50' y='77' text-anchor='middle' fill='%237EC8E3' font-family='Arial,sans-serif' font-size='7' letter-spacing='1'>Dr. MR Mollah</text><text x='50' y='88' text-anchor='middle' fill='%237EC8E3' font-family='Arial,sans-serif' font-size='7' letter-spacing='0.5'>College, Demra</text></svg>`;

const SscLogo =
	`data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><defs><linearGradient id='bg' x1='0%25' y1='0%25' x2='100%25' y2='100%25'><stop offset='0%25' style='stop-color:%23145a32'/><stop offset='100%25' style='stop-color:%231e8449'/></linearGradient><linearGradient id='ac' x1='0%25' y1='0%25' x2='100%25' y2='0%25'><stop offset='0%25' style='stop-color:%23a9dfbf'/><stop offset='100%25' style='stop-color:%2327ae60'/></linearGradient></defs><rect width='100' height='100' rx='14' fill='url(%23bg)'/><rect x='0' y='0' width='100' height='5' rx='14' fill='url(%23ac)'/><polygon points='50,18 27,33 73,33' fill='white' opacity='0.2'/><line x1='50' y1='12' x2='50' y2='20' stroke='white' stroke-width='1.5' opacity='0.7'/><polygon points='50,12 57,15 50,18' fill='%23a9dfbf' opacity='0.8'/><rect x='30' y='33' width='40' height='18' rx='1' fill='white' opacity='0.15'/><rect x='34' y='37' width='7' height='8' rx='1' fill='%23a9dfbf' opacity='0.5'/><rect x='46' y='37' width='7' height='8' rx='1' fill='%23a9dfbf' opacity='0.5'/><rect x='58' y='37' width='7' height='8' rx='1' fill='%23a9dfbf' opacity='0.5'/><rect x='44' y='44' width='11' height='7' rx='1' fill='white' opacity='0.25'/><text x='50' y='66' text-anchor='middle' fill='white' font-family='Arial,sans-serif' font-size='16' font-weight='900' letter-spacing='2'>SSC</text><rect x='18' y='70' width='64' height='1.2' rx='1' fill='url(%23ac)' opacity='0.6'/><text x='50' y='80' text-anchor='middle' fill='%23a9dfbf' font-family='Arial,sans-serif' font-size='7' letter-spacing='0.5'>Mograpara HGGS</text><text x='50' y='90' text-anchor='middle' fill='%23a9dfbf' font-family='Arial,sans-serif' font-size='7' letter-spacing='0.5'>Smrity Biddayoton</text></svg>`;

const ExcelerateLogo =
	`data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><defs><linearGradient id='bg' x1='0%25' y1='0%25' x2='100%25' y2='100%25'><stop offset='0%25' style='stop-color:%23b7410e'/><stop offset='100%25' style='stop-color:%23e67e22'/></linearGradient><linearGradient id='ac' x1='0%25' y1='0%25' x2='100%25' y2='0%25'><stop offset='0%25' style='stop-color:%23FFD700'/><stop offset='100%25' style='stop-color:%23FFA500'/></linearGradient></defs><rect width='100' height='100' rx='14' fill='url(%23bg)'/><rect x='0' y='0' width='100' height='5' rx='14' fill='url(%23ac)'/><ellipse cx='50' cy='34' rx='8' ry='14' fill='white' opacity='0.25'/><polygon points='50,18 43,32 57,32' fill='white' opacity='0.35'/><circle cx='50' cy='33' r='4' fill='white' opacity='0.2'/><circle cx='50' cy='33' r='2.5' fill='%23FFD700' opacity='0.6'/><polygon points='42,42 38,50 45,46' fill='white' opacity='0.3'/><polygon points='58,42 62,50 55,46' fill='white' opacity='0.3'/><ellipse cx='50' cy='51' rx='4' ry='6' fill='%23FFD700' opacity='0.7'/><ellipse cx='50' cy='53' rx='2.5' ry='4' fill='white' opacity='0.5'/><text x='50' y='68' text-anchor='middle' fill='white' font-family='Arial,sans-serif' font-size='10' font-weight='900' letter-spacing='0.5'>EXCELERATE</text><rect x='18' y='71' width='64' height='1.2' rx='1' fill='url(%23ac)' opacity='0.6'/><text x='50' y='82' text-anchor='middle' fill='rgba(255,220,160,0.9)' font-family='Arial,sans-serif' font-size='8' letter-spacing='1'>Internship</text><text x='50' y='92' text-anchor='middle' fill='rgba(255,220,160,0.7)' font-family='Arial,sans-serif' font-size='7'>Remote 2025</text></svg>`;

// Your resume data
export let DATA = {
	name: 'Atair Rahman Alvi',
	initials: 'ARA',
	url: 'https://github.com/a1vi',
	img: ProfileImg,
	location: 'Dhaka, Bangladesh',
	locationLink: 'https://www.google.com/maps/place/Dhaka',
	description:
		'EEE Graduate transforming ideas into digital reality. Passionate about Power Systems, IoT, VLSI, Semiconductor and Embedded Systems.',
	summary:
		'I am a graduate in **Electrical and Electronic Engineering** from BRAC University, Dhaka. I am passionate about [Power Systems](/#education), [IoT & Embedded Systems](/#skills), [VLSI and Semiconductor field](/#skills). I have experience in embedded systems, machine learning, digital IC design, and web development. I am currently looking for opportunities to apply my skills in a professional setting.',
	avatarUrl: ProfileImg,
	skills: [
		'MATLAB',
		'Simulink',
		'Python',
		'C',
		'LaTeX',
		'AVR Studio',
		'PSPICE',
		'Arduino',
		'Raspberry Pi',
		'ESP32',
		'Sensors',
		'Servo Motors',
		'Cadence',
		'AutoCAD',
		'Control Systems',
		'Proteus',
		'Altium',
		'Machine Learning',
		'CNN',
		'Image Classification',
		'Communication',
		'Problem Solving',
		'Teamwork',
		'Leadership'
	],
	navbar: [
		{ href: '/', icon: HomeIcon, label: 'Home' },
		{ href: '#', icon: CodeIcon, label: 'Projects' }
	],
	contact: {
		email: 'alvialvi91@gmail.com',
		tel: '+880 1571 034770',
		social: {
			GitHub: {
				name: 'GitHub',
				url: 'https://github.com/a1vi',
				icon: GithubSvg,
				navbar: true,
				dark_icon: GithubDarkSvg
			},
			LinkedIn: {
				name: 'LinkedIn',
				url: 'https://www.linkedin.com/in/a1vi/',
				icon: LinkedinSvg,
				navbar: true,
				dark_icon: LinkedinDarkSvg
			},
			email: {
				name: 'Send Email',
				url: 'mailto:alvialvi91@gmail.com',
				icon: GmailSvg,
				navbar: false,
				dark_icon: GmailDarkSvg
			}
		}
	},
	work: [
		{
			company: 'Excelerate',
			href: 'https://excelerate.com',
			badges: ['Remote'],
			location: 'Remote',
			title: 'Associate Project Manager Intern',
			logoUrl: ExcelerateLogo,
			start: 'Aug 2025',
			end: 'Sep 2025',
			description:
				'Supported project planning, task coordination, and documentation for remote teams. Maintained tracking systems and facilitated stakeholder communication to ensure timely project delivery.'
		}
	],
	education: [
		{
			school: 'BRAC University',
			href: 'https://www.bracu.ac.bd',
			degree: 'B.Sc. in Electrical and Electronic Engineering — CGPA: 3.52/4.0',
			logoUrl: BracuLogo,
			start: '2021',
			end: '2026'
		},
		{
			school: 'Dr. Mahamubur Rahman Mollah College, Demra, Dhaka',
			href: '#',
			degree: 'Higher Secondary Certificate (HSC) — GPA: 4.92/5.0',
			logoUrl: HscLogo,
			start: '2018',
			end: '2020'
		},
		{
			school: 'Mograpara H.G.G.S Smrity Biddayoton, Sonargaon, Narayangonj',
			href: '#',
			degree: 'Secondary School Certificate (SSC) — GPA: 4.83/5.0',
			logoUrl: SscLogo,
			start: '2016',
			end: '2018'
		}
	],
	projects: [
		{
			title: 'Firehawk (Capstone)',
			href: '#',
			dates: '2024 – 2025',
			active: true,
			description:
				'Autonomous firefighting drone with fire-extinguishing ball release mechanism. Designed for rapid fire detection and emergency response in hazardous areas using embedded control and wireless communication systems.',
			technologies: ['Drone', 'Embedded Systems', 'Wireless Comms', 'Arduino', 'Control Systems'],
			links: [],
			image: '',
			video: ''
		},
		{
			title: 'CNN AI Accelerator — RTL-to-GDSII on SKY130',
			href: 'https://github.com/a1vi/CNN-AI-Accelerator-RTL-to-GDSII-on-SKY130',
			dates: '2024',
			active: true,
			description:
				'Design and implementation of a CNN-based AI accelerator from RTL to GDSII using OpenLane and SKY130 PDK. Performed full digital IC design flow including synthesis, floorplanning, placement, routing, and verification.',
			technologies: ['VLSI', 'RTL', 'GDSII', 'OpenLane', 'SKY130', 'CNN', 'Digital IC Design'],
			links: [
				{
					type: 'Source',
					href: 'https://github.com/a1vi/CNN-AI-Accelerator-RTL-to-GDSII-on-SKY130',
					icon: Github
				}
			],
			image: '',
			video: ''
		},
		{
			title: 'Deforestation Detection',
			href: '#',
			dates: '2024',
			active: true,
			description:
				'Satellite image classification for deforestation detection in Dhaka. Applied image processing and machine learning techniques for environmental monitoring and land-use analysis.',
			technologies: ['Machine Learning', 'CNN', 'Image Processing', 'Python', 'Satellite Imagery'],
			links: [],
			image: '',
			video: ''
		},
		{
			title: 'Medilink',
			href: '#',
			dates: '2023',
			active: true,
			description:
				'Centralized medication data management and healthcare monitoring system. Developed to improve patient record management, medication tracking, and real-time healthcare monitoring.',
			technologies: ['Healthcare', 'Data Management', 'IoT', 'React'],
			links: [],
			image: '',
			video: ''
		},
		{
			title: 'Smart Elevator System',
			href: '#',
			dates: '2023',
			active: true,
			description:
				'Designed and simulated a microcontroller-based elevator control system in Proteus with floor selection, motor control, and automated movement logic.',
			technologies: ['Proteus', 'Microcontroller', 'Embedded Systems', 'Motor Control'],
			links: [],
			image: '',
			video: ''
		}
	],
	hackathons: [
		{
			title:
				'Satellite Image Classification for Deforestation Detection in Dhaka Using CNN',
			dates: '2025',
			location: 'Cox\'s Bazar, Bangladesh',
			description:
				'A. R. Alvi and T. N. Rahman — 2025 28th International Conference on Computer and Information Technology (ICCIT), pp. 5895–5899. doi: 10.1109/ICCIT68739.2025.11491473',
			image: '',
			links: [
				{
					title: 'DOI',
					icon: Globe,
					href: 'https://doi.org/10.1109/ICCIT68739.2025.11491473'
				}
			]
		}
	]
};
