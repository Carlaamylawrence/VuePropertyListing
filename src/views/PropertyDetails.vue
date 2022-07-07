<template>
  <p>This is the id {{ $route.params.id }}</p>
  <div v-if="property">
    <div class="container d-flex justify-content-center">
      <div class="singlePropCard m-4">
        <img :src="property.image" class="propImage" />
        <div class="price-details">
          <p>R {{ property.price }}</p>
          <p>For {{ property.status }}</p>
        </div>
        <h4>{{ property.title }}</h4>
        <div class="property-info d-flex justify-content-center">
          <li><i class="fa-solid fa-bed"></i> {{ property.bedrooms }}</li>
          <li><i class="fa-solid fa-shower"></i> {{ property.baths }}</li>
          <li><i class="fa-solid fa-car"></i> {{ property.garage }}</li>
          <li><i class="fa-solid fa-ruler"></i> {{ property.size }}m²</li>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      property: null,
    };
  },
  mounted() {
    fetch("http://localhost:3000/properties/" + this.$route.params.id)
      .then((res) => res.json())
      .then((data) => {
        this.property = data;
      });
  },
};
</script>
<style>
.propImage {
  width: 100%;
  height: 350px;
}
</style>
