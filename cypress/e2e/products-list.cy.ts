describe('ProductsList Component', () => {

	beforeEach(() => {
	  cy.intercept('GET', '/api/jobs', {
		statusCode: 200,
		body: [
		  { id: 1, name: 'Product 1', price: 100 },
		  { id: 2, name: 'Product 2', price: 200 },
		],
	  }).as('getJobs');
  
	  cy.visit('/path-to-page-containing-products-list');
	});
  
	it('should display a list of products', () => {
	  cy.wait('@getJobs');
  
	  cy.get('.list_container').should('exist');
  
	  cy.get('.product-card').should('have.length', 2);
	  cy.contains('Product 1').should('be.visible');
	  cy.contains('Product 2').should('be.visible');
	});
  
	it('should show a placeholder image for products', () => {
	  cy.wait('@getJobs');
  
	  cy.get('.product-card img')
		.should('have.attr', 'src')
		.and('include', 'https://via.placeholder.com/150');
	});
  
	it('should handle loading state', () => {
	  cy.intercept('GET', '/api/jobs', {
		statusCode: 200,
		body: [],
		delay: 5000,
	  }).as('getJobsDelayed');
  
	  cy.visit('/path-to-page-containing-products-list');
  
	  cy.get('.loading-spinner').should('exist');
	});
});
