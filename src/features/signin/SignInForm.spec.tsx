import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { SignInForm } from './SignInForm';

describe('Tests for <App />', () => {
    afterEach(cleanup);

    test('It renders without crashing', () => {
        render(<SignInForm />);
    });
});