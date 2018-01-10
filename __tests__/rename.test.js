const fs = require("fs")
const {rename} = require("../lib/index")
const {resolve} = require("path")
const inputFile = resolve(__dirname + "/testfiles/rename/input.md")
const reset = fs.readFileSync(inputFile, "utf-8")
const outputBase = __dirname + "/testfiles/rename/output/"

test("Rename key-value pair", () => {
    rename(inputFile, "key", "key_test",  {})
    const output = fs.readFileSync(inputFile, "utf-8")
    const expected = fs.readFileSync(resolve(outputBase, "keyValuePair.md"), "utf-8")
    fs.writeFileSync(inputFile, reset, "utf-8")

    expect(output).toBe(expected)
})

test("Fail to rename non-existent key-value pair", () => {
    rename(inputFile, "key_test", "key",  {})
    const output = fs.readFileSync(inputFile, "utf-8")
    const expected = reset
    fs.writeFileSync(inputFile, reset, "utf-8")

    expect(output).toBe(expected)
})

test("Rename nested key-value pair", () => {
    rename(inputFile, "object.key1", "key1_test",  {})
    const output = fs.readFileSync(inputFile, "utf-8")
    const expected = fs.readFileSync(resolve(outputBase, "nestedKeyValuePair.md"), "utf-8")
    fs.writeFileSync(inputFile, reset, "utf-8")

    expect(output).toBe(expected)
})

test("Fail to rename non-existent nested key-value pair", () => {
    rename(inputFile, "object.key1_test", "key1",  {})
    const output = fs.readFileSync(inputFile, "utf-8")
    const expected = reset
    fs.writeFileSync(inputFile, reset, "utf-8")

    expect(output).toBe(expected)
})

test("Rename array", () => {
    rename(inputFile, "array", "array_test",  {})
    const output = fs.readFileSync(inputFile, "utf-8")
    const expected = fs.readFileSync(resolve(outputBase, "array.md"), "utf-8")
    fs.writeFileSync(inputFile, reset, "utf-8")

    expect(output).toBe(expected)
})

test("Fail to rename array", () => {
    rename(inputFile, "array_test", "array",  {})
    const output = fs.readFileSync(inputFile, "utf-8")
    const expected = reset
    fs.writeFileSync(inputFile, reset, "utf-8")

    expect(output).toBe(expected)
})

test("Rename array of objects key value pair", () => {
    rename(inputFile, "arrayOfObjects.key1", "key1_test",  {})
    const output = fs.readFileSync(inputFile, "utf-8")
    const expected = fs.readFileSync(resolve(outputBase, "arrayOfObjects.md"), "utf-8")
    fs.writeFileSync(inputFile, reset, "utf-8")

    expect(output).toBe(expected)
})

test("Fail to rename array of objects key value pair", () => {
    rename(inputFile, "arrayOfObjects.key1_test", "key1",  {})
    const output = fs.readFileSync(inputFile, "utf-8")
    const expected = reset
    fs.writeFileSync(inputFile, reset, "utf-8")

    expect(output).toBe(expected)
})