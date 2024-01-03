import {add}  from "./index"

test("adds two numbers correctly", () => {
    const result = add(1,1)
    expect(result).toEqual(2)
})