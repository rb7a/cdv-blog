---
title: Running TypeScript in Node in Date.now()
pubDate: 2025-07-06T00:39:06.276Z
description: Reminding myself of a quick way to run TypeScript
draft: true
---

> TL;DR: Use [tsx](https://tsx.is/) as a modern replacement for tools like ts-node and nodemon.

As of writing, plenty of solutions exist that support TypeScript out of the box like [Deno](https://deno.com/) and [Bun](https://bun.sh/). However, if you're learning server-side programming with TypeScript from a course like I was recently, it's highly likely the instructor was working with [Node](https://nodejs.org/en). For this particular course, the instructor had us install [ts-node](https://www.npmjs.com/package/ts-node), a TypeScript engine and REPL that's advertised to let you run TypeScript locally from .ts files.

 that's unfortunately not seen many updates in recent years.

If you search for ways to run TypeScript projects locally, you're in for one treat of a rabbit hole. Lots of prior art has been created in the form of YouTube videos, blog posts, and AI summaries that will pitch you, me, and other developers on a variety of solutions involving ts-node and another package, [nodemon](https://nodemon.io/). That's honestly a bit frustrating to me, as while many developers familiar with TypeScript and Node API development might know a better solution, people like me learning about this stuff will likely try it out, find themselves stuck, get frustrated, and drop the whole thing.

Thankfully, I came across tsx in the nick of time. It works practically as a drop-in
