<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from './libs/supabaseClient'

const countries = ref([])

async function getCountries() {
  const { data } = await supabase.from('countries').select()
  countries.value = data
}

onMounted(() => {
  getCountries()
})
</script>

<template>
  <h1>This information is coming from my Supabase API table</h1>
  <h2>I think I like React more than Vue so far...</h2>
  <ul>
    <li v-for="country in countries" :key="country.id">{{ country.name }}</li>
  </ul>
</template>