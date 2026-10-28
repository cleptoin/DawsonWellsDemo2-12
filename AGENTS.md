# Repository Guidelines

## Project Structure & Module Organization

This repository is currently an empty project scaffold: no application source, tests, assets, or build configuration have been committed. Keep the root uncluttered as the project takes shape. Prefer a conventional layout:

- `src/` for production code, grouped by feature or domain.
- `tests/` for automated tests that mirror the `src/` structure.
- `assets/` for static images, fonts, fixtures, or other non-code resources.
- `docs/` for architecture notes and contributor documentation.

If the chosen framework prescribes another layout, document it here and keep generated output (for example, `dist/`, `build/`, or coverage reports) out of version control.

## Build, Test, and Development Commands

No package manager, build system, or test runner is configured yet. When tooling is added, expose a small, predictable command set and update this section. Recommended command roles are:

- `npm run dev` (or equivalent): start the local development environment.
- `npm run build`: create a production build.
- `npm test`: run the complete automated test suite.
- `npm run lint`: check formatting and static-analysis rules.

Commit the relevant lockfile and ensure these commands work from the repository root.

## Coding Style & Naming Conventions

Adopt the formatter and linter standard for the selected language, and commit their configuration. Use consistent indentation throughout a file. Prefer descriptive names: `PascalCase` for types or components, `camelCase` for functions and variables, and lowercase kebab-case for general filenames unless framework conventions differ. Keep modules focused and avoid unrelated refactors in feature changes.

## Testing Guidelines

Add tests with every behavior change or bug fix. Name tests after the unit or feature under test, such as `gallery.test.ts` or `test_gallery.py`. Cover normal behavior, edge cases, and failure paths. Tests must be deterministic and runnable locally with one documented command.

## Commit & Pull Request Guidelines

There is no existing Git history from which to infer a convention. Use short, imperative commit subjects, optionally following Conventional Commits (for example, `feat: add gallery filtering`). Pull requests should explain the change and verification steps, link related issues, and include screenshots for visual changes. Keep each PR narrowly scoped and ensure all configured checks pass before review.
