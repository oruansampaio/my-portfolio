import { Container, Typography, styled } from "@mui/material";
import CopyrightIcon from '@mui/icons-material/Copyright';

const Footer = () => {
    const StyledFooter = styled("footer")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
        padding: "20px 0",
        marginTop: "auto",
    }));

    const FooterContent = styled(Container)(({ theme }) => ({
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: theme.palette.primary.contrastText,
    }));

    return (
        <StyledFooter>
            <FooterContent maxWidth="lg">
                <Typography variant="body1" display="flex" alignItems="center" mb={1}>
                    <CopyrightIcon fontSize="small" style={{ marginRight: "5px" }} />
                    2024 Ruan Sampaio. Todos os direitos reservados.
                </Typography>
            </FooterContent>
        </StyledFooter>
    );
};

export default Footer;
