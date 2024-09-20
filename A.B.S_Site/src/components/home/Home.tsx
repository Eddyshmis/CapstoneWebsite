import React, { useState } from "react";
import Cards from "./Cards";
import Table from "react-bootstrap/Table";
import Collapse from "react-bootstrap/Collapse";
import placeHolderImage from "../../assets/PlaceHolder.png";
import Reason from "../reason/Reason";

const Home = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="jumbotron center">
        <div>
            
            <div className="acronym_title" onMouseOver={() => setOpen(true)}>
              <h1 className="display-4">A</h1>
              <Collapse in={open} dimension="width">
                <p className="display-4">uto</p>
              </Collapse>
              <h1 className="display-4">B</h1>
              <Collapse in={open} dimension="width">
                <p className="display-4">ackpack</p>
              </Collapse>
              <h1 className="display-4">S</h1>
              <Collapse in={open} dimension="width">
                <p className="display-4">ystem</p>
              </Collapse>
            </div>
        </div>
        
        <div className="center">
            <img
              src={placeHolderImage}
              alt="place holder image"
              className="img-fluid"
            />
        </div>

        <p className="lead center document-text">
          Our idea is to design an affordable, high-tech, and effective
          replacement for the modern, everyday backpack. We plan on doing this
          by adding unexplored ideas to help the user stay organized, improve
          daily life, and improve their comfort.
        </p>
      </div>


      <Reason></Reason>
      <div className="center">
        <h2 className="display-6 title-1 text-left">Patents we’ve looked at</h2>
      </div>

      <div className="card_container">
        <Cards
          image="./src/assets/SmartBackPackPatent.png"
          cardTitle="Smart Backpack"
          linkSource="https://patents.google.com/patent/KR101923015B1/en?oq=KR+Patent+%23KR101923015B1"
        >
          <Table>
            <thead>
              <tr>
                <th>Pros</th>
                <th>Cons</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Comprehensive connectivity</td>
                <td>Potential for high cost</td>
              </tr>
              <tr>
                <td>Device charging</td>
                <td>Complexity</td>
              </tr>
              <tr>
                <td>Multiple sensors</td>
                <td>Bulkiness</td>
              </tr>
            </tbody>
          </Table>
        </Cards>
        <Cards
          image="./src/assets/SmartBackpackWithPressureSensors.png"
          cardTitle="Smart BackpackWith Pressure Sensors"
          linkSource="https://patents.google.com/patent/KR20210102680A/en?oq=Korean+Patent+%23KR20210102680A"
        >
          <Table>
            <thead>
              <tr>
                <th>Pros</th>
                <th>Cons</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Health monitoring</td>
                <td>Increased complexity</td>
              </tr>
              <tr>
                <td>Back support</td>
                <td>Potential for higher cost</td>
              </tr>
              <tr>
                <td>Vibration units for relief</td>
                <td>Battery dependency</td>
              </tr>
            </tbody>
          </Table>
        </Cards>
        <Cards
          image="./src/assets/BagForDispersionOfWeight.png"
          cardTitle="Bag for dispersion of weight"
          linkSource="https://patents.google.com/patent/KR101940703B1/en?oq=Korean+Patent+%23KR101940703B1"
        >
          <Table>
            <thead>
              <tr>
                <th>Pros</th>
                <th>Cons</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Comprehensive connectivity</td>
                <td>Potential for high cost</td>
              </tr>
              <tr>
                <td>Device charging</td>
                <td>Complexity</td>
              </tr>
              <tr>
                <td>Multiple sensors</td>
                <td>Bulkiness</td>
              </tr>
            </tbody>
          </Table>
        </Cards>
        <Cards
          image="./src/assets/Electronic Backpack.png"
          cardTitle="Electronic Backpack"
          linkSource="https://patents.google.com/patent/US20210015244A1/en?oq=US+Patent+%23+US20210015244A1"
        >
          <Table>
            <thead>
              <tr>
                <th>Pros</th>
                <th>Cons</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Hands-free notifications </td>
                <td>Increased power consumption</td>
              </tr>
              <tr>
                <td>built -in power supply</td>
                <td>Potential distraction</td>
              </tr>
              <tr>
                <td>Task management</td>
                <td>Durability concerns</td>
              </tr>
            </tbody>
          </Table>
        </Cards>
      </div>
    </>
  );
};

export default Home;
