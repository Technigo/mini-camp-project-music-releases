import React from 'react'

import musicData from '../data.json'
import musicDataEditors from '../stretch-goal.json'

const allData = musicData.albums.items
const singlesData = allData.filter((item) => item.album_type === 'single')
const albumsData = allData.filter((item) => item.album_type === 'album')
const editorsData = musicDataEditors.playlists.items
let searchValue = ''
let filterValue = 'allData'
let searchPlaceholder = 'Search Albums & Singles'

export const Header = (props) => {
  function searchChange(value) {
    searchValue = value
    if (filterValue === 'allData') {
      props.updateAlbums(
        allData.filter((item) => {
          return (
            item.name.toLowerCase().includes(value.toLowerCase())
            || item.artists[0].name.toLowerCase().includes(value.toLowerCase())
          )
        })
      )
    } else if (filterValue === 'singlesData') {
      props.updateAlbums(
        singlesData.filter((item) => {
          return item.name.toLowerCase().includes(value.toLowerCase())
          || item.artists[0].name.toLowerCase().includes(value.toLowerCase())
        })
      )
    } else if (filterValue === 'albumsData') {
      props.updateAlbums(
        albumsData.filter((item) => {
          return item.name.toLowerCase().includes(value.toLowerCase())
          || item.artists[0].name.toLowerCase().includes(value.toLowerCase())
        })
      )
    } else if (filterValue === 'editorsData') {
      props.updateAlbums(
        editorsData.filter((item) => {
          return item.name.toLowerCase().includes(value.toLowerCase())
        })
      )
    }
    if (searchValue.length > 0) {
      document.getElementsByClassName('input-search-clear')[0].style.display = 'block'
    } else {
      document.getElementsByClassName('input-search-clear')[0].style.display = 'none'
    }
  }
  function filterChange(event) {
    searchValue = ''
    document.getElementsByClassName('input-search-clear')[0].style.display = 'none'
    if (event.target.value === 'singlesData') {
      props.updateAlbums(singlesData)
      filterValue = 'singlesData'
      searchPlaceholder = 'Search Singles'
    } else if (event.target.value === 'albumsData') {
      props.updateAlbums(albumsData)
      filterValue = 'albumsData'
      searchPlaceholder = 'Search Albums'
    } else if (event.target.value === 'allData') {
      props.updateAlbums(allData)
      filterValue = 'allData'
      searchPlaceholder = 'Search Albums & Singles'
    } else if (event.target.value === 'editorsData') {
      props.updateAlbums(editorsData)
      filterValue = 'editorsData'
      searchPlaceholder = 'Search Editor\'s Picks'
    }
    window.scroll({
      top: 0,
      behavior: 'smooth'
    })
  }
  return (
    <header className="header">
      <div className="select-wrapper">
        <select
          className="select-filter"
          name="select-filter"
          onChange={filterChange}
          defaultValue={
            {
              label: 'New Albums & Singles',
              value: 0
            }
          }>
          <option value="allData">New Albums & Singles</option>
          <option value="singlesData">New Singles</option>
          <option value="albumsData">New Albums</option>
          <option value="editorsData">Editor&apos;s Picks</option>
        </select>
      </div>
      <div className="input-wrapper">
        <input
          className="input-search"
          name="input-search"
          type="text"
          placeholder={searchPlaceholder}
          value={searchValue}
          onChange={
            (event) => searchChange(event.target.value)
          }
          ref={(input) => input && input.focus()} />
        <button
          className="input-search-clear"
          type="button"
          value=""
          onClick={
            (event) => searchChange(event.target.value)
          }>
          &nbsp;
        </button>
      </div>
    </header>
  )
}