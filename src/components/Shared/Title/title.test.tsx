import { cleanup, render, screen } from "@testing-library/react"
import Title from "./Title"

describe("Title component test", () => {
  afterEach(cleanup)
  it("Pass text props and expect it in html", () => {
    const { rerender } = render(<Title text="Hello World" />)
    const title = screen.getByText("Hello World").innerHTML
    expect(title).toBe("Hello World")
  })
})
