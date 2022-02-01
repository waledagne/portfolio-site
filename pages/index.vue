<template>
  <div class="">
    <div class="mb-9">
      <Nav />
      <div class="flex flex-col justify-start items-start px-20 mx-24 mt-10">
        <h1 class="text-accent text-2xl">Hi, my name is</h1>
        <h1 class="text-gray-200 font-semibold text-6xl mt-4">
          Walelgn Dagne.
        </h1>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from "~/components/nav.vue";
export default {
  components: {
    Nav,
  },
};
</script>
