"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { BarChart3, Link2, QrCode, Shield, Zap, Users } from "lucide-react";
import { useState } from "react";

export default function HomePage() {
  const [url, setUrl] = useState("");
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/40 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Link2 className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold font-space-grotesk">
              LinkSnap
            </span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a
              href="#features"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Features
            </a>
            <a
              href="#pricing"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Pricing
            </a>
            <a
              href="#about"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </a>
            <Button variant="outline" size="sm">
              Sign In
            </Button>
            <Button size="sm">Get Started</Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/10" />
        <div className="relative container mx-auto px-4 py-24 text-center">
          <Badge variant="secondary" className="mb-6">
            <Zap className="h-3 w-3 mr-1" />
            Lightning Fast URL Shortening
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold font-space-grotesk mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            Shorten Your Links,
            <br />
            Amplify Your Reach
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Transform long, complex URLs into clean, shareable links. Track
            performance, customize domains, and boost your digital presence with
            our powerful URL shortening platform.
          </p>

          {/* URL Shortener Input */}
          <div className="max-w-2xl mx-auto mb-8">
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
              <div className="flex flex-col sm:flex-row gap-4">
                <Input
                  type="url"
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="Enter your long URL here..."
                  className="flex-1 bg-input border-border/50 focus:border-primary/50"
                />
                <Button
                  onClick={async () => {
                    const resp = await fetch("/api/shorten", {
                      method: "POST",
                      body: JSON.stringify({
                        originalUrl: url,
                      }),
                    });
                    const newUrl = (await resp.json()).generatedUrl;
                    console.log(newUrl);
                    window.open(newUrl, "_blank");
                  }}
                  className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 transition-all duration-300"
                >
                  Shorten URL
                </Button>
              </div>
            </Card>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-primary" />
              <span>Secure & Reliable</span>
            </div>
            <div className="flex items-center gap-2">
              <BarChart3 className="h-4 w-4 text-primary" />
              <span>Advanced Analytics</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-primary" />
              <span>Trusted by 10K+ Users</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-card/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-space-grotesk mb-4">
              Powerful Features for Modern Marketers
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to manage, track, and optimize your links in
              one comprehensive platform.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <div className="h-12 w-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <BarChart3 className="h-6 w-6 text-primary-foreground" />
                </div>
                <CardTitle className="font-space-grotesk">
                  Advanced Analytics
                </CardTitle>
                <CardDescription>
                  Track clicks, geographic data, referrers, and device
                  information with detailed real-time analytics.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <div className="h-12 w-12 bg-gradient-to-br from-secondary to-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Link2 className="h-6 w-6 text-primary-foreground" />
                </div>
                <CardTitle className="font-space-grotesk">
                  Custom Domains
                </CardTitle>
                <CardDescription>
                  Use your own branded domain for shortened links to maintain
                  brand consistency and trust.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <div className="h-12 w-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <QrCode className="h-6 w-6 text-primary-foreground" />
                </div>
                <CardTitle className="font-space-grotesk">
                  QR Code Generation
                </CardTitle>
                <CardDescription>
                  Automatically generate QR codes for your shortened links to
                  bridge offline and online marketing.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <div className="h-12 w-12 bg-gradient-to-br from-secondary to-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="h-6 w-6 text-primary-foreground" />
                </div>
                <CardTitle className="font-space-grotesk">
                  Link Security
                </CardTitle>
                <CardDescription>
                  Password protection, expiration dates, and malware scanning to
                  keep your links secure.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <div className="h-12 w-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="h-6 w-6 text-primary-foreground" />
                </div>
                <CardTitle className="font-space-grotesk">
                  Bulk Operations
                </CardTitle>
                <CardDescription>
                  Shorten multiple URLs at once and manage large link campaigns
                  with our bulk tools.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <div className="h-12 w-12 bg-gradient-to-br from-secondary to-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-6 w-6 text-primary-foreground" />
                </div>
                <CardTitle className="font-space-grotesk">
                  Team Collaboration
                </CardTitle>
                <CardDescription>
                  Share links with team members, set permissions, and
                  collaborate on link management.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-background to-secondary/10" />
        <div className="relative container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-space-grotesk mb-6">
            Ready to Transform Your Links?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of marketers, businesses, and creators who trust
            LinkSnap for their URL shortening needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 transition-all duration-300"
            >
              Start Free Trial
            </Button>
            <Button variant="outline" size="lg">
              View Pricing
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 py-12 bg-card/20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Link2 className="h-6 w-6 text-primary" />
                <span className="text-lg font-bold font-space-grotesk">
                  LinkSnap
                </span>
              </div>
              <p className="text-muted-foreground text-sm">
                The modern URL shortener for the digital age. Fast, secure, and
                feature-rich.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    API
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Integrations
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Help Center
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Status
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border/40 mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 LinkSnap. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
