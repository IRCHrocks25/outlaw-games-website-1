import type { Metadata } from "next"
import { SubdomainHeader } from "@/components/subdomain-header"
import { SubdomainFooter } from "@/components/subdomain-footer"

export const metadata: Metadata = {
  title: "Support | OUTLAW",
  description: "OUTLAW Support: FAQs, contact info, and help for the OUTLAW app.",
  alternates: {
    canonical: "https://support.outlaw.games",
  },
}

export default function SupportSubdomainPage() {
  return (
    <>
      <SubdomainHeader />
      <main className="min-h-screen bg-white">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold text-black mb-8">Welcome to OUTLAW Support</h1>
          
          <div className="prose prose-lg max-w-none text-black/80 leading-relaxed">
            <p className="mb-8">
              Thank you for choosing OUTLAW, the revolutionary platform where you can earn $OUTLAW tokens through simple, fun gameplay. This support page is designed to assist you with any questions or issues you may encounter while using our app. Below, you'll find comprehensive information to ensure a smooth experience.
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-black mt-8 mb-4">Contact Us</h2>
              <p className="mb-4">
                If you need assistance, please reach out to us through the following channels:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><strong>Email:</strong> <a href="mailto:info@otlwgame.com" className="text-[#A4FF42] hover:underline">info@otlwgame.com</a></li>
                <li><strong>Live Chat:</strong> Click the chat icon in the bottom right corner.</li>
              </ul>
              <p className="mb-4">
                Our team is available 24/7 to assist you with any concerns.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-black mt-8 mb-4">Frequently Asked Questions (FAQs)</h2>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-black mt-6 mb-4">General Questions</h3>
                <div className="space-y-4">
                  <div>
                    <p className="mb-2"><strong>What is OUTLAW?</strong> OUTLAW is a play-to-earn (P2E) platform that allows users to earn $OUTLAW tokens by playing skill-based mini-games like OÜTIE Putt and Chess. It leverages Solana's blockchain for instantaneous payouts.</p>
                  </div>
                  <div>
                    <p className="mb-2"><strong>How do I download the app?</strong> You can download OUTLAW from the App Store or Google Play Store. Search for "OUTLAW Games" and follow the installation instructions.</p>
                  </div>
                  <div>
                    <p className="mb-2"><strong>What are the system requirements?</strong> OUTLAW is compatible with iOS 15.0 and later, and Android 8.0 and later. A stable internet connection is required for gameplay and token earnings.</p>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-black mt-6 mb-4">Account and Login</h3>
                <div className="space-y-4">
                  <div>
                    <p className="mb-2"><strong>How do I create an account?</strong> You can create an account using your email address. No wallet or crypto knowledge is required. Simply download the app, tap "Sign Up," and follow the prompts.</p>
                  </div>
                  <div>
                    <p className="mb-2"><strong>I forgot my password. What should I do?</strong> Tap "Forgot Password" on the login screen, enter your email, and follow the instructions sent to your inbox.</p>
                  </div>
                  <div>
                    <p className="mb-2"><strong>Can I use social media to log in?</strong> Currently, OUTLAW supports email login only to ensure simplicity and security for all users.</p>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-black mt-6 mb-4">Earning and Using $OUTLAW Tokens</h3>
                <div className="space-y-4">
                  <div>
                    <p className="mb-2"><strong>How do I earn $OUTLAW tokens?</strong> Play games like OÜTIE Putt and Chess. For example, making 18 holes can earn you 18 $OUTLAW tokens instantly via Solana's blockchain.</p>
                  </div>
                  <div>
                    <p className="mb-2"><strong>What can I do with $OUTLAW tokens?</strong> You can use $OUTLAW tokens to purchase cosmetic skins and power boosts within the games, enhancing your experience. You can also swap tokens via compatible wallets and exchanges.</p>
                  </div>
                  <div>
                    <p className="mb-2"><strong>How do the burn mechanics work?</strong> OUTLAW's net-negative burn ratio means that for every 20 tokens you earn in solo modes, 40 are burned, reducing the overall supply and increasing token value over time.</p>
                  </div>
                  <div>
                    <p className="mb-2"><strong>What are cosmetic skins and power boosts?</strong> Cosmetic skins are visual enhancements for your game characters or environments, while power boosts provide temporary advantages, such as increased scoring or faster movement, to improve your gameplay.</p>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-black mt-6 mb-4">Technical Issues</h3>
                <div className="space-y-4">
                  <div>
                    <p className="mb-2"><strong>The game is crashing. What should I do?</strong> Ensure your device meets the system requirements and has the latest app update. Restart the app and your device. If the issue persists, contact us at <a href="mailto:info@otlwgame.com" className="text-[#A4FF42] hover:underline">info@otlwgame.com</a>.</p>
                  </div>
                  <div>
                    <p className="mb-2"><strong>I'm not receiving my $OUTLAW tokens. Why?</strong> Check your internet connection and ensure the app is updated. Tokens are paid out instantly via Solana, so delays may indicate a network issue. Contact support if the problem continues.</p>
                  </div>
                  <div>
                    <p className="mb-2"><strong>How do I update the app?</strong> Open the App Store or Google Play Store, search for "OUTLAW Games," and tap "Update" if available.</p>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-black mt-6 mb-4">Cash-Out and Security</h3>
                <div className="space-y-4">
                  <div>
                    <p className="mb-2"><strong>Can I cash out my $OUTLAW tokens?</strong> Yes, you can cash out via wallets compatible with Solana, such as Phantom, and trade on exchanges. Check local regulations and platform policies for details.</p>
                  </div>
                  <div>
                    <p className="mb-2"><strong>How are my tokens secured?</strong> $OUTLAW tokens are secured on the Solana blockchain, ensuring transparency and immutability. Your account is protected by your email password, and we recommend enabling two-factor authentication if available.</p>
                  </div>
                  <div>
                    <p className="mb-2"><strong>What should I do if my account is hacked?</strong> Immediately contact us at <a href="mailto:info@otlwgame.com" className="text-[#A4FF42] hover:underline">info@otlwgame.com</a> and change your password. Report any unauthorized activity for investigation.</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-black mt-8 mb-4">Privacy Policy</h2>
              <p className="mb-4">
                Our privacy policy is available at <a href="https://privacy.outlaw.games" className="text-[#A4FF42] hover:underline">https://privacy.outlaw.games</a>. It details how we collect, use, and protect your data, ensuring compliance with GDPR, CCPA, and other regional regulations. You can manage your privacy settings within the app under "Settings" &gt; "Privacy."
              </p>
            </section>
          </div>
        </article>
      </main>
      <SubdomainFooter currentPage="support" />
    </>
  )
}

