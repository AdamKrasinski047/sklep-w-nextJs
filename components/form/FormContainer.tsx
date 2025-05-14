'use client';

import { useFormState } from 'react-dom';
import { useEffect } from 'react';
import { toast } from '../ui/use-toast'; // Adjusted the path to match the relative location
import { actionFunction } from '@/utils/types';

const initialState = {
  message: '',
};

function FormContainer({
  action,
  children,
}: {
  action: actionFunction;
  children: React.ReactNode;
}) {
  const [state, formAction] = useFormState(action, initialState);

  useEffect(() => {
    if (state.message) {
      toast({
        title: state.message,
      });
    }
  }, [state]);

  return <form action={formAction}>{children}</form>;
}
export default FormContainer;
