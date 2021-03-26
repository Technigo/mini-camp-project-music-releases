import Data from 'data.json'

import React from 'react'
import { Album } from './Album'
import { Header } from './Header'

export const AlbumListing = () => {
  return (
    <div className="content">
      <Header />
      <div className="albums">
        {Data.albums.items.map((album) => {
          return <Album
            name={album.name}
            artists={album.artists}
            key={album.id}
            imgSrc={album.images[1].url}
            albumSrc={album.external_urls.spotify}
            uri={album.uri} />;
        })}
      </div>
    </div>
  )
}
