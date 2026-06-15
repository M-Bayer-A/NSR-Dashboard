export const customIcons = {
  people: "people_icon",
  report: "report_icon",
  tool: "tool_icon",
  papers: "paper_icon",
  home: "home_icon",
  categories: "categories_icon",
};

export function getIcon(icon) {
  return `/icons/${icon}.svg`;
}
