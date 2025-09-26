import { Camera, Heart, Users, Star, Award, Sparkles, Calendar, MapPin, Clock, Globe } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const About = () => {
  const team = [
    {
      name: "Sarah Johnson",
      role: "Founder & CEO",
      description: "Computer Science graduate who wanted to preserve college memories forever",
      avatar: "🎓"
    },
    {
      name: "Mike Chen",
      role: "Head of Design",
      description: "Art major with a passion for vintage aesthetics and user experience",
      avatar: "🎨"
    },
    {
      name: "Emma Davis",
      role: "Community Manager",
      description: "Psychology student who loves bringing people together",
      avatar: "💫"
    },
    {
      name: "Alex Rodriguez",
      role: "Tech Lead",
      description: "Engineering student specializing in photo processing and AI",
      avatar: "⚡"
    }
  ];

  const stats = [
    {
      number: "50,000+",
      label: "College Memories Preserved",
      icon: Camera,
      color: "text-sunset-orange"
    },
    {
      number: "200+",
      label: "College Events Covered",
      icon: Calendar,
      color: "text-vintage-teal"
    },
    {
      number: "15,000+",
      label: "Happy Students",
      icon: Users,
      color: "text-retro-purple"
    },
    {
      number: "98%",
      label: "Satisfaction Rate",
      icon: Star,
      color: "text-sunset-orange"
    }
  ];

  const values = [
    {
      title: "Preserve Memories",
      description: "Every college moment deserves to be remembered and cherished forever",
      icon: Heart,
      gradient: "bg-gradient-sunset"
    },
    {
      title: "Build Community",
      description: "Connecting students through shared experiences and meaningful moments",
      icon: Users,
      gradient: "bg-gradient-vintage"
    },
    {
      title: "Celebrate Growth",
      description: "Honoring the journey from freshman year to graduation and beyond",
      icon: Award,
      gradient: "bg-gradient-retro"
    },
    {
      title: "Inspire Connection",
      description: "Creating lasting bonds that extend far beyond college years",
      icon: Sparkles,
      gradient: "bg-gradient-warm"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-4 bg-gradient-sunset rounded-full mb-6">
            <Camera className="h-8 w-8 text-white" />
          </div>
          <h1 className="retro-heading text-5xl font-bold text-foreground mb-6">
            About <span className="bg-gradient-sunset bg-clip-text text-transparent">Memories</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Born from a simple idea: college years are too precious to forget. We're building a platform 
            where every laugh, every victory, every friendship is preserved in beautiful, vintage-inspired albums.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardContent className="p-8">
                <div className={`inline-flex items-center justify-center p-3 rounded-full bg-muted mb-4`}>
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-2">{stat.number}</h3>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Our Story */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="retro-heading text-4xl font-bold text-foreground mb-6">Our Story</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                It started during our final semester. As we looked through our phones, laptops, and social media, 
                we realized our college memories were scattered everywhere - some lost, others forgotten.
              </p>
              <p>
                We wanted something different. Something that felt like flipping through a physical photo album, 
                but with the convenience of digital. Something that captured not just the images, but the emotions, 
                the stories, the connections that made each moment special.
              </p>
              <p>
                So we built Memories - a platform where college experiences aren't just stored, they're celebrated. 
                Where every fest, every friendship, every milestone gets the vintage-inspired treatment it deserves.
              </p>
            </div>
          </div>
          <div className="bg-gradient-warm rounded-lg p-8 text-center">
            <div className="text-6xl mb-4">📸</div>
            <h3 className="retro-heading text-2xl font-bold text-foreground mb-4">
              Founded in 2024
            </h3>
            <p className="text-muted-foreground">
              By students, for students. Built with love in a college dorm room, 
              now serving thousands of students worldwide.
            </p>
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-16">
          <h2 className="retro-heading text-4xl font-bold text-foreground text-center mb-12">
            What We Believe In
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardHeader className="text-center">
                  <div className={`inline-flex items-center justify-center p-4 rounded-full ${value.gradient} mb-4`}>
                    <value.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center text-sm">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="retro-heading text-4xl font-bold text-foreground text-center mb-12">
            Meet Our Team
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{member.avatar}</div>
                  <h3 className="font-bold text-foreground mb-2">{member.name}</h3>
                  <Badge variant="secondary" className="mb-4">{member.role}</Badge>
                  <p className="text-muted-foreground text-sm">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-warm rounded-lg p-12">
          <h2 className="retro-heading text-3xl font-bold text-foreground mb-6">
            Ready to Preserve Your Memories?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of students who are already creating beautiful, lasting albums 
            of their college experiences.
          </p>
          <div className="space-x-4">
            <Button asChild className="bg-gradient-sunset hover:bg-gradient-sunset/90">
              <Link to="/signup">Get Started Free</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/gallery">View Gallery</Link>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;