import { render, screen } from "@testing-library/react"
import Greeting from "./Greeting"


// AAA
test("renders Hello World", () => {
    // Arrange
    render(<Greeting />)
    //Act

    //Assert
    const helloWorld = screen.getByText(/Hello world/i, { exact: true })
    //also possible with a string as an Argument const helloWorld = screen.getByText(/Hello world/i)
    expect(helloWorld).toBeInTheDocument();
})


