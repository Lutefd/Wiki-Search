import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

function App() {
  const [search, setSearch] = useState<string>(``);
  const url = `https://en.wikipedia.org/w/api.php?action=query&list=search&srlimit=20&format=json&origin=*&srsearch=${search}}`;
  const [data, setData] = useState<any>([]);
  const fetchData = async () => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data.query.search);
        console.log(search);
      });
  };
  useEffect(() => {
    if (search !== '') fetchData();
  }, [search]);

  const handleChange = (e: string) => {
    setTimeout(() => {
      setSearch(e);
    }, 500);
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
      <input
        onChange={(e) => {
          if (e !== undefined) handleChange(e.target.value);
        }}
      ></input>
      <h1>Vite + React</h1>
      <div className="card">
        {data.map((item: any) => {
          return (
            <div key={item.pageid}>
              <h2>{item.title}</h2>
              <p>{item.snippet}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
