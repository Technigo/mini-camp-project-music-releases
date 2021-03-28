import React, { useState } from 'react'
import musicData from './data.json'
import { Header } from './components/Header'
import { Album } from './components/Album'

const allData = musicData.albums.items

export const App = () => {
  const [data, setData] = useState(allData);
  return (
    <>
      <Header toChild={data} sendToParent={setData} />
      <section className="albums">
        {(!data.length)
          ? <div className="empty-state"><h1>Couldn&apos;t find any music..</h1></div>
          : data.map((item) => {
            return (
              <div className="album" key={item.id}>
                <Album key={item.id} item={item} />
              </div>
            )
          })}
      </section>
    </>
  )
}
export default App