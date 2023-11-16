import React, { useEffect, useState } from "react";
import { IoIosPlay } from "react-icons/io";

import styles from "./Header.module.css";
import { FeaturedProps } from "./Header.interface";

const Header: React.FC<FeaturedProps> = ({
  Id,
  Title,
  CoverImage,
  TitleImage,
  Date,
  ReleaseYear,
  MpaRating,
  Category,
  Duration,
  VideoUrl,
  Description,
  playVideo,
  setPlayVideo,
}) => {
  const convertSeconds = (seconds: number): string => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);

    if (hours > 0) {
      return `${hours}h${hours > 1 ? "s" : ""} ${minutes}m`;
    } else {
      return `${minutes}m`;
    }
  };

  useEffect(() => {
    if (setPlayVideo && VideoUrl) {
      const timer = setTimeout(() => setPlayVideo(true), 2000);

      return () => clearTimeout(timer);
    }
  });

  return (
    <div className={styles.header}>
      <div className={styles.content}>
        <h3>{Category}</h3>
        <img src={"assets/images/" + TitleImage} alt={Title}></img>
        <div className={styles.metadata}>
          <span>{ReleaseYear}</span>
          <span>{MpaRating}</span>
          <span>{convertSeconds(Number(Duration))}</span>
        </div>
        <p>{Description}</p>
        <button className={styles.play}>
          <IoIosPlay />
          Play
        </button>
        <button className={styles.info}>More Info</button>
      </div>
      {playVideo ? (
        <video autoPlay muted loop className={styles.video}>
          <source src={VideoUrl} type="video/mp4"></source>
        </video>
      ) : (
        <img
          className={styles.bg}
          src={"assets/images/" + CoverImage}
          alt="Title"
        ></img>
      )}
    </div>
  );
};

export default Header;
