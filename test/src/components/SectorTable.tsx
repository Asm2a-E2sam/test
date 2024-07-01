import React, { useState } from 'react';
import SectorRow from './SectorRow';
import { Sector } from '../types/Sector';
import TreeViewDialog from './TreeViewDialog';
import TreeViewIcon from '@mui/icons-material/AccountTree';

interface SectorTableProps {
  sectors: Sector[];
  setSectors: React.Dispatch<React.SetStateAction<Sector[]>>;
}

const SectorTable: React.FC<SectorTableProps> = ({ sectors, setSectors }) => {
  const [editingIndex, setEditingIndex] = useState<{ field: keyof Sector, index: number } | null>(null);
  const [filledFields, setFilledFields] = useState<Record<number, Set<keyof Sector>>>({});
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedSector, setSelectedSector] = useState<Sector | null>(null);

    const handleAddItem = (field: keyof Sector, name: string, index: number) => {
    const updatedSectors = sectors.map((sector, i) => {
      if (i === index) {
        let updatedField: string[];
        if (Array.isArray(sector[field])) {
          updatedField = [...sector[field] as string[], name];
        } else {
          updatedField = [sector[field] as string, name];
        }
        return { ...sector, [field]: updatedField };
      }
      return sector;
    });
    setSectors(updatedSectors);
    setEditingIndex(null);

    setFilledFields(prev => {
      const newFilledFields = { ...prev };
      if (!newFilledFields[index]) {
        newFilledFields[index] = new Set<keyof Sector>();
      }
      newFilledFields[index].add(field);
      return newFilledFields;
    });
  };


  const isFieldFilled = (index: number, field: keyof Sector) => {
    return filledFields[index]?.has(field);
  };

  const handleTreeViewClick = (sector: Sector) => {
    setSelectedSector(sector);
    setDialogOpen(true);
  };

  return (
    <div className="container mx-auto p-4">
      {sectors.map((sector, index) => (
        <div key={index} className="mb-8 shadow-lg bg-white p-8 shadow-md rounded-md">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-xl font-bold">{sector.name}</h2>
            <button onClick={() => handleTreeViewClick(sector)}>
              <TreeViewIcon />
            </button>
          </div>
          <table className="min-w-full bg-white border border-gray-300 px-4 py-2">
            <thead>
              <tr>
                <th className="border border-gray-300 px-4 py-2">
                  <div className="flex justify-between items-center">
                    <span>Category</span>
                    <button
                      onClick={() => setEditingIndex({ field: 'category', index })}
                      className={isFieldFilled(index, 'category') ? 'hidden' : ''}
                    >
                      <svg className="h-6 w-6 text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                        <line x1="12" y1="8" x2="12" y2="16" />
                        <line x1="8" y1="12" x2="16" y2="12" />
                      </svg>
                    </button>
                  </div>
                </th>
                <th className="border border-gray-300 px-4 py-2">
                  <div className="flex justify-between items-center">
                    <span>Field</span>
                    <button
                      onClick={() => setEditingIndex({ field: 'field', index })}
                      className={isFieldFilled(index, 'category') && !isFieldFilled(index, 'field') ? '' : 'hidden'}
                    >
                      <svg className="h-6 w-6 text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                        <line x1="12" y1="8" x2="12" y2="16" />
                        <line x1="8" y1="12" x2="16" y2="12" />
                      </svg>
                    </button>
                  </div>
                </th>
                <th className="border border-gray-300 px-4 py-2">
                  <div className="flex justify-between items-center">
                    <span>Sub Category</span>
                    <button
                      onClick={() => setEditingIndex({ field: 'subCategory', index })}
                      className={isFieldFilled(index, 'field') && !isFieldFilled(index, 'subCategory') ? '' : 'hidden'}
                    >
                      <svg className="h-6 w-6 text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                        <line x1="12" y1="8" x2="12" y2="16" />
                        <line x1="8" y1="12" x2="16" y2="12" />
                      </svg>
                    </button>
                  </div>
                </th>
                <th className="border border-gray-300 px-4 py-2">
                  <div className="flex justify-between items-center">
                    <span>Division</span>
                    <button
                      onClick={() => setEditingIndex({ field: 'division', index })}
                      className={isFieldFilled(index, 'subCategory') && !isFieldFilled(index, 'division') ? '' : 'hidden'}
                    >
                      <svg className="h-6 w-6 text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                        <line x1="12" y1="8" x2="12" y2="16" />
                        <line x1="8" y1="12" x2="16" y2="12" />
                      </svg>
                    </button>
                  </div>
                </th>
                <th className="border border-gray-300 px-4 py-2">
                  <div className="flex justify-between items-center">
                    <span>Sub Division</span>
                    <button
                      onClick={() => setEditingIndex({ field: 'subDivision', index })}
                      className={isFieldFilled(index, 'division') && !isFieldFilled(index, 'subDivision') ? '' : 'hidden'}
                    >
                      <svg className="h-6 w-6 text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                        <line x1="12" y1="8" x2="12" y2="16" />
                        <line x1="8" y1="12" x2="16" y2="12" />
                      </svg>
                    </button>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
  {sectors.map((sector, index) => (
    <SectorRow
      key={index}
      sector={sector}
      index={index}
      onAddItem={handleAddItem}
      editingIndex={editingIndex}
      setEditingIndex={setEditingIndex}
    />
  ))}
</tbody>
    
          </table>
          <button
              onClick={() => handleAddItem('category', '', index)}
                    className="p-2 bg-green-500 text-white rounded"
                  >
                    Add New Row
                  </button>
        </div>
      ))}
      {dialogOpen && selectedSector && (
        <TreeViewDialog 
          open={dialogOpen} 
          onClose={() => setDialogOpen(false)} 
          sector={selectedSector} 
        />
      )}
    </div>
  );
};

export default SectorTable;
