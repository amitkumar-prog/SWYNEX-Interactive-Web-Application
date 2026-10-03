import React, { useState } from "react";
import { X } from "lucide-react";
import { useParams } from "react-router-dom";
import events from "../data/events";

function EventRegistrations() {

    const [name, setName] = useState("");
    const[email, setEmail] = useState("");
    const[phone, setPhone] = useState("");
    const[selectedEvent, setSelectedEvent] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const { id } = useParams();
    const selectedEventData = events.find(
        (event) => event.id === Number(id)
    );
    console.log(selectedEventData);
    

    const handleSubmit = (e) => {
        e.preventDefault();

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phonePattern = /^[0-9]{10}$/;

        if (!name.trim()) {
            setError("Name is required");
            return;
        }

        if (!email.trim()) {
            setError("Email is required");
            return;
        }

        if (!emailPattern.test(email)) {
            setError("Please enter a valid email");
            return;
        }

        if (!phone.trim()) {
            setError("Phone number is required");
            return;
        }

        if (!phonePattern.test(phone)) {
            setError("Phone number must contain 10 digits");
            return;
        }

        if (!selectedEvent) {
            setError("Please select an event");
            return;
        }

        const registration = {
            name,
            email,
            phone,
            event: selectedEvent,
        }

        const existingRegistrations = JSON.parse(localStorage.getItem("eventRegistrations")) || [];
        existingRegistrations.push(registration);

        localStorage.setItem(
            "eventRegistrations",
            JSON.stringify(existingRegistrations)
        );

        setName("");
        setEmail("");
        setPhone("");
        setSelectedEvent("");
        setSuccess("Registration successful!")};
    

  return (
    <section className="min-h-screen bg-slate-300 px-4 py-10 flex items-center justify-center">

      <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-6 sm:p-8">

        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <p className="text-purple-600 font-semibold text-sm">
              EVENT REGISTRATION
            </p>

            <h1 className="text-2xl sm:text-3xl font-bold mt-1">
              Register for Event
            </h1>
          </div>

          <button className="p-2 rounded-full hover:bg-gray-100">
            <X className="size-5 text-gray-500" />
          </button>
        </div>

        {/* Form */}
        <form className="space-y-5" onSubmit={handleSubmit}>

          {/* Name */}
          <div>
            <label className="block text-sm font-semibold mb-2">
              Full Name
            </label>

            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-purple-500"
              value ={name}
              onChange = {(e)=> setName(e.target.value)}
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold mb-2">
              Email Address
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-purple-500"
              value ={email}
              onChange = {(e)=> setEmail(e.target.value)}
              required
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-semibold mb-2">
              Phone Number
            </label>

            <input
              type="tel"
              placeholder="Enter your phone number"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-purple-500"
              value ={phone}
              onChange = {(e)=> setPhone(e.target.value)}
              required
              

            />
          </div>

          {/* Event */}
          <div>
            <label className="block text-sm font-semibold mb-2">
              Event
            </label>

            <select
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-purple-500"
              value ={selectedEvent}
              onChange = {(e)=> setSelectedEvent(e.target.value)}
            >
              <option value="">Select Event</option>
              <option value="technology">Tech Conference 2026</option>
              <option value="workshop">Web Development Workshop</option>
              <option value="cultural">Garba Event 2026</option>
              <option value="sports">SAM Football Tournament</option>
            </select>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-purple-600 text-white font-bold py-3 rounded-lg hover:bg-purple-800 transition duration-300"
          >
            Submit Registration
          </button>

        </form>

      </div>

    </section>
  );
}

export default EventRegistrations;