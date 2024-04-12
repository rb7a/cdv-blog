---
title: Trying out a new developer Biome (get it?!)
description: Developer experience is just as much about shedding bytes and time
  off the user experience as website performance is. Biome helps with that in a
  major way.
pubDate: 2024-04-07T17:20:14.945-04:00
featuredImage: ""
featuredImageAlt: ""
draft: false
rssOnly: false
---
These days at work, I'm responsible for maintaining a new global common header. It's built with web components using [Microsoft FAST](https://www.fast.design/) elements and TypeScript, with ESLint for linting and formatting. The setup is pretty bog-standard, and really common these days. Visual Studio Code offers Intellisense for TypeScript and JavaScript out of the box, but adding ESLint for TypeScript requires adding a few other packages to your project. Which may not be the end of the world, but it does mean more dependencies to download and manage, which inherently chips away at the developer experience.

An alternative to ESLint I've started trying out is [Biome.js](https://www.biomejs.dev). The history behind this package is fascinating, but long story short, it spawned from the abandoned work of Rome Tools, an project promising to replace ESLint and Prettier unfortunately plagued with problems. Biome is still aims to provide that complete ecosystem with linting and formatting for many flavors of JavaScript built-in including TypeScript. This means no ESLint-specific dependencies and plugins just to have TypeScript in the environment.

So while all of these are developer dependencies, the difference is still pretty significant. For my particular project, I ended up replacing of this:

```

@typescript-eslint/eslint-plugin:    2.680MB

@typescript-eslint/parser       :    0.018MB

eslint-plugin-headers           :    0.052MB

eslint-config-airbnb-base       :    0.094MB

eslint                          :    3.030MB

____________________________________________

Total size of files             :    5.874MB

```

with just:

```

@biomejs/biome                  :    0.130MB

```

And effectively getting the same thing. Now, your milage may vary, of course; and I'm still testing through it before I release it to production, but it's that much less to worry about installing every time.
