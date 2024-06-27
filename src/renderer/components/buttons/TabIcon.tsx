import * as React from 'react';

import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup, {
  toggleButtonGroupClasses,
} from '@mui/material/ToggleButtonGroup';
import GridViewIcon from '@mui/icons-material/GridView';
import MenuIcon from '@mui/icons-material/Menu';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { Box, Typography, colors, styled } from '@mui/material';
import PlateIcon from '../../assets/twemoji/PlateIcon';
import BooksIcon from '../../assets/twemoji/BooksIcon';
import PizzaIcon from '../../assets/twemoji/PizzaIcon';
import DrinkIcon from '../../assets/twemoji/DrinkIcon';
import DessertIcon from '../../assets/twemoji/DessertIcon';

const menu = [
  {
    icon: <BooksIcon />,
    label: 'Tout',
    value: 'all',
    subvalue: '59 articles',
  },
  {
    icon: <PlateIcon />,
    label: 'Menus',
    value: 'menus',
    subvalue: '3 articles',
  },
  {
    icon: <PizzaIcon />,
    label: 'Pizzas',
    value: 'pizzas',
    subvalue: '20 articles',
  },
  {
    icon: <DrinkIcon />,
    label: 'Boissons',
    value: 'drinks',
    subvalue: '30 articles',
  },
  {
    icon: <DessertIcon />,
    label: 'Desserts',
    value: 'desserts',
    subvalue: '6 articles',
  },
];

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  [`&`]: {
    padding: 20,
    paddingInline: 25,
    width: '100%',
  },
  [`& .${toggleButtonGroupClasses.grouped}`]: {
    marginRight: 20,
    border: '1px solid #40484C',
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 6,
    columnGap: 10,
    textTransform: 'none',
    // fontWeight: 500,
    backgroundColor: 'transparent',
    // boxShadow: '0px 1px 4px 0px rgba(0, 0, 0, 0.25)',
    color: '#171C1F',
    [`& .${toggleButtonGroupClasses.disabled}`]: {
      border: 0,
    },
  },
  [`& .Mui-selected`]: {
    color: '#0C6780',
    borderColor: '#0C6780',
    backgroundColor: '#E8FDFD',
    [`& svg`]: {
      color: '#0C6780',
    },
    [`& p`]: {
      color: '#171C1F',
    },
  },
}));

export default function TabIcon() {
  const [alignment, setAlignment] = React.useState<string | null>(
    menu[0].value,
  );

  const handleAlignment = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string | null,
  ) => {
    if (newAlignment === null) return;
    setAlignment(newAlignment);
  };

  return (
    <StyledToggleButtonGroup
      size="small"
      value={alignment}
      exclusive
      onChange={handleAlignment}
      aria-label="text alignment"
    >
      {menu.map((item) => (
        <ToggleButton value={item.value} key={item.value} aria-label="centered">
          <Box display="flex">
            <Box display="flex" flexDirection="column" alignItems="start">
              <Typography
                color="#171C1F"
                fontSize={14}
                fontWeight="bold"
                letterSpacing={0.5}
              >
                {item.label}
              </Typography>
              <Typography color="#70787D" fontSize={11}>
                {item.subvalue}
              </Typography>
            </Box>
          </Box>
          <Box
            width={34}
            height={34}
            bgcolor="#FFFFFF"
            borderRadius={35}
            border="1px solid #70787D"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Box width={16} height={16}>
              {item.icon}
            </Box>
          </Box>
        </ToggleButton>
      ))}
    </StyledToggleButtonGroup>
  );
}
