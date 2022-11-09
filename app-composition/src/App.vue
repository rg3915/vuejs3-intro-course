<template>
  {{ user.first_name }} {{ user.last_name }} <br>
  {{ admin.first_name }} {{ admin.last_name }} <br>
  Full name: {{ fullName }} <br>

  <button @click="admin.first_name = 'Super Admin'">Atualizar</button>
  <br>
  <img @click="changeName" alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import { reactive, ref, computed, watch } from 'vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  setup() {
    // computed não funciona com reactive
    const user = reactive({
      first_name: 'Jon',
      last_name: 'Snow'
    })

    const fullName = computed(() => {
      return `${admin.value.first_name} ${admin.value.last_name}`
    })

    const admin = ref({
      first_name: 'Admin',
      last_name: 'Master'
    })

    watch(admin, () => {
      console.log('Watch')
    }, {
      deep: true
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
      fullName,
      changeName,
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
