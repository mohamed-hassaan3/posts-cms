import React from 'react'

const ContactUsForm = ({formValues, onChange, onSubmit}: WithFormProps) => {
  return (
    <form onSubmit={onSubmit} className='*:border flex flex-col *:my-6 w-1/2 m-auto *:p-2'>
      <input type="text" name='name' value={formValues.name || ""} onChange={onChange} />
      <input type="email" name='email' value={formValues.email || ""} onChange={onChange} />
      <input type="subject" name='subject' value={formValues.subject || ""} onChange={onChange} />
      <input type="message" name='message' value={formValues.message || ""} onChange={onChange} />
      <button className='bg-amber-200 cursor-pointer'>Submit</button>
    </form>
  )
}

export default ContactUsForm
