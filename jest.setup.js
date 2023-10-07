import '@testing-library/jest-dom'


expect.extend({
  toBeEven(received) {
    const pass = received % 2 === 0
    if (pass) {
      return {
        message: () => `Expected ${received} not to be even`,
        pass: true,
      }
    } else {
      return {
        message: () => `Expected ${received} to be even`,
        pass: false,
      }
    }
  },
})
