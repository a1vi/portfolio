import { CodeIcon, Github, Globe, HomeIcon, NotebookIcon } from 'lucide-svelte';
// Navbar Icons
import GithubSvg from '$lib/imgs/github.svg';
import GithubDarkSvg from '$lib/imgs/github-dark.svg';

import GmailSvg from '$lib/imgs/gmail.svg';
import GmailDarkSvg from '$lib/imgs/gmail-dark.svg';

import LinkedinSvg from '$lib/imgs/linkedin.svg';
import LinkedinDarkSvg from '$lib/imgs/linkedin-dark.svg';

import ProfileImg from '$lib/imgs/profile_new.jpg';

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
		'I am a graduate in **Electrical and Electronic Engineering** from BRAC University. I am passionate about [Power Systems](/#education), [IoT](/#skills), [VLSI and Semiconductor field](/#skills). I have experience in embedded systems, machine learning, and web development. I am currently looking for opportunities to apply my skills in a professional setting.',
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
		'AutoCAD',
		'Proteus',
		'Altium',
		'Cadence',
		'Control Systems',
		'React',
		'Node.js',
		'JavaScript',
		'HTML/CSS',
		'Machine Learning',
		'CNN',
		'Image Classification'
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
		},
		{
			company: 'BRAC University EEE Club',
			href: 'https://www.bracu.ac.bd',
			badges: [],
			location: 'Dhaka, Bangladesh',
			title: 'Assistant Director, Human Resource',
			logoUrl: '',
			start: 'Sep 2023',
			end: 'Jul 2024',
			description:
				'Handled financial planning and expense tracking for club activities, guided junior members, and played an active role in organizing events by ensuring funds were used effectively and on time.'
		}
	],
	education: [
		{
			school: 'BRAC University',
			href: 'https://www.bracu.ac.bd',
			degree: 'B.Sc. in Electrical and Electronic Engineering — CGPA: 3.52/4.0',
			logoUrl: '',
			start: '2021',
			end: '2025'
		},
		{
			school: 'Dr. Mahamubur Rahman Mollah College',
			href: '#',
			degree: 'Higher Secondary Certificate (HSC) — GPA: 4.92/5.0',
			logoUrl: '',
			start: '2018',
			end: '2020'
		},
		{
			school: 'Mograpara H.G.G.S Smrity Biddayoton',
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
				'Autonomous firefighting drone with fire-extinguishing ball release mechanism. Built using embedded systems and custom control algorithms.',
			technologies: ['Drone', 'Embedded Systems', 'Firefighting', 'Arduino', 'Control Systems'],
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
				'A hardware accelerator for CNNs, designed using a full RTL-to-GDSII flow on the OpenLane SKY130 process node.',
			technologies: ['Hardware', 'CNN', 'RTL', 'GDSII', 'SKY130', 'VLSI'],
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
				'Satellite image classification for deforestation detection in Dhaka using CNN. Published at ICCIT 2025.',
			technologies: ['Machine Learning', 'CNN', 'Image Processing', 'Python'],
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
				'Centralized medication data management and healthcare monitoring system with IoT integration.',
			technologies: ['Healthcare', 'Data Management', 'IoT', 'React'],
			links: [],
			image: '',
			video: ''
		},
		{
			title: 'SoC Estimation',
			href: '#',
			dates: '2023',
			active: true,
			description:
				'ML-based charging system for light electric vehicles using State of Charge estimation.',
			technologies: ['Machine Learning', 'EV', 'Power Systems', 'Python'],
			links: [],
			image: '',
			video: ''
		}
	],
	hackathons: [
		{
			title: 'ICCIT 2025 Publication',
			dates: '2025',
			location: 'Dhaka, Bangladesh',
			description:
				'Published: "Satellite Image Classification for Deforestation Detection in Dhaka Using CNN" — Authors: Atair Rahman Alvi, Tahmid Noor Rahman — 28th International Conference on Computer and Information Technology (ICCIT), 2025.',
			image: '',
			links: []
		}
	]
};
