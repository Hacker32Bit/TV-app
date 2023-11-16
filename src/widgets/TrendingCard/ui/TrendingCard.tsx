import React from "react";

import styles from "./TrendingCard.module.css"
import { TrendingNowProps } from "./TrendingCard.interface";

const TrendingCard: React.FC<TrendingNowProps> = ( TrendingNow ) => {
    return(
    <div className={styles.card}>
        <img src={"./assets/images/" + TrendingNow.CoverImage} alt={TrendingNow.Title}></img>
    </div>)
}

export default TrendingCard