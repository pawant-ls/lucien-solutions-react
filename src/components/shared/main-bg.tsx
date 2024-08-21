const MainBackground = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className=" overflow-x-hidden relative pt-24   min-h-screen bg-gradient-to-b   from-[#070A15] to-[#3F1651]">
      <div className=" relative z-10">{children}</div>

      <div className=" overflow-hidden top-0 -right-[90%] md:-right-52 z-0 absolute">
        <img src="/images/bg/clouds1.png" alt="cloud" />
      </div>
    </main>
  );
};

export default MainBackground;
