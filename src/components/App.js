import React , {useState, useEffect} from 'react';
import '../styles/App.css';
import AddBays from './AddBays';
import SearchBays from './SearchBays';
import ListBays from './ListBays';

import {without} from 'lodash';


function App(){
  const [data, setData]= useState([]);
  const [lastIndex, setLastIndex] = useState(0);
  const [formDisplay, setFormDisplay] = useState(false);
  const [orderBy, setOrderBy] = useState('time');
  const [orderDirection, setOrderDirection] = useState('des');
  const [query, setQuery] = useState('');
  
  useEffect(() => {
    const fetchData = async() =>{
      const file = await fetch("data.json")
      .then( response => response.json())
      
      let bayIndex = 0;
      const index = file.map( bay => {
        bay.bayId = bayIndex;
        bayIndex++;
        return bayIndex;
      })
    
      setData(file);
      setLastIndex(index.length);
      
    };
    fetchData();
  },[]);

  const searchBays = (query) =>{
    setQuery(query);
  }

  const changeOrder = (order, dir) =>{
    setOrderBy(order);
    setOrderDirection(dir);
  }

  const addBay = (bay) =>{
    let tempBay = data;
    bay.bayId = lastIndex;
    tempBay.unshift(bay);
    setData(tempBay);
    setLastIndex(lastIndex + 1);
  }

  const deleteBay = (bay) =>{
    let tempBays = data;
    tempBays = without(tempBays,bay);
    setData(tempBays);
  }

  const toggleForm = () => {
    setFormDisplay(!formDisplay);
  }

  let order;

  let filteredBays = data;
  if(orderDirection === 'asc'){
    order = 1;
  }else{
    order = -1;
  }

  filteredBays = filteredBays.sort((a,b) => {
    
    if(a[orderBy] <
      b[orderBy]){ return -1 * order;}
      else{ return 1 * order;}
  }).filter(item =>{
      return(
        item['bay']
        .toLowerCase()
        .includes(query.toLowerCase())||
        item['traffic']
        .toLowerCase()
        .includes(query.toLowerCase())
      );
  } );

  return(
    
    <main className="page bg-white" id="petratings">
    <div className="container">
      <div className="row">
        <div className="col-md-12 bg-white">
          <div className="container">
            <AddBays
            formDisplay={formDisplay}
            toggleForm ={toggleForm}
            addBay= {addBay}
            />
            
            <SearchBays
              orderBy = {orderBy}
              orderDirection = {orderDirection}
              changeOrder ={changeOrder}
              searchBays = {searchBays}
            />
            
            <ListBays 
            bays = {filteredBays}
            deleteBay = {deleteBay}
            />

          </div>
        </div>
      </div>
    </div>
  </main>
);
    
};



export default App;