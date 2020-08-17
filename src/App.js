import React, {useState, useEffect} from 'react';
import BayList from './components/BayList';
//import CurrentBay from './components/CurrentBay';
import './App.css';
import 'antd/dist/antd.css';
import {Layout} from 'antd';
const{Sider, Header , Footer, Content} = Layout;




function App(){
  const [data, setData]= useState([]);
  useEffect(() => {
    const fetchData = async() =>{
      const result = await fetch("data.json")
      .then( response => response.json());
      setData(result);
    };
    fetchData();
  },[]);

  return(
    
    //<CurrentBay/>
    <Layout className = "layout"  >
      <Header className ="header" style = {{backgroundColor:"green"}}>NavBar</Header>
      <Layout >
        
        <Sider width ="300" className ="sider"> <BayList bays={data}/></Sider>
        <Content className ="content" style = {{backgroundColor:"purple"}}>Hello WOrld</Content>
      </Layout>
      <Footer style = {{backgroundColor:"green"}}><h1>extra info</h1></Footer>
    </Layout>
  );
}

export default App;