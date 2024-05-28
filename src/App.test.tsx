import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';

describe('App component', () => {
  it('올바른 제목을 렌더링해야 한다.', () => {
    const { getByText } = render(<App />);
    expect(getByText('Vite + React + Yarn Berry BoilerPlate')).toBeInTheDocument();
  });
});
