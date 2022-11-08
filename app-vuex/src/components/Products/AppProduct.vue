<template>
    <div class="card">
        {{ product.name }} - {{ product.price }} <br>
        <button @click="addProduct()">
            Adicionar
        </button>

        <button
            v-if="inCart"
            @click="removeProduct()"
        >
            Remove
        </button>
    </div>
</template>

<script>
export default {
    props: {
        product: Object
    },
    data() {
        return {
            inCart: false,
        }
    },
    methods: {
        addProduct() {
            this.inCart = true
            this.$store.commit('addProduct', this.product)
        },
        removeProduct() {
            this.inCart = false
            this.$store.commit('removeProduct', this.product.id)
        },
    },
}
</script>

<style>
.card {
    background: bisque;
    padding: 6px;
    margin-bottom: 5px;
}
</style>