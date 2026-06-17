const TOKEN = import.meta.env.VITE_ACCESS_TOKEN;

export const Log = async (
  stack,
  level,
  packageName,
  message
) => {
  try {
    const response = await fetch(
      "http://4.224.186.213/evaluation-service/logs",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          stack,
          level,
          package: packageName,
          message,
        }),
      }
    );

    if (!response.ok) {
      console.error(
        `Logging failed: ${response.status}`
      );
      return null;
    }

    const data = await response.json();

    console.log("LOG SUCCESS:", data);

    return data;
  } catch (error) {
    console.error(
      "LOG ERROR:",
      error.message
    );
    return null;
  }
};