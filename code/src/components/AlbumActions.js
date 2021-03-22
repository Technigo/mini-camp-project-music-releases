import React from 'react'
import { ReactComponent as Heart } from '../icons/heart.svg'
import { ReactComponent as Play } from '../icons/play.svg'
import { ReactComponent as Dots } from '../icons/dots.svg'

export const AlbumActions = () => {
  return (
    <div className="album-actions">
      <Heart className="album-action album-action-like" />
      <Play className="album-action album-action-play" />
      <Dots className="album-action album-action-dots" />
    </div>
  )
}
export default AlbumActions;