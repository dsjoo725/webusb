import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';

describe('App 테스트', () => {
  it('렌더링될 때 "Vite + React + Yarn Berry BoilerPlate"가 화면에 표시되어야 한다.', () => {
    const { getByText } = render(<App />);
    expect(getByText('Vite + React + Yarn Berry BoilerPlate')).toBeInTheDocument();
  });
});
