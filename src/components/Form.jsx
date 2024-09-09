import React from 'react'
import './Form.css'
import { useForm } from 'react-hook-form'
const Form = () => {
  const { register, handleSubmit, formState, watch } = useForm({
    defaultValues: { usuario: '', email: '', password: '' }
  })
  console.log(formState.errors)
  const onSubmit = (values) => {
    console.log(values)
  }
  return (
    <form className='formulario' onSubmit={handleSubmit(onSubmit)}>
      <fieldset
        style={{
          border: formState.errors.usuario ? '2px solid red' : '1px solid gray'
        }}
      >
        <legend
          style={{
            color: formState.errors.usuario ? 'red' : 'black',
            fontWeight: formState.errors.usuario ? 'bold' : 'null'
          }}
        >
          Usuario
        </legend>
        <input
          {...register('usuario', {
            required: { value: true, message: 'Introduce un usuario' }
          })}
          style={{
            boder: formState.errors.usuario ? '2px solid red' : 'none'
          }}
          type='text'
          id='usuario'
        />
      </fieldset>
      <fieldset>
        <legend>Email</legend>
        <input type='text' id='email' />
      </fieldset>
      <fieldset>
        <legend>Password</legend>
        <input type='text' id='password' />
      </fieldset>
      <button type='submit'>Enviar!</button>
    </form>
  )
}

export default Form
