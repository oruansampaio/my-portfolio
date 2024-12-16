import { Box, Button, Container, Grid, Typography, styled } from "@mui/material";

const Projects = () => {
    const StyledProjects = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.background.default,
        padding: "50px 0",
    }));

    const ProjectCard = styled(Box)(({ theme }) => ({
        border: `1px solid ${theme.palette.divider}`,
        borderRadius: "10px",
        overflow: "hidden",
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[3],
        transition: "transform 0.3s, box-shadow 0.3s",
        "&:hover": {
            transform: "scale(1.02)",
            boxShadow: theme.shadows[5],
        },
    }));

    const ProjectImage = styled("img")({
        width: "100%",
        height: "200px",
        objectFit: "cover",
    });

    const ProjectContent = styled(Box)(() => ({
        padding: "20px",
    }));

    const StyledButton = styled(Button)(({ theme }) => ({
        margin: "10px 5px",
        color: theme.palette.primary.contrastText,
        backgroundColor: theme.palette.primary.main,
        "&:hover": {
            backgroundColor: theme.palette.primary.dark,
        },
    }));

    const projects = [
        {
            id: 1,
            name: "Projeto 1",
            description: "Breve descrição do projeto 1.",
            image: "https://via.placeholder.com/400x200",
            liveLink: "https://example.com/projeto1",
            codeLink: "https://github.com/seu-usuario/projeto1",
        },
        {
            id: 2,
            name: "Projeto 2",
            description: "Breve descrição do projeto 2.",
            image: "https://via.placeholder.com/400x200",
            liveLink: "https://example.com/projeto2",
            codeLink: "https://github.com/seu-usuario/projeto2",
        },
        {
            id: 3,
            name: "Projeto 3",
            description: "Breve descrição do projeto 3.",
            image: "https://via.placeholder.com/400x200",
            liveLink: "https://example.com/projeto3",
            codeLink: "https://github.com/seu-usuario/projeto3",
        },
    ];

    return (
        <StyledProjects>
            <Container maxWidth="lg">
                <Typography variant="h2" textAlign="center" color="text.primary" mb={4}>
                    Projects
                </Typography>
                <Grid container spacing={4}>
                    {projects.map((project) => (
                        <Grid item xs={12} md={4} key={project.id}>
                            <ProjectCard>
                                <ProjectImage src={project.image} alt={project.name} />
                                <ProjectContent>
                                    <Typography variant="h6" color="text.primary" mb={1}>
                                        {project.name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" mb={2}>
                                        {project.description}
                                    </Typography>
                                    <Box display="flex" justifyContent="space-between">
                                        <StyledButton
                                            variant="contained"
                                            onClick={() => window.open(project.liveLink, "_blank")}
                                        >
                                            Ver o Projeto
                                        </StyledButton>
                                        <StyledButton
                                            variant="contained"
                                            onClick={() => window.open(project.codeLink, "_blank")}
                                        >
                                            Ver o Código
                                        </StyledButton>
                                    </Box>
                                </ProjectContent>
                            </ProjectCard>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </StyledProjects>
    );
};

export default Projects;
