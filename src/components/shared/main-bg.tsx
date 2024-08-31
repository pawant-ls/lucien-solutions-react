const MainBackground = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className=" pb-20 overflow-x-hidden relative pt-10 lg:pt-24   min-h-screen bg-background">
      <div className=" relative z-10">{children}</div>

      <div className=" overflow-hidden top-0  sm:-right-[90%] md:-right-52 z-0 absolute">
        <img src="/images/bg/birds1.png" alt="cloud" />
      </div>
    </main>
  );
};

export default MainBackground;
