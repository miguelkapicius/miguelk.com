"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { usePathname } from "next/navigation";
import { Download } from "lucide-react";

const components: { title: string; href: string }[] = [
  {
    title: "Sobre",
    href: "/about",
  },
  {
    title: "Artigos",
    href: "/articles",
  },
  {
    title: "Projetos",
    href: "/projects",
  },
  {
    title: "Jornada",
    href: "/journey",
  },
];

export function Navigation() {
  const pathname = usePathname();

  return (
    <NavigationMenu className="sm:max-w-5xl w-full px-6">
      <NavigationMenuList className="flex">
        {components.map((component) => (
          <Link
            key={component.href}
            href={component.href}
            legacyBehavior
            passHref
          >
            <NavigationMenuItem className="text-foreground/50 hover:bg-accent hover:text-foreground duration-200 py-2 px-4 rounded-md cursor-pointer">
              <NavigationMenuLink
                className={`uppercase text-sm font-medium ${
                  pathname === component.href &&
                  "underline text-foreground underline-offset-8"
                }`}
              >
                {component.title}
              </NavigationMenuLink>
            </NavigationMenuItem>
          </Link>
        ))}
        <NavigationMenuItem className="text-foreground/50 hover:bg-accent hover:text-foreground duration-200 py-2 px-4 rounded-md cursor-pointer">
          <NavigationMenuLink
            className={`uppercase text-sm font-light flex items-center gap-2`}
            href="/CV.pdf"
            download="/CV.pdf"
          >
            CV <Download size={16} />
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
