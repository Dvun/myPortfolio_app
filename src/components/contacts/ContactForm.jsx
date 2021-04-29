import React from 'react'
import {Button, Form, FormField} from 'semantic-ui-react'
import {useForm} from 'react-hook-form'
import styled from 'styled-components'

const ContactForm = () => {
  const {handleSubmit, formState: {errors}, register} = useForm({
    defaultValues: {name: '', email: '', description: ''},
  })

  const onSubmit = (values) => {
    console.log(values)
  }

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>

      <FormField width={16}>
        <label htmlFor="">Name</label>
        <input type="text" {...register('name', {required: true})}/>
        {errors.email && <p>Name is required!</p>}
      </FormField>

      <FormField width={16}>
        <label htmlFor="">Email</label>
        <input type="email" {...register('email', {required: true})}/>
        {errors.email && <p>Email is required!</p>}
      </FormField>

      <FormField width={16}>
        <label htmlFor="">Your message</label>
        <textarea {...register('description', {required: true})} rows="5"/>
        {errors.description && <p>Description is required!</p>}
      </FormField>

      <Button color={'blue'} content={'Send Email'} floated={'right'}/>
    </StyledForm>
  )
}

const StyledForm = styled(Form)`

  .sixteen.wide.field {
    position: relative;
    margin-bottom: 4rem;
  }

  label {
    padding: 3px .5rem;
    position: absolute;
    top: -15px;
    left: 1rem;
    font-size: 1.5rem !important;
    color: var(--prymary-color) !important;
    background-color: var(--background-dark-grey);
  }

  input {
    color: white !important;
    border: 1px solid var(--border-color) !important;
    background-color: #0F1119 !important;
  }

  textarea {
    color: white !important;
    border: 1px solid var(--border-color) !important;
    background-color: #0F1119 !important;
  }

  p {
    position: absolute;
    color: red;
  }
`

export default ContactForm