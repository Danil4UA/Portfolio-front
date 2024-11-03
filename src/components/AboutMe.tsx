import { Container, Typography } from '@mui/material';
// import { Box, Chip } from '@mui/material';

const AboutMe = () => {


    return (
        <Container maxWidth="lg" sx={{height:"100vh", maxHeight:"1080px", display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 4 }}>

            <Typography variant="h2" sx={{ fontSize: { xs: '48px', md: '62px' } }}>
                Hello, I'm Daniil Kapkov
            </Typography>
            <Typography variant="h5" sx={{ textAlign: 'center' }}>
                Full-stack JavaScript developer with comprehensive training and a strong foundation in both front-end and back-end technologies.
            </Typography>



        </Container>
    );
}

export default AboutMe;