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
            This Privacy Policy explains how KudiTime collects, uses,
            stores, and protects your information when you use our app
            and services.
          </p>

          <p className="text-white/80 mt-4">
            Last updated: May 11, 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">

            {/* Information Collection */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Eye className="w-5 h-5" />
                  <span>1. Information We Collect</span>
                </CardTitle>
              </CardHeader>

              <CardContent className="prose prose-gray max-w-none">
                <p>
                  We may collect the following information when you use KudiTime:
                </p>

                <ul>
                  <li>Full name</li>
                  <li>Email address</li>
                  <li>Phone number</li>
                  <li>Date of birth</li>
                  <li>Government-issued identification documents</li>
                  <li>Bank account or payment details</li>
                  <li>Transaction history</li>
                  <li>Device information and IP address</li>
                </ul>

                <p>
                  We only collect information necessary to provide our services,
                  verify your identity, comply with legal obligations,
                  and improve user experience.
                </p>
              </CardContent>
            </Card>

            {/* Usage */}
            <Card>
              <CardHeader>
                <CardTitle>
                  2. How We Use Your Information
                </CardTitle>
              </CardHeader>

              <CardContent className="prose prose-gray max-w-none">
                <p>
                  We use your information to:
                </p>

                <ul>
                  <li>Create and manage your account</li>
                  <li>Process cryptocurrency and gift card transactions</li>
                  <li>Verify identity and prevent fraud</li>
                  <li>Provide customer support</li>
                  <li>Improve app performance and user experience</li>
                  <li>Comply with applicable laws and regulations</li>
                  <li>Send important account or transaction notifications</li>
                </ul>
              </CardContent>
            </Card>

            {/* Sharing */}
            <Card>
              <CardHeader>
                <CardTitle>
                  3. Information Sharing
                </CardTitle>
              </CardHeader>

              <CardContent className="prose prose-gray max-w-none">
                <p>
                  We do not sell your personal information.
                </p>

                <p>
                  We may share information with trusted third-party providers
                  that help us operate our services, including:
                </p>

                <ul>
                  <li>Payment processors</li>
                  <li>Identity verification providers</li>
                  <li>Cloud hosting providers</li>
                  <li>Fraud prevention and security services</li>
                </ul>

                <p>
                  We may also disclose information when required by law,
                  regulation, or legal process.
                </p>
              </CardContent>
            </Card>

            {/* Security */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Lock className="w-5 h-5" />
                  <span>4. Data Security</span>
                </CardTitle>
              </CardHeader>

              <CardContent className="prose prose-gray max-w-none">
                <p>
                  We use reasonable administrative, technical,
                  and organizational measures to help protect your information
                  from unauthorized access, loss, misuse, or alteration.
                </p>

                <p>
                  While we work to protect your information,
                  no method of transmission or storage is completely secure.
                </p>
              </CardContent>
            </Card>

            {/* Retention */}
            <Card>
              <CardHeader>
                <CardTitle>
                  5. Data Retention
                </CardTitle>
              </CardHeader>

              <CardContent className="prose prose-gray max-w-none">
                <p>
                  We retain your information only for as long as necessary
                  to provide our services, comply with legal obligations,
                  resolve disputes, and enforce our agreements.
                </p>
              </CardContent>
            </Card>

            {/* Rights */}
            <Card>
              <CardHeader>
                <CardTitle>
                  6. Your Rights
                </CardTitle>
              </CardHeader>

              <CardContent className="prose prose-gray max-w-none">
                <p>
                  Depending on your location and applicable laws,
                  you may have the right to:
                </p>

                <ul>
                  <li>Access your personal information</li>
                  <li>Correct inaccurate information</li>
                  <li>Request deletion of your account or data</li>
                  <li>Withdraw consent for optional communications</li>
                </ul>

                <p>
                  To request account deletion or data access,
                  contact us at hi@kuditime.com.
                </p>
              </CardContent>
            </Card>

            {/* Cookies */}
            <Card>
              <CardHeader>
                <CardTitle>
                  7. Cookies and Analytics
                </CardTitle>
              </CardHeader>

              <CardContent className="prose prose-gray max-w-none">
                <p>
                  We may use cookies, analytics tools,
                  and similar technologies to improve app functionality,
                  monitor performance, and enhance user experience.
                </p>
              </CardContent>
            </Card>

            {/* Children */}
            <Card>
              <CardHeader>
                <CardTitle>
                  8. Children's Privacy
                </CardTitle>
              </CardHeader>

              <CardContent className="prose prose-gray max-w-none">
                <p>
                  KudiTime is not intended for individuals under the age of 18.
                  We do not knowingly collect personal information from children.
                </p>
              </CardContent>
            </Card>

            {/* Changes */}
            <Card>
              <CardHeader>
                <CardTitle>
                  9. Changes to This Policy
                </CardTitle>
              </CardHeader>

              <CardContent className="prose prose-gray max-w-none">
                <p>
                  We may update this Privacy Policy from time to time.
                  Updated versions will be posted on this page with
                  the revised effective date.
                </p>
              </CardContent>
            </Card>

            {/* Contact */}
            <Card>
              <CardHeader>
                <CardTitle>
                  10. Contact Us
                </CardTitle>
              </CardHeader>

              <CardContent className="prose prose-gray max-w-none">
                <p>
                  If you have questions about this Privacy Policy
                  or your personal information, contact us:
                </p>

                <ul>
                  <li><strong>Email:</strong> hi@kuditime.com</li>
                </ul>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPage;