import React from "react";

import styles from "./TrendingCard.module.css"
import { TrendingCardProps } from "./TrendingCard.interface";

const TrendingCard: React.FC<TrendingCardProps> = ( {TrendingNow, handleClickImage} ) => {
    return(
    <div className={styles.card} onClick={() => handleClickImage(TrendingNow.Id)}>
        <img src={"./assets/images/" + TrendingNow.CoverImage} alt={TrendingNow.Title}></img>
    </div>)
}

export default TrendingCard