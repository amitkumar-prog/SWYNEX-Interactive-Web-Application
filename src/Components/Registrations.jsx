import React from 'react'

function Registrations() {

    const registrations = JSON.parse(localStorage.getItem("eventRegistrations")) || [];
    console.log(registrations);
  return (
    <div className="p-6">
        <h1 className="text-3xl font-bold mb-6">
            Event Registrations
        </h1>

        <div className="grid gap-4">
            {registrations.map((registration, index) => (
            <div key={index} className="bg-white p-5 rounded-xl shadow">
                
                <h2 className="font-bold text-xl">
                {registration.name}
                </h2>

                <p>{registration.email}</p>
                <p>{registration.phone}</p>
                <p>{registration.event}</p>

            </div>
            ))}
        </div>
    </div>
  )
}

export default Registrations;