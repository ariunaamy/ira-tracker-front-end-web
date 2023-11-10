


function App() {

  function createCards() {
    const dummyData = [
      { title: 'Why tracking IRA?', content: 'Reason 1', subtitle: 'Subtitle 1' },
      { title: 'Benefits of Tracking', content: 'Reason 2', subtitle: 'Subtitle 2' },
      { title: 'Transparency & Accountability', content: 'Reason 3', subtitle: 'Subtitle 3' }
    ];
  
    return dummyData.map((data, index) => (
      <div key={`card-${index}`} className="border w-1/3 bg-slate-100 p-12">
        <h1 className="font-bold text-lg py-5 text-[#f05875]">
          {data.title}
        </h1>
        <p>{data.content}</p>
        <h2>{data.subtitle}</h2>
      </div>
    ));
  }
  
  const cards = createCards();

  return (
    <div className="bg-gradient-to-r from-[#0369ed] via-[#7bff29] to-[#f5ffea] h-64  ">
      <div id="logo" className="py-1 place-content-center">
        <h1 className=" text-white text-left text-base py-1 px-12">Inflation</h1>
        <h1 className=" text-white text-left text-base py-1 px-12">Reduction</h1>
        <h1 className=" text-white text-left text-base py-1 px-12">Act</h1>
        <h1 className=" text-[#f05875] font-bold text-left text-base py-1 px-12">Tracker</h1>
      </div>
      <div className="grid grid-cols-2 bg-red-300">
      <div id="left-box" className="flex gap-4 p-24 bg-blue-100">
        <div id="search-frame" className="bg-white my-auto">
        <div id="search" className="h-12 grid grid-cols-2 gap-4 bg-slate-100  w-[150%]">
        <input className="  bg-white ring-offset-2 ring-2 ring-slate-200 rounded-full my-3 mx-3" />
        <button className="bg-[#9333ea] text-white px-5 py-2 shadow-lg">
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
