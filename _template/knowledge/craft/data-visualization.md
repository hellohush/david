# Data Visualization

Principles for presenting data beautifully and honestly.

## Core Principles

- **Data first, decoration second.** Every visual element should encode
  information. Remove anything that doesn't.
- **Don't make the user do math.** If they need to compare two numbers,
  show the comparison — don't make them calculate it.
- **Label directly.** Prefer labels on the data itself over legends that
  require back-and-forth scanning.
- **Honest scales.** Start bar charts at zero. Don't truncate axes to
  exaggerate differences.

## Chart Selection

| Data type | Chart |
|-----------|-------|
| Comparison across categories | Bar chart (horizontal for many categories) |
| Change over time | Line chart |
| Part of a whole | Stacked bar or treemap (avoid pie charts) |
| Distribution | Histogram or box plot |
| Correlation | Scatter plot |
| Single important number | Big number with context (trend, comparison) |

## Design Guidelines

- **Color**: Use color-blind-friendly palettes. Max 5-7 colors in one chart.
  Use color to highlight, not just to differentiate.
- **Typography**: `font-variant-numeric: tabular-nums` for data. Right-align
  numbers for comparison. Left-align text.
- **Gridlines**: Light and minimal. They're guides, not features.
- **Interactivity**: Tooltips for detail. Hover highlighting for context.
  Click to drill down.

## Dashboards

- **One story per section.** Each dashboard section answers one question.
- **Big numbers need context.** "2,340" means nothing. "2,340 (+12% from last month)" tells a story.
- **Progressive disclosure.** Summary at the top, detail on drill-down.
- **Update frequency should be visible.** "Updated 5 minutes ago."

## Anti-Patterns

- Pie charts for more than 3-4 segments
- 3D charts (they distort perception)
- Dual Y-axes (nearly always confusing)
- Rainbow color scales
- Truncated axes that exaggerate small differences
- Animation that delays comprehension
