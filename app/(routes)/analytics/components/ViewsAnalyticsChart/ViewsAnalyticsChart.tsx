"use client"
import * as React from "react"
import { TrendingUp } from "lucide-react"
import { Label, Pie, PieChart } from "recharts"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
export const description = "A donut chart with text"



import { ViewsAnalyticsChartProps } from "./ViewsAnalyticsChart.types"



export const ViewsAnalyticsChart = (props: ViewsAnalyticsChartProps) => {

  const {repeated, unique} = props
  const chartData = [
    { browser: "unique", visitors: unique, fill: "var(--color-chrome)" },
    { browser: "repeated", visitors: repeated, fill: "var(--color-safari)" },
  ]

  const chartConfig = {
    visitors: {
      label: "Passwords Totals",
    },
    chrome: {
      label: "Unique",
      color: "hsl(var(--chart-3))",
    },
    safari: {
      label: "Repeated",
      color: "hsl(var(--chart-4))",
    },
   
  } satisfies ChartConfig


  const totalVisitors = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.visitors, 0)
  }, [])

  

  return (
    <Card className="flex flex-col">
    <CardHeader className="items-center pb-0">
      <CardTitle className="text-xl">Passwords</CardTitle>
      <CardDescription>Repeated vs passwords</CardDescription>
    </CardHeader>
    <CardContent className="flex-1 pb-0">
      <ChartContainer
        config={chartConfig}
        className="mx-auto aspect-square max-h-[250px]"
      >
        <PieChart>
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <Pie
            data={chartData}
            dataKey="visitors"
            nameKey="browser"
            innerRadius={60}
            strokeWidth={5}
          >
            <Label
              content={({ viewBox }) => {
                if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                  return (
                    <text
                      x={viewBox.cx}
                      y={viewBox.cy}
                      textAnchor="middle"
                      dominantBaseline="middle"
                    >
                      <tspan
                        x={viewBox.cx}
                        y={viewBox.cy}
                        className="fill-foreground text-3xl font-bold"
                      >
                        {totalVisitors.toLocaleString()}
                      </tspan>
                      <tspan
                        x={viewBox.cx}
                        y={(viewBox.cy || 0) + 24}
                        className="fill-muted-foreground"
                      >
                        Passw. created
                      </tspan>
                    </text>
                  )
                }
              }}
            />
          </Pie>
        </PieChart>
      </ChartContainer>
    </CardContent>
    <CardFooter className="flex-col gap-2 text-sm">
      <div className="flex items-center gap-2 font-medium leading-none">
        Try todont have the same passwords <TrendingUp className="h-4 w-4" />
      </div>
      <div className="leading-none text-muted-foreground">
        Showing total passwords created
      </div>
    </CardFooter>
  </Card>
  )
}