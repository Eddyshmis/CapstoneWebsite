import React from 'react'
import Cards from './Cards'
const Home = () => {
  return (
    <>
        <div>Home</div>
        <div className='card_container'>
            <Cards image="./src/assets/SmartBackPackPatent.png" cardTitle="Smart Backpack kr">
                <p>test</p>
            </Cards>
            <Cards image="./src/assets/SmartBackPackPatent.png" cardTitle="Smart Backpack kr">
                <p>test</p>
            </Cards>
            <Cards image="./src/assets/SmartBackPackPatent.png" cardTitle="Smart Backpack kr">
                <p>test</p>
            </Cards>
        </div>
    </>
  )
}

export default Home