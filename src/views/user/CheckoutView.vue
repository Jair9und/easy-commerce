<script setup>
import { reactive } from 'vue';
import { RouterLink,useRouter } from 'vue-router';

import UserLayout from '@/layouts/UserLayout.vue'

import { useCartStore } from '@/stores/user/cart';

const FormData = [
    {
        name: 'Email address',
        field: 'email'
    },
    {
        name:'Name',
        field: 'name'
    },
    {
        name:'Address',
        field: 'address'
    },
    {
        name:'Note',
        field: 'note'
    }
]

const router = useRouter();
const cartStore = useCartStore();

const userFormData = reactive({
    email: '',
    name: '',
    address: '',
    note: ''
})

const payment = () => {
    cartStore.placeorder(userFormData)
    router.push({name:'success'})
}
</script>

<template>
    <UserLayout>
        <h1 class="text-3xl font-bold m-4">Checkout</h1>
        <div class="flex">
            <section class="flex-auto w-64 bg-base-200 p-8">
                <div v-for="form in FormData" class="form-control w-full">
                    <div class="label">
                        <span class="label-text">{{ form.name }}</span>
                    </div>
                    <input v-model="userFormData[form.field]" type="text" placeholder="Type here" class="input input-bordered w-full" />
                </div>
                <button @click="payment" class="btn btn-neutral w-full mt-4">ชำระเงิน</button>
            </section>
            <section class="flex-auto w-32 bg-slate-200 px-2">
                <div v-for="item in cartStore.items" class="flex bg-white m-8 py-4">
                    <div class="flex-1">
                        <img class="w-full p-8" :src="item.imageUrl">
                    </div>
                    <div class="flex-1">
                        <div class="flex flex-col justify-between h-full">
                            <div>
                                <div><b>{{ item.name }}</b></div>
                                <div>จำนวน {{ item.quantity }}</div>
                            </div>
                            <RouterLink :to="{name:'cart'}">Edit</RouterLink>
                        </div>
                    </div>
                </div>
                <div class="divider"></div>
                <div class="p-4">
                    <div><b>Order Summary</b></div>
                    <div class="flex justify-between">
                        <div>ราคาสินค้าทั้งหมด</div>
                        <div>{{ cartStore.summaryPrice }}</div>
                    </div>
                    <div class="flex justify-between">
                        <div>ค่าส่ง</div>
                        <div>0</div>
                    </div>
                </div>
                <div class="divider"></div>
                <div class="flex justify-between p-4 mb-4">
                        <div>ราคาทั้งหมด</div>
                        <div>{{ cartStore.summaryPrice }}</div>
                    </div>
            </section>
        </div>
    </UserLayout>
</template>