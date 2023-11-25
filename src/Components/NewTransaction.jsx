import { Box, Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTran } from '../Redux/Slices/transactions';

const NewTransaction = () => {

    const [text, setText] = useState("");
    const [amount, setAmount] = useState("");

    const dis = !text || !amount;
    const dispatch = useDispatch();

    const addTrans = () => {
        dispatch(addTran({
            text,
            amount: parseFloat(amount)
        }));
    }

  return (
    <Box className=" flex flex-col gap-[20px]">
      <Typography mt={'30px'} variant='h5'>
        New Transaction
      </Typography>

      <TextField label="Enter Expense" size='small'
      value={text}
      onChange={(e) => {
        setText(e.target.value);
      }}></TextField>

      <TextField label="Enter Amount" type='number' size='small'
      value={amount}
      onChange={(e) => {
        setAmount(e.target.value);
      }}></TextField>

      <Button variant="contained" disabled={dis}
      onClick={() => {
        addTrans();
      }}>
        Add Transaction
      </Button>
    </Box>
  )
}

export default NewTransaction
