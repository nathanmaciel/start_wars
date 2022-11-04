context('blade runner in dev', () => {

  before(() => {
    cy.window().then(win => {
      win.sessionStorage.clear()
    })
    cy.visit('http://localhost:3000/dev')
    cy.findByPlaceholderText('User').then(exist => {
      if(exist) {
        cy.findByPlaceholderText('User').type('demo@krypt.us')
        cy.findByPlaceholderText('Password').type('j3bjgfLxhAannhBm')
        cy.findByText('Sign in').click()
      }
    })
  })

  // it('create New Operation', () => {
  //   cy.findByText('New operation').click()
  //   cy.findByText('Where to search?').click({force: true})
  //   cy.findByText('Users').click({force:true})
  //   cy.findByText('In which one?').click({force:true})
  //   cy.findByText('Instagram').click({force:true})
  //   cy.findByPlaceholderText('Search by Username').type('onathanmaciel' ,{force:true})
  //   cy.findByText('Add Search').click()
  //   cy.intercept('POST', '*map*').as('search')
  //   cy.findByText('Search').click()
  //   cy.wait('@search').then((resp) => {
  //     cy.log('Resp', resp)
  //     cy.findByText('Summary of added searches')
  //     cy.get('.ant-list-items').find('span').contains('onathanmaciel')
  //   })
    
  // })

  it('open content discovery', () => {
      cy.findByText('My operations').click()
      cy.get('.ant-row').find('div').eq(0).findByText('Access').click({force: true})
  })

  
})