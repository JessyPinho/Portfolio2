import emoji from "react-easy-emoji";

export const greetings = {
	name: "Jessy Pinho",
	title: "Hi all, I'm Jessy",
	description:
		"I'm a passionate Full Stack web developer having an experience of web applications with React, PHP, HTML/CSS, Javascript, APIs with Laravel and mobile applications with React Native and Flutter",
	resumeLink:
		"https://drive.google.com/file/d/1MgaFPTfRpO2XNjgeAsg8zazorrtllNfP/view?usp=sharing",
};

export const openSource = {
	githubUserName: "JessyPinho",
};

export const contact = {};

export const socialLinks = {
	github: "https://github.com/JessyPinho",
	linkedin: "https://www.linkedin.com/in/jessypinho/",
};

export const skillsSection = {
	title: "What I do",
	subTitle:
		"I'm a Web Developer trying to find an internship",
	data: [
		{
			title: "Full Stack Development",
			lottieAnimationFile: "/lottie/skills/fullstack.json",
			skills: [
				emoji(
					"⚡ Building responsive mobile applications in React Native or Flutter"
				),
				emoji("⚡ Building responsive static websites using HTML/CSS and Javascript with React"),
				emoji(
					"⚡ Building RESTful APIs in the framework Laravel"
				),
			],
			softwareSkills: [
				{
					skillName: "HTML-5",
					fontAwesomeClassname: "vscode-icons:file-type-html",
				},
				{
					skillName: "CSS-3",
					fontAwesomeClassname: "vscode-icons:file-type-css",
				},
				{
					skillName: "Sass",
					fontAwesomeClassname: "logos:sass",
				},
				{
					skillName: "JavaScript",
					fontAwesomeClassname: "logos:javascript",
				},
				{
					skillName: "TypeScript",
					fontAwesomeClassname: "logos:typescript-icon",
				},
				{
					skillName: "Python",
					fontAwesomeClassname: "vscode-icons:file-type-python"
				},
				{
					skillName: "React and React Native",
					fontAwesomeClassname: "vscode-icons:file-type-reactjs",
				},
				{
					skillName: "PHP",
					fontAwesomeClassname: "vscode-icons:file-type-php"
				},
				{
					skillName: "Laravel",
					fontAwesomeClassname: "vscode-icons:file-type-blade"
				},
				{
					skillName: "C",
					fontAwesomeClassname: "logos:c"
				},
				{
					skillName: "C Sharp",
					fontAwesomeClassname: "logos:c-sharp"
				},
				{
					skillName: "DotNet",
					fontAwesomeClassname: "logos:dotnet"
				},
				{
					skillName: "Flutter",
					fontAwesomeClassname: "logos:flutter"
				},
				{
					skillName: "MySQL",
					fontAwesomeClassname: "logos:mysql"
				},
				{
					skillName: "Tailwind CSS",
					fontAwesomeClassname: "vscode-icons:file-type-tailwind"
				},
				{
					skillName: "Firebase",
					fontAwesomeClassname: "vscode-icons:file-type-firebase"
				},
				{
					skillName: "NPM",
					fontAwesomeClassname: "logos:npm-icon",
				},
				{
					skillName: "Yarn",
					fontAwesomeClassname: "logos:yarn",
				},
			],
		},
	],
};

export const SkillBars = [
	{
		Stack: "Frontend/Design",
		progressPercentage: "75",
	},
	{
		Stack: "Backend",
		progressPercentage: "65",
	},
	{
		Stack: "Programming",
		progressPercentage: "70",
	},
];

export const educationInfo = [
	{
		schoolName: "ETNA",
		subHeader: "Master in web programming",
		duration: "September 2021 - January 2025",
		desc: "Bachelor year in web programming (Bac +2 > +3) still running (M1 in late January), doing many projects and still learning new languages and frameworks",
	},
	{
		schoolName: "Lycée Pierre Gilles de Gennes",
		subHeader: "Scientifical Baccalauréat",
		duration: "September 2017 - July 2021",
		desc: "Specialties: Mathematics and Engineering Sciences"
	}
];

export const experience = [
	{
		role: "Web/Mobile Developer",
		company: "Seedext",
		companylogo: "/img/icons/common/Seedext.png",
		date: "July 2022 – January 2023",
		desc: "Created several versions of the app over time, latest version in progress in React JS and Firebase, \
		developed the entire app back-end to front-end with another intern for a few months. \
		Previous Techs: Tailwind CSS, Flutter/Flutter Flow",
	},
	{
		role: "Frontend Developer",
		company: "Planzone",
		companylogo: "/img/icons/common/planzone.png",
		date: "May 2023 – January 2024",
		desc: "Advanced learning of Typescript and React JS, \
		 as well as front-end integration of data or models. Creating or improving components in React. \
		 Creation of the mobile version of Planzone in React Native.",
	},
];

export const projects = [
	{
		name: "Mentor Goal",
		desc: "Creation of a Google Chrome extension capable of helping students to find their internship and also capable of storing CVs.",
		github: "https://github.com/JessyPinho/Mentor-Goal",
	},
	{
		name: "Code Insider",
		desc: "Creation of a mobile application that links companies to students looking for an internship, I used React Native for this application.",
		github: "https://github.com/JessyPinho/CodeInsider",
	},
	{
		name: "Portfolio",
		desc: "Creation of My Portfolio using Next and React.js adjusted for myself and my ongoing projects",
		github: "https://github.com/JessyPinho/Portfolio2",
	},
];

export const projectsWIP = [
	{
		name: "Liberty Commerce",
		desc: "Creation of an E-Commerce website (Login, Register,Catalog, Cart) using Mysql for the database, Laravel for the back and HTML/CSS for the front, i still need to work on the back",
		github: "https://github.com/JessyPinho/Liberty-Commerce",
	},
	{
		name: "Restaurant Advisor",
		desc: "Creation of a mobile application showing restaurants around you with a rating system. I did the API using Laravel and will try to do the front using React Native",
		github: "https://github.com/JessyPinho/-WIP-Restaurant-Advisor"
	},
];