import * as React from 'react';
import { useFormContext } from 'react-hook-form';

import {
  FormFieldContext,
  FormItemContext,
} from '@/shared/contexts/form-context';

export const useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext);
  const itemContext = React.useContext(FormItemContext);
  const { getFieldState, formState: formStateFromContext } = useFormContext();
  const fieldState = getFieldState(fieldContext.name, formStateFromContext);

  if (!fieldContext) {
    throw new Error('useFormField should be used within <FormField>');
  }

  const { id } = itemContext;

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  };
};
