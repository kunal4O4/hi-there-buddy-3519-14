import { Users, Heart, MessageCircle, Star, Trophy, Camera, MapPin, Calendar, Sparkles, UserPlus, Share2, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Community = () => {
  const topContributors = [
    {
      name: "Sarah Chen",
      college: "MIT",
      memories: 342,
      likes: 5670,
      badge: "Memory Curator",
      avatar: "SC",
      gradient: "bg-gradient-sunset"
    },
    {
      name: "Alex Rivera",
      college: "Stanford",
      memories: 289,
      likes: 4320,
      badge: "Event Master",
      avatar: "AR",
      gradient: "bg-gradient-vintage"
    },
    {
      name: "Emma Johnson",
      college: "Harvard",
      memories: 256,
      likes: 3890,
      badge: "Community Star",
      avatar: "EJ",
      gradient: "bg-gradient-retro"
    },
    {
      name: "David Park",
      college: "UCLA",
      memories: 234,
      likes: 3456,
      badge: "Photo Artist",
      avatar: "DP",
      gradient: "bg-gradient-warm"
    }
  ];

  const featuredCommunities = [
    {
      name: "Tech Fest Champions",
      members: 1247,
      memories: 5680,
      description: "Celebrating innovation and technology across college campuses",
      tags: ["Technology", "Innovation", "Competition"],
      image: "🚀"
    },
    {
      name: "Cultural Heritage Club",
      members: 892,
      memories: 3240,
      description: "Preserving and sharing cultural traditions and festivals",
      tags: ["Culture", "Tradition", "Arts"],
      image: "🎭"
    },
    {
      name: "Sports Legends",
      members: 1456,
      memories: 4320,
      description: "Victory moments and athletic achievements from across colleges",
      tags: ["Sports", "Victory", "Team Spirit"],
      image: "🏆"
    },
    {
      name: "Graduation Memories",
      members: 2134,
      memories: 7890,
      description: "Milestone moments and graduation celebrations",
      tags: ["Graduation", "Milestone", "Achievement"],
      image: "🎓"
    }
  ];

  const recentActivity = [
    {
      user: "Mike Chen",
      action: "shared a memory from",
      target: "Tech Symposium 2024",
      time: "2 hours ago",
      likes: 34,
      comments: 7
    },
    {
      user: "Lisa Wang",
      action: "joined the community",
      target: "Cultural Heritage Club",
      time: "4 hours ago",
      likes: 12,
      comments: 3
    },
    {
      user: "Raj Patel",
      action: "uploaded 15 photos to",
      target: "Sports Day Victory",
      time: "6 hours ago",
      likes: 89,
      comments: 15
    },
    {
      user: "Anna Davis",
      action: "created a new collection",
      target: "Freshman Year Adventures",
      time: "8 hours ago",
      likes: 67,
      comments: 12
    }
  ];

  const challenges = [
    {
      title: "Memory of the Month",
      description: "Share your most memorable college moment from this month",
      reward: "500 points + Featured spotlight",
      participants: 89,
      timeLeft: "12 days left",
      icon: Star,
      color: "text-sunset-orange"
    },
    {
      title: "Vintage Vibes Challenge",
      description: "Upload photos with the best vintage aesthetic",
      reward: "Premium filters + Community badge",
      participants: 156,
      timeLeft: "5 days left", 
      icon: Camera,
      color: "text-vintage-teal"
    },
    {
      title: "Friendship Stories",
      description: "Share stories about college friendships that changed your life",
      reward: "Featured in newsletter + Special badge",
      participants: 67,
      timeLeft: "18 days left",
      icon: Heart,
      color: "text-retro-purple"
    }
  ];

  const stats = [
    {
      number: "25,000+",
      label: "Active Members",
      icon: Users,
      color: "text-sunset-orange"
    },
    {
      number: "150+",
      label: "College Communities",
      icon: Award,
      color: "text-vintage-teal"
    },
    {
      number: "500K+",
      label: "Shared Memories",
      icon: Camera,
      color: "text-retro-purple"
    },
    {
      number: "2M+",
      label: "Community Likes",
      icon: Heart,
      color: "text-sunset-orange"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-4 bg-gradient-vintage rounded-full mb-6">
            <Users className="h-8 w-8 text-white" />
          </div>
          <h1 className="retro-heading text-5xl font-bold text-foreground mb-6">
            Join Our <span className="bg-gradient-vintage bg-clip-text text-transparent">Community</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Connect with students from colleges worldwide. Share memories, discover stories, 
            and build lasting friendships that extend beyond campus boundaries.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="inline-flex items-center justify-center p-3 bg-muted rounded-full mb-4">
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-1">{stat.number}</h3>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Tabs defaultValue="communities" className="mb-16">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="communities">Featured Communities</TabsTrigger>
            <TabsTrigger value="contributors">Top Contributors</TabsTrigger>
            <TabsTrigger value="challenges">Community Challenges</TabsTrigger>
          </TabsList>

          <TabsContent value="communities" className="mt-8">
            <div className="grid md:grid-cols-2 gap-6">
              {featuredCommunities.map((community, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                  <CardHeader>
                    <div className="flex items-center mb-4">
                      <div className="text-4xl mr-4">{community.image}</div>
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-2">{community.name}</CardTitle>
                        <div className="flex space-x-4 text-sm text-muted-foreground">
                          <span className="flex items-center">
                            <Users className="h-4 w-4 mr-1" />
                            {community.members} members
                          </span>
                          <span className="flex items-center">
                            <Camera className="h-4 w-4 mr-1" />
                            {community.memories} memories
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm">{community.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {community.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Button className="w-full" variant="outline">
                      <UserPlus className="h-4 w-4 mr-2" />
                      Join Community
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="contributors" className="mt-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {topContributors.map((contributor, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6">
                    <Avatar className={`w-16 h-16 mx-auto mb-4 ${contributor.gradient}`}>
                      <AvatarFallback className="text-white font-bold">
                        {contributor.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <h3 className="font-bold text-foreground mb-1">{contributor.name}</h3>
                    <p className="text-muted-foreground text-sm mb-3">{contributor.college}</p>
                    <Badge className="mb-4 bg-gradient-warm text-foreground">
                      {contributor.badge}
                    </Badge>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Memories:</span>
                        <span className="font-semibold">{contributor.memories}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Likes:</span>
                        <span className="font-semibold">{contributor.likes}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="challenges" className="mt-8">
            <div className="grid md:grid-cols-3 gap-6">
              {challenges.map((challenge, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                  <CardHeader>
                    <div className="flex items-center mb-4">
                      <div className={`p-3 bg-muted rounded-full mr-4`}>
                        <challenge.icon className={`h-6 w-6 ${challenge.color}`} />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{challenge.title}</CardTitle>
                        <Badge variant="outline" className="mt-1">{challenge.timeLeft}</Badge>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm">{challenge.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="text-sm">
                        <span className="font-semibold text-foreground">Reward: </span>
                        <span className="text-muted-foreground">{challenge.reward}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Participants</span>
                        <span className="font-semibold">{challenge.participants}</span>
                      </div>
                      <Button className="w-full">
                        <Trophy className="h-4 w-4 mr-2" />
                        Join Challenge
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Recent Activity */}
        <div className="mb-16">
          <h2 className="retro-heading text-3xl font-bold text-foreground mb-8">Recent Community Activity</h2>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <Card key={index} className="hover:shadow-md transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <Avatar className="bg-gradient-retro">
                        <AvatarFallback className="text-white font-bold">
                          {activity.user.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm">
                          <span className="font-semibold text-foreground">{activity.user}</span>
                          <span className="text-muted-foreground"> {activity.action} </span>
                          <span className="font-semibold text-primary">{activity.target}</span>
                        </p>
                        <p className="text-xs text-muted-foreground">{activity.time}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <span className="flex items-center">
                        <Heart className="h-4 w-4 mr-1" />
                        {activity.likes}
                      </span>
                      <span className="flex items-center">
                        <MessageCircle className="h-4 w-4 mr-1" />
                        {activity.comments}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-warm rounded-lg p-12">
          <h2 className="retro-heading text-4xl font-bold text-foreground mb-6">
            Be Part of Something Special
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join our vibrant community of students sharing their college experiences. 
            Make new friends, discover amazing stories, and contribute to the collective memory of college life.
          </p>
          <div className="space-x-4">
            <Button asChild className="bg-gradient-sunset hover:bg-gradient-sunset/90">
              <Link to="/signup">Join Community</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/upload">Share Your First Memory</Link>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Community;