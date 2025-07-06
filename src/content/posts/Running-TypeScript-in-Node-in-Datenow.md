---
title: Running TypeScript in Node in Date.now()
pubDate: 2025-07-06T00:39:06.276Z
updatedDate: 2025-07-06T05:51:31.609Z
description: Reminding myself of a quick way to run TypeScript
draft: false
---

> TL;DR: Use [tsx](https://tsx.is/) as a modern replacement for tools like ts-node and nodemon.

Platforms like [Deno](https://deno.com/) and [Bun](https://bun.sh/) support TypeScript out of the box. However, peek into any API-related course using TypeScript like I did recently, and you'll likely be working with [Node](https://nodejs.org/en). The particular API design course I used was a bit dated by a few years, from before when Node supported native ESM imports. The instructions asked students to install [ts-node](https://www.npmjs.com/package/ts-node), a TypeScript engine and REPL, to run TypeScript files locally.

Unfortunately, that was a roadblock for me, throwing type errors left and right when I tried to start my development server. No matter how many errors I fixed or changes I made to my config, if my app didn't throw:

`TypeError: Unknown file extension ".ts"`,

it was throwing:

`Error: Cannot find module './index.js'`.

Part of the problem, I'm guessing, was that I was using newer versions of Node and TypeScript than the course was designed for, with [pnpm](https://pnpm.io/) instead of npm to boot. The course was released back when `ts-node` was the common approach. The [ts-node project](https://github.com/TypeStrong/ts-node) hasn't received updates since then, so there was likely some discrepancy between what would work then versus now. This might be old news for TypeScript developers working on APIs everyday, but as a front-end developer trying to refresh my full-stack skills, silly me for not remembering the pace of JavaScript's innovation.

Finding a solution for running TypeScript projects locally was a frustrating rabbit hole. Typical TypeScript development calls for code to be compiled with the [tsc](https://www.typescriptlang.org/docs/handbook/compiler-options.html) CLI before restarting the server for every change you might want to test. A Google search for a solution to smooth that experience out kept turning up dated content with titles like "How to set up a Node server with TypeScript in (insert any year after 2020 here)," all basically recommending `ts-node`. The circular nature of my predicament frustrated me enough to almost put down the work altogether.

Thankfully, I came across [tsx](https://tsx.is/). According to its documentation, tsx is designed to "enhance" Node.js, with support for CommonJS and ESM modes, and a built-in Watch mode to restart development servers on every saved change. Beyond being an easy drop-in replacement for ts-node, it can also be [used in place of Node commands](https://tsx.is/node-enhancement).

The big benefit I've enjoyed from `tsx` is not needing to toss out my coursework to start over with another version of Node. I could have tried to use newer versions of Node now that [TypeScript is supported natively](https://nodejs.org/en/learn/typescript/run-natively), sure, but then, I'd need to figure out what else might be compatible or incompatible, and at that point, I might as well be forget about API design and start writing my own course!

The point is, `tsx` is a quick and easy way to run TypeScript files with little fuss around configuration, and it's with that in mind that I'm writing this post. I hope other developers who need a quick solution can find this and avoid the dated solutions still topping the search results today. If you're one of them, please ping me on [Bluesky](https://bsky.app/profile/charlesvillard.co)! I'd love to know how it worked for you.
