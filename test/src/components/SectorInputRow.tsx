import React, { useState } from 'react';
import { Sector } from '../types/Sector';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
interface SectorInputRowProps {
  field: keyof Sector;
  index: number;
  onAddItem: (field: keyof Sector, name: string, index: number) => void;
  onCancel: () => void;
}

const SectorInputRow: React.FC<SectorInputRowProps> = ({ field, index, onAddItem, onCancel }) => {
  const [name, setName] = useState('');

  const handleAdd = () => {
    if (name.trim()) {
      onAddItem(field, name, index);
      setName('');
    }
  };

  return (
      <div  className="flex">
        <input
          type="text"
          className="p-2 w-full mr-4"
          placeholder={`Add ${String(field)}`}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={onCancel} className="close-btn mr-2">
         <ClearOutlinedIcon className="text-white bg-gray-700 rounded-full"/> 
        </button>
        <button onClick={handleAdd} className="check-btn">
          <CheckOutlinedIcon className="text-white bg-green-700 rounded-full"/>
        </button>
      </div>
  );
};

export default SectorInputRow;
