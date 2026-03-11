import { useState } from "react";
import { FaInstagram, FaFacebookF, FaXTwitter, FaYoutube, FaLinkedinIn } from "react-icons/fa6";

export default function ContactUs() {

  const [form,setForm] = useState({
    name:"",
    email:"",
    phone:"",
    message:""
  });

  const [sent,setSent] = useState(false);

  const handleChange=(e)=>{
    setForm({...form,[e.target.name]:e.target.value});
  }

  const handleSubmit=(e)=>{
    e.preventDefault();

    console.log(form);

    setSent(true);

    setForm({
      name:"",
      email:"",
      phone:"",
      message:""
    });

    setTimeout(()=>{
      setSent(false);
    },3000);
  }

  return (

<section className="bg-[#0e0d0b] text-white py-26 px-6 lg:px-16">

<div className="max-w-7xl mx-auto">

{/* HEADER */}

<div className="mb-14 text-center">

<p className="text-[#d85b26] tracking-[0.3em] text-sm mb-3">
CONTACT
</p>

<h2 className="text-4xl lg:text-5xl font-semibold">
Get In Touch With Us
</h2>

<p className="text-gray-400 mt-4 max-w-xl mx-auto">
We would love to hear about your architectural vision. 
Contact our team to discuss your project, consultation, 
or any inquiries.
</p>

</div>


{/* MAIN GRID */}

<div className="grid lg:grid-cols-2 gap-12 items-start">

{/* LEFT INFO */}

<div className="space-y-10">

<div>

<h3 className="text-xl font-semibold mb-3 text-[#d85b26]">
Office Address
</h3>

<p className="text-gray-300 leading-relaxed">
V V Nagar, Habsiguda<br/>
Hyderabad, Telangana-500007
</p>

</div>


<div>

<h3 className="text-xl font-semibold mb-3 text-[#d85b26]">
Call Us
</h3>

<p className="text-gray-300">
+91 98765 43210
</p>

</div>


<div>

<h3 className="text-xl font-semibold mb-3 text-[#d85b26]">
Email
</h3>

<p className="text-gray-300">
udbhavaarchitect@gmail.com
</p>

</div>


<div>

<h3 className="text-xl font-semibold mb-3 text-[#d85b26]">
Working Hours
</h3>

<p className="text-gray-300 mb-4">
Mon – Sat : 9:00 AM – 6:30 PM
</p>

<div className="flex gap-4">

<a href="#" className="w-10 h-10 flex items-center justify-center border border-gray-600 rounded-full hover:bg-[#d85b26] hover:border-[#d85b26] transition">
<FaInstagram size={16}/>
</a>

<a href="#" className="w-10 h-10 flex items-center justify-center border border-gray-600 rounded-full hover:bg-[#d85b26] hover:border-[#d85b26] transition">
<FaFacebookF size={16}/>
</a>

<a href="#" className="w-10 h-10 flex items-center justify-center border border-gray-600 rounded-full hover:bg-[#d85b26] hover:border-[#d85b26] transition">
<FaXTwitter size={16}/>
</a>

<a href="#" className="w-10 h-10 flex items-center justify-center border border-gray-600 rounded-full hover:bg-[#d85b26] hover:border-[#d85b26] transition">
<FaYoutube size={16}/>
</a>

<a href="#" className="w-10 h-10 flex items-center justify-center border border-gray-600 rounded-full hover:bg-[#d85b26] hover:border-[#d85b26] transition">
<FaLinkedinIn size={16}/>
</a>

</div>

</div>

</div>



{/* RIGHT FORM */}

<div className="bg-white rounded-2xl p-8 shadow-xl text-black">

<h3 className="text-2xl font-semibold mb-6">
Send Message
</h3>

<form onSubmit={handleSubmit} className="space-y-5">

<input
type="text"
name="name"
placeholder="Your Name"
value={form.name}
onChange={handleChange}
className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:border-[#d85b26]"
required
/>

<input
type="email"
name="email"
placeholder="Your Email"
value={form.email}
onChange={handleChange}
className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:border-[#d85b26]"
required
/>

<input
type="tel"
name="phone"
placeholder="Phone Number"
value={form.phone}
onChange={handleChange}
className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:border-[#d85b26]"
required
/>

<textarea
name="message"
placeholder="Your Message"
rows="4"
value={form.message}
onChange={handleChange}
className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:border-[#d85b26]"
required
/>

<button
type="submit"
className="w-full bg-[#d85b26] text-white py-3 rounded-md font-semibold hover:bg-[#b94a1f] transition"
>
Send Message
</button>

</form>

</div>

</div>


{/* MAP SECTION */}

<div className="mt-20 rounded-xl overflow-hidden border border-gray-700">

<iframe
title="map"
src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4684.494352324571!2d78.54546198132962!3d17.40789403497454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb998acaf80979%3A0xd0863a6b1bff01de!2sUdbhava%20Architects!5e1!3m2!1sen!2sus!4v1772911688828!5m2!1sen!2sus"
className="w-full h-[420px] border-0"
/>

</div>


</div>


{/* SUCCESS POPUP */}

{sent && (

<div className="fixed inset-0 flex items-center justify-center bg-black/40 z-[9999]">

<div className="bg-white text-black px-8 py-6 rounded-xl shadow-xl text-center max-w-sm">

<h3 className="text-xl font-semibold mb-2 text-[#d85b26]">
Message Sent
</h3>

<p className="text-gray-600 mb-4">
Your message has been sent successfully.
</p>

<button
onClick={()=>setSent(false)}
className="bg-[#d85b26] text-white px-6 py-2 rounded-md hover:bg-[#b94a1f] transition"
>
Close
</button>

</div>

</div>

)}

</section>

  );
}