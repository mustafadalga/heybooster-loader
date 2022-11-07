# Loading Component 

**A plugin developed with Vue 3 and vite.js.**

<p align="center">

[![vue version](https://img.shields.io/npm/v/@mustafadalga/loading-spinner.svg)](https://www.npmjs.com/package/@mustafadalga/loading-spinner)
[![vue version](https://img.shields.io/badge/vue-3.2-brightgreen.svg)](https://www.npmjs.com/package/@mustafadalga/loading-spinner)

</p>


## Installing

### Package manager

Using npm:

```bash
npm install @mustafadalga/loading-spinner
```

Then, import and register the component:


## Global Registration

main.js
```
import Loader from "@mustafadalga/loading-spinner";
import "@mustafadalga/loading-spinner/style.css"

app.use(Loader);
```

## Local Registration

* Composition Api

```
<script setup>
import { Loader } from "@mustafadalga/loading-spinner";
import "@mustafadalga/loading-spinner/style.css";
</script>
```

* Options Api
```
import { Loader } from "@mustafadalga/loading-spinner";
import "@mustafadalga/loading-spinner/style.css";

export default {
  components: {
    Loader
  },
}
```


## Usage
* Example 1 
```
<script setup>
import icon from './assets/icons/icon.svg'
</script>

<template>
  <main>
    <Loader :icon="icon"/> 
  </main>
</template>
```

* Example 2

```
<script>
import icon from './assets/icons/icon.svg'

export default {
  data () {
    return {
      icon: icon
    }
  }
}
</script>

<template>
  <main>
    <Loader :icon="icon"/> 
  </main>
</template>
```

* Example 3

```
<script setup>
import icon from './assets/icons/icon.svg'
</script>

<template>
  <main>
    <Loader :icon="icon">
      <template #description>
        Please Wait...
      </template>
    </Loader>
  </main>
</template>
```


# Demo
* https://loading-component.netlify.app/

## License
[![License](https://img.shields.io/badge/LICENSE-GPL--3.0-orange)](https://github.com/mustafadalga/loading-spinner/blob/main/LICENSE)