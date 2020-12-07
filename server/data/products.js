const products = [
    {
        name: 'Classic watch',
        image:
            'https://images.unsplash.com/photo-1495856458515-0637185db551?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum distinctio reprehenderit non aut nam nisi magnam.',
        brand: 'Apple',
        category: 'Electronics',
        price: 89.99,
        countInStock: 0,
        rating: 1.3,
        numReviews: 12,
    },
    {
        name: 'Gold watch',
        image:
            'https://images.unsplash.com/photo-1524592094714-0f0654e20314?ixlib=rb-1.2.1&auto=format&fit=crop&w=689&q=80',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum distinctio reprehenderit non aut nam nisi magnam.',
        brand: 'Apple',
        category: 'Electronics',
        price: 599.99,
        countInStock: 7,
        rating: 4.0,
        numReviews: 8,
    },
    {
        name: 'Fossil watch',
        image:
            'https://images.unsplash.com/photo-1532667449560-72a95c8d381b?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum distinctio reprehenderit non aut nam nisi magnam.',
        brand: 'Cannon',
        category: 'Electronics',
        price: 929.99,
        countInStock: 5,
        rating: 3,
        numReviews: 12,
    },
    {
        name: 'Diamond watch',
        image:
            'https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum distinctio reprehenderit non aut nam nisi magnam.',
        brand: 'Sony',
        category: 'Electronics',
        price: 399.99,
        countInStock: 11,
        rating: 5,
        numReviews: 12,
    },
    {
        name: 'Rolex watch',
        image:
            'https://images.unsplash.com/photo-1434056886845-dac89ffe9b56?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum distinctio reprehenderit non aut nam nisi magnam.',
        brand: 'Logitech',
        category: 'Electronics',
        price: 49.99,
        countInStock: 7,
        rating: 3.5,
        numReviews: 10,
    },
    {
        name: 'Cheap watch',
        image:
            'https://images.unsplash.com/photo-1526045431048-f857369baa09?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum distinctio reprehenderit non aut nam nisi magnam.',
        brand: 'Amazon',
        category: 'Electronics',
        price: 29.99,
        countInStock: 0,
        rating: 4,
        numReviews: 12,
    },
    {
        name: 'Basic watch',
        image:
            'https://images.unsplash.com/photo-1495857000853-fe46c8aefc30?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum distinctio reprehenderit non aut nam nisi magnam.',
        brand: 'Amazon',
        category: 'Electronics',
        price: 29.99,
        countInStock: 0,
        rating: 4,
        numReviews: 12,
    },
    {
        name: 'Normal watch',
        image:
            'https://images.unsplash.com/photo-1444881421460-d838c3b98f95?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=889&q=80',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum distinctio reprehenderit non aut nam nisi magnam.',
        brand: 'Amazon',
        category: 'Electronics',
        price: 29.99,
        countInStock: 0,
        rating: 4,
        numReviews: 12,
    },
    {
        name: 'Luxury watch',
        image:
            'https://images.unsplash.com/photo-1495856458515-0637185db551?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum distinctio reprehenderit non aut nam nisi magnam.',
        brand: 'Amazon',
        category: 'Electronics',
        price: 29.99,
        countInStock: 0,
        rating: 4,
        numReviews: 12,
    },
    {
        name: 'Princess',
        image:
            'https://images.unsplash.com/photo-1524592094714-0f0654e20314?ixlib=rb-1.2.1&auto=format&fit=crop&w=689&q=80',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum distinctio reprehenderit non aut nam nisi magnam.',
        brand: 'Amazon',
        category: 'Electronics',
        price: 29.99,
        countInStock: 0,
        rating: 4,
        numReviews: 12,
    },
    {
        name: 'Royal watch',
        image:
            'https://images.unsplash.com/photo-1532667449560-72a95c8d381b?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum distinctio reprehenderit non aut nam nisi magnam.',
        brand: 'Amazon',
        category: 'Electronics',
        price: 29.99,
        countInStock: 0,
        rating: 4,
        numReviews: 12,
    },
    {
        name: 'Silver watch',
        image:
            'https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum distinctio reprehenderit non aut nam nisi magnam.',
        brand: 'Amazon',
        category: 'Electronics',
        price: 29.99,
        countInStock: 0,
        rating: 4,
        numReviews: 12,
    },
    {
        name: 'Gold watch',
        image:
            'https://images.unsplash.com/photo-1434056886845-dac89ffe9b56?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum distinctio reprehenderit non aut nam nisi magnam.',
        brand: 'Amazon',
        category: 'Electronics',
        price: 29.99,
        countInStock: 0,
        rating: 4,
        numReviews: 12,
    },
    {
        name: 'Rolex watch',
        image:
            'https://images.unsplash.com/photo-1526045431048-f857369baa09?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum distinctio reprehenderit non aut nam nisi magnam.',
        brand: 'Amazon',
        category: 'Electronics',
        price: 29.99,
        countInStock: 0,
        rating: 4,
        numReviews: 12,
    },
    {
        name: 'MVMTX watch',
        image:
            'https://images.unsplash.com/photo-1495857000853-fe46c8aefc30?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum distinctio reprehenderit non aut nam nisi magnam.',
        brand: 'Amazon',
        category: 'Electronics',
        price: 29.99,
        countInStock: 0,
        rating: 4,
        numReviews: 12,
    },
    {
        name: 'Diamond watch',
        image:
            'https://images.unsplash.com/photo-1444881421460-d838c3b98f95?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=889&q=80',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum distinctio reprehenderit non aut nam nisi magnam.',
        brand: 'Amazon',
        category: 'Electronics',
        price: 29.99,
        countInStock: 0,
        rating: 4,
        numReviews: 12,
    },
];

module.exports = products;
