const app = Vue.createApp({
    // template: "<h1>Contact with {{teamName}}</h1>",
    template: `
    <h1>Hello from {{teamName}} and {{ !isHello ? firstName + " " + lastName : ''}}</h1>
    <button v-on:click="onChangeName">Change name</button>
    <button @click="onChangeName">Change name but shorter</button>
    <div class="modal" v-if="isShowModal">
        <h1>Modal content</h1>
    </div>`,
    data() {
        return {
            teamName: "RHP Team",
            firstName: "Chuong",
            lastName: "Le Nho",
            isHello: false,
            isShowModal: false,
        }
    },
    methods: {
        onChangeName() {
            this.firstName = "Sky";
            this.lastName = "Albert";
            this.isShowModal = !this.isShowModal;
        }
    },
})

app.mount('#contact') 