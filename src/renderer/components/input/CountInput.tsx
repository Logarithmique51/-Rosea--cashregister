import { Box, IconButton, Typography } from '@mui/material';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import { useState } from 'react';

export default function CountInput({ value = 0 }) {
  const [count, setCount] = useState(value);

  return (
    <Box display="flex" justifyContent="space-between" alignItems="center">
      <IconButton
        sx={{
          backgroundColor: '#FEFAF5',
          border: '1px solid #C0C8CC',
          '&:hover': {
            opacity: 0.7,
            backgroundColor: '#FEFAF5',
          },
        }}
        onClick={() => setCount((prev) => prev - 1)}
      >
        <RemoveOutlinedIcon />
      </IconButton>
      <Typography>{count}</Typography>
      <IconButton
        sx={{
          backgroundColor: '#0C6780',
          color: '#FEFAF5',
          '&:hover': {
            opacity: 0.7,
            backgroundColor: '#0C6780',
          },
        }}
        onClick={() => setCount((prev) => prev + 1)}
      >
        <AddOutlinedIcon color="inherit" />
      </IconButton>
    </Box>
  );
}
