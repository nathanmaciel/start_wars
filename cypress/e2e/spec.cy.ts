import * as lib from '@testing-library/cypress';

context('star wars test', () => {
  beforeEach(() => {
    cy.window().then(win => {
      win.sessionStorage.clear()
    })
    cy.fixture('films').then(function(data){
      this.data1 = data
      cy.log(data)
    })
    cy.fixture('emptyArray').then(function(data){
      this.data2 = data
      cy.log(data)
    })
    cy.visit('http://localhost:3000')
    cy.findByPlaceholderText('username').type('admin')
    cy.findByPlaceholderText('password').type('Admin123!')
  })

  it('just goes to film page', () => {
    cy.get('button').click();
    cy.findByText('A New Hope').click()
    cy.get('.opCrawl').find('span').eq(1).contains('it is a period of civil war.', {matchCase: false})
  })

  it('intercepts', function() {
    cy.intercept('GET', 'https://swapi.dev/api/films/', {statusCode: 403}).as('getFilms')
    cy.get('button').click()
    cy.wait('@getFilms').then(resp => cy.log('Response', resp))
    cy.findByText('Teste de intercept A New Hope').should('exist')
  })

  // it('intercepts 2', function() {
  //   cy.intercept('GET', 'https://swapi.dev/api/films/', this.data2).as('getFilms2')
  //   cy.get('button').click()
  //   cy.wait('@getFilms2').then(resp => cy.log('Response', resp))
  // })

  // it('goes to film page', () => {
  //   cy.get('button').click();
  //   cy.intercept('GET', '*/people/*', {
  //     statusCode: 201,
  //     body: {
  //       name: 'Teste'
  //     }
  //   }).as('getFilms2')
  //   cy.findByText('A New Hope').click()
  //   cy.get('.opCrawl').find('span').eq(1).contains('it is a period of civil war.', {matchCase: false})
  // })
})