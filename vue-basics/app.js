console.log("This is a demo of a basic vue standalone widget, using vue CDN!");

const app = Vue.createApp({
    data() {
        return {
            book: "The Hitchhiker's Guide to the Galaxy",
            author: "Douglas Adams",
            year: 1996
        }
    }
})

app.mount('#app')
