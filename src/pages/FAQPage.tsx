
import { HelpCircle, Plus, Minus } from 'lucide-react';
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const faqData = [
  {
    category: 'General',
    questions: [
      {
        question: 'What is KudiTime?',
        answer: 'KudiTime is Nigeria\'s leading cryptocurrency exchange and bill payment platform. We allow users to buy/sell cryptocurrencies, pay bills, and trade gift cards with competitive rates and instant processing.'
      },
      {
        question: 'Is KudiTime licensed and regulated?',
        answer: 'Yes, KudiTime is fully licensed by the Central Bank of Nigeria and complies with all relevant financial regulations. We maintain the highest standards of compliance and security.'
      },
      {
        question: 'How secure is KudiTime?',
        answer: 'KudiTime uses bank-grade security measures including SSL encryption, two-factor authentication, cold storage for cryptocurrencies, and regular security audits to protect your funds and data.'
      }
    ]
  },
  {
    category: 'Crypto Trading',
    questions: [
      {
        question: 'Which cryptocurrencies do you support?',
        answer: 'We support major cryptocurrencies including Bitcoin (BTC), Ethereum (ETH), Tether (USDT), BNB, Solana (SOL), USD Coin (USDC), and many others. Check our trading page for the complete list.'
      },
      {
        question: 'What are your trading fees?',
        answer: 'Our trading fees are highly competitive and transparent. Fees vary by cryptocurrency and transaction volume. Check our rate calculator for current fees and rates.'
      },
      {
        question: 'How long do crypto transactions take?',
        answer: 'Crypto transactions are processed instantly once confirmed on the blockchain. Bitcoin transactions typically take 10-30 minutes, while Ethereum and other cryptocurrencies usually take 2-5 minutes.'
      },
      {
        question: 'What is the minimum amount I can trade?',
        answer: 'You can start trading with as little as ₦1,000 worth of cryptocurrency. There are no maximum limits for verified accounts.'
      }
    ]
  },
  {
    category: 'Bill Payments',
    questions: [
      {
        question: 'Which bills can I pay on KudiTime?',
        answer: 'You can pay for airtime, data bundles, electricity bills, TV subscriptions (DSTV, GOtv), internet bills, betting/gaming platforms, and many other services.'
      },
      {
        question: 'Are there any fees for bill payments?',
        answer: 'We offer competitive rates for all bill payments with transparent pricing. There are no hidden fees - you see exactly what you pay upfront.'
      },
      {
        question: 'How quickly are bills processed?',
        answer: 'Most bills are processed instantly. Airtime and data are credited immediately, while some utility bills may take up to 24 hours depending on the service provider.'
      }
    ]
  },
  {
    category: 'Gift Cards',
    questions: [
      {
        question: 'Which gift cards do you accept?',
        answer: 'We accept gift cards from major brands including Amazon, iTunes, Google Play, Steam, Netflix, Spotify, PlayStation, Xbox, and many others from various countries.'
      },
      {
        question: 'How are gift card rates determined?',
        answer: 'Gift card rates are determined by market demand, card type, denomination, and country of origin. US cards typically have the best rates. Check our rate calculator for current rates.'
      },
      {
        question: 'How long does gift card verification take?',
        answer: 'Our AI-powered verification system processes most gift cards within 2-5 minutes. Complex cases may take up to 24 hours for manual review.'
      },
      {
        question: 'What happens if my gift card is declined?',
        answer: 'If a gift card is declined, we\'ll notify you with the reason. Common reasons include invalid codes, already used cards, or cards from unsupported regions. Declined cards are returned to you immediately.'
      }
    ]
  },
  {
    category: 'Account & Verification',
    questions: [
      {
        question: 'How do I create an account?',
        answer: 'Creating an account is simple. Visit our website or download our mobile app, click "Sign Up," provide your basic information, verify your email and phone number, and complete the KYC process.'
      },
      {
        question: 'What documents do I need for verification?',
        answer: 'You need a valid government-issued ID (National ID, International Passport, or Driver\'s License), proof of address (utility bill or bank statement), and a clear selfie for identity verification.'
      },
      {
        question: 'How long does account verification take?',
        answer: 'Account verification typically takes 10-30 minutes for standard accounts. Business accounts may take 1-3 business days depending on the complexity of the verification.'
      },
      {
        question: 'Can I use KudiTime without verification?',
        answer: 'Limited features are available for unverified accounts, but full verification is required for crypto trading, higher transaction limits, and all premium features.'
      }
    ]
  }
];

const FAQPage = () => {
  const [openQuestions, setOpenQuestions] = useState<Record<string, boolean>>({});

  const toggleQuestion = (questionId: string) => {
    setOpenQuestions(prev => ({
      ...prev,
      [questionId]: !prev[questionId]
    }));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <HelpCircle className="w-16 h-16 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Find answers to common questions about KudiTime's services, 
            security, and how to get started with crypto trading and bill payments.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqData.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-primary">
                {category.category}
              </h2>
              <div className="space-y-4">
                {category.questions.map((faq, questionIndex) => {
                  const questionId = `${categoryIndex}-${questionIndex}`;
                  const isOpen = openQuestions[questionId];
                  
                  return (
                    <Card key={questionIndex} className="border-l-4 border-l-primary">
                      <CardContent className="p-0">
                        <Button
                          variant="ghost"
                          className="w-full justify-between text-left p-6 h-auto hover:bg-gray-50"
                          onClick={() => toggleQuestion(questionId)}
                        >
                          <span className="font-semibold text-gray-900 pr-4">
                            {faq.question}
                          </span>
                          {isOpen ? (
                            <Minus className="w-5 h-5 text-primary flex-shrink-0" />
                          ) : (
                            <Plus className="w-5 h-5 text-primary flex-shrink-0" />
                          )}
                        </Button>
                        {isOpen && (
                          <div className="px-6 pb-6">
                            <p className="text-gray-600 leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Still Have Questions?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Can't find the answer you're looking for? Our support team is here to help you 24/7.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Contact Support
            </Button>
            <Button size="lg" variant="outline">
              Join Our Community
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-12 bg-white border-t">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Email Support</h3>
              <p className="text-gray-600">support@kuditime.com</p>
              <p className="text-sm text-gray-500">Response within 2 hours</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Live Chat</h3>
              <p className="text-gray-600">Available 24/7</p>
              <p className="text-sm text-gray-500">Instant responses</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Phone Support</h3>
              <p className="text-gray-600">+234 800 KUDITIME</p>
              <p className="text-sm text-gray-500">Mon-Fri 8AM-6PM</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;
