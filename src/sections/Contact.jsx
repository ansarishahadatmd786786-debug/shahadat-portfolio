import { useState } from 'react'

const initialValues = { name: '', email: '', projectType: '', message: '' }

function validate(values) {
  const errors = {}
  if (!values.name.trim()) errors.name = 'Please enter your name.'
  if (!values.email.trim()) errors.email = 'Please enter your email address.'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) errors.email = 'Please enter a valid email address.'
  if (!values.projectType) errors.projectType = 'Please choose a project type.'
  if (!values.message.trim()) errors.message = 'Please add a short message about your project.'
  return errors
}

export default function Contact() {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [notice, setNotice] = useState('')

  const updateField = ({ target: { name, value } }) => {
    setValues((current) => ({ ...current, [name]: value }))
    setErrors((current) => ({ ...current, [name]: undefined }))
    setNotice('')
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const nextErrors = validate(values)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length) return

    const subject = encodeURIComponent(`Website enquiry: ${values.projectType}`)
    const body = encodeURIComponent(`Name: ${values.name}\nEmail: ${values.email}\nProject type: ${values.projectType}\n\n${values.message}`)
    setNotice('Opening a prefilled email draft. Please send it from your email app to complete the message.')
    window.location.href = `mailto:ansarish8880@gmail.com?subject=${subject}&body=${body}`
  }

  return <section className="contact section" id="contact" aria-labelledby="contact-title">
    <div className="container contact-grid">
      <div className="contact-copy">
        <p className="eyebrow">Contact</p>
        <h2 id="contact-title">Let&apos;s build something that works for your business.</h2>
        <p>Get in touch to discuss a new website, landing page, website redesign or ongoing maintenance.</p>
        <dl className="contact-details">
          <div><dt>Email</dt><dd><a href="mailto:ansarish8880@gmail.com">ansarish8880@gmail.com</a></dd></div>
          <div><dt>Phone</dt><dd><a href="tel:7217658640">7217658640</a></dd></div>
        </dl>
      </div>
      <form className="contact-form" noValidate onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="name">Name</label>
          <input id="name" name="name" type="text" autoComplete="name" placeholder="Your name" value={values.name} onChange={updateField} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? 'name-error' : undefined} />
          {errors.name && <p className="field-error" id="name-error">{errors.name}</p>}
        </div>
        <div className="form-field">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" autoComplete="email" placeholder="you@example.com" value={values.email} onChange={updateField} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? 'email-error' : undefined} />
          {errors.email && <p className="field-error" id="email-error">{errors.email}</p>}
        </div>
        <div className="form-field">
          <label htmlFor="projectType">Project type</label>
          <select id="projectType" name="projectType" value={values.projectType} onChange={updateField} aria-invalid={Boolean(errors.projectType)} aria-describedby={errors.projectType ? 'project-type-error' : undefined}>
            <option value="">Select a project type</option><option>Business Website</option><option>Landing Page</option><option>Website Redesign</option><option>Website Maintenance</option><option>Other</option>
          </select>
          {errors.projectType && <p className="field-error" id="project-type-error">{errors.projectType}</p>}
        </div>
        <div className="form-field">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="5" placeholder="Tell me a little about your project..." value={values.message} onChange={updateField} aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? 'message-error' : undefined}></textarea>
          {errors.message && <p className="field-error" id="message-error">{errors.message}</p>}
        </div>
        {notice && <p className="form-notice" role="status">{notice}</p>}
        <button className="button" type="submit">Let&apos;s Talk <span aria-hidden="true">↗</span></button>
        <p className="form-help">Submitting opens a prefilled email draft; you send the message from your own email app.</p>
      </form>
    </div>
  </section>
}
