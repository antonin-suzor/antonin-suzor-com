# [antonin-suzor-com](https://www.antonin-suzor.com)

My personal website.

## How-to

Run the website locally:

```bash
bun install
bun run dev
```

## Contributing

Enable the Prettier pre-commit hook once after cloning:

```bash
git config core.hooksPath .githooks
```

It auto-formats staged files on commit. You can also format everything manually with `bun run format`, or check the project with `bun run check`.
