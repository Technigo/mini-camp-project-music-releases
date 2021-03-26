import React from 'react'
import { SaveButton } from './SaveButton'

export const AlbumActions = (props) => {
  return (
    <div className="actions">
      <div className="container">
        <SaveButton />
        <a href={props.uri}>
          <button className="big play" type="button" aria-label="Play item" />
        </a>
        <button className="small more" type="button" aria-label="More Actions" />
      </div>
    </div>
  )
}