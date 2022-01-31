import React,{useState} from 'react';
import "./Vehical.css"
import Select from 'react-select'
import {prices,secondoptions,options} from "./LocationData"
import location from "./map.png"

export default function Vehical() {

  const [selectedFromValue, setSelectedFromValue] = useState(null);
  const [, setSelectedToValue] = useState(null);
  const [getPrice, setPrice] = useState(null);

 



//   var result = options.filter(function (o1) {
//     return secondoptions.some(function (o2) {
//         return o1.id === o2.id; // return the ones with equal id
//    });
// });



const handleFromChange = (e) => {
  setSelectedFromValue(e.value);
}

const handleToChange = (e) => {
  setSelectedToValue(e.value);
  for (const pr of prices) {
    if(pr.from === selectedFromValue && pr.to === e.value){
      setPrice(pr.price);
      break;
    }
  }
  
}
  return (
  <div className="container">
<div style={{width:"100%", height: "100%",padding:30 ,justifyContent: "center",alignItems: "center",flexDirection: "row",display: "flex"}}>
  <div className="truckIMG">
    <img src="/images/pngwing5.png" backgroundColor="white" height="60%" width="100%"/>
  </div>
  <div className="truckInfo">
  <div className='Formcontainer'
      >
      <h1 style={{color:"#464646" ,fontSize:"28.8px" ,fontWeight:600}}>Online Truck Booking Made Easy</h1>
       <div className='inbox'>
       <Select
  // value={options.filter(obj => selectedValue.includes(obj.value))} // set selected values
  onChange={handleFromChange} // assign onChange function
  options={options}
/>
</div>
<div className='inbox'>
<Select
  // value={options.filter(obj => selectedValue.includes(obj.value))} // set selected values
  onChange={handleToChange} // assign onChange function
  options={secondoptions}
/>
</div>
<div className="priceContainer">
{getPrice ? 
<>
<h3 style={{fontSize:31, color: "#a6a4a4"}}>Estimated price</h3> <h3 style={{fontSize:25, color: "#a6a4a4"}}> Rs .{getPrice}</h3></>: < p style={{fontSize:25, color: "#a6a4a4"}}>please select destination</p>}
</div>

      </div>
      </div>
</div>
  </div>
  )
};
