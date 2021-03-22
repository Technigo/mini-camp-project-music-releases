import React from 'react'
import { AlbumActions } from './AlbumActions'

export const AlbumArtwork = (props) => {
  return (
    <div className="artwork">
      <AlbumActions />
      <a href={props.item.external_urls.spotify} target="_blank" rel="noreferrer" title={props.item.name}>
        <img className="artwork-image" alt="alt" src={props.item.images[0].url} />
      </a>
    </div>
  )
}