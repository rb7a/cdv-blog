---
title: 2023 from the rearview mirror
description: 2023 is officially so last year. Mine was fairly eventful.
pubDate: 2024-01-08T12:18:06.688-05:00
draft: true
rssOnly: false
featuredImage: /assets/media/relaunching-blog.jpg
featuredImageAlt: My desk, from which I published all of one post last year.
---
It's a few days shy of a year since my [last post](https://charlesvillard.co/blog/2023-02-05-keeping-a-record/), ironically enough. That post discussed the importance of writing regularly and declared that I would be doing so.

That didn't happen. I drafted an idea or two, but I didn't get a single new post out. Oops.

This wasn't because I had nothing to say. Much like many others, the habit of writing blog posts and building side projects is not one that comes naturally to me anymore. Life is usually my reason d'jour, and mine is replete with work, children, family, chores, events, concerns, a limited amount of energy, and all kinds of other excuses.

So, in an effort to kickstart a change in that habit, I wanted to highlight a few things that I accomplished over the course of the last year as a member of a UI/infrastructure team. While I can't show off much code, I think this will give a peak into what front-end development can look like beyond the components and styling for which it's popularly known.

## Dashboard redesign

The first project I tackled last year was leading the development of a redesigned dashboard for HPE GreenLake. This project is kind of special to me. With all its ups and downs, it was my first real test as a developer with the word “Senior” somewhere in their title.

The outline for this project seemed pretty straightforward: rebuild the dashboard to focus on the services each of our main applications offer instead of the applications themselves. Between myself and another engineer, we managed a proof-of-concept in record time. However, like many projects, what seemed like a "simple reconfiguration" of the UI turned into a far deeper rabbit hole. In one conversation, teammates involved in building the dashboard's previous version estimated our work would replace approximately 80% of the pre-existing monolithic front-end.

There were plenty of obstacles and red tape to get through, and challenges I won't get into details about here. Despite all of them, we completed our work in time for it to preview at HPE's annual Discover event, and that very work is now available to all of HPE's users. This work really taught me what it means to be a senior engineer by putting my feet to the fire. I came away from it with a better understanding of what senior- and staff-level individual contributors may need to navigate, what's worth documenting, what hills are worth fighting for, and much more.

## "DivOps?" "WebOps?" Front-end build tooling

Not long after I completed and handed off the dashboard build, I got the opportunity to work in a vageuly defined subsection of front-end development. A number of applications were being prepared for a new offering, and it necessiated an update to our micro-frontend architecture to ensure we could host applications not only in the cloud, but also on-premises. This meant divesting ourselves of libraries like single-spa-react and adjust to hosting applications as individual SPAs.

Unfortunately, its work that won't make it into production. 
