import { StarIcon, HaflStarIcon, EmptyStarIcon } from './svg';
export const renderStar = (rating) => {
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
};

export const addItem = (cart, item) => {
    const existItem = cart.find((cartItem) => cartItem._id === item._id);
    if (!existItem) {
        return [...cart, { ...item, qty: 1 }];
    }
    return cart.map((cartItem) =>
        cartItem._id === item._id && cartItem.qty < cartItem.countInStock
            ? { ...cartItem, qty: cartItem.qty + 1 }
            : cartItem
    );
};

export const removeItem = (cart, item) => {
    const existItem = cart.find((cartItem) => cartItem._id === item._id);

    if (existItem.qty === 1) {
        return cart.filter((cartItem) => cartItem._id !== item._id);
    }

    return cart.map((cartItem) =>
        cartItem._id === item._id
            ? { ...cartItem, qty: cartItem.qty - 1 }
            : cartItem
    );
};
