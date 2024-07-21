<script setup>
import UserLayout from '@/layouts/UserLayout.vue'
import Product from '@/components/Product.vue';
import { useProductStore } from '@/stores/user/product';

const productStore = useProductStore();
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

         <Product :products="productStore.list" />
    </UserLayout>
</template>