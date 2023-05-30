<template>
  <div class="time-block">
    <div class="time">
      {{ time }}
    </div>
    <div class="unit">
      {{ unit }}
    </div>
  </div>
</template>

<script>
export default {
  name: "TimeBlock",
  props: {
    time: {
      type: Number,
      default: 0
    },
    unit: {
      type: String,
      default: ""
    }
  }
}
</script>

<style scoped>

.time-block {
  margin: 50px;
  background-color: #981404;
  width: 100%;
  aspect-ratio: 1/1;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
}

.time {
  font-size: 90px;
  font-weight: bold;
  color: #fff;
  text-align: center;
  flex: 2;
}

.unit {
  font-size: 20px;
  color: #ffe6e3;
  text-align: center;
  flex: 1;
}

</style>