import express from "express";
import cors from "cors";
import puppeteer from "puppeteer";

const app = express();
app.use(express.json());
app.use(cors());


app.post("/scrap", async (req, res) => {
  const { url } = req.body;

  try {

    if (!url) {
      return res.json({ success: false, message: "Invalid Amazon URL" });
    }

    // const productUrl = `https://www.amazon.in/dp/${url}`;

    const browser = await puppeteer.launch({
      headless: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });

    const page = await browser.newPage();

    await page.setUserAgent(
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120 Safari/537.36"
    );

    await page.goto(url, { waitUntil: "networkidle2" });

    const data = await page.evaluate(() => {
      const getText = (selector) =>
        document.querySelector(selector)?.innerText.trim() || "";

      const getSrc = (selector) =>
        document.querySelector(selector)?.src || "";

      return {
        title: getText("#productTitle"),
        price: getText(".a-price-whole"),
        rating: getText("#acrPopover"),
        numRatings: getText("#acrCustomerReviewText"),
        image: getSrc("#landingImage"),
        stock: getText("#availability"),
      };
    });

    console.log(data);
    
    await browser.close();

    res.json({
      success: true,
      data,
    });
  } catch (error) {
    console.error("Scrape error:", error);
    res.json({ success: false, message: "Scraping failed", error: error.message });
  }
});

app.listen(3001, () => console.log("Server started on port 3001"));
