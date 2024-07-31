<script setup>
import AdminLayout from "@/layouts/AdminLayout.vue";

const options = {
  chart: {
    id: 'vuechart-example'
  },
  xaxis: {
    categories: [1991,1992,1993,1994,1005,1006,1997,1998]
  }
}

const series = [{
  name: 'series-1',
  data: [30,40,45,50,55,60,70,91]
}]
</script>

<template>
  <AdminLayout>
    Dashboard View
    <div>
      <apexchart width="500" type="bar" :options="options" :series="series"></apexchart>
    </div>
  </AdminLayout>
</template>

<style scoped>

</style>