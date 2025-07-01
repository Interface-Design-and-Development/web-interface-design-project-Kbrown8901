// Add event listener to the "Surprise Me" button
document.getElementById('surpriseBtn').addEventListener('click', () => {

  // Array of fun yogurt flavor names with emojis
  const flavors = [
    "Strawberry Stardust 🍓",
    "Moonlight Mango 🥭",
    "Finals Fuel (Espresso) ☕",
    "Blueberry Breeze 🍇",
    "Spicy Mango Tango 🌶️🥭",
    "Cookie Galaxy 🍪",
    "Birthday Blitz 🎉",
    "Lychee Dream 🌸",
    "Matcha Magic 🍵",
    "Peachy Keen 🍑"
  ];

  // Randomly pick a flavor
  const randomFlavor = flavors[Math.floor(Math.random() * flavors.length)];

  // Display the result in the paragraph instead of a popup
  document.getElementById("surpriseFlavor").textContent = `🥄 You should try: ${randomFlavor}`;
});
