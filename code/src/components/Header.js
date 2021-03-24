import React from 'react'
import musicData from '../data.json'

const allData = musicData.albums.items;
const singlesData = allData.filter((data) => data.album_type === 'single');
const albumsData = allData.filter((data) => data.album_type === 'album');

export const Header = (props) => {
  function handleChange(event) {
    if (event.target.value === 'singlesData') {
      props.sendToParent(singlesData)
    } else if (event.target.value === 'albumsData') {
      props.sendToParent(albumsData)
    } else if (event.target.value === 'allData') {
      props.sendToParent(allData)
    }
  }
  return (
    <header>
      {// <svg width="10px" height="6px" viewBox="0 0 10 6" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>Arrow-down</title><g id="1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><g id="Artboard" transform="translate(-152.000000, -83.000000)" fill="#000000" fillRule="nonzero"><path d="M152.292893,83.2928932 C152.653377,82.9324093 153.220608,82.9046797 153.612899,83.2097046 L153.707107,83.2928932 L157,86.585 L160.292893,83.2928932 C160.653377,82.9324093 161.220608,82.9046797 161.612899,83.2097046 L161.707107,83.2928932 C162.067591,83.6533772 162.09532,84.2206082 161.790295,84.6128994 L161.707107,84.7071068 L157.707107,88.7071068 C157.556905,88.8573084 157.37081,88.9497402 157.176432,88.9844021 L157.059031,88.9982669 L156.940969,88.9982669 C156.744381,88.9867129 156.550555,88.9173891 156.387101,88.7902954 L156.292893,88.7071068 L152.292893,84.7071068 C151.902369,84.3165825 151.902369,83.6834175 152.292893,83.2928932 Z" id="Path"> </path></g></g></svg>
      }
      <div className="select-wrapper">
        <select name="filter" id="filter" onChange={handleChange}>
          <option value="allData" selected>New albums & singles</option>
          <option value="singlesData">New Singles</option>
          <option value="albumsData">New Albums</option>
        </select>
      </div>
    </header>
  )
}
export default Header;