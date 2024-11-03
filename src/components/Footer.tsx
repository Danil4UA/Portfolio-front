import { Box, Container, Typography, Link, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
    return (
        <Box component="footer" id="footer" sx={{ py: 3, px: 2, mt: 'auto', backgroundColor: '#f5f5f5' }}>
            <Container maxWidth="md" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                    Contact me
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 1 }}>
                    <IconButton
                        component={Link}
                        href="https://github.com/Danil4UA"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                    >
                        <GitHubIcon />
                    </IconButton>
                    <IconButton
                        component={Link}
                        href="https://www.linkedin.com/in/daniil-kapkov-7b9243281/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                    >
                        <LinkedInIcon />
                    </IconButton>
                    <IconButton
                        component={Link}
                        href="mailto:danil.kapkov20@gmail.com"
                        aria-label="Email"
                    >
                        <EmailIcon />
                    </IconButton>
                </Box>
                <Typography variant="body2" sx={{ color: 'text.secondary', mt: 2 }}>
                    © 2024 Daniil Kapkov
                </Typography>
            </Container>
        </Box>
    );
}

export default Footer;