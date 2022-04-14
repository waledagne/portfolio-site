<template>
  <div class="top p-6">
    <div class="">
      <Nav />
      <div class="hidden md:flex">
        <Social />
      </div>

      <div
        class="flex flex-col justify-start items-start md:px-20 md:mx-24 mx-0 mt-4 md:mt-14 mb-32"
      >
        <h1 class="text-accent text-xl md:text-lg">Hi, my name is</h1>
        <h1
          data-aos="fade-up"
          class="text-gray-200 font-semibold text-xl md:text-6xl mt-6"
        >
          Walelgn Dagne.
        </h1>
        <h1 class="text-gray-500 text-xl md:text-6xl font-semibold mt-5">
          I build things for the web
        </h1>
        <p class="w-full md:w-2/3 text-gray-400 text-lg mt-4">
          I’m a web developer specializing in building exceptional web apps that
          highly performant and responsive. I’m passionate about building clean
          and elegant code. I’m a problem solver who loves to learn and grow and
          I’m a team player who loves to work in a team environment. I’m a fast
          learner who loves to learn new things.
        </p>
        <a href="Walelgn.pdf" download="">
          <button
            class="btn btn-lg btn-outline btn-accent hover:translate-x-11 mx-20 mt-6 mb-32"
          >
            <img src="~/assets/images/download.svg" class="mx-1" alt="" />
            Resume
          </button>
        </a>
      </div>
      <div class="">
        <About />
      </div>
      <div>
        <Skills />
      </div>
      <div>
        <Works />
      </div>

      <div>
        <Hello />
      </div>
      <div class="flex-row pr-4">
        <Social />
      </div>

      <div class="">
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
import Works from "~/components/works.vue";
import Skills from "~/components/skills.vue";
import Hello from "~/components/getintouch.vue";
export default {
  components: {
    Nav,
    About,
    Social,
    Footer,
    Works,
    Skills,
    Hello,
  },
  //
};
</script>

<style>
.top {
  overflow: hidden;
}
</style>
