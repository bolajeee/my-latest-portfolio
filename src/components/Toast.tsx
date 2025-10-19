
"use client";
import React, { useEffect } from "react";

interface ToastProps {
  message: string;
  type: "success" | "error";
  onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({ message, type, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [onClose]);

  const baseClasses = "fixed top-5 right-5 p-4 rounded-lg shadow-lg text-white";
  const typeClasses =
    type === "success" ? "bg-green-500" : "bg-red-500";

  return (
    <div className={`${baseClasses} ${typeClasses}`} role="alert" aria-live="assertive">
      <p>{message}</p>
    </div>
  );
};

export default Toast;
