import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import TestRenderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Home from '../components/Home';
import store from '../Redux/store';
import Header from '../components/Header';

describe('App', () => {
  it('renders', () => {
    const tree = TestRenderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Test for Heading === Home', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </Provider>,
    );
    const header = screen.getByText(/Home/);
    expect(header).toBeInTheDocument();
  });

  it('Test for Heading === Brands', async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Home />
        </BrowserRouter>
      </Provider>,
    );
    const header = await screen.getAllByText(/Brands/i);
    expect(header).toBeTruthy();
  });
});
