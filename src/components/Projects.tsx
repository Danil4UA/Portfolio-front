import { Container, Box, Typography, Button } from '@mui/material';

const Projects = () => {
    return (
        <Container 
            maxWidth="lg" 
            sx={{ 
                mt: 4, 
                mb: 4, 
                bgcolor: '#ffffff', // White background
                borderRadius: '8px', 
                p: 4 // Add padding to the container
            }}
        >
            <Box sx={{ textAlign: 'center'}}>
                <Typography variant="h4" component="h2" gutterBottom>
                    Projects
                </Typography>

                <Box 
                    sx={{ 
                        display: 'flex', 
                        flexDirection: 'column', 
                        justifyContent: 'center', 
                        gap:"24px",
                        alignItems: 'center', 
                        bgcolor: 'white', 
                        borderRadius: '8px', 
                        p: 4, 
                        mb: 4 // Margin bottom for spacing
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
                        href="https://www.loom.com/share/ae2c6df986854b99bdc4a0e02b81e507?sid=9e80afd5-a7db-4fee-9481-5d4ad88ea7dc" // Replace with actual video link
                        target="_blank" // Open in a new tab
                    >
                        Watch Demo Video
                    </Button>
                </Box>
            </Box>
        </Container>
    );
}

export default Projects;