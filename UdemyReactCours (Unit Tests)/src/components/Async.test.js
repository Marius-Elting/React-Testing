import { render, screen } from "@testing-library/react"
import Async from "./Async"

describe("Async Component", () => {
    test("Posts got renderd", async () => {
        window.fetch = jest.fn()
        window.fetch.mockResolvedValueOnce({
            json: async () => [{ id: "p1", title: "First post" }]
        })
        render(<Async />)
        // .find returns a promise default for timeout is 1s (in ms)
        const listItemElements = await screen.findAllByRole("listitem", {}, { timeout: "10000" }) // returns Array
        expect(listItemElements).not.toHaveLength(0)

    })
})