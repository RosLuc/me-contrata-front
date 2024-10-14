describe('ProductsList Component', () => {

	beforeEach(() => {
	  cy.intercept('GET', 'http://localhost:3001/job?category=&orderBy=created_at&order=ASC', {
		statusCode: 200,
		body: [
		  { id: 1, name: 'Product 1', price: 100 },
		  { id: 2, name: 'Product 2', price: 200 },
		],
	  }).as('getJobs');
  
	  cy.visit('http://localhost:3000/jobs');
	});
  
	it('should display a list of products', () => {
	  cy.wait('@getJobs');
  
	  cy.get('[class*="list_container"]').should('exist');
  
	  cy.get('[class*="card"]').should('have.length', 2);
	  cy.contains('Product 1').should('be.visible');
	  cy.contains('Product 2').should('be.visible');
	});
  
	it('should show a placeholder image for products', () => {

	  cy.wait('@getJobs');
  
	  cy.get('[class*="card"] img')
		.should('have.attr', 'src')
		.and('include', 'https://via.placeholder.com/150');
	});
});
