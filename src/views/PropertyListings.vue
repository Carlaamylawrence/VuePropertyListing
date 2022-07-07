<template>
  <div class="card-display">
    <h1></h1>
    <PropertyCard
      v-for="property in properties"
      :key="property.id"
      :property="property"
    />
  </div>
</template>
<script>
import PropertyCard from "../components/PropertyCard.vue";
export default {
  components: { PropertyCard },
  data() {
    return { properties: [] };
  },
  mounted() {
    fetch("http://localhost:3000/properties")
      .then((res) => res.json())
      .then((data) => (this.properties = data))
      .catch((err) => console.log(err.message));
  },
};
</script>
<style>
.card-display {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
}

a {
  text-decoration: none;
  color: black;
}
</style>

<!-- npx json-server data/db.json --watch -->
