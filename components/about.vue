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
            class="w-80 h-64 rounded-xl bg-accent shadow-xl bg-blend-multiply mx-18 px-18 object-cover object-center"
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
@property --rotate {
  syntax: "<angle>";
  initial-value: 132deg;
  inherits: false;
}

:root {
  --card-height: 65vh;
  --card-width: calc(var(--card-height) / 1.5);
}

body {
  min-height: 100vh;
  background: #212534;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 2rem;
  padding-bottom: 2rem;
  box-sizing: border-box;
}

.card {
  background: #191c29;
  width: var(--card-width);
  height: var(--card-height);
  padding: 3px;
  position: relative;
  border-radius: 6px;
  justify-content: center;
  align-items: center;
  text-align: center;
  display: flex;
  font-size: 1.5em;
  color: rgb(88 199 250 / 0%);
  cursor: pointer;
  font-family: cursive;
}

.card:hover {
  color: rgb(88 199 250 / 100%);
  transition: color 1s;
}
.card:hover:before,
.card:hover:after {
  animation: none;
  opacity: 0;
}

/* .card::before {
  content: "";
  width: 104%;
  height: 102%;
  border-radius: 8px;
  background-image: linear-gradient(
    var(--rotate),
    #5ddcff,
    #3c67e3 43%,
    #4e00c2
  );
  position: absolute;
  z-index: -1;
  top: -1%;
  left: -2%;
  animation: spin 2.5s linear infinite;
}

.card::after {
  position: absolute;
  content: "";
  top: calc(var(--card-height) / 6);
  left: 0;
  right: 0;
  z-index: -1;
  height: 100%;
  width: 100%;
  margin: 0 auto;
  transform: scale(0.8);
  filter: blur(calc(var(--card-height) / 6));
  background-image: linear-gradient(
    var(--rotate),
    #5ddcff,
    #3c67e3 43%,
    #4e00c2
  );
  opacity: 1;
  transition: opacity 0.5s;
  animation: spin 2.5s linear infinite;
} */
/* .heading::after {
  content: "";
  display: block;
  position: relative;
  top: -15px;

  width: 325px;
  height: 1px;
  margin-left: 180px;
  background-color: #9ea8c6;
}
.heading::before {
  position: relative;
  bottom: 2px;

  margin-right: 0.5px;
}

::before,
::after {
  box-sizing: inherit;
} */
@keyframes spin {
  0% {
    --rotate: 0deg;
  }
  100% {
    --rotate: 360deg;
  }
}

a {
  color: #212534;
  text-decoration: none;
  font-family: sans-serif;
  font-weight: bold;
  margin-top: 2rem;
}
</style>
