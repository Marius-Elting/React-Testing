import { render, screen } from "@testing-library/react"
import Async from "./Async"

describe("Async Component", () => {
    test("Posts got renderd", async () => {
        render(<Async />)
        // .find returns a promise default for timeout is 1s (in ms)
        const listItemElements = await screen.findAllByRole("listitem", {}, { timeout: "10000" }) // returns Array
        expect(listItemElements).not.toHaveLength(0)

    })
})