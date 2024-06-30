import { Box, Divider, Typography } from '@mui/material';
import ImagePizza from '../../assets/pizza/lamericaine.png';

export default function ItemPill({ price, label }) {
  return (
    <Box display="flex" columnGap="15px">
      <Box
        width={47}
        height={47}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <img
          width="100%"
          style={{ objectFit: 'contain' }}
          src={ImagePizza}
          alt=""
          srcSet=""
        />
      </Box>
      <Box display="flex" flexDirection="column" rowGap="5px">
        <Typography fontWeight="bold" fontSize={16}>
          {label}
        </Typography>
        <Typography fontWeight="bold" color="#0C6780" fontSize={16}>
          {price}€
        </Typography>
      </Box>
    </Box>
  );
}
