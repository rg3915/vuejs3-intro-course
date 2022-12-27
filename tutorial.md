# Tutorial

## Composition API

```js
setup() {
    let name = 'Regis'

    const changeName = () => {
      //code here
    }

    return {
        name,
        changeName,
    }
}

```

### Transformar em reativo

```js
import { ref } from 'vue';

setup() {
    let name = 'Regis'
    const user = ref({
        first_name = 'Regis',
        last_name = 'Santos',
    })

    const changeName = () => {
      user.value.first_name
    }

    return {
        name,
        user,
        changeName,
    }
}
```


### Computed e Watch

```js
import { ref, computed, watch } from 'vue';

setup() {
    let name = 'Regis'
    const user = ref({
        first_name = 'Regis',
        last_name = 'Santos',
    })

    const fullName = computed(() => `${user.value.first_name} ${user.value.last_name}`)

    watch(user, () => {
      console.log('Escutando o user')
    }, {
        deep: true
    })

    const changeName = () => {
      user.value.first_name
    }

    return {
        name,
        user,
        fullName,
        changeName,
    }
}
```



### Props e Emit

```js
<template>
  <button>
    <slot></slot>
  </button>
</template>

<script>
  export default {
    name: 'appButton',
    props: {
        variant: {
            type: String,
            default: '',
        }
    },
    setup(props, context) {
      console.log(props.variant)
    }
  }
</script>
```


Mas se você preferir o método destrutivo podemos fazer

```js
    setup(props, { slots }) {
      console.log(props.variant)
      console.log(slots)
    }
```

E o emit

```js
// AppButton.vue
<template>
  <button @click="sendData">
    <slot></slot>
  </button>
</template>

<script>
  export default {
    name: 'appButton',
    props: {
        variant: {
            type: String,
            default: '',
        }
    },
    setup(props, { slots, emit }) {
      console.log(props.variant)
      console.log(slots)

      const sendData = () => {
        emit('update', props.variant)
      }

      return {
        sendData
      }
    }
  }
</script>
```

```js
// App.vue
<template>
  <div>
    <AppButton
      variant="danger"
      @update="getUpdate"
    >
      Save
    </AppButton>
  </div>
</template>

<script>
  import AppButton from '@/components/AppButton';

  export default {
    name: 'App',
    components: { AppButton },
    setup() {
      const getUpdate = (data) => {
        console.log('getUpdate', data)
      }

      return {
        getUpdate
      }
    }
  }
</script>
```

