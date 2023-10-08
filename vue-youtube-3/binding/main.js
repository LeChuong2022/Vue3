const app = Vue.createApp({
    data() {
        return {
            classTesting: "flex",

            products: [
                {
                    thumb: "./assets/1.png",
                    name: "Sản phẩm A",
                    price: 120.000,
                    isCart: false,
                },
                {
                    thumb: "./assets/2.jpg",
                    name: "Sản phẩm B",
                    price: 130.000,
                    isCart: false,
                },
                {
                    thumb: "./assets/3.jpg",
                    name: "Sản phẩm C",
                    price: 140.000,
                    isCart: true,
                },
                {
                    name: "Sản phẩm D",
                    price: 150.000,
                    isCart: false,
                }
            ]
        }
    },
    methods: {
        onToggleCart(event, product) {
            product.isCart = !product.isCart;
        }
    },
    computed: {
        productsComputed() {
            return this.products.filter((product) => product.price < 140);
        }
    }
})

app.mount('#contact')