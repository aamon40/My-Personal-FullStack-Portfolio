import { Container } from "./styles/Container.styled";
import { SectionTitle } from "./styles/About.styled";
import { StyledWork } from "./styles/Work.styled";
import Work from "./Work";

const Projects = () => {
  return (
    <StyledWork id="work">
      <Container>
        <SectionTitle style={{ color: "var(--bluish-purple)", top: "3rem" }}>
          My Projects
        </SectionTitle>
        <Work />
      </Container>
    </StyledWork>
  );
};

export default Projects;
