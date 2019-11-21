<template>
  <div class="counter">
    <p>{{ count }}</p>
    <p>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
    </p>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
    name: 'counter',
    computed: {
        ...mapState(['count'])
    },
    methods: {
        ...mapActions(['increment', 'decrement'])
    }
}
</script>