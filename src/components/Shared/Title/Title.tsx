import * as React from "react"

interface ITitleProps {
  text: string
  className?: React.HtmlHTMLAttributes<HTMLHtmlElement>["className"]
}

const Title = ({ text, className }: ITitleProps) => {
  return <h3 className={`text-2xl font-medium ${className}`}>{text}</h3>
}

export default Title
