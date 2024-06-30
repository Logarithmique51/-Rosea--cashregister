import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import {
  Box,
  CircularProgress,
  CssBaseline,
  Divider,
  ThemeProvider,
  Typography,
} from '@mui/material';
import './App.css';
import { useEffect, useState } from 'react';
import { theme } from './theme/Theme';
import NavBar from './components/Appbar';
import { useSocket } from './hooks/socketHook';
import MenuButton from './components/buttons/MenuButton';
import PizzaIcon from './assets/twemoji/PizzaIcon';
import TabIcon from './components/buttons/TabIcon';
import ItemCard from './components/cards/ItemCard';
import { BasicPill, TypePill } from './components/pills/BasicPill';
import ItemPill from './components/pills/ItemPill';

// function Hello() {
//   // useSocket({
//   //   type: 'NEW_ORDER',
//   //   callBack: () => {
//   //     console.log('ok');
//   //   },
//   // });

const myarray = new Array(10).fill(null);

interface Pizza {
  id: string;
  title: string;
  price: number;
  slug: string;
  categorie: string;
}

function Hello() {
  const [items, setItems] = useState<Pizza[]>([]);

  const callItem = () => {
    window.electron.ipcRenderer.sendMessage('getPizza');
  };

  window.electron.ipcRenderer.on('getPizza', (args) => {
    setItems(args);
  });

  useEffect(() => {
    callItem();
  }, []);

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
            // mr={6}
          >
            {items.length < 1 ? (
              <Box
                flex={1}
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <CircularProgress size={100} />
              </Box>
            ) : (
              items.map((value) => <ItemCard key={value.slug} item={value} />)
            )}
          </Box>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          maxHeight="100%"
          borderLeft="1px solid #C0C8CC"
          p="20px"
          sx={{
            transition: 'all 0.7s linear',
            flex: {
              xs: 0,
              lg: 1,
            },

            minWidth: {
              xs: 0,
              lg: 350,
            },
          }}
        >
          <Box py="10px">
            <Typography fontWeight="bold" fontSize="20px" letterSpacing={0.5}>
              Détailles de la commande
            </Typography>
          </Box>
          <Box py="10px" display="flex" flexDirection="column" rowGap="10px">
            <BasicPill type={TypePill.Client} value="Invité" />
            <BasicPill type={TypePill.Time} value="05/06/2024 à 19h03" />
            <BasicPill type={TypePill.Order} value="#PON165940" />
          </Box>
          <Divider variant="fullWidth" sx={{ my: '20px' }} />
          <Box display="flex" flexDirection="column" rowGap="20px">
            <ItemPill label={"Pizza l'Américaine"} price="10.90" />
            <Box
              mx="auto"
              my="18px"
              width="50%"
              borderBottom="1px solid #C0C8CC"
            />
            <ItemPill label="Pizza la Norvégienne" price="10.90" />
            <Box
              mx="auto"
              my="18px"
              width="50%"
              borderBottom="1px solid #C0C8CC"
            />
            <ItemPill label="Pizza Reine" price="10.90" />
          </Box>
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
