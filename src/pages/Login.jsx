import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../components/Button'
import Logo from '../components/Logo'
import { useDispatch } from 'react-redux'
import authService from '../appwrite/auth'
import { useForm } from 'react-hook-form'
import { login as loginAction } from '../store/authSlice'
import Input from '../components/Input'
import { toast } from 'react-toastify'

function Login() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { register, handleSubmit } = useForm()
  const [error, setError] = useState("")
  const [wrongConfidentials, setWrongConfidentials] = useState(false)

  const handleLogin = async (data) => {
    setError("") // Clear previous errors
    try {
      setWrongConfidentials(false);
      const session = await authService.login(data)
      if (session) {
        const userData = await authService.getCurrentUser()
        if (userData) {
          dispatch(loginAction({ userData }))
          toast.success(`Welcome ${userData.name}`)
          navigate("/")
        }
      }
      else{
        setWrongConfidentials(true);
      }
    } catch (e) {
      console.log("Login error:", e)
      setError("Incorrect email or password. Please try again.")
    }
  }

  return (
    <div className='py-20'>
      <div className="mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10">
        <div className="flex justify-center -mr-8">
          <span className="inline-block w-full max-w-[100px]">
            <Logo width="100%" />
          </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">Sign in to your account</h2>
        <p className="mt-2 text-center text-base text-black/60">
          Don&apos;t have an account?&nbsp;
          <Link
            to="/signup"
            className="font-medium text-blue-600 transition-all duration-200 hover:underline"
          >
            Sign Up
          </Link>
        </p>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mt-6 text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit(handleLogin)} className="mt-8">
          <div className="space-y-5">
            <Input
              label="Email:"
              placeholder="Enter your email"
              type="email"
              {...register("email", {
                required: true,
                validate: {
                  matchPattern: (value) =>
                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                    "Email address must be valid",
                },
              })}
            />

            <Input
              label="Password:"
              type="password"
              placeholder="Enter your password"
              {...register("password", {
                required: true,
              })}
            />

            <Button type="submit" className="w-full">
              Sign in
            </Button>
          </div>
          {wrongConfidentials ? (
            <div className='text-center pt-2 font-semibold text-red-400'>
              <p>Wrong Email or Password</p>
            </div>
          ) : null}
        </form>
      </div>
    </div>
  )
}

export default Login
