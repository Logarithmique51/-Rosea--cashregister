import {
  Box,
  Button,
  Card,
  FormControl,
  InputBase,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
  makeStyles,
  styled,
} from '@mui/material';
import { useState } from 'react';
import Pizza from '../../assets/pizza/americaine.png';
import CountInput from '../input/CountInput';
import CheckIcon from '../../assets/CheckIcon';

const CustomInput = styled(InputBase)(() => ({
  '& .MuiInputBase-input': {
    borderRadius: 12,
    border: '1px solid #4C616B',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    '&:focus': {
      borderColor: '#80bdff',
      borderRadius: 12,
    },
    '&:hover': {
      borderColor: '#80bdff',
    },
  },
}));

export default function ItemCard() {
  const [age, setAge] = useState(10);
  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <Card
      sx={{
        backgroundColor: '#F5FAFD',
        borderRadius: '12px',
        width: 317,
        paddingX: '18px',
        paddingY: '10px',
        display: 'flex',
        rowGap: '10px',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: 'none',
        border: '1px solid #C0C8CC',
      }}
    >
      <img src={Pizza} height="auto" width={150} alt="product" />
      <Box display="flex" flexDirection="column" rowGap="10px">
        <Box>
          <Typography
            fontSize={16}
            fontWeight={800}
            textTransform="uppercase"
            letterSpacing={0.5}
          >
            La norvegienne
          </Typography>
          <Typography fontSize={16} fontWeight={800} color="#0C6780">
            10.90€
          </Typography>
        </Box>
        <Box>
          <Typography textOverflow="ellipsis">
            Bicyclette à 1 vitesse, pneus 1/2 ballon. Cadre de 52cm...
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', rowGap: '10px' }}>
          <Typography>Taille :</Typography>
          <FormControl fullWidth>
            <Select
              MenuProps={{
                sx: {
                  '& .MuiList-root': {
                    backgroundColor: '#FEFAF5 ',
                  },
                  '& .Mui-selected': {
                    backgroundColor: '#C0C8CC !important',
                  },
                  '& .Mui-selected:hover': {
                    backgroundColor: '#C0C8CC !important',
                  },
                },
              }}
              value={age}
              onChange={handleChange}
              size="small"
              sx={{ borderRadius: '12px' }}
              color="secondary"
              input={<CustomInput />}
            >
              <MenuItem value={10}>22 cm</MenuItem>
              <MenuItem value={20}>35 cm</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box display="flex" justifyContent="">
          <CountInput value={0} />
          <Box flex={1} display="flex" justifyContent="end">
            <Button
              variant="outlined"
              sx={{
                borderRadius: '10px',
                color: '#0C6780',
                borderColor: '#0C6780',
                fontWeight: 'regular',
                "&:hover":{
                  borderColor:"#0c6780"
                }
              }}
              endIcon={<CheckIcon color={"#0C6780"} height={25}/>}
            >
              Ajouter
            </Button>
          </Box>
        </Box>
      </Box>
      <Box />
    </Card>
  );
}
