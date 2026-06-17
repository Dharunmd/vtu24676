import { useEffect, useState } from "react";
import { getNotifications } from "../api/notificationApi";
import NotificationCard from "../components/NotificationCard";
import Pagination from "../components/Pagination";
import FilterBar from "../components/FilterBar";

function AllNotifications() {
  const [notifications, setNotifications] = useState([]);
  const [page, setPage] = useState(1);
  const [type, setType] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadNotifications();
  }, [page, type]);

  const loadNotifications = async () => {
    try {
      setLoading(true);

      const data = await getNotifications(
        page,
        10,
        type
      );

      console.log("API RESPONSE:", data);

      console.log("NOTIFICATIONS:", notifications);
      setNotifications(
        data.notifications || []
      );
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h1>All Notifications</h1>

      <FilterBar
        type={type}
        setType={(newType) => {
          setType(newType);
          setPage(1);
        }}
      />

      {loading ? (
        <h2>Loading...</h2>
      ) : notifications.length > 0 ? (
        notifications.map((item) => (
          <NotificationCard
            key={item.ID}
            notification={item}
          />
        ))
      ) : (
        <h2>No Notifications Found</h2>
      )}

      <Pagination
        page={page}
        setPage={setPage}
      />
    </div>
  );
}

export default AllNotifications;