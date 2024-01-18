import { useState } from "react";

function App() {
  return (
    <div class="grid lg:grid-rows-4 gap-4">
      <div className="bg-slate-300 rounded-lg p-6">01</div>
      <div className="bg-slate-300 rounded-lg p-6 ">02</div>
      <div className="bg-slate-300 rounded-lg p-6 col-span-2">03</div>
      <div className="bg-slate-300 rounded-lg p-6">04</div>
      <div className="bg-slate-300 rounded-lg p-6">05</div>
      <div className="bg-slate-300 rounded-lg p-6">06</div>
      <div className="bg-slate-300 rounded-lg p-6">07</div>
    </div>
  );
}
export default App;
