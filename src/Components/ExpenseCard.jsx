import { Box, Card, CardContent, Typography } from '@mui/material'
import React from 'react'

const ExpenseCard = ({income,expense}) => {

  return (
    <Box className=" flex w-full gap-5">
      <Card className=' flex-1 px-[10px] py-[5px]'>
        <CardContent>
            <Typography>
                Income
            </Typography>
            <Typography className=' text-green-800' fontWeight={600} variant='h5'>
                ₹{income.toFixed(3)}
            </Typography>
        </CardContent>
      </Card>
      <Card className=' flex-1  p-[10px]'>
        <CardContent>
            <Typography>
                Expense
            </Typography>
            <Typography className=' text-red-800' fontWeight={600} variant='h5'>
                ₹{expense.toFixed(3)}
            </Typography>
        </CardContent>
      </Card>
    </Box>
  )
}

export default ExpenseCard
