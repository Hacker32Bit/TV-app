import React from "react";

import styles from "./Sidebar.module.css";

const Sidebar: React.FC = () => {
  return (
      <div className={styles.sidebar}>
        <div className={styles.profile}>
          <img
            src="https://static.vecteezy.com/system/resources/previews/008/442/086/non_2x/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg"
            alt="User"
          ></img>
          <span>Daniel</span>
        </div>
        <ul className={styles.menu}>
          <li>
            <a href="#">
              <img src="assets/images/icons/search.png" alt="search"></img>
              <span className={styles.navText}>Search</span>
            </a>
          </li>
          <li className="has-subnav">
            <a href="#">
              <img src="assets/images/icons/home.png" alt="Home"></img>
              <span className={styles.navText}>Home</span>
            </a>
          </li>
          <li className="has-subnav">
            <a href="#">
              <img src="assets/images/icons/tvshows.png" alt="TV Shows"></img>
              <span className={styles.navText}>TV Shows</span>
            </a>
          </li>
          <li className="has-subnav">
            <a href="#">
              <img src="assets/images/icons/movies.png" alt="Movies"></img>
              <span className={styles.navText}>Movies</span>
            </a>
          </li>
          <li>
            <a href="#">
              <img src="assets/images/icons/genres.png" alt="Genres"></img>
              <span className={styles.navText}>Genres</span>
            </a>
          </li>
          <li>
            <a href="#">
              <img
                src="assets/images/icons/watchlater.png"
                alt="Watch Later"
              ></img>
              <span className={styles.navText}>Watch Later</span>
            </a>
          </li>
        </ul>
        <ul className={styles.bottom}>
          <li>
            <a href="#">
              <span className={styles.navText}>Language</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className={styles.navText}>Get Help</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className={styles.navText}>Exit</span>
            </a>
          </li>
        </ul>
      </div>
  );
};

export default Sidebar;
