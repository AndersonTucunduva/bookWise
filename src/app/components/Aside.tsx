'use client'

import { usePathname } from 'next/navigation'
import NextLink from 'next/link'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import Image from 'next/image'
import { Glasses, LineChart, LogIn, User2 } from 'lucide-react'

const Link = ({ href, ...props }: any) => {
  const router = usePathname()
  const isActive = router === href

  return (
    <NextLink href={href} passHref legacyBehavior>
      <NavigationMenu.Link
        className="NavigationMenuLink flex w-full gap-2 rounded-sm px-2 data-[active]:border-l-4 data-[active]:border-l-purple-100 data-[active]:text-gray-100"
        active={isActive}
        {...props}
      />
    </NextLink>
  )
}

export default function Aside2() {
  return (
    <div className="p-10">
      <div className="flex h-[800px] max-h-[988px] max-w-[242px] flex-col justify-between rounded-xl bg-gradient-to-t from-gray-700 via-gray-700 to-gray-500 px-14 py-10">
        <div>
          <Image
            src={'/logo_wise.svg'}
            alt=""
            width={128}
            height={32}
            priority
            className="min-w-[128px] "
          />

          <NavigationMenu.Root className="mt-20">
            <NavigationMenu.List>
              <NavigationMenu.Item className="flex text-gray-400">
                <Link href="/main">
                  <LineChart />
                  <h1 className="text-base">Inicio</h1>
                </Link>
              </NavigationMenu.Item>
              <NavigationMenu.Item className="mt-6 text-gray-400">
                <Link href="/explorer">
                  <Glasses />
                  <h1 className="text-base">Explorar</h1>
                </Link>
              </NavigationMenu.Item>
              <NavigationMenu.Item className="mt-6 text-gray-400">
                <Link href="/perfil">
                  <User2 />
                  <h1 className="text-base">Perfil</h1>
                </Link>
              </NavigationMenu.Item>
            </NavigationMenu.List>
          </NavigationMenu.Root>
        </div>
        <div>
          <a href={'/'} className="flex items-center">
            <h1 className=" text-base text-gray-200">Fazer login</h1>
            <LogIn className="ml-3 text-green-100" width={20} height={20} />
          </a>
        </div>
      </div>
    </div>
  )
}
