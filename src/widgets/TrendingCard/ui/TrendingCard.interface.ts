import { FeaturedProps } from "widgets/Header/ui/Header.interface";

export interface TrendingCardProps {
    TrendingNow: FeaturedProps;
    handleClickImage: (props: string) => void;
}