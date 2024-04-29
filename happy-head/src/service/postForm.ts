import { ApiResponse, State } from "../lib/type";
import { ENDPOINT } from "../lib/constant";
async function postData(formData: State): Promise<ApiResponse> {
  try {
    const response = await fetch(ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`There was a problem with the fetch operation: ${error}`);
  }
}

export default postData;
