import {useState, useEffect} from 'react';

import styled from "./App.styled"

import{
    StyledList,
    StyledListItem,
    Mainn
  } from './App.styled'
function App() {
    const[data, setData] = useState([]);

    useEffect(() => {
        fetch('https://mocki.io/v1/03d57db2-2828-4b8d-af8b-10cfa6c537fc')
        .then((res) => res.json())
        .then((res) => {
            setData(res);
        });

    }, []);
    
    return(
        
        <Mainn>
<StyledList>
{data.map((item) => (
<StyledListItem key ={item.imageUrl} url={item.imageUrl}/>
    ))}
</StyledList></Mainn> 
    );

};
export default App;