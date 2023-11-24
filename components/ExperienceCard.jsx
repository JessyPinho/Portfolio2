import React from "react";

import {
	Card,
	CardBody,
	CardTitle,
	CardSubtitle,
	CardText,
	Col,
	Badge,
} from "reactstrap";

import { Fade } from "react-reveal";

const ExperienceCard = ({ data }) => {
	return (
		<Col lg="6">
			<Fade left duration={2000}>
		  		<Card
					style={{ flex: 1 }}
					className="shadow-lg--hover mb-3 shadow border-0 text-center rounded"
				>
					<CardBody className="">
					<img
						src={data.companylogo}
						style={{
							objectFit: 'none',
							width: '8rem',
							height: '8rem',
							borderRadius: '50%',
						}}
						className="shadow mb-3"
						alt={data.companylogo}
					/>
					<CardTitle tag="h4" className="mb-2 text-info">
						{data.company}
					</CardTitle>
					<CardSubtitle tag="h5" className="mb-2">
						{data.role}
					</CardSubtitle>
					<Badge color="info">
						{data.date}
					</Badge>
					<CardText tag="div" className="description my-3 text-left">
						{data.desc}
						<ul>
						{data.descBullets
							? descBullets.map((desc) => {
								return <li key={desc}>{desc}</li>;
							})
							: null}
						</ul>
					</CardText>
				</CardBody>
		  	</Card>
		</Fade>
	  </Col>
	);
};

export default ExperienceCard;
