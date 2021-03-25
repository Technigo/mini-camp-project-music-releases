import React from 'react'

export const AlbumName = (props) => {
  return (
    <div className="album-name">
      <a href={props.item.external_urls.spotify} target="_blank" rel="noreferrer" title={props.item.name}>{props.item.name}</a>
    </div>
  )
}
export default AlbumName