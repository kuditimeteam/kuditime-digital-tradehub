
import { Briefcase, Users, TrendingUp, Heart, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const jobOpenings = [
  {
    title: 'Senior Blockchain Developer',
    department: 'Engineering',
    type: 'Full-time',
    location: 'Lagos, Nigeria',
    experience: '3-5 years',
    description: 'Build and maintain our core blockchain infrastructure and smart contract systems.',
    requirements: ['Solidity proficiency', 'Ethereum development', 'DeFi protocols', 'React/Node.js']
  },
  {
    title: 'Product Manager - Crypto Trading',
    department: 'Product',
    type: 'Full-time',
    location: 'Lagos, Nigeria',
    experience: '2-4 years',
    description: 'Lead product development for our cryptocurrency trading platform and user experience.',
    requirements: ['Product management', 'Crypto trading knowledge', 'User research', 'Data analysis']
  },
  {
    title: 'Customer Success Manager',
    department: 'Customer Success',
    type: 'Full-time',
    location: 'Abuja, Nigeria',
    experience: '1-3 years',
    description: 'Ensure customer satisfaction and drive adoption of our financial services.',
    requirements: ['Customer service', 'Financial services', 'Communication skills', 'Problem solving']
  },
  {
    title: 'Compliance Officer',
    department: 'Legal & Compliance',
    type: 'Full-time',
    location: 'Lagos, Nigeria',
    experience: '2-5 years',
    description: 'Ensure regulatory compliance and manage relationships with financial regulators.',
    requirements: ['Financial regulation', 'AML/KYC', 'Legal knowledge', 'Risk management']
  },
  {
    title: 'UI/UX Designer',
    department: 'Design',
    type: 'Full-time',
    location: 'Remote',
    experience: '2-4 years',
    description: 'Design intuitive user interfaces for our web and mobile applications.',
    requirements: ['UI/UX Design', 'Figma', 'User research', 'Mobile design', 'Prototyping']
  },
  {
    title: 'DevOps Engineer',
    department: 'Engineering',
    type: 'Full-time',
    location: 'Lagos, Nigeria',
    experience: '3-6 years',
    description: 'Manage our cloud infrastructure and deployment pipelines for high-availability systems.',
    requirements: ['AWS/Azure', 'Kubernetes', 'CI/CD', 'Monitoring', 'Security']
  }
];

const benefits = [
  {
    icon: TrendingUp,
    title: 'Competitive Salary',
    description: 'Above-market compensation with performance bonuses'
  },
  {
    icon: Heart,
    title: 'Health Insurance',
    description: 'Complete medical, dental, and vision coverage'
  },
  {
    icon: Users,
    title: 'Professional Growth',
    description: 'Learning stipend and conference attendance support'
  },
  {
    icon: Clock,
    title: 'Flexible Hours',
    description: 'Work-life balance with flexible scheduling'
  }
];

const values = [
  {
    title: 'Innovation First',
    description: 'We embrace cutting-edge technology to solve real-world financial problems'
  },
  {
    title: 'Customer Obsession',
    description: 'Our customers\' success drives every decision we make'
  },
  {
    title: 'Transparency',
    description: 'We operate with complete honesty and openness in all our dealings'
  },
  {
    title: 'Excellence',
    description: 'We strive for the highest quality in everything we deliver'
  }
];

const CareersPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="hero-gradient text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Briefcase className="w-16 h-16 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Join Our Team
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Help us build the future of digital finance in Nigeria. Join a team of passionate 
            professionals working to democratize access to cryptocurrency and financial services.
          </p>
        </div>
      </section>

      {/* Why KudiTime */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Work at KudiTime?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join Nigeria's leading fintech company and be part of a mission that's transforming 
              how millions of people access financial services.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-gray-600">The principles that guide everything we do</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-l-4 border-l-primary">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Open Positions</h2>
            <p className="text-gray-600">Join our growing team and help shape the future of fintech in Nigeria</p>
          </div>
          <div className="space-y-6">
            {jobOpenings.map((job, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="mb-4 md:mb-0">
                      <CardTitle className="text-xl text-gray-900 mb-2">{job.title}</CardTitle>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                        <div className="flex items-center space-x-1">
                          <Briefcase className="w-4 h-4" />
                          <span>{job.department}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{job.type}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>{job.location}</span>
                        </div>
                        <span>Experience: {job.experience}</span>
                      </div>
                    </div>
                    <Button className="bg-primary hover:bg-primary/90">
                      Apply Now
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{job.description}</p>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Key Requirements:</h4>
                    <div className="flex flex-wrap gap-2">
                      {job.requirements.map((req, reqIndex) => (
                        <span key={reqIndex} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                          {req}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Application Process</h2>
            <p className="text-gray-600">Here's what to expect when you apply</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Apply Online</h3>
              <p className="text-gray-600 text-sm">Submit your application and resume through our portal</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Initial Screening</h3>
              <p className="text-gray-600 text-sm">Phone or video call with our recruitment team</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Technical Interview</h3>
              <p className="text-gray-600 text-sm">Skills assessment and team interviews</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Final Decision</h3>
              <p className="text-gray-600 text-sm">Reference checks and offer discussion</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Join Our Mission?</h2>
          <p className="text-xl mb-8 text-white/90">
            Don't see a perfect match? We're always looking for exceptional talent.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
              View All Positions
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-primary">
              Send Us Your Resume
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;
