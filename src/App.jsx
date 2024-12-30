import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Loader2 } from 'lucide-react';
import LandingLayout from './pages/landingPages/LandingLayout';
import LandingPage from './pages/landingPages/LandingPage';
import About from './pages/landingPages/AboutPage'
import Services from './pages/landingPages/ServicesPage';
import FAQ from './pages/landingPages/FAQPage';
import LogIn from './pages/landingPages/LoginPage';
import SignUp from './pages/landingPages/SignUpPage'
import AppLayout from './pages/app/AppLayout'
import Dashboard from './pages/app/Dashboard'
import Messages from './pages/app/Messages';
import Groups from './pages/app/Groups';
import NewGroups from './pages/app/NewGroups'
import CreateGroup from './pages/app/CreateGroup';
import Assistant from './pages/app/Assistant'
import Setting from './pages/app/Setting'
import Profile from './pages/app/Profile'
import ScrollToTop from './hook/ScrollToTop'
import { useAuthStore } from './hook/useAuthStore';
import { Toaster } from 'react-hot-toast'

function App() {
  const { authUser, checkAuth, isCheckingAuth } = useAuthStore();
  useEffect(() => {
    checkAuth()
  }, [checkAuth])

  if (isCheckingAuth && !authUser) return (
    <div className='h-screen flex justify-center items-center'>
      <Loader2 className='size-10 animate-spin' />
    </div>
  )

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingLayout />}>
          <Route index element={<LandingPage />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/help' element={<FAQ />} />
          <Route path='/login' element={<LogIn />} />
          <Route path='/signup' element={<SignUp />} />
        </Route>
        <Route path='/' element={authUser ? <AppLayout /> : <Navigate to="/login" />}>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/groups' element={<Groups />} />
          <Route path='/messages' element={<Messages />} />
          <Route path='/new' element={<NewGroups />} />
          <Route path='/new/group' element={<CreateGroup />} />
          <Route path='/assitant' element={<Assistant />} />
          <Route path='/setting' element={<Setting />} />
          <Route path='/profile' element={<Profile />} />
        </Route>

      </Routes>
      <Toaster />
    </BrowserRouter>
  )
}

export default App