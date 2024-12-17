import { Box, Button, Container, Grid, Typography, styled } from "@mui/material";
import ExploreImage from "../../../../assets/images/projetoExplore.png";

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
            image: ExploreImage,
            title: "Aplicativo Explore",
            description:
                "Projeto finalista da competição CRIA Senac 2024. O Explore é o protótipo de um aplicativo de rede social que visa aproximar o usuário das pessoas, locais e eventos próximos a sua localização.",
            links: [
                {
                    label: "Ver o Projeto",
                    url: "https://www.behance.net/gallery/202163131/EXPLORE-Crie-Conexoes-Com-O-Seu-Mundo",
                },
                {
                    label: "Ver a Competição",
                    url: "https://www.instagram.com/senac.saomiguel/reel/C-_I1yopk0u/",
                },
            ],
        },
        // Adicione mais projetos aqui no mesmo formato
    ];

    return (
        <StyledProjects>
            <Container maxWidth="lg">
                <Typography variant="h2" textAlign="center" color="text.primary" mb={4}>
                    Projetos
                </Typography>
                <Grid container spacing={4}>
                    {projects.map((project, index) => (
                        <Grid item xs={12} md={4} key={index}>
                            <ProjectCard>
                                <ProjectImage src={project.image} alt={project.title} />
                                <ProjectContent>
                                    <Typography variant="h6" color="text.primary" mb={1}>
                                        {project.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" mb={2}>
                                        {project.description}
                                    </Typography>
                                    <Box display="flex" justifyContent="space-between">
                                        {project.links.map((link, linkIndex) => (
                                            <StyledButton
                                                key={linkIndex}
                                                variant="contained"
                                                onClick={() => window.open(link.url, "_blank")}
                                            >
                                                {link.label}
                                            </StyledButton>
                                        ))}
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
