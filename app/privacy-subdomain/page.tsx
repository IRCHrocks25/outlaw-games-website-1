import type { Metadata } from "next"
import { SubdomainHeader } from "@/components/subdomain-header"
import { SubdomainFooter } from "@/components/subdomain-footer"

export const metadata: Metadata = {
  title: "Privacy Policy | OUTLAW",
  description: "Privacy Policy for OUTLAW Token Rewards & Wallet App.",
  alternates: {
    canonical: "https://privacy.outlaw.games",
  },
}

export default function PrivacySubdomainPage() {
  return (
    <>
      <SubdomainHeader />
      <main className="min-h-screen bg-white">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold text-black mb-4">Privacy Policy for OUTLAW Token Rewards & Wallet App</h1>
          
          <div className="prose prose-lg max-w-none text-black/80 leading-relaxed">
            <p className="text-gray-600 mb-8">
              <strong>Last Updated: Dec 11, 2025</strong>
            </p>
            
            <p className="mb-8">
              At Outlaw Game, Inc. ("Company," "we," "us," or "our"), we care about your privacy. This Privacy Policy explains how we collect, use, and protect your info when you use the OUTLAW Token Rewards & Wallet App ("App"). By using the App, you agree to this policy.
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-black mt-8 mb-4">1. What Info We Collect</h2>
              <p className="mb-4">
                We collect some info to make the App and wallet work and improve your experience:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><strong>Account Info:</strong> When you sign up, we collect your email, username, and Solana wallet address (if you connect an external wallet) to manage your account and token transactions. If you use the App's built-in wallet, we manage your wallet address for you.</li>
                <li><strong>Gameplay Data:</strong> We track your progress in games like OUTIE Putt (e.g., scores, tokens earned, PvP matches) to give rewards and improve the game.</li>
                <li><strong>Wallet Data:</strong> We record $OUTLAW token transactions (like earnings, wagers, purchases, or transfers) on the Solana blockchain, which is public.</li>
                <li><strong>Usage Data:</strong> We see how you use the App and wallet—like what features you use, how long you play, and any errors you run into—to make things better.</li>
                <li><strong>Device Info:</strong> We collect basic stuff about your device (like IP address, device type, operating system) to keep the App running smoothly.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-black mt-8 mb-4">2. How We Use Your Info</h2>
              <p className="mb-4">
                We use your info to:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><strong>Run the App and wallet</strong>—manage your account, give you $OUTLAW tokens, let you play games, and handle token transfers.</li>
                <li><strong>Improve the App</strong>—fix bugs, add new features, and make gameplay better.</li>
                <li><strong>Talk to you</strong>—send updates, respond to your emails, or tell you about changes to the App or wallet.</li>
                <li><strong>Keep things fair</strong>—spot cheating or rule-breaking (like hacking or bot use).</li>
                <li><strong>Follow laws</strong>—like keeping records for taxes or regulations.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-black mt-8 mb-4">3. How We Share Your Info</h2>
              <p className="mb-4">
                We don't sell your info, but we might share it in these cases:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><strong>Blockchain Transactions:</strong> $OUTLAW token transactions are recorded on the Solana blockchain, which is public. Your wallet address (whether App-managed or external) and transaction details can be seen by anyone.</li>
                <li><strong>Service Providers:</strong> We use third-party services (like analytics tools or cloud storage) to help run the App and wallet. They only get what they need and must keep your info safe.</li>
                <li><strong>Legal Stuff:</strong> If the law requires it (like a court order), we'll share your info to comply or protect our rights.</li>
                <li><strong>Business Changes:</strong> If we sell or merge the Company, your info might be shared with the new owners, but they'll still follow this policy.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-black mt-8 mb-4">4. Your Choices</h2>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>You can update your account info (like your email) in the App settings.</li>
                <li>You can transfer your $OUTLAW tokens from the App's wallet to an external wallet, but you're responsible for that wallet's security.</li>
                <li>You can stop using the App anytime, but we'll keep some info (like transaction records) as required by law or the blockchain.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-black mt-8 mb-4">5. How We Protect Your Info</h2>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>We use standard security (like encryption) to keep your info safe.</li>
                <li>The App's wallet is non-custodial (we do not manage your keys).</li>
                <li>Blockchain transactions are secure, but the Solana blockchain is public—anyone can see your wallet address and $OUTLAW transactions.</li>
                <li>We can't protect you if you share your account login or external wallet keys with others, so keep them safe!</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-black mt-8 mb-4">6. Children's Privacy</h2>
              <p className="mb-4">
                The App isn't for kids under 18. If we find out we've collected info from a minor, we'll delete it right away.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-black mt-8 mb-4">7. International Users</h2>
              <p className="mb-4">
                The App is hosted in UAE. If you're using it from another country, your info might be transferred to UAE, where privacy laws might be different. By using the App, you agree to this.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-black mt-8 mb-4">8. Changes to This Policy</h2>
              <p className="mb-4">
                We might update this Privacy Policy. We'll let you know by posting the new version in the App. If you keep using the App, you agree to the changes.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-black mt-8 mb-4">9. Contact Us</h2>
              <p className="mb-4">
                Got questions about your privacy? Email us at <a href="mailto:info@otlwgame.com" className="text-[#A4FF42] hover:underline">info@otlwgame.com</a>.
              </p>
            </section>
          </div>
        </article>
      </main>
      <SubdomainFooter currentPage="privacy" />
    </>
  )
}

