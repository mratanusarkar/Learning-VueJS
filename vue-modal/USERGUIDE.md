# Vue Modal

## Description

This time, we will build a full fledged Vue application using Vue CLI

## Topics & Concepts:

1. install vue-cli in global npm scope using `npm install -g @vue/cli`, and create a Vue 3 application using `vue create my-project`

2. in VScode, we can install **Vetur** or **Volar** for Vue language support in the IDE

3. general structure of a Vue app:

We have a base html file, in which we have an app div (like the previous tutorial)
on top of that, we have .vue files. 

App.vue is the root, and on top of that we can have multiple vue components (child)

Each vue file has the following:
- html template (*req) ---> the html code
- script ---> export component code + data, functions, methods, etc
- style ---> can be scoped or global

The root "app component" gets rendered to the DOM

Although we can write the whole app or webpage in App.vue, But it is always a good idea to split it into multiple components.

We can have lots of HTML (template) things like header, menu, sidebar, navbar, multiple contents, articles, images, footer.
Similarly the script (component object) can have tons of methods, data, properties, etc.
And the same goes for the styles.

This makes the file bigger, unreadable and a gigantic mess! Hence Vue handles the problem by having multiple .vue files and having multiple components and services.

This helps to make the code readable, easy to maintain, modular, reusable, and efficient as the whole code doesn't get loaded and only the used active components gets rendered to the DOM.

4. All concepts from vue-basic can be used here. 
The `html file` concepts goes inside: 
```html
<template>
    html stuff goes here...
</template>
``` 

and the `js file` concepts goes inside: 

```js
<script>
export default {
  name: 'App',
  js stuff goes here...
}
</script>
```

5. template refs: we can access the DOM elements using template reference

inside the template:
```html
<input type="text" ref="name">
```

and inside script --> component object --> methods --> function
```js
handleEvent() {
    console.log(this.$refs.name);
}
```

6. explore styles and how it affects in each scope:
- play with `<style scoped>` and also use of custom-class inside `<style>`
- see the css overriding effects

7. vue component props

example:
```html
<Modal :header="mHeader" :content="mContent" theme="dark"/>
```

```js
<script>
export default {
  name: 'Modal',
  props: ['header', 'content', 'theme']
};
</script>
```

8. emit custom event:
- this is a way for a child component to return back a trigger to the parent component

example:
in the child vue component
```html
<div class="backdrop" @click="closeModal"></div>
```
```js
<script>
export default {
  methods: {
    closeModal() {
      this.$emit('closemodal')
    }
  }
}
```

in the parent vue component
```html
<Modal @closemodal="callCustomFunction()"/>
```

9. click event modifiers:

example:
```html
<button @click="handleButtonClick" @click.ctrl="resetTextbox">click me</button>
```

10. slots and named slots
- used to inject a custom templates into a child component

11. teleport
- new vue 3 feature to teleport content outside vue app div
