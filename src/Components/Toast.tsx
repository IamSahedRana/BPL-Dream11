import { FiCheckCircle, FiAlertCircle, FiX } from "react-icons/fi";

export interface ToastMessage {
  id: number;
  message: string;
  type: "success" | "error" | "warning";
}

interface ToastProps {
  toast: ToastMessage | null;
  onClose: () => void;
}

const Toast = ({ toast, onClose }: ToastProps) => {
  if (!toast) return null;

  const cardStyles = {
    success: "bg-emerald-900 border-emerald-500 text-emerald-100",
    error: "bg-rose-900 border-rose-500 text-rose-100",
    warning: "bg-amber-900 border-amber-500 text-amber-100",
  };

  const icons = {
    success: <FiCheckCircle className="text-emerald-400 text-2xl shrink-0" />,
    error: <FiAlertCircle className="text-rose-400 text-2xl shrink-0" />,
    warning: <FiAlertCircle className="text-amber-400 text-2xl shrink-0" />,
  };

  return (
    <div className="toast toast-top toast-center z-50 mt-4 min-w-[320px] max-w-md">
      <div
        className={`alert border shadow-xl flex items-center justify-between gap-3 p-4 rounded-2xl ${cardStyles[toast.type]}`}
      >
        <div className="flex items-center gap-3">
          {icons[toast.type]}
          <span className="font-semibold text-sm leading-tight">
            {toast.message}
          </span>
        </div>
        <button
          onClick={onClose}
          className="btn btn-xs btn-circle btn-ghost text-gray-300 hover:text-white"
        >
          <FiX className="text-lg" />
        </button>
      </div>
    </div>
  );
};

export default Toast;