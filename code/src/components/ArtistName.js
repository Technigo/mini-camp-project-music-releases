import React from 'react'

export const ArtistName = (props) => {
  return (
    <span>
      <a href={props.item.external_urls.spotify} target="_blank" rel="noreferrer" className="description-artist" alt={props.item.name} title={props.item.name}>{props.item.name}</a>
    </span>
  )
}