import { Container, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Box, IconButton } from '@mui/material';

const AboutMe = () => {
    return (
        <Container 
            maxWidth="lg" 
            sx={{
                height: "100vh", 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'center', 
                alignItems: 'center', 
                gap: 4 
            }}
        >
            <Typography variant="h2" sx={{ fontSize: { xs: '48px', md: '62px', textAlign:"center"} }}>
                Hello, I'm Daniil Kapkov
            </Typography>
            <Typography variant="h5" sx={{ textAlign: 'center' }}>
                Full-stack JavaScript developer with comprehensive training and a strong foundation in both front-end and back-end technologies.
            </Typography>

            {/* Social Media Icons Bar */}
            <Box 
                sx={{ 
                    display: 'flex', 
                    justifyContent: 'center', 
                    alignItems: 'center', 
                    mt: 4, 
                    p: 2, 
                    bgcolor: 'grey.100', 
                    borderRadius: '8px',
                    gap:"30px"
                }}
            >
                <IconButton 
                    href="https://github.com/your-username" 
                    target="_blank" 
                    aria-label="GitHub"
                    sx={{ color: 'black' }}
                >
                    <GitHubIcon fontSize="large" />
                </IconButton>
                <IconButton 
                    href="https://linkedin.com/in/your-username" 
                    target="_blank" 
                    aria-label="LinkedIn"
                    sx={{ color: '#0e76a8' }}
                >
                    <LinkedInIcon fontSize="large" />
                </IconButton>
                <IconButton 
                    href="https://twitter.com/your-username" 
                    target="_blank" 
                    aria-label="Twitter"
                    sx={{ color: '#1DA1F2' }}
                >
                    <TwitterIcon fontSize="large" />
                </IconButton>
            </Box>
        </Container>
    );
}

export default AboutMe;