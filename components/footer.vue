<template>
  <div>
    <div class="desktop">
      <div orientation="right" class="jSIwrL text-gray-300">
        <div class="jJFfEJ">
          <a href="">
            <p class="text-gray-300 hover:text-accent">
              walelgndagne@gmail.com
            </p>
          </a>
        </div>
      </div>

      <!-- mobile  -->
      <!-- <div class="mobile">
        <a href="">
          <p class="text-gray-300 hover:text-accent">Made by walelnd Dagne</p>
        </a>
      </div> -->
    </div>
  </div>
</template>

<style scoped>
.jSIwrL {
  width: 40px;
  position: fixed;
  bottom: 0px;
  left: auto;
  right: 40px;
  z-index: 10;
  color: var(--light-slate);
}
.jJFfEJ {
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  position: relative;
}
.jJFfEJ a {
  margin: 20px auto;
  padding: 10px;

  line-height: var(--fz-lg);
  letter-spacing: 0.1em;
  -webkit-writing-mode: vertical-rl;
  writing-mode: vertical-rl;
}

a {
  display: inline-block;
  text-decoration: none;
  text-decoration-skip-ink: auto;
  color: inherit;
  position: relative;
  transition: var(--transition);
}
.jJFfEJ::after {
  content: "";
  display: block;
  width: 1px;
  height: 90px;
  margin: 0px auto;
  background-color: #9ea8c6;
}
::before,
::after {
  box-sizing: inherit;
}
.desktop {
  @apply hidden md:flex;
}

/* .mobile {
  @apply md:hidden flex flex-col mt-96 justify-center;
} */
/* .line::after {
  content: "";
  display: block;
  width: 1px;
  height: 165px;
  margin: 0px auto;
  background-color: #9ea8c6;
  margin-top: -1px;
} */
</style>
