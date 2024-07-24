<script setup>
import { useRouter } from 'vue-router';

import UserLayout from '@/layouts/UserLayout.vue'
import Product from '@/components/Product.vue';

import { useProductStore } from '@/stores/user/product';
import { useCartStore } from '@/stores/user/cart';

const productStore = useProductStore();
const cartStore = useCartStore();
const router = useRouter();

const addToCart = (product) => {
    cartStore.addToCart(product)
    router.push({name: 'cart'})
}
</script>

<template>
    <UserLayout>
        <div class="hero bg-base-200 h-96">
            <div class="hero-content text-center">
                <div class="max-w-md">
                    <h1 class="text-5xl font-bold">Hello to Shopper</h1>
                    <p class="py-6">
                        Trust Me Bro !?
                    </p>
                </div>
            </div>
        </div>

         <Product 
            :products="productStore.list" 
            :addToCart="addToCart"
         />
    </UserLayout>
</template>