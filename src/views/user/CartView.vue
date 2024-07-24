<script setup>
import { RouterLink } from 'vue-router';
import UserLayout from '@/layouts/UserLayout.vue'
import Close from '@/components/icons/Close.vue'
import { useCartStore } from '@/stores/user/cart';

const cartStore = useCartStore();

const changeQuantity = (event, index) => {
    const newQuantity = parseInt(event.target.value);
    cartStore.updateQuantitiy(index, newQuantity)
}

</script>

<template>
    <UserLayout>
        <h1 class="text-3xl font-bold m-4">Shopping cart</h1>

        <div class="flex">

            <div class="flex-auto w-64 bg-base-200 p-4">
                <div v-if="cartStore.items.length === 0">
                    Cart is empty
                </div>
                <div class="flex" v-for="(item,index) in cartStore.items">
                    <div class="flex-1">
                        <img class="w-full p-10" :src="item.imageUrl">
                    </div>
                    <div class="flex-1">
                        <div class="flex flex-col justify-between h-full">
                            <div>
                                <div class="relative grid grid-cols-2 gap-4">
                                    <div>
                                        <div><b>{{ item.name }}</b></div>
                                        <div>{{item.about}}</div>
                                        <div>{{item.price}} B</div>
                                    </div>
                                    <div>
                                        <select v-model="item.quantity" class="p-4 w-1/2" @change="changeQuantity($event, index)">
                                            <option v-for="quantity in [1,2,3,4]">
                                                {{ quantity }}
                                            </option>
                                        </select>
                                    </div>
                                    <div @click="cartStore.removeItemInCart(index)" class="h-4 w-4 absolute top-0 right-0">
                                        <Close />
                                    </div>
                                </div>
                            </div>
                            <div><b>In stock</b></div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="flex-auto w-32 bg-stone-200 p-4">
                <div class="text-2xl font-bold">Order Summary</div>
                <div class="my-4 divide-y divide-black">
                    <div class="flex justify-between py-2">
                        <div>ราคาสินค้าทั้งหมด</div>
                        <div>{{ cartStore.summaryPrice }}</div>
                    </div>
                    <div class="flex justify-between py-2">
                        <div>ค่าส่ง</div>
                        <div>0 B</div>
                    </div>
                    <div class="flex justify-between py-2">
                        <div>ราคารวมทั้งหมด</div>
                        <div>{{cartStore.summaryPrice}}</div>
                    </div>
                    <RouterLink :to="{name: 'checkout'}" class="btn btn-neutral w-full mt-4">
                        ชำระเงิน
                    </RouterLink>
                </div>
            </div>
        </div>
    </UserLayout>
</template>