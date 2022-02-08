<template>
  <div id="about">
    <div class="w-full mt-32 mx-24 px-20">
      <div class="flex flex-row">
        <div class="flex flex-col w-1/2">
          <h1 class="text-4xl text-gray-300 mb-6 font-semibold mx-4">
            About Me
          </h1>
          <p class="text-gray-400">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia
            ipsam laboriosam quas impedit, at voluptatibus eveniet neque
            tenetur, reprehenderit pariatur reiciendis earum? Exercitationem,
            iure! Quidem quia placeat optio quos facere?
          </p>
        </div>
        <div class="mb-6">
          <img
            class="w-64 h-60 rounded-md bg-accent drop-shadow-xl drop-shadow-green-400"
            src="~assets/images/wale.jpg"
            alt=""
          />
        </div>
        <div>
          <h2>works</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
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
}
</style>
