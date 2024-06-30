import { Box, Typography } from '@mui/material';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import PinOutlinedIcon from '@mui/icons-material/PinOutlined';

enum TypePill {
  Client,
  Time,
  Order,
}

const TranslateType = {
  [TypePill.Client]: {
    label: 'Client',
    ico: <PersonOutlineOutlinedIcon />,
  },
  [TypePill.Time]: {
    label: 'Heure',
    ico: <AccessTimeOutlinedIcon />,
  },
  [TypePill.Order]: {
    label: 'N° Commande',
    ico: <PinOutlinedIcon />,
  },
};

function BasicPill({ type: TypePill, value }) {
  return (
    <Box
      sx={{
        border: '1px solid #C0C8CC',
        borderRadius: '10px',
        minHeight: 44,
        padding: '10px',
        display: 'flex',
      }}
    >
      <Box color="#70787D" display="flex" flex={1} gap="5px">
        {TranslateType[TypePill].ico}
        <Typography fontWeight="bold">
          {TranslateType[TypePill].label}
        </Typography>
      </Box>
      <Box color="#171C1F" display="flex" flex={1} gap="5px">
        <Typography fontWeight="bold" textTransform="uppercase">
          {value}
        </Typography>
      </Box>
    </Box>
  );
}

export { BasicPill, TypePill };
