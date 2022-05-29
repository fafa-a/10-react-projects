import { useState, useEffect } from "react"
import "./Sidebar.css"
import { Link } from "react-router-dom"
import LogoEdit from "./ImgsSidebar/edit.svg"
import FolderIcon from "./ImgsSidebar/folder.svg"
import Tools from "./ImgsSidebar/settings.svg"
import Menu from "./ImgsSidebar/menu.svg"

export default function Sidebar() {
  return (
    <>
      <button className="toggle-nav-btn">
        <img src={Menu} alt="Menu icon" />
      </button>
      <nav className="container-sidebar">
        <div className="sidebar">
          <div className="three-dots">
            <div className="dot-nav d-red"></div>
            <div className="dot-nav d-yelloy"></div>
            <div className="dot-nav d-green"></div>
          </div>
          <ul>
            <Link to="/">
              <li>
                <img src={FolderIcon} alt="logo folder" />
              </li>
            </Link>
            <Link to="/edit">
              <li>
                <img src={LogoEdit} alt="logo edit" />
              </li>
            </Link>
            <li>
              <img src={Tools} alt="tools" />
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}
