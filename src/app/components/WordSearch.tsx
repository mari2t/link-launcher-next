import React, { useState } from "react";

function WordSearch() {
  const [siteUrl, setSiteUrl] = useState<string>("");
  const [positiveWords, setPositiveWords] = useState<string[]>(["", "", ""]);
  const [negativeWords, setNegativeWords] = useState<string[]>(["", "", ""]);
  const [searchResults, setSearchResults] = useState<string>("");

  const handleSearch = () => {
    // 検索処理のロジック（仮実装）
    // ここで実際の検索結果を取得する処理を行う
    const positiveQuery = positiveWords.filter(Boolean).join(" ");
    const negativeQuery = negativeWords.filter(Boolean).join(" ");
    const query = `${positiveQuery} -${negativeQuery}`;

    // 検索結果を仮に設定（例: 検索URLとクエリの表示）
    setSearchResults(`Searching in: ${siteUrl}\nQuery: ${query}`);
  };

  const handleInputChange = (
    index: number,
    value: string,
    isPositive: boolean
  ) => {
    const newWords = isPositive ? [...positiveWords] : [...negativeWords];
    newWords[index] = value;
    isPositive ? setPositiveWords(newWords) : setNegativeWords(newWords);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-xl w-full">
        <h1 className="text-2xl font-bold mb-4">Word Search</h1>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">サイトURL:</label>
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            value={siteUrl}
            onChange={(e) => setSiteUrl(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">
            ポジティブ Word 1~3:
          </label>
          {[0, 1, 2].map((i) => (
            <input
              key={i}
              type="text"
              className="w-full px-3 py-2 mb-2 border border-gray-300 rounded-lg"
              value={positiveWords[i]}
              onChange={(e) => handleInputChange(i, e.target.value, true)}
            />
          ))}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">
            ネガティブ Word 1~3:
          </label>
          {[0, 1, 2].map((i) => (
            <input
              key={i}
              type="text"
              className="w-full px-3 py-2 mb-2 border border-gray-300 rounded-lg"
              value={negativeWords[i]}
              onChange={(e) => handleInputChange(i, e.target.value, false)}
            />
          ))}
        </div>

        <button
          className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          onClick={handleSearch}
        >
          検索
        </button>

        {searchResults && (
          <div className="mt-4 p-4 bg-gray-100 border border-gray-300 rounded-lg">
            <h2 className="text-lg font-semibold">検索結果:</h2>
            <pre className="whitespace-pre-wrap">{searchResults}</pre>
          </div>
        )}
      </div>
    </div>
  );
}

export default WordSearch;
