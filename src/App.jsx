function App() {
  function createCards() {
    const dummyData = [
      {
        title: "Why tracking IRA?",
        content: "Reason 1",
        subtitle: "Subtitle 1",
      },
      {
        title: "Benefits of Tracking",
        content: "Reason 2",
        subtitle: "Subtitle 2",
      },
      {
        title: "Transparency & Accountability",
        content: "Reason 3",
        subtitle: "Subtitle 3",
      },
    ];

    return dummyData.map((data, index) => (
      <div key={`card-${index}`} className="border w-1/3 bg-slate-100 p-12">
        <h1 className="font-bold text-md w-fit py-5 text-[#f05875]">{data.title}</h1>
        <p>{data.content}</p>
        <h2>{data.subtitle}</h2>
      </div>
    ));
  }

  const cards = createCards();

  return (
    <div className="bg-gradient-to-r from-[#0369ed] via-[#ffe0e0] to-[#dfffbc] h-64 ">
      <div className="flex justify-between">
        <div id="logo" className="py-1 place-content-center my-10">
          <h1 className=" text-white text-left text-base font-bold py-1 px-12">
            Inflation
          </h1>
          <h1 className=" text-white text-left text-base  font-bold py-1 px-12">
            Reduction
          </h1>
          <h1 className=" text-white text-left font-bold text-base py-1 px-12">Act</h1>
          <h1 className=" text-[#f05875] font-bold text-left text-base py-1 px-12">
            Tracker
          </h1>
        </div>
        <button className="h-10 m-3 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white font-bold py-0 px-3 rounded-full shadow-lg hover:shadow-xl transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500">
          buy me a coffee
        </button>
      </div>

      <div className="flex justify-between">
        <div id="left-box" className="flex gap-4 p-24 bg-white w-2/3">
          <div id="search-frame" className="bg-white my-auto">
            <div
              id="search"
              className="h-12 grid grid-cols-2 gap-4 bg-slate-100  w-[150%]"
            >
              <input className="  bg-white ring-offset-2 ring-2 ring-slate-200 rounded-full my-3 mx-3" />
              <button className="bg-[#f05875] text-white font-bold font-italic px-5 py-2 shadow-lg">
                <h1>SEARCH</h1>
              </button>
            </div>
          </div>
        </div>
        <div id="cards" className="grid grid-rows-1">
          {cards}
        </div>
      </div>
    </div>
  );
}

export default App;
