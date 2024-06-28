import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { Box, CssBaseline, ThemeProvider, Typography } from '@mui/material';
import './App.css';
import { theme } from './theme/Theme';
import NavBar from './components/Appbar';
import { useSocket } from './hooks/socketHook';
import MenuButton from './components/buttons/MenuButton';
import PizzaIcon from './assets/twemoji/PizzaIcon';
import TabIcon from './components/buttons/TabIcon';
import ItemCard from './components/cards/ItemCard';
import BasicPill from './components/pills/BasicPill';

// function Hello() {
//   // useSocket({
//   //   type: 'NEW_ORDER',
//   //   callBack: () => {
//   //     console.log('ok');
//   //   },
//   // });

function Hello() {
  return (
    <>
      <NavBar />

      {/* main content */}
      <Box height="calc(100% - 80px)" width="100%" display="flex">
        <Box
          maxWidth={1450}
          height="100%"
          width="100%"
          display="flex"
          flexDirection="column"
        >
          <MenuButton
            sx={{ borderBottom: '1px solid #C0C8CC', borderRadius: 0 }}
          />
          <TabIcon />
          <Box
            p={3}
            pt={0}
            height="100%"
            display="flex"
            gap="25px"
            flexWrap="wrap"
            maxHeight="100%"
            overflow="auto"
          >
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
          </Box>
        </Box>
        <Box
          flex={1}
          minWidth={350}
          display="flex"
          flexDirection="column"
          maxHeight="100%"
          borderLeft="1px solid #C0C8CC"
          p={"20px"}
        >
          <BasicPill/>
        </Box>
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
