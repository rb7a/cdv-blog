---
title: "Post-to-post: 2023 from the rearview mirror"
description: 2023 is officially so last year. Mine was fairly eventful. I forgot
  to write about it until now.
pubDate: 2024-01-30T18:43:56-05:00
draft: false
rssOnly: false
featuredImage: /assets/media/relaunching-blog.jpg
featuredImageAlt: My desk, from which I published all of one post last year.
---
It's been over a year since my [last post](https://charlesvillard.co/blog/2023-02-05-keeping-a-record/), ironically enough. That post discussed the importance of writing regularly and declared that I would be doing so.

That didn't happen. I've drafted an idea or two, but I didn't get a single new post out. Whoops.

This wasn't because I had nothing to say. Much like many others, the habit of writing blog posts and building side projects is not one that ever came naturally to me. Day-to-day life is usually my reason d'jour, and mine is replete with work, children, family, chores, events, concerns, a limited amount of energy, and all kinds of other excuses.

So, in an effort to kickstart a change in that habit, I wanted to highlight a few things that I accomplished over the course of the last year as a senior member of a hybrid UI platform/infrastructure team. While I can't show off much code, I think this will give a peak into what front-end development can look like beyond the components and styling for which it's popularly known.

## New dashboard, whose service?

The first project I tackled last year was leading the development of a redesigned dashboard for HPE GreenLake. This project is kind of special to me. With all its ups and downs, it was my first real test as a developer with the word “Senior” somewhere in their title.

The outline for this project seemed pretty straightforward: rebuild the dashboard to focus on the services each of our main applications offer instead of the applications themselves. Between myself and another engineer, we managed a proof-of-concept in record time. However, like many projects, what seemed like a "simple reconfiguration" of the UI turned into a far deeper rabbit hole. In one conversation, teammates involved in building the dashboard's previous version estimated our work would replace approximately 80% of the pre-existing monolithic front-end.

There were plenty of obstacles and red tape to get through, and challenges I won't get into details about here. Despite all of them, we completed our work in time for it to preview at HPE's annual Discover event, and that very work is now available to all of HPE's users. This work really taught me what it means to be a senior engineer by putting my feet to the fire. I came away from it with a better understanding of what senior- and staff-level individual contributors may need to navigate, what's worth documenting, what hills are worth fighting for, and much more.

## "DivOps?" "WebOps?" Front-end build tooling

Not long after I completed and handed off the dashboard build, I got the opportunity to work in a vageuly defined subsection of front-end development. Though I do like how Ben Ilegbodu defined it: [DivOps](https://www.benmvp.com/blog/what-divops-engineer/). A number of applications were being prepared for a new offering, and it necessiated an update to our micro-frontend architecture to ensure we could host applications not only in the cloud, but also on-premises. This meant divesting ourselves of libraries like single-spa-react and adjust to hosting applications as individual SPAs.

Unfortunately, its work that won't make it into production. Such is the nature and whim of business. On the other hand, it got me getting comfortable with JavaScript build tools and their capabilities. It also got me working with a lot of teams and writing a lot of documentation, ultimately a lot of good practice. It also set the groundwork for a lot of really cool frontend architecture work our team will be taking on in the coming months.

## Headers are hard. Who knew?

After working on front-end build tools for a while, and after the decision to shelf my previous work, my responsibilties moved back towards UI, maintaining a new and improved global header. It's my primary focus these days, and a really interesting challenge. When we designed the v1 of this new header, we decided on building out a [web component-based header](https://developer.mozilla.org/en-US/docs/Web/API/Web_components) to allow applications built on any framework to consume it with a simple set of contracts to meet. This next year is going to involve a number of new integrations and features that I'm excited and anxious to build out.

## What about now?

Now that we're a month into the new year, I'm hoping to increase my output outside of work hours as well. I've [already streamed a bit](https://www.twitch.tv/cdvillard) and I'm hoping to write a bit more as well. We'll see what comes of this next year. All in, I'm seeing this as a blank slate opportunity to define my career moving forward. Hope you stick around to check it out.




