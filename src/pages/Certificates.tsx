import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, Eye, Calendar, Building2, Award, Shield, Globe } from "lucide-react";

const Certificates = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Certificate data structure for easy management
  const certificates = [
    {
      id: 1,
      title: "Certificate of Incorporation",
      category: "legal",
      type: "Company Registration",
      description: "Official certificate of incorporation for Thrayana Private Limited, establishing our legal entity status under the Companies Act, 2013.",
      longDescription: "This certificate confirms that Thrayana Private Limited has been duly incorporated under the Companies Act, 2013. It establishes our legal identity and authorizes us to conduct business operations in India and internationally. The certificate includes our Corporate Identity Number (CIN) and confirms our registration as a Private Limited Company.",
      filePath: "/assets/certificates/Certificate_of_Incorporation_THRAYANA_PRIVATE_LIMITED.pdf",
      issueDate: "14-Aug-2025",
      validUntil: "Permanent (subject to compliance)",
      issuingAuthority: "Ministry of Corporate Affairs, Government of India",
      status: "Active",
      icon: Building2,
      tags: ["Legal", "Company Registration", "Government Approved", "CIN Registered"]
    },
    {
      id: 2,
      title: "Udyam Registration Certificate",
      category: "legal",
      type: "MSME / Udyam Registration",
      description: "Government-issued Udyam (MSME) registration certificate for Thrayana Private Limited confirming micro/small/medium enterprise status.",
      longDescription: "This document certifies Udyam (MSME) registration for Thrayana Private Limited under the Ministry of Micro, Small and Medium Enterprises. It supports eligibility for MSME-related benefits and compliance in domestic and international trade.",
      filePath: "/assets/certificates/UDYAM-KR-03-0581017.pdf",
      issueDate: "—",
      validUntil: "As per MSME regulations",
      issuingAuthority: "Ministry of Micro, Small and Medium Enterprises, Government of India",
      status: "Active",
      icon: Award,
      tags: ["MSME", "Udyam", "Government", "Compliance"]
    },
    {
      id: 3,
      title: "IEC Certificate",
      category: "legal",
      type: "Tax / Registration Certificate",
      description: "Official IEC (Import Export Code) certificate for Thrayana Private Limited, confirming registration for international trade operations.",
      longDescription: "The Import Export Code (IEC) is a unique business identification number required for import or export operations in India. This certificate confirms that Thrayana Private Limited is authorized to engage in international trade activities and complies with foreign trade regulations.",
      filePath: "/assets/certificates/AAMCT1691H.pdf",
      issueDate: "—",
      validUntil: "As per regulations",
      issuingAuthority: "Government Authority",
      status: "Active",
      icon: FileText,
      tags: ["Legal", "Registration", "Compliance", "Government"]
    },

  ];

  const categories = [
    { id: "all", name: "All Certificates", count: certificates.length },
    { id: "legal", name: "Legal Documents", count: certificates.filter(c => c.category === "legal").length }
  ];

  const filteredCertificates = selectedCategory === "all" 
    ? certificates 
    : certificates.filter(cert => cert.category === selectedCategory);

  const handlePreview = (filePath: string) => {
    window.open(filePath, '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16 sm:pt-20 lg:pt-24">
        {/* Hero Section */}
        <section className="py-8 sm:py-12 lg:py-16 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-blue-600/10 relative overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          </div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="animate-fade-in-up">
                <h1 className="text-4xl sm:text-4xl lg:text-4xl font-bold gradient-text mb-4 sm:mb-6 text-shadow-lg">
                  Our Certifications & Documents
                </h1>
                <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                  We maintain the highest standards of quality, safety, and compliance. 
                  Explore our comprehensive collection of certifications and legal documents.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Certificates Section */}
        <section className="py-8 sm:py-12 lg:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              {/* Category Tabs */}
              <div className="mb-8 sm:mb-12">
                <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
                  <TabsList className="grid w-full grid-cols-2 h-auto bg-card/50 backdrop-blur-sm border border-blue-200/20 shadow-lg">
                    {categories.map((category, index) => (
                      <TabsTrigger 
                        key={category.id} 
                        value={category.id}
                        className="flex flex-col items-center gap-1 py-3 sm:py-3 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-purple-600 data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:scale-105 transition-all duration-300 hover:scale-105 category-filter"
                        style={{animationDelay: `${index * 0.1}s`}}
                      >
                        <span className="text-lg sm:text-xl font-medium">{category.name}</span>
                        <Badge variant="secondary" className="text-base badge-animate">
                          {category.count}
                        </Badge>
                      </TabsTrigger>
                    ))}
                  </TabsList>
                </Tabs>
              </div>

              {/* Certificates Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                {filteredCertificates.map((certificate, index) => {
                  const IconComponent = certificate.icon;
                  return (
                    <Card 
                      key={certificate.id} 
                      className="group hover:shadow-xl transition-all duration-500 border-2 hover:border-blue-300/50 bg-gradient-to-br from-white to-blue-50/30 backdrop-blur-sm product-card animate-fade-in-up"
                      style={{animationDelay: `${index * 0.2}s`}}
                    >
                      <CardHeader className="pb-4">
                        <div className="flex items-start justify-between">
                          <div className="flex items-center gap-3">
                            <div className="p-3 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all duration-300 transform group-hover:scale-110">
                              <IconComponent className="w-6 h-6 text-blue-600 group-hover:text-purple-600 transition-colors duration-300" />
                            </div>
                            <div>
                              <CardTitle className="text-xl sm:text-2xl font-semibold text-foreground mb-1">
                                {certificate.title}
                              </CardTitle>
                              <Badge variant="outline" className="text-sm">
                                {certificate.type}
                              </Badge>
                            </div>
                          </div>
                          <Badge 
                            variant={certificate.status === "Active" ? "default" : "secondary"}
                            className={`text-sm ${certificate.status === "Active" ? "bg-gradient-to-r from-green-500 to-emerald-600 text-white" : ""}`}
                          >
                            {certificate.status}
                          </Badge>
                        </div>
                      </CardHeader>
                      
                      <CardContent className="space-y-4">
                        <p className="text-base text-muted-foreground leading-relaxed">
                          {certificate.description}
                        </p>
                        
                        {/* Certificate Details */}
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="text-muted-foreground">Issue Date:</span>
                            <div className="font-medium">{certificate.issueDate}</div>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Validity:</span>
                            <div className="font-medium">{certificate.validUntil}</div>
                          </div>
                          <div className="col-span-2">
                            <span className="text-muted-foreground">Issuing Authority:</span>
                            <div className="font-medium text-sm">{certificate.issuingAuthority}</div>
                          </div>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                          {certificate.tags.map((tag, index) => (
                            <Badge key={index} variant="secondary" className="text-sm badge-animate bg-blue-100 text-blue-700 hover:bg-blue-200 transition-all duration-200">
                              {tag}
                            </Badge>
                          ))}
                        </div>

                        {/* Action Button */}
                        <div className="pt-2">
                          <Button 
                            size="lg" 
                            className="w-full text-base btn-primary transform hover:scale-105 transition-all duration-300"
                            onClick={() => handlePreview(certificate.filePath)}
                          >
                            <Eye className="w-4 h-4 mr-2" />
                            View Document
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              {/* Empty State */}
              {filteredCertificates.length === 0 && (
                <div className="text-center py-12 animate-fade-in-up">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                    <FileText className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">No certificates found</h3>
                  <p className="text-base text-muted-foreground">No certificates match the selected category.</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Additional Information */}
        <section className="py-8 sm:py-12 lg:py-16 bg-gradient-to-r from-blue-50/50 via-purple-50/50 to-blue-50/50 relative overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-blue-300/10 to-purple-300/10 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-32 h-32 bg-gradient-to-tl from-purple-300/10 to-blue-300/10 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
          </div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="animate-fade-in-up">
                <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-6 sm:mb-8 text-center text-shadow">
                  Why Our Certifications Matter
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                {[
                  {
                    title: "Quality Assurance",
                    description: "Our certifications ensure that every product meets international quality standards, providing you with confidence in our commitment to excellence.",
                    icon: "🏆"
                  },
                  {
                    title: "Regulatory Compliance",
                    description: "We maintain full compliance with all relevant regulations, ensuring smooth import/export processes and legal operations.",
                    icon: "📋"
                  },
                  {
                    title: "Food Safety",
                    description: "Our food safety certifications guarantee that all products are processed and handled according to the highest safety standards.",
                    icon: "🛡️"
                  },
                  {
                    title: "International Standards",
                    description: "We adhere to international standards, making our products suitable for global markets and diverse customer requirements.",
                    icon: "🌍"
                  }
                ].map((item, index) => (
                  <Card 
                    key={index} 
                    className="card-hover bg-gradient-to-br from-white to-blue-50/30 backdrop-blur-sm border border-blue-200/20 animate-fade-in-up"
                    style={{animationDelay: `${index * 0.1}s`}}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="text-3xl">{item.icon}</div>
                        <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                      </div>
                      <p className="text-base text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Certificates; 