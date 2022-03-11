<template>
  <div id="works">
    <div
      class="w-full text-gray-300 text-2xl md:text-3xl font-semibold flex flex-col md:mx-24 md:px-20 mt-44 justify-start"
    >
      <h2
        class="heading"
        style="
          visibility: visible;
          opacity: 1;
          transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
          transition: opacity 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s,
            transform 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s;
        "
      >
        A few things I built
      </h2>

      <!-- make image cards  -->
      <div class="flex flex-col">
        <div
          class="flex flex-col md:flex-row md:justify-start md:items-start mt-8 relative"
        >
          <div class="w-full md:mx-4 relative">
            <div class="rounded-lg p-4">
              <div class="flex flex-row justify-center items-center">
                <img
                  src="~/assets/images/alemekina.png"
                  alt=""
                  class="hover12 w-full h-96 object-cover object-center"
                />
              </div>
            </div>
          </div>
          <div class="flex flex-col">
            <div
              class="shadow-lg rounded-sm w-full md:w-2/3 bg-blueblack mr-20 mx-0 mt-10 relative"
            >
              <p class="text-sm text-gray-400 px-8">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae
                error explicabo exercitationem tenetur, dignissimos, at deleniti
                sit fugiat placeat temporibus officia dolor minus dolorum nisi
                inventore ipsa nesciunt itaque. Fuga!
              </p>
            </div>
            <div class="flex flex-row mx-12 text-accent">
              <span class="font-thin text-sm md:text-lg mt-2 mx-2">Vue</span>
              <span class="font-thin text-sm md:text-lg mt-2 mx-2"
                >Nuxt Js</span
              >
              <span class="font-thin text-sm md:text-lg mt-2 mx-2"
                >Firebase</span
              >
              <span class="font-thin text-sm md:text-lg mt-2"
                >Tailwind Css</span
              >
            </div>
          </div>
        </div>
        <!-- second project -->

        <div class="flex flex-col">
          <div
            class="flex flex-col md:flex-row md:justify-start md:items-start mt-8 relative"
          >
            <div class="w-full md:mx-4 relative">
              <div class="rounded-lg shadow-lg p-4">
                <div class="flex flex-row justify-center items-center">
                  <img
                    src="~/assets/images/greencheddar.png"
                    alt=""
                    class="hover12 w-full h-96 object-cover object-center"
                  />
                </div>
              </div>
            </div>
            <div class="flex flex-col">
              <div
                class="shadow-lg rounded-sm w-full md:w-2/3 bg-blueblack mr-20 mx-0 mt-10 relative"
              >
                <p class="text-sm text-gray-400 px-8">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Vitae error explicabo exercitationem tenetur, dignissimos, at
                  deleniti sit fugiat placeat temporibus officia dolor minus
                  dolorum nisi inventore ipsa nesciunt itaque. Fuga!
                </p>
              </div>
              <div class="flex flex-row mx-12 text-accent">
                <span class="font-thin text-sm md:text-lg mt-2 mx-2">Vue</span>
                <span class="font-thin text-sm md:text-lg mt-2 mx-2"
                  >Nuxt Js</span
                >
                <span class="font-thin text-sm md:text-lg mt-2 mx-2"
                  >Firebase</span
                >
                <span class="font-thin text-sm md:text-lg mt-2"
                  >Tailwind Css</span
                >
              </div>
            </div>
          </div>
        </div>
        <!-- Third project card -->
        <div class="flex flex-col">
          <div
            class="flex flex-col md:flex-row md:justify-start md:items-start mt-8 relative"
          >
            <div class="w-full md:mx-4 relative">
              <div class="rounded-lg shadow-lg p-4">
                <div class="flex flex-row justify-center items-center">
                  <img
                    src="~/assets/images/alemekina.png"
                    alt=""
                    class="hover12 w-full h-96 object-cover object-center"
                  />
                </div>
              </div>
            </div>
            <div class="flex flex-col">
              <div
                class="shadow-lg rounded-sm w-full md:w-2/3 bg-blueblack mr-20 mx-0 mt-10 relative"
              >
                <p class="text-sm text-gray-400 px-8">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Vitae error explicabo exercitationem tenetur, dignissimos, at
                  deleniti sit fugiat placeat temporibus officia dolor minus
                  dolorum nisi inventore ipsa nesciunt itaque. Fuga!
                </p>
              </div>
              <div class="flex flex-row mx-12 text-accent">
                <span class="font-thin text-sm md:text-lg mt-2 mx-2">Vue</span>
                <span class="font-thin text-accent text-sm md:text-lg mt-2 mx-2"
                  >Nuxt Js</span
                >
                <span class="font-thin text-sm md:text-lg mt-2 mx-2"
                  >Firebase</span
                >
                <span class="font-thin text-sm md:text-lg mt-2"
                  >Tailwind Css</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.hover12 figure {
  background: #1abc9c;
}
.hover12 figure img {
  opacity: 1;
  -webkit-transition: 0.3s ease-in-out;
  transition: 0.3s ease-in-out;
}
.hover12 figure:hover img {
  opacity: 0.5;
}
.heading::after {
  content: "";
  display: block;
  position: relative;
  top: -15px;

  width: 350px;
  height: 1px;
  margin-left: 285px;
  background-color: #9ea8c6;
}
.heading::before {
  position: relative;
  bottom: 2px;

  margin-right: 0.5px;
}
/* ::selection {
  background-color: var(--lightest-navy);
  color: var(--lightest-slate);
} */
::before,
::after {
  box-sizing: inherit;
}
</style>
