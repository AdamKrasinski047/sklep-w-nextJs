'use client';

import { useFormState } from 'react-dom';
import { useEffect } from 'react';
import { useToast } from '@/hooks/use-toast'; // <- poprawiony import
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
  const { toast } = useToast(); // <- poprawnie z hooka

  useEffect(() => {
    if (state.message) {
      toast({
        title: state.message, // można dodać też description
      });
    }
  }, [state, toast]);

  return <form action={formAction}>{children}</form>;
}
export default FormContainer;
