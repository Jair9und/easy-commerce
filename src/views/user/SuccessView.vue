<script setup>
import { ref, onMounted } from 'vue';
import UserLayout from '@/layouts/UserLayout.vue'
import { useCartStore } from '@/stores/user/cart';

const cartStore = useCartStore()
const orderData = ref({})

onMounted(()=>{
    cartStore.loadCheckout()
    if(cartStore.checkout.orderNumber){
        orderData.value = cartStore.checkout
    }
    console.log(cartStore.checkout)
})
</script>

<template>
    <UserLayout>
        <div class="max-w-2xl mx-auto border border-base-200 shadow-xl p-8 my-4">
            <div>
                <div class="text-2xl font-bold">Your order is successful!</div>
                <div>Hi {{ orderData.name }}</div>
                <div>เตรียมรอรับสินค้าได้เลย</div>
            </div>
            <div class="divider"></div>
            <div class="grid grid-cols-4 gap-2">
                <div>
                    <div class="font-bold">Order date</div>
                    <div>{{ orderData.orderDate }}</div>
                </div>
                <div>
                    <div class="font-bold">Order number</div>
                    <div>{{ orderData.orderNumber }}</div>
                </div>
                <div>
                    <div class="font-bold">Payment method</div>
                    <div>{{ orderData.paymentMethod }}</div>
                </div>
                <div>
                    <div class="font-bold">Address</div>
                    <div>{{ orderData.address }}</div>
                </div>
            </div>
            <div class="divider"></div>
            <div v-for="product in orderData.products" class="grid grid-cols-4 gap-2 mb-4 items-center">
                <div>
                    <img class="w-full" :src="product.imageUrl">
                </div>
                <div>
                    <b>{{ product.name }}</b>
                </div>
                <div>
                    {{product.price}}
                </div>
                <div>
                    จำนวน: {{product.quantity}}
                </div>
                <div>
                    ราคารวม: {{product.price * product.quantity}}
                </div>
            </div>
            <div class="divider"></div>
            <div class="flex justify-between mt-4">
                <div class="font-bold">ราคาสินค้าทั้งหมด</div>
                <div>{{ orderData.totalPrice}}</div>
            </div>
            <div class="divider"></div>
            <div class="flex justify-between mt-4">
                <div class="font-bold">ค่าส่ง</div>
                <div>0</div>
            </div>
            <div class="divider"></div>
            <div class="flex justify-between mt-4">
                <div class="font-bold">ราคาทั้งสิ้น</div>
                <div>{{ orderData.totalPrice}}</div>
            </div>
            <div class="divider"></div>
            <div>ขอบคุณที่มาซื้อของเรา</div>
        </div>
    </UserLayout>
</template>