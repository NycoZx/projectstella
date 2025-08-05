import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const ProjectsSection = styled.section`
  padding: 60px;
  background-color: #fff;
  color: #333;
`;

const ProjectCard = styled(motion.div)`
  background-color: #f4f4f4;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin: 20px 0;
  text-align: center;
`;

const CardTitle = styled.h3`
  color: #ff6347;
  font-size: 1.8rem;
  margin-bottom: 10px;
`;

const CardDescription = styled.p`
  color: #666;
  font-size: 1rem;
`;

const projectsData = [
  { title: 'Projeto 1', description: 'Descrição do projeto 1.' },
  { title: 'Projeto 2', description: 'Descrição do projeto 2.' },
  { title: 'Projeto 3', description: 'Descrição do projeto 3.' },
];

function Projects() {
  return (
    <ProjectsSection>
      {projectsData.map((project, index) => (
        <ProjectCard
          key={index}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2, duration: 0.5 }}
        >
          <CardTitle>{project.title}</CardTitle>
          <CardDescription>{project.description}</CardDescription>
        </ProjectCard>
      ))}
    </ProjectsSection>
  );
}

export default Projects;
