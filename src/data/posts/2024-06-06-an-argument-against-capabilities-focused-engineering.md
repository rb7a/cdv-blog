---
title: An argument against capabilities-focused engineering
pubDate: 2024-06-06T12:35:58.000Z
updatedDate: 2024-06-07T03:51:40.906Z
description: >-
  An open statement to companies who don't realize that 'good enough' is a weak
  excuse for bad practices.
rssOnly: false
draft: true
---

Since becoming a software engineer, a common question I've received is, "What are my greatest strengths and weaknesses?" My typical answers revolve around hyperfocusing on details and problems that are not typically customer-facing. Superiors have called me out for obsessing over CSS, wanting to replace libraries, or wanting time to invest in rewriting parts of a project. I'm talked down from these ledges, just as often, with kind yet foreboding overtures like "It's good enough," "You can obsess over that once this epic has is closed," and similar statements.

A former colleague pointed out an interesting phrase that encapsulates that kind of thinking: capabilities mindset, wherein an organization will take the time to build something that's "just good enough." Once it's running, as long as it serves its purpose reliably, resources can focus on other efforts.

The definition of the term likely isn't accurate, at least not at first blush when you look it up online, but that is certainly a common sentiment I see in enterprise web development and even in some mid-sized practices. Once a service is up and running, so long as nothing is firing off any alarm bells, the common practice is to leave it alone and move on. Every six months, you might address some CVEs should they pop up, but you never update the core software, and you always leave old code commented out just in case you need it later.

The unfortunate side-effect I've witnessed over the years of this version of a capabilities mindset is that it often ignores the underpinnings of what customers see. Building for "just good enough" will surely get the feature/product/service off the ground, as long as customers experience a "good enough" user experience, but that code won't stand the test of time and scale if you leave it at that. What will more than likely occur is that a world of bad practices will evolve around that "just good enough" core set of code, typically by copying from the hacks and shortcuts taken to get it out the door on time. Furthermore, other "just good enough" services will begin to depend on each other. The pattern of shipping with a "just good enough" mentality will continue until you have not a robust set of web applications but a facade made up of code that's "just good enough" until someone finds a chink in the armor, requires a new feature that you didn't prepare for, or changes a mission-critical package.

I don't mean to sound like I'm writing this from any higher-than-thou pedestal. I've cribbed patterns and been part of this problem in the past. I'm writing this because this kind of capabilities mindset, of always "just good enough," discourages engineers at all levels from trying to build robust applications in the first place. Why should developers want to innovate if the services are "just good enough" for our customers, managers, and executives? Why should we push boundaries? Any organization that lists in its values a platitude related to "pushing the industry forward" should replace that with "We build 'just good enough' software" if they think they'll thrive on a "capabilities mindset."
