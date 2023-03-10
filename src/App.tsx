import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import { useDebounce } from './useDebounce';
import Item from './Item';
import Paginate from './utils/paginate';
import { Constants } from './utils/constants';
function App() {
  const { delay } = Constants();

  const [search, setSearch] = useState('');
  const [page, setPage] = useState(0);
  const { searchDebounced } = useDebounce(search, delay);
  const url = `https://en.wikipedia.org/w/api.php?action=query&list=search&srlimit=100&format=json&origin=*&srsearch=${searchDebounced}}`;
  const [data, setData] = useState([]);
  const [amountOfPages, setAmountOfPages] = useState(0);
  const fetchData = async () => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data.query.search);
        setAmountOfPages(data.query.search.length / 10);
      });
    setPage(0);
  };
  useEffect(() => {
    if (searchDebounced == '') return;
    fetchData();
  }, [searchDebounced]);
  const handleChange = (e: string, delay: number) => {
    setSearch(e);
  };
  const handlePage = (index: number) => {
    setPage(index);
  };
  const renderPaginationButtons = () => {
    return [...Array(amountOfPages)].map((_, index) => {
      return (
        <button key={index} onClick={() => handlePage(index)}>
          {index + 1}
        </button>
      );
    });
  };
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <input onChange={(e) => handleChange(e.target.value, delay)}></input>
      <h1>Vite + React</h1>
      <div className="card">
        {Paginate(data, page).map((item: any, key: any) => {
          return <Item key={key} {...item} />;
        })}
        {renderPaginationButtons()}
      </div>
    </div>
  );
}

export default App;
