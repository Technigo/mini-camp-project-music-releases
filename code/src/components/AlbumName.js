import React from 'react'

export const AlbumName = (props) => {
  return (
    <div className="titlewrapper">
      <a className="albumtitle" href={props.albumSrc}>{props.name}</a>
    </div>
  )
}