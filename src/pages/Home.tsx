import { useState } from "react";
import { generateShortUrl } from "../services/api"; // adjust path if needed.
import logo from "/logo.png"; // ✅ Import the log

export default function Home() {
  const [originalUrl, setOriginalUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await generateShortUrl(originalUrl);
      setShortUrl(response.data);
    } catch (err) {
      console.error(err);
      alert("Failed to generate short URL");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 text-white px-6">
      {/* Header */}

<<<<<<< HEAD:src/pages/Home.jsx
=======
 
>>>>>>> develop:src/pages/Home.tsx
      <header className="w-full max-w-5xl flex justify-between items-center py-6">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Shrinko Logo" className="h-12 w-12 rounded-lg shadow-md" />
          <h1 className="text-3xl font-extrabold tracking-tight">Shrinko </h1>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex flex-col items-center text-center mt-20">
        <h2 className="text-5xl font-bold leading-tight mb-6">
          Shorten Your Links,{" "}
          <span className="text-yellow-300">Simplify the Web</span>
        </h2>
        <p className="text-lg max-w-2xl mb-10 opacity-90">
          Paste your long URL below and instantly turn it into a short,
          shareable link.
        </p>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-2xl flex flex-col md:flex-row items-center w-full max-w-3xl p-6 gap-4"
        >
          <input
            type="text"
            placeholder="Enter your long URL here..."
            value={originalUrl}
            onChange={(e) => setOriginalUrl(e.target.value)}
            className="flex-1 h-14 px-4 rounded-xl border-2 border-gray-300 text-gray-800 text-lg shadow-md focus:outline-none focus:ring-2 focus:ring-purple-400"
          />

          <button
            type="submit"
            className="h-14 px-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl text-lg hover:opacity-90 transition-all"
          >
            Shorten
          </button>
        </form>

        {/* Output */}
        {shortUrl && (
          <div className="mt-8 bg-white text-gray-900 rounded-xl shadow-lg p-6 w-full max-w-3xl text-center">
            <h3 className="text-lg font-semibold mb-2">Your shortened URL:</h3>
            <a
              href={shortUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-bold text-xl break-all hover:underline"
            >
              {shortUrl}
            </a>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="mt-20 py-6 text-sm opacity-80">
        © {new Date().getFullYear()} Shrinko. All rights reserved.
      </footer>
    </div>
  );
}
