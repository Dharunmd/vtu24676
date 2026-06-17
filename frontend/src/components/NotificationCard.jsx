function NotificationCard({ notification }) {
  return (
    <div className="notification-card">
      <h3>{notification.Type}</h3>

      <p>{notification.Message}</p>

      <small>
        {new Date(notification.Timestamp).toLocaleString()}
      </small>
    </div>
  );
}

export default NotificationCard;