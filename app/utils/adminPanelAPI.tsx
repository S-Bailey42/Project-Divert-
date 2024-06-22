import { getToken } from "./token";

const API_URL = "http://127.0.0.1:8000/request";

export const fetchAccountRequests = async () => {
  let token: string | null | object = localStorage.getItem("authToken");
  if (!token) {
    throw new Error("No auth token found");
  }

  let token_obj = JSON.parse(token);

  if (!("access_token" in token_obj)) {
    throw new Error("No auth token found");
  }

  const response: any = await fetch(`http://127.0.0.1:8000/request/view`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token_obj.access_token}`,
      "Content-Type": "application/json",
    },
    //credentials: "include",
  });

  if (!response.ok) {
    throw new Error(`Error fetching account requests: ${response.status}`);
  }

  return response.json();
};

export const acceptRequest = async (ids: number[]) => {
  const token = getToken();
  if (!token) {
    throw new Error("No auth token found1");
  }

  let token_obj: { access_token: string };
  try {
    token_obj = JSON.parse(token);
  } catch (e) {
    throw new Error("Invalid auth token format");
  }

  if (!("access_token" in token_obj)) {
    console.log(token_obj);
    throw new Error("No auth token found2");
  }
  ids.forEach(async (id) => {
    const response = await fetch(`${API_URL}/accept?id=${id}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token_obj.access_token}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(
        `Error accepting request with id ${id}: ${response.statusText}`
      );
    }
  });
};

export const rejectRequest = async (ids: number[]) => {
  const token = getToken();
  if (!token) {
    throw new Error("No auth token found");
  }

  let token_obj: { access_token: string };
  try {
    token_obj = JSON.parse(token);
  } catch (e) {
    throw new Error("Invalid auth token format");
  }

  if (!("access_token" in token_obj)) {
    throw new Error("No auth token found");
  }

  const response = await fetch(`${API_URL}/reject`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token_obj.access_token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ids }),
  });

  if (!response.ok) {
    throw new Error(
      `Error rejecting request with id ${ids}: ${response.statusText}`
    );
  }
};
