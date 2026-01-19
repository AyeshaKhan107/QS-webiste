"use client";

import { useState, useEffect } from "react";

export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [contacts, setContacts] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  /* ---------------- CHECK LOGIN ON LOAD ---------------- */
  useEffect(() => {
    const savedPassword = localStorage.getItem("adminPassword");

    if (savedPassword) {
      setLoggedIn(true);
      fetchContacts(savedPassword);
    }
  }, []);

  /* ---------------- FETCH CONTACTS ---------------- */
  const fetchContacts = async (pass) => {
    try {
      const res = await fetch("/api/Contact", {
        headers: {
          Authorization: `Bearer ${pass}`,
        },
      });

      if (!res.ok) throw new Error("Unauthorized");

      const data = await res.json();
      setContacts(data.contacts);
    } catch (err) {
      console.error("Failed to fetch contacts", err);
      logout();
    }
  };

  /* ---------------- LOGIN ---------------- */
  const handleLogin = async () => {
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/Contact", {
        headers: {
          Authorization: `Bearer ${password}`,
        },
      });

      if (!res.ok) throw new Error("Invalid password");

      const data = await res.json();
      setContacts(data.contacts);
      localStorage.setItem("adminPassword", password);
      setLoggedIn(true);
    } catch {
      setError("Incorrect admin password");
    } finally {
      setLoading(false);
    }
  };

  /* ---------------- LOGOUT ---------------- */
  const logout = () => {
    setLoggedIn(false);
    setContacts([]);
    setPassword("");
    localStorage.removeItem("adminPassword");
  };

  /* ---------------- LOGIN SCREEN ---------------- */
  if (!loggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
        <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full">
          <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">
            Admin Login
          </h2>
          <p className="text-gray-500 text-center mb-6">
            Enter admin password to view contacts
          </p>

          <input
            type="password"
            placeholder="Admin password"
            className="border border-gray-300 rounded-lg p-3 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-primary"
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && (
            <p className="text-red-500 text-sm mb-3 text-center">
              {error}
            </p>
          )}

          <button
            onClick={handleLogin}
            disabled={loading}
            className="bg-primary hover:bg-primary/90 transition text-white w-full py-3 rounded-lg font-semibold"
          >
            {loading ? "Checking..." : "Login"}
          </button>
        </div>
      </div>
    );
  }

  /* ---------------- ADMIN DASHBOARD ---------------- */
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Contact Submissions
          </h1>

          <button
            onClick={logout}
            className="mt-4 md:mt-0 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
          >
            Logout
          </button>
        </div>

        {/* Empty State */}
        {contacts.length === 0 && (
          <div className="text-center text-gray-500 py-20">
            No contact submissions found.
          </div>
        )}

        {/* Contacts Table */}
        {contacts.length > 0 && (
          <div className="overflow-x-auto bg-white shadow rounded-xl">
            <table className="min-w-full text-sm">
              <thead className="bg-gray-100 text-gray-700">
                <tr>
                  <th className="px-4 py-3 text-left">Name</th>
                  <th className="px-4 py-3 text-left">Email</th>
                  <th className="px-4 py-3 text-left">Phone</th>
                  <th className="px-4 py-3 text-left">Message</th>
                  <th className="px-4 py-3 text-left">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {contacts.map((c) => (
                  <tr key={c._id} className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-900">
                      {c.name}
                    </td>
                    <td className="px-4 py-3 text-gray-700 break-all">
                      {c.email}
                    </td>
                    <td className="px-4 py-3 text-gray-700">
                      {c.phone}
                    </td>
                    <td className="px-4 py-3 text-gray-700 max-w-sm break-words">
                      {c.message}
                    </td>
                    <td className="px-4 py-3 text-gray-500 whitespace-nowrap">
                      {new Date(c.createdAt).toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
