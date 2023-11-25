import { Box, Typography } from '@mui/material'
import React from 'react'

const Balance = ({total}) => {
  return (

    <Box>
      
      <Typography fontSize={"25px"} mb={"20px"}>
        Balance : {(total >= 0) ? `₹${total.toFixed(3)}` :`- ₹${-total.toFixed(3)}`}
      </Typography>
    </Box>
  )
}

export default Balance
