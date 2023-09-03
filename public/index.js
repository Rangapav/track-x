const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.post('/api/sendOTP', (req, res) => {
  // Here, you would implement the logic to send the OTP to the provided mobile number
  // For simplicity, we'll just return a dummy response
  const { mobileNumber } = req.body;
  const otp = Math.floor(100000 + Math.random() * 900000); // Generate a 6-digit OTP

  // You would usually send the OTP via SMS or another authentication service
  console.log(`Sending OTP ${otp} to ${mobileNumber}`);

  // Respond with the OTP for demonstration purposes
  res.json({ success: true, otp });
});

app.post('/api/verifyOTP', (req, res) => {
  // Here, you would implement the logic to verify the provided OTP
  // For simplicity, we'll just return a dummy response
  const { mobileNumber, otp } = req.body;

  // You would usually verify the OTP using the SMS or authentication service
  console.log(`Verifying OTP ${otp} for ${mobileNumber}`);

  // Respond with a success message for demonstration purposes
  res.json({ success: true });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
