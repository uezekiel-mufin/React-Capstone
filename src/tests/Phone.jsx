import React from 'react';
import TestRenderer, { act } from 'react-test-renderer';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { createMemoryHistory } from '@remix-run/router';
import { BrowserRouter, Router } from 'react-router-dom';
import store from '../Redux/store';
import Phones from '../components/Phone';

describe('App', () => {
  it('renders', () => {
    const history = createMemoryHistory();
    const route = '/brands/acer';
    history.push(route);
    const tree = TestRenderer.create(
      <Provider store={store}>
        <BrowserRouter history={history}>
          <Phones />
        </BrowserRouter>
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
