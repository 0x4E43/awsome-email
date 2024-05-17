import { showAlert } from "tailwind-toastify";

interface ToastProps {
  type: "info" | "error" | "success";
  title: string;
  message: string;
}

function Toast({ type, title, message }: ToastProps) {
  showAlert(type, title, message);
}

export default Toast;
