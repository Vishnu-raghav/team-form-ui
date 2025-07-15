import { useState } from "react";
import AddForm from "../components/AddForm.jsx";
import { Button } from "rizzui"; 

const Team = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Team</h1>
        <Button onClick={handleOpen}>➕ Add Team</Button>
      </div>

      {/* Static content replaced with Tailwind-styled div */}
      <div className="p-4 border rounded shadow bg-white">
        <p className="text-gray-700">
          You can manage your team here. Click the button to add a new team member.
        </p>
      </div>

      {/* Add Form Modal */}
      <AddForm isOpen={isOpen} onClose={handleClose} />
    </div>
  );
};

export default Team;
