import {cleanup, render} from "@testing-library/react"
import { HighlightQuery } from "../HighlightQuery";

afterEach(cleanup);

it("should render", () => {
  const sut = render(HighlightQuery("this is a test string", "test"));
  expect(sut).toMatchSnapshot();
});

it("should render with query being null", () => {
  const sut = render(HighlightQuery("this is a test string", null));
  expect(sut).toMatchSnapshot();
});

it("should render with text being null", () => {
  const sut = render(HighlightQuery(null, "test"));
  expect(sut).toMatchSnapshot();
});

it("should render with custom style", () => {
  const sut = render(HighlightQuery(null, "test", { backgroundColor: "red" }));
  expect(sut).toMatchSnapshot();
});

it("should highlight 'test'", () => {
  const sut = render(HighlightQuery("this is a test string", "test"))/*.setProps(
    {}
  )*/;
  const highlightedSpan = sut.container.querySelector("span > span");
  const style = highlightedSpan?.getAttribute("style");
  expect(style).toContain("font-weight: bold");

  const text = sut.container.querySelector("span > span")?.textContent;
  expect(text).toBe("test");
});

it("should not highlight anything, query undefined", () => {
  const sut = render(
    HighlightQuery("this is a test string", null)
  )/*.setProps({})*/;

  expect(sut.container.children.namedItem("span")).toBeNull();
});

it("should not highlight anything", () => {
  const sut = render(HighlightQuery("this is a test string", ""))/*.setProps({})*/;

  expect(sut.container.children.namedItem("span")).toBeNull();
});

it("should highlight 'test' with custom style", () => {
  const sut = render(
    HighlightQuery("this is a test string", "test", { backgroundColor: "red" })
  )/*.setProps({})*/;

  const highlightedSpan = sut.container.querySelectorAll("span > span")[0];
  const style = highlightedSpan.getAttribute("style");
  expect(style).toContain("background-color: red");
});
