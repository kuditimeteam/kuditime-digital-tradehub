
import { Shield, Eye, Lock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const PrivacyPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Shield className="w-16 h-16 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Your privacy is important to us. This policy explains how we collect, 
            use, and protect your personal information when you use KudiTime's services.
          </p>
          <p className="text-white/80 mt-4">Last updated: January 1, 2024</p>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Eye className="w-5 h-5" />
                  <span>1. Information We Collect</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <h4>Personal Information:</h4>
                <ul>
                  <li>Name, email address, phone number</li>
                  <li>Date of birth and government-issued ID</li>
                  <li>Address and proof of residence</li>
                  <li>Bank account and payment information</li>
                  <li>Biometric data for identity verification</li>
                </ul>
                <h4>Usage Information:</h4>
                <ul>
                  <li>Transaction history and trading patterns</li>
                  <li>Device information and IP addresses</li>
                  <li>Browser type and operating system</li>
                  <li>Pages visited and time spent on our platform</li>
                </ul>
                <h4>Communication Data:</h4>
                <ul>
                  <li>Customer support interactions</li>
                  <li>Survey responses and feedback</li>
                  <li>Marketing preferences and communications</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>2. How We Use Your Information</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p>We use your information to:</p>
                <h4>Provide Services:</h4>
                <ul>
                  <li>Process cryptocurrency trades and transactions</li>
                  <li>Execute bill payments and gift card exchanges</li>
                  <li>Maintain and secure your digital wallet</li>
                  <li>Provide customer support and technical assistance</li>
                </ul>
                <h4>Compliance and Security:</h4>
                <ul>
                  <li>Verify your identity (KYC) and prevent fraud</li>
                  <li>Comply with anti-money laundering (AML) regulations</li>
                  <li>Monitor transactions for suspicious activity</li>
                  <li>Report to regulatory authorities as required</li>
                </ul>
                <h4>Service Improvement:</h4>
                <ul>
                  <li>Analyze usage patterns to improve our platform</li>
                  <li>Develop new features and services</li>
                  <li>Personalize your user experience</li>
                </ul>
                <h4>Communication:</h4>
                <ul>
                  <li>Send transaction confirmations and account updates</li>
                  <li>Provide customer support and respond to inquiries</li>
                  <li>Send marketing communications (with your consent)</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>3. Information Sharing and Disclosure</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p>We may share your information with:</p>
                <h4>Service Providers:</h4>
                <ul>
                  <li>Payment processors and banking partners</li>
                  <li>Identity verification and compliance services</li>
                  <li>Cloud hosting and technical infrastructure providers</li>
                  <li>Customer support and communication platforms</li>
                </ul>
                <h4>Legal and Regulatory:</h4>
                <ul>
                  <li>Law enforcement agencies when legally required</li>
                  <li>Regulatory authorities for compliance purposes</li>
                  <li>Courts and legal proceedings as mandated</li>
                </ul>
                <h4>Business Transfers:</h4>
                <ul>
                  <li>In connection with mergers, acquisitions, or asset sales</li>
                </ul>
                <p>
                  <strong>We do not sell your personal information to third parties for marketing purposes.</strong>
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Lock className="w-5 h-5" />
                  <span>4. Data Security</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p>We implement comprehensive security measures to protect your information:</p>
                <h4>Technical Safeguards:</h4>
                <ul>
                  <li>SSL/TLS encryption for data transmission</li>
                  <li>AES-256 encryption for data storage</li>
                  <li>Multi-factor authentication for account access</li>
                  <li>Regular security audits and penetration testing</li>
                </ul>
                <h4>Physical Safeguards:</h4>
                <ul>
                  <li>Secure data centers with restricted access</li>
                  <li>Environmental controls and monitoring</li>
                  <li>Backup and disaster recovery procedures</li>
                </ul>
                <h4>Administrative Safeguards:</h4>
                <ul>
                  <li>Employee background checks and training</li>
                  <li>Access controls and authorization procedures</li>
                  <li>Incident response and breach notification procedures</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>5. Data Retention</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p>We retain your information for as long as necessary to:</p>
                <ul>
                  <li>Provide our services and maintain your account</li>
                  <li>Comply with legal and regulatory requirements</li>
                  <li>Resolve disputes and enforce our agreements</li>
                  <li>Improve our services and prevent fraud</li>
                </ul>
                <p>
                  Generally, we retain:
                </p>
                <ul>
                  <li>Account information: For the duration of your account plus 7 years</li>
                  <li>Transaction records: 7 years after the transaction date</li>
                  <li>Communication records: 3 years after the last interaction</li>
                  <li>Marketing data: Until you withdraw consent</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>6. Your Rights and Choices</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p>You have the following rights regarding your personal information:</p>
                <h4>Access and Portability:</h4>
                <ul>
                  <li>Request access to your personal information</li>
                  <li>Receive a copy of your data in a portable format</li>
                </ul>
                <h4>Correction and Deletion:</h4>
                <ul>
                  <li>Correct inaccurate or incomplete information</li>
                  <li>Request deletion of your personal information (subject to legal requirements)</li>
                </ul>
                <h4>Processing Restrictions:</h4>
                <ul>
                  <li>Object to certain processing activities</li>
                  <li>Restrict processing in specific circumstances</li>
                </ul>
                <h4>Marketing Communications:</h4>
                <ul>
                  <li>Opt-out of marketing emails and notifications</li>
                  <li>Update your communication preferences</li>
                </ul>
                <p>
                  To exercise these rights, contact us at hi@kuditime.com or through 
                  your account settings.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>7. Cookies and Tracking Technologies</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p>We use cookies and similar technologies to:</p>
                <ul>
                  <li>Remember your preferences and settings</li>
                  <li>Analyze website traffic and usage patterns</li>
                  <li>Improve website functionality and security</li>
                  <li>Provide personalized content and advertisements</li>
                </ul>
                <h4>Types of Cookies:</h4>
                <ul>
                  <li><strong>Essential Cookies:</strong> Required for basic website functionality</li>
                  <li><strong>Performance Cookies:</strong> Help us analyze and improve our services</li>
                  <li><strong>Functional Cookies:</strong> Remember your preferences and settings</li>
                  <li><strong>Marketing Cookies:</strong> Used for advertising and remarketing</li>
                </ul>
                <p>
                  You can control cookies through your browser settings or our cookie preference center.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>8. International Data Transfers</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p>
                  Your information may be transferred to and processed in countries other than Nigeria 
                  where our service providers are located. We ensure appropriate safeguards are in place:
                </p>
                <ul>
                  <li>Standard contractual clauses approved by regulatory authorities</li>
                  <li>Adequacy decisions for countries with sufficient data protection</li>
                  <li>Certification schemes and codes of conduct</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>9. Children's Privacy</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p>
                  Our services are not intended for individuals under 18 years of age. 
                  We do not knowingly collect personal information from children. 
                  If we become aware that we have collected information from a child, 
                  we will delete it promptly.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>10. Changes to This Policy</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p>
                  We may update this Privacy Policy periodically to reflect changes in our practices 
                  or applicable laws. We will notify you of material changes by:
                </p>
                <ul>
                  <li>Posting the updated policy on our website</li>
                  <li>Sending email notifications to registered users</li>
                  <li>Displaying prominent notices on our platform</li>
                </ul>
                <p>
                  Changes become effective 30 days after notification unless you object or 
                  close your account.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>11. Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p>
                  If you have questions about this Privacy Policy or our data practices, 
                  please contact us:
                </p>
                 <ul>
                  <li><strong>Email:</strong> hi@kuditime.com</li>
                  <li><strong>Phone:</strong> +234 70 4106 6287</li>
                  <li><strong>Address:</strong> 20 Issac John Way, Ikeja Lagos, Nigeria</li>
                </ul>
                <p>
                  We will respond to your inquiries within 30 days of receipt.
                </p>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPage;
