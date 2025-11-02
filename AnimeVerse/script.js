function startPayment() {
  var options = {
    key: "rzp_test_RavFMorAr4ySZl", // 🔑 Replace with your Razorpay key
    amount: 19900, // Amount in paise (₹199)
    currency: "INR",
    name: "AnimeVerse",
    description: "Registeration Fee",
    image: "bg19.jpg",
    handler: function (response) {
      // Show success popup
      document.getElementById("success").classList.remove("hidden");

      // OPTIONAL: Send details to your backend for email delivery
      fetch("https://your-server.com/payment-success", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
          payment_id: response.razorpay_payment_id
        })
      });
    },
    theme: {
      color: "#e50914",
    },
  };
  var rzp1 = new Razorpay(options);
  rzp1.open();
}

function closeSuccess() {
  document.getElementById("success").classList.add("hidden");
}
