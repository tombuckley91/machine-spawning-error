This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

### Volta

We use [Volta](https://docs.volta.sh/guide/) to ensure a consistent version of Node in both development and production, please install Volta and it will automatically pick up both Node & NPM versions from the `package.json` file.

### Development

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Go Live Requirements

1. The current logo that appears in the header needs swapping out for a higher resolution image

## Intentional Deviations from Initial Design

1. The "Navigation Menu" in the top right of the site previously used 10px font, this is unnecessarily small given there's no size constraint forcing it to be that small.
