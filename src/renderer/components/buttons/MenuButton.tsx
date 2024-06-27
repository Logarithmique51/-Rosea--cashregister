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
import { Typography, styled } from '@mui/material';

const menu = [
  {
    icon: <GridViewIcon />,
    label: 'Général',
    value: 'general',
  },
  {
    icon: <MenuIcon />,
    label: 'Menu',
    value: 'menu',
  },
  {
    icon: <LocalMallOutlinedIcon />,
    label: 'Commandes',
    value: 'order',
  },
  {
    icon: <PersonOutlineOutlinedIcon />,
    label: 'Clients',
    value: 'user',
  },
  {
    icon: <SettingsOutlinedIcon />,
    label: 'Parametres',
    value: 'settings',
  },
];

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  [`&`]: {
    padding: 20,
    paddingInline: 25,
    width: '100%',
  },
  [`& .${toggleButtonGroupClasses.grouped}`]: {
    margin: theme.spacing(0.5),
    marginRight: 20,
    border: '1px solid #40484C',
    paddingLeft: 18,
    paddingRight: 18,
    paddingTop: 10,
    paddingBottom: 10,
    opacity: '60%',
    borderRadius: 6,
    columnGap: 10,
    textTransform: 'none',
    backgroundColor: 'transparent',
    boxShadow: 'none',
    transition: 'box-shadow 0.3s ease-in-out',
    [`& .${toggleButtonGroupClasses.disabled}`]: {
      border: 0,
    },
  },
  [`& .Mui-selected`]: {
    color: '#0C6780',
    borderColor: '#0C6780',
    backgroundColor: 'transparent !important',
    // boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
    opacity: '100%',
    [`& svg`]: {
      color: '#0C6780',
    },
    [`& p`]: {
      color: '#0C6780',
    },
  },
}));

export default function MenuButton({sx}) {
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
      sx={sx}
      size="small"
      value={alignment}
      exclusive
      onChange={handleAlignment}
      aria-label="text alignment"
    >
      {menu.map((item) => (
        <ToggleButton value={item.value} key={item.value} aria-label="centered">
          {item.icon}
          <Typography fontSize={14} fontWeight="bold" letterSpacing={0.5}>
            {item.label}
          </Typography>
        </ToggleButton>
      ))}
    </StyledToggleButtonGroup>
  );
}
