import * as React from 'react';
import { ToastActionElement, type ToastProps } from './toast';

const TOAST_LIMIT = 1;
const TOAST_REMOVE_DELAY = 1000;

type ToasterToast = ToastProps & {
  id: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: ToastActionElement;
};

const actionTypes = {
  ADD_TOAST: 'ADD_TOAST',
  UPDATE_TOAST: 'UPDATE_TOAST',
  DISMISS_TOAST: 'DISMISS_TOAST',
  REMOVE_TOAST: 'REMOVE_TOAST',
};

let count = 0;

function genId() {
  count++;
  return `${Date.now()}-${count}`;
}

export function toast({ ...props }: ToastProps) {
  const id = genId();
  const update = new CustomEvent('shadcn-toast', {
    detail: {
      id,
      ...props,
    },
  });
  window.dispatchEvent(update);
}
