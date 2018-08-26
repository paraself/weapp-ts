const vueParser = require('vue-parser')
const vueFileContents = `
<template lang="pug">
.hello
  h1 {{ msg }}
</template>

<script lang="ts">
export default {
  name: 'Hello',

  data () {
    return {
      msg: 'Hello World!'
    }
  }

}
</script>

<script lang="wxs">
var a = 1
</script>

<style lang="wxss">
h1 {
  font-weight: normal;
}
</style>

`

const myScriptContents = vueParser.parse(vueFileContents, 'style', {
  lang: ['wxss']
})
console.log(myScriptContents)
