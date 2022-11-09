<template>
  {{ user.first_name }} {{ user.last_name }} <br>
  {{ admin.first_name }} {{ admin.last_name }} <br>
  <br>
  <img @click="changeName" alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import { reactive, ref } from 'vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  setup() {

    const user = reactive({
      first_name: 'Jon',
      last_name: 'Snow'
    })

    const admin = ref({
      first_name: 'Admin',
      last_name: 'Master'
    })

    let name = 'Tiago'

    const changeName = () => {
      name = 'Jon Snow'
      user.first_name = 'James'
      // em ref não se esqueça do .value
      admin.value.first_name = 'Alan'
    }

    return {
      name,
      admin,
      user,
      changeName
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
