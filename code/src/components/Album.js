import React from 'react'
import { AlbumArtwork } from './AlbumArtwork'
import { ArtistName } from './ArtistName'
import { AlbumName } from './AlbumName'

export const Album = (props) => {
  return (
    <>
      <AlbumArtwork key={props.id} item={props.item} />
      <div className="description">
        <AlbumName key={props.id} item={props.item} />
        <div className="artist-names">
          {props.item.artists.map((item) => {
            return (
              <ArtistName key={item.id} item={item} />
            )
          })}
        </div>
      </div>
    </>
  )
}