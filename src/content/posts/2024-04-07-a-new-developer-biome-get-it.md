---
title: Trying out a new developer Biome (get it?!)
description: Developer experience is just as much about shedding bytes and time
  off the user experience as website performance is. Biome helps with that in a
  major way.
pubDate: 2024-04-07T17:20:14.945-04:00
draft: true
rssOnly: false
---
These days at work, I'm responsible for maintaining a new global common header built using TypeScript and linted using ESLint. These are bog standard tools in our industry these days. However, set

TypeScript has some linting built-in, especially when using VS code which can offer TS linting without TS installed in a project. In my experience, this typically won't stop a build in the way ESLint can be made to. An alternative to ESLint that I would recommend is [Biome.js](https://www.biomejs.dev), which comes with linting and formatting for many languages built-in including TypeScript. This means no ESLint-specific dependencies and plugins just to have TypeScript in the environment.

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
