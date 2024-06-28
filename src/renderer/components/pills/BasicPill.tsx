import { Box, Typography } from '@mui/material';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import PinOutlinedIcon from '@mui/icons-material/PinOutlined';

export default function BasicPill() {
  return (
    <Box
      sx={{
        border: '1px solid #C0C8CC',
        borderRadius: '10px',
        height: 44,
        padding: '10px',
        display: 'flex',
      }}
    >
      <Box color="#70787D" display="flex" flex={1} gap="5px">
        <PersonOutlineOutlinedIcon />
        <Typography fontWeight="bold">Client</Typography>
      </Box>
      <Box color="#171C1F" display="flex" flex={1} gap="5px">
        <Typography fontWeight="bold" textTransform="uppercase">
          invité
        </Typography>
      </Box>
    </Box>
  );
}
