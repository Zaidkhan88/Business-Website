import { Metadata } from 'next';
import QuoteForm from '../components/QuoteForm';
import { Mail } from 'lucide-react';

export const metadata = {
  title: 'Contact Us | AK Valves',
  description: 'Get in touch with AK Valves. Fill out our quote form or email us directly at akvalves.sales@gmail.com.',
  keywords: ['AK Valves', 'valve company', 'contact valve supplier', 'quote valve India'],
  openGraph: {
    title: 'Contact AK Valves',
    description: 'Reach out to AK Valves for all your valve needs. Quick response via form or email.',
    url: 'https://yourdomain.com/contact',
    siteName: 'AK Valves',
  },
};

export default function ContactPage() {
  return (
    <div className="p-6 bg-white rounded-xl shadow-md max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800">Contact Us</h1>
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
  );
}
