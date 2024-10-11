// src/components/Leaderboard.js

import React, { useState, useEffect } from "react";
import axios from "axios";

const Leaderboard = () => {
  const [leaderboardData, setLeaderboardData] = useState([]);

  useEffect(() => {
    fetchLeaderboardData();
  }, []);

  const fetchLeaderboardData = async () => {
    try {
      const response = await axios.get("https://phishinggame.ahmedghaleb.com/api/leaderboard"); // Replace with your Laravel API endpoint
      setLeaderboardData(response.data);
    } catch (error) {
      console.error("Error fetching leaderboard data:", error);
    }
  };

  return (
    <div>
      <h1 class="text-5xl  font-bold mb-10 text-center text-gray-200 pt-20">PHISHING GAME</h1>
      <h1 class="text-4xl underline font-bold mb-10 text-center text-white pt-10">Leaderboard</h1>
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg max-w-7xl mx-auto my-4">
        <table class="w-full text-sm text-center rtl:text-right text-gray-500 ">
          <thead class="text-xs text-gray-700 uppercase ">
            <tr>
              <th scope="col" class="px-6 py-3 bg-gray-50 ">
                Player Name
              </th>
              <th scope="col" class="px-6 py-3 bg-gray-50">
                Clone Points
              </th>
              <th scope="col" class="px-6 py-3 bg-gray-50 ">
                SMS Points
              </th>
              <th scope="col" class="px-6 py-3 bg-gray-50">
                Spear Points
              </th>
            </tr>
          </thead>
          <tbody>
            {leaderboardData.map((player, index) => (
              <tr
                key={index}
                class="border-b border-gray-200 "
              >
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50"
                >
                  {player.player_name}
                </th>
                <td class="px-6 py-4 bg-gray-50">{player.clone_points} /12</td>
                <td class="px-6 py-4 bg-gray-50 ">
                  {player.sms_points} /12
                </td>
                <td class="px-6 py-4 bg-gray-50">{player.spear_points} /12</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Leaderboard;
