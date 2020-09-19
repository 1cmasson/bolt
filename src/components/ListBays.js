import React from 'react';
import Moment from 'react-moment'
import {FaTimes} from 'react-icons/fa';

function ListBays(props){
    
    
    
    return (
        <div className="appointment-list item-list mb-3">
            {props.bays.map(bay => (
                <div className="bay-item col media py-3" key ={bay.bayId}>
                <div className="mr-3">
                    <button className="bay-delete btn btn-sm btn-danger"
                        onClick = {()=> props.deleteBay(bay)}
                    >
                        <FaTimes/>
                    </button>
                </div>

                <div className="bay-info media-body">
                    <div className="bay-head d-flex">
                    <span className="apt-name">{bay.bay}</span>
                    <span className="ml-auto">
                    <span className="label-item">Last Serviced: </span>
                        <Moment fromNow ago>{bay.lastServiced}</Moment>
                    </span>
                </div>

                    <div className="owner-name">
                    <span className="label-item">Traffic: </span>
                    <span>{bay.traffic}</span>
                    </div>
                    <div className="owner-name">
                    <span className="label-item">Time: </span>
                    <span>{bay.time}</span>
                    </div>
                    
                </div>
                </div>

            ))}
            
        </div>        
    );
}

export default ListBays;