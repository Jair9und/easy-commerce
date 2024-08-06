<script setup>
import {ref} from "vue";

import AdminLayout from "@/layouts/AdminLayout.vue";
import Edit from "@/components/icons/Edit.vue";
import Trash from "@/components/icons/Trash.vue";

const products = ref([
  {
    name: 'test',
    image: 'https://fastly.picsum.photos/id/121/200/200.jpg?hmac=0aiR--xgWy1aIM85HCFMySsuQ7DJJBE6XW_Yv4nqU6s',
    price: 200,
    quantity: 20,
    remainQuantity: 11,
    status: 'open',
    updatedAt: (new Date()).toISOString(),
  }
])
</script>

<template>
  <AdminLayout>
    <div class="flex items-center justify-between my-4">
      <div class="text-3xl font-bold">Product</div>
      <div>
        <button class="btn btn-neutral">Add New</button>
      </div>
    </div>
    <div class="overflow-x-auto">
      <table class="table">
        <!-- head -->
        <thead>
        <tr>
          <th>Name</th>
          <th>Image</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Status</th>
          <th>Update At</th>
          <th>Action</th>
        </tr>
        </thead>
        <tbody>
        <!-- row 1 -->
        <tr v-for="product in products">
          <th>{{product.name}}</th>
          <td>
            <img :src="product.image" alt="product" class="w-12">
          </td>
          <td>{{ product.price }}</td>
          <td>{{product.remainQuantity}} / {{ product.quantity }}</td>
          <td>
            <div class="badge badge-success">
              {{ product.status }}
            </div>
          </td>
          <td>{{ product.updatedAt }}</td>
          <td>
            <div class="flex gap-2">
              <div class="btn btn-ghost"><Edit></Edit></div>
              <div class="btn btn-ghost"><Trash></Trash></div>
            </div>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </AdminLayout>
</template>

<style scoped>

</style>