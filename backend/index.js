const express = require('express')
const app = express()
const PORT = process.env.PORT || 8000

app.use(express.json())
app.use(express.urlencoded({extended: true}));


app.get("/", (req, res) => {
  const targetDateIST = new Date('2023-06-02T00:00:00+05:30');

  const currentTimeIST = new Date().toLocaleString('en-US', {timeZone: 'Asia/Kolkata'});

  const timeDifference = targetDateIST - new Date(currentTimeIST);

  const remainingHours = Math.floor(timeDifference / (1000 * 60 * 60));
  const remainingMinutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const remainingSeconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  const responseObject = {
    "remainingHours": remainingHours,
    "remainingMinutes": remainingMinutes,
    "remainingSeconds": remainingSeconds
  }

  res.send(responseObject);
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
