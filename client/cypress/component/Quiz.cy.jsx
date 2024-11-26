import React from 'react';
import { mount } from 'cypress/react18';
import Quiz from '../../src/components/Quiz';

describe('<Quiz />', () => {
  it('should display questions and handle answers correctly', () => {
    // Intercept the API call and return mockQuestions
    cy.fixture('questions.json').then((mockQuestions) => {
      // Intercept the API call and return mockQuestions
      cy.intercept('GET', '/api/questions/random', {
        statusCode: 200,
        body: mockQuestions,
      }).as('getQuestions');

      // Mount the Quiz component
      mount(<Quiz />);

      // Start the quiz
      cy.get('button').should('contain.text', 'Start Quiz');

      // Start the quiz
      cy.get('button').contains('Start Quiz').click();

      // Wait for the API call to complete
      cy.wait('@getQuestions');

      // TODO: Complete the test code to answer both mock questions and ensure the score is correct at the end of the quiz

      cy.get('div.card');

 
      cy.get('h2').contains('What does the method append() do in a list?');

 
      cy.get('button').contains('1');
      cy.get('button').contains('2');
      cy.get('button').contains('3');
      cy.get('button').contains('4');
      cy.get('div').contains('Adds a new element at the end of the list');
      cy.get('div').contains('Removes the last element of the list');
      cy.get('div').contains('Sorts the list in ascending order');
      cy.get('div').contains('Removes all elements from the list');

   
      cy.get('button').contains('1').click();

   
      cy.get('div.card');

     
      cy.get('h2').contains('How do you create a tuple in Python?');

    
      cy.get('button').contains('1');
      cy.get('button').contains('2');
      cy.get('button').contains('3');
      cy.get('button').contains('4');
      cy.get('div').contains('[]');
      cy.get('div').contains('{}');
      cy.get('div').contains('()');
      cy.get('div').contains('tuple[]');


      cy.get('div button').contains('3').click();

      cy.get('h2').contains('Quiz Completed');

      cy.get('div').contains('2/2');

      cy.get('button').contains('Take New Quiz')

    });
  });
});