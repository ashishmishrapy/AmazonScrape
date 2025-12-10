import React, { useState } from "react";
import { Navbar } from "./components/Navbar";
import axios from "axios";
import ProductCard from "./components/ProductCard";
import { useEffect } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { saveAs } from "file-saver";
const API_URL = import.meta.env.VITE_API_URL;


const App = () => {
  // States
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [product, setProduct] = useState({
    title: "",
    price: "",
    image: "",
    rating: "",
    stock: "",
    numRatings: "",
  });
  const [history, setHistory] = useState([]);
  const [showhistory, setShowHistory] = useState(false);

  //fetching history

  useEffect(() => {
    const savedHistory = JSON.parse(localStorage.getItem("history")) || [];
    setHistory(savedHistory);
  }, []);




  //EXPORTING THE FILE IN JSON
  const exportJson = ()=>{
    const json = JSON.stringify(history);
    const blob = new Blob([json]);
    saveAs(blob, `history-${Date.now()}.json`);
  }




  // FETCH DATA LOGIC

  async function fetchData() {
    setError("");
    setLoading(true);

    if (!url.trim()) {
      setError("Please enter a valid Amazon URL.");
      setLoading(false);
      return;
    }

    function saveHistory(productData) {
      const oldHistory = JSON.parse(localStorage.getItem("history")) || [];
      const newHistory = [productData, ...oldHistory];
      localStorage.setItem("history", JSON.stringify(newHistory));
      setHistory(newHistory);
    }

    try {
      const res = await axios.post(`${API_URL}/scrap`, {
        url,
      });

      console.log(res);

      if (!res.data?.success) {
        setError("Failed to fetch product data.");
        setLoading(false);
        return;
      }

      const { title, price, image, rating, stock, numRatings } = res.data.data;

      setProduct({ title, price, image, rating, stock, numRatings });
      saveHistory({ title, price, image, rating, stock, numRatings });
    } catch (error) {
      console.log("Error fetching data:", error);
      setError("Something went wrong. Please try again.");
    }

    setLoading(false);
  }

  return (
    <div className="min-h-screen bg-zinc-300">
      <Navbar />

      <div className="w-full flex p-2 flex-col pt-[81px] gap-3 items-center">
        <input
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="border rounded-2xl outline-none bg-zinc-200 p-3 w-full"
          type="text"
          placeholder="Enter only Amazon Product URL"
        />

        <button
          onClick={fetchData}
          className={`bg-red-500 ${loading ? "cursor-not-allowed" : "cursor-pointer"} rounded-2xl text-white hover:bg-red-800 w-full px-3 py-2`}
          disabled={loading}
        >
          {loading ? "Loading..." : "Get Data"}
        </button>

        {error && (
          <p className="text-red-600 font-medium text-sm bg-red-100 px-4 py-2 rounded-xl w-full text-center">
            {error}
          </p>
        )}
      </div>

      {loading && (
        <div className="p-4 flex justify-center">
          <div className="w-full max-w-sm bg-white shadow-md rounded-2xl p-4 animate-pulse">
            <div className="w-full h-64 bg-zinc-300 rounded-lg mb-4"></div>
            <div className="h-4 bg-zinc-300 rounded w-3/4 mb-2"></div>
            <div className="h-4 bg-zinc-300 rounded w-1/2 mb-4"></div>
            <div className="h-4 bg-zinc-300 rounded w-1/4"></div>
          </div>
        </div>
      )}

      {!loading && !error && product.title !== "" && (
        <div className="p-4 flex justify-center">
          <ProductCard
            title={product.title}
            price={product.price}
            image={product.image}
            rating={product.rating}
            availability={product.stock}
            numRatings={product.numRatings}
          />
        </div>
      )}
      {/* <hr /> */}
      <div className="mt-3">
        <div className="bg-white p-3 ">
          <p
            onClick={() => setShowHistory((prev) => !prev)}
            className="text-center cursor-pointer flex justify-center items-center text-zinc-400 mb-2"
          >
            History{" "}
            <button className="text-center">
              {showhistory ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
            </button>
          </p>

          {showhistory && (
            <div>
              <span>
                <button onClick={exportJson}>
                  <a 
                  href=""
                  // filename={`history${Date.now()}.csv`}
                  className="underline text-blue-600">
                    Export as csv
                  </a>
                </button>
              </span>
              <div className="grid grid-cols-1 md:grid-cols-3">
                {history.map((product, index) => (
                  <ProductCard
                    key={index}
                    title={product.title}
                    price={product.price}
                    image={product.image}
                    rating={product.rating}
                    availability={product.stock}
                    numRatings={product.numRatings}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
