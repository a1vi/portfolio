import { CodeIcon, Github, Globe, HomeIcon } from 'lucide-svelte';
// Navbar Icons
import GithubSvg from '$lib/imgs/github.svg';
import GithubDarkSvg from '$lib/imgs/github-dark.svg';

import GmailSvg from '$lib/imgs/gmail.svg';
import GmailDarkSvg from '$lib/imgs/gmail-dark.svg';

import LinkedinSvg from '$lib/imgs/linkedin.svg';
import LinkedinDarkSvg from '$lib/imgs/linkedin-dark.svg';

import ProfileImg from '$lib/imgs/profile_alvi.jpg';

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
			logoUrl: '',
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
			logoUrl: '',
			start: '2021',
			end: '2026'
		},
		{
			school: 'Dr. Mahamubur Rahman Mollah College, Demra, Dhaka',
			href: '#',
			degree: 'Higher Secondary Certificate (HSC) — GPA: 4.92/5.0',
			logoUrl: '',
			start: '2018',
			end: '2020'
		},
		{
			school: 'Mograpara H.G.G.S Smrity Biddayoton, Sonargaon, Narayangonj',
			href: '#',
			degree: 'Secondary School Certificate (SSC) — GPA: 4.83/5.0',
			logoUrl: '',
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
