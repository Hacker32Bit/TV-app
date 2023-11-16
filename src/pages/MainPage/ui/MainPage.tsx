import React, { useState } from "react";
import Header from "widgets/Header";
import Sidebar from "widgets/Sidebar";
import TrendingCard from "widgets/TrendingCard";

import styles from "./MainPage.module.css";
import { DataProps } from "./MainPage.interface";
import { FeaturedProps } from "widgets/Header/ui/Header.interface";

const MainPage: React.FC<DataProps> = ({ Featured, TrendingNow }) => {

  const [currFeatured, setCurrFeatured] = useState<FeaturedProps>(Featured)
  const [playVideo, setPlayVideo] = useState<boolean>(false);

  const handleClickImage = (props: string) => {
    setPlayVideo(false)
    localStorage.setItem(props, new Date().getTime().toString());
    setCurrFeatured(TrendingNow.find((elem) => elem.Id === props) || Featured)
  };

  return (
    <div className={styles.main}>
      <Sidebar />
      <Header {...currFeatured} playVideo={playVideo} setPlayVideo={setPlayVideo}/>
      <div className={styles.trendingCards}>
        <h2>Trending Now</h2>
        <div className={styles.scrollmenu}>
          {TrendingNow.sort((a, b) => {
            return new Date(b.Date).getTime() - new Date(a.Date).getTime();
          })
            .sort((a, b) => {
              if (localStorage.getItem(a.Id) || localStorage.getItem(b.Id)) {
                return (
                  Number(localStorage.getItem(b.Id)) -
                  Number(localStorage.getItem(a.Id))
                );
              }
              return 0;
            })
            .slice(0, 50)
            .map((element) => {
              return (
                <TrendingCard
                  key={element.Id}
                  TrendingNow={element}
                  handleClickImage={handleClickImage}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default MainPage;
