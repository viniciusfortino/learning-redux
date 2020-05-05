export default {
    activeLesson: {},
    activeModule: {},
    productsCategory: [
        {
            id: 1,
            title: "First Categoty",
            productsSubCategory: [
                {
                    id: 1,
                    title: "First Product",
                    price: 2
                },
                {
                    id: 2,
                    title: "Second Product",
                    price: 4
                },
                {
                    id: 3,
                    title: "Third Product",
                    price: 6
                },
            ]
        },
        {
            id: 2,
            title: "Seconde Categoty",
            productsSubCategory: [
                {
                    id: 1,
                    title: "First Product",
                    price: 3
                },
                {
                    id: 2,
                    title: "Second Product",
                    price: 5
                },
                {
                    id: 3,
                    title: "Third Product",
                    price: 7
                },
            ]
        }
    ],
    cart: {
        items: [],
        shippingValue: 0,
    }
}
