'use client'
import { usePathname } from "next/navigation"
import { useMemo } from "react"
import { BiSearch } from "react-icons/bi"
import { HiHome } from "react-icons/hi"
import { twMerge } from "tailwind-merge"
import Box from "./Box"
import SidebarItem from "./SidebarItem"

interface SideBarProps {
  children?: React.ReactNode
}

const SideBar:React.FC<SideBarProps> = ({children}) => {
  const pathname = usePathname()
  const routes = useMemo(() => [
    {
      icon: HiHome,
      label: 'Home',
      active: pathname !== '/search',
      href: '/',
    },
    {
      icon: BiSearch,
      label: 'Search',
      active: pathname === '/search',
      href: '/search',
    },
  ], [pathname])

  return (
    <>
      <div
        className={twMerge(`
          flex
          h-full
        `)}
      >
        <div 
          className="
            hidden
            md:flex
            flex-col
            gap-y-2
            bg-black
            h-full
            w-[300px]
            p-2
          "
        >
          <Box>
            <div className="flex flex-col gap-y-4 px-5 py-4">
            {routes.map((item) => (
              <SidebarItem
                key={item.label}
                {...item}
              />
            ))}
            </div>
          </Box>
          <Box className="overflow-y-auto h-full">
            Playlist
          </Box>
        </div>
      
      <main>
        {children}
      </main>
      </div>
    </>
  )
}

export default SideBar
