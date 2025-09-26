import { Cookie, Settings, Eye, BarChart3, Shield, Globe, ToggleLeft, ToggleRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Cookies = () => {
  const [cookieSettings, setCookieSettings] = useState({
    essential: true, // Cannot be disabled
    analytics: true,
    marketing: false,
    preferences: true
  });

  const cookieTypes = [
    {
      name: "Essential Cookies",
      description: "Required for basic website functionality and security",
      icon: Shield,
      color: "text-green-500",
      required: true,
      examples: ["Session authentication", "Security tokens", "Load balancing", "CSRF protection"]
    },
    {
      name: "Analytics Cookies",
      description: "Help us understand how you use our website to improve performance",
      icon: BarChart3,
      color: "text-blue-500",
      required: false,
      examples: ["Page views", "Feature usage", "Error tracking", "Performance metrics"]
    },
    {
      name: "Marketing Cookies",
      description: "Used to deliver relevant advertisements and measure campaign effectiveness",
      icon: Eye,
      color: "text-purple-500",
      required: false,
      examples: ["Ad preferences", "Campaign tracking", "Social media integration", "Retargeting"]
    },
    {
      name: "Preference Cookies",
      description: "Remember your settings and preferences for a personalized experience",
      icon: Settings,
      color: "text-orange-500",
      required: false,
      examples: ["Theme selection", "Language preference", "Display settings", "Filter preferences"]
    }
  ];

  const specificCookies = [
    {
      name: "memories_session",
      purpose: "User authentication and session management",
      type: "Essential",
      duration: "Session",
      domain: "memories.college"
    },
    {
      name: "csrf_token",
      purpose: "Protection against cross-site request forgery attacks",
      type: "Essential", 
      duration: "Session",
      domain: "memories.college"
    },
    {
      name: "user_preferences",
      purpose: "Store user interface preferences and settings",
      type: "Preference",
      duration: "1 year",
      domain: "memories.college"
    },
    {
      name: "_ga",
      purpose: "Google Analytics - distinguish unique users",
      type: "Analytics",
      duration: "2 years",
      domain: "memories.college"
    },
    {
      name: "_gid",
      purpose: "Google Analytics - distinguish unique users",
      type: "Analytics",
      duration: "24 hours",
      domain: "memories.college"
    },
    {
      name: "theme_preference",
      purpose: "Remember dark/light mode selection",
      type: "Preference",
      duration: "1 year", 
      domain: "memories.college"
    }
  ];

  const handleCookieSettingChange = (setting: string, value: boolean) => {
    setCookieSettings(prev => ({
      ...prev,
      [setting]: value
    }));
  };

  const saveSettings = () => {
    // In a real app, this would update the user's cookie preferences
    console.log('Cookie settings saved:', cookieSettings);
    // Show success message
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-4 bg-gradient-warm rounded-full mb-6">
            <Cookie className="h-8 w-8 text-white" />
          </div>
          <h1 className="retro-heading text-5xl font-bold text-foreground mb-6">
            Cookie <span className="bg-gradient-warm bg-clip-text text-transparent">Policy</span>
          </h1>
          <div className="flex items-center justify-center space-x-4 mb-6">
            <Badge variant="outline">Effective: January 1, 2024</Badge>
            <Badge variant="outline">Last Updated: January 1, 2024</Badge>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            This policy explains how Memories uses cookies and similar technologies to enhance your experience, 
            analyze usage, and provide personalized features.
          </p>
        </div>

        {/* Cookie Settings Panel */}
        <div className="mb-16">
          <Card className="border-2 border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center">
                <Settings className="h-6 w-6 mr-3 text-primary" />
                Manage Your Cookie Preferences
              </CardTitle>
              <p className="text-muted-foreground">
                Control which cookies we can use to enhance your experience
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              {cookieTypes.map((type, index) => (
                <div key={index} className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4 flex-1">
                      <div className="p-2 bg-muted rounded-full">
                        <type.icon className={`h-5 w-5 ${type.color}`} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h3 className="font-semibold text-foreground">{type.name}</h3>
                          {type.required && <Badge variant="outline" className="text-xs">Required</Badge>}
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">{type.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {type.examples.map((example, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs">
                              {example}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 ml-4">
                      <Switch
                        id={type.name.toLowerCase().replace(' ', '')}
                        checked={type.required || cookieSettings[type.name.toLowerCase().replace(' cookies', '') as keyof typeof cookieSettings]}
                        onCheckedChange={(value) => !type.required && handleCookieSettingChange(type.name.toLowerCase().replace(' cookies', ''), value)}
                        disabled={type.required}
                      />
                      <Label htmlFor={type.name.toLowerCase().replace(' ', '')} className="sr-only">
                        {type.name}
                      </Label>
                    </div>
                  </div>
                  {index < cookieTypes.length - 1 && <Separator />}
                </div>
              ))}
              <div className="pt-4">
                <Button onClick={saveSettings} className="w-full bg-gradient-warm hover:bg-gradient-warm/90">
                  Save Cookie Preferences
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="space-y-12">
          {/* What Are Cookies */}
          <section>
            <h2 className="retro-heading text-3xl font-bold text-foreground mb-6">What Are Cookies?</h2>
            <Card>
              <CardContent className="p-6 space-y-4">
                <p className="text-muted-foreground">
                  Cookies are small text files that are stored on your device when you visit a website. 
                  They help websites remember information about your visit, making your next visit easier and more useful.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-foreground mb-3">First-Party Cookies</h3>
                    <p className="text-sm text-muted-foreground">
                      Set directly by Memories to provide core functionality and remember your preferences.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-3">Third-Party Cookies</h3>
                    <p className="text-sm text-muted-foreground">
                      Set by external services (like Google Analytics) to provide additional functionality.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* How We Use Cookies */}
          <section>
            <h2 className="retro-heading text-3xl font-bold text-foreground mb-6">How We Use Cookies</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {cookieTypes.map((type, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-muted rounded-full">
                        <type.icon className={`h-5 w-5 ${type.color}`} />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{type.name}</CardTitle>
                        {type.required && <Badge variant="outline" className="mt-1 text-xs">Always Active</Badge>}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm mb-4">{type.description}</p>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-foreground text-sm">Examples:</h4>
                      <ul className="space-y-1">
                        {type.examples.map((example, idx) => (
                          <li key={idx} className="text-xs text-muted-foreground flex items-center">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                            {example}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Specific Cookies Table */}
          <section>
            <h2 className="retro-heading text-3xl font-bold text-foreground mb-6">Cookies We Use</h2>
            <Card>
              <CardContent className="p-6">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-3 px-2 font-semibold text-foreground">Cookie Name</th>
                        <th className="text-left py-3 px-2 font-semibold text-foreground">Purpose</th>
                        <th className="text-left py-3 px-2 font-semibold text-foreground">Type</th>
                        <th className="text-left py-3 px-2 font-semibold text-foreground">Duration</th>
                      </tr>
                    </thead>
                    <tbody>
                      {specificCookies.map((cookie, index) => (
                        <tr key={index} className="border-b border-border/50">
                          <td className="py-3 px-2">
                            <code className="text-sm bg-muted px-2 py-1 rounded">{cookie.name}</code>
                          </td>
                          <td className="py-3 px-2 text-sm text-muted-foreground">{cookie.purpose}</td>
                          <td className="py-3 px-2">
                            <Badge 
                              variant={cookie.type === 'Essential' ? 'default' : 'secondary'}
                              className="text-xs"
                            >
                              {cookie.type}
                            </Badge>
                          </td>
                          <td className="py-3 px-2 text-sm text-muted-foreground">{cookie.duration}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Third-Party Services */}
          <section>
            <h2 className="retro-heading text-3xl font-bold text-foreground mb-6">Third-Party Services</h2>
            <Card>
              <CardContent className="p-6 space-y-6">
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-3 flex items-center">
                    <Globe className="h-5 w-5 mr-2 text-blue-500" />
                    External Services We Use
                  </h3>
                  <div className="space-y-4">
                    <div className="border border-border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-foreground">Google Analytics</h4>
                        <Badge variant="outline">Analytics</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">
                        Helps us understand how users interact with our website to improve the experience.
                      </p>
                      <a 
                        href="https://policies.google.com/privacy" 
                        className="text-sm text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Google's Privacy Policy →
                      </a>
                    </div>

                    <div className="border border-border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-foreground">Cloudflare</h4>
                        <Badge variant="outline">Essential</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">
                        Provides security, performance optimization, and DDoS protection for our website.
                      </p>
                      <a 
                        href="https://www.cloudflare.com/privacy/" 
                        className="text-sm text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Cloudflare's Privacy Policy →
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Managing Cookies */}
          <section>
            <h2 className="retro-heading text-3xl font-bold text-foreground mb-6">Managing Cookies</h2>
            <Card>
              <CardContent className="p-6 space-y-6">
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-3">Browser Settings</h3>
                  <p className="text-muted-foreground mb-4">
                    You can control cookies through your browser settings. Most browsers allow you to:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• View what cookies are stored and delete them individually</li>
                    <li>• Block third-party cookies</li>
                    <li>• Block all cookies from specific sites</li>
                    <li>• Block all cookies (not recommended as it may break website functionality)</li>
                    <li>• Delete all cookies when you close your browser</li>
                  </ul>
                </div>

                <Separator />

                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-3">Browser-Specific Instructions</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <h4 className="font-semibold text-foreground">Desktop Browsers</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Chrome: Settings → Privacy and security → Cookies</li>
                        <li>• Firefox: Preferences → Privacy & Security</li>
                        <li>• Safari: Preferences → Privacy</li>
                        <li>• Edge: Settings → Cookies and site permissions</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-foreground">Mobile Browsers</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Chrome Mobile: Settings → Site settings → Cookies</li>
                        <li>• Safari iOS: Settings → Safari → Privacy & Security</li>
                        <li>• Samsung Internet: Settings → Personal browsing data</li>
                        <li>• Firefox Mobile: Settings → Data Management</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Updates to Policy */}
          <section>
            <h2 className="retro-heading text-3xl font-bold text-foreground mb-6">Updates to This Policy</h2>
            <Card>
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4">
                  We may update this Cookie Policy from time to time to reflect changes in our practices or for legal reasons. When we do:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• We'll post the updated policy on this page</li>
                  <li>• We'll update the "Last Updated" date at the top</li>
                  <li>• For significant changes, we'll notify you via email or website banner</li>
                  <li>• We recommend reviewing this policy periodically</li>
                </ul>
              </CardContent>
            </Card>
          </section>

          {/* Contact */}
          <section>
            <h2 className="retro-heading text-3xl font-bold text-foreground mb-6">Questions About Cookies?</h2>
            <Card>
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4">
                  If you have questions about our use of cookies or this policy, please contact us:
                </p>
                <div className="space-y-2 text-sm">
                  <p><strong>Email:</strong> privacy@memories.college</p>
                  <p><strong>Subject:</strong> Cookie Policy Question</p>
                  <p><strong>Response Time:</strong> We typically respond within 48 hours</p>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Cookies;