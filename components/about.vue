<template>
  <div id="about">
    <div class="w-full md:w-2/3 mt-40 md:mx-24 md:px-20">
      <div class="flex flex-col md:flex-row justify-start">
        <div class="flex flex-col w-full">
          <h1 class="text-4xl text-gray-300 mb-6 font-semibold mx-4">
            About Me
          </h1>
          <p class="text-gray-400">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia
            ipsam laboriosam quas impedit, at voluptatibus eveniet neque
            tenetur, reprehenderit pariatur reiciendis earum? Exercitationem,
            iure! Quidem quia placeat optio quos facere?
          </p>
          <p class="text-gray-400">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia
            ipsam laboriosam quas impedit, at voluptatibus eveniet neque
            tenetur, reprehenderit pariatur reiciendis earum? Exercitationem,
            iure! Quidem quia placeat optio quos facere?
          </p>
        </div>
        <div class="mb-9 mt-8 md:mt-0">
          <img
            id="transition"
            class="img w-80 h-64 rounded-xl bg-accent shadow-xl bg-blend-multiply mx-18 px-18"
            src="~assets/images/wale.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* .wrapper {
  box-shadow: 0 10px 30px -15px var(--navy-shadow);
  transition: var(--transition);
  display: block;
  position: relative;
  width: 75%;
  border-radius: var(--border-radius);
  background-color: var(--green);
}
.wrapper::before {
  content: "";
  display: block;
  position: absolute;
  width: 50%;
  height: 50%;
  border-radius: var(--border-radius);

  transition: var(--transition);
  transition-duration: 1s;
  transition-timing-function: 1s;
  transition-delay: 1s;
} */
.img {
  box-shadow: 0.3rem 0.3rem #2a9d8f, -0.5rem -0.5rem #0a192f;
}
#transition {
  box-shadow: 0 0 10px 0 #2a9d8f;
  transition: box-shadow 500ms;
}

#transition:hover {
  box-shadow: 0 10px 50px 0 #2a9d8f;
}
</style>
