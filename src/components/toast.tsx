export default function Toast() {
  return (
    <>
      <div className="toast toast-start">
        <div className="alert alert-info">
          <span>New mail arrived.</span>
        </div>
        <div className="alert alert-success">
          <span>Message sent successfully.</span>
        </div>
      </div>
    </>
  );
}
