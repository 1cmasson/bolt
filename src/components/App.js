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
  
  // reading data from data.json file
  useEffect(() => {
    const fetchData = async() =>{
      const file = await fetch("data.json")
      .then( response => response.json())
      
      // setting up last index state
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

  // using props from searchbays to set the query for the search
  const searchBays = (query) =>{
    setQuery(query);
  }

  // using props from searchbays to set the direction and order of list for the sort
  const changeOrder = (order, dir) =>{
    setOrderBy(order);
    setOrderDirection(dir);
  }

  //resetting the data to add a bay to the list
  const addBay = (bay) =>{
    let tempBay = data;
    bay.bayId = lastIndex;
    tempBay.unshift(bay);
    setData(tempBay);
    setLastIndex(lastIndex + 1);
  }

  // resetting the data to delete a bay from the list
  const deleteBay = (bay) =>{
    let tempBays = data;
    tempBays = without(tempBays,bay);
    setData(tempBays);
  }

  // this is a toggle button for the drop down menu for the add bays tab
  const toggleForm = () => {
    setFormDisplay(!formDisplay);
  }

  let order; // order of bays 

  let filteredBays = data; // filter used on bays

  // giving values for ascending and descending order for the sort
  if(orderDirection === 'asc'){
    order = 1;
  }else{
    order = -1;
  }

  // sorting and searching in the application
  filteredBays = filteredBays.sort((a,b) => {
    
    //sorting data values
    if(a[orderBy] <
      b[orderBy]){ return -1 * order;}
      else{ return 1 * order;}
  }).filter(item =>{ // searching for query
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
    
}



export default App;