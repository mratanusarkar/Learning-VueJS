console.log("This is a demo of a basic vue standalone widget, using vue CDN!");

const app = Vue.createApp({
    data() {
        return {
            showBooks: true,
            book: "The Hitchhiker's Guide to the Galaxy",
            author: "Douglas Adams",
            year: 1996,
            hits: 0,
            click_counter: 0
        }
    },
    methods: {
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        },
        divOnClick(step) {
            console.log("using @click, the div was clicked!", this.click_counter);
            this.click_counter += step
        }
    }
})

app.mount('#app')
