import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-sm font-semibold ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-[var(--primary)] text-[var(--on-primary)] hover:bg-[var(--primary-active)]",
        destructive: "bg-[var(--negative)] text-white hover:bg-[var(--negative-deep)]",
        outline: "border border-[var(--border-ink)] bg-[var(--canvas)] text-[var(--ink)] hover:bg-[var(--canvas-soft)]",
        secondary: "bg-[var(--canvas-soft)] text-[var(--ink)] hover:bg-[var(--border-subtle)]",
        ghost: "text-[var(--body)] hover:text-[var(--ink)] hover:bg-[var(--canvas-soft)]",
        link: "text-[var(--primary)] underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-xl px-3",
        lg: "h-12 rounded-full px-8",
        icon: "h-10 w-10 rounded-full",
      },
      radius: {
        default: "rounded-xl",
        full: "rounded-full",
        md: "rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      radius: "default",
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, radius, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, radius, className }))}
        ref={ref}
        {...props}
      />
    )
  },
)
Button.displayName = "Button"

export { Button, buttonVariants }
