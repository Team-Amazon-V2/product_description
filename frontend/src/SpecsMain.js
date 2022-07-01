import './SpecsMain.css';
import React, { useState, useEffect } from 'react';

function SpecsMain() {
  const [specsData, setSpecsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  fetch('http://localhost:3008/specs/B09V3HN1KC')
  .then ((res) => res.json())
  .then ((data) => { 
    setSpecsData(data)
    setLoading(false)
  })
});
 if (loading) {
  return <h1>Loading.....</h1>
 }

  return (
    <div className="tecspecTable">
      <h1 class="tableTitle">Technical Details</h1>
      <table class="a-bordered">
      <tr>
        <td class="specsCategory">Product Dimesions</td>
        <td class="specsValues">{specsData[0].product_dimensions}</td>
      </tr>
      <tr>
        <td class="specsCategory">Item Weight</td>
        <td class="specsValues">{specsData[0].item_weight}</td>
      </tr>
      <tr>
        <td class="specsCategory">Manufacturer</td>
        <td class="specsValues">{specsData[0].manufacturer_name}</td>
      </tr>
      <tr>
        <td class="specsCategory">ASIN</td>
        <td class="specsValues">{specsData[0].asin_id}</td>
      </tr>
      <tr>
        <td class="specsCategory">Country of Origin</td>
        <td class="specsValues">{specsData[0].country}</td>
      </tr>
      <tr>
        <td class="specsCategory">Item model number</td>
        <td class="specsValues">{specsData[0].model_number}</td>
      </tr>
      <tr>
        <td class="specsCategory">Batteries</td>
        <td class="specsValues">{specsData[0].batteries}</td>
      </tr>
      <tr>
        <td class="specsCategory">Date First Available</td>
        <td class="specsValues">{specsData[0].date_available}</td>
      </tr>
      </table>
      
<h2 class="box-info">Whats in the box</h2>
{
  specsData[0].box_info.map((elem) => {
    return (
      <li class="box-item"><span>{elem} </span></li>
    )
  })}
  
    </div>
  );
}

export default SpecsMain;
