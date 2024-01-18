import { useState } from "react";

function App() {
  return (
    <div className="">
      <div className="bg-blue-400">Header</div>
      <div className="flex flex-col md:flex-row">
        <div className="bg-green-400 flex-none min-w-48">Sidebar</div>
        <div className="bg-red-400 flex-grow">Main Content</div>
      </div>
      <div className="bg-blue-400">Footer</div>
    </div>
  );
}
export default App;
