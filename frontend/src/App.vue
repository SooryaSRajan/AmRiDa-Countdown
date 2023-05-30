<template>
  <div class="root">
    <div class="center-card">
      <NoteBlock/>
      <TimeUnit @end="updateURL"/>
      <div class="end-block">
        Our fairwell is on the second of June, 2023, I bid my goodbyes to Amrita, my memories and the great time I had
        here (Not the college, the people were fun).
      </div>
      <br>
      <div class="end-block" v-if="!showURL">
        Make sure you stick around till the end of this count down, I have a surprise for you :)
      </div>
      <div class="end-block" v-else>
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Click on tis URL, thank me later :)</a>
      </div>
    </div>
  </div>
</template>

<script>
import TimeUnit from "@/components/Time";
import NoteBlock from "@/components/NoteBlock";

export default {
  name: 'App',
  components: {
    NoteBlock,
    TimeUnit,
  },
  methods: {
    updateURL() {
      this.showURL = true;
    }
  },
  data() {
    return {
      showURL: false
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  transition: all 0.3s ease;
}

.root {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: auto;
}

.center-card {
  padding-left: 30px;
  padding-right: 30px;
  padding-bottom: 40px;
  height: max-content;
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

@media (max-width: 700px) {
  .center-card {
    padding: 5px;
    width: 100%;
  }
}

@media (max-height: 500px) {
  .root {
    display: block;
  }
  .center-card {
    padding: 5px;
    width: 100%;
  }
}
</style>
