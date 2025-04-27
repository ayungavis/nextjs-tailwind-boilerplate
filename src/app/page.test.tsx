import type { RenderResult } from '@testing-library/react';
import { render, screen } from '@testing-library/react';
import { beforeAll, describe, expect, it } from 'vitest';

import HomePage from './page';

let renderResult: RenderResult;

describe('HomePage', () => {
  beforeAll(() => {
    renderResult = render(<HomePage />);
  });

  it('renders without crashing', () => {
    expect(renderResult).toBeTruthy();
  });

  it('renders the heading with the correct text', () => {
    const heading = screen.getByRole('heading', { level: 1, name: /home/i });
    expect(heading).toBeInTheDocument();
  });

  it('renders the paragraph with the correct text', () => {
    const paragraph = screen.getByText(/get started by editing/i);
    expect(paragraph).toBeInTheDocument();
  });

  it('renders the code block with the correct file path', () => {
    const codeBlock = screen.getByText(/src\/app\/page\.tsx/i);
    expect(codeBlock).toBeInTheDocument();
  });
});
