const convertFtoC = (far: number): number => {
  return Math.round((far - 32) / 1.8)
}

const convertDateToDay = (date: string): string => {
  const dateObj = new Date(date)
  const day = dateObj.getDate()
  const month = dateObj.toLocaleString("default", { month: "long" })
  const year = dateObj.getFullYear()

  const dayOfWeek = dateObj.toLocaleString("default", { weekday: "long" })
  return `${dayOfWeek} ${day} ${month} ${year}`
}

const calcAvgTemp = (avgTemp: number, type: "Cel" | "Far") => {
  if (type === "Cel") {
    return Math.round(avgTemp)
  } else if (type === "Far") {
    return Math.round(avgTemp * 1.8 + 32)
  }
}

export { convertFtoC, convertDateToDay, calcAvgTemp }
