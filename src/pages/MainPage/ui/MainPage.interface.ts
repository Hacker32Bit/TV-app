import { TrendingNowProps } from 'widgets/TrendingCard/ui/TrendingCard.interface';
import { FeaturedProps } from 'widgets/Header/ui/Header.interface';

export interface DataProps {
    Featured: FeaturedProps;
    TrendingNow: TrendingNowProps[];
}

