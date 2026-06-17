const API_URL =
  "http://4.224.186.213/evaluation-service/notifications";

const TOKEN =
  import.meta.env.VITE_ACCESS_TOKEN;

export const getNotifications = async (
  page = 1,
  limit = 10,
  type = ""
) => {
  let url =
    `${API_URL}?page=${page}&limit=${limit}`;

  if (type) {
    url += `&notification_type=${type}`;
  }

  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(
      `API Error: ${response.status}`
    );
  }

  return await response.json();
};