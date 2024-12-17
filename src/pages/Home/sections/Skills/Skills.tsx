import { Box, Container, Typography, styled } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Skills = () => {
    const StyledSection = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.secondary.main,
        padding: "50px 0",
        [theme.breakpoints.up("xs")]: {
            paddingTop: "50px",
        },
        [theme.breakpoints.up("md")]: {
            paddingTop: "100px",
        },
    }));

    const SkillCard = styled(Box)(({ theme }) => ({
        textAlign: "center",
        width: "300px",
        padding: "20px",
        border: `1px solid ${theme.palette.secondary.contrastText}`,
        borderRadius: "10px",
        backgroundColor: theme.palette.secondary.dark,
        "&:hover": {
            backgroundColor: theme.palette.secondary.light,
        },
    }));

    const CarouselContainer = styled(Box)(() => ({
        marginTop: "50px",
        "& .slick-slide": {
            display: "flex",
            justifyContent: "center",
        },
    }));

    const skills = [
        "HTML/CSS",
        "JavaScript",
        "TypeScript",
        "Python",
        "React",
        "React Native",
        "Node.js",
        "Git/GitHub",
    ];

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 960,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <StyledSection>
            <Container maxWidth="lg">
                {/* Skills Carousel */}
                <Typography variant="h2" textAlign="center" color="secondary.contrastText" mb={4}>
                    Habilidades
                </Typography>
                <CarouselContainer>
                    <Slider {...sliderSettings}>
                        {skills.map((skill, index) => (
                            <Box key={index} p={2}>
                                <SkillCard>
                                    <Typography variant="h6" color="secondary.contrastText">
                                        {skill}
                                    </Typography>
                                </SkillCard>
                            </Box>
                        ))}
                    </Slider>
                </CarouselContainer>

                {/* Certifications Carousel */}
                <Typography variant="h2" textAlign="center" color="secondary.contrastText" mt={8} mb={4}>
                    Certificados
                </Typography>
                <CarouselContainer>
                    <Slider {...sliderSettings}>
                        <Box p={2} textAlign="center">
                            <img
                                src=".\src\assets\images\TecnicoInformaticaInternet.png"
                                alt="Certificado 1"
                                style={{ width: "100%", borderRadius: "10px" }}
                            />
                            <Typography variant="h6" color="secondary.contrastText" mt={2}>
                                Diploma: Técnico em Informática para Internet
                            </Typography>
                            <Typography variant="body2" color="secondary.contrastText">
                                Emitido por: Senac
                            </Typography>
                            <Typography variant="body2" color="secondary.contrastText">
                                Data de Emissão: 22/11/2024
                            </Typography>
                        </Box>
                        <Box p={2} textAlign="center">
                            <img
                                src=".\src\assets\images\DesenvolvedorFrontEnd.png"
                                alt="Certificado 2"
                                style={{ width: "100%", borderRadius: "10px" }}
                            />
                            <Typography variant="h6" color="secondary.contrastText" mt={2}>
                                Certificado: Desenvolvedor Front-End
                            </Typography>
                            <Typography variant="body2" color="secondary.contrastText">
                                Emitido por: Senac
                            </Typography>
                            <Typography variant="body2" color="secondary.contrastText">
                                Data de Emissão: 23/12/2023
                            </Typography>
                        </Box>
                        <Box p={2} textAlign="center">
                            <img
                                src=".\src\assets\images\DesenvolvedorBackEnd.png"
                                alt="Certificado 3"
                                style={{ width: "100%", borderRadius: "10px" }}
                            />
                            <Typography variant="h6" color="secondary.contrastText" mt={2}>
                                Certificado: Desenvolvedor Back-End
                            </Typography>
                            <Typography variant="body2" color="secondary.contrastText">
                                Emitido por: Senac
                            </Typography>
                            <Typography variant="body2" color="secondary.contrastText">
                                Data de Emissão: 22/06/2024
                            </Typography>
                        </Box>
                        <Box p={2} textAlign="center">
                            <img
                                src=".\src\assets\images\DesenvolvedorMobile.png"
                                alt="Certificado 4"
                                style={{ width: "100%", borderRadius: "10px" }}
                            />
                            <Typography variant="h6" color="secondary.contrastText" mt={2}>
                                Certificado: Desenvolvedor Mobile
                            </Typography>
                            <Typography variant="body2" color="secondary.contrastText">
                                Emitido por: Udemy
                            </Typography>
                            <Typography variant="body2" color="secondary.contrastText">
                                Data de Emissão: 22/11/2024
                            </Typography>
                        </Box>
                    </Slider>
                </CarouselContainer>
            </Container>
        </StyledSection>
    );
};

export default Skills;
