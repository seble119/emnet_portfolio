"use client"

import * as React from "react"
import * as RechartsPrimitive from "recharts"
import { cn } from "@/lib/utils"

const ChartContainer = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    config: Record<string, { label: string; color?: string }>
    children: React.ComponentProps<typeof RechartsPrimitive.ResponsiveContainer>["children"]
  }
>(({ className, config, children, ...props }, ref) => {
  return (
    <div ref={ref} className={cn("", className)} {...props}>
      <style
        dangerouslySetInnerHTML={{
          __html: Object.entries(config)
            .map(([key, value]) => `--color-${key}: ${value.color};`)
            .join(""),
        }}
      />
      <RechartsPrimitive.ResponsiveContainer width="100%" height="100%">
        {children}
      </RechartsPrimitive.ResponsiveContainer>
    </div>
  )
})
ChartContainer.displayName = "ChartContainer"

const ChartTooltip = RechartsPrimitive.Tooltip

const ChartTooltipContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof RechartsPrimitive.Tooltip> & {
    hideLabel?: boolean
    hideIndicator?: boolean
    indicator?: "line" | "dot" | "dashed"
    nameKey?: string
    labelKey?: string
    className?: string
  }
>(({ active, payload, hideLabel = false, hideIndicator = false, label, labelKey, nameKey, className }, ref) => {
  if (!active || !payload?.length) {
    return null
  }

  return (
    <div
      ref={ref}
      className={cn(
        "grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl",
        className,
      )}
    >
      {!hideLabel && (
        <p className="font-medium text-foreground">{labelKey ? payload[0]?.payload?.[labelKey] : label}</p>
      )}
      <div className="grid gap-1.5">
        {payload.map((item, index) => (
          <div
            key={index}
            className="flex w-full items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-muted-foreground"
          >
            {!hideIndicator && (
              <div
                className="shrink-0 rounded-[2px] border-[--color-border] bg-[--color-bg]"
                style={{
                  "--color-bg": item.color,
                  "--color-border": item.color,
                  width: "8px",
                  height: "8px",
                }}
              />
            )}
            <div className="flex flex-1 justify-between leading-none">
              <div className="grid gap-1.5">
                <span className="text-muted-foreground">{nameKey ? item.payload[nameKey] : item.dataKey}</span>
              </div>
              <span className="font-mono font-medium tabular-nums text-foreground">{item.value}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
})
ChartTooltipContent.displayName = "ChartTooltipContent"

export { ChartContainer, ChartTooltip, ChartTooltipContent }
