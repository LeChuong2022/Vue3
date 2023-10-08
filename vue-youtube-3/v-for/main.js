const app = Vue.createApp({
    data(){
        return{
products:[
    {
        name: "Sản phẩm A",
        price: 120.000
    },
    {
        name: "Sản phẩm B",
        price: 130.000
    },
    {
        name: "Sản phẩm C",
        price: 140.000
    },
    {
        name: "Sản phẩm D",
        price: 150.000
    }
]
        }
    },
    methods: {
        
    },
})

app.mount('#contact')