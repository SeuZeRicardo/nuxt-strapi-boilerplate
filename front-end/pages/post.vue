<template>
  <div class="container">
    <div v-if="error">
      {{ error }}
    </div>

    <form v-else id="form" @submit="handleSubmit">
      <h1>Create Restaurants</h1>

      <label for="name">Name</label>
      <input id="name" v-model="modifiedData.name" type="text" name="name" />

      <label for="description">Description</label>
      <input
        id="description"
        v-model="modifiedData.description"
        type="text"
        name="description"
      />
      <div>
        <br />
        <b>Select categories</b>
        <br />
        <div v-for="category in allCategories" :key="category.id">
          <label>{{ category.name }}</label>
          <input
            :id="category.id"
            v-model="modifiedData.categories"
            type="checkbox"
            :value="category.id"
            name="categories"
          />
        </div>
      </div>
      <br />

      <input type="submit" value="Submit" />
    </form>
  </div>
</template>

<script>
export default {
  name: 'Put',
  data() {
    return {
      allCategories: [],
      modifiedData: {
        name: '',
        description: '',
        categories: [],
      },
      error: null,
    }
  },
  async mounted() {
    try {
      this.allCategories = await this.$strapi.$categories.find()
    } catch (error) {
      this.error = error
    }
  },
  methods: {
    async handleSubmit(e) {
      e.preventDefault()

      try {
        await this.$strapi.$restaurants.create(this.modifiedData)
      } catch (error) {
        this.error = error
      }
    },
  },
}
</script>
