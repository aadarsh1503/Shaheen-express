import { AiOutlineEnvironment, AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import AdvantagesSection from "../Flatbed/AdvantagesSection";
import AgentPartnerSection from "../Flatbed/AgentPartnerSection";
import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    try {
      // Format the message body to include all fields
      const emailBody = `
        Name: ${formData.name}
        Email: ${formData.email}
        Message: ${formData.message}
      `;

      const response = await fetch('https://alshaheenexpress.com/send_to_a_mail.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: emailBody,  // the formatted messageUse 
          to: 'hello@alshaheenexpress.com',
          subject: `New Contact Form Submission from ${formData.name}`
        })
      });

      if (response.ok) {
        setFormData({ name: '', email: '', message: '' });
        setShowThankYou(true);
        setTimeout(() => setShowThankYou(false), 5000);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <div className="bg-[#F0F1F3] font-montserrat py-10 px-5 lg:px-20 flex flex-col lg:flex-row gap-10">
        {/* Left Section */}
        <div className="flex flex-col gap-8 mt-10 max-w-xl mx-auto w-full lg:w-[300px]">
          {/* Address */}
          <div className="flex items-start gap-4 border-b pb-4">
            <AiOutlineEnvironment className="text-Red shrink-0 text-5xl" />
            <div>
              <h3 className="text-Blue text-2xl mb-4 font-semibold">Address</h3>
              <p className="text-[#73777F] font-noto-serif ">
              Flat 22, Building 661, Block 712, Road 1208, Manama, Kingdom of Bahrain
              </p>
            </div>
          </div>
          {/* Email */}
          <div className="flex items-start gap-4 border-b pb-4">
            <AiOutlineMail className="text-Red text-5xl" />
            <div>
              <h3 className="text-Blue text-2xl mb-4 font-semibold">Email</h3>
              <p className="text-[#73777F] mb-2">
                <a href="mailto:hello@alshaheenexpress.com" className="hover:underline font-noto-serif text-[#73777F]">
                  hello@alshaheenexpress.com
                </a>
              </p>
            </div>
          </div>
          {/* Phone */}
          <div className="flex items-start gap-4">
            <AiOutlinePhone className="text-Red shrink-0 text-5xl" />
            <div>
              <h3 className="text-Blue text-2xl font-semibold">Phone</h3>
              <p className="text-[#73777F] font-noto-serif mb-4">
                <a href="tel:+97313303301" className="hover:underline text-[#73777F]">+973 1330 3301</a>, 
                <a href="tel:+97333340017" className="hover:underline text-[#73777F]"> +973 3334 0017</a>, 
                <a href="tel:+97333117441" className="hover:underline text-[#73777F]"> +973 3311 7441</a>
              </p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2 p-8 font-noto-serif mt-10 rounded flex flex-col items-start"> 
          <form onSubmit={handleSubmit} className="w-full">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full lg:w-[400px] p-5 mb-8 bg-white rounded"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full lg:w-[400px] p-5 bg-white rounded mb-8"
            />
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full lg:w-[400px] p-5 bg-white rounded mb-8 h-24"
            ></textarea>
            
            {error && <p className="text-red-500 mb-4">{error}</p>}
            
            {showThankYou && (
              <div className="mb-4 p-4 bg-green-100 text-green-700 rounded w-full lg:w-[400px]">
                <p>Thank you for your message!</p>
                <p>We'll get back to you soon.</p>
              </div>
            )}
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full lg:w-[400px] bg-Red text-white p-3 rounded hover:bg-red-600 transition disabled:opacity-50"
            >
              {isSubmitting ? 'SENDING...' : 'SUBMIT'}
            </button>
          </form>
        </div>
      </div>
      <AdvantagesSection />
      <AgentPartnerSection />
    </div>
  );
};

export default ContactSection;