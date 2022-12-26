<template>
    <div class="shop-area ptb-80">
        <div class="container">
            <div class="woocommerce-topbar">
                <div class="row align-items-center">
                    <div class="col-lg-9 col-md-7 col-sm-7">
                        <div class="woocommerce-result-count">
                            <p>Showing 1-8 of 14 results</p>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-5 col-sm-5">
                        <div class="woocommerce-topbar-ordering">
                            <select class="form-select">
                                <option value="1">Sort by Popularity</option>
                                <option value="2">Sort by Average Rating</option>
                                <option value="0">Sort by Latest</option>
                                <option value="3">Sort by price: Low to High</option>
                                <option value="4">Sort by price: High to Low</option>
                                <option value="5">Sort by New</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row">
                <div 
                    class="col-lg-3 col-md-6 col-sm-6"
                    v-for="product in products"
                    :key="product.id"
                >
                    <div class="single-products">
                        <div class="products-image">
                            <NuxtLink :to="`/products-details/${product.id}`">
                                <img :src="product.image" alt="image">
                            </NuxtLink>
                        </div>

                        <div class="products-content">
                            <h3>
                                <NuxtLink :to="`/products-details/${product.id}`">
                                    {{product.name}}
                                </NuxtLink>
                            </h3>
                            <span>${{product.price}}</span>
                            <ul>
                                <li><i class="flaticon-star-1"></i></li>
                                <li><i class="flaticon-star-1"></i></li>
                                <li><i class="flaticon-star-1"></i></li>
                                <li><i class="flaticon-star-1"></i></li>
                                <li><i class="flaticon-star-1"></i></li>
                            </ul>
                            <a 
                                v-if="getExistPId === product.id"
                                href="javascript:void(0)" 
                                class="add-to-cart-btn"
                                @click="addToCart(product)"
                            >
                                Already Added!
                            </a>

                            <a 
                                v-else
                                href="javascript:void(0)" 
                                class="add-to-cart-btn"
                                @click="addToCart(product)"
                            >
                                Add to Cart
                            </a>
                        </div>
                        <div v-if="product.sale" class="sale-btn">
                            Sale
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Shop',

    data(){
        return {
            getExistPId: null
        }
    },

    computed: {
        products(){
            return this.$store.state.products.all
        },
        cart(){
            return this.$store.getters.cart
        }
    },
    methods: {
        addToCart(item){
            const product = [{
                id: item.id,
                name: item.name,
                price: item.price,
                image: item.image,
                quantity: 1
            }]

            if(this.cart.length > 0){
                let id = item.id 
                this.getExistPId = id
                let cartIndex = this.cart.findIndex(cart => {
                    return cart.id == id
                })

                if(cartIndex == -1){
                    this.$store.dispatch('addToCart', product);
                    this.$toast("Added to cart", {
                        icon: 'fas fa-cart-plus'
                    });
                } else {
                    this.$store.dispatch('updateCart', {
                        id, unit: 1, cart: this.cart
                    });
                    this.$toast.info("Already added to the cart and update with one");
                }
            } else {
                this.$store.dispatch('addToCart', product)
                this.$toast("Added to cart",{
                    icon: 'fas fa-cart-plus'
                });
            }
        }
    }
}
</script>