const imageFake = 'https://placehold.co/600x400'
export const productData = [
    {
        name: "Nike Air Zoom",
        price: 120,
        description: "A comfortable and stylish running shoe.",
        brand: "Nike",
        categoryIds: [1, 3],
        image: imageFake,
        size: [
            { size: "M", stock: 10 },
            { size: "L", stock: 5 },
            { size: "XL", stock: 8 }
        ]
    },
    {
        name: "Adidas Ultraboost",
        price: 140,
        description: "High-performance running shoe with boost technology.",
        brand: "Adidas",
        categoryIds: [2, 4],
        image: imageFake,
        size: [
            { size: "S", stock: 12 },
            { size: "M", stock: 7 },
            { size: "L", stock: 4 }
        ]
    },
    {
        name: "Puma Classic",
        price: 100,
        description: "Classic style sneaker with cushioned sole.",
        brand: "Puma",
        categoryIds: [3, 5],
        image: imageFake,
        size: [
            { size: "S", stock: 15 },
            { size: "M", stock: 10 },
            { size: "L", stock: 6 }
        ]
    },
    {
        name: "Reebok Flexagon",
        price: 80,
        description: "Durable cross-training shoes for versatile workouts.",
        brand: "Reebok",
        categoryIds: [1, 6],
        image: imageFake,
        size: [
            { size: "M", stock: 20 },
            { size: "L", stock: 15 }
        ]
    },
    {
        name: "Asics Gel-Kayano",
        price: 130,
        description: "Running shoe with great support and cushioning.",
        brand: "Asics",
        categoryIds: [2, 3],
        image: imageFake,
        size: [
            { size: "S", stock: 8 },
            { size: "M", stock: 12 },
            { size: "L", stock: 9 }
        ]
    }
];
