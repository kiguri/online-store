import { renderStar } from '../utils';

const Rating = ({ rating, numReviews }) => {
    const starList = renderStar(rating);
    return (
        <div className='flex'>
            <div className='flex'>{starList.map((star) => star)}</div>
            <span className='text-sm leading-6 ml-2 text-gray-500'>
                {numReviews && `${numReviews} reviews`}
            </span>
        </div>
    );
};

export default Rating;
