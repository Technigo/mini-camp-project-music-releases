import React from 'react'

export const EmptyState = (props) => {
  return (
    <>
      <div className="empty-state"><h1>{props.message}</h1></div>
    </>
  )
}
export default EmptyState