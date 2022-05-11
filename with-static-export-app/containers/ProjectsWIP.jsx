import React from "react";

import { projectsWIP } from "../portfolio";
import { Container, Row, Col } from "reactstrap";
import ProjectsWIPCard from "../components/ProjectsWIPCard";
import { Fade } from "react-reveal";
import GreetingLottie from "../components/DisplayLottie";

const ProjectsWIP = () => {
	return (
		<section className="section section-lg">
			<Container>
				<div className="d-flex p-4">
					<div>
						<div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info">
							<i className="ni ni-laptop text-info" />
						</div>
					</div>
					<div className="pl-4">
						<h4 className="display-3 text-info">Work In Progress</h4>
					</div>
				</div>
				<Col lg="6">
					<GreetingLottie animationPath="/lottie/WIP.json" />
				</Col>
				<Row className="row-grid align-items-center">
					{projectsWIP.map((data, i) => {
						return <ProjectsWIPCard key={i} data={data} />;
					})}
				</Row>
			</Container>
		</section>
	);
};

export default ProjectsWIP;