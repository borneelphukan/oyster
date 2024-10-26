const API_BASE_URL =
  process.env.REACT_APP_API_BASE_URL || "https://your-api-url.com";

// Define API response types
type ApiResponse<T> = {
  data: T;
};

// Define data type interfaces
type User = {
  id: number;
  name: string;
  email: string;
};

// Utility function to handle fetch requests
async function fetchData<T>(url: string, options?: RequestInit): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${url}`, options);
  if (!response.ok) {
    throw new Error(`Error: ${response.statusText}`);
  }
  return response.json();
}

// Sample function to fetch user data
export const fetchUserData = async (
  userId: number
): Promise<ApiResponse<User>> => {
  return fetchData<ApiResponse<User>>(`/users/${userId}`);
};

// Additional API functions can be added similarly
