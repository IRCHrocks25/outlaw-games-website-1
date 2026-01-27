import { NextResponse } from "next/server"

const TOKEN_ADDRESS = "7df5p5aoW787CqUWGU2cwtdmtjd5Eiy3oJTbSpeRjupx"
const SOLANA_RPC = "https://api.mainnet-beta.solana.com"

export async function GET() {
  try {
    let price = null
    let supply = null
    
    // Fetch price from Jupiter
    try {
      const priceResponse = await fetch(
        `https://price.jup.ag/v4/price?ids=${TOKEN_ADDRESS}`,
        {
          next: { revalidate: 60 }, // Cache for 60 seconds
        }
      )
      if (priceResponse.ok) {
        const priceData = await priceResponse.json()
        price = priceData.data?.[TOKEN_ADDRESS]?.price || null
      }
    } catch (error) {
      console.error("Error fetching price:", error)
    }

    // Fetch token supply from Solana RPC
    try {
      const rpcResponse = await fetch(SOLANA_RPC, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          jsonrpc: "2.0",
          id: 1,
          method: "getTokenSupply",
          params: [TOKEN_ADDRESS],
        }),
        next: { revalidate: 300 }, // Cache for 5 minutes
      })
      if (rpcResponse.ok) {
        const rpcData = await rpcResponse.json()
        supply = rpcData.result?.value?.uiAmount || null
      }
    } catch (error) {
      console.error("Error fetching supply:", error)
    }

    // Holder count - using fallback value as getting exact count requires paid APIs
    // This can be updated periodically or fetched from a paid service
    const holders = 7293

    const marketCap = price && supply ? price * supply : null

    // Use fallback values if we didn't get data
    return NextResponse.json({
      price: price ?? 0.02109,
      supply: supply ?? 993790000,
      holders,
      marketCap: marketCap ?? 20950000,
    })
  } catch (error) {
    console.error("Error in token-stats API route:", error)
    // Return fallback values
    return NextResponse.json(
      {
        price: 0.02109,
        supply: 993790000,
        holders: 7293,
        marketCap: 20950000,
      },
      { status: 200 } // Always return 200 to prevent fetch errors
    )
  }
}

