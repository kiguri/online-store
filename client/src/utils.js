import { StarIcon, HaflStarIcon, EmptyStarIcon } from './svg';
export default function renderStar(rating) {
    let ratingList = [];

    for (let i = 1; i <= 5; i++) {
        if (rating >= i) {
            ratingList = [...ratingList, <StarIcon key={i} />];
        } else if (rating >= i - 0.5) {
            ratingList = [...ratingList, <HaflStarIcon key={i} />];
        } else {
            ratingList = [...ratingList, <EmptyStarIcon key={i} />];
        }
    }

    return ratingList;
}
