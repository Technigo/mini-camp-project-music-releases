import React from 'react'
import { Artwork } from './Artwork'
import { Artist } from './Artist'
import { AlbumLink } from './AlbumLink'

export const Album = (props) => {
  return (
    <>
      <Artwork image={props.item.images[0].url} />
      <div className="description">
        <AlbumLink key={props.id} item={props.item} />
        <div className="artist-links">
          {props.item.artists.map((item) => {
            return (
              <Artist key={item.id} item={item} />
            )
          })}
        </div>
      </div>
    </>
  )
}