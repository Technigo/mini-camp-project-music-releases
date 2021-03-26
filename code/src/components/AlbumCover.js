import React from 'react'
import { AlbumActions } from './AlbumActions'

export const AlbumCover = (props) => {
  return (
    <a href={props.albumSrc}>
      <div className="cover">
        <img src={props.src} alt="" className="image" />
        <AlbumActions uri={props.uri} />
      </div>
    </a>
  )
}