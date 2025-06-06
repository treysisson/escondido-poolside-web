
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, MapPin, Waves, Droplets, Wrench, Zap, Star, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", phone: "", service: "", message: "" });
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    {
      icon: Waves,
      title: "Pool Cleaning",
      description: "Weekly, bi-weekly, and monthly cleaning services to keep your pool crystal clear",
      features: ["Skimming & Vacuuming", "Chemical Balancing", "Filter Cleaning", "Tile Brushing"]
    },
    {
      icon: Wrench,
      title: "Pool Repair",
      description: "Expert repair services for pumps, filters, heaters, and all pool equipment",
      features: ["Pump Repair", "Filter Replacement", "Leak Detection", "Equipment Installation"]
    },
    {
      icon: Droplets,
      title: "Chemical Services",
      description: "Professional water testing and chemical balancing for safe, healthy swimming",
      features: ["Water Testing", "pH Balancing", "Chlorine Treatment", "Algae Prevention"]
    },
    {
      icon: Zap,
      title: "Equipment Maintenance",
      description: "Preventive maintenance to extend the life of your pool equipment",
      features: ["Motor Servicing", "Heater Maintenance", "Automation Systems", "Energy Efficiency"]
    }
  ];

  const testimonials = [
    {
      name: "Sarah Martinez",
      location: "Escondido, CA",
      rating: 5,
      text: "J Smith Pools has been taking care of our pool for over 2 years. Always reliable, professional, and our pool has never looked better!"
    },
    {
      name: "Mike Rodriguez",
      location: "San Marcos, CA",
      rating: 5,
      text: "Fast response time when our pump broke down. They had it fixed the same day. Highly recommend their repair services!"
    },
    {
      name: "Lisa Chen",
      location: "Poway, CA",
      rating: 5,
      text: "Excellent communication and fair pricing. They explain everything clearly and never try to upsell unnecessary services."
    }
  ];

  const faqs = [
    {
      question: "How often should I have my pool cleaned?",
      answer: "For most residential pools, we recommend weekly cleaning during swimming season and bi-weekly during off-season. Factors like usage, weather, and surrounding vegetation may require more frequent service."
    },
    {
      question: "What's included in your regular cleaning service?",
      answer: "Our standard service includes skimming the surface, vacuuming the pool floor, brushing walls and tiles, emptying skimmer baskets, testing and balancing water chemistry, and checking equipment operation."
    },
    {
      question: "How quickly can you respond to emergency repairs?",
      answer: "We offer same-day emergency service for urgent issues like equipment failures or green water situations. For non-emergency repairs, we typically schedule within 2-3 business days."
    },
    {
      question: "Do you service pools throughout San Diego County?",
      answer: "Yes! We provide services throughout North County San Diego, including Escondido, San Marcos, Poway, Rancho Bernardo, and surrounding areas."
    },
    {
      question: "What pool equipment brands do you work with?",
      answer: "We're experienced with all major brands including Pentair, Hayward, Jandy, Polaris, and Dolphin. We stock parts for most common equipment and can source specialty items quickly."
    },
    {
      question: "How do I know if my pool water chemistry is balanced?",
      answer: "Proper pool chemistry includes pH (7.2-7.6), total alkalinity (80-120 ppm), and chlorine (1-3 ppm). We test these levels during each service visit and provide detailed reports on any adjustments made."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-400 text-white overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
          }}
        />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <div className="mb-6 animate-fade-in">
            <Waves className="w-16 h-16 mx-auto mb-4 text-cyan-200" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            J Smith Pools
          </h1>
          <p className="text-xl md:text-2xl mb-4 opacity-90 animate-fade-in">
            Professional Pool Service & Repair
          </p>
          <p className="text-lg mb-8 opacity-80 animate-fade-in">
            Serving Escondido & San Diego County since 2015
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 transition-colors">
              <Phone className="w-5 h-5 mr-2" />
              Call Now: (760) 555-POOL
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-blue-600 transition-colors"
              onClick={scrollToContact}
            >
              Get Free Quote
            </Button>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Complete pool care solutions to keep your pool sparkling clean and equipment running smoothly
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 hover-scale">
                <CardHeader className="text-center">
                  <service.icon className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                  <CardTitle className="text-xl text-gray-800">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-800">Why Choose J Smith Pools?</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Badge className="bg-blue-100 text-blue-800 mr-3 mt-1">8+ Years</Badge>
                  <p className="text-gray-600">Serving the San Diego community with reliable pool services</p>
                </div>
                <div className="flex items-start">
                  <Badge className="bg-green-100 text-green-800 mr-3 mt-1">Licensed</Badge>
                  <p className="text-gray-600">Fully licensed and insured for your peace of mind</p>
                </div>
                <div className="flex items-start">
                  <Badge className="bg-purple-100 text-purple-800 mr-3 mt-1">Local</Badge>
                  <p className="text-gray-600">Based in Escondido, we know North County pools</p>
                </div>
              </div>
              <p className="text-gray-600 mt-6 leading-relaxed">
                From routine maintenance to complex repairs, we treat every pool like our own. 
                Our experienced team uses only quality products and proven techniques to ensure 
                your pool stays crystal clear and equipment runs efficiently.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Beautiful pool maintenance"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">What Our Customers Say</h2>
            <p className="text-xl text-gray-600">Don't just take our word for it</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                  <div>
                    <p className="font-semibold text-gray-800">{testimonial.name}</p>
                    <p className="text-gray-500 text-sm">{testimonial.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Get answers to common pool service questions</p>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-gray-800">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-6">Get In Touch</h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Ready to enjoy crystal clear water? Contact us today for a free consultation and quote. 
                We're here to answer any questions about your pool care needs.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="w-6 h-6 mr-4 text-blue-400" />
                  <div>
                    <p className="font-semibold">(760) 555-POOL</p>
                    <p className="text-gray-400">Available 7 days a week</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="w-6 h-6 mr-4 text-blue-400" />
                  <div>
                    <p className="font-semibold">info@jsmithpools.com</p>
                    <p className="text-gray-400">We respond within 4 hours</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 mr-4 text-blue-400" />
                  <div>
                    <p className="font-semibold">Escondido, CA</p>
                    <p className="text-gray-400">Serving all of San Diego County</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="bg-white text-gray-800">
              <CardHeader>
                <CardTitle>Request a Quote</CardTitle>
                <CardDescription>Fill out the form below and we'll get back to you soon</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="tel"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                  <div>
                    <Input
                      placeholder="Service Needed"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Tell us about your pool and what you need..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-4">
            <Waves className="w-8 h-8 mr-2 text-blue-400" />
            <h3 className="text-2xl font-bold">J Smith Pools</h3>
          </div>
          <p className="text-gray-400 mb-4">
            Professional Pool Service & Repair | Escondido, CA | Serving San Diego County
          </p>
          <p className="text-gray-500 text-sm">
            © 2024 J Smith Pools. All rights reserved. | Licensed & Insured
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
