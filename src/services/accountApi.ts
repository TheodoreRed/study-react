import axios from "axios";
import Account from "../models/Account";

const baseUrl: string =
  import.meta.env.VITE_APP_BASE_URL ?? "http://localhost:3000";

export const getCurrentUser = async (): Promise<Account | null> => {
  try {
    const response = await axios.get(`${baseUrl}/current-user`, {
      withCredentials: true, // Ensures cookies are sent with the request
    });
    return response.data as Account;
  } catch (error) {
    console.error("Error fetching current user:", error);
    return null; // Return null if there's an error fetching the user
  }
};
