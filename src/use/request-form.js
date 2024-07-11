import { useField, useForm } from "vee-validate";
import * as yup from 'yup'

export function useRequestForm(fn) {
   const { isSubmitting, handleSubmit } = useForm({
      initialValues: {
         status: 'active'
      }
   })

   const { value: fio, errorMessage: fError, handleBlur: fBlur } = useField(
      'fio',
      yup.string()
         .trim()
         .required('введите ФИО клиента')
   )
   const { value: phone, errorMessage: pError, handleBlur: pBlur } = useField(
      'phone',
      yup.string()
         .trim()
         .required('телефон не может быть пустым')
   )
   const { value: amount, errorMessage: aError, handleBlur: aBlur } = useField(
      'amount',
      yup.number()
         .min(0, 'сумма не может быть меньше 0')
         .required('введите сумму')
   )
   const { value: status } = useField('status')

   const onSubmit = handleSubmit(fn)

   return {
      status,
      isSubmitting,
      onSubmit,
      fio,
      fError,
      fBlur,
      phone,
      pError,
      pBlur,
      amount,
      aError,
      aBlur
   }
} 