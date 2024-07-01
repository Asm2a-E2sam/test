import React, { useState } from 'react';
import SectorTable from './components/SectorTable';
import { Sector } from "./types/Sector";
import Dialog from './components/Dialog';
import Sidebar from './components/Sidebar';

const App: React.FC = () => {
  const [sectors, setSectors] = useState<Sector[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleAddSector = (name: string) => {
    const newSector: Sector = {
      name,
      category: [],
      field: [],
      subCategory: [],
      division: [],
      subDivision: []
    };
    setSectors([...sectors, newSector]);
    setIsDialogOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="bg-gray-100 min-h-screen ">
      <div className="bg-white p-2 shadow-md mb-8 ">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold ms-20">Configuration</h1>
            <div className="relative inline-block text-left ml-2">
              <button
                type="button"
                className="inline-flex justify-start gap-x-1.5 rounded-md px-3 py-2 text-sm font-semibold text-gray-900 bg-green-50 shadow-sm ring-1 ring-inset ring-green-50 hover:bg-gray-50"
                id="menu-button"
                aria-expanded={isDropdownOpen}
                aria-haspopup="true"
                onClick={toggleDropdown}
              >
                Sectors Configurator
                <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                </svg>
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="menu-button">
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Option 1</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Option 2</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Option 3</a>
                  </div>
                </div>
              )}
            </div>
          </div>
          <button
            className="bg-green-500 text-white px-4 py-2 rounded"
            onClick={() => setIsDialogOpen(true)}
          >
            New Sector
          </button>
        </div>
      </div>
      <SectorTable sectors={sectors} setSectors={setSectors} />
      {isDialogOpen && <Dialog onAddSector={handleAddSector} onClose={() => setIsDialogOpen(false)} />}
      <Sidebar />
    </div>
  );
};

export default App;
