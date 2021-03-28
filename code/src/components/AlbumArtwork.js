import React from 'react'
import { AlbumActions } from './AlbumActions'

export const AlbumArtwork = (props) => {
  return (
    <div className="artwork">
      <AlbumActions />
      <a href={props.albumUrl} target="_blank" rel="noreferrer">
        <img className="artwork-image" alt={props.albumName} title={props.albumName} src={props.image} />
      </a>
    </div>
  )
}
export default AlbumArtwork