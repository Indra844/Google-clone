import { useState, useEffect } from "react";

import Api_key from "./keys";

const CONTEXT_KEY = "209c4a577c3dad82c";

const useGoogleSearch = (item) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      fetch(
        `https://www.googleapis.com/customsearch/v1?key=${Api_key}&cx=${CONTEXT_KEY}&q=${item}`
      )
        .then((response) => response.json())
        .then((result) => {
          setData(result);
        });
    };

    fetchData();
  }, [item]);
  return { data };
};

export default useGoogleSearch;
