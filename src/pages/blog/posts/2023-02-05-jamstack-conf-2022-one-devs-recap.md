---
layout: ../../../layouts/BlogPost.astro
title: Jamstack Conf 2022 - One Dev's Recap
description: One developer's recap of Netlify's Jamstack Conf 2022. It's me. I'm
  the developer.
pubDate: 2022-11-29T12:00:33-05:00
draft: false
rssOnly: false
featuredImage: /assets/a873caca-b355-4e47-8d24-b3ec2c350879_20221108_162354.jpeg
featuredImageAlt: Phil Hawksworth getting the crowd ready for the next speaker
  at Jamstack Conf 2022
---
It's already been almost a month since Netlify's 2022 Jamstack Conf. In that time, I've been trying to get my thoughts of this year's event for all things "Jamstack" on paper.

The short version of those thoughts: the Jamstack has not changed much at all. Its concepts and practices are pretty well documented at this point, if not by [the company that coined the term in 2015](https://sdtimes.com/webdev/jamstack-brings-front-end-development-back-into-focus/), then by the robust community and ecosystem backing it.

What has changed are the problems and challenges the Jamstack community is trying to solve today. In years past, the big question was, "How do developers get a website stood up faster and less painfully without maintaining a server?" That question has been answered by now. All kinds of solutions are offered by the likes of [Vercel](https://vercel.com/), [AWS](https://aws.amazon.com/amplify/), [Cloudflare](https://pages.cloudflare.com/), [Github](https://pages.github.com/), and [Netlify](https://www.netlify.com/) itself. And that's great, but as with anything that needs to scale, it seems answering that one question has uncovered more.

- "How do we keep this ecosystem healthy?"
- "How do we help non-technical people contribute?"
- "How do we get our content to users faster?"

In my mini-recap of Jamstack Conf, I mentioned a few themes strung across the whole conference: **collaboration**, **abstraction**, and **access**. This post will aim to elaborate a bit on what I saw of those themes.

Recordings of the talk are starting to make their way onto [the @JamstackConf YouTube channel](https://www.youtube.com/@JamstackConf), so I'll add links to the ones I mention here as they're made available. Until then, I'll try and do the general vibe of the conference and Phil Hawksworth's hosting justice.

## Abstraction (or "How Third-Party Tools Help Take the Pain Away")

As Bud Abbott once said, "Now wouldn't this be a fine [baseball] team without a pitcher?" Well, wouldn't the Jamstack be a fine architecture without abstractions? Every year, Jamstack Conf highlights what abstractions can do for developers. This year was no different, with presentations covering libraries, frameworks, and as-a-Service... services.

Some talks felt like seeing the sentiments of Chris Coyier's [2018](https://www.youtube.com/watch?v=grSxHfGoaeg) and [2019](https://www.youtube.com/watch?v=lFOfQsi5ye0) Jamstack Conf talks become manifest. Amy Dutton of the [COMPRESSEDfm](https://compressed.fm/) podcast talked about how she and her co-host, James Q. Quick, [built all kinds of nifty features and tooling](https://www.youtube.com/watch?v=WrqoANCpA7w) into their podcast's website leveraging Jamstack tools. Phil chatted with Aaron Emery and Kady Wood about [how TripActions bet on the Jamstack](https://www.youtube.com/watch?v=AsycaWgpmys) to move their monolithic marketing project towards more nimble tooling.

Other presentations highlighted the many challenges teams can face on various technical levels and offered innovative solutions. The abstractions available to developers today are bonkers compared to where we were a few years ago. Content managements systems were of course well represented, but the Jamstack has clearly grown much further than that. Services on display covered problem areas including database management and orchestration, websockets, eCommerce, collaborative design, and monorepo build systems. A few that caught my eye in particular:

- [Clutch](https://clutch.io/), providing visual tools that allow designers to work on a canvas while allowing devs to use code for prototyping.
- [Ably](https://ably.com/), aiming to simplify the development and management of websockets and realtime communication
- [TanStack Router](https://tanstack.com/router/v1), which offers framework-agnostic, type-safe routing and serialized state management
- [Qwik](https://qwik.builder.io/), a new front-end framework that focuses on resumability instead of hydration to send as little JavaScript as possible with amazingly fast time-to-interactive.

## Collaboroation (or "Why Can't We Be Friends?")

Many of the services I mentioned offered features that let non-technical people contribute in technical ways. More crucially, though, a few of the presentations stressed the importance of **how** we enable others to contribute. Sanity's [Knut Melvær](https://twitter.com/@kmelve) drove home why caring about the content creator is important, and how Markdown isn't helping. OSS organizations and maintainers discussed how they're welcoming the cross-pollination of ideas more in recent years. Personally, Iooking at the open-source space today, I think it shows!

One panel of independent framework developers discussed [the importance of working together and inspiring each other's work on community-driven tools](https://www.youtube.com/watch?v=bPTZmUR7z90) instead of dogmatically black-boxing ideas. Another panel, this time of database experts, highlighted [the concerns of scaling database management today](https://www.youtube.com/watch?v=yIoFpfr4vA0) . Yet another discussed the problems of building runtimes and logic closer and closer to the edge.

The overarching sense I came away with was that many people in tech are all trying to solve similar problems. So why make it difficult for others to help solve them? Why fight over what the "silver bullet" answer to every edge case might be? These kinds of open conversations are encouraging and healthy for the community. They show that, despite competition, there's collaboration and stewardship involved in finding the solutions.

## Access (or "How I Learned to Stop Worrying and Embrace the Edge")

It felt like almost every talk acknowledged the potential of leveraging "the Edge." So much so that I effectively learned more about what that phrase meant at Jamstack Conf than anywhere else. And that's coming from someone who currently works at a cloud service provider!

Cloudflare's Obinna Ekwuno and Netlify's Erica Pisani gave great talks that helped define what the Edge is to developers and users. Erica taught us about the [benefits of leveraging edge functions](https://www.youtube.com/watch?v=Bg_lPsOhfuc), while Obinna dicussed the [challenges of deploying databases closer to the user](https://www.youtube.com/watch?v=SxGDut4or8A). Obinna's points and concerns were also echoed in the databases panel I mentioned earlier, particularly in figuring out how to abstract the database away from developers while maintaining up-to-date state close to the user.

The real highlight for me around this topic was the edge runtimes panel. Despite copious amounts of notes, I feel like I need to watch it a couple more times to get everything! It serves as a pretty good study of what the Edge represents and where it's going. Much of the conversation reminded me of the "next billion users" concern that became popular a while back. As access to the Internet becomes increasingly common worldwide, how do you give users the same responsive experience whether they have high or low connection speeds? As more developers start building applications at scale, what are the acceptable tradeoffs to keep data healthy and in sync?

## So, so much more and so little time.





![](assets/08e139e8-646b-40b2-9d55-e63a182b2194_20221108_134209-1-copy.jpg)
I'm missing a lot here. It's really hard to bottle my experience at this conference and confidently say I'm doing Phil justice here. Everything I've touched on doesn't even cover the "hallway track." When I missed talks, I was having fascinating conversations with vendors at their booths, with folks about their thoughts on challenges I'm trying to solve, or even just in passing. Nevertheless, it was nothing short of a fantastic experience.

I'd like to shout out to everyone who made my time at Jamstack Conf 2022 such a delight! Thank yous again to [Jo Franchetti](https://twitter.com/thisisjofrank), [Alex Trost](https://twitter.com/trostcodes), [Matt Biilmann](https://twitter.com/biilmann), [Sara Viera](https://twitter.com/NikitaFTW), [Ben Hong](https://twitter.com/bencodezen),  [Brian Douglas](https://twitter.com/bdougieyo), [Chris Bach](https://twitter.com/chr_bach), and [Jem Young](https://twitter.com/jemyoung), as well as to [Caleb Jasik](https://twitter.com/calebjasik), [Misko Hevery](https://twitter.com/mhevery), [Dana Lawson](https://www.linkedin.com/in/dglawson/), [Zach Leatherman](https://twitter.com/zachleat/), [Phil Hawksworth](https://twitter.com/philhawksworth), [Jason Lengstorf](https://twitter.com/jlengstorf), [Monica Sarbu](https://twitter.com/monicasarbu), and anyone else I may have forgotten! I know everyone here is just a regular person, but it'd be a lie to say I wasn't a bit starstruck.

One more thing: if you managed to make it to the end of this recap and you yourself have not attended a conference, I implore that you make attending one a goal. Even if it's a small one without a ton of coverage or big names, I encourage you find out where one is, whether their code of conduct is up to snuff, and if it is and you're up to it, try and attend. Network with people, speak about what you're concerned about, and add your voice to the conversation. The ecosystem needs it, and you'll be all the better for the experience later.
