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

## ⚠️ Disclaimer

This project is for educational purposes only. Please review Amazon's Terms of Service and robots.txt before scraping. Use responsibly and respect rate limits.

## 📝 License

This project is licensed under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 👨‍💻 Author

Your Name - [Ashish Mishra](https://github.com/ashishmishrapy/)
