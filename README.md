# ⚡️ Hydrogen Theme

[![Build status](https://github.com/montalvomiguelo/hydrogen-theme/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/montalvomiguelo/hydrogen-theme/actions/workflows/ci.yml?query=branch%3Amain)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://github.com/montalvomiguelo/hydrogen-theme/blob/main/LICENSE.md)

Hydrogen Theme is a framework for building unparalleled performant storefronts on Shopify and Online Store 2.0.

## Features

- 👨‍💻 **Best-in-class DX** - instant reloading powered by [vite-plugin-shopify](https://github.com/barrel/barrel-shopify/tree/main/packages/vite-plugin-shopify)
- 🔋 **Batteries included** - theme files ported over from [Dawn](https://github.com/Shopify/dawn)
- ✨ **Web-native in its purest form** - [it focuses on evergreen browsers](https://github.com/Shopify/dawn/blob/main/.github/CONTRIBUTING.md#web-native-in-its-purest-form)
- 🏝 **Islands architecture** - zero JS by default, [hydrates the interactive bits](https://www.patterns.dev/posts/islands-architecture/)
- 💄 **Integration with Tailwind CSS** - for styling
- 🚀 **Production-ready scores** - as measured in Lighthouse and [PageSpeed Insights](https://pagespeed.web.dev/report?url=https%3A%2F%2Fmontalvomiguelo.myshopify.com%2F)

## Requirements

- [Node.js (latest LTS version)](https://nodejs.org/en/)
- [pnpm](https://pnpm.io/)
- [Shopify CLI](https://shopify.dev/themes/tools/cli)

## Directory Structure

This theme leverages the [default Shopify theme folder structure](https://shopify.dev/themes/tools/github#repository-structure) and introduces the following directories, some of which have special behaviors.

```bash
└── hydrogen-theme
    └── frontend
        ├── entrypoints
        │   └── # only Vite entry files here
        ├── islands
        │   └── # the interactive islands in your theme
        ├── lib
        │   └── # theme specific libraries
        └── styles
            └── # the styles of your theme
```

## Setup

```bash
# Make sure to install the dependencies
pnpm install
```

## Development Server

```bash
# Launch the Shopify and Vite servers in parallel
pnpm dev -- --store johns-apparel --live-reload full-page
```

## Production

```bash
# Bundle your theme's assets and upload your local theme files to Shopify
pnpm run deploy --store johns-apparel
```

Checkout [Shopify CLI commands for themes](https://shopify.dev/docs/themes/tools/cli/commands) for more information.

## Hydration Directives

The following hydration strategies are available (borrowed from [Astro](https://docs.astro.build/en/concepts/islands/)).

- `client:idle` Hydrate the component as soon as the main thread is [free](https://developer.mozilla.org/en-US/docs/Web/API/Window/requestIdleCallback).
- `client:visible` Hydrates the component as soon as the element [enters the viewport](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API).
- `client:media` Hydrates the component as soon as the browser [matches the given media query](https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia).

```html
<is-land client:visible>This is an island.</is-land>
```

## Thanks

We would like to specifically thank the following projects for the inspiration and help regarding the creation of hydrogen-theme:

- [hydrogen](https://github.com/Shopify/hydrogen)
- [Dawn](https://github.com/Shopify/dawn)
- [astro](https://github.com/withastro/astro)
- [iles](https://github.com/ElMassimo/iles)
- [fresh](https://github.com/denoland/fresh)

## License

This project is licensed under the [MIT License](https://github.com/montalvomiguelo/hydrogen-theme/blob/main/LICENSE.md).
