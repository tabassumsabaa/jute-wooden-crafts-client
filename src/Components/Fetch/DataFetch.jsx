// src/utils/dataFetcher.js
export const fetchItemDetails = async (id) => {
    try {
      const urls = [
        `http://localhost:5000/listItems/${id}`,
        `http://localhost:5000/kitchen/${id}`,
        `http://localhost:5000/jutehome/${id}`,
      ];
  
      for (const url of urls) {
        const response = await fetch(url);
        if (response.ok) {
          const text = await response.text();
          if (text) {
            const item = JSON.parse(text);
            if (item) return item;
          }
        }
      }
  
      throw new Error('Item not found');
    } catch (error) {
      console.error("Error fetching item:", error);
      return null;  // Return null or handle as needed
    }
  };
  