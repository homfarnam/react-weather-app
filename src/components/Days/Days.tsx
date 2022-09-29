import { motion } from "framer-motion"
import { DayType, WeatherTypes } from "../../types/types"
import Day from "../Day/Day"
import Title from "../Shared/Title/Title"

interface DaysProps {
  data: DayType[]
}

const Days = ({ data }: DaysProps) => {
  return (
    <div className="my-10">
      <Title text="Days" className="text-white" />

      <div className="w-full flex flex-col items-start justify-center">
        {data.map((item, i) => {
          return (
            <motion.div
              className="w-full"
              key={item.datetimeEpoch}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 + i }}
            >
              <Day data={item} />
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

export default Days
