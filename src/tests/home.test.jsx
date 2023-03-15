import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import TestRenderer, { act } from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Home from '../components/Home';
import store from '../Redux/store';
import { setLoadingFalse } from '../Redux/Slices/brandsFetchSlice';

describe('App', () => {
  it('renders', () => {
    // const history = createMemoryHistory();
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
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Provider>,
    );

    act(() => {
      store.dispatch(setLoadingFalse());
    });
    const header = await screen.getByText(/All Brands Stats/i);
    expect(header).toBeInTheDocument();
  });
});
