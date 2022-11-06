# Heybooster Loader

**A plugin developed with Vue 3 and vite.js.**

<p align="center">

[![vue version](https://img.shields.io/npm/v/heybooster-loader.svg)](https://www.npmjs.com/package/heybooster-loader)
[![vue version](https://img.shields.io/badge/vue-3.2-brightgreen.svg)](https://www.npmjs.com/package/heybooster-loader)

</p>


## Installing

### Package manager

Using npm:

```bash
npm install heybooster-loader
```

Then, import and register the component:


## Global Registration

main.js
```
import Loader from "heybooster-loader";
import "heybooster-loader/style.css"

app.use(Loader);
```

## Local Registration

* Composition Api

```
<script setup>
import { Loader } from "heybooster-loader";
import "heybooster-loader/style.css";
</script>
```

* Options Api
```
import { Loader } from "heybooster-loader";
import "heybooster-loader/style.css";

export default {
  components: {
    Loader
  },
}
```


## Usage


* Example 1
```
<template>
  <main>
    <Loader>
      <template #description>
        <span>Please Wait...</span>
      </template>
    </Loader>
  </main>
</template>
```
* Example 2

```
<template>
  <main>
    <Loader/> 
  </main>
</template>
```

* Example 3

```
<template>
  <main>
    <Loader icon="my-icon.svg"/> 
  </main>
</template>
```



## License
[![License](https://img.shields.io/badge/LICENSE-GPL--3.0-orange)](https://github.com/mustafadalga/heybooster-loader/blob/main/LICENSE)