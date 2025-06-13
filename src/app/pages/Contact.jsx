import React from 'react'
import QuoteForm from '../components/QuoteForm'
import { Mail } from 'lucide-react'

function Contact() {
  return (
     <div className="p-6 bg-white rounded-xl shadow-md">
    

  <h2 className="text-3xl font-bold text-gray-800">Contact Us</h2>
  <p className="mt-4 text-gray-600">
    We’d love to hear from you. Email us at{' '}
    <a 
      href="mailto:akvalves.sales@gmail.com" 
      className="text-blue-600 underline hover:text-blue-800 transition-colors duration-200"
    >
      akvalves.sales@gmail.com
    </a>
  </p>
  <div className="mt-6">
    <QuoteForm />
  </div>
</div>

  )
}

export default Contact
