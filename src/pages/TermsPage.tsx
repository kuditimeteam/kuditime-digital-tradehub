
import { Scale, FileText } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const TermsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="hero-gradient text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Scale className="w-16 h-16 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Terms & Conditions
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Please read these terms carefully before using KudiTime's services. 
            By accessing our platform, you agree to be bound by these terms.
          </p>
          <p className="text-white/80 mt-4">Last updated: January 1, 2024</p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <FileText className="w-5 h-5" />
                  <span>1. Acceptance of Terms</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p>
                  By accessing and using KudiTime's services, you acknowledge that you have read, 
                  understood, and agree to be bound by these Terms and Conditions and our Privacy Policy. 
                  If you do not agree to these terms, please do not use our services.
                </p>
                <p>
                  These terms apply to all users of KudiTime, including without limitation users who 
                  are browsers, customers, merchants, contributors of content, or traders.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>2. Description of Services</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p>KudiTime provides the following services:</p>
                <ul>
                  <li>Cryptocurrency trading and exchange services</li>
                  <li>Bill payment services for utilities, telecommunications, and other services</li>
                  <li>Gift card trading and exchange services</li>
                  <li>Digital wallet services</li>
                  <li>Market information and analysis tools</li>
                </ul>
                <p>
                  We reserve the right to modify, suspend, or discontinue any service at any time 
                  without prior notice.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>3. User Eligibility and Account Registration</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p>To use our services, you must:</p>
                <ul>
                  <li>Be at least 18 years old or the age of majority in your jurisdiction</li>
                  <li>Be a resident of Nigeria or other supported countries</li>
                  <li>Provide accurate and complete information during registration</li>
                  <li>Complete our identity verification process (KYC)</li>
                  <li>Comply with all applicable laws and regulations</li>
                </ul>
                <p>
                  You are responsible for maintaining the confidentiality of your account credentials 
                  and for all activities that occur under your account.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>4. Trading and Transaction Terms</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <h4>Cryptocurrency Trading:</h4>
                <ul>
                  <li>All trades are executed at prevailing market rates</li>
                  <li>Trading fees apply as disclosed on our platform</li>
                  <li>Cryptocurrency transactions are irreversible once confirmed</li>
                  <li>We do not guarantee profits or returns from trading activities</li>
                </ul>
                <h4>Bill Payments:</h4>
                <ul>
                  <li>Bill payments are processed in real-time or as specified by service providers</li>
                  <li>Service fees are clearly displayed before transaction confirmation</li>
                  <li>Refunds are subject to third-party provider policies</li>
                </ul>
                <h4>Gift Card Trading:</h4>
                <ul>
                  <li>Gift cards must be legitimate and unused</li>
                  <li>Exchange rates are determined by market conditions</li>
                  <li>Verification processes may take up to 24 hours</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>5. Fees and Charges</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p>
                  KudiTime charges fees for various services as disclosed on our platform. 
                  These may include:
                </p>
                <ul>
                  <li>Trading fees for cryptocurrency transactions</li>
                  <li>Service fees for bill payments</li>
                  <li>Processing fees for gift card exchanges</li>
                  <li>Withdrawal and deposit fees</li>
                </ul>
                <p>
                  All fees are clearly displayed before you complete any transaction. 
                  We reserve the right to modify our fee structure with 30 days' notice.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>6. User Responsibilities and Prohibited Activities</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p>You agree not to:</p>
                <ul>
                  <li>Use our services for any illegal or unauthorized purpose</li>
                  <li>Violate any laws in your jurisdiction (including but not limited to copyright laws)</li>
                  <li>Transmit any worms, viruses, or harmful code</li>
                  <li>Collect or harvest personal information from other users</li>
                  <li>Engage in fraudulent activities or money laundering</li>
                  <li>Manipulate market prices or engage in market abuse</li>
                  <li>Use our services if you are located in a restricted jurisdiction</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>7. Risk Disclosure</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p>
                  <strong>Cryptocurrency trading involves significant risks:</strong>
                </p>
                <ul>
                  <li>Cryptocurrency prices are highly volatile and unpredictable</li>
                  <li>Past performance does not guarantee future results</li>
                  <li>You may lose some or all of your invested capital</li>
                  <li>Regulatory changes may affect cryptocurrency markets</li>
                  <li>Technical issues may impact trading availability</li>
                </ul>
                <p>
                  You should only trade with money you can afford to lose and consider 
                  seeking independent financial advice.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>8. Limitation of Liability</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p>
                  To the maximum extent permitted by law, KudiTime shall not be liable for:
                </p>
                <ul>
                  <li>Any direct, indirect, incidental, or consequential damages</li>
                  <li>Loss of profits, data, or business opportunities</li>
                  <li>Service interruptions or technical failures</li>
                  <li>Third-party actions or failures</li>
                  <li>Market volatility or trading losses</li>
                </ul>
                <p>
                  Our total liability to you for any claim shall not exceed the amount 
                  of fees paid to us in the 12 months preceding the claim.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>9. Termination</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p>
                  We may terminate or suspend your account and access to our services at our 
                  sole discretion, without prior notice, for any reason including:
                </p>
                <ul>
                  <li>Breach of these Terms and Conditions</li>
                  <li>Fraudulent or suspicious activity</li>
                  <li>Violation of applicable laws</li>
                  <li>Extended periods of inactivity</li>
                </ul>
                <p>
                  Upon termination, you may withdraw your funds subject to applicable 
                  fees and verification requirements.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>10. Governing Law and Dispute Resolution</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p>
                  These Terms and Conditions are governed by the laws of the Federal Republic 
                  of Nigeria. Any disputes arising from these terms or your use of our services 
                  shall be resolved through:
                </p>
                <ol>
                  <li>Good faith negotiations between the parties</li>
                  <li>Mediation if negotiations fail</li>
                  <li>Arbitration under the rules of the Lagos Court of Arbitration</li>
                </ol>
                <p>
                  The courts of Lagos State, Nigeria shall have exclusive jurisdiction 
                  over any disputes that cannot be resolved through arbitration.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>11. Changes to Terms</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p>
                  We reserve the right to modify these Terms and Conditions at any time. 
                  Changes will be effective immediately upon posting on our website. 
                  We will notify users of material changes via email or platform notifications.
                </p>
                <p>
                  Your continued use of our services after changes are posted constitutes 
                  acceptance of the new terms.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>12. Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p>
                  If you have any questions about these Terms and Conditions, please contact us:
                </p>
                <ul>
                  <li>Email: legal@kuditime.com</li>
                  <li>Phone: +234 800 KUDITIME</li>
                  <li>Address: KudiTime Limited, Lagos, Nigeria</li>
                </ul>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsPage;
