import { createContext, useState } from 'react'

export const SidebarContext = createContext()

const SidebarProvider = ({ children }) => {
  // Sidebar state
  const [isOpen, setIsOpen] = useState(false)

  const handleClose = () => {
    setIsOpen(false)
  }
  return (
        <SidebarContext.Provider value={{ isOpen, setIsOpen, handleClose }}>{children}</SidebarContext.Provider>
  )
}

export default SidebarProvider
