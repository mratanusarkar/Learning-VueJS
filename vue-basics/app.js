console.log("This is a demo of a basic vue standalone widget, using vue CDN!");

const app = Vue.createApp({
    data() {
        return {
            showBooks: true,
            books: [
                { title: "The Hitchhiker's Guide to the Galaxy", author: "Douglas Adams", year: 1996 },
                { title: "The Name of the Wind", author: "Patrick Rothfuss", year: 2007 },
                { title: "The Way of Kings", author: "Brandon Sanderson", year: 2010 },
                { title: "The Three-Body Problem", author: "Liu Cixin", year: 2008 },
                { title: "Children of Time", author: "Adrian Tchaikovsky", year: 2013 }
            ],
            hits: 0,
            click_counter: 0,
            mouse_x: 0,
            mouse_y: 0
        }
    },
    methods: {
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        },
        divOnClick(step) {
            console.log("using @click, the div was clicked!", this.click_counter);
            this.click_counter += step
        },
        handleMouseEvent(event, data) {
            console.log("box:", data, "> mouse event:", event.type);
        },
        handleMouseMove(event) {
            this.mouse_x = event.offsetX;
            this.mouse_y = event.offsetY;
        }
    }
})

app.mount('#app')
