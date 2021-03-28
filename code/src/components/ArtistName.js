import React from 'react'

export const ArtistName = (props) => {
  return (
    <span>
      <a href={props.artistUrl} target="_blank" rel="noreferrer" className="description-artist" alt={props.artistName} title={props.artistName}>{props.artistName}</a>
    </span>
  )
}
export default ArtistName