import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'
import { logout } from '../../store/authSlice'
import { toast } from 'react-toastify'

export default function LogoutBtn() {
    const dispatch = useDispatch()

    const logoutHandler = async () => {
        try {
            await authService.logout()
            dispatch(logout())
            toast.success("Logged out successfully")
        } catch (error) {
            console.error("Logout failed:", error)
            toast.error("Failed to log out")
        }
    }

    return (
        <button
            className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
            onClick={logoutHandler}
        >
            Logout
        </button>
    )
}
