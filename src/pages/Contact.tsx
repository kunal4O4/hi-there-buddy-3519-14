import { Mail, Phone, MapPin, MessageCircle, Clock, Send, User, HelpCircle, Bug, Lightbulb } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    category: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const contactMethods = [
    {
      title: "Email Support",
      description: "Get help via email within 24 hours",
      icon: Mail,
      contact: "hello@memories.college",
      action: "Send Email",
      gradient: "bg-gradient-sunset"
    },
    {
      title: "Live Chat",
      description: "Chat with our support team in real-time",
      icon: MessageCircle,
      contact: "Available 9 AM - 6 PM EST",
      action: "Start Chat",
      gradient: "bg-gradient-vintage"
    },
    {
      title: "Phone Support",
      description: "Speak directly with our team",
      icon: Phone,
      contact: "+1 (555) 123-4567",
      action: "Call Now",
      gradient: "bg-gradient-retro"
    }
  ];

  const supportCategories = [
    {
      title: "Technical Support",
      description: "Upload issues, bugs, and technical problems",
      icon: Bug,
      color: "text-red-500"
    },
    {
      title: "Account Help",
      description: "Profile, settings, and account management",
      icon: User,
      color: "text-blue-500"
    },
    {
      title: "Feature Requests",
      description: "Suggestions and new feature ideas",
      icon: Lightbulb,
      color: "text-yellow-500"
    },
    {
      title: "General Questions",
      description: "How-to guides and general inquiries",
      icon: HelpCircle,
      color: "text-green-500"
    }
  ];

  const faqItems = [
    {
      question: "How do I upload multiple photos at once?",
      answer: "You can drag and drop multiple files or use Ctrl/Cmd+click to select multiple photos in the file browser."
    },
    {
      question: "Can I download my photos in high resolution?",
      answer: "Yes! Premium users can download original quality photos, while free users can download web-optimized versions."
    },
    {
      question: "How do I share my memories with friends?",
      answer: "Use the share button on any memory to generate a link, or invite friends directly through email."
    },
    {
      question: "Is my data secure and private?",
      answer: "Absolutely! We use enterprise-grade encryption and never share your personal data with third parties."
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours."
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        category: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-4 bg-gradient-sunset rounded-full mb-6">
            <MessageCircle className="h-8 w-8 text-white" />
          </div>
          <h1 className="retro-heading text-5xl font-bold text-foreground mb-6">
            Get In <span className="bg-gradient-sunset bg-clip-text text-transparent">Touch</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Have questions, feedback, or need help? We're here to support you every step of the way. 
            Choose the best way to reach us below.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {contactMethods.map((method, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardHeader>
                <div className={`inline-flex items-center justify-center p-4 rounded-full ${method.gradient} mb-4`}>
                  <method.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl">{method.title}</CardTitle>
                <p className="text-muted-foreground text-sm">{method.description}</p>
              </CardHeader>
              <CardContent>
                <p className="font-semibold text-foreground mb-4">{method.contact}</p>
                <Button className="w-full" variant="outline">
                  {method.action}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <div>
            <h2 className="retro-heading text-3xl font-bold text-foreground mb-8">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Your Name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="john@college.edu"
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="category">Category</Label>
                <Select value={formData.category} onValueChange={(value) => handleInputChange('category', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="technical">Technical Support</SelectItem>
                    <SelectItem value="account">Account Help</SelectItem>
                    <SelectItem value="feature">Feature Request</SelectItem>
                    <SelectItem value="general">General Question</SelectItem>
                    <SelectItem value="billing">Billing & Pricing</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => handleInputChange('subject', e.target.value)}
                  placeholder="Brief description of your inquiry"
                  required
                />
              </div>

              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  placeholder="Please provide details about your question or issue..."
                  rows={6}
                  required
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-gradient-sunset hover:bg-gradient-sunset/90" 
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Clock className="h-4 w-4 mr-2 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Support Categories & FAQ */}
          <div className="space-y-8">
            <div>
              <h3 className="retro-heading text-2xl font-bold text-foreground mb-6">Support Categories</h3>
              <div className="space-y-4">
                {supportCategories.map((category, index) => (
                  <Card key={index} className="hover:shadow-md transition-all duration-300">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-4">
                        <div className="p-2 bg-muted rounded-full">
                          <category.icon className={`h-5 w-5 ${category.color}`} />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground">{category.title}</h4>
                          <p className="text-sm text-muted-foreground">{category.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h3 className="retro-heading text-2xl font-bold text-foreground mb-6">Quick Answers</h3>
              <div className="space-y-4">
                {faqItems.map((faq, index) => (
                  <Card key={index}>
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-foreground mb-2">{faq.question}</h4>
                      <p className="text-sm text-muted-foreground">{faq.answer}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Business Hours */}
        <div className="bg-muted/50 rounded-lg p-8 text-center">
          <div className="flex items-center justify-center mb-4">
            <Clock className="h-6 w-6 text-primary mr-2" />
            <h3 className="text-xl font-bold text-foreground">Support Hours</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div>
              <h4 className="font-semibold text-foreground mb-2">Live Support</h4>
              <p className="text-muted-foreground text-sm">Monday - Friday: 9:00 AM - 6:00 PM EST</p>
              <p className="text-muted-foreground text-sm">Weekend: 10:00 AM - 4:00 PM EST</p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">Email Response</h4>
              <p className="text-muted-foreground text-sm">Typically within 24 hours</p>
              <p className="text-muted-foreground text-sm">24/7 for urgent issues</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;