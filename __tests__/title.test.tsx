import { render, screen } from "@testing-library/react";
import Title from "../app/components/title";

describe("テストが動くかのテスト", () => {
  test("titleが表示される", () => {
    render(<Title />);
    expect(screen.getByTestId("title"));
  });
});
