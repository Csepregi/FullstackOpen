import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios'
import Filter from './components/Filter'

function App() {

  const [ datas, setCountries] = useState([]);
 // const [languages, setLanguages] = useState([]);
  const [searchCountry, setSearchCountry] = useState('');
  //const [query, setQuery] = useState(query);

  // useEffect(() => {
  //   axios
  //     .get('https://restcountries.eu/rest/v2/all')
  //     .then(response => {
  //       setPersons(response.data)
  //     })
  // }, [])
  useEffect(() => {
    const fetchData = async () => {
    const result = await axios(
      `https://restcountries.eu/rest/v2/name/${searchCountry}`
    );
    setCountries(result.data);
    //setLanguages(result.data.languages);
    console.log(result.data)
    };
    
    fetchData()
  }, [searchCountry]);


  const displayCountries = searchCountry === ''
  ? datas
  : datas.filter((data) => data.name.toLowerCase().includes(searchCountry.toLowerCase()));

  const rows = () => displayCountries.map(data =>
    <li key={data.name}>{data.name}</li>
  )
  

  const handleSearchInput = (e) => {
    setSearchCountry(e.target.value);
  }

  
  return (
    <div className="App">
     <Filter value={searchCountry} handleSearch={handleSearchInput}/> 
      <ul>
      {rows()}
    </ul>
    </div>
  );
}

export default App;
