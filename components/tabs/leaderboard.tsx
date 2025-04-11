import { useEffect, useState } from "react";
import { createThirdwebClient, defineChain, getContract } from "thirdweb";
import { useReadContract } from "thirdweb/react";

export default function Leaderboard() {
  type LeaderboardEntry = {
    address: string;
    score: number;
  };
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);

  const client = createThirdwebClient({
    clientId: process.env.NEXT_PUBLIC_ClIENTID!
  });

  const contract = getContract({
    client,
    address: process.env.NEXT_PUBLIC_LEADERBOARD!,
    chain: defineChain(2021),
  });

  const { data, isLoading } = useReadContract({
    contract,
    method: "function getAllScores() view returns (address[], uint256[])",
    params: [],
  });

  // Fetch leaderboard data when the component mounts or when data changes
  useEffect(() => {
    if (data) {
      // Process the returned data (addresses and scores)
      const scores = data[0].map((address, index) => ({
        address,
        score: Number(data[1][index]),
      }));

      scores.sort((a, b) => b.score - a.score);

      setLeaderboard(scores.slice(0,10));
    }
  }, [data, isLoading]);

  return (
    <div className="bg-[#1A1A1A] p-6 rounded-lg">
      <h3 className="text-xl font-semibold mb-4 text-white">Global Leaderboard</h3>
      <div className="space-y-4">
        {!isLoading && (
          <ul>
            {leaderboard.map(({ address, score }, index) => (
              <li
                key={index}
                className="flex justify-between items-center p-3 bg-[#2D2D2D] rounded-lg mb-2"
              >
                {/* Rank */}
                <div className="flex items-center gap-3">
                  {index < 3 ? (
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                        index === 0
                          ? "bg-[#3D8BFD] text-white" // Blue for rank 1
                          : index === 1
                          ? "bg-[#C0C0C0] text-black" // Silver for rank 2
                          : "bg-[#CD7F32] text-black" // Bronze for rank 3
                      }`}
                    >
                      {index + 1}
                    </div>
                  ) : (
                    <span className="text-white">{index + 1}</span>
                  )}
                  {/* Address */}
                  <span className="text-white">
                    {address.slice(0, 6)}...{address.slice(-4)}
                  </span>
                </div>
                {/* Score */}
                <span className="text-white font-medium">{score}</span>
              </li>
            ))}
          </ul>
        )}
        {isLoading && <p className="text-white">Loading leaderboard...</p>}
      </div>
    </div>
  );
  
}
