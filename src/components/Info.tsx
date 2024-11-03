import { Container, Box, Typography, Chip } from '@mui/material';

const Info = () => {
    const skills = [
        "JavaScript", "TypeScript", "SQL", "React", "Node.js", 
        "Express", "RESTful APIs", "MySQL", "MongoDB", 
        "PostgreSQL", "Git", "Responsive Design"
    ];

    return (
        <Container maxWidth="lg" sx={{height:"100vh",maxHeight:"1080px", display:"flex", flexDirection:"column", justifyContent:"center", mt: 4, mb: 4, gap:"50px" }}>
            <Box sx={{ textAlign: 'center', mb: 4 }}>
                <Typography variant="h3" gutterBottom sx={{paddingBottom:"24px"}}>
                    About me
                </Typography>
                <Typography variant="h6" color="textSecondary">
                    Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology.
                </Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: 4 }}>
                <Box sx={{ flex: 1, fontSize: '1.5rem' }}>
                    <Typography variant="body1" sx={{fontSize:"18px", lineHeight:"40px"}}>
                        Full-stack JavaScript developer with comprehensive training and a strong foundation in both front-end and back-end technologies, with a background in computer science. Hands-on experience with various JavaScript frameworks and libraries, enabling the creation of dynamic and responsive web applications.
                    </Typography>
                </Box>
                <Box sx={{ flex: 1, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                    {skills.map((skill) => (
                        <Chip 
                            key={skill}
                            label={skill} 
                            variant="outlined" 
                            sx={{ fontSize: '1.3rem' }} 
                        />
                    ))}
                </Box>
            </Box>
        </Container>
    );
}

export default Info;