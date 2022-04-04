<template>
  <div class="w-1/2 md:w-full md:shadow-lg">
    <div class="">
      <!-- <img
        src="~/assets/images/logo2.png"
        alt=""
        class="md:visible sm:hidden w-10 h-10"
      /> -->
      <span class="text-2xl text-accent font-bold">WD</span>
    </div>
    <div class="desktop-nav justify-end items-end flex flex-row">
      <ul class="text-white flex flex-row justify-between mx-2">
        <nuxt-link to="#about"
          ><li class="mx-3 hover:text-accent text-lg text-gray-400">
            Home
          </li></nuxt-link
        >

        <a href="#about">
          <li class="mx-3 hover:text-accent text-lg text-gray-400">About</li></a
        >
        <a href="#skill">
          <li class="mx-4 hover:text-accent text-lg text-gray-400">
            Skills
          </li></a
        >
        <a href="#works">
          <li class="mx-3 hover:text-accent text-lg text-gray-400">Works</li></a
        >
        <li class="mx-4 hover:text-accent text-lg text-gray-400">Contact</li>
      </ul>
    </div>

    <nav class="mobile-nav">
      <!-- <nuxt-link to="/" class="flex items-center text-xl font-bold text-accent">
        <img src="~/assets/images/logo2.png" class="w-10" alt="" />
      </nuxt-link> -->
      <div
        v-if="!sidenavActive"
        @click="sidenavActive = true"
        class="justify-end items-end fixed bg-opacity-40"
      >
        <i class="fa fa-bars text-accent text-3xl"></i>
      </div>
      <div v-else @click="sidenavActive = false">
        <i class="fa fa-times text-accent text-3xl"></i>
      </div>
    </nav>

    <div v-if="sidenavActive" class="sidenav">
      <nuxt-link
        class="text-lg hover:underline"
        to="/"
        @click.native="sidenavActive = false"
        >Home</nuxt-link
      >

      <nuxt-link
        class="text-lg mt-10"
        to="/#about"
        @click.native="sidenavActive = false"
        >About</nuxt-link
      >

      <nuxt-link
        class="text-lg mt-10"
        to="/#works"
        @click.native="sidenavActive = false"
        >Works</nuxt-link
      >
      <nuxt-link
        class="text-lg mt-10"
        to="/partners"
        @click.native="sidenavActive = false"
        >Contact</nuxt-link
      >
      <nuxt-link
        to="#skills"
        class="text-lg mt-10"
        @click.native="sidenavActive = false"
      >
        Skills
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sidenavActive: false,
    };
  },
};
</script>

<style>
nav {
  @apply w-full  px-16 flex justify-between items-center h-14 fixed top-0 left-0 z-50;
}
.desktop-nav {
  @apply hidden sm:flex;
}

.mobile-nav {
  @apply sm:hidden justify-end items-end bg-opacity-40;
}

.sidenav {
  @apply w-72 h-full md:hidden py-5 px-6 fixed rounded-lg top-0 right-0 bg-black  opacity-60 shadow text-gray-400 font-semibold z-10 flex flex-col justify-center items-center;
  animation: slidein 0.4s forwards;
}

@keyframes slidein {
  0% {
    transform: translateX(-90px);
    opacity: 0;
  }
  100% {
    transform: translateX(0px);
    opacity: 1;
  }
}
</style>
