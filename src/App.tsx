import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import { useDebounce } from './useDebounce';
import Item from './Item';

function App() {
  const [search, setSearch] = useState('');
  const { searchDebounced } = useDebounce(search, 500);

  const url = `https://en.wikipedia.org/w/api.php?action=query&list=search&srlimit=20&format=json&origin=*&srsearch=${searchDebounced}}`;
  const [data, setData] = useState([]);
  const fetchData = async () => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data.query.search);
      });
  };
  useEffect(() => {
    if (searchDebounced == '') return;
    fetchData();
  }, [searchDebounced]);

  const handleChange = (e: string, delay: number) => {
    setSearch(e);
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
      <input onChange={(e) => handleChange(e.target.value, 500)}></input>
      <h1>Vite + React</h1>
      <div className="card">
        {data.map((item: any, key) => {
          return <Item key={key} {...item} />;
        })}
      </div>
    </div>
  );
}

export default App;
