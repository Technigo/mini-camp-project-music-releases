import React from 'react'
import musicData from '../data.json'
import musicDataEditors from '../stretch-goal.json'

const allData = musicData.albums.items
const singlesData = allData.filter((data) => data.album_type === 'single')
const albumsData = allData.filter((data) => data.album_type === 'album')
const editorsData = musicDataEditors.playlists.items

export const Header = (props) => {
  function handleChange(event) {
    if (event.target.value === 'singlesData') {
      props.sendToParent(singlesData)
    } else if (event.target.value === 'albumsData') {
      props.sendToParent(albumsData)
    } else if (event.target.value === 'allData') {
      props.sendToParent(allData)
    } else if (event.target.value === 'editorsData') {
      props.sendToParent(editorsData)
    }
  }
  return (
    <header>
      <div className="select-wrapper">
        <select name="filter" id="filter" onChange={handleChange} defaultValue={{ label: 'New Albums & Singles', value: 0 }}>
          <option value="allData">New Albums & Singles</option>
          <option value="singlesData">New Singles</option>
          <option value="albumsData">New Albums</option>
          <option value="editorsData">Editor&apos;s Picks</option>
        </select>
      </div>
    </header>
  )
}
export default Header;