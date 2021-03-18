import React from 'react'
import { Actions } from './Actions'

export const Artwork = (props) => {
  return (
    <div className="artwork">
      <Actions />
      <img className="artwork-image" alt="alt" src={props.image} />
    </div>
  )
}