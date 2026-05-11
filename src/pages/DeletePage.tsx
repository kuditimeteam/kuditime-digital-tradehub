import { Shield, Eye, Lock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const DeleteAccountPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Shield className="w-16 h-16 mx-auto mb-6" />

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Request Account Deletion
          </h1>

          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            You may request deletion of your KudiTime account and
            associated personal data at any time.
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

            {/* Request */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Eye className="w-5 h-5" />
                  <span>1. How to Request Account Deletion</span>
                </CardTitle>
              </CardHeader>

              <CardContent className="prose prose-gray max-w-none">
                <p>
                  To request deletion of your KudiTime account,
                  please send an email using the email address
                  linked to your account.
                </p>

                <p>
                  Send your request to:
                </p>

                <div className="bg-gray-100 rounded-lg p-4 mt-4">
                  <p className="font-semibold text-lg">
                    hi@kuditime.com
                  </p>
                </div>

                <a
                  href="mailto:hi@kuditime.com?subject=Account%20Deletion%20Request"
                  className="inline-flex items-center justify-center mt-6 px-6 py-3 rounded-lg bg-primary text-white font-medium hover:opacity-90 transition no-underline"
                >
                  Send Deletion Request
                </a>
              </CardContent>
            </Card>

            {/* Deleted Data */}
            <Card>
              <CardHeader>
                <CardTitle>
                  2. What Data Will Be Deleted
                </CardTitle>
              </CardHeader>

              <CardContent className="prose prose-gray max-w-none">
                <p>
                  When your deletion request is approved,
                  we will delete or anonymize personal data
                  associated with your account, including:
                </p>

                <ul>
                  <li>Profile information</li>
                  <li>Account credentials</li>
                  <li>Stored personal information</li>
                  <li>App usage information linked to your account</li>
                </ul>
              </CardContent>
            </Card>

            {/* Retained Data */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Lock className="w-5 h-5" />
                  <span>3. Data That May Be Retained</span>
                </CardTitle>
              </CardHeader>

              <CardContent className="prose prose-gray max-w-none">
                <p>
                  Certain information may be retained where required
                  by law, fraud prevention obligations,
                  financial regulations, or dispute resolution purposes.
                </p>

                <p>
                  Retained data will only be stored for the period
                  required by applicable laws or regulatory authorities.
                </p>
              </CardContent>
            </Card>

            {/* Processing */}
            <Card>
              <CardHeader>
                <CardTitle>
                  4. Processing Time
                </CardTitle>
              </CardHeader>

              <CardContent className="prose prose-gray max-w-none">
                <p>
                  We aim to process verified deletion requests within
                  7 to 30 business days depending on legal
                  and compliance obligations.
                </p>
              </CardContent>
            </Card>

            {/* Contact */}
            <Card>
              <CardHeader>
                <CardTitle>
                  5. Contact Us
                </CardTitle>
              </CardHeader>

              <CardContent className="prose prose-gray max-w-none">
                <p>
                  If you have questions regarding account deletion
                  or your personal information, contact us:
                </p>

                <ul>
                  <li>
                    <strong>Email:</strong> hi@kuditime.com
                  </li>
                </ul>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>
    </div>
  );
};

export default DeleteAccountPage;