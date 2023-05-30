<template>
  <div class="root">
    <div class="center-card">
      <NoteBlock/>
      <TimeUnit/>
      <div class="end-block">
        Our fairwell is on the second of June, 2023, I bid my goodbyes to Amrita, my memories and the great time I had here (Not the college, the people were fun).
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
}

.root{
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
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
</style>
