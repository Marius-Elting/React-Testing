import { render, screen } from "@testing-library/react"
import Greeting from "./Greeting"
import userEvent from "@testing-library/user-event"

describe("Greeting Compontent", () => {
    test("renders Hello World", () => {
        // Arrange
        render(<Greeting />)
        //Act

        //Assert
        const helloWorld = screen.getByText(/Hello world/i, { exact: true })
        //also possible with a string as an Argument const helloWorld = screen.getByText(/Hello world/i)
        expect(helloWorld).toBeInTheDocument();
    })

    test("render text doesnt change", () => {
        render(<Greeting />)

        const text = screen.getByText("Its good to see you")
        expect(text).toBeInTheDocument()
    })


    test("render text changes", () => {
        // Arrange
        render(<Greeting />)
        //Act

        const button = screen.getByRole("button")
        userEvent.click(button)
        //Assert

        const text = screen.getByText("changed here")
        expect(text).toBeInTheDocument()
    })


    test("check if text is not visible", () => {

        // Arrange
        render(<Greeting />)
        //Act

        const button = screen.getByRole("button")
        userEvent.click(button)
        //Assert

        const text = screen.queryByText("Its good to see you")
        expect(text).toBeNull()

    })
})




