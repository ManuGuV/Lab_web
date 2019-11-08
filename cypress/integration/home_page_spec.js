describe('Test home page', function() {
    it('successfully loads', function() {
      cy.visit('/') // change URL to match your dev URL
    })
  })

  describe('Test Login', function() {
    it('successfully loads', function() {
      cy.visit('/Login') // change URL to match your dev URL
    })
  })

  describe('Test MyFiles', function() {
    it('successfully loads', function() {
      cy.visit('/MyFiles') // change URL to match your dev URL
    })
  })

  describe('Test QR', function() {
    it('successfully loads', function() {
      cy.visit('/QR') // change URL to match your dev URL
    })
  })

  describe('Test QR_not_user', function() {
    it('successfully loads', function() {
      cy.visit('/QR_not_user') // change URL to match your dev URL
    })
  })

  describe('Test Signup', function() {
    it('successfully loads', function() {
      cy.visit('/Signup') // change URL to match your dev URL
    })
  })

  describe('Test DeleteAccount', function() {
    it('successfully loads', function() {
      cy.visit('/DeleteAccount') // change URL to match your dev URL
    })
  })