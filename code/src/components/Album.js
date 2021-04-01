import React from 'react'
import { AlbumArtwork } from './AlbumArtwork'
import { ArtistName } from './ArtistName'
import { AlbumName } from './AlbumName'

export const Album = (props) => {
  return (
    <>
      <AlbumArtwork
        key={props.id}
        image={props.item.images[0].url}
        albumUrl={props.item.external_urls.spotify}
        albumName={props.item.name} />
      <div className="description">
        <AlbumName
          key={props.id}
          albumName={props.item.name}
          albumUrl={props.item.external_urls.spotify} />
        {(props.item.artists)
          ? <div className="artist-names">{
            props.item.artists.map((artist) => {
              return (
                <ArtistName
                  key={artist.id}
                  artistName={artist.name}
                  artistUrl={artist.external_urls.spotify} />
              )
            })
          } </div>
          : null}
      </div>
    </>
  )
}
export default Album