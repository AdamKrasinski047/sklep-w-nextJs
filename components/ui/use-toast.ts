import * as React from 'react';
import { ToastActionElement } from './toast';

// const TOAST_LIMIT = 1;
// const TOAST_REMOVE_DELAY = 1000;

type ToasterToast = {
  id: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: ToastActionElement;
  variant?: 'default' | 'destructive';
};

// const actionTypes = {
//   ADD_TOAST: 'ADD_TOAST',
//   UPDATE_TOAST: 'UPDATE_TOAST',
//   DISMISS_TOAST: 'DISMISS_TOAST',
//   REMOVE_TOAST: 'REMOVE_TOAST',
// };

let count = 0;

function genId() {
  count++;
  return `${Date.now()}-${count}`;
}

export function toast(toast: Omit<ToasterToast, 'id'>) {
  const id = genId();
  const event = new CustomEvent('shadcn-toast', {
    detail: {
      id,
      ...toast,
    },
  });
  window.dispatchEvent(event);
}
