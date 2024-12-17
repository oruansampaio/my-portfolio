import { Box, Container, Typography, styled } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Certificado1 from "../../../../assets/images/TecnicoInformaticaInternet.png";
import Certificado2 from "../../../../assets/images/DesenvolvedorFrontEnd.png";
import Certificado3 from "../../../../assets/images/DesenvolvedorBackEnd.png";
import Certificado4 from "../../../../assets/images/DesenvolvedorMobile.png";

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
        width: "200px",
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
        marginLeft: "50px",
        marginRight: "50px",
        "& .slick-slide": {
            display: "flex",
            justifyContent: "center",
        },
    }));

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
                    dots: false,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    dots: false,
                },
            },
        ],
    };

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

    const certifications = [
        {
            image: Certificado1,
            title: "Diploma: Técnico em Informática para Internet",
            issuer: "Senac",
            date: "22/11/2024",
        },
        {
            image: Certificado2,
            title: "Certificado: Desenvolvedor Front-End",
            issuer: "Senac",
            date: "23/12/2023",
        },
        {
            image: Certificado3,
            title: "Certificado: Desenvolvedor Back-End",
            issuer: "Senac",
            date: "22/06/2024",
        },
        {
            image: Certificado4,
            title: "Certificado: Desenvolvedor Mobile",
            issuer: "Senac",
            date: "22/11/2024",
        },
    ];

    return (
        <StyledSection>
            <Container maxWidth="lg">
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

                <Typography variant="h2" textAlign="center" color="secondary.contrastText" mt={8} mb={4}>
                    Certificados
                </Typography>
                <CarouselContainer>
                    <Slider {...sliderSettings}>
                        {certifications.map((cert, index) => (
                            <Box key={index} p={2} textAlign="center">
                                <img
                                    src={cert.image}
                                    alt={cert.title}
                                    style={{ width: "100%", borderRadius: "10px" }}
                                />
                                <Typography variant="h6" color="secondary.contrastText" mt={2}>
                                    {cert.title}
                                </Typography>
                                <Typography variant="body2" color="secondary.contrastText">
                                    Emitido por: {cert.issuer}
                                </Typography>
                                <Typography variant="body2" color="secondary.contrastText">
                                    Data de Emissão: {cert.date}
                                </Typography>
                            </Box>
                        ))}
                    </Slider>
                </CarouselContainer>
            </Container>
        </StyledSection>
    );
};

export default Skills;
