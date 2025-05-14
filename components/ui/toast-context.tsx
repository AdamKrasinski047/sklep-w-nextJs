'use client';

import {
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
} from './toast';
import { createContext, useContext, useState, useCallback } from 'react';

interface ToastData {
  title?: string;
  description: string;
  variant?: 'default' | 'destructive';
}

interface ToastContextType {
  toast: (data: ToastData) => void;
}

export const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function ToastProviderWrapper({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<ToastData[]>([]);

  const toast = useCallback((data: ToastData) => {
    setToasts((prev) => [...prev, data]);
    setTimeout(() => {
      setToasts((prev) => prev.slice(1));
    }, 4000);
  }, []);

  return (
    <ToastContext.Provider value={{ toast }}>
      <ToastProvider>
        {children}
        <ToastViewport />
        {toasts.map((t, i) => (
          <Toast key={i} variant={t.variant}>
            {t.title && <ToastTitle>{t.title}</ToastTitle>}
            <ToastDescription>{t.description}</ToastDescription>
            <ToastClose />
          </Toast>
        ))}
      </ToastProvider>
    </ToastContext.Provider>
  );
}
