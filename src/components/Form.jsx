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
      <fieldset
        style={{
          border: formState.errors.email ? '2px solid red' : '1px solid gray'
        }}
      >
        <legend
          style={{
            color: formState.errors.email ? 'red' : 'black',
            fontWeight: formState.errors.email ? 'bold' : 'null'
          }}
        >
          Email
        </legend>
        <input
          placeholder='user@host.domain'
          type='text'
          id='email'
          {...register('email', {
            required: true,
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
            }
          })}
        />
        {formState.errors.email && (
          <span>{formState.errors.email ? 'Enter a valid email' : ''}</span>
        )}
      </fieldset>
      <fieldset
        style={{
          border: formState.errors.password ? '2px solid red' : '1px solid gray'
        }}
      >
        <legend
          style={{
            color: formState.errors.password ? 'red' : 'black',
            fontWeight: formState.errors.password ? 'bold' : 'null'
          }}
        >
          Password
        </legend>
        <input
          type='text'
          id='password'
          {...register('password', {
            required: true,
            pattern: {
              value: /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/
            }
          })}
        />
        {formState.errors.password && (
          <span>
            {formState.errors.email
              ? '1-9 digit,lowercase & uppercase & 8 chars'
              : ''}
          </span>
        )}
      </fieldset>

      <button type='submit'>Enviar!</button>
    </form>
  )
}

export default Form
