<template>
  <div class="container">
    <div v-if="error">
      {{ error }}
    </div>
    <ul v-else>
      <h1>List of Restaurants</h1>
      <li v-for="restaurant in restaurants" :key="restaurant.id">
        <h2>{{ restaurant.name }}</h2>
        <p>{{ restaurant.description }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      restaurants: [],
      error: null,
    }
  },
  async mounted() {
    try {
      this.restaurants = await this.$strapi.$restaurants.find()
    } catch (error) {
      this.error = error
    }
  },
}
</script>
