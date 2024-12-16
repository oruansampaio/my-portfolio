import { Box, Container, Grid, Typography, styled } from "@mui/material";

const About = () => {
    const StyledAbout = styled("section")(({ theme }) => ({
        backgroundColor: theme.palette.background.default,
        padding: "60px 0",
        color: theme.palette.text.primary,
    }));

    const StyledTitle = styled(Typography)(({ theme }) => ({
        fontSize: "2.5rem",
        fontWeight: 600,
        color: theme.palette.primary.main,
        marginBottom: "20px",
        textAlign: "center",
    }));

    const StyledDescription = styled(Typography)(({ theme }) => ({
        fontSize: "1.2rem",
        lineHeight: 1.8,
        textAlign: "center",
        marginBottom: "40px",
        [theme.breakpoints.up("md")]: {
            textAlign: "justify",
        },
    }));

    return (
        <StyledAbout>
            <Container maxWidth="lg">
                <StyledTitle variant="h2">Sobre Mim</StyledTitle>
                <StyledDescription>
                    Olá! Meu nome é Ruan Sampaio e sou desenvolvedor web e mobile com foco em criar soluções tecnológicas eficientes e elegantes. 
                    Minha paixão pela programação começou no ensino técnico e, desde então, venho me especializando em diferentes tecnologias e frameworks.
                    Além disso, tenho experiência com projetos que vão desde aplicações interativas a soluções complexas utilizando frameworks modernos.
                </StyledDescription>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                        <Box display="flex" flexDirection="column" alignItems="center">
                            <Typography variant="h5" fontWeight={600}>
                                Experiência
                            </Typography>
                            <Typography variant="body1" mt={2} textAlign="center">
                                Desenvolvedor com experiência em React, React Native, Node.js e outras tecnologias modernas, 
                                criando interfaces de usuário intuitivas e experiências fluídas.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box display="flex" flexDirection="column" alignItems="center">
                            <Typography variant="h5" fontWeight={600}>
                                Missão
                            </Typography>
                            <Typography variant="body1" mt={2} textAlign="center">
                                Minha missão é ajudar pessoas e empresas a resolver problemas utilizando a tecnologia, sempre focando 
                                em inovação, desempenho e usabilidade.
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </StyledAbout>
    );
};

export default About;
