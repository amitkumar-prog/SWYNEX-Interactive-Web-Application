import React, {useState} from 'react'
import { SearchIcon } from 'lucide-react';

function Registrations() {

    const [registrations, setRegistrations] = useState(() => {
      return JSON.parse(localStorage.getItem("eventRegistrations")) || [];
    });

    const [editingIndex, setEditingIndex] = useState(null);
    const [editName, setEditName] = useState("");
    const [editEmail, setEditEmail] = useState("");
    const [editPhone, setEditPhone] = useState("");

    const handleEdit = (index) => {
        const registration = registrations[index];

        setEditingIndex(index);
        setEditName(registration.name);
        setEditEmail(registration.email);
        setEditPhone(registration.phone);
    };

    const handleSave = () => {

        if (!editName.trim() || !editEmail.trim() || !editPhone.trim()) {
            alert("Please fill all fields.");
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(editEmail)) {
            alert("Please enter a valid email.");
            return;
        }

        if (!/^\d{10}$/.test(editPhone)) {
            alert("Phone number must be exactly 10 digits.");
            return;
        }

        const updatedRegistrations = [...registrations];

        updatedRegistrations[editingIndex] = {
            ...updatedRegistrations[editingIndex],
            name: editName,
            email: editEmail,
            phone: editPhone,
        };

        setRegistrations(updatedRegistrations);

        localStorage.setItem(
            "eventRegistrations",
            JSON.stringify(updatedRegistrations)
        );

        setEditingIndex(null);
    };
    
    const handleDelete = (index) => {
    const updatedRegistrations = registrations.filter(
        (_, i) => i !== index
    );

    setRegistrations(updatedRegistrations);

    localStorage.setItem(
        "eventRegistrations",
        JSON.stringify(updatedRegistrations)
    );
    };

    const [searchTerm, setSearchTerm] = useState("");
    const filteredRegistrations = registrations
    .map((registration, originalIndex) => ({
    ...registration,
    originalIndex,
    }))
    .filter((registration) =>
            registration.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            registration.event.toLowerCase().includes(searchTerm.toLowerCase())
    );

    

  return (
    <div className="p-6">
        <h1 className="text-3xl font-bold mb-6">
            Event Registrations
        </h1>

        <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-5">
            <div className=" flex gap-2 bg-white w-fit px-4 py-2 rounded-md mx-auto shadow-md">
                <input type="text" placeholder=" Search Registrations " className=" outline-none bg-transparent " value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                <SearchIcon className="size-5 text-gray-400"/>
            </div>

        </div>

        <div>
            {searchTerm && filteredRegistrations.length === 0 && (
                <p className="text-center text-gray-500 py-6">
                    No matching registrations found.
                </p>
            )}
        </div>

        <div className="grid gap-4">
            {registrations.length === 0 && (
                <p className="text-gray-500 text-center py-10">
                    No registrations found.
                </p>
            )}
            {filteredRegistrations.map((registration, index) => (
            <div key={index} className="bg-white p-5 rounded-xl shadow">
                
                <h2 className="font-bold text-xl">
                {registration.name}
                </h2>

                <p>{registration.email}</p>
                <p>{registration.phone}</p>
                <p>{registration.event}</p>
                <p>Date: {registration.date}</p>
                <p>Location: {registration.location}</p>

                {editingIndex === index && (
                    <div className="mt-4 space-y-3">
                        <input
                            value={editName}
                            onChange={(e) => setEditName(e.target.value)}
                            placeholder="Name"
                            className="w-full border p-2 rounded"
                        />

                        <input
                            value={editEmail}
                            onChange={(e) => setEditEmail(e.target.value)}
                            placeholder="Email"
                            className="w-full border p-2 rounded"
                        />

                        <input
                            value={editPhone}
                            onChange={(e) => setEditPhone(e.target.value)}
                            placeholder="Phone"
                            className="w-full border p-2 rounded"
                        />

                        <div className="flex gap-3">
                            <button
                                onClick={handleSave}
                                className="bg-green-600 text-white px-4 py-2 rounded-lg"
                            >
                                Save Changes
                            </button>

                            <button
                                onClick={() => setEditingIndex(null)}
                                className="bg-gray-500 text-white px-4 py-2 rounded-lg"
                            >
                                Cancel
                            </button>
                        </div>

                    </div>
                )}

                <div className="flex items-center gap-5">

                    <button
                        onClick={() => handleEdit(registration.originalIndex)}
                        className="mt-3 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                        >
                        Edit
                    </button>

                    <button
                        onClick={() => handleDelete(registration.originalIndex)}
                        className="mt-3 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
                        >
                        Delete
                    </button>

                </div>

            </div>
            ))}
        </div>
    </div>
  )
}

export default Registrations;