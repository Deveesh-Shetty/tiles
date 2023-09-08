"use client"

import { userContext } from "@/provider/UserProvider"
import { useContext } from "react"

export default function Logout() {
  const { setUser } = useContext(userContext)

  async function logoutUser() {
    const response = await fetch("http://localhost:5000/api/v1/user/logout", {
      credentials: "include",
    })
    const data = await response.json()
    if (data.success) setUser!(null)
  }

  return (
    <div>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-lg"
        onClick={logoutUser}
      >
        Logout
      </button>
    </div>
  )
}