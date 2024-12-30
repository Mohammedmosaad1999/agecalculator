"use client";

import React, { useState } from "react";

export default function AgeCalculatorClient() {
  const [birthDate, setBirthDate] = useState("");
  const [ageDetails, setAgeDetails] = useState(null);

  const calculateAge = () => {
    if (!birthDate) return;

    const today = new Date();
    const birthDateObj = new Date(birthDate);

    let years = today.getFullYear() - birthDateObj.getFullYear();
    let months = today.getMonth() - birthDateObj.getMonth();
    let days = today.getDate() - birthDateObj.getDate();

    // Adjust for negative days
    if (days < 0) {
      months--;
      const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
      days += lastMonth.getDate();
    }

    // Adjust for negative months
    if (months < 0) {
      years--;
      months += 12;
    }

    setAgeDetails({ years, months, days });
  };

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    const selectedYear = new Date(selectedDate).getFullYear();
    const currentYear = new Date().getFullYear();

    if (selectedYear > currentYear) {
      alert("The year cannot be greater than the current year.");
      return;
    }

    setBirthDate(selectedDate);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
      <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
        Age Calculator
      </h1>
      <div className="flex flex-col gap-4">
        <label className="text-gray-700 font-medium">
          Enter your birthdate:
        </label>
        <input
          type="date"
          value={birthDate}
          onChange={handleDateChange}
          className="border border-gray-300 rounded-lg px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <button
          onClick={calculateAge}
          className="bg-purple-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-purple-600 transition duration-300"
        >
          Calculate Age
        </button>
      </div>
      {ageDetails && (
        <div className="mt-6 p-4 bg-purple-100 text-purple-800 rounded-lg">
          <p className="text-lg font-medium">
            Your Age: {ageDetails.years} years, {ageDetails.months} months,{" "}
            {ageDetails.days} days
          </p>
        </div>
      )}
    </div>
  );
}