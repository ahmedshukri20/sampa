const state = () => ({
    all: [
        {
            id: 'wood-pencil',
            name: 'Wood Pencil',
            price: 191.00,
            sale: false,
            image: require('~/assets/img/shop-image/1.jpg'),
        },
        {
            id: 't-shirt',
            name: 'T-Shirt',
            price: 111.00,
            sale: false,
            image: require('~/assets/img/shop-image/2.jpg'),
        },
        {
            id: 'casual-shoe',
            name: 'Casual Shoe',
            price: 100.00,
            sale: true,
            image: require('~/assets/img/shop-image/3.jpg'),
        },
        {
            id: 'coffee-bag',
            name: 'Coffee Bag',
            price: 414.00,
            sale: false,
            image: require('~/assets/img/shop-image/4.jpg'),
        },
        {
            id: 'single-chair',
            name: 'Single Chair',
            price: 132.00,
            sale: false,
            image: require('~/assets/img/shop-image/5.jpg'),
        },
        {
            id: 'business-card',
            name: 'Business Card',
            price: 214.00,
            sale: false,
            image: require('~/assets/img/shop-image/6.jpg'),
        },
        {
            id: 'book-cover',
            name: 'Book Cover',
            price: 500.00,
            sale: false,
            image: require('~/assets/img/shop-image/7.jpg'),
        },
        {
            id: 'wall-watch',
            name: 'Wall Watch',
            price: 129.00,
            sale: false,
            image: require('~/assets/img/shop-image/8.jpg'),
        },
    ]
})

export default {
    state
};