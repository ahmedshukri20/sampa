<template>
    <div class="shop-details-area ptb-80">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-5">
                    <div class="products-details-image">
                        <img :src="image" alt="img">
                    </div>
                </div>

                <div class="col-lg-7">
                    <div class="products-details">
                        <h3>{{name}}</h3>

                        <div class="price">
                            ${{price}}
                        </div>
                        <ul class="rating">
                            <li><i class="flaticon-star-1"></i></li>
                            <li><i class="flaticon-star-1"></i></li>
                            <li><i class="flaticon-star-1"></i></li>
                            <li><i class="flaticon-star-1"></i></li>
                            <li><i class="flaticon-star-1"></i></li>
                        </ul>

                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>

                        <div class="availability">
                            Availability: <span>In Stock</span>
                        </div>

                        <form>
                            <div class="quantity align-items-center">
                                <span>Quantity:</span>
                                <div class="input-counter">
                                    <span @click="decreaseQuantity()" class="minus-btn">
                                        <feather type="minus"></feather>
                                    </span>
                                    {{quantity}}
                                    <span @click="increaseQuantity()" class="plus-btn">
                                        <feather type="plus"></feather>
                                    </span>
                                </div>
                            </div>
                            <button 
                                v-if="getExistPId" 
                                type="submit" 
                                class="default-btn"
                                @click="addToCart()"
                            >
                                Already Added
                            </button>

                            <button 
                                v-else
                                type="submit" 
                                class="default-btn"
                                @click="addToCart()"
                            >
                                Add to Cart
                            </button>
                            <a href="#" class="add-to-wishlist-btn" title="Add to Wishlist"><feather type="heart"></feather></a>
                            
                            <div class="buy-btn">
                                <a href="#" class="btn btn-primary">Buy it Now</a>
                            </div>
                        </form>

                        <div class="custom-payment-options">
                            <span>Guaranteed safe checkout:</span>

                            <div class="payment-methods">
                                <img src="~/assets/img/payment-image/1.svg" alt="image">
                                <img src="~/assets/img/payment-image/2.svg" alt="image">
                                <img src="~/assets/img/payment-image/3.svg" alt="image">
                                <img src="~/assets/img/payment-image/4.svg" alt="image">
                                <img src="~/assets/img/payment-image/5.svg" alt="image">
                                <img src="~/assets/img/payment-image/6.svg" alt="image">
                                <img src="~/assets/img/payment-image/7.svg" alt="image">
                            </div>
                        </div>

                        <div class="products-share-social">
                            <span>Share:</span>

                            <ul>
                                <li><a href="#" class="facebook"><feather type="facebook"></feather></a></li>
                                <li><a href="#" class="twitter"><feather type="twitter"></feather></a></li>
                                <li><a href="#" class="linkedin"><feather type="linkedin"></feather></a></li>
                                <li><a href="#" class="instagram"><feather type="instagram"></feather></a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="col-lg-12 col-md-12">
                    <div class="products-details-tabs">
                        <ul id="tabs">
                            <li class="active" id="tab_1">Description</li>
                        </ul>

                        <div class="content show">
                            <div class="products-description">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Lorem Ipsum is simply dummy text of the printing.</p>

                                <ul class="additional-information">
                                    <li><span>Brand</span> ThemeForest</li>
                                    <li><span>Color</span> Brown</li>
                                    <li><span>Size</span> Large, Medium</li>
                                    <li><span>Weight</span> 27 kg</li>
                                    <li><span>Dimensions</span> 16 x 22 x 123 cm</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProductsDetails',
    data(){
        return {
            getExistPId: false,
            quantity: 1
        }
    },
    props: ['id', 'name', 'price', 'image' ],
    computed: {
        cart(){
            return this.$store.getters.cart
        }
    },
    methods: {
        addToCart(){
            const product = [{
                id: this.id,
                name: this.name,
                price: this.price,
                image: this.image,
                quantity: this.quantity
            }]

            if(this.cart.length > 0){
                let id = this.id 
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
                    this.getExistPId = true
                    this.$toast.info("Already added to the cart");
                }
            } else {
                this.$store.dispatch('addToCart', product)
                this.$toast("Added to cart",{
                    icon: 'fas fa-cart-plus'
                });
            }
        },
        increaseQuantity(){
            if(this.quantity > 9){
                this.$toast("Can't add more than 10",{
                    icon: 'fas fa-cart-plus'
                });
            } else {
                this.quantity++
            }
        },
        decreaseQuantity() {
            if(this.quantity < 2){
                this.$toast("Can't add less than 1",{
                    icon: 'fas fa-cart-plus'
                });
            } else {
                this.quantity--;
            }
        },
    }
}
</script>