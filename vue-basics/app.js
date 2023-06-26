console.log("This is a demo of a basic vue standalone widget, using vue CDN!");

const app = Vue.createApp({
    data() {
        return {
            showBooks: true,
            books: [
                {
                    title: "The Hitchhiker's Guide to the Galaxy",
                    author: "Douglas Adams",
                    year: 1996,
                    cover_img: "https://covers.openlibrary.org/b/id/12986869-M.jpg"
                },
                {
                    title: "The Name of the Wind",
                    author: "Patrick Rothfuss",
                    year: 2007,
                    cover_img: "https://covers.openlibrary.org/b/id/12391248-M.jpg"
                },
                {
                    title: "The Way of Kings",
                    author: "Brandon Sanderson",
                    year: 2010,
                    cover_img: "https://covers.openlibrary.org/b/id/7429768-M.jpg"
                },
                {
                    title: "The Three-Body Problem",
                    author: "Liu Cixin",
                    year: 2008,
                    cover_img: "https://covers.openlibrary.org/b/id/9157544-M.jpg"
                },
                {
                    title: "Children of Time",
                    author: "Adrian Tchaikovsky",
                    year: 2013,
                    cover_img: "https://covers.openlibrary.org/b/id/10157457-M.jpg"
                },
            ],
            hits: 0,
            click_counter: 0,
            mouse_x: 0,
            mouse_y: 0,
            src_url: "https://github.com/mratanusarkar/Learning-VueJS",
            credit_url: "https://netninja.dev/"
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
