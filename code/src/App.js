import React, { useState } from 'react'
import musicData from './data.json'
// import dataStretch from './stretch-goal.json'
import { Header } from './components/Header'
import { Album } from './components/Album'

// console.log(Data.albums.items)
// console.log(DataStretch.playlists.items)
const allData = musicData.albums.items;
// const allStretchData = dataStretch.playlists.items;

export const App = () => {
  const [data, setData] = useState(allData);
  // const [stretchData, setStretchData] = useState(allStretchData);

  return (
    <>
      <Header title="New albums & singles" toChild={data} sendToParent={setData} />

      <section className="albums">
        {data.map((item) => {
          return (
            <div className="album" key={item.id}>
              <Album key={item.id} item={item} />
            </div>
          )
        })}
        {/*
        {stretchData.map((item) => {
          return (
            <div className="album" key={item.id}>
              <Album key={item.id} item={item} />
            </div>
          )
        })}
      */}
      </section>
    </>
  )
}
export default App;