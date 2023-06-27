# Vue Basics

## Description

Here, we will build a basic Vue component, a standalone Vue component which will control a certain portion of the website.
e.g. a div in the html website.

Now, this div wil be completely controlled by Vue. Vue will inject dynamic data into the template, add events and actions via methods, and control certain parts of the html page.


## Topics & Concepts:

1. Vue Standalone Widget:

```javascript
const app = Vue.createApp({
    template: '<h3>Hello! I am a template</h3>'
})

app.mount('#app')
```
```html
<body>
    <div id="app">
    </div>
</body>
```

> **Note**: we can inject html via `template` (incase the html is small), or directly write the full html inside the div that is controlled by Vue (here, the div with id="app").

2. Templates and Data:

```javascript
const app = Vue.createApp({
    data() {
        return {
            data: "value",
            num: 42
        }
    }
})
```

```html
<div id="app">
    <p>{{ data }}</p>
</div>
```

3. Trigger Events (eg: click):

```html
<button v-on:click="num++">Increase Num</button>
```

There is a shortcut for the same **as this is heavily used**, which is as follows:

```html
<button @click="num++">Increase Num</button>
```

> **Note**: what goes inside the double quotes here is treated as a js code and computed/evaluated. hence one can pass in a function call here.

4. Methods:

```html
<div @click="fn()">Click Me!</div>
```

```javascript
const app = Vue.createApp({
    methods: {
        fn() {
            console.log("fn was called!")
        }
    }
})
```

5. Conditional Rendering:

```html
<div v-if="true">
    <p>text</p>
</div>
```

6. Events (eg: mouse events):

Here are some of the mouse events explored:
- @click
- @mouseover
- @mouseleave
- @dblclick
- @mousemove

look up more about events [here](https://vuejs.org/guide/essentials/event-handling.html).

7. Loops:

```html
<ul>
    <li v-for="element in elements">
        <p>{{ element.data }}</p>
    </li>
</ul>
```

8. Attribute Binding:

```html
<a v-bind:href="url">link</a>
```

There is a shortcut for the same **as this is heavily used**, which is as follows:

```html
<a :href="url">link</a>
```

And this can be used in any html attributes.

```html
<img :src="image_path" alt="title">
```

9. Dynamic Classes:

```html
<div :class="{ className: ifTrue }">
```

We can add in a event handler to dynamically alter and inject css classes as follows:

```html
<div :class="{ className: boolData }" @click="class(boolData)">
```

10. Computed Properties:

```html
<div v-for="data in filteredData">
    {{ data }}
</div>
```

```javascript
const app = Vue.createApp({
    computed: {
        filteredData() {
            return this.data.filter((e) => e.boolExp)
        }
    }
})
```
