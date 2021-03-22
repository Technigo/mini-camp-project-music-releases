import React from 'react'
import Data from './data.json'
import { Header } from './components/Header'
import { Album } from './components/Album'

export const App = () => {
  return (
    <>
      <Header title="New albums & singles" />
      <section className="albums">
        {Data.albums.items.map((item) => {
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
export default App;