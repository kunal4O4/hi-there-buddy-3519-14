import { FileText, Shield, Users, AlertCircle, CheckCircle, XCircle, Scale } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Terms = () => {
  const keyTerms = [
    {
      title: "Content Ownership",
      description: "You retain full ownership of your photos and content. We only have permission to display and process them as needed for the service.",
      icon: Shield,
      color: "text-green-500"
    },
    {
      title: "Acceptable Use",
      description: "Use Memories respectfully. No harmful, illegal, or inappropriate content. Respect others' privacy and intellectual property.",
      icon: Users,
      color: "text-blue-500"
    },
    {
      title: "Service Availability",
      description: "We strive for 99.9% uptime but cannot guarantee uninterrupted service. We'll notify you of planned maintenance.",
      icon: CheckCircle,
      color: "text-purple-500"
    },
    {
      title: "Account Responsibility",
      description: "You're responsible for your account security, password protection, and all activities under your account.",
      icon: AlertCircle,
      color: "text-orange-500"
    }
  ];

  const prohibitedActivities = [
    "Uploading content that violates others' intellectual property rights",
    "Sharing inappropriate, harmful, or illegal content",
    "Attempting to hack, reverse engineer, or compromise our systems",
    "Using the service for spam, phishing, or other malicious activities",
    "Creating fake accounts or impersonating others",
    "Scraping or automatically collecting data from our platform",
    "Interfering with other users' enjoyment of the service",
    "Violating any applicable laws or regulations"
  ];

  const serviceFeatures = [
    {
      feature: "Photo Storage & Display",
      description: "Upload, store, and organize your college memories",
      included: true
    },
    {
      feature: "Vintage Filters & Effects",
      description: "Apply professional-grade vintage aesthetics to your photos",
      included: true
    },
    {
      feature: "Privacy Controls",
      description: "Control who can see your memories with granular privacy settings",
      included: true
    },
    {
      feature: "Sharing & Collaboration",
      description: "Share memories with friends and create collaborative albums",
      included: true
    },
    {
      feature: "Community Features",
      description: "Connect with other users and discover public memories",
      included: true
    },
    {
      feature: "Data Export",
      description: "Download your photos and data at any time",
      included: true
    },
    {
      feature: "Customer Support",
      description: "Access to our help center and email support",
      included: true
    },
    {
      feature: "Premium Storage",
      description: "Unlimited photo storage and high-resolution downloads",
      included: false
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-4 bg-gradient-sunset rounded-full mb-6">
            <FileText className="h-8 w-8 text-white" />
          </div>
          <h1 className="retro-heading text-5xl font-bold text-foreground mb-6">
            Terms of <span className="bg-gradient-sunset bg-clip-text text-transparent">Service</span>
          </h1>
          <div className="flex items-center justify-center space-x-4 mb-6">
            <Badge variant="outline">Effective: January 1, 2024</Badge>
            <Badge variant="outline">Last Updated: January 1, 2024</Badge>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            These terms govern your use of Memories. By using our service, you agree to these terms. 
            Please read them carefully - they contain important information about your rights and responsibilities.
          </p>
        </div>

        {/* Key Terms Overview */}
        <div className="mb-16">
          <h2 className="retro-heading text-3xl font-bold text-foreground text-center mb-8">Key Terms at a Glance</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {keyTerms.map((term, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-muted rounded-full">
                      <term.icon className={`h-5 w-5 ${term.color}`} />
                    </div>
                    <CardTitle className="text-lg">{term.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{term.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-12">
          {/* Agreement to Terms */}
          <section>
            <h2 className="retro-heading text-3xl font-bold text-foreground mb-6">Agreement to Terms</h2>
            <Card>
              <CardContent className="p-6 space-y-4">
                <p className="text-muted-foreground">
                  By accessing or using Memories ("the Service"), you agree to be bound by these Terms of Service ("Terms"). 
                  If you disagree with any part of these terms, you may not access the Service.
                </p>
                <div className="bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Scale className="h-5 w-5 text-blue-600" />
                    <h3 className="font-semibold text-blue-800 dark:text-blue-200">Legal Capacity</h3>
                  </div>
                  <p className="text-blue-700 dark:text-blue-300 text-sm">
                    You must be at least 13 years old to use Memories. If you're under 18, you confirm you have 
                    parental consent to use this service.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Service Description */}
          <section>
            <h2 className="retro-heading text-3xl font-bold text-foreground mb-6">Our Service</h2>
            <Card>
              <CardContent className="p-6 space-y-4">
                <p className="text-muted-foreground mb-4">
                  Memories is a digital platform designed to help college students and alumni preserve, 
                  organize, and share their academic memories through vintage-inspired photo albums.
                </p>
                <div className="space-y-3">
                  <h3 className="font-semibold text-lg text-foreground">What We Provide</h3>
                  <div className="space-y-2">
                    {serviceFeatures.map((item, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        {item.included ? (
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        ) : (
                          <XCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                        )}
                        <div>
                          <span className="font-medium text-foreground">{item.feature}</span>
                          {!item.included && <Badge variant="outline" className="ml-2 text-xs">Premium</Badge>}
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* User Accounts */}
          <section>
            <h2 className="retro-heading text-3xl font-bold text-foreground mb-6">User Accounts</h2>
            <Card>
              <CardContent className="p-6 space-y-4">
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-3">Account Creation</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• You must provide accurate and complete information when creating an account</li>
                    <li>• You're responsible for maintaining the confidentiality of your password</li>
                    <li>• You must notify us immediately of any unauthorized use of your account</li>
                    <li>• One person may not maintain multiple accounts</li>
                  </ul>
                </div>

                <Separator />

                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-3">Account Responsibilities</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• All activities under your account are your responsibility</li>
                    <li>• Keep your contact information up to date</li>
                    <li>• Use a strong, unique password</li>
                    <li>• Log out from shared or public computers</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Content and Conduct */}
          <section>
            <h2 className="retro-heading text-3xl font-bold text-foreground mb-6">Content and Conduct</h2>
            <Card>
              <CardContent className="p-6 space-y-6">
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-3">Your Content Rights</h3>
                  <div className="bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-lg p-4">
                    <p className="text-green-700 dark:text-green-300 text-sm">
                      <strong>You own your content.</strong> When you upload photos and create content on Memories, 
                      you retain all ownership rights. We only receive a limited license to display and process 
                      your content as necessary to provide the service.
                    </p>
                  </div>
                </div>

                <Separator />

                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-3">Prohibited Activities</h3>
                  <p className="text-muted-foreground mb-4">
                    To maintain a safe and respectful community, the following activities are strictly prohibited:
                  </p>
                  <div className="grid md:grid-cols-2 gap-2">
                    {prohibitedActivities.map((activity, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <XCircle className="h-4 w-4 text-red-500 mt-1 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{activity}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <AlertCircle className="h-5 w-5 text-red-600" />
                    <h4 className="font-semibold text-red-800 dark:text-red-200">Enforcement</h4>
                  </div>
                  <p className="text-red-700 dark:text-red-300 text-sm">
                    Violations may result in content removal, account suspension, or termination. 
                    We reserve the right to take action at our discretion to protect our community.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Service Availability */}
          <section>
            <h2 className="retro-heading text-3xl font-bold text-foreground mb-6">Service Availability</h2>
            <Card>
              <CardContent className="p-6 space-y-4">
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-3">Uptime and Maintenance</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• We aim for 99.9% service availability</li>
                    <li>• Planned maintenance will be announced in advance when possible</li>
                    <li>• Emergency maintenance may occur without notice</li>
                    <li>• We're not liable for temporary service interruptions</li>
                  </ul>
                </div>

                <Separator />

                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-3">Service Modifications</h3>
                  <p className="text-muted-foreground">
                    We may modify, suspend, or discontinue any part of the service at any time. 
                    We'll provide reasonable notice for significant changes that affect your use of the service.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Limitation of Liability */}
          <section>
            <h2 className="retro-heading text-3xl font-bold text-foreground mb-6">Limitation of Liability</h2>
            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="bg-yellow-50 dark:bg-yellow-950 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <AlertCircle className="h-5 w-5 text-yellow-600" />
                    <h3 className="font-semibold text-yellow-800 dark:text-yellow-200">Important Legal Notice</h3>
                  </div>
                  <p className="text-yellow-700 dark:text-yellow-300 text-sm mb-3">
                    The service is provided "as is" without warranties of any kind. We're not liable for:
                  </p>
                  <ul className="text-yellow-700 dark:text-yellow-300 text-sm space-y-1">
                    <li>• Data loss or corruption</li>
                    <li>• Service interruptions or downtime</li>
                    <li>• Indirect, incidental, or consequential damages</li>
                    <li>• Third-party actions or content</li>
                  </ul>
                </div>
                <p className="text-muted-foreground text-sm">
                  Our total liability to you for any claims arising from these terms or your use of the service 
                  shall not exceed the amount you paid us in the 12 months preceding the claim.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Termination */}
          <section>
            <h2 className="retro-heading text-3xl font-bold text-foreground mb-6">Termination</h2>
            <Card>
              <CardContent className="p-6 space-y-4">
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-3">Your Right to Terminate</h3>
                  <p className="text-muted-foreground">
                    You may terminate your account at any time through your account settings. 
                    Upon termination, you can download your data for 30 days before permanent deletion.
                  </p>
                </div>

                <Separator />

                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-3">Our Right to Terminate</h3>
                  <p className="text-muted-foreground">
                    We may suspend or terminate your account if you violate these terms, engage in prohibited activities, 
                    or if required by law. We'll provide notice when possible and allow data export when appropriate.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Changes to Terms */}
          <section>
            <h2 className="retro-heading text-3xl font-bold text-foreground mb-6">Changes to These Terms</h2>
            <Card>
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4">
                  We may update these terms from time to time. When we do:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• We'll post the updated terms on this page</li>
                  <li>• We'll update the "Last Updated" date</li>
                  <li>• For significant changes, we'll notify you via email or in-app notification</li>
                  <li>• Continued use of the service after changes constitutes acceptance</li>
                </ul>
              </CardContent>
            </Card>
          </section>

          {/* Contact Information */}
          <section>
            <h2 className="retro-heading text-3xl font-bold text-foreground mb-6">Contact Information</h2>
            <Card>
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4">
                  If you have questions about these terms, please contact us:
                </p>
                <div className="space-y-2 text-sm">
                  <p><strong>Email:</strong> legal@memories.college</p>
                  <p><strong>Address:</strong> Memories Legal Team, 123 Campus Digital Hub, University City, State 12345</p>
                  <p><strong>Phone:</strong> +1 (555) 123-4567</p>
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

export default Terms;