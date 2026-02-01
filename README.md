# 🌦️ Weather-App

A responsive, modern **Weather Application** built with **HTML, CSS, and JavaScript** that fetches real-time weather data from the **OpenWeatherMap API** and displays it beautifully in the browser.

---

👉 **[Live Demo](https://abhishek-maurya-d.github.io/Weather-App/)**

---

## 📌 Overview

This project demonstrates:

✅ Integration with a third-party API (OpenWeatherMap)  
✅ Asynchronous JavaScript (fetch & async/await)  
✅ Dynamic User Interface updates  
✅ Responsive design (works on desktop & mobile)  
✅ Error handling for invalid input  
✅ Stylish UI with dark theme and animations :contentReference[oaicite:1]{index=1}

It’s perfect for showcasing frontend skills in portfolios or interviews.

---

## 💡 How It Works

1. **User Input**  
   The user enters a city name into a search field and clicks a “Search” button.

2. **Making the API Request**  
   The app sends a **fetch** request to the **OpenWeatherMap API**, including the city name and the developer’s API key.

3. **Receiving Weather Data**  
   The API returns weather information such as:
   - Temperature  
   - Weather description  
   - Humidity  
   - Wind speed  
   These values arrive in a structured JSON format.

4. **Updating the UI**  
   The JavaScript code processes the API response and updates the webpage with the weather details. If the city is invalid, an error message is shown.

5. **Design & Experience**  
   The interface uses **CSS animations**, themes, and responsive layouts to make the weather data look attractive and easy to read. :contentReference[oaicite:2]{index=2}

---

## 📦 Built With

- **HTML5** – Markup for the app structure  
- **CSS3** – Styling, animations, and responsive design  
- **JavaScript** – Fetching API data and updating the DOM  
- **OpenWeatherMap API** – Source of real-time weather data :contentReference[oaicite:3]{index=3}

---

## 🚀 Getting Started

### 🧾 Prerequisites

Before running the app, you need:

✔ A text editor (VS Code, Atom, etc.)  
✔ A browser (Chrome, Firefox, etc.)  
✔ A free OpenWeatherMap API key

You can register for a free API key here: https://openweathermap.org/api

---

### 📥 Installation

1. **Clone the repository**

```bash
git clone https://github.com/Abhishek-Maurya-D/Weather-App.git
````

2. **Go into the folder**

```bash
cd Weather-App
```

3. **Open `index.html` in a browser**

Double-click `index.html` or serve it using a local server.

---

### 🔧 Setup API Key

In the JavaScript file (usually `script.js`):

```js
const apiKey = "YOUR_OPENWEATHERMAP_API_KEY";
```

Replace `"YOUR_OPENWEATHERMAP_API_KEY"` with the key you obtained.

---

## 📸 Features

✨ Search weather by **city name**
🌡️ Display **temperature** in Celsius
☁️ Show weather **condition text** (e.g., Clear, Rain)
🔁 Responsive design (mobile + desktop)
⚠️ Built-in **input validation and error feedback** ([GitHub][1])

---

## 🤝 Contributing

Contributions are welcome! You can:

✔ Add more features (e.g., 7-day forecast)
✔ Improve UI design
✔ Add unit conversion (Celsius/Fahrenheit)
✔ Structure code into modules

To contribute:

1. Fork the repository
2. Create a new branch
3. Commit your changes
4. Open a Pull Request

---

## 📄 License

This project is meant for educational use and learning.
Consider adding a proper LICENSE file (e.g., MIT) if you want to encourage reuse.

---

## 🙌 Acknowledgements

Thanks for checking out this project!
If you’re impressed, ⭐ star the repo — it helps others find it too! 🚀
