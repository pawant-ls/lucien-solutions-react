"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { teamData } from "@/data/about";
import Heading from "../shared/heading";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { Button } from "../ui/button";

interface TeamMember {
  name: string;
  image: string;
  division: string;
}

interface Position {
  x: number;
  y: number;
}

function sortTeamData(data: any) {
  // Sort by coreTeam first, then by division
  return data.sort((a: any, b: any) => {
    if (a.coreTeam && !b.coreTeam) return -1;
    if (!a.coreTeam && b.coreTeam) return 1;

    // If both are coreTeam or neither are, sort by division
    if (a.division < b.division) return -1;
    if (a.division > b.division) return 1;

    return 0; // If same division, maintain original order
  });
}

const AnimatedTeamProfiles: React.FC = () => {
  // const [gridPositions, setGridPositions] = useState<Position[]>([]);
  // const [visibleTeams, setVisibleTeams] = useState<TeamMember[]>([]);
  // const [isReady, setIsReady] = useState(false);

  // const calculateGridPositions = () => {
  //   const gridSize = Math.ceil(Math.sqrt(5)); // Only calculate positions for 10 teams
  //   const cellWidth = window.innerWidth / gridSize;
  //   const cellHeight = (window.innerHeight - 200) / gridSize; // Subtract height to avoid text area

  //   const positions = Array(10)
  //     .fill(null)
  //     .map((_, index) => {
  //       const row = Math.floor(index / gridSize);
  //       const col = index % gridSize;
  //       return {
  //         x: col * cellWidth + Math.random() * (cellWidth - 100),
  //         y: row * cellHeight + Math.random() * (cellHeight - 100) + 200, // Offset to avoid text area
  //       };
  //     });

  //   setGridPositions(positions);
  //   setIsReady(true);
  // };

  // useEffect(() => {
  //   calculateGridPositions();
  //   window.addEventListener("resize", calculateGridPositions);

  //   return () => window.removeEventListener("resize", calculateGridPositions);
  // }, []);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     const randomTeams = teamData.sort(() => 0.5 - Math.random()).slice(0, 10);
  //     setVisibleTeams(randomTeams);
  //   }, 3000); // Change teams every 3 seconds

  //   return () => clearInterval(interval);
  // }, []);

  // if (!isReady) {
  //   return <div>Loading...</div>;
  // }

  const randomDesignationPositionTopBottom = () => {
    const positions = ["top-[20%]", "bottom-[20%]"];
    return positions[Math.floor(Math.random() * positions.length)];
  };

  const randomDesignationPositionLeftRight = () => {
    const positions = ["left-[80%]"];
    return positions[Math.floor(Math.random() * positions.length)];
  };

  return (
    <div className="relative  my-20 w-full min-h-screen ">
      <Heading firstLine={["Our", "Team"]} />
      {/* <h1 className="text-center mx-auto mt-20 max-w-3xl px-10 text-white text-lg md:text-3xl">
        A team of 30+ in-house employees that goes an extra mile
      </h1> */}
      {/* <AnimatePresence>
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
              // style={{
              //   position: "absolute",
              //   top: gridPositions[index]?.y,
              //   left: gridPositions[index]?.x,
              // }}
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
      </AnimatePresence> */}

      <div className=" pr-20 md:pr-0  mt-20 container grid content-center w-full  grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-20">
        {sortTeamData(teamData).map((team: any, index: number) => {
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
            <div className=" group">
              <Popover>
                <PopoverTrigger>
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{
                      delay: 0.3 * Math.random() * 6,
                    }}
                    whileHover={{
                      scale: 1.25,
                    }}
                    drag
                    dragConstraints={{
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                    }}
                    key={team.name}
                  >
                    <div className="flex w-20 bg-accent md:w-24 aspect-square md:h-24 rounded-full p-1 relative  flex-col items-center gap-2">
                      <img
                        className=" pointer-events-none  w-full h-full  rounded-full object-cover"
                        src={team.image}
                        alt={team.name}
                      />
                      <h3
                        className={`text-xs bg-accent font-medium absolute text-text rounded-full px-2 py-1 ${randomDesignationPositionTopBottom()} ${randomDesignationPositionLeftRight()}`}
                      >
                        {team?.division}
                      </h3>
                    </div>
                  </motion.div>
                </PopoverTrigger>
                <PopoverContent className=" bg-gray-100">
                  <div>
                    <h3 className=" text-gray-900  font-semibold">{team.name}</h3>
                    <h4 className=" text-sm font-medium text-primary">
                      {team.position}
                    </h4>

                    <p className=" text-sm mt-3 text-gray-800">
                      {team.description}
                    </p>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AnimatedTeamProfiles;
