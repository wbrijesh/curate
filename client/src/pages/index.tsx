const Home = () => {
  return (
    <div>
      <div className="w-[100vw] h-14 bg-slate-50 flex flex-row items-center justify-between px-5">
        <p className="font-medium text-xl text-slate-600">Curate</p>
        <p className="text-slate-500">About curate</p>
      </div>

      <div
        style={{ height: 'calc(100vh - 3.5rem)' }}
        className="flex flex-col items-center justify-center bg-slate-200 w-[100vw]"></div>

    </div>
  );
}

export default Home;
