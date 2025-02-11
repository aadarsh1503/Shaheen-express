import { AiOutlineEnvironment, AiOutlineMail, AiOutlinePhone } from "react-icons/ai";

const ContactSection = () => {
  return (
    <div className="bg-[#F0F1F3]  font-montserrat py-10 px-5 lg:px-20 flex flex-col lg:flex-row gap-10">
      {/* Left Section */}
      <div className="flex flex-col gap-8 mt-10 max-w-xl mx-auto w-full lg:w-[300px]">
        {/* Address */}
        <div className="flex items-start gap-4 border-b pb-4">
          <AiOutlineEnvironment className="text-Red shrink-0 text-5xl" />
          <div>
            <h3 className="text-Blue text-2xl mb-4 font-semibold">Address</h3>
            <p className="text-gray-600 italic">
              Flat 22, Building 661, Block 712, Road 1208, P.O Box 54121, Manama, Kingdom of Bahrain
            </p>
          </div>
        </div>
        {/* Email */}
        <div className="flex items-start gap-4 border-b pb-4">
          <AiOutlineMail className="text-Red text-5xl" />
          <div>
            <h3 className="text-Blue text-2xl mb-4 font-semibold">Email</h3>
            <p className="text-gray-600 mb-2">hello@alshaheenexpress.com</p>
          </div>
        </div>
        {/* Phone */}
        <div className="flex items-start gap-4">
          <AiOutlinePhone className="text-Red shrink-0 text-5xl" />
          <div>
            <h3 className="text-Blue text-2xl font-semibold">Phone</h3>
            <p className="text-gray-600 mb-4">+973 1330 3301, +973 3334 0017, +973 3311 7441</p>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/2 p-8 mt-10 rounded flex flex-col items-start"> 
        <input
          type="text"
          placeholder="Name"
          className="w-full lg:w-[400px] p-5 mb-8 bg-white rounded "
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full lg:w-[400px] p-5 bg-white rounded mb-8"
        />
        <textarea
          placeholder="Message"
          className="w-full lg:w-[400px] p-5 bg-white rounded mb-8 h-24"
        ></textarea>
        <button className="w-full lg:w-[400px] bg-Red text-white p-3 rounded hover:bg-red-600 transition">
          SUBMIT
        </button>
      </div>
    </div>
  );
};

export default ContactSection;
