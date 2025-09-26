import { Shield, Lock, Eye, Database, Cookie, Globe, UserCheck, AlertTriangle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Privacy = () => {
  const privacyPrinciples = [
    {
      title: "Data Ownership",
      description: "Your photos and memories belong to you. We never claim ownership of your content.",
      icon: UserCheck,
      color: "text-green-500"
    },
    {
      title: "Minimal Collection",
      description: "We only collect data necessary to provide and improve our services.",
      icon: Database,
      color: "text-blue-500"
    },
    {
      title: "Transparent Usage",
      description: "We clearly explain how we use your data and never sell it to third parties.",
      icon: Eye,
      color: "text-purple-500"
    },
    {
      title: "Secure Storage",
      description: "Your data is encrypted and stored using industry-standard security measures.",
      icon: Lock,
      color: "text-red-500"
    }
  ];

  const dataTypes = [
    {
      category: "Account Information",
      data: ["Email address", "Username", "Profile photo", "College/University name"],
      purpose: "Account creation, authentication, and personalization",
      retention: "Until account deletion"
    },
    {
      category: "Photos & Content",
      data: ["Uploaded photos", "Captions and descriptions", "Collections and albums", "Comments and reactions"],
      purpose: "Core service functionality and content sharing",
      retention: "Until you delete the content or your account"
    },
    {
      category: "Usage Analytics",
      data: ["Page views", "Feature usage", "Error logs", "Performance metrics"],
      purpose: "Service improvement and bug fixes",
      retention: "12 months (anonymized after 3 months)"
    },
    {
      category: "Communication",
      data: ["Support messages", "Feedback submissions", "Newsletter preferences"],
      purpose: "Customer support and service announcements",
      retention: "3 years for support, until unsubscribe for marketing"
    }
  ];

  const userRights = [
    "Access: Request a copy of all your personal data",
    "Rectification: Correct inaccurate or incomplete information",
    "Erasure: Delete your account and all associated data",
    "Portability: Export your data in a machine-readable format",
    "Restriction: Limit how we process your data",
    "Objection: Opt out of certain types of data processing"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-4 bg-gradient-retro rounded-full mb-6">
            <Shield className="h-8 w-8 text-white" />
          </div>
          <h1 className="retro-heading text-5xl font-bold text-foreground mb-6">
            Privacy <span className="bg-gradient-retro bg-clip-text text-transparent">Policy</span>
          </h1>
          <div className="flex items-center justify-center space-x-4 mb-6">
            <Badge variant="outline">Effective: January 1, 2024</Badge>
            <Badge variant="outline">Last Updated: January 1, 2024</Badge>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Your privacy is fundamental to us. This policy explains how we collect, use, and protect your personal information when you use Memories.
          </p>
        </div>

        {/* Privacy Principles */}
        <div className="mb-16">
          <h2 className="retro-heading text-3xl font-bold text-foreground text-center mb-8">Our Privacy Principles</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {privacyPrinciples.map((principle, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-muted rounded-full">
                      <principle.icon className={`h-5 w-5 ${principle.color}`} />
                    </div>
                    <CardTitle className="text-lg">{principle.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{principle.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-12">
          {/* Information We Collect */}
          <section>
            <h2 className="retro-heading text-3xl font-bold text-foreground mb-6">Information We Collect</h2>
            <div className="space-y-6">
              {dataTypes.map((type, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-xl">{type.category}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2 text-foreground">Data Types:</h4>
                      <div className="flex flex-wrap gap-2">
                        {type.data.map((item, idx) => (
                          <Badge key={idx} variant="secondary">{item}</Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-foreground">Purpose:</h4>
                      <p className="text-muted-foreground">{type.purpose}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-foreground">Retention:</h4>
                      <p className="text-muted-foreground">{type.retention}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* How We Use Information */}
          <section>
            <h2 className="retro-heading text-3xl font-bold text-foreground mb-6">How We Use Your Information</h2>
            <Card>
              <CardContent className="p-6 space-y-4">
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-3">Core Service Operations</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Storing and displaying your photos and memories</li>
                    <li>• Providing vintage filters and photo enhancement features</li>
                    <li>• Enabling sharing and collaboration with friends</li>
                    <li>• Organizing your content in collections and albums</li>
                  </ul>
                </div>

                <Separator />

                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-3">Service Improvement</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Analyzing usage patterns to improve features</li>
                    <li>• Fixing bugs and technical issues</li>
                    <li>• Developing new features based on user needs</li>
                    <li>• Optimizing performance and user experience</li>
                  </ul>
                </div>

                <Separator />

                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-3">Communication</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Sending important service updates and notifications</li>
                    <li>• Responding to customer support inquiries</li>
                    <li>• Sharing relevant tips and feature announcements (with consent)</li>
                    <li>• Notifying about privacy policy or terms changes</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Data Sharing */}
          <section>
            <h2 className="retro-heading text-3xl font-bold text-foreground mb-6">When We Share Information</h2>
            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <UserCheck className="h-5 w-5 text-green-600" />
                    <h3 className="font-semibold text-green-800 dark:text-green-200">We Never Sell Your Data</h3>
                  </div>
                  <p className="text-green-700 dark:text-green-300 text-sm">
                    We do not sell, rent, or trade your personal information to third parties for marketing purposes.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-3">Limited Sharing Scenarios</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• <strong>With your consent:</strong> When you explicitly choose to share content publicly or with specific users</li>
                    <li>• <strong>Service providers:</strong> Trusted partners who help us operate our services (cloud storage, analytics)</li>
                    <li>• <strong>Legal requirements:</strong> When required by law or to protect rights and safety</li>
                    <li>• <strong>Business transfers:</strong> In the event of a merger or acquisition (with continued privacy protection)</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Your Rights */}
          <section>
            <h2 className="retro-heading text-3xl font-bold text-foreground mb-6">Your Privacy Rights</h2>
            <Card>
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4">
                  You have significant control over your personal information. Here are your rights:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {userRights.map((right, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <p className="text-sm text-muted-foreground">{right}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong>To exercise these rights:</strong> Contact us at privacy@memories.college or use the privacy controls in your account settings. We'll respond within 30 days.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Security */}
          <section>
            <h2 className="retro-heading text-3xl font-bold text-foreground mb-6">Data Security</h2>
            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center space-x-3 mb-4">
                  <Lock className="h-6 w-6 text-primary" />
                  <h3 className="font-semibold text-lg text-foreground">How We Protect Your Data</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground">Technical Measures</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• End-to-end encryption for data transmission</li>
                      <li>• Encrypted storage of all photos and data</li>
                      <li>• Regular security audits and penetration testing</li>
                      <li>• Secure access controls and authentication</li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground">Operational Measures</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Employee background checks and training</li>
                      <li>• Limited access on a need-to-know basis</li>
                      <li>• Incident response and breach notification procedures</li>
                      <li>• Regular data backups and disaster recovery</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-yellow-50 dark:bg-yellow-950 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 mt-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <AlertTriangle className="h-5 w-5 text-yellow-600" />
                    <h4 className="font-semibold text-yellow-800 dark:text-yellow-200">Security Notice</h4>
                  </div>
                  <p className="text-yellow-700 dark:text-yellow-300 text-sm">
                    While we implement strong security measures, no system is 100% secure. We encourage you to use strong passwords and keep your account information confidential.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Contact */}
          <section>
            <h2 className="retro-heading text-3xl font-bold text-foreground mb-6">Contact Us</h2>
            <Card>
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4">
                  If you have questions about this privacy policy or how we handle your data, please contact us:
                </p>
                <div className="space-y-2 text-sm">
                  <p><strong>Email:</strong> privacy@memories.college</p>
                  <p><strong>Address:</strong> Memories Privacy Team, 123 Campus Digital Hub, University City, State 12345</p>
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

export default Privacy;