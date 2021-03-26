import React from 'react'

export const ArtistName = (props) => {
  return (
    <a className="artist" href={props.artistSrc}>{props.name}</a>
  )
}