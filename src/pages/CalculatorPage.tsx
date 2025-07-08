
import { useState } from 'react';
import { Calculator, ArrowUpDown, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const cryptoRates = {
  BTC: { buy: 45000000, sell: 44500000, name: 'Bitcoin' },
  ETH: { buy: 2800000, sell: 2750000, name: 'Ethereum' },
  USDT: { buy: 1650, sell: 1645, name: 'Tether' },
  BNB: { buy: 420000, sell: 415000, name: 'BNB' },
  SOL: { buy: 180000, sell: 175000, name: 'Solana' },
  USDC: { buy: 1645, sell: 1640, name: 'USD Coin' }
};

const giftCardRates = {
  'amazon': { rate: 850, name: 'Amazon' },
  'itunes': { rate: 780, name: 'iTunes' },
  'google-play': { rate: 750, name: 'Google Play' },
  'steam': { rate: 720, name: 'Steam' },
  'netflix': { rate: 680, name: 'Netflix' },
  'spotify': { rate: 650, name: 'Spotify' }
};

const CalculatorPage = () => {
  const [cryptoAmount, setCryptoAmount] = useState('');
  const [selectedCrypto, setSelectedCrypto] = useState('');
  const [cryptoType, setCryptoType] = useState('buy');
  const [giftCardAmount, setGiftCardAmount] = useState('');
  const [selectedGiftCard, setSelectedGiftCard] = useState('');

  const calculateCrypto = () => {
    if (!cryptoAmount || !selectedCrypto) return 0;
    const rate = cryptoRates[selectedCrypto as keyof typeof cryptoRates];
    if (!rate) return 0;
    const amount = parseFloat(cryptoAmount);
    return cryptoType === 'buy' ? amount * rate.buy : amount * rate.sell;
  };

  const calculateGiftCard = () => {
    if (!giftCardAmount || !selectedGiftCard) return 0;
    const rate = giftCardRates[selectedGiftCard as keyof typeof giftCardRates];
    if (!rate) return 0;
    return parseFloat(giftCardAmount) * rate.rate;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="hero-gradient text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Calculator className="w-16 h-16 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Rate Calculator
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Calculate crypto exchange rates and gift card values instantly with our real-time calculator
          </p>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="crypto" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="crypto" className="text-lg py-3">Crypto Calculator</TabsTrigger>
              <TabsTrigger value="giftcard" className="text-lg py-3">Gift Card Calculator</TabsTrigger>
            </TabsList>

            {/* Crypto Calculator */}
            <TabsContent value="crypto">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <TrendingUp className="w-5 h-5" />
                    <span>Cryptocurrency Rate Calculator</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="crypto-select">Select Cryptocurrency</Label>
                        <Select value={selectedCrypto} onValueChange={setSelectedCrypto}>
                          <SelectTrigger>
                            <SelectValue placeholder="Choose a cryptocurrency" />
                          </SelectTrigger>
                          <SelectContent>
                            {Object.entries(cryptoRates).map(([symbol, data]) => (
                              <SelectItem key={symbol} value={symbol}>
                                {data.name} ({symbol})
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="crypto-type">Transaction Type</Label>
                        <Select value={cryptoType} onValueChange={setCryptoType}>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="buy">Buy (You pay Naira)</SelectItem>
                            <SelectItem value="sell">Sell (You receive Naira)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="crypto-amount">Amount in {selectedCrypto || 'Crypto'}</Label>
                        <Input
                          id="crypto-amount"
                          type="number"
                          placeholder="0.00"
                          value={cryptoAmount}
                          onChange={(e) => setCryptoAmount(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="flex items-center justify-center">
                      <div className="text-center p-6 bg-gray-50 rounded-lg">
                        <ArrowUpDown className="w-8 h-8 mx-auto mb-2 text-primary" />
                        <p className="text-sm text-gray-600 mb-2">
                          {cryptoType === 'buy' ? 'You will pay:' : 'You will receive:'}
                        </p>
                        <p className="text-3xl font-bold text-gray-900">
                          ₦{calculateCrypto().toLocaleString()}
                        </p>
                        {selectedCrypto && (
                          <p className="text-sm text-gray-500 mt-2">
                            Rate: ₦{cryptoRates[selectedCrypto as keyof typeof cryptoRates]?.[cryptoType as 'buy' | 'sell']?.toLocaleString()} per {selectedCrypto}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t">
                    <Button className="w-full bg-primary hover:bg-primary/90" size="lg">
                      Proceed to Trade
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Live Rates Table */}
              <Card className="mt-8">
                <CardHeader>
                  <CardTitle>Live Crypto Rates</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-2">Cryptocurrency</th>
                          <th className="text-right py-2">Buy Rate (₦)</th>
                          <th className="text-right py-2">Sell Rate (₦)</th>
                        </tr>
                      </thead>
                      <tbody>
                        {Object.entries(cryptoRates).map(([symbol, data]) => (
                          <tr key={symbol} className="border-b">
                            <td className="py-3">
                              <div>
                                <span className="font-medium">{data.name}</span>
                                <span className="text-gray-500 ml-2">({symbol})</span>
                              </div>
                            </td>
                            <td className="text-right py-3 font-medium">
                              ₦{data.buy.toLocaleString()}
                            </td>
                            <td className="text-right py-3 font-medium">
                              ₦{data.sell.toLocaleString()}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Gift Card Calculator */}
            <TabsContent value="giftcard">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <span>🎁</span>
                    <span>Gift Card Rate Calculator</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="giftcard-select">Select Gift Card</Label>
                        <Select value={selectedGiftCard} onValueChange={setSelectedGiftCard}>
                          <SelectTrigger>
                            <SelectValue placeholder="Choose a gift card" />
                          </SelectTrigger>
                          <SelectContent>
                            {Object.entries(giftCardRates).map(([key, data]) => (
                              <SelectItem key={key} value={key}>
                                {data.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="giftcard-amount">Gift Card Value ($)</Label>
                        <Input
                          id="giftcard-amount"
                          type="number"
                          placeholder="0.00"
                          value={giftCardAmount}
                          onChange={(e) => setGiftCardAmount(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="flex items-center justify-center">
                      <div className="text-center p-6 bg-gray-50 rounded-lg">
                        <ArrowUpDown className="w-8 h-8 mx-auto mb-2 text-primary" />
                        <p className="text-sm text-gray-600 mb-2">You will receive:</p>
                        <p className="text-3xl font-bold text-gray-900">
                          ₦{calculateGiftCard().toLocaleString()}
                        </p>
                        {selectedGiftCard && (
                          <p className="text-sm text-gray-500 mt-2">
                            Rate: ₦{giftCardRates[selectedGiftCard as keyof typeof giftCardRates]?.rate} per $1
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t">
                    <Button className="w-full bg-primary hover:bg-primary/90" size="lg">
                      Sell Gift Card
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Gift Card Rates Table */}
              <Card className="mt-8">
                <CardHeader>
                  <CardTitle>Current Gift Card Rates</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-2">Gift Card</th>
                          <th className="text-right py-2">Rate per $1 (₦)</th>
                        </tr>
                      </thead>
                      <tbody>
                        {Object.entries(giftCardRates).map(([key, data]) => (
                          <tr key={key} className="border-b">
                            <td className="py-3 font-medium">{data.name}</td>
                            <td className="text-right py-3 font-medium">
                              ₦{data.rate}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8 bg-yellow-50 border-t border-yellow-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-yellow-800">
            <strong>Disclaimer:</strong> Rates are indicative and may vary at the time of actual transaction. 
            Final rates are confirmed during the trading process. Rates update every 30 seconds.
          </p>
        </div>
      </section>
    </div>
  );
};

export default CalculatorPage;
