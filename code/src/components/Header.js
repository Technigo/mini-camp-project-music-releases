import React from 'react'
import musicData from '../data.json'
import musicDataEditors from '../stretch-goal.json'

const allData = musicData.albums.items
const singlesData = allData.filter((data) => data.album_type === 'single')
const albumsData = allData.filter((data) => data.album_type === 'album')
const editorsData = musicDataEditors.playlists.items
let searchValue = ''
let filterValue = 'allData'
let searchPlaceholder = 'Search Albums & Singles'

export const Header = (props) => {
  function searchChange(value) {
    searchValue = value
    if (filterValue === 'allData') {
      props.sendToParent(
        allData.filter((filter) => filter.name.toLowerCase().includes(value.toLowerCase()))
      )
    } else if (filterValue === 'singlesData') {
      props.sendToParent(
        singlesData.filter((filter) => filter.name.toLowerCase().includes(value.toLowerCase()))
      )
    } else if (filterValue === 'albumsData') {
      props.sendToParent(
        albumsData.filter((filter) => filter.name.toLowerCase().includes(value.toLowerCase()))
      )
    } else if (filterValue === 'editorsData') {
      props.sendToParent(
        editorsData.filter((filter) => filter.name.toLowerCase().includes(value.toLowerCase()))
      )
    }
  }
  function filterChange(event) {
    searchValue = ''
    if (event.target.value === 'singlesData') {
      props.sendToParent(singlesData)
      filterValue = 'singlesData'
      searchPlaceholder = 'Search Singles'
    } else if (event.target.value === 'albumsData') {
      props.sendToParent(albumsData)
      filterValue = 'albumsData'
      searchPlaceholder = 'Search Albums'
    } else if (event.target.value === 'allData') {
      props.sendToParent(allData)
      filterValue = 'allData'
      searchPlaceholder = 'Search Albums & Singles'
    } else if (event.target.value === 'editorsData') {
      props.sendToParent(editorsData)
      filterValue = 'editorsData'
      searchPlaceholder = 'Search Editor\'s Picks'
    }
    window.scrollTo(0, 0)
  }
  return (
    <header>
      <div className="select-wrapper">
        <select id="select-filter" name="select-filter" onChange={filterChange} defaultValue={{ label: 'New Albums & Singles', value: 0 }}>
          <option value="allData">New Albums & Singles</option>
          <option value="singlesData">New Singles</option>
          <option value="albumsData">New Albums</option>
          <option value="editorsData">Editor&apos;s Picks</option>
        </select>
      </div>
      <input id="filter" name="filter" type="text" placeholder={searchPlaceholder} value={searchValue} onChange={(event) => searchChange(event.target.value)} ref={(input) => input && input.focus()} />
    </header>
  )
}
export default Header