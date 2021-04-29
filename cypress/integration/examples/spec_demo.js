describe('My First Test', () => {
    it('Does not do much!', () => {
      expect(true).to.equal(true)
    })

    // Failing Test case
    it('Does not do much!', () => {
        expect(true).to.equal(false)
      })
  })