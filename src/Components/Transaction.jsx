import { Box, Divider, List, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import SingleTransaction from './SingleTransaction';

const Transaction = () => {

    const trans = useSelector(state=>state.trans);
    console.log(trans);

  return (
    <Box>
      <Typography variant='h5' mb={2}>
        Transaction History
      </Typography>

      <Divider></Divider>

      <List>
        {
            trans.map((tran) => (
                <SingleTransaction key={tran.id} data={tran}></SingleTransaction>
            ))
        }
      </List>
      

    </Box>
  )
}

export default Transaction
