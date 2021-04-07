import React from 'react'

export const AlbumName = (props) => {
  return (
    <div className="album-name">
      <a
        href={props.albumUrl}
        target="_blank"
        rel="noreferrer"
        title={props.albumName}>
        {props.albumName}
      </a>
    </div>
  )
}