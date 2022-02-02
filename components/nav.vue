<template>
  <div class="w-full shadow-lg">
    <div class="flex justify-start py-4 mx-4">
      <img src="~/assets/images/logo2.png" alt="" class="w-10 h-10" />
    </div>
    <div class="justify-end items-end flex flex-row">
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
    <div v-if="sidenavOn" class="side-nav">
      <div>
        <a @click="sidenavOn = false" href="#home" class="nav-item">Home</a>

        <a @click="sidenavOn = false" href="#about" class="nav-item">About</a>

        <a @click="sidenavOn = false" href="#skills" class="nav-item">Skills</a>

        <a @click="sidenavOn = false" href="#works" class="nav-item">Works</a>

        <a @click="sidenavOn = false" href="#contact" class="nav-item"
          >Contact</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  return: {
    sidenavOn: false,
  },
};
</script>

<style>
.side-nav {
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(
    to bottom left,
    rgba(0, 0, 0, 0.775),
    #2c3e50
  );
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9;
  animation: slidedown 0.45s;
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
