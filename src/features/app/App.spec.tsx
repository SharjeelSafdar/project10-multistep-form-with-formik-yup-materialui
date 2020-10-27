import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { App } from './App';

describe('Tests for <App />', () => {
    afterEach(cleanup);

    test('It renders without crashing', () => {
        render(<App />);
    });
});