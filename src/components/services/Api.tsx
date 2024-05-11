import axios from "axios";

const API_KEY = "727rknI0uxbHH9j6QKRVb3BeRvRJbay4s1TYytzWP_8";

interface ImageData {
  id: string;
  urls: {
    small: string;
    regular: string;
    // Додайте інші необхідні властивості зображення
  };
  description: string;
  // Додайте інші необхідні властивості зображення
}

interface FetchImgResponse {
  data: ImageData[];
  // Додайте інші властивості відповіді, які ви очікуєте отримати з API
}

export const fetchImg = async (
  query: string,
  page: number
): Promise<FetchImgResponse> => {
  try {
    const response = await axios.get(`https://api.unsplash.com/search/photos`, {
      params: { query, page, per_page: 16, client_id: API_KEY },
    });

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error("Failed to fetch images");
    }
  } catch (error) {
    throw new Error("Failed to fetch images");
  }
};
