export function formatHolding(value: number | undefined): string {
    if (value === undefined) return "0"
    if (value >= 1e9) return (value / 1e9).toFixed(2) + "B"
    if (value >= 1e6) return (value / 1e6).toFixed(2) + "M"
    if (value >= 1e3) return (value / 1e3).toFixed(2) + "K"
    return value.toFixed(2)
  }
  
  export function formatDollar(value: number): string {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value)
  }
  
  