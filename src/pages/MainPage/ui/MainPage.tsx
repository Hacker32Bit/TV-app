import React from "react";
import Header from "widgets/Header";
import Sidebar from "widgets/Sidebar";
import TrendingCard from "widgets/TrendingCard";

import styles from "./MainPage.module.css";
import { DataProps } from "./MainPage.interface";

const MainPage: React.FC<DataProps> = ({ Featured, TrendingNow }) => {
  return (
    <div className={styles.main}>
      <Sidebar />
      <Header {...Featured} />
      <div className={styles.trendingCards}>
        <h2>Trending Now</h2>
        <div className={styles.scrollmenu}>
          {TrendingNow.sort((a, b) => {
            return new Date(b.Date).getTime() - new Date(a.Date).getTime();
          })
            .slice(0, 50)
            .map((element) => {
              return <TrendingCard key={element.Id} {...element} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default MainPage;
