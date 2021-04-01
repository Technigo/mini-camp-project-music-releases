import React, { useState } from 'react'
import musicData from './data.json'
import { Header } from './components/Header'
import { Album } from './components/Album'
import { EmptyState } from './components/EmptyState'

export const App = () => {
  const [data, setData] = useState(musicData.albums.items);
  return (
    <>
      <Header toChild={data} sendToParent={setData} />
      <section className="albums">
        {(!data.length)
          ? <EmptyState message="No music found.." />
          : data.map((item) => {
            return (
              <div className="album" key={item.id}>
                <Album
                  key={item.id}
                  item={item} />
              </div>
            )
          })}
      </section>
    </>
  )
}
export default App