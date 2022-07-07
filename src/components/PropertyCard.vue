<template>
  <router-link
    :to="{ name: 'PropertyDetails', params: { id: property.id } }"
    class="cards"
  >
    <img :src="property.image" style="width: 100%; height: 200px" />
    <div class="price-details">
      <p>R {{ property.price }}</p>
      <p>For {{ property.status }}</p>
    </div>
    <h4>{{ property.title }}</h4>
    <div class="property-info">
      <li><i class="fa-solid fa-bed"></i> {{ property.bedrooms }}</li>
      <li><i class="fa-solid fa-shower"></i> {{ property.baths }}</li>
      <li><i class="fa-solid fa-car"></i> {{ property.garage }}</li>
      <li><i class="fa-solid fa-ruler"></i> {{ property.size }}m²</li>
    </div>
  </router-link>
</template>

<script>
export default {
  props: ["property"],
};
</script>

<style>
.cards {
  position: relative;
  border: 2px solid grey;
  margin: 2rem;
  padding: 1rem;
}

.property-info {
  display: flex;
  margin-top: -1rem;
}

.price-details {
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.7) 0%,
    rgba(0, 0, 0, 0) 100%
  );
  color: white;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 30px;
  opacity: 0;
  transition: all 0.3s linear;
  display: flex;
  flex-direction: column;
  justify-content: end;
}

.cards:hover .price-details {
  opacity: 1;
}

.cards:hover a {
  text-decoration: none;
  color: black;
}

li {
  list-style-type: none;
  padding: 1rem;
}
</style>
