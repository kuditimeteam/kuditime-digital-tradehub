
import { Calendar, User, ArrowRight, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const blogPosts = [
  {
    title: 'Bitcoin Hits New All-Time High: What This Means for Nigerian Traders',
    excerpt: 'Explore the implications of Bitcoin\'s latest milestone and how Nigerian crypto traders can capitalize on this momentum.',
    author: 'Adebayo Johnson',
    date: '2024-01-15',
    category: 'Market Analysis',
    readTime: '5 min read',
    featured: true
  },
  {
    title: 'Complete Guide to Cryptocurrency Trading for Beginners in Nigeria',
    excerpt: 'Everything you need to know to start your crypto trading journey safely and profitably in Nigeria.',
    author: 'Fatima Al-Hassan',
    date: '2024-01-12',
    category: 'Education',
    readTime: '8 min read',
    featured: true
  },
  {
    title: 'How to Pay Your DSTV Subscription Using Cryptocurrency',
    excerpt: 'Step-by-step guide on using your crypto gains to pay for DSTV and other bills through KudiTime.',
    author: 'Chinedu Okafor',
    date: '2024-01-10',
    category: 'Tutorials',
    readTime: '4 min read',
    featured: false
  },
  {
    title: 'Gift Card Trading: Maximizing Your Returns in 2024',
    excerpt: 'Learn advanced strategies to get the best rates when trading gift cards on KudiTime.',
    author: 'Aisha Mohammed',
    date: '2024-01-08',
    category: 'Tips & Tricks',
    readTime: '6 min read',
    featured: false
  },
  {
    title: 'Understanding Blockchain Technology: A Nigerian Perspective',
    excerpt: 'Demystifying blockchain technology and its applications in the Nigerian financial ecosystem.',
    author: 'Ibrahim Suleiman',
    date: '2024-01-05',
    category: 'Technology',
    readTime: '7 min read',
    featured: false
  },
  {
    title: 'Regulatory Updates: CBN\'s Latest Stance on Cryptocurrency',
    excerpt: 'Breaking down the Central Bank of Nigeria\'s updated guidelines for cryptocurrency operations.',
    author: 'Blessing Eze',
    date: '2024-01-03',
    category: 'Regulation',
    readTime: '5 min read',
    featured: false
  },
  {
    title: 'Top 5 Security Tips for Crypto Traders in Nigeria',
    excerpt: 'Essential security practices to protect your cryptocurrency investments and trading accounts.',
    author: 'Yusuf Aliyu',
    date: '2024-01-01',
    category: 'Security',
    readTime: '6 min read',
    featured: false
  },
  {
    title: 'DeFi Explained: Decentralized Finance Opportunities for Nigerians',
    excerpt: 'Understanding decentralized finance and how Nigerians can participate in this growing sector.',
    author: 'Kemi Adebayo',
    date: '2023-12-28',
    category: 'DeFi',
    readTime: '9 min read',
    featured: false
  }
];

const categories = ['All', 'Market Analysis', 'Education', 'Tutorials', 'Tips & Tricks', 'Technology', 'Regulation', 'Security', 'DeFi'];

const BlogPage = () => {
  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <TrendingUp className="w-16 h-16 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            KudiTime Blog
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Stay updated with the latest cryptocurrency news, trading tips, market analysis, 
            and educational content tailored for the Nigerian crypto community.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                size="sm"
                className={index === 0 ? "bg-primary hover:bg-primary/90" : ""}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Articles</h2>
            <p className="text-gray-600">Don't miss these important updates and insights</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredPosts.map((post, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="h-48 bg-gradient-to-r from-primary to-primary/70 rounded-t-lg"></div>
                <CardHeader>
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-2">
                    <span className="bg-primary text-white px-2 py-1 rounded text-xs">
                      {post.category}
                    </span>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <span>{post.readTime}</span>
                  </div>
                  <CardTitle className="text-xl hover:text-primary transition-colors cursor-pointer">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-600">{post.author}</span>
                    </div>
                    <Button variant="ghost" size="sm" className="text-primary">
                      Read More <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest Articles</h2>
            <p className="text-gray-600">Stay informed with our latest insights and updates</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <div className="h-32 bg-gradient-to-r from-gray-400 to-gray-500 rounded-t-lg"></div>
                <CardHeader className="pb-2">
                  <div className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
                    <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                      {post.category}
                    </span>
                    <span>{post.readTime}</span>
                  </div>
                  <CardTitle className="text-lg hover:text-primary transition-colors cursor-pointer leading-tight">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1 text-xs text-gray-500">
                      <Calendar className="w-3 h-3" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <Button variant="ghost" size="sm" className="text-primary p-0 h-auto">
                      Read More <ArrowRight className="w-3 h-3 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl mb-8 text-white/90">
            Subscribe to our newsletter for the latest crypto news and trading insights
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900"
            />
            <Button variant="secondary" size="lg" className="px-8">
              Subscribe
            </Button>
          </div>
          <p className="text-white/60 text-sm mt-4">
            No spam, only valuable insights. Unsubscribe anytime.
          </p>
        </div>
      </section>

      {/* Popular Topics */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Popular Topics</h2>
            <p className="text-gray-600">Explore articles by topic</p>
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.slice(1).map((category, index) => (
              <Button
                key={index}
                variant="outline"
                className="hover:bg-primary hover:text-white"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
