<template>
  <div class="time">
    <TimeBlock :time="dats" unit="Days"/>
    <TimeBlock :time="hours" unit="Hours"/>
    <TimeBlock :time="minutes" unit="Minutes"/>
    <TimeBlock :time="seconds" unit="Seconds"/>
  </div>
</template>

<script>
import TimeBlock from "@/components/TimeBlock";

export default {
  name: "TimeUnit",
  components: {TimeBlock},
  mounted() {
    setInterval(() => {
      this.updateTime();
    }, 1000);
  },
  methods: {
    updateTime() {
      const targetDateIST = new Date('2023-06-02T00:00:00+05:30');

      // Get the current time in IST
      const currentTimeIST = new Date().toLocaleString('en-US', {timeZone: 'Asia/Kolkata'});

      // Calculate the time difference
      const timeDifference = targetDateIST - new Date(currentTimeIST);

      this.dats = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      this.hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
    }
  },
  data() {
    return {
      dats: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    }
  }

}
</script>

<style scoped>
.time {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100%;
}

/*clear first and last margins*/
.time-block:first-child {
  margin-left: 0;
}

.time-block:last-child {
  margin-right: 0;
}

</style>