import { Cookie, Settings, Info } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const CookiesPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="hero-gradient text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Cookie className="w-16 h-16 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Cookie Policy
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            This policy explains how KudiTime uses cookies and similar technologies 
            to improve your experience on our website and mobile applications.
          </p>
          <p className="text-white/80 mt-4">Last updated: January 1, 2024</p>
        </div>
      </section>

      {/* Cookie Policy Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Info className="w-5 h-5" />
                  <span>1. What Are Cookies?</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p>
                  Cookies are small text files that are stored on your device (computer, tablet, or mobile) 
                  when you visit a website. They are widely used to make websites work more efficiently 
                  and to provide information to website owners.
                </p>
                <p>
                  Cookies help us understand how you use our website, remember your preferences, 
                  and provide you with a better, more personalized experience.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>2. Types of Cookies We Use</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <h4>Essential Cookies (Always Active)</h4>
                <p>
                  These cookies are necessary for the website to function properly and cannot be disabled. 
                  They are usually set in response to actions you take, such as logging in or filling out forms.
                </p>
                <ul>
                  <li>Authentication and security cookies</li>
                  <li>Session management cookies</li>
                  <li>Load balancing cookies</li>
                  <li>User interface customization cookies</li>
                </ul>

                <h4>Performance and Analytics Cookies</h4>
                <p>
                  These cookies help us understand how visitors interact with our website by collecting 
                  and reporting information anonymously.
                </p>
                <ul>
                  <li>Google Analytics cookies</li>
                  <li>Page load time tracking</li>
                  <li>Error reporting cookies</li>
                  <li>Usage statistics cookies</li>
                </ul>

                <h4>Functional Cookies</h4>
                <p>
                  These cookies remember your preferences and choices to provide enhanced functionality 
                  and personalization.
                </p>
                <ul>
                  <li>Language preference cookies</li>
                  <li>Currency selection cookies</li>
                  <li>Theme preference cookies</li>
                  <li>Form data cookies</li>
                </ul>

                <h4>Marketing and Advertising Cookies</h4>
                <p>
                  These cookies are used to deliver relevant advertisements and track the effectiveness 
                  of our marketing campaigns.
                </p>
                <ul>
                  <li>Social media integration cookies</li>
                  <li>Advertising network cookies</li>
                  <li>Remarketing cookies</li>
                  <li>Conversion tracking cookies</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>3. How We Use Cookies</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p>We use cookies for the following purposes:</p>
                
                <h4>Security and Authentication</h4>
                <ul>
                  <li>Keep you logged in to your account</li>
                  <li>Protect against unauthorized access</li>
                  <li>Prevent cross-site request forgery attacks</li>
                  <li>Detect and prevent fraudulent activity</li>
                </ul>

                <h4>Website Functionality</h4>
                <ul>
                  <li>Remember your language and currency preferences</li>
                  <li>Store items in your trading watchlist</li>
                  <li>Maintain your session across different pages</li>
                  <li>Provide customized user interface elements</li>
                </ul>

                <h4>Performance Monitoring</h4>
                <ul>
                  <li>Monitor website speed and performance</li>
                  <li>Identify and fix technical issues</li>
                  <li>Optimize website loading times</li>
                  <li>Track feature usage and effectiveness</li>
                </ul>

                <h4>Analytics and Insights</h4>
                <ul>
                  <li>Understand how users navigate our website</li>
                  <li>Analyze popular features and content</li>
                  <li>Measure the effectiveness of our services</li>
                  <li>Improve user experience based on usage patterns</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>4. Third-Party Cookies</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p>
                  Some cookies on our website are set by third-party services that appear on our pages. 
                  We use these services to enhance your experience:
                </p>

                <h4>Analytics Services</h4>
                <ul>
                  <li><strong>Google Analytics:</strong> Helps us understand website traffic and user behavior</li>
                  <li><strong>Hotjar:</strong> Provides heatmaps and user session recordings</li>
                  <li><strong>Mixpanel:</strong> Tracks user interactions and events</li>
                </ul>

                <h4>Social Media Integration</h4>
                <ul>
                  <li><strong>Facebook:</strong> Social sharing and advertising</li>
                  <li><strong>Twitter:</strong> Social sharing and embedded content</li>
                  <li><strong>LinkedIn:</strong> Professional networking and sharing</li>
                </ul>

                <h4>Customer Support and Communication</h4>
                <ul>
                  <li><strong>Intercom:</strong> Live chat and customer support</li>
                  <li><strong>Zendesk:</strong> Help desk and ticket management</li>
                </ul>

                <h4>Advertising and Marketing</h4>
                <ul>
                  <li><strong>Google Ads:</strong> Advertising and remarketing</li>
                  <li><strong>Facebook Pixel:</strong> Advertising optimization</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Settings className="w-5 h-5" />
                  <span>5. Managing Your Cookie Preferences</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p>You have several options for managing cookies:</p>

                <h4>Browser Settings</h4>
                <p>Most web browsers allow you to control cookies through their settings:</p>
                <ul>
                  <li><strong>Chrome:</strong> Settings {' > '} Privacy and Security {' > '} Cookies and other site data</li>
                  <li><strong>Firefox:</strong> Options {' > '} Privacy & Security {' > '} Cookies and Site Data</li>
                  <li><strong>Safari:</strong> Preferences {' > '} Privacy {' > '} Cookies and website data</li>
                  <li><strong>Edge:</strong> Settings {' > '} Cookies and site permissions</li>
                </ul>

                <h4>Cookie Preference Center</h4>
                <p>
                  You can adjust your cookie preferences using our Cookie Preference Center, 
                  which allows you to enable or disable different categories of cookies.
                </p>

                <div className="bg-gray-50 p-4 rounded-lg my-4">
                  <Button className="bg-primary hover:bg-primary/90">
                    Manage Cookie Preferences
                  </Button>
                </div>

                <h4>Opt-Out Links</h4>
                <p>You can opt out of specific third-party cookies:</p>
                <ul>
                  <li><a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">Google Analytics Opt-out</a></li>
                  <li><a href="https://www.facebook.com/help/568137493302217" target="_blank" rel="noopener noreferrer">Facebook Opt-out</a></li>
                  <li><a href="https://optout.aboutads.info/" target="_blank" rel="noopener noreferrer">Digital Advertising Alliance Opt-out</a></li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>6. Cookie Retention</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p>Different cookies have different lifespans:</p>

                <h4>Session Cookies</h4>
                <ul>
                  <li>Temporary cookies that expire when you close your browser</li>
                  <li>Used for essential website functionality</li>
                  <li>Not stored on your device permanently</li>
                </ul>

                <h4>Persistent Cookies</h4>
                <ul>
                  <li>Remain on your device for a set period or until manually deleted</li>
                  <li>Duration ranges from 30 days to 2 years depending on purpose</li>
                  <li>Used for preferences, analytics, and marketing</li>
                </ul>

                <table className="w-full border-collapse border border-gray-300 mt-4">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 p-2 text-left">Cookie Type</th>
                      <th className="border border-gray-300 p-2 text-left">Retention Period</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-2">Authentication</td>
                      <td className="border border-gray-300 p-2">Session or 30 days</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2">Preferences</td>
                      <td className="border border-gray-300 p-2">1 year</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2">Analytics</td>
                      <td className="border border-gray-300 p-2">2 years</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2">Marketing</td>
                      <td className="border border-gray-300 p-2">30 days to 1 year</td>
                    </tr>
                  </tbody>
                </table>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>7. Impact of Disabling Cookies</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p>
                  While you can disable cookies, doing so may affect your experience on our website:
                </p>

                <h4>Essential Cookies (Cannot be disabled)</h4>
                <ul>
                  <li>Website may not function properly</li>
                  <li>Unable to maintain secure login sessions</li>
                  <li>Loss of security features</li>
                </ul>

                <h4>Performance Cookies</h4>
                <ul>
                  <li>We cannot improve website performance</li>
                  <li>Difficulty identifying and fixing issues</li>
                  <li>Less optimized user experience</li>
                </ul>

                <h4>Functional Cookies</h4>
                <ul>
                  <li>Settings and preferences will not be remembered</li>
                  <li>Need to re-enter information repeatedly</li>
                  <li>Less personalized experience</li>
                </ul>

                <h4>Marketing Cookies</h4>
                <ul>
                  <li>Advertisements may be less relevant</li>
                  <li>May see the same ads repeatedly</li>
                  <li>Cannot measure marketing effectiveness</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>8. Updates to This Policy</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p>
                  We may update this Cookie Policy from time to time to reflect changes in our practices, 
                  technologies, or legal requirements. When we make changes:
                </p>
                <ul>
                  <li>We will post the updated policy on this page</li>
                  <li>We will update the "Last updated" date</li>
                  <li>For significant changes, we will notify you via email or website banner</li>
                  <li>Changes take effect immediately upon posting</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>9. Contact Us</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p>
                  If you have questions about our use of cookies or this Cookie Policy, 
                  please contact us:
                </p>
                <ul>
                  <li><strong>Email:</strong> privacy@kuditime.com</li>
                  <li><strong>Phone:</strong> +234 800 KUDITIME</li>
                  <li><strong>Address:</strong> KudiTime Limited, Lagos, Nigeria</li>
                </ul>
                <p>
                  We will respond to your inquiries within 5 business days.
                </p>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      {/* Cookie Preference CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Manage Your Cookie Preferences</h2>
          <p className="text-gray-600 mb-8">
            You can change your cookie preferences at any time using our preference center
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Open Cookie Settings
          </Button>
        </div>
      </section>
    </div>
  );
};

export default CookiesPage;
