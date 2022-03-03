<template>
  <div>
    <!-- make a list of four span texts in flex col and  -->
    <div class="flex flex-col justify-center items-center">
      <span
        class="text-lg hover:underline"
        @click.native="sidenavActive = false"
        >Home</span
      >
      <span
        class="text-lg text-white mt-10"
        @click.native="sidenavActive = false"
        >About</span
      >
      <span class="text-lg mt-10" @click.native="sidenavActive = false"
        >Works</span
      >
      <span class="text-lg mt-10" @click.native="sidenavActive = false"
        >Contact</span
      >
      <span class="text-lg mt-10" @click.native="sidenavActive = false"
        >Skills</span
      >
    </div>
  </div>
</template>
