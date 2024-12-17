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

    // Atualizando o array de certificados
    const certificates = [
        {
            type: "Diploma",
            name: "Técnico em Informática para Internet",
            issuer: "Senac",
            date: "22/11/2024",
            src: "./src/assets/images/tecnicoInformaticaInternet.png",
            alt: "Certificado 1",
        },
        {
            type: "Certificado",
            name: "Desenvolvedor Front-End",
            issuer: "Senac",
            date: "23/12/2023",
            src: "./src/assets/images/desenvolvedorFrontEnd.png",
            alt: "Certificado 2",
        },
        {
            type: "Certificado",
            name: "Desenvolvedor Back-End",
            issuer: "Senac",
            date: "22/06/2024",
            src: "./src/assets/images/desenvolvedorBackEnd.png",
            alt: "Certificado 3",
        },
        {
            type: "Certificado",
            name: "Desenvolvedor Mobile",
            issuer: "Senac",
            date: "22/11/2024",
            src: "./src/assets/images/desenvolvedorMobile.png",
            alt: "Certificado 4",
        },
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
                    Diplomas e Certificados
                </Typography>
                <CarouselContainer>
                    <Slider {...sliderSettings}>
                        {certificates.map((certificate, index) => (
                            <Box key={index} p={2} textAlign="center">
                                <img
                                    src={certificate.src}
                                    alt={certificate.alt}
                                    style={{ width: "100%", borderRadius: "10px" }}
                                />
                                <Typography variant="h6" color="secondary.contrastText" mt={2}>
                                    {certificate.type}: {certificate.name}
                                </Typography>
                                <Typography variant="body2" color="secondary.contrastText">
                                    Emitido por: {certificate.issuer}
                                </Typography>
                                <Typography variant="body2" color="secondary.contrastText">
                                    Data de Emissão: {certificate.date}
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
