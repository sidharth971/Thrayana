import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Users, Scale, Target, Award, Globe, Heart, Shield, TrendingUp } from "lucide-react";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const About = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, []);

  const pillars = [
    {
      id: 1,
      title: "Diversity",
      icon: Users,
      color: "from-blue-500 to-cyan-500",
      description: "Embracing the rich tapestry of India's cultural heritage and diverse product portfolio",
      details: [
        "Multi-cultural product range spanning spices, textiles, and handicrafts",
        "Supporting artisans from different regions and communities",
        "Celebrating India's diverse cultural traditions",
        "Inclusive business practices and fair trade partnerships",
        "Promoting cultural exchange through authentic products"
      ],
      stats: {
        value: "50+",
        label: "Product Categories"
      }
    },
    {
      id: 2,
      title: "Balance",
      icon: Scale,
      color: "from-green-500 to-emerald-500",
      description: "Maintaining equilibrium between tradition and innovation, quality and accessibility",
      details: [
        "Balancing traditional craftsmanship with modern quality standards",
        "Sustainable practices that protect environment and livelihoods",
        "Fair pricing that benefits both producers and consumers",
        "Quality assurance without compromising on authenticity",
        "Growth that supports community development"
      ],
      stats: {
        value: "100%",
        label: "Sustainable Practices"
      }
    },
    {
      id: 3,
      title: "Strategy",
      icon: Target,
      color: "from-purple-500 to-pink-500",
      description: "Strategic approach to global market expansion and long-term partnerships",
      details: [
        "Data-driven market analysis and strategic positioning",
        "Long-term partnerships with reliable suppliers and buyers",
        "Innovative logistics and supply chain optimization",
        "Technology integration for better traceability",
        "Continuous improvement and adaptation to market trends"
      ],
      stats: {
        value: "25+",
        label: "Global Markets"
      }
    }
  ];

  const achievements = [
    {
      icon: Globe,
      title: "Global Reach",
      description: "Exporting to 25+ countries worldwide"
    },
    {
      icon: Heart,
      title: "Community Support",
      description: "Supporting 500+ local artisans and farmers"
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "100% quality tested products before export"
    }
  ];

  const values = [
    {
      title: "Authenticity",
      description: "Preserving traditional methods and genuine products"
    },
    {
      title: "Sustainability",
      description: "Eco-friendly practices and responsible sourcing"
    },
    {
      title: "Excellence",
      description: "Uncompromising quality in every product"
    },
    {
      title: "Innovation",
      description: "Modern solutions for traditional products"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>About Thrayana | Global Exporter of Authentic Indian Products</title>
        <meta name="description" content="Learn about Thrayana's commitment to quality, sustainability, and authenticity in exporting India's finest spices, natural foods, and organic products globally." />
        <link rel="canonical" href="https://www.thrayana.com/about" />
      </Helmet>
      <Header />
      <main className="pt-16 sm:pt-20 lg:pt-24">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/10 to-background py-12 sm:py-16 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center animate-in fade-in duration-1000">
              <Badge variant="secondary" className="mb-4 text-sm sm:text-base">
                Our Story
              </Badge>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 gradient-text">
              THRAYANA PRIVATE LIMITED
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground mb-6 max-w-3xl mx-auto">
                Three Pillars, One Vision: <span className="text-black font-semibold">Diversity • Balance • Strategy</span>
              </p>
              <p className="text-base sm:text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Founded on the principle that success comes from a harmonious blend of diverse perspectives, 
                balanced approaches, and strategic thinking. We bridge the gap between India's rich cultural 
                heritage and global markets, ensuring every product tells a story of tradition, quality, and innovation.
              </p>
            </div>
          </div>
        </section>

        {/* Three Pillars Section */}
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Our Three Pillars
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
                The foundation of our success lies in these three core principles that guide every decision we make
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12">
              {pillars.map((pillar, index) => (
                <Card 
                  key={pillar.id}
                  className="group hover:shadow-2xl transition-all duration-500 animate-in slide-in-from-bottom duration-1000"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <CardContent className="p-6 sm:p-8">
                    {/* Icon and Title */}
                    <div className="text-center mb-6">
                      <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${pillar.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <pillar.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
                        {pillar.title}
                      </h3>
                      <p className="text-xl sm:text-xl text-muted-foreground mb-4">
                        {pillar.description}
                      </p>
                    </div>

                    {/* Stats */}
                    <div className="text-center mb-6 p-4 bg-card/50 rounded-lg">
                      <div className="text-2xl sm:text-4xl font-bold text-primary mb-1">
                        {pillar.stats.value}
                      </div>
                      <div className="text-xl sm:text-lg text-muted-foreground">
                        {pillar.stats.label}
                      </div>
                    </div>

                    {/* Details */}
                    <div className="space-y-3">
                      {pillar.details.map((detail, idx) => (
                        <div key={idx} className="flex items-start space-x-3">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <p className="text-xl sm:text-xl text-muted-foreground">{detail}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-12 sm:py-16 lg:py-20 bg-card/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
              {/* Mission */}
              <div className="animate-in slide-in-from-left duration-1000">
                <h2 className="text-3xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  Our Mission
                </h2>
                <p className="text-sm sm:text-xl lg:text-xl text-muted-foreground mb-6 leading-relaxed">
                  To become the most trusted bridge between India's authentic cultural heritage and global markets, 
                  ensuring that every product we export carries the essence of Indian tradition while meeting 
                  international quality standards.
                </p>
                <p className="text-sm sm:text-base lg:text-lg text-muted-foreground mb-6 leading-relaxed">
                  We are committed to supporting local artisans, preserving traditional craftsmanship, and 
                  promoting sustainable practices that benefit both our communities and the environment.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="text-lg sm:text-lg">Cultural Preservation</Badge>
                  <Badge variant="secondary" className="text-lg sm:text-lg">Quality Excellence</Badge>
                  <Badge variant="secondary" className="text-lg sm:text-lg">Sustainable Growth</Badge>
                </div>
              </div>

              {/* Vision */}
              <div className="animate-in slide-in-from-right duration-1000">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  Our Vision
                </h2>
                <p className="text-xl sm:text-xl lg:text-lg text-muted-foreground mb-6 leading-relaxed">
                  To be recognized globally as the premier exporter of authentic Indian products, known for 
                  our unwavering commitment to quality, sustainability, and cultural authenticity.
                </p>
                <p className="text-xl sm:text-xl lg:text-lg text-muted-foreground mb-6 leading-relaxed">
                  We envision a world where traditional craftsmanship thrives alongside modern innovation, 
                  creating opportunities for artisans while delivering exceptional products to global consumers.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="text-lg sm:text-lg">Global Leadership</Badge>
                  <Badge variant="secondary" className="text-lg sm:text-lg">Innovation</Badge>
                  <Badge variant="secondary" className="text-lg sm:text-lg">Community Impact</Badge>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Our Achievements
              </h2>
              <p className="text-lg sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
                Milestones that reflect our commitment to excellence and growth
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {achievements.map((achievement, index) => (
                <Card 
                  key={index}
                  className="text-center hover:shadow-lg transition-all duration-500 animate-in zoom-in duration-700"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                      <achievement.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {achievement.title}
                    </h3>
                    <p className="text-lg text-muted-foreground">
                      {achievement.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Our Core Values
              </h2>
              <p className="text-lg sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
                The principles that guide our every action and decision
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {values.map((value, index) => (
                <div 
                  key={index}
                  className="text-center animate-in slide-in-from-bottom duration-700"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="bg-card rounded-xl p-6 sm:p-8 hover:shadow-lg transition-all duration-300">
                    <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-3">
                      {value.title}
                    </h3>
                    <p className="text-lg sm:text-lg text-muted-foreground">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-12 sm:py-16 lg:py-20 bg-card/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4 sm:mb-6">
              Ready to Partner With Us?
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto">
              Experience the perfect blend of tradition and innovation with THRAYANA PRIVATE LIMITED. 
              Let's build lasting partnerships based on our three pillars of success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="btn-primary text-xl px-8 py-5"
                onClick={() => { window.location.href = "/products"; }}
              >
                <TrendingUp className="w-7 h-7 mr-3 text-3xl" />
                <span className="text-xl font-semibold">Explore Our Products</span>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-xl px-8 py-5 font-semibold"
                onClick={() => { window.location.href = "/contact"; }}
              >
                Contact Us
              </Button>
          </div>
        </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About; 