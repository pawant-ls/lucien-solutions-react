import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { teamData } from "@/data/about";

interface TeamMember {
  name: string;
  image: string;
}

interface Position {
  x: number;
  y: number;
}

const AnimatedTeamProfiles: React.FC = () => {
  const [gridPositions, setGridPositions] = useState<Position[]>([]);
  const [isReady, setIsReady] = useState(false);

  const calculateGridPositions = () => {
    const gridSize = Math.ceil(Math.sqrt(teamData.length));
    const cellWidth = window.innerWidth / gridSize;
    const cellHeight = window.innerHeight / gridSize;

    const positions = teamData.map((_, index) => {
      const row = Math.floor(index / gridSize);
      const col = index % gridSize;
      return {
        x: col * cellWidth + Math.random() * (cellWidth - 100),
        y: row * cellHeight + Math.random() * (cellHeight - 100),
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
      {teamData.map((team: any, index: number) => {
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
            key={index}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
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
                className=" w-12 aspect-square md:w-24 md:h-24 rounded-full object-cover"
                src={team.image}
                alt={team.name}
              />
              <h3
                style={{
                  background: randomColor(),
                }}
                className={`text-xs font-medium absolute  text-black     rounded-full px-2 py-1   ${randomDesignationPositionTopBottom()} ${randomDesignationPositionLeftRight()}`}
              >
                {team?.division}
              </h3>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default AnimatedTeamProfiles;
