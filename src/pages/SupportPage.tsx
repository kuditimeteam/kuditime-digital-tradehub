
import { MessageCircle, Phone, Mail, Clock, Users, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const supportChannels = [
  {
    icon: MessageCircle,
    title: 'Live Chat',
    description: 'Get instant help from our support team',
    availability: '24/7 Available',
    response: 'Instant Response',
    color: 'bg-blue-500'
  },
  {
    icon: Mail,
    title: 'Email Support',
    description: 'Send us detailed questions via email',
    availability: 'Always Open',
    response: 'Within 2 Hours',
    color: 'bg-green-500'
  },
  {
    icon: Phone,
    title: 'Phone Support',
    description: 'Speak directly with our experts',
    availability: 'Mon-Fri 8AM-6PM',
    response: 'Immediate',
    color: 'bg-purple-500'
  }
];

const commonIssues = [
  {
    title: 'Account Verification',
    description: 'Help with KYC and identity verification process'
  },
  {
    title: 'Trading Issues',
    description: 'Problems with buying or selling cryptocurrencies'
  },
  {
    title: 'Payment Failures',
    description: 'Bill payment or transaction failures'
  },
  {
    title: 'Gift Card Problems',
    description: 'Issues with gift card trading or verification'
  },
  {
    title: 'Security Concerns',
    description: 'Account security and suspicious activity reports'
  },
  {
    title: 'Technical Support',
    description: 'App crashes, login issues, and technical problems'
  }
];

const SupportPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Users className="w-16 h-16 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Customer Support
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            We're here to help you 24/7. Get support for all your questions about 
            crypto trading, bill payments, and account management.
          </p>
        </div>
      </section>

      {/* Support Channels */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Get Help Your Way</h2>
            <p className="text-gray-600">Choose the support channel that works best for you</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportChannels.map((channel, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <div className={`w-16 h-16 ${channel.color} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                    <channel.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{channel.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">{channel.description}</p>
                  <div className="space-y-2">
                    <div className="flex items-center justify-center space-x-2">
                      <Clock className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-600">{channel.availability}</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <Shield className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-600">{channel.response}</span>
                    </div>
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    Get Help Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Send Us a Message</h2>
            <p className="text-gray-600">Fill out the form below and we'll get back to you within 2 hours</p>
          </div>
          <Card>
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" placeholder="Enter your full name" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="Enter your email" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" placeholder="Enter your phone number" />
                  </div>
                  <div>
                    <Label htmlFor="category">Issue Category</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="account">Account Issues</SelectItem>
                        <SelectItem value="trading">Trading Problems</SelectItem>
                        <SelectItem value="payments">Payment Issues</SelectItem>
                        <SelectItem value="giftcards">Gift Card Issues</SelectItem>
                        <SelectItem value="security">Security Concerns</SelectItem>
                        <SelectItem value="technical">Technical Support</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="Brief description of your issue" />
                </div>
                
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Please describe your issue in detail..."
                    rows={6}
                  />
                </div>
                
                <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Common Issues */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Common Support Issues</h2>
            <p className="text-gray-600">Quick solutions to frequently encountered problems</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {commonIssues.map((issue, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{issue.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{issue.description}</p>
                  <Button variant="outline" size="sm" className="w-full">
                    Get Help
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Support Stats */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Support Commitment</h2>
            <p className="text-white/90">We're dedicated to providing exceptional customer service</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-white/80">Support Available</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">2hrs</div>
              <div className="text-white/80">Average Response</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-white/80">Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50k+</div>
              <div className="text-white/80">Issues Resolved</div>
            </div>
          </div>
        </div>
      </section>

      {/* Knowledge Base */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Self-Help Resources</h2>
          <p className="text-gray-600 mb-8">
            Find answers to common questions and learn how to use KudiTime effectively
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline">
              View FAQ
            </Button>
            <Button size="lg" variant="outline">
              User Guide
            </Button>
            <Button size="lg" variant="outline">
              Video Tutorials
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SupportPage;
