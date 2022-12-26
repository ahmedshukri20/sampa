<template>
    <div>
        <PageTitle :pageTitle="product.name" />
        <ProductsDetails 
            :id = "product.id"
            :name = "product.name" 
            :price = "product.price"
            :image = "product.image"
        />
    </div>
</template>

<script>
import PageTitle from '../../components/Common/PageTitle'
import ProductsDetails from '../../components/products-details/ProductsDetails'

export default {
    components: {
        PageTitle,
        ProductsDetails,
    },

    data() {
        return {
            text: '',
            message: '',
            id: this.$route.params.id
        }
    },

    methods:{
        send(){
            this.message = this.text
            this.text = ''
        }
    },

    provide() {
        return { myText: 'Product Details'}
    },

    computed: {
        product(){
            return this.$store.state.products.all.find(product => product.id === this.id);
        }
    }
}
</script>