import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Send, Loader2, Globe2, ShieldCheck, Clock, Mail } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    country: "",
    countryOther: "",
    product: "",
    message: "",
    userType: "",
    incoterms: "",
    shipmentType: "",
    lcType: "",
    dispatchMethod: "",
    containerType: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    try {
      // Initialize EmailJS with public key inline (no .env)
      emailjs.init({ publicKey: 'JSdkOm_Fe-QeSbxzL' });
    } catch (err) {
      // noop — init is optional when passing publicKey to send
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (!formData.name || !formData.email || !formData.product || !formData.country || !formData.message) {
        toast.error('Please fill in all required fields');
        return;
      }

      const loadingToast = toast.loading('Sending your inquiry...');

      const effectiveCountry = formData.country === 'other' ? (formData.countryOther || '').trim() : formData.country;
      if (!effectiveCountry) {
        toast.dismiss(loadingToast);
        toast.error('Please provide your country');
        return;
      }

      // Build a single composed HTML message to match your EmailJS template (which uses {{name}} and {{message}})
      const composedMessage = `
        <strong>Customer Information</strong><br/>
        <strong>Name:</strong> ${formData.name}<br/>
        <strong>Email:</strong> ${formData.email}<br/>
        <strong>Phone:</strong> ${formData.phone || 'Not provided'}<br/>
        <strong>Company:</strong> ${formData.company || 'Not provided'}<br/>
        <strong>User Type:</strong> ${formData.userType || 'Not specified'}<br/>
        <strong>Country:</strong> ${effectiveCountry}<br/>
        <br/>
        <strong>Product & Requirements</strong><br/>
        <strong>Product:</strong> ${formData.product}<br/>
        <strong>InCoTerms:</strong> ${formData.incoterms || 'Not specified'}<br/>
        <strong>Shipment Type:</strong> ${formData.shipmentType || 'Not specified'}<br/>
        <br/>
        <strong>Message</strong><br/>
        ${formData.message}<br/>
        <br/>
        <em>Submitted on: ${new Date().toLocaleString()}</em>
      `;

      // EmailJS params; your template uses {{name}} in subject and {{message}} in body
      const templateParams = {
        // For your template placeholders
        name: formData.name,
        message: composedMessage,
        // Extra fields in case you add them to the template later
        from_name: formData.name,
        from_email: formData.email,
        reply_to: formData.email,
        to_name: 'Thrayana Sales',
        phone: formData.phone || 'Not provided',
        company: formData.company || 'Not provided',
        user_type: formData.userType || 'Not specified',
        country: effectiveCountry,
        product: formData.product,
        incoterms: formData.incoterms || 'Not specified',
        shipment_type: formData.shipmentType || 'Not specified',
        submission_date: new Date().toLocaleString(),
        to_email: 'sales@thrayana.com'
      };

      // EmailJS credentials - CONFIGURED
      const SERVICE_ID = 'service_ghblhgy'; // Your EmailJS service ID
      const TEMPLATE_ID = 'template_keepjtr'; // Your EmailJS template ID  
      const PUBLIC_KEY = 'JSdkOm_Fe-QeSbxzL'; // Your EmailJS public key

      // Credentials are inlined per requirement; no placeholder guard needed

      console.log('Attempting to send email with EmailJS...', {
        serviceId: SERVICE_ID,
        templateId: TEMPLATE_ID,
        templateParams: templateParams
      });

      // Send email using EmailJS
      const result = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams,
        PUBLIC_KEY
      );

      console.log('EmailJS response:', result);
      toast.dismiss(loadingToast);

      if (result.status === 200) {
        toast.success('Inquiry sent successfully! We will get back to you within 24 hours.', { duration: 5000 });
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          country: "",
          countryOther: "",
          product: "",
          message: "",
          userType: "",
          incoterms: "",
          shipmentType: "",
          lcType: "",
          dispatchMethod: "",
          containerType: ""
        });
      } else {
        toast.error(`Failed to send inquiry. Status: ${result.status}`, { duration: 5000 });
      }
      
    } catch (error: any) {
      console.error('Error sending email:', error);
      const details = error?.text || error?.message || 'Unknown error';
      toast.error(`Failed to send email: ${details}`, { duration: 6000 });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="w-full">
      <Helmet>
        <title>Contact Thrayana | Get a Quotation for Premium Export Products</title>
        <meta name="description" content="Contact Thrayana for bulk enquiries, product catalogs, and quotations. We are your reliable partner for premium Ashwagandha, Honey, Spices, and natural food exports." />
        <link rel="canonical" href="https://www.thrayana.com/contact" />
      </Helmet>
      <Header />
      <Toaster position="top-center" toastOptions={{ duration: 4000, style: { background: '#363636', color: '#fff' } }} />

      {/* Animated gradient blobs background */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-gradient-to-br from-blue-400/30 to-purple-400/30 blur-3xl animate-pulse" />
        <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-gradient-to-tr from-teal-300/30 to-blue-400/30 blur-3xl animate-pulse [animation-delay:200ms]" />
      </div>

      <div className="w-full min-h-screen bg-gradient-to-br from-slate-50/70 via-blue-50/60 to-purple-50/60 pt-16 sm:pt-20 lg:pt-24">
        {/* Hero Section */}
        <div className="w-full bg-gradient-to-r from-blue-600 to-purple-700 text-white py-10 sm:py-14">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-5xl mx-auto text-center space-y-3 sm:space-y-5 animate-in fade-in duration-1000">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-sm backdrop-blur">
                <span className="inline-block h-2 w-2 rounded-full bg-emerald-300 animate-pulse" />
                We reply within 24 hours
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
                Let's Build Your Global Trade Success
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-blue-100/90 max-w-3xl mx-auto px-4">
                Share your requirements. Our team will reach out with pricing, specifications and shipping options tailored to your market.
              </p>

              {/* Highlights */}
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl mx-auto">
                <div className="flex items-center justify-center gap-2 rounded-xl bg-white/10 px-4 py-2 shadow-sm backdrop-blur transition-transform hover:scale-[1.02]">
                  <Clock className="h-4 w-4 text-emerald-200" />
                  <span className="text-sm">Fast Response</span>
                </div>
                <div className="flex items-center justify-center gap-2 rounded-xl bg-white/10 px-4 py-2 shadow-sm backdrop-blur transition-transform hover:scale-[1.02]">
                  <Globe2 className="h-4 w-4 text-emerald-200" />
                  <span className="text-sm">Worldwide Shipping</span>
                </div>
                <div className="flex items-center justify-center gap-2 rounded-xl bg-white/10 px-4 py-2 shadow-sm backdrop-blur transition-transform hover:scale-[1.02]">
                  <ShieldCheck className="h-4 w-4 text-emerald-200" />
                  <span className="text-sm">Secure & Confidential</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
          <div className="w-full max-w-7xl mx-auto">
            {/* Contact Information Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16 items-stretch">
              {/* Office Address */}
              <div className="group relative p-[1px] rounded-2xl bg-gradient-to-br from-blue-200 to-purple-200 h-full">
                <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 border border-gray-100 transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-0.5 h-full flex flex-col">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                    <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4">Office Address</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    Ittina Housing Ltd, A blk, SY No 5/23,46,47,48,<br />
                    Electronics City, Bangalore South,<br />
                    Bangalore - 560100, India
                  </p>
                </div>
                {/* gradient glow under card */}
                <div className="pointer-events-none absolute -bottom-4 left-8 right-8 h-4 rounded-full bg-gradient-to-r from-blue-300/60 to-purple-300/60 blur-md opacity-80" />
              </div>

              {/* Email Addresses */}
              <div className="group relative p-[1px] rounded-2xl bg-gradient-to-br from-orange-200 to-rose-200 h-full">
                <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 border border-gray-100 transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-0.5 h-full flex flex-col">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                    <Mail className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4">Email Addresses</h3>
                  <div className="space-y-2">
                    <a href="mailto:sales@thrayana.com" className="inline-block text-sm sm:text-base text-gray-700 font-medium hover:text-blue-600 transition-colors">sales@thrayana.com</a><br />
                    <a href="mailto:office@thrayana.com" className="inline-block text-sm sm:text-base text-gray-700 font-medium hover:text-blue-600 transition-colors">office@thrayana.com</a>
                  </div>
                </div>
                <div className="pointer-events-none absolute -bottom-4 left-8 right-8 h-4 rounded-full bg-gradient-to-r from-orange-300/60 to-rose-300/60 blur-md opacity-80" />
              </div>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
              {/* Contact Form */}
              <div className="space-y-6 sm:space-y-8 animate-in slide-in-from-left duration-1000">
                <div className="relative group">
                  <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-blue-400/40 to-purple-400/40 blur opacity-0 group-hover:opacity-100 transition duration-500" />
                  <div className="relative bg-white rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-100">
                    <div className="text-center mb-8">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-md shadow-purple-200/40">
                        <Send className="w-8 h-8 text-white" />
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">Send Your Inquiry</h2>
                      <p className="text-sm sm:text-base text-gray-600 max-w-md mx-auto">
                        Are you a Buyer looking to import from India? Complete the form below to send your inquiry and requirements.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* User Type */}
                      <div className="space-y-2">
                        <label className="block text-sm font-semibold text-gray-700">Who are you? *</label>
                        <Select value={formData.userType} onValueChange={(value) => handleInputChange('userType', value)}>
                          <SelectTrigger className="w-full border-gray-200 focus:border-blue-500 focus:ring-blue-500">
                            <SelectValue placeholder="Select your role" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="buyer">Buyer</SelectItem>
                            <SelectItem value="seller">Seller</SelectItem>
                            <SelectItem value="importer">Importer</SelectItem>
                            <SelectItem value="exporter">Exporter</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      {/* Personal Information */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="block text-sm font-semibold text-gray-700">Full Name *</label>
                          <Input type="text" placeholder="Enter your full name" value={formData.name} onChange={(e) => handleInputChange('name', e.target.value)} className="w-full border-gray-200 focus:border-blue-500 focus:ring-blue-500" required />
                        </div>
                        <div className="space-y-2">
                          <label className="block text-sm font-semibold text-gray-700">Email Address *</label>
                          <Input type="email" placeholder="Enter your email" value={formData.email} onChange={(e) => handleInputChange('email', e.target.value)} className="w-full border-gray-200 focus:border-blue-500 focus:ring-blue-500" required />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="block text-sm font-semibold text-gray-700">Phone Number</label>
                          <Input type="tel" placeholder="Enter your phone number" value={formData.phone} onChange={(e) => handleInputChange('phone', e.target.value)} className="w-full border-gray-200 focus:border-blue-500 focus:ring-blue-500" />
                        </div>
                        <div className="space-y-2">
                          <label className="block text-sm font-semibold text-gray-700">Company Name</label>
                          <Input type="text" placeholder="Enter your company name" value={formData.company} onChange={(e) => handleInputChange('company', e.target.value)} className="w-full border-gray-200 focus:border-blue-500 focus:ring-blue-500" />
                        </div>
                      </div>

                      {/* Product and Country */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="block text-sm font-semibold text-gray-700">Select Product to Import *</label>
                          <Select value={formData.product} onValueChange={(value) => handleInputChange('product', value)}>
                            <SelectTrigger className="w-full border-gray-200 focus:border-blue-500 focus:ring-blue-500">
                              <SelectValue placeholder="Select product" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="turmeric-powder">Turmeric Powder</SelectItem>
                              <SelectItem value="banana-powder">Banana Powder</SelectItem>
                              <SelectItem value="bagasse-cutlery">Bagasse Cutlery</SelectItem>
                              <SelectItem value="jaggery-powder">Jaggery Powder</SelectItem>
                              <SelectItem value="onion-powder">Onion Powder</SelectItem>
                              <SelectItem value="red-chilli-powder">Red Chilli Powder</SelectItem>
                              <SelectItem value="green-chilli-powder">Green Chilli Powder</SelectItem>
                              <SelectItem value="cumin-seed">Cumin Seed</SelectItem>
                              <SelectItem value="black-tea">Black Tea</SelectItem>
                              <SelectItem value="green-tea">Green Tea</SelectItem>
                              <SelectItem value="other">Any Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <label className="block text-sm font-semibold text-gray-700">Select your Country *</label>
                          <Select value={formData.country} onValueChange={(value) => handleInputChange('country', value)}>
                            <SelectTrigger className="w-full border-gray-200 focus:border-blue-500 focus:ring-blue-500">
                              <SelectValue placeholder="Select country" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="usa">United States</SelectItem>
                              <SelectItem value="uk">United Kingdom</SelectItem>
                              <SelectItem value="uae">United Arab Emirates</SelectItem>
                              <SelectItem value="germany">Germany</SelectItem>
                              <SelectItem value="france">France</SelectItem>
                              <SelectItem value="canada">Canada</SelectItem>
                              <SelectItem value="australia">Australia</SelectItem>
                              <SelectItem value="india">India</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          {formData.country === 'other' && (
                            <div className="space-y-2 mt-3">
                              <label className="block text-sm font-semibold text-gray-700">Enter your Country *</label>
                              <Input
                                type="text"
                                placeholder="Type your country name"
                                value={formData.countryOther}
                                onChange={(e) => handleInputChange('countryOther', e.target.value)}
                                className="w-full border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                                required
                              />
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Trade Terms */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="block text-sm font-semibold text-gray-700">Select InCoTerms</label>
                          <Select value={formData.incoterms} onValueChange={(value) => handleInputChange('incoterms', value)}>
                            <SelectTrigger className="w-full border-gray-200 focus:border-blue-500 focus:ring-blue-500">
                              <SelectValue placeholder="Select InCoTerms" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="exw">EXW (Ex Works)</SelectItem>
                              <SelectItem value="fca">FCA (Free Carrier)</SelectItem>
                              <SelectItem value="fas">FAS (Free Alongside Ship)</SelectItem>
                              <SelectItem value="fob">FOB (Free on Board)</SelectItem>
                              <SelectItem value="cfr">CFR (Cost and Freight)</SelectItem>
                              <SelectItem value="cif">CIF (Cost, Insurance, and Freight)</SelectItem>
                              <SelectItem value="cpt">CPT (Carriage Paid To)</SelectItem>
                              <SelectItem value="cip">CIP (Carriage and Insurance Paid To)</SelectItem>
                              <SelectItem value="dap">DAP (Delivered at Place)</SelectItem>
                              <SelectItem value="dpu">DPU (Delivered at Place Unloaded)</SelectItem>
                              <SelectItem value="ddp">DDP (Delivered Duty Paid)</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <label className="block text-sm font-semibold text-gray-700">Select the Type of Shipment</label>
                          <Select value={formData.shipmentType} onValueChange={(value) => handleInputChange('shipmentType', value)}>
                            <SelectTrigger className="w-full border-gray-200 focus:border-blue-500 focus:ring-blue-500">
                              <SelectValue placeholder="Select shipment type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="fcl">FCL</SelectItem>
                              <SelectItem value="lcl">LCL</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      {/* Message */}
                      <div className="space-y-2">
                        <label className="block text-sm font-semibold text-gray-700">Message *</label>
                        <Textarea placeholder="Tell us about your requirements and specifications..." value={formData.message} onChange={(e) => handleInputChange('message', e.target.value)} className="w-full min-h-[140px] border-gray-200 focus:border-blue-500 focus:ring-blue-500 resize-none" required />
                      </div>

                      <Button type="submit" disabled={isSubmitting} className="group w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl text-lg disabled:opacity-50 disabled:cursor-not-allowed">
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                            Sending Inquiry...
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5 mr-2 transition-transform group-hover:-translate-y-0.5" />
                            Send Inquiry
                          </>
                        )}
                      </Button>

                      <p className="text-xs text-gray-500 text-center">By sending this inquiry, you agree to our terms and privacy policy.</p>
                    </form>
                  </div>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="space-y-6 sm:space-y-8 animate-in slide-in-from-right duration-1000 delay-300">
                <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-100">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 sm:mb-6">Top Questions</h2>
                  <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8">Need Help? Find Answers to Common Questions Before Reaching Out</p>
                  
                  <div className="space-y-4 sm:space-y-6">
                    <div className="border-l-4 border-blue-500 pl-4 sm:pl-6">
                      <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">Which countries do you export to?</h3>
                      <p className="text-sm sm:text-base text-gray-600">We currently export to various countries, including the USA, UK, UAE, Europe, and many more. Our logistics network ensures safe and efficient delivery worldwide.</p>
                    </div>
                    <div className="border-l-4 border-green-500 pl-4 sm:pl-6">
                      <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">What are your payment terms and options?</h3>
                      <p className="text-sm sm:text-base text-gray-600">We accept various payment methods, including Letter of Credit (LC), Advance Payment, and Bank Transfers. Specific terms can be discussed during the negotiation process.</p>
                    </div>
                    <div className="border-l-4 border-orange-500 pl-4 sm:pl-6">
                      <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">How long does it take to process and ship an order?</h3>
                      <p className="text-sm sm:text-base text-gray-600">Processing and shipping times vary based on the product and destination. Typically, orders are processed within a few days, and shipping duration depends on the chosen method.</p>
                    </div>
                    <div className="border-l-4 border-purple-500 pl-4 sm:pl-6">
                      <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">Can I track my shipment once it's dispatched?</h3>
                      <p className="text-sm sm:text-base text-gray-600">Absolutely! Once your order is shipped, we will provide you with tracking details to monitor your shipment's progress.</p>
                    </div>
                    <div className="border-l-4 border-rose-500 pl-4 sm:pl-6">
                      <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">What is the minimum order quantity (MOQ)?</h3>
                      <p className="text-sm sm:text-base text-gray-600">Our minimum order quantity is 1000 KG, though it may vary depending on the product category and the chosen shipment type (FCL or LCL).</p>
                    </div>
                    <div className="border-l-4 border-teal-500 pl-4 sm:pl-6">
                      <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">Do you provide customized packaging?</h3>
                      <p className="text-sm sm:text-base text-gray-600">Yes, we provide comprehensive customized packaging and white-labeling solutions specifically designed to meet your market's unique requirements.</p>
                    </div>
                  </div>

                  <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="rounded-xl bg-blue-50 px-4 py-3 text-sm text-blue-700 font-medium">Certified Quality</div>
                    <div className="rounded-xl bg-emerald-50 px-4 py-3 text-sm text-emerald-700 font-medium">Custom Packaging</div>
                    <div className="rounded-xl bg-violet-50 px-4 py-3 text-sm text-violet-700 font-medium">Door-to-Door Support</div>
                  </div>
                </div>
              </div>
            </div>
        {/* Google Map Section */}
        <div className="w-full mt-12 sm:mt-16 lg:mt-20 px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 lg:pb-20">
          <div className="w-full max-w-7xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 animate-in fade-in duration-1000 delay-500">
              <iframe 
                src="https://maps.google.com/maps?q=Ittina%20Housing%20Ltd,%20Electronics%20City,%20Bangalore&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="450" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location"
              />
            </div>
          </div>
        </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact; 