# ODS-Demo

This is a [Next.js](https://nextjs.org) application utilizing [TypeScript](https://www.typescriptlang.org), 
[React](https://reactjs.org) and [Tailwind CSS](https://tailwindcss.com) to isolate integration issues
with the OneExperience Design System (ODS).



## Getting Started

Ensure that you have run ./install.sh in main project to install pnpm and node in correct version:

```bash
node use 20
pnpm install
pnpm run dev
```

## .npmrc for Telekom OneDesign package authentication

You need to have your .npmrc file in the root of the project with an artifactory token:

```text
@telekom-ods:registry=https://artifactory.devops.telekom.de/artifactory/api/npm/one-design-system-npm/
//artifactory.devops.telekom.de/artifactory/api/npm/one-design-system-npm/:_authToken=TOKENTOKENTOKENTOKENTOKENTOKENTOKENTOKENTOKEN
ignore-scripts=false
```
