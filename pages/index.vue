<template>
  <div class="">
    <div class="">
      <Nav />
      <div class="hidden md:flex">
        <Social />
      </div>

      <div
        class="flex flex-col justify-start items-start md:px-20 md:mx-24 mx-0 mt-4 md:mt-10 mb-32"
      >
        <h1 class="text-accent text-xl md:text-2xl">Hi, my name is</h1>
        <h1 class="text-gray-200 font-semibold text-3xl md:text-6xl mt-4">
          Walelgn Dagne.
        </h1>
        <h1 class="text-gray-500 text-4xl md:text-6xl font-semibold mt-4">
          I build things for the web
        </h1>
        <p class="w-full md:w-2/3 text-gray-400 text-lg mt-4 mb-32">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore,
          repellat nostrum repellendus vero accusantium magnam blanditiis
          corporis neque nobis assumenda autem suscipit officia qui debitis.
          Nihil dolorum at ullam sed.
        </p>
      </div>
      <div class="">
        <About />
      </div>
      <div class="md:hidden flex-row">
        <Social />
      </div>
      <div class="md:hidden flex justify-center mt-3">
        <Footer />
      </div>
    </div>
  </div>
</template>

<script>
import Nav from "~/components/nav.vue";
import About from "~/components/about.vue";
import Social from "~/components/social.vue";
import Footer from "~/components/footer.vue";
export default {
  components: {
    Nav,
    About,
    Social,
    Footer,
  },
  //
};
</script>
