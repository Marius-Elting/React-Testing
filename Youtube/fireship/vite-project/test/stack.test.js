class Stack {
    constructor() {
        this.top = -1
        this.items = {}
    }

    get peek() {
        return this.items[this.top]
    }

    push(value) {
        this.top += 1
        this.items[this.top] = value
    }
    pop() {
        this.items[this.top] = undefined
        this.top -= 1
    }
}


describe("My Stack", () => {
    let stack

    // beforeEach will execute before every test
    beforeEach(() => {
        stack = new Stack()
    })

    // test() or it() do both the same
    //     it.todo("can pop off") makes the empty test pass 
    it("is created empty", () => {

        // toBe checks for the Object reference ({} = {} = false)
        // toEqual checks for the Object value ({} = {} = true)
        expect(stack.top).toBe(-1)
        expect(stack.items).toEqual({})
    })

    it("can push to the top", () => {
        stack.push("item1")
        expect(stack.top).toBe(0)
        expect(stack.peek).toBe(("item1"))

    })


    it("can pop off", () => {
        stack.push("item1")
        stack.pop()
        expect(stack.top).toBe(-1)
        expect(stack.items).toEqual({})
    })
})