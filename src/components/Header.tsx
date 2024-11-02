import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

function Header() {
    return (
        <AppBar position="static" sx={{ backgroundColor: '#1976d2' }}>
          <Toolbar>
            {/* Логотип или Имя */}
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Daniil Kapkov
            </Typography>
    
            {/* Ссылки на GitHub, LinkedIn, Portfolio */}
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Button color="inherit" href="https://github.com/Danil4UA" target="_blank">
                GitHub
              </Button>
              <Button color="inherit" href="https://www.linkedin.com/in/daniil-kapkov-7b9243281/" target="_blank">
                LinkedIn
              </Button>
              <Button color="inherit" href="#projects">
                Projects
              </Button>
              <Button color="inherit" href="#contact">
                Contact
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
      );
}

export default Header;