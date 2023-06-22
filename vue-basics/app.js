console.log("This is a demo of a basic vue standalone widget, using vue CDN!");

const app = Vue.createApp({
    template: '<h3>Hello! I am a template</h3>'
})

app.mount('#app')
