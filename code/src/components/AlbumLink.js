import React from 'react'

export const AlbumLink = (props) => {
  return (
    <div className="album-links">
      <a href={props.item.external_urls.spotify} target="_blank" rel="noreferrer" title={props.item.name}>{props.item.name}</a>
    </div>
  )
}