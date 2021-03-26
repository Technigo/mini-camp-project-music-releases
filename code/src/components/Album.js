import React from 'react'
import { AlbumCover } from './AlbumCover'
import { AlbumInformation } from './AlbumInformation'

export const Album = (props) => {
  return (
    <div className="album">
      <AlbumCover uri={props.uri} src={props.imgSrc} albumSrc={props.albumSrc} />
      <AlbumInformation
        albumSrc={props.albumSrc}
        albumName={props.name}
        artists={props.artists} />
    </div>
  )
}

