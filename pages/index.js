import dynamic from "next/dynamic";
import PropTypes from "prop-types";
const Navigation = dynamic(() => import("../components/Navigation"));
const Greetings = dynamic(() => import("../containers/Greetings"));
const Skills = dynamic(() => import("../containers/Skills"));
const Proficiency = dynamic(() => import("../containers/Proficiency"));
const Education = dynamic(() => import("../containers/Education"));
const Experience = dynamic(() => import("../containers/Experience"));
const Projects = dynamic(() => import("../containers/Projects"));
const Feedbacks = dynamic(() => import("../containers/Feedbacks"));
const GithubProfileCard = dynamic(() =>
	import("../components/GithubProfileCard")
);
import { openSource } from "../portfolio";
import SEO from "../components/SEO";
import ProjectsWIP from "../containers/ProjectsWIP";

export default function Home({ githubProfileData }) {
	return (
		<div>
			<SEO
				data={{
					title: "Jessy Pinho",
					description:
						"A passionate Full Stack Web Developer.",
					image: "https://avatars.githubusercontent.com/u/103431178?v=4",
					url: "https://portfolio2-fawn.vercel.app/",
					keywords: [
						"Pinho",
						"Pinho Jessy",
						"Jessy Pinho",
						"Jessy",
						"Portfolio",
						"Jessy Portfolio ",
						"Jessy Pinho Portfolio",
					],
				}}
			/>
			<Navigation />
			<Greetings />
			<Skills />
			<Proficiency />
			<Education />
			<Projects />
			<ProjectsWIP />
			<GithubProfileCard prof={githubProfileData} />
		</div>
	);
}

Home.prototype = {
	githubProfileData: PropTypes.object.isRequired,
};

export async function getStaticProps(_) {
	const githubProfileData = await fetch(
		`https://api.github.com/users/${openSource.githubUserName}`
	).then((res) => res.json());

	return {
		props: { githubProfileData },
	};
}
