import type { RenderResult } from "@testing-library/react";
import { render, screen } from "@testing-library/react";
import { beforeAll, describe, expect, it } from "vitest";

import HomePage from "./page";

let renderResult: RenderResult;

// Define regex patterns at top level for better performance
const HOME_HEADING_REGEX = /home/i;
const GET_STARTED_REGEX = /get started by editing/i;
const FILE_PATH_REGEX = /src\/app\/page\.tsx/i;

describe("HomePage", () => {
  beforeAll(() => {
    renderResult = render(<HomePage />);
  });

  it("renders without crashing", () => {
    expect(renderResult).toBeTruthy();
  });

  it("renders the heading with the correct text", () => {
    const heading = screen.getByRole("heading", {
      level: 1,
      name: HOME_HEADING_REGEX,
    });
    expect(heading).toBeInTheDocument();
  });

  it("renders the paragraph with the correct text", () => {
    const paragraph = screen.getByText(GET_STARTED_REGEX);
    expect(paragraph).toBeInTheDocument();
  });

  it("renders the code block with the correct file path", () => {
    const codeBlock = screen.getByText(FILE_PATH_REGEX);
    expect(codeBlock).toBeInTheDocument();
  });
});
