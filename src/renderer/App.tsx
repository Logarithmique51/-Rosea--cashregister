import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { Box, CssBaseline, ThemeProvider, Typography } from '@mui/material';
import './App.css';
import { theme } from './theme/Theme';
import NavBar from './components/Appbar';
import { useSocket } from './hooks/socketHook';
import MenuButton from './components/buttons/MenuButton';
import PizzaIcon from './assets/twemoji/PizzaIcon';
import TabIcon from './components/buttons/TabIcon';

function Hello() {
  useSocket({
    type: 'NEW_ORDER',
    callBack: () => {
      console.log('ok');
    },
  });

  return (
    <>
      <NavBar />
      <Box flexGrow={1}>
        <Box borderBottom={"1px solid #C0C8CC"}>
          <MenuButton/>
        </Box>
        <TabIcon/>
      </Box>
    </>
  );
}

export default function App() {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route path="/" element={<Hello />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}
