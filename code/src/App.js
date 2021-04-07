import React, { useState } from 'react'

import musicData from './data.json'
import { Header } from './components/Header'
import { Album } from './components/Album'
import { EmptyState } from './components/EmptyState'

export const App = () => {
  const [data, setData] = useState(musicData.albums.items);
  return (
    <>
      <Header albums={data} updateAlbums={setData} />
      <section className="albums">
        {(!data.length)
          ? <EmptyState message="No music found.." />
          : data.map((item) => {
            return (
              <div className="album" key={item.id}>
                <Album item={item} />
              </div>
            )
          })}
      </section>
    </>
  )
}