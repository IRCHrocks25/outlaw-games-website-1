"use client"

import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { HelpCircle, Shield } from "lucide-react"
import Link from "next/link"

const faqCategories = [
  {
    category: "General Questions",
    items: [
      {
        question: "What is OUTLAW Games?",
        answer:
          "OUTLAW Games is the first platform to deliver a true Play-to-Earn experience. We allow players to earn $OUTLAW tokens through verified gameplay with zero upfront investment. Our mission is to make gaming rewarding for everyone while maintaining fun, engaging gameplay.",
      },
      {
        question: "How does Play-to-Earn work?",
        answer:
          "Play-to-Earn means you earn real cryptocurrency tokens ($OUTLAW) simply by playing our games. The more you play and the better you perform, the more tokens you can earn. These tokens have real value and can be exchanged for cash or used within our ecosystem.",
      },
      {
        question: "Do I need to invest money to start playing?",
        answer:
          "No! OUTLAW Games requires zero upfront investment. You can start playing immediately for free and begin earning $OUTLAW tokens through gameplay. This makes our platform accessible to everyone, regardless of their financial situation.",
      },
      {
        question: "What games are available?",
        answer:
          "We offer a variety of games including mini-golf, MMORPGs, and more exciting titles. New games are added regularly. Check out our Games section to see all available titles and what's coming soon!",
      },
      {
        question: "Is OUTLAW Games available on mobile?",
        answer:
          "Yes! OUTLAW Games is available on Android via Google Play Store. Our iOS app is coming soon, so iPhone users will be able to join the fun shortly.",
      },
    ],
  },
  {
    category: "Account and Login",
    items: [
      {
        question: "How do I create an account?",
        answer:
          "Creating an account is simple! Download the OUTLAW Games app from Google Play (or wait for iOS), open it, and follow the on-screen instructions. You'll be asked to create a username and set up your profile. The process takes just a few minutes.",
      },
      {
        question: "Do I need a Solana wallet?",
        answer:
          "Yes, you'll need a Solana wallet to receive and store your $OUTLAW tokens. If you don't have one, don't worry—we'll guide you through creating a wallet during the signup process. It's free and only takes a couple of minutes.",
      },
      {
        question: "I forgot my password. How do I reset it?",
        answer:
          "If you've forgotten your password, tap the 'Forgot Password' link on the login screen. We'll send a reset link to your registered email address. Make sure to check your spam folder if you don't see it in your inbox.",
      },
      {
        question: "Can I change my username?",
        answer:
          "Username changes are possible but limited to maintain account security. If you need to change your username, please contact our support team with your request and account details. We'll process it within 1-2 business days.",
      },
      {
        question: "How do I link my Solana wallet?",
        answer:
          "You can link your Solana wallet in the app settings under 'Wallet' or 'Account'. You'll be asked to connect your wallet using either WalletConnect or by entering your wallet address. Make sure you have your wallet's recovery phrase secure before linking.",
      },
    ],
  },
  {
    category: "Earning and Using $OUTLAW Tokens",
    items: [
      {
        question: "How do I earn $OUTLAW tokens?",
        answer:
          "You earn $OUTLAW tokens by playing our games! Each game has different earning mechanics—some reward you based on performance, others on time spent playing, and some on completing specific challenges. The more you play, the more you can earn. Check each game's description for specific earning details.",
      },
      {
        question: "What is the token burn mechanism?",
        answer:
          "Token burning is our way of maintaining a healthy token economy. A percentage of $OUTLAW tokens used for in-game purchases or transactions are permanently removed from circulation (burned). This helps maintain token value over time and creates a sustainable ecosystem for all players.",
      },
      {
        question: "Can I use $OUTLAW tokens in-game?",
        answer:
          "Absolutely! $OUTLAW tokens can be used for various in-game purchases like upgrades, special items, character customizations, and unlocking premium content. Some tokens are burned during these transactions, which helps keep the ecosystem healthy.",
      },
      {
        question: "How are tokens distributed after I earn them?",
        answer:
          "When you earn tokens through gameplay, they're tracked in real-time in your account. Token distribution happens automatically to your linked Solana wallet. Small amounts may be batched together for efficiency, but you'll see them arrive regularly.",
      },
      {
        question: "Are there limits on how much I can earn?",
        answer:
          "While there are no hard daily earning limits, token distribution rates are balanced to ensure fairness and sustainability. Playing more doesn't always mean earning more at the same rate—we focus on rewarding quality gameplay and engagement. Specific earning rates vary by game.",
      },
      {
        question: "Can I transfer tokens between players?",
        answer:
          "Yes, $OUTLAW tokens are built on Solana blockchain, which means they're fully transferable. You can send tokens to other players' Solana wallets just like any other cryptocurrency. This makes trading and gifting possible within our community.",
      },
    ],
  },
  {
    category: "Technical Issues",
    items: [
      {
        question: "The app won't load or crashes frequently. What should I do?",
        answer:
          "First, try closing and reopening the app. If that doesn't help, make sure your app is updated to the latest version from the app store. Check your internet connection and restart your device. If problems persist, clear the app cache (Android: Settings > Apps > OUTLAW Games > Storage > Clear Cache). Still having issues? Contact our support team.",
      },
      {
        question: "My tokens aren't showing up in my wallet. What's wrong?",
        answer:
          "Token transfers can sometimes take a few minutes to process, especially during high-traffic periods. First, verify your wallet address is correctly linked in the app settings. Check your Solana wallet directly (using a block explorer) to see if the transaction is pending. If it's been more than an hour, contact support with your transaction details.",
      },
      {
        question: "I'm experiencing lag or poor performance. How can I fix it?",
        answer:
          "Performance issues can be caused by several factors. Make sure you have a stable internet connection, close other apps running in the background, and ensure your device has enough storage space. Lowering graphics settings in the app can also help. If you're on mobile, try switching between WiFi and mobile data to see which works better.",
      },
      {
        question: "How do I update the app?",
        answer:
          "App updates are available through Google Play Store (Android) or App Store (iOS). Enable auto-updates in your app store settings to always have the latest version. You can also manually check for updates in your app store by searching for OUTLAW Games and tapping 'Update' if available.",
      },
      {
        question: "I'm having trouble connecting my wallet. What should I do?",
        answer:
          "Wallet connection issues usually relate to compatibility or network problems. Make sure you're using a supported wallet app (like Phantom, Solflare, or Trust Wallet) and that it's updated to the latest version. Try disconnecting and reconnecting your wallet in the app settings. If using WalletConnect, ensure both apps are on the same network (mainnet).",
      },
      {
        question: "The game says I'm offline even though I have internet. Help!",
        answer:
          "This is usually a connectivity issue. Try toggling your WiFi or mobile data off and back on. Check if other apps can access the internet. Restart your router if on WiFi. If the problem continues, there may be a server-side issue—check our status page or social media for outage announcements.",
      },
    ],
  },
  {
    category: "Cash-Out and Security",
    items: [
      {
        question: "How do I cash out my $OUTLAW tokens?",
        answer:
          "To cash out, you'll need to transfer your $OUTLAW tokens to a cryptocurrency exchange that supports Solana tokens. Popular options include exchanges like Raydium, Jupiter, or centralized exchanges. Once on an exchange, you can swap $OUTLAW for USDC, USDT, or SOL, then convert to your local currency. Always use reputable exchanges and follow their verification processes.",
      },
      {
        question: "Are there fees for cashing out?",
        answer:
          "Yes, there are network fees associated with Solana blockchain transactions (usually very small, often less than $0.01). Additionally, exchanges may charge trading fees when you convert tokens. These fees vary by exchange, so check their fee structure. We don't charge any fees on our end—all fees are from the blockchain network and exchange you use.",
      },
      {
        question: "How do I keep my account and tokens safe?",
        answer:
          "Security starts with your wallet: never share your recovery phrase or private keys with anyone. Enable two-factor authentication if available. Use a strong, unique password for your OUTLAW Games account. Be wary of phishing attempts—we'll never ask for your password or recovery phrase. Only download our app from official app stores. Keep your wallet app updated.",
      },
      {
        question: "What should I do if I suspect my account is compromised?",
        answer:
          "If you think your account has been compromised, act immediately: change your password in the app settings, disconnect and reconnect your wallet (revoking any suspicious permissions), and contact our support team right away. If your wallet itself is compromised, move any remaining funds to a new wallet immediately using your recovery phrase.",
      },
      {
        question: "Is my personal information secure?",
        answer:
          "Yes, we take data security seriously. We use industry-standard encryption to protect your personal information and comply with GDPR and CCPA regulations. We never sell your personal data to third parties. Your wallet information is stored locally on your device—we don't have access to your private keys or recovery phrases.",
      },
      {
        question: "What happens if I lose access to my wallet?",
        answer:
          "If you lose access to your wallet and don't have your recovery phrase, unfortunately, there's no way to recover the tokens stored in that wallet. This is how blockchain security works—no one, including us, can access your wallet without the recovery phrase. This is why it's crucial to write down your recovery phrase and store it securely in multiple safe locations.",
      },
      {
        question: "Are my earnings taxable?",
        answer:
          "Cryptocurrency earnings may be subject to taxation depending on your country's laws. In many jurisdictions, earning and selling cryptocurrency tokens is considered taxable income. We recommend consulting with a tax professional familiar with cryptocurrency regulations in your area. We don't provide tax advice, but we can provide transaction history for your records if needed.",
      },
    ],
  },
]

export default function SupportPage() {
  return (
    <main className="min-h-screen bg-black">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-white">
              OUTLAW <span className="text-[#A4FF42]">Support</span>
            </h1>
            <p className="mt-4 text-lg text-white/60 max-w-3xl mx-auto">
              We're here to help! Whether you have questions about earning tokens, technical issues, or
              account security, our support team is ready to assist you. Find answers below or reach out
              directly—we're available 24/7.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                className="bg-[#A4FF42] text-black hover:bg-[#8FE635] font-semibold px-8 py-6 text-lg"
              >
                <a href="mailto:info@otlwgame.com">Email Support</a>
              </Button>
              <Button
                asChild
                className="bg-transparent border-2 border-[#A4FF42]/50 text-white hover:bg-[#A4FF42]/20 hover:border-[#A4FF42] font-semibold px-8 py-6 text-lg shadow-none"
              >
                <a href="#faq">Browse FAQs</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-black">Frequently Asked Questions</h2>
            <p className="mt-4 text-lg text-black/60">
              Quick answers to common questions. Can't find what you're looking for?{" "}
              <a
                href="mailto:info@otlwgame.com"
                className="text-[#A4FF42] hover:underline font-medium"
              >
                Contact us
              </a>
              .
            </p>
          </motion.div>

          <div className="space-y-8">
            {faqCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              >
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-black flex items-center gap-2">
                    {category.category === "Cash-Out and Security" && <Shield className="w-6 h-6 text-[#A4FF42]" />}
                    {category.category !== "Cash-Out and Security" && <HelpCircle className="w-6 h-6 text-[#A4FF42]" />}
                    {category.category}
                  </h3>
                </div>
                <Accordion type="single" collapsible className="w-full bg-white rounded-2xl p-6 shadow-sm">
                  {category.items.map((item, itemIndex) => (
                    <AccordionItem
                      key={item.question}
                      value={`${category.category}-${itemIndex}`}
                      className="border-b border-gray-200 last:border-b-0"
                    >
                      <AccordionTrigger className="text-left font-semibold text-black hover:text-[#A4FF42] py-4">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-black/70 leading-relaxed pt-2 pb-4">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Cross-Links Section */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h3 className="text-xl font-semibold text-black mb-6">Related Pages</h3>
            <div className="flex flex-wrap justify-center gap-6">
              <Link
                href="/"
                className="text-black/60 hover:text-[#A4FF42] transition-colors font-medium"
              >
                Home
              </Link>
              <Link
                href="/contact"
                className="text-black/60 hover:text-[#A4FF42] transition-colors font-medium"
              >
                Contact Us
              </Link>
              <Link
                href="/articles"
                className="text-black/60 hover:text-[#A4FF42] transition-colors font-medium"
              >
                Articles
              </Link>
              <a
                href="#"
                className="text-black/60 hover:text-[#A4FF42] transition-colors font-medium"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-black/60 hover:text-[#A4FF42] transition-colors font-medium"
              >
                Terms of Service
              </a>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-sm text-black/50">
                OUTLAW Games complies with GDPR and CCPA regulations. Your privacy and data security are
                important to us.{" "}
                <a href="#" className="text-[#A4FF42] hover:underline">
                  Learn more about our privacy practices
                </a>
                .
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

