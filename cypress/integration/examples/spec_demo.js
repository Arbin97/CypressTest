describe('My First Test', () => {
    it('Does not do much!', () => {
      expect(true).to.equal(true)
    })

    // passing Test case again
    it('Passing Test', () => {
        expect(2+3).to.equal(5)
      })
    
    // adding another passing test 
    it('Arithmetic Test',() => {
        expect(2+5).to.equal(7)
    })

  })