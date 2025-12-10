# Amazon Product Scraper

A full-stack web scraping application that allows users to extract product data from Amazon by simply providing a product URL.

## 🚀 Features

- Extract product details from Amazon product pages
- Clean and intuitive React-based user interface
- RESTful API built with Express.js
- Automated browser scraping using Puppeteer
- Real-time data extraction and display

## 🛠️ Tech Stack

- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Scraping**: Puppeteer
- **HTTP Client**: Axios

## 📋 Prerequisites

- Node.js (v20 or higher)
- npm or yarn

## 🔧 Installation

1. Clone the repository

```bash
git clone https://github.com/ashishmishrapy/AmazonScrape.git
cd AmazonScrape
```

2. Install dependencies for backend

```bash
cd server
npm install
```

3. Install dependencies for frontend

```bash
cd client
npm install
```

## 🚦 Usage

1. Start the backend server

```bash
Make sure you have nodemon installed otherwise do npx i nodemon
cd server
npm run dev
```

2. Start the frontend application

```bash
cd client
go to .env and change the API_URL to your backend URL
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173` (VITE USER)
4. Enter an Amazon product URL and click submit to scrape the data

## 📦 What Data Can Be Scraped?

- Product title
- Price
- Product image
- Ratings and reviews
- Availability status

## 💡 Approach to Solving the Problem

My initial approach was to use RapidAPI to fetch Amazon product data. However, to gain deeper understanding and more control over the scraping process, I decided to build a custom solution using web scraping libraries. I researched various web scraping tools through documentation and YouTube tutorials, ultimately choosing Puppeteer for its ability to handle dynamic content and simulate real browser behavior.

## 🚧 Challenges Faced and Solutions

### Challenge 1: Understanding Amazon's URL Structure

Initially, I tried to extract product data using Amazon's ASIN. However, I discovered that Amazon uses URL shorteners that don't always contain the ASIN in a readily accessible format.

**Solution:** I switched to using the full Amazon product URLs instead, which proved more reliable and consistent across different product pages.

### Challenge 2: Finding the Right CSS Selectors

Identifying the correct DOM selectors to extract accurate product information was tricky, as Amazon's HTML structure is complex and varies across different product types.

**Solution:** Through trial and error, along with Chrome DevTools inspection, I identified stable selectors. Additionally, ChatGPT proved invaluable for debugging selector issues and frontend integration problems.

### Challenge 3: Avoiding Bot Detection

Amazon has sophisticated bot detection mechanisms that can block automated scraping attempts.

**Solution:** Using Puppeteer turned out to be advantageous because it launches a real Chrome browser instance, making it harder for Amazon to detect automated behavior. Additionally, since I'm extracting a relatively small amount of data per request, I've been able to avoid triggering their anti-bot measures so far.

## 🔮 Future Improvements

Given more time, I would focus on improving the scraping speed. Currently, it takes 5-10 seconds to fetch product data, which could be optimized. As this is only my second web scraping project, I kept the implementation straightforward. However, as I gain more experience and become more proficient with web scraping techniques, I plan to:

- Implement caching mechanisms to reduce repeated requests
- Optimize Puppeteer configuration for faster page loads
- Implement retry logic and better error handling
- Explore headless browser optimizations to reduce resource usage

## ⚠️ Disclaimer

This project is for educational purposes only. Please review Amazon's Terms of Service and robots.txt before scraping. Use responsibly and respect rate limits.

## 📝 License

This project is licensed under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 👨‍💻 Author

Your Name - [Ashish Mishra](https://github.com/ashishmishrapy/)
