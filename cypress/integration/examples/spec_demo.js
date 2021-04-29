describe('My First Test', () => {
    it('Does not do much!', () => {
      expect(true).to.equal(true)
    })

    // Failing Test case again
    it('Failed Test', () => {
        expect(true).to.equal(false)
      })
    
    // adding another passing test 
    it('Arithmetic Test',() => {
        expect(2+5).to.equal(7)
    })
    
  })