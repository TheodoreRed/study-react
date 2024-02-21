import axios from "axios";

// Assuming this is the base URL for your backend
const BASE_URL = import.meta.env.VITE_APP_BASE_URL ?? "http://localhost:3000";

/**
 * Initiates the Google OAuth login process.
 */
export const loginWithGoogle = async () => {
  // navigate to the backend route that handles the Google OAuth flow.
  window.location.href = `${BASE_URL}/auth/google`;
};

/**
 * Logs out the current user.
 */
export const logout = async (): Promise<void> => {
  try {
    await axios.get(`${BASE_URL}/auth/logout`, { withCredentials: true });
  } catch (error) {
    console.error("Error logging out:", error);
  }
};
