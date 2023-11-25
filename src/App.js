import { Box, Typography } from "@mui/material";
import "./App.css";
import Balance from "./Components/Balance";
import ExpenseCard from "./Components/ExpenseCard";
import NewTransaction from "./Components/NewTransaction";
import Transaction from "./Components/Transaction";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

function App() {

  const trans = useSelector(state=>state.trans);
  console.log("main", trans);

  const [income,setIncome] = useState(0);
  const [expense,setExpense] = useState(0);

  useEffect( () => {
    let inc = 0, exp =0;

    if( trans.length > 0 ) {
      trans.forEach(element => {
        if( element.amount >= 0){
          inc+= element.amount;
        }else{
          exp+= element.amount;
        }
      });
    }
    setIncome(inc);
        setExpense(exp);
    
  },[trans]);

  return (
    <main class="min-h-screen flex flex-col items-center w-full bg-gray-200">

    <div className=" absolute top-2 right-2 text-gray-400">
      Created By Jitendriya Meher
    </div>
      
      <Typography my={'20px'} fontWeight={500} variant="h3" className="text-grey-900 uppercase text-center">
        Expense Tracker
      </Typography>

      <Box className="w-full md:flex md:max-w-5xl bg-gray-100 rounded p-5 gap-8">
        <Box className=" w-full">
          <Balance total={income+expense}></Balance>
          <ExpenseCard income={income} expense={expense}></ExpenseCard>
          <NewTransaction></NewTransaction>
        </Box>
        <Box className=" w-full">
          <Transaction></Transaction>
        </Box>
      </Box>

    </main>
  );
}

export default App;
