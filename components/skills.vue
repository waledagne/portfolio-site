<template>
  <div id="skill">
    <div class="w-full md:w-2/3 mt-40 md:mx-24 md:px-20">
      <div class="flex flex-col md:flex-row justify-start">
        <div class="flex flex-col w-full">
          <h2 class="text-gray-300 text-4xl font-semibold">
            Technologies I work With
          </h2>
          <!-- list 4 items in flex col and list another 4 items in flex row -->
          <ul class="flex flex-col md:flex-row justify-start mt-8">
            <li class="flex flex-col w-full">
              <div class="flex flex-row">
                <h3 class="text-gray-300 text-lg font-semibold">HTML</h3>
                <img class="px-2" src="~/assets/images/html.svg" alt="" />
              </div>
              <div class="flex flex-row">
                <h3 class="text-gray-300 text-lg font-semibold mt-3">CSS</h3>
                <img class="mx-4" src="~/assets/images/css3.svg" alt="" />
              </div>
              <div class="flex flex-row">
                <h3 class="text-gray-300 text-lg font-semibold mt-3">
                  Javascript
                </h3>
                <img
                  class="mx-4 my-4"
                  src="~/assets/images/javascript.svg"
                  alt=""
                />
              </div>
            </li>
            <li class="flex flex-col w-full">
              <div class="flex flex-row">
                <h3 class="text-gray-300 text-lg font-semibold">Vue Js</h3>
                <img class="px-2" src="~/assets/images/vuejs.svg" alt="" />
              </div>
              <div class="flex flex-row">
                <h3 class="text-gray-300 text-lg font-semibold mt-3">
                  Nuxt Js
                </h3>
                <img class="mx-2" src="~/assets/images/nuxt.svg" alt="" />
              </div>
              <h3 class="text-gray-300 text-lg font-semibold mt-3">
                Tailwind Css
              </h3>
            </li>
            <li class="flex flex-col w-full">
              <div class="flex flex-row">
                <h3 class="text-lg font-semibold text-gray-300">Node Js</h3>
                <img class="mx-3" src="~/assets/images/node.svg" alt="" />
              </div>
              <h3
                class="text-lg font-semibold mt-3 text-transparent text-gray-300"
              >
                Laravel
              </h3>
              <h3
                class="text-lg font-semibold mt-3 text-transparent text-gray-300"
              >
                Mongo DB
              </h3>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
