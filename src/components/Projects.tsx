import { Container, Box, Typography, Button } from '@mui/material';
import logo from "../assets/styles/logoAI.png";

const Projects = () => {
    return (
        <Container 
            id="projects"
            maxWidth="lg" 
            sx={{ 
                mt: 4, 
                mb: 4, 
                bgcolor: '#ffffff', 
                borderRadius: '8px', 
                p: 4,
                boxSizing:"border-box"
            }}
        >
            <Box sx={{ textAlign: "center"}}>
                <Typography variant="h4" component="h2" gutterBottom>
                    Projects
                </Typography>

                <Box 
                    sx={{ 
                        display: "flex", 
                        flexDirection: { xs: "column", md: "row" }, 
                        justifyContent: "space-between", 
                        gap: "24px", 
                        padding: "50px 0",
                    }}
                >
                    <Box 
                        sx={{ 
                            width: { xs: "100%", md: "50%" }, 
                            height: { xs: "200px", md: "300px" }, // Height adapts to screen size
                            backgroundImage: `url(${logo})`, 
                            backgroundRepeat: "no-repeat", 
                            backgroundSize: "contain", // Ensures full logo is visible
                            backgroundPosition: "center", // Centers the image
                            borderRadius: '8px',
                            boxSizing: "border-box"
                        }} 
                        role="img" 
                        aria-label="AI Logo Background"
                    />

                    <Box 
                        sx={{ 
                            display: 'flex', 
                            width: { xs: "100%", md: "50%" },
                            flexDirection: 'column', 
                            justifyContent: 'center', 
                            gap: "24px",
                            alignItems: 'center', 
                            borderRadius: '8px', 
                            boxSizing:"border-box",
                            p: 4, 
                            mb: 4, 
                        }}
                    >
                        <Typography variant="h5" gutterBottom>
                            AI Post Generator
                        </Typography>
                        <Typography variant="body1" paragraph>
                            AI Post Generator is a powerful tool that generates engaging social media posts using AI technology. Users can customize their posts by selecting the type of social media platform, tone, and length.
                        </Typography>
                        <Button 
                            variant="contained" 
                            color="primary" 
                            href="https://www.loom.com/share/ae2c6df986854b99bdc4a0e02b81e507?sid=9e80afd5-a7db-4fee-9481-5d4ad88ea7dc" 
                            target="_blank"
                        >
                            Watch Demo Video
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Container>
    );
}

export default Projects;