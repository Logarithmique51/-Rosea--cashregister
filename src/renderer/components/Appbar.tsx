import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import { alpha } from '@mui/material';
import Logo from '../assets/logo.png';

function MyAppBar() {
  return (
    <AppBar position="static">
      <Container maxWidth={false} sx={{ bgcolor: '#171C1F', height: 80 }}>
        <Toolbar
          disableGutters
          sx={{ justifyContent: 'space-between', height: '100%' }}
        >
          <Box
            display="flex"
            columnGap={2}
            justifyContent="center"
            alignItems="center"
            sx={{ userSelect: 'none' }}
          >
            <Typography fontStyle="italic" fontWeight={600} variant="h4">
              Rosea
            </Typography>
            <Box width={25} display="flex">
              <img src={Logo} width="100%" height="auto" alt="ok" />
            </Box>
          </Box>

          <Box
            display="flex"
            columnGap={2}
            justifyContent="center"
            alignItems="center"
          >
            <IconButton
              sx={{
                backgroundColor: '#4C616B',
                borderRadius: '10px',
                width: 48,
                height: 48,
                '&:hover': {
                  backgroundColor: alpha('#4C616B', 0.7),
                },
              }}
            >
              <SettingsOutlinedIcon sx={{ color: '#FEFAF5' }} />
            </IconButton>
            <IconButton
              sx={{
                backgroundColor: '#4C616B',
                borderRadius: '10px',
                width: 48,
                height: 48,
                '&:hover': {
                  backgroundColor: alpha('#4C616B', 0.7),
                },
              }}
            >
              <NotificationsNoneOutlinedIcon sx={{ color: '#FEFAF5' }} />
            </IconButton>
            <Box display="flex" alignItems="center" columnGap={2}>
              <IconButton
                sx={{
                  backgroundColor: '#0C6780',
                  borderRadius: '10px',
                  width: 48,
                  height: 48,
                  '&:hover': {
                    backgroundColor: alpha('#0C6780', 0.7),
                  },
                }}
              >
                <Typography sx={{ color: '#FEFAF5' }} fontWeight="bold">
                  T
                </Typography>
              </IconButton>
              <Box>
                <Typography variant="body1">Teddy Leduc</Typography>
                <Typography variant="body2" color="#4C616B">
                  Gérant
                </Typography>
              </Box>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default MyAppBar;
