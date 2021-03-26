import React from 'react'
import { AlbumName } from './AlbumName'
import { ArtistName } from './ArtistName'

export const AlbumInformation = (props) => {
  return (
    <div className="albuminformation">
      <AlbumName name={props.albumName} albumSrc={props.albumSrc} />
      <div className="artists">
        {props.artists.map((artist) => {
          return <ArtistName
            key={artist.id}
            name={artist.name}
            artistSrc={artist.external_urls.spotify} />
        })}
      </div>
    </div>
  )
}