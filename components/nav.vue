<template>
  <div class="w-1/2 md:w-full shadow-lg">
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
  </div>
</template>

<script>
export default {};
</script>
