import { Box, IconButton, Typography } from '@mui/material';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import { useState } from 'react';

export default function CountInput({
  min,
  max,
  value,
  setValue,
}: {
  min: number;
  max: number;
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
}) {
  const decrease = () => {
    if (value - 1 < min) {
      setValue(min);
    } else {
      setValue((prev) => prev - 1);
    }
  };

  const increase = () => {
    if (value + 1 > max) {
      setValue(max);
    } else {
      setValue((prev) => prev + 1);
    }
  };

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      columnGap={2}
    >
      <IconButton
        sx={{
          backgroundColor: 'transparent',
          border: '1px solid #C0C8CC',
          transition: 'all 0.2s ease-in-out',
          '&:hover': {
            opacity: 0.7,
            backgroundColor: '#FEFAF5',
          },
          '&:active': {
            transform: 'scale(1.2)',
          },
        }}
        onClick={() => decrease()}
      >
        <RemoveOutlinedIcon />
      </IconButton>
      <Typography>{value}</Typography>
      <IconButton
        sx={{
          backgroundColor: '#0C6780',
          color: '#F5FAFD',
          transition: 'all 0.2s ease-in-out',
          '&:hover': {
            opacity: 0.7,
            backgroundColor: '#0C6780',
          },
          '&:active': {
            transform: 'scale(1.2)',
          },
        }}
        onClick={() => increase()}
      >
        <AddOutlinedIcon color="inherit" />
      </IconButton>
    </Box>
  );
}
