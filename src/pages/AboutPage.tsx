import { Shield, Users, Globe, Award, CheckCircle, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const achievements = [
  {
    icon: Shield,
    title: 'Licensed & Regulated',
    description: 'Fully licensed by the Central Bank of Nigeria and compliant with international standards'
  },
  {
    icon: Users,
    title: '50,000+ Active Users',
    description: 'Trusted by thousands of Nigerians for their crypto and financial needs'
  },
  {
    icon: Globe,
    title: 'Global Recognition',
    description: 'Recognized as a leading fintech company in West Africa'
  },
  {
    icon: Award,
    title: 'Industry Awards',
    description: 'Winner of Best Crypto Exchange Nigeria 2023 & Fintech Innovation Award'
  }
];

const milestones = [
  { year: '2020', event: 'KudiTime founded with a vision to democratize crypto trading in Nigeria' },
  { year: '2021', event: 'Launched mobile app and reached 10,000 users milestone' },
  { year: '2022', event: 'Obtained regulatory license and expanded to bill payment services' },
  { year: '2023', event: 'Processed over ₦1 billion in crypto transactions' },
  { year: '2024', event: 'Launched gift card trading and reached 50,000+ users' }
];

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="hero-gradient text-white py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            About KudiTime
          </h1>
          <p className="text-lg md:text-xl text-black/80 max-w-3xl mx-auto leading-relaxed">
            We're building the future of digital finance in Nigeria. Licensed, regulated, 
            and trusted by over 50,000 customers nationwide.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            <Card className="border-l-4 border-l-primary bg-white">
              <CardContent className="p-4 md:p-6">
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">Our Mission</h2>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  To democratize access to cryptocurrency trading and digital financial services 
                  across Nigeria, making it simple, secure, and affordable for everyone to 
                  participate in the global digital economy.
                </p>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-l-primary bg-white">
              <CardContent className="p-4 md:p-6">
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">Our Vision</h2>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  To become Africa's leading digital finance platform, empowering millions 
                  of people with cutting-edge financial technology and innovative solutions 
                  that bridge traditional and digital finance.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why KudiTime */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4">Why Choose KudiTime?</h2>
            <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
              We combine cutting-edge technology with regulatory compliance to deliver 
              the most trusted crypto trading experience in Nigeria.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-4 md:p-6">
                  <div className="flex items-start space-x-3 md:space-x-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <achievement.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-1 md:mb-2">{achievement.title}</h3>
                      <p className="text-sm md:text-base text-gray-600">{achievement.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-12 md:py-16 green-gradient text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4">Our Journey</h2>
            <p className="text-sm md:text-base text-gray-600">Key milestones in KudiTime's growth and development</p>
          </div>
          <div className="space-y-6 md:space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start space-x-3 md:space-x-4">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm md:text-base">{milestone.year}</span>
                </div>
                <div className="flex-1 pt-2 md:pt-2">
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">{milestone.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance & Security */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4">Compliance & Security</h2>
            <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
              KudiTime operates under strict regulatory oversight and maintains the highest 
              security standards to protect our customers.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <Card className="text-center bg-white border border-gray-200">
              <CardContent className="p-4 md:p-6">
                <Shield className="w-10 h-10 md:w-12 md:h-12 text-primary mx-auto mb-3 md:mb-4" />
                <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-1 md:mb-2">Regulatory Compliance</h3>
                <p className="text-sm text-gray-600">
                  Licensed by CBN and compliant with international AML/KYC standards
                </p>
              </CardContent>
            </Card>
            <Card className="text-center bg-white border border-gray-200">
              <CardContent className="p-4 md:p-6">
                <CheckCircle className="w-10 h-10 md:w-12 md:h-12 text-primary mx-auto mb-3 md:mb-4" />
                <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-1 md:mb-2">Data Protection</h3>
                <p className="text-sm text-gray-600">
                  ISO 27001 certified with bank-grade encryption and security protocols
                </p>
              </CardContent>
            </Card>
            <Card className="text-center bg-white border border-gray-200">
              <CardContent className="p-4 md:p-6">
                <TrendingUp className="w-10 h-10 md:w-12 md:h-12 text-primary mx-auto mb-3 md:mb-4" />
                <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-1 md:mb-2">Transparency</h3>
                <p className="text-sm text-gray-600">
                  Regular audits and transparent reporting of all business operations
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Global Recognition */}
      <section className="py-12 md:py-16 green-gradient text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Globally Recognized Excellence</h2>
          <p className="text-base md:text-xl text-white/90 mb-6 md:mb-8 max-w-2xl mx-auto">
            KudiTime has gained international recognition for its innovative approach to 
            cryptocurrency trading and digital financial services in emerging markets.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-1 md:mb-2">Licensed</h3>
              <p className="text-sm md:text-base text-white/80">By Central Bank of Nigeria</p>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-1 md:mb-2">Certified</h3>
              <p className="text-sm md:text-base text-white/80">ISO 27001 Security Standards</p>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-1 md:mb-2">Awarded</h3>
              <p className="text-sm md:text-base text-white/80">Best Crypto Exchange 2023</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
