import React, { useState } from "react";

function LinkLauncher() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [site1Url, setSite1Url] = useState<string>("");
  const [site2Url, setSite2Url] = useState<string>("");
  const [site3Url, setSite3Url] = useState<string>("");
  const [encodedUrl1, setEncodedUrl1] = useState<string>("");
  const [encodedUrl2, setEncodedUrl2] = useState<string>("");
  const [encodedUrl3, setEncodedUrl3] = useState<string>("");

  const handleEncode = (
    siteUrl: string,
    setEncodedUrl: React.Dispatch<React.SetStateAction<string>>
  ) => {
    const encodedTerm = encodeURIComponent(searchTerm);
    const fullUrl = `${siteUrl}${encodedTerm}`;
    setEncodedUrl(fullUrl);
  };

  const handleOpenLinks = () => {
    [encodedUrl1, encodedUrl2, encodedUrl3].forEach((url) => {
      if (url) {
        window.open(url, "_blank");
      }
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-lg w-full">
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">検索単語:</label>
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">検索サイト1 URL:</label>
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            value={site1Url}
            onChange={(e) => setSite1Url(e.target.value)}
          />
          <button
            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            onClick={() => handleEncode(site1Url, setEncodedUrl1)}
          >
            エンコードする
          </button>
          <p className="mt-2 text-sm text-gray-600 break-all">{encodedUrl1}</p>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">検索サイト2 URL:</label>
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            value={site2Url}
            onChange={(e) => setSite2Url(e.target.value)}
          />
          <button
            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            onClick={() => handleEncode(site2Url, setEncodedUrl2)}
          >
            エンコードする
          </button>
          <p className="mt-2 text-sm text-gray-600 break-all">{encodedUrl2}</p>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">検索サイト3 URL:</label>
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            value={site3Url}
            onChange={(e) => setSite3Url(e.target.value)}
          />
          <button
            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            onClick={() => handleEncode(site3Url, setEncodedUrl3)}
          >
            エンコードする
          </button>
          <p className="mt-2 text-sm text-gray-600 break-all">{encodedUrl3}</p>
        </div>

        <button
          className="w-full py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
          onClick={handleOpenLinks}
        >
          リンクを開く
        </button>
      </div>
    </div>
  );
}

export default LinkLauncher;
