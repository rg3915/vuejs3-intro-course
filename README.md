# vuejs3-intro-course

Curso introdutório de VueJS 3 do [Tiago Matos](https://github.com/tiagomatosweb).

[curso-gratuito-vue3](https://github.com/tiagomatosweb/curso-gratuito-vue3)

<a href="https://www.youtube.com/watch?v=9DRY-aNPta0&list=PLcoYAcR89n-qTYqfWTGxXMnAvCqY3JF8w">
    <img src="./img/youtube.png">
</a>


## DOC

https://vuejs.org/


## Instalação

```
npm install -g @vue/cli
vue --version
```

## Como rodar o projeto

```
cd app
npm install
npm run serve
```

**Obs:** Veja os commits.

## Passo a passo

### Criando o projeto

```
vue create app
> Default ([Vue 3] babel, eslint)
```

### Criando projeto - vue-router

```
vue create app-router
cd app-router
vue add router
```

### Criando projeto - vuex

```
vue create app-vuex
cd app-vuex
vue add vuex
```

### Criando projeto - composition

```
vue create app-composition
cd app-composition
```

### Criando projeto - todo

```
vue create app-todo
cd app-todo
```

### Instalando TailwindCSS

```
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

```
mkdir -p src/assets/css

cat << EOF > src/assets/css/main.css
@tailwind base;
@tailwind components;
@tailwind utilities;
EOF
```

Baixe o spinner.svg

### json-server

```
npm install -g json-server
```

```
mkdir api
touch api/db.json
```

```
json-server --watch api/db.json
```

### Axios e vuex

```
npm install axios
vue add vuex
```