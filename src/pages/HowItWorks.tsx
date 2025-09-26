import { Upload, Edit, Share, Star, Camera, Users, Heart, Sparkles, ArrowRight, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Upload Your Photos",
      description: "Simply drag and drop your college memories. We support all major formats and bulk uploads.",
      icon: Upload,
      gradient: "bg-gradient-sunset",
      features: ["Bulk upload support", "Auto-organize by date", "Smart duplicate detection", "High-quality preservation"]
    },
    {
      number: "02", 
      title: "Add Vintage Magic",
      description: "Our AI automatically applies beautiful vintage filters and effects that make your photos feel timeless.",
      icon: Edit,
      gradient: "bg-gradient-retro",
      features: ["Auto vintage filters", "Polaroid-style frames", "Retro color grading", "Custom stickers & badges"]
    },
    {
      number: "03",
      title: "Create Your Story",
      description: "Add captions, tag friends, and organize your memories into beautiful, themed collections.",
      icon: Heart,
      gradient: "bg-gradient-vintage",
      features: ["Smart tagging", "Story timelines", "Friend mentions", "Event categorization"]
    },
    {
      number: "04",
      title: "Share & Connect",
      description: "Share your favorite moments with friends and discover memories from your college community.",
      icon: Share,
      gradient: "bg-gradient-warm",
      features: ["Social sharing", "Community discovery", "Privacy controls", "Export options"]
    }
  ];

  const features = [
    {
      title: "AI-Powered Organization",
      description: "Smart algorithms automatically sort and categorize your photos by events, people, and dates.",
      icon: Sparkles,
      benefit: "Save hours of manual organization"
    },
    {
      title: "Vintage Aesthetics",
      description: "Professional-grade filters that give your modern photos that nostalgic, timeless feel.",
      icon: Camera,
      benefit: "Professional results, zero effort"
    },
    {
      title: "Community Features",
      description: "Connect with classmates, discover shared memories, and build lasting digital connections.",
      icon: Users,
      benefit: "Never lose touch with college friends"
    },
    {
      title: "Secure Storage",
      description: "Your memories are safely backed up with enterprise-grade security and privacy protection.",
      icon: CheckCircle,
      benefit: "Peace of mind for your precious memories"
    }
  ];

  const benefits = [
    "🎓 Perfect for graduation albums",
    "🎉 Ideal for fest documentation", 
    "👥 Great for friend group memories",
    "📅 Organize by semesters & events",
    "🔒 Private or public sharing options",
    "📱 Works on all devices",
    "⚡ Lightning-fast processing",
    "💝 Export to physical prints"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-4 bg-gradient-retro rounded-full mb-6">
            <Star className="h-8 w-8 text-white" />
          </div>
          <h1 className="retro-heading text-5xl font-bold text-foreground mb-6">
            How It <span className="bg-gradient-retro bg-clip-text text-transparent">Works</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Transform your college photos into beautiful, vintage-inspired memories in just 4 simple steps. 
            No design skills required - our AI does the heavy lifting!
          </p>
        </div>

        {/* Steps Section */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                  <CardHeader>
                    <div className="flex items-center mb-4">
                      <div className={`p-4 rounded-full ${step.gradient} mr-4`}>
                        <step.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <Badge variant="outline" className="mb-2">Step {step.number}</Badge>
                        <CardTitle className="text-2xl">{step.title}</CardTitle>
                      </div>
                    </div>
                    <p className="text-muted-foreground">{step.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-2">
                      {step.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                
                {/* Arrow for desktop */}
                {index < steps.length - 1 && index % 2 === 0 && (
                  <div className="hidden lg:block absolute -right-6 top-1/2 transform -translate-y-1/2">
                    <ArrowRight className="h-6 w-6 text-muted-foreground" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-16">
          <h2 className="retro-heading text-4xl font-bold text-foreground text-center mb-12">
            Powerful Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardHeader className="text-center">
                  <div className="inline-flex items-center justify-center p-4 bg-muted rounded-full mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground text-sm mb-4">
                    {feature.description}
                  </p>
                  <Badge variant="secondary" className="text-xs">
                    {feature.benefit}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="mb-16">
          <h2 className="retro-heading text-4xl font-bold text-foreground text-center mb-12">
            Perfect For Every College Memory
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-muted/50 rounded-lg p-4 text-center hover:bg-muted transition-colors">
                <span className="text-sm font-medium text-foreground">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Demo Section */}
        <div className="bg-gradient-warm rounded-lg p-12 mb-16">
          <div className="text-center">
            <h2 className="retro-heading text-4xl font-bold text-foreground mb-6">
              See It In Action
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Watch how easy it is to transform your college photos into beautiful, 
              vintage-inspired memories that you'll treasure forever.
            </p>
            <div className="bg-muted/30 rounded-lg p-8 mb-8">
              <div className="aspect-video bg-gradient-retro rounded-lg flex items-center justify-center">
                <div className="text-center text-white">
                  <Camera className="h-16 w-16 mx-auto mb-4 opacity-80" />
                  <p className="text-xl font-semibold">Interactive Demo Coming Soon</p>
                  <p className="text-sm opacity-80">Experience the magic firsthand</p>
                </div>
              </div>
            </div>
            <Button asChild className="bg-gradient-sunset hover:bg-gradient-sunset/90">
              <Link to="/gallery">View Sample Gallery</Link>
            </Button>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="retro-heading text-4xl font-bold text-foreground mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of students who are already preserving their college memories 
            in beautiful, vintage-inspired albums.
          </p>
          <div className="space-x-4">
            <Button asChild className="bg-gradient-sunset hover:bg-gradient-sunset/90 text-lg px-8 py-3">
              <Link to="/signup">Start Creating Free</Link>
            </Button>
            <Button variant="outline" asChild className="text-lg px-8 py-3">
              <Link to="/upload">Upload Your First Photo</Link>
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            Free forever • No credit card required • Export anytime
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default HowItWorks;