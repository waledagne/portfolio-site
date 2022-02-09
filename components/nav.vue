<template>
  <div class="w-full shadow-lg">
    <div class="flex justify-start md:py-4 mx-4">
      <img src="~/assets/images/logo2.png" alt="" class="w-10 h-10" />
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
        <li class="mx-3 hover:text-accent text-lg text-gray-400">Works</li>
        <li class="mx-4 hover:text-accent text-lg text-gray-400">Contact</li>
        <li>
          <button class="btn btn-sm btn-outline btn-accent">Resume</button>
        </li>
      </ul>
    </div>

    <nav class="mobile-nav">
      <div class="inline-flex relative">
        <div
          class="text-white"
          v-if="!sidenavActive"
          @click="sidenavActive = true"
        >
          <i class="fa fa-bars text-accent text-3xl"></i>
          mo
        </div>
        <div v-else @click="sidenavActive = false">
          <i class="fa fa-times text-accent text-3xl"></i>
        </div>
      </div>
    </nav>

    <div v-if="sidenavActive" class="sidenav">
      <div
        class="w-full flex flex-col justify-start items-center border-b-2 mb-5 pb-2"
      >
        <div class="text-center">
          <div
            class="mx-auto w-14 h-14 overflow-hidden rounded-full border-2 border-accent shadow-lg"
          ></div>
          <div class="w-full flex items-center justify-between"></div>
        </div>
        <nuxt-link
          class="text-lg mb-2"
          to="/"
          @click.native="sidenavActive = false"
          >Home</nuxt-link
        >
        <nuxt-link
          class="text-lg mb-2"
          to="/about"
          @click.native="sidenavActive = false"
          >About</nuxt-link
        >

        <nuxt-link class="text-lg mb-2" to="/gaiaverse">Gaiaverse</nuxt-link>
      </div>
      <div
        v-if="sidenavActive"
        class="bg-black bg-opacity-50 fixed top-0 left-0 z-40 w-screen h-screen"
        @click="sidenavActive = false"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  return: {
    sidenavActive: false,
  },
};
</script>

<style>
.desktop-nav {
  @apply hidden sm:flex;
}

.mobile-nav {
  @apply w-full md:hidden px-5 box-border justify-end items-end;
}
.sidenav {
  @apply w-3/5 md:hidden fixed rounded-lg top-14 right-0 bg-white shadow text-gray-800 z-50 flex flex-col justify-start items-start p-5;
  animation: slidein 0.4s forwards;
}
.animate-slide-down {
  animation: slidein 0.4s forwards;
}
@keyframes slidein {
  from {
    left: -200px;
  }
  to {
    left: 0;
  }
}
@keyframes slidedown {
  from {
    top: -1000px;
  }
  to {
    top: 0;
  }
}
</style>
