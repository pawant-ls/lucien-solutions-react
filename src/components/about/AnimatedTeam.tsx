import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { teamData } from "@/data/about";

interface TeamMember {
  name: string;
  image: string;
  division: string;
}

interface Position {
  x: number;
  y: number;
}

const AnimatedTeamProfiles: React.FC = () => {
  const [gridPositions, setGridPositions] = useState<Position[]>([]);
  const [visibleTeams, setVisibleTeams] = useState<TeamMember[]>([]);
  const [isReady, setIsReady] = useState(false);

  const calculateGridPositions = () => {
    const gridSize = Math.ceil(Math.sqrt(10)); // Only calculate positions for 10 teams
    const cellWidth = window.innerWidth / gridSize;
    const cellHeight = (window.innerHeight - 200) / gridSize; // Subtract height to avoid text area

    const positions = Array(10)
      .fill(null)
      .map((_, index) => {
        const row = Math.floor(index / gridSize);
        const col = index % gridSize;
        return {
          x: col * cellWidth + Math.random() * (cellWidth - 100),
          y: row * cellHeight + Math.random() * (cellHeight - 100) + 200, // Offset to avoid text area
        };
      });

    setGridPositions(positions);
    setIsReady(true);
  };

  useEffect(() => {
    calculateGridPositions();
    window.addEventListener("resize", calculateGridPositions);

    return () => window.removeEventListener("resize", calculateGridPositions);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomTeams = teamData.sort(() => 0.5 - Math.random()).slice(0, 10);
      setVisibleTeams(randomTeams);
    }, 3000); // Change teams every 3 seconds

    return () => clearInterval(interval);
  }, []);

  if (!isReady) {
    return <div>Loading...</div>;
  }

  const randomDesignationPositionTopBottom = () => {
    const positions = ["top-[20%]", "bottom-[20%]"];
    return positions[Math.floor(Math.random() * positions.length)];
  };

  const randomDesignationPositionLeftRight = () => {
    const positions = ["right-[80%]", "left-[80%]"];
    return positions[Math.floor(Math.random() * positions.length)];
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <h1 className="text-center mx-auto mt-20 max-w-3xl px-10 text-white text-lg md:text-3xl">
        A team of 30+ in-house employees that goes an extra mile
      </h1>
      <AnimatePresence>
        {visibleTeams.map((team, index) => {
          const randomColor = () => {
            const colors = [
              "#E04F4F",
              "#C591E6",
              "#CDDA32",
              "#9DE3C4",
              "#CDDA32",
              "#E04F4F",
              "#C591E6",
              "#CDDA32",
            ];
            return colors[Math.floor(Math.random() * colors.length)];
          };

          return (
            <motion.div
              key={team.name}
              initial={{ scale: 0 }}
              animate={{ scale: Math.random() * 0.5 + 0.75 }} // Random scaling
              exit={{ scale: 0 }} // Exit animation
              transition={{ duration: 1 }}
              style={{
                position: "absolute",
                top: gridPositions[index]?.y,
                left: gridPositions[index]?.x,
              }}
            >
              <div
                style={{
                  background: randomColor(),
                }}
                className="flex rounded-full p-1 relative text-white flex-col items-center gap-2"
              >
                <img
                  className="w-12 aspect-square md:w-24 md:h-24 rounded-full object-cover"
                  src={team.image}
                  alt={team.name}
                />
                <h3
                  style={{
                    background: randomColor(),
                  }}
                  className={`text-xs font-medium absolute text-black rounded-full px-2 py-1 ${randomDesignationPositionTopBottom()} ${randomDesignationPositionLeftRight()}`}
                >
                  {team?.division}
                </h3>
              </div>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
};

export default AnimatedTeamProfiles;
