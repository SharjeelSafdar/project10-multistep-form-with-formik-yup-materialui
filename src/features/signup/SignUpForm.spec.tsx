import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { SignUpForm } from './SignUpForm';

describe('Tests for <App />', () => {
    afterEach(cleanup);

    test('It renders without crashing', () => {
        render(<SignUpForm />);
    });
});