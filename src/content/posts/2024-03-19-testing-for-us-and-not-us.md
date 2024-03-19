---
title: Testing for 'U's and not 'u's
description: In a world where code coverage rules with an iron fist, someone
  needs to standup for developer productivity.
pubDate: 2024-03-18T23:44:08.786-04:00
draft: true
rssOnly: false
featuredImage: /assets/media/relaunching-blog.jpg
featuredImageAlt: placeholder.
---
It's fifteen minutes ‘til the hour, what most people call “midnight”. Tonight, I'm calling that "end of day."

That was when I said I'd have the new feature merged into the main branch of the repo. I was so confident that I'd have this working, ready to get into staging, by “end of day.” I had no doubt in my mind.

Lo, and there was a sullen cry, as if a million Github Actions and test runners rang out and said, "No."

I don't know what I was thinking. I should have remembered. I'd done this dance before. We, us engineers, we rallied against this hydra before. We asked for the time and resources to slay this multi-headed beast sucking up our flow state, this parallelized threat to our work-life balance. We finally got what we needed! And yet, at what cost?

This Minotaur we wrestle with on an hourly basis? Our monolithic - no, not monorepo, our monolithic front-end's testing suite. What was once a well-meant suite of tests and checks meant to gatekeep the release of bugs and broken features from production. Now, a massive amalgamation of integration and end-to-end tests, the culmination of years of copied and pasted testing patterns, rushed descriptions, and accepted Copilot suggestions. The spitting image of the [Testing Pyramid](https://martinfowler.com/articles/practical-test-pyramid.html) upturned.

On every pull request, the paralellized processing power of 30 machines must grind away at these tests to sate what could likely be done - nay, should be done! - by unit tests. Should even one fail, be it a test related or not to the pull request, it's a slow and arduous wait until the others finish before the the failed machine can be started again. And if it is related, may luck go with you that the task of correcting it and pushing a change not send you into a seemingly Sisyphean spiral as it has for me on this dark night.

What pray tell is causing my tests to fail? Could it be another timeout as the test runner searches for an element that may or not be there? Could it be a change to a conditional that only now has finished trickling down with out proper vetting? Or is it another string expected to start with a capital “U” again in a phrase like 'Delete Users' . . . where all others are expected to be sentence-cased?

But alas! The bells of the test runner chime again for me! Another failure. I must tend to it, lest I be here another hour. Quickly. Flee. Flee from whence you came. Away from those tempting warmth of “80% test coverage!” I shall shield your escape while I return to my work . . .
