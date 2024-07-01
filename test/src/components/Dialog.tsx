// import React, { useState } from 'react';

// interface DialogProps {
//   onAddSector: (name: string) => void;
//   onClose: () => void;
// }

// const Dialog: React.FC<DialogProps> = ({ onAddSector, onClose }) => {
//   const [name, setName] = useState('');

//   const handleSave = () => {
//     if (name.trim()) {
//       onAddSector(name);
//     }
//   };

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//       <div className="bg-white p-4 rounded shadow-lg">
//         <h2 className="text-xl mb-4"> New Sector </h2>
//         <input
//           type="text"
//           className="border p-2 w-full mb-4"
//           placeholder="Sector Name*"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//         <div className="flex justify-end">
//           <button className="bg-gray-200 text-gray px-4 py-2 mr-2 rounded" onClick={onClose}>Cancel</button>
//           <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={handleSave}>Save</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dialog;


import React, { useState } from 'react';

interface DialogProps {
  onAddSector: (name: string) => void;
  onClose: () => void;
}

const Dialog: React.FC<DialogProps> = ({ onAddSector, onClose }) => {
  const [name, setName] = useState('');

  const handleSave = () => {
    if (name.trim()) {
      onAddSector(name);
    }
  };

  return (
    <div 
      data-dialog-backdrop="dialog-xs" 
      data-dialog-backdrop-close="true"
      className=" fixed inset-0 z-[999] grid h-screen w-screen place-items-center bg-black bg-opacity-60 opacity-100 backdrop-blur-sm transition-opacity duration-300"
    >
      <div 
        data-dialog="dialog-xs"
        className="relative m-4 w-1/4 min-w-[25%] max-w-[25%] rounded-lg bg-white font-sans text-base font-light leading-relaxed text-blue-gray-500 antialiased shadow-2xl"
      >
        <div className="flex items-center p-4 font-sans text-2xl antialiased font-semibold leading-snug shrink-0 text-blue-gray-900">
          New Sector
        </div>
        <div className="relative p-4 font-sans text-base antialiased font-light leading-relaxed border-t border-b border-t-blue-gray-100 border-b-blue-gray-100 text-blue-gray-500">
          <input
            type="text"
            className="border p-2 w-full mb-4"
            placeholder="Sector Nam*"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="flex flex-wrap items-center justify-end p-4 shrink-0 text-gray-400">
          <button 
            data-ripple-dark="true" 
            data-dialog-close="true"
            className="px-6 py-3 mr-1 font-sans text-xs font-bold text-grey-500 bg-gray-100 uppercase transition-all rounded-lg middle none center hover:bg-grey-500/10 active:bg-grey-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            onClick={onClose}
          >
            Discard
          </button>
          <button 
            data-ripple-light="true" 
            data-dialog-close="true"
            className="middle none center rounded-lg bg-gradient-to-tr bg-green-500  py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            onClick={handleSave}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dialog;
