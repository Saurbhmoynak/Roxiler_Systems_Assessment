import React,{useState,useEffect} from 'react'
import './App.css'
import axios from "axios";
import TransactionTable from '../components/TransactionTable.jsx'
import MonthAndSearch from '../components/monthAndSearch.jsx'
import Statistics from '../components/Statistics.jsx'
import BarChart from '../components/barChart.jsx'

function App() {

  const [selectMonth, setSelectedMonth] = useState("March");
  const [selectPages, setSelectedPages] = useState(10);
  const [searchText, setSearchText] = useState("");
  const [transactions, setTransactions] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  
  const getTransactions = async () => {
    try {
      const response = await axios.get(
        `https://roxiler-assignment-backend.vercel.app/api/transactions`,
        {
          params: {
            month: selectMonth,
            search: searchText,
            page: currentPage,
            perPage: selectPages,
          },
        }
      );

      setTransactions(response.data.transactions);
    } catch (error) {
      console.error("Error fetching transactions:", error.message);
    }
  };

  //handling the month change
  const handleMonthChange = (e) => {
    setSelectedMonth(e.target.value);
  };

  //handling the search text change
  const handleSearchTextChange = (e) => {
    setSearchText(e.target.value);
  };

  //handling the page change
  const handlePageChange = (e) => {
    setSelectedPages(e.target.value);
  };

  //handling the search box clear
  const handleClear = () => {
    setSearchText("");
  }

  //handle page next change
  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  //handle page previous change
  const handlePreviousPage = () => {
    if (currentPage > 1)
      setCurrentPage(currentPage - 1);
  };

  // Fetch transactions when component mounts or dependencies change
  useEffect(() => {
    getTransactions();
  }, [selectMonth, searchText, selectPages, currentPage]);

  return (
    <div className="bg-amber-200">
      <div className="flex items-center justify-center p-5">
        {/* White Circle */}
        <div className="w-40 h-40 bg-[#cfffff] rounded-full flex items-center justify-center">
        <p className="text-black font-bold text-xl">
          Transaction
          <br />
          Dashboard
        </p>
        </div>
      </div>

      <MonthAndSearch
        value={searchText}
        onSearchChange={handleSearchTextChange}
        onClear={handleClear}
        selectMonth={selectMonth}
        onMonthChange={handleMonthChange}
      />

      <TransactionTable
        transactions={transactions}
        onNextPage={handleNextPage}
        onPreviousPage={handlePreviousPage}
        selectPages={selectPages}
        onChange={handlePageChange}
        page ={currentPage}
      />

      <div className="bg-amber-200">
        <div className="flex items-center justify-center p-5 gap-4">
           <Statistics selectMonth={selectMonth} />
        </div>
      </div>
      <div className="bg-amber-200">
        <div className="flex items-center justify-center p-5 ">
           <BarChart selectMonth={selectMonth} />
        </div>
      </div>   
    </div>
  )
}

export default App
