import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import TestRenderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import { createMemoryHistory } from '@remix-run/router';
import Home from '../components/Home';
import store from '../Redux/store';
import Brands from '../components/Brands';

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

  it('Test for header', async () => {
    const history = createMemoryHistory();
    const route = '/';
    const obj = {
      brand_id: 59,
      brand_name: 'Acer',
      brand_slug: 'acer-phones-59',
      detail: 'http://phone-specs-api.azharimm.dev/brands/acer-phones-59',
      device_count: 100,
    };
    render(
      <Provider store={store}>
        <BrowserRouter location={history.location} navigator={history}>
          <Home />
          <Brands brand={obj} />
        </BrowserRouter>
      </Provider>,
    );
    //   const brand=await screen.getByText(/Acer/i);
    const user = userEvent.setup();
    const brand = await waitFor(() => screen.getByText(/Acer/i));
    expect(brand).toBeInTheDocument();

    await user.click(brand);

    await expect(history.location.pathname).toMatch(route);
  });
});
