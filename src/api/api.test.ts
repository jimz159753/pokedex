import { getDetails, getTypes } from "./api";
import { mockData, types } from "./mockData";

test('return results from getDetails funct', async () => {
    const result = await getDetails(mockData)
    expect(result).toBeTruthy()
})

test('return results from getTypes funct', async () => {
    const result = await getTypes()
    expect(result).toEqual(types)
})