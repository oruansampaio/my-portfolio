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
                Minha jornada com a programação começou no curso técnico de Informática para Internet no Senac Guaratinguetá, onde aprendi a criar sites e apps funcionais usando React.js, React Native e Node.js. Durante esse período, também me aprofundei em JavaScript, Python e no uso de bancos de dados como MySQL e Firebase.

No Senac, participei da competição Cria Senac 2024 e cheguei à final com meu projeto Explore — um app que usa geolocalização para mostrar pontos turísticos próximos. Essa experiência me fez perceber minha paixão por criar soluções que agregam na vida prática das pessoas.

Agora, estou cursando Engenharia da Computação na Univesp e sigo explorando novas formas de usar a tecnologia para resolver problemas do mundo real.
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
