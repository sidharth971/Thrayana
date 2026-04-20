import React, { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import { Shield, Info, Lock, Share2, Database, FileText, CheckCircle, Bell } from "lucide-react";

const PrivacyPolicy = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, []);

  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const sections = [
    {
      id: 1,
      title: "Information We Collect",
      icon: Info,
      content: (
        <div className="space-y-4 text-muted-foreground">
          <p>When you submit your details through our LinkedIn form, we may collect:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Full Name</li>
            <li>Email Address</li>
            <li>Phone Number / WhatsApp Number</li>
            <li>Company Name</li>
            <li>Location / Country</li>
            <li>Any additional information you voluntarily provide</li>
          </ul>
        </div>
      )
    },
    {
      id: 2,
      title: "How We Use Your Information",
      icon: Database,
      content: (
        <div className="space-y-4 text-muted-foreground">
          <p>We collect and use your information for the following purposes:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>To contact you regarding your inquiry or interest in our products (e.g., moringa powder, agricultural exports, etc.)</li>
            <li>To share product details, quotations, catalogs, and business proposals</li>
            <li>To understand your requirements and provide tailored solutions</li>
            <li>To build and maintain business relationships with potential buyers</li>
          </ul>
        </div>
      )
    },
    {
      id: 3,
      title: "Data Sharing and Disclosure",
      icon: Share2,
      content: (
        <div className="space-y-4 text-muted-foreground">
          <ul className="list-disc pl-6 space-y-2">
            <li>We do not sell, rent, or trade your personal information to third parties</li>
            <li>Your data may be shared internally within our organization for business communication purposes only</li>
            <li>We may disclose information if required by law or to protect our legal rights</li>
          </ul>
        </div>
      )
    },
    {
      id: 4,
      title: "Data Security",
      icon: Lock,
      content: (
        <p className="text-muted-foreground">
          We implement reasonable security measures to protect your personal information from unauthorized access, misuse, or disclosure.
        </p>
      )
    },
    {
      id: 5,
      title: "Data Retention",
      icon: FileText,
      content: (
        <p className="text-muted-foreground">
          We retain your information only as long as necessary for business and communication purposes, or as required by applicable laws.
        </p>
      )
    },
    {
      id: 6,
      title: "Your Rights",
      icon: CheckCircle,
      content: (
        <div className="space-y-4 text-muted-foreground">
          <p>You have the right to:</p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Request access to your personal data</li>
            <li>Request correction or deletion of your data</li>
            <li>Opt out of receiving future communications at any time</li>
          </ul>
          <p className="font-medium text-foreground mt-4">
            To exercise these rights, you can contact us at: <br/>
            📧 Email: <a href="mailto:sales@thrayana.com" className="text-primary hover:underline">sales@thrayana.com</a>
          </p>
        </div>
      )
    },
    {
      id: 7,
      title: "Consent",
      icon: Bell,
      content: (
        <p className="text-muted-foreground">
          By submitting your information through our LinkedIn form, you consent to the collection and use of your data as outlined in this Privacy Policy.
        </p>
      )
    },
    {
      id: 8,
      title: "Updates to This Policy",
      icon: Bell,
      content: (
        <p className="text-muted-foreground">
          We may update this Privacy Policy from time to time. Any changes will be reflected with a revised effective date.
        </p>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Privacy Policy | Thrayana Private Limited</title>
        <meta name="description" content="Read our privacy policy to understand how Thrayana collects, uses, and protects your information during international trade inquiries and orders." />
        <link rel="canonical" href="https://www.thrayana.com/privacy-policy" />
      </Helmet>
      <Header />
      
      <main className="pt-20 sm:pt-24 lg:pt-32 pb-16 sm:pb-24">
        {/* Animated Background */}
        <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-40 right-0 h-96 w-96 rounded-full bg-primary/10 blur-[120px] animate-pulse" />
          <div className="absolute bottom-40 left-0 h-96 w-96 rounded-full bg-purple-500/10 blur-[120px] animate-pulse [animation-delay:2s]" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          {/* Header Section */}
          <div className="text-center mb-12 sm:mb-16 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6 ring-8 ring-primary/5">
              <Shield className="w-8 h-8" />
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight mb-4">
              Privacy Policy
            </h1>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-sm text-muted-foreground mt-6 bg-card px-6 py-3 rounded-full border shadow-sm mx-auto w-fit">
              <span className="font-medium text-primary">Thrayana Pvt Ltd</span>
              <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-border" />
              <span>Effective Date: {currentDate}</span>
            </div>
          </div>

          {/* Intro Text */}
          <div className="prose prose-slate max-w-none dark:prose-invert mb-12 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-150">
            <p className="text-lg leading-relaxed text-muted-foreground text-center sm:text-left bg-muted/30 p-6 sm:p-8 rounded-2xl border border-border/50">
              <strong className="text-foreground">Thrayana Pvt Ltd</strong> (“we”, “our”, or “us”) values your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard the information you provide through our LinkedIn lead generation campaigns.
            </p>
          </div>

          {/* Policy Sections */}
          <div className="space-y-6 sm:space-y-8">
            {sections.map((section, index) => (
              <div 
                key={section.id} 
                className="group bg-card hover:bg-muted/30 border border-border/60 rounded-3xl p-6 sm:p-8 shadow-sm transition-all duration-300 hover:shadow-md animate-in fade-in slide-in-from-bottom-4"
                style={{ animationDelay: `${200 + index * 100}ms`, animationFillMode: "both" }}
              >
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                      <section.icon className="w-6 h-6" />
                    </div>
                  </div>
                  <div className="space-y-3 sm:space-y-4">
                    <h2 className="text-xl sm:text-2xl font-bold text-foreground">
                      {section.id}. {section.title}
                    </h2>
                    <div className="text-base sm:text-lg leading-relaxed text-muted-foreground">
                      {section.content}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
