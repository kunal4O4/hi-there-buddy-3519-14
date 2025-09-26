import { HelpCircle, Search, Book, Video, MessageCircle, Lightbulb, Download, Upload, Settings, User, Camera, Share2, Heart, Star, ChevronRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useState } from "react";
import { Link } from "react-router-dom";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Help = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const helpCategories = [
    {
      title: "Getting Started",
      description: "Learn the basics of using Memories",
      icon: Book,
      articles: 12,
      color: "text-sunset-orange",
      gradient: "bg-gradient-sunset"
    },
    {
      title: "Uploading Photos",
      description: "How to upload and manage your memories",
      icon: Upload,
      articles: 8,
      color: "text-vintage-teal",
      gradient: "bg-gradient-vintage"
    },
    {
      title: "Account Settings",
      description: "Manage your profile and preferences",
      icon: Settings,
      articles: 15,
      color: "text-retro-purple",
      gradient: "bg-gradient-retro"
    },
    {
      title: "Sharing & Privacy",
      description: "Control who sees your memories",
      icon: Share2,
      articles: 6,
      color: "text-sunset-orange",
      gradient: "bg-gradient-warm"
    }
  ];

  const popularArticles = [
    {
      title: "How to upload multiple photos at once",
      category: "Uploading",
      views: 2341,
      rating: 4.8,
      difficulty: "Beginner"
    },
    {
      title: "Creating your first vintage photo collection",
      category: "Getting Started",
      views: 1876,
      rating: 4.9,
      difficulty: "Beginner"
    },
    {
      title: "Advanced privacy settings explained",
      category: "Privacy",
      views: 1543,
      rating: 4.7,
      difficulty: "Intermediate"
    },
    {
      title: "Sharing memories with your college friends",
      category: "Sharing",
      views: 1298,
      rating: 4.6,
      difficulty: "Beginner"
    },
    {
      title: "Customizing your profile and bio",
      category: "Account",
      views: 987,
      rating: 4.5,
      difficulty: "Beginner"
    }
  ];

  const faqData = [
    {
      category: "Account",
      questions: [
        {
          question: "How do I create an account?",
          answer: "Click the 'Sign Up' button in the top right corner, enter your email address, and follow the verification steps. You can also sign up using your Google account for faster registration."
        },
        {
          question: "Can I change my username?",
          answer: "Yes, you can change your username in Account Settings. Go to Profile > Edit Profile > Username. Note that usernames must be unique and can only be changed once every 30 days."
        },
        {
          question: "How do I delete my account?",
          answer: "To delete your account, go to Settings > Account > Delete Account. This action is permanent and will remove all your photos and data. We recommend downloading your memories first."
        }
      ]
    },
    {
      category: "Photos & Uploads",
      questions: [
        {
          question: "What file formats are supported?",
          answer: "We support JPG, PNG, GIF, HEIC, and WebP formats. Files can be up to 50MB each for premium users and 10MB for free users."
        },
        {
          question: "How do I organize my photos?",
          answer: "Use collections to organize your photos by events, dates, or themes. You can create unlimited collections and add photos to multiple collections."
        },
        {
          question: "Can I edit photos after uploading?",
          answer: "Yes! Use our built-in editor to apply vintage filters, adjust brightness, add stickers, and crop your photos. Changes are non-destructive - your original photo is always preserved."
        }
      ]
    },
    {
      category: "Privacy & Sharing",
      questions: [
        {
          question: "Who can see my photos?",
          answer: "By default, your photos are private. You can choose to make them public, share with specific friends, or keep them completely private. Each photo has individual privacy settings."
        },
        {
          question: "How do I share a memory with friends?",
          answer: "Click the share button on any photo or collection. You can share via direct link, email invitation, or social media. Recipients don't need an account to view shared memories."
        },
        {
          question: "Can I download my photos?",
          answer: "Yes, you can download individual photos or entire collections. Premium users get original quality downloads, while free users get web-optimized versions."
        }
      ]
    }
  ];

  const videoTutorials = [
    {
      title: "Getting Started with Memories",
      duration: "3:24",
      description: "A complete walkthrough of creating your account and uploading your first photos",
      thumbnail: "🎥",
      views: 15623
    },
    {
      title: "Creating Beautiful Collections",
      duration: "5:12",
      description: "Learn how to organize and curate your college memories into stunning collections",
      thumbnail: "📸",
      views: 8934
    },
    {
      title: "Advanced Privacy Controls",
      duration: "4:07",
      description: "Master privacy settings to control exactly who can see your memories",
      thumbnail: "🔒",
      views: 6721
    },
    {
      title: "Sharing with Friends and Family",
      duration: "2:45",
      description: "Different ways to share your memories and build connections",
      thumbnail: "🤝",
      views: 5432
    }
  ];

  const quickActions = [
    {
      title: "Upload Photos",
      description: "Start adding your memories",
      icon: Upload,
      link: "/upload",
      color: "text-sunset-orange"
    },
    {
      title: "Contact Support",
      description: "Get personalized help",
      icon: MessageCircle,
      link: "/contact",
      color: "text-vintage-teal"
    },
    {
      title: "Video Tutorials",
      description: "Watch and learn",
      icon: Video,
      link: "#tutorials",
      color: "text-retro-purple"
    },
    {
      title: "Community Forum",
      description: "Connect with other users",
      icon: User,
      link: "/community",
      color: "text-sunset-orange"
    }
  ];

  const filteredArticles = popularArticles.filter(article =>
    article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    article.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-4 bg-gradient-retro rounded-full mb-6">
            <HelpCircle className="h-8 w-8 text-white" />
          </div>
          <h1 className="retro-heading text-5xl font-bold text-foreground mb-6">
            Help <span className="bg-gradient-retro bg-clip-text text-transparent">Center</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
            Find answers, learn how to use Memories, and get the most out of preserving your college moments.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Search for help articles, tutorials, or topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 py-6 text-lg"
            />
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-4 gap-4 mb-16">
          {quickActions.map((action, index) => (
            <Button
              key={index}
              variant="outline"
              className="h-auto p-6 flex flex-col items-center space-y-3 hover:scale-105 transition-all duration-300"
              asChild
            >
              <Link to={action.link}>
                <action.icon className={`h-8 w-8 ${action.color}`} />
                <div className="text-center">
                  <h3 className="font-semibold text-foreground mb-1">{action.title}</h3>
                  <p className="text-xs text-muted-foreground">{action.description}</p>
                </div>
              </Link>
            </Button>
          ))}
        </div>

        {/* Help Categories */}
        <div className="mb-16">
          <h2 className="retro-heading text-3xl font-bold text-foreground text-center mb-12">Browse by Category</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {helpCategories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer">
                <CardHeader className="text-center">
                  <div className={`inline-flex items-center justify-center p-4 rounded-full ${category.gradient} mb-4`}>
                    <category.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">{category.description}</p>
                </CardHeader>
                <CardContent className="text-center">
                  <Badge variant="secondary">{category.articles} articles</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <Tabs defaultValue="articles" className="mb-16">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="articles">Popular Articles</TabsTrigger>
            <TabsTrigger value="faq">FAQ</TabsTrigger>
            <TabsTrigger value="tutorials">Video Tutorials</TabsTrigger>
          </TabsList>

          <TabsContent value="articles" className="mt-8">
            <div className="space-y-4">
              {filteredArticles.map((article, index) => (
                <Card key={index} className="hover:shadow-md transition-all duration-300 cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="font-semibold text-foreground hover:text-primary transition-colors">
                            {article.title}
                          </h3>
                          <Badge variant="outline" className="text-xs">
                            {article.difficulty}
                          </Badge>
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <span>{article.category}</span>
                          <span>{article.views} views</span>
                          <div className="flex items-center">
                            <Star className="h-4 w-4 text-yellow-500 mr-1" />
                            {article.rating}
                          </div>
                        </div>
                      </div>
                      <ChevronRight className="h-5 w-5 text-muted-foreground" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="faq" className="mt-8">
            <div className="space-y-6">
              {faqData.map((section, index) => (
                <div key={index}>
                  <h3 className="text-xl font-bold text-foreground mb-4">{section.category}</h3>
                  <Accordion type="single" collapsible className="space-y-2">
                    {section.questions.map((faq, faqIndex) => (
                      <AccordionItem key={faqIndex} value={`${index}-${faqIndex}`} className="border rounded-lg px-4">
                        <AccordionTrigger className="font-medium text-left">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="tutorials" className="mt-8">
            <div className="grid md:grid-cols-2 gap-6">
              {videoTutorials.map((video, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="text-4xl">{video.thumbnail}</div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground mb-2">{video.title}</h3>
                        <p className="text-sm text-muted-foreground mb-3">{video.description}</p>
                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <span>{video.duration}</span>
                          <span>{video.views} views</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Still Need Help */}
        <div className="text-center bg-gradient-warm rounded-lg p-12">
          <MessageCircle className="h-12 w-12 text-primary mx-auto mb-4" />
          <h2 className="retro-heading text-3xl font-bold text-foreground mb-4">
            Still Need Help?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Can't find what you're looking for? Our support team is here to help you with any questions or issues.
          </p>
          <div className="space-x-4">
            <Button asChild className="bg-gradient-sunset hover:bg-gradient-sunset/90">
              <Link to="/contact">Contact Support</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/community">Ask the Community</Link>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Help;