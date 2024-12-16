import { Box, Container, Grid, Typography, styled } from "@mui/material";
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
        padding: "20px",
        border: `1px solid ${theme.palette.secondary.contrastText}`,
        borderRadius: "10px",
        backgroundColor: theme.palette.secondary.dark,
        "&:hover": {
            backgroundColor: theme.palette.secondary.light,
        },
    }));

    const CarouselContainer = styled(Box)(({ theme }) => ({
        marginTop: "50px",
        "& .slick-slide img": {
            width: "100%",
            borderRadius: "10px",
            border: `2px solid ${theme.palette.secondary.contrastText}`,
        },
    }));

    const certificates = [
        { src: "/path/to/certificate1.jpg", alt: "Certificado 1" },
        { src: "/path/to/certificate2.jpg", alt: "Certificado 2" },
        { src: "/path/to/certificate3.jpg", alt: "Certificado 3" },
        { src: "/path/to/certificate4.jpg", alt: "Certificado 4" },
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
                {/* Skills Section */}
                <Typography variant="h2" textAlign="center" color="secondary.contrastText" mb={4}>
                    Skills
                </Typography>
                <Grid container spacing={4}>
                    <Grid item xs={6} md={3}>
                        <SkillCard>
                            <Typography variant="h6" color="secondary.contrastText">
                                HTML
                            </Typography>
                        </SkillCard>
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <SkillCard>
                            <Typography variant="h6" color="secondary.contrastText">
                                CSS
                            </Typography>
                        </SkillCard>
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <SkillCard>
                            <Typography variant="h6" color="secondary.contrastText">
                                JavaScript
                            </Typography>
                        </SkillCard>
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <SkillCard>
                            <Typography variant="h6" color="secondary.contrastText">
                                React
                            </Typography>
                        </SkillCard>
                    </Grid>
                </Grid>

                {/* Certifications Carousel */}
                <Typography variant="h2" textAlign="center" color="secondary.contrastText" mt={8} mb={4}>
                    Certificados
                </Typography>
                <CarouselContainer>
    <Slider {...sliderSettings}>
        {certificates.map((certificate, index) => (
            <Box key={index} p={2}>
                <img src={certificate.src} alt={certificate.alt} />
            </Box>
        ))}
    </Slider>
</CarouselContainer>

            </Container>
        </StyledSection>
    );
};

export default Skills;
