import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'
import Container from '../Container'
import Logo from '../Logo'
import LogoutBtn from './LogoutBtn'

export default function Header() {
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()

  const navItems = [
    {
      name: 'Home',
      slug: '/',
      active: true
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus
    },
  ]

  return (
    <header className='py-3 shadow bg-blue-400'>
      <Container>
        <nav className='flex items-center'>
          <div className='w-[60px] h-[60px]flex justify-center items-center'>
            <Link to='/'>
              <Logo/>
            </Link>
          </div>
          <ul className='flex ml-auto items-center gap-2'>
            {navItems.map((item) => item.active ? (
              <li key={item.name}>
                <button
                  onClick={() => navigate(item.slug)}
                  className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
                >
                  {item.name}
                </button>
              </li>
            ) : null)}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  )
}
