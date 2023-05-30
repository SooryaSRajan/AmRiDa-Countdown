<template>
  <div class="time">
    <TimeBlock :time="days" unit="Days"/>
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

      this.days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      this.hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      //set time to 0
      this.days = this.days < 0 ? 0 : this.days;
      this.hours = this.hours < 0 ? 0 : this.hours;
      this.minutes = this.minutes < 0 ? 0 : this.minutes;
      this.seconds = this.seconds < 0 ? 0 : this.seconds;

      //if time is 0, start the confetti
      if (this.days === 0 && this.hours === 0 && this.minutes === 0 && this.seconds === 0 && !this.isConfetti) {
        this.isConfetti = true;
        this.start();
        this.$emit('end');
        alert('Time is up, click on the link below to see the surprise :)')
      }
    },
    start() {
      this.$confetti.start();
    },

    stop() {
      this.$confetti.stop();
    },
  },
  data() {
    return {
      isConfetti: false,
      days: 0,
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