import React from 'react';
import {Card} from 'antd';
import "antd/dist/antd.css";

function BayList(props){
    

    return (
        <div>
            {props.bays.map( item => (
                <div key={item.id}>
                    <Card  title= {<h1>Bay: {item.aisle} | {item.bay}</h1>}>
                        <h4>Was Bay Set To POG? {item.answer1}</h4>
                        <h4>Overhead Organized? {item.answer2}</h4>
                        <h4>Ones And Outs Packed Down? {item.answer3}</h4>
                        <h4>Is Bay Completed For The Week? {item.done}</h4>
                    </Card>
                </div>
                
            ))}
        </div>
    )

}

export default BayList;