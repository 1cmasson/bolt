import React ,{useState} from 'react';
import {FaPlus} from 'react-icons/fa';

function AddBays(props){
    // states for each input in add bays drop down form
    const[bay, setBay] = useState('');
    const[traffic, setTraffic] = useState('');
    const[time, setTime] = useState('');
    const[lastServiced, setService] = useState('');

    // handle event to submit form
    const handleSubmit = (e) =>{
      //submitting form
      e.preventDefault();
      let tempBay ={
        bay: bay,
        traffic: traffic,
        time: time,
        lastServiced: lastServiced,
      }
      
      props.addBay(tempBay);
      // empting out the form after being completed
      setBay('');
      setTraffic('');
      setTime('');
      setService('');

    }
    
    

    return (
        <div className={
            "card textcenter mt-3 " + 
            (props.formDisplay ? '':'add-bay')
            //this is to drop down the menu based on a click the add bays tab
        }>
          <div 
          className="bay-addheading card-header bg-primary text-white"
          onClick ={props.toggleForm}
          >
            <FaPlus/> Add Bay
          </div>

          <div className="card-body">
            <form id="bayForm" noValidate
            onSubmit={handleSubmit}>
              <div className="form-group form-row">
                <label
                  className="col-md-2 col-form-label text-md-right"
                  htmlFor="bayNumber"
                  
                >
                  Bay Number
                </label>
                <div className="col-md-10">
                  <input
                    type="text"
                    className="form-control"
                    name="bay"
                    placeholder="Ex: 01-002 or Z8-296"
                    value = {bay}
                    onChange = {(e) => setBay(e.target.value)}
                  />
                </div>
              </div>

              <div className="form-group form-row">
                <label
                  className="col-md-2 col-form-label text-md-right"
                >
                  Traffic
                </label>
                <div className="col-md-10">
                <select 
                className="form-control" 
                id="exampleFormControlSelect2"
                name = "traffic"
                value={traffic}
                onChange = {(e) => setTraffic(e.target.value)}
                >
                    <option value="" disabled selected hidden>Choose Traffic...</option>
                    <option>Low</option>
                    <option>Medium</option>
                    <option>High</option>
                </select>    
                </div>
              </div>

              <div className="form-group form-row">
                <label
                  className="col-md-2 col-form-label text-md-right"
                >
                  Time 
                </label>
                <div className="col-md-05">
                <input 
                type="number" 
                min="0"  
                max ="180"
                className="form-control" 
                placeholder="Minutes"
                name = "time"
                value={time}
                onChange = {(e) => setTime(e.target.value)}
                ></input>    
                </div>
              </div>

              <div className="form-group form-row">
                <label
                  className="col-md-2 col-form-label text-md-right"
                  htmlFor="bayDate"
                >
                  Last Serviced
                </label>
                <div className="col-md-4">
                  <input
                    type="date"
                    className="form-control"
                    name="lastServiced"
                    id="bayDate"
                    value={lastServiced}
                    onChange = {(e) => setService(e.target.value)}
                  />
                </div>
              </div>

            

              <div className="form-group form-row mb-0">
                <div className="offset-md-2 col-md-10">
                  <button
                    type="submit"
                    className="btn btn-primary d-block ml-auto"
                  >
                    Add Bay
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
    );
}

export default AddBays;