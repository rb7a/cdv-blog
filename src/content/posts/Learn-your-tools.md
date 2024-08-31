---
title: Learn your tools
pubDate: 2024-08-31T04:51:30.339Z
draft: true
---

A typical pattern most developers get caught in when learning the tools of their trade is learning the 20% of the available functionality that can get them through 80% of their work, which is perfectly understandable. I'm no different. Once we can get started on work, why dive too much deeper? The downside of that mindset is that we miss out on beneficial functionality that won't come up without some digging.

There's so much efficiency to unlock by digging a little deeper into the editors and libraries we use daily. Plus, it can be such a flex! During the technical interview for my first job, way before CoPilot was a thing, I made an entire class skeleton pop up in a Visual Studio C# project with a keyboard shortcut. The hiring manager did a double-take and paused the interview to make sure I wasn't copy-pasting code. You'd be surprised by who doesn't know this and, with that knowledge, how many people you could teach.

A solid strategy to learn these features is to hunt them down while working on projects, especially when we wonder how to improve an awkward workflow. I did this while fixing an issue with my blog and thought I'd share two examples. Hopefully, you'll see some parallels with bits of awkwardness in your workflow and be encouraged to find ways to improve them.

## The issue at hand

The homepage of my site features a blog list sorted by a simple [Javascript sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) method before it renders the posts on the page. That code sorts the posts by newest first based on each post's `updatedDate` and `pubDate` properties. I use [Tina.io](https://tina.io/) for my CMS. When configuring the [content model](https://tina.io/docs/schema/) for a project, each "collection" of a particular class requires a field type for each property on that class. In this case, the `updatedDate` and `pubDate` properties of my post were of field type `datetime`, which returns a Date string in ISO string format.

I would have liked to set a new Date for these values as a default when a new post editor was opened, but I couldn't find a reliable way to do so, likely due to a version mismatch between what I installed and what the docs described. So to be sure I didn't publish a new post without these dates set, I made them required fields as a reminder to manually update them. This wasn't ideal and was extremely clunky, but it suited my needs.

I published ["Curation"](/blog/curation) pretty late into the night on August 27th, followed by ["Giving yourself grace"](/blog/giving-grace) the night after. The code was pushed up to GitHub and picked up by Netlify, which ran the build commands for Tina and Astro. All lights came back green, all good.

At least, it would have been except for the fact that the post at the top of the blog list was still "Curation." I found "Giving yourself grace" below the fold. Why?

Well, when I had written those content models, the definition of the `updatedDate` and `pubDate` fields were pretty barebones, just setting the field name, a readable name, and the type of `datetime`.

```typescript
import { defineConfig } from "tinacms";

export default defineConfig({
  // ...
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        // ...
        fields: [
          {
            type: "datetime",
            name: "pubDate",
            label: "Publish Date",
            required: true,
          },
          {
            type: "datetime",
            name: "updatedDate",
            label: "Updated Date",
            required: true,
          },
          // ...
        ],
      },
    ],
  },
});
```

This lightweight definition defaults to an ISO date string with just the year, month, date, and a localized time value of midnight GMT. That meant both "Curation" and "Giving yourself grace" had `pubDate` values of `2024-08-27T04:00:00.000Z` and weren't sorted at all in the blog list, which visually was rendered out of order.

## The solution

The solution to this seemed pretty straightforward: ensure the `datetime` values for the `pubDate` and `updatedDate` properties include the time whenever changes to a post are saved. This way, the values would always be unique enough for sorting unless manually edited. Finding the right approach was the tricky part, though. As I said before, setting a default of the immediate time and date when the user clicked on "New Post" would have saved me time, but that seemed like more installing and troubleshooting than I cared for at the time.

Looking through my code, I couldn't spot a convenient fix. There had to be some way to address this in Tina's documentation. After a bit of digging around, I came across exactly what I needed in the form of the [Before Submit Function](https://tina.io/docs/extending-tina/before-submit/).

The Before Submit Function is a function property nested in the content model that lets you control aspects of the output when you hit "Save" in Tina's editor. It effectively acts as a lifecycle hook for your publishing workflow that lets you access the form, the Tina CMS instance, and the values you input to said form. The latter lets me access both properties and update their values with `new Date().toISOString()`. I also added a `timeFormat` property to both properties, which will let me edit them in the CMS should I need to in the future.

```typescript
import { defineConfig, Form, TinaCMS } from "tinacms";

export default defineConfig({
  // ...
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "src/content/posts",
        ui: {
          filename: {
            readonly: false,
          },
          beforeSubmit: async ({
            form,
            cms,
            values,
          }: {
            form: Form
            cms: TinaCMS
            values: Record<string, any>
            }) => {
            if (form.crudType === 'create') {
              return {
                ...values,
                pubDate: new Date().toISOString(),
              }
            }

            if (form.crudType === 'update') {
              return {
                ...values,
                updatedDate: new Date().toISOString(),
              }
            }
          },
        },
        fields: [
          // ...
          {
            type: "datetime",
            name: "pubDate",
            label: "Publish Date",
            description: "This will be generated at first publish",
            ui: {
              timeFormat: "HH:mm", // adding `timeFormat` will make sure I can edit the time in the CMS
            }
          },
          {
            type: "datetime",
            name: "updatedDate",
            label: "Updated Date",
            description: "This will be generated if it's already published on save.",
            ui: {
              timeFormat: "HH:mm" // adding `timeFormat` will make sure I can edit the time in the CMS
            }
          },
          // ...
        ],
      },
    ],
  },
});
```

That checked the boxes for both the automatic generation and ensuring I got the exact time of publication, meaning unique strings to sort by! As a bonus, I could update both based on the `crudType` property of the `form` value that gets passed into the `beforeSubmit` function. Something to note is that I had to remove the `required` property from both fields to allow the form to save successfully without validating their respective inputs.

## First this, then that

While fixing the sorting issue, I crossed paths with a familiar annoyance in [Visual Studio Code](https://code.visualstudio.com/). Some might say [Intellisense](https://code.visualstudio.com/docs/editor/intellisense) is an unsung hero of modern development, but I've always had a nitpick with it. While Intellisense can provide type-ahead suggestions, it falls a little short with things like TypeScript libraries. If I know what I'm typing, it can offer suggestions and will usually list what I'm looking for, but if I want to explore an object's properties, I have to play "guess the letter."

![](/assets/media/no-ctrl-space.gif)

It always bugged me because all the answers are in the type inference. I could do a lookup with "Go to Type Definition," but now I'm pulling myself away from my code and going down another rabbit hole. So hey, since we're digging around documentation already, let's check out VS Code's docs to see if they- oh, [they did](https://code.visualstudio.com/docs/editor/intellisense#_intellisense-features:~:text=You%20can%20trigger%20IntelliSense%20in,\(.\)%20in%20JavaScript)! It turns out that hitting the keyboard shortcut `Ctrl+Space` will trigger Intellisense and show all the properties and methods available within the class your cursor is in. That can be a huge efficiency boost when your primary job is to find the methods and properties to make the magic squiggles on the screen keep squiggling.

![](/assets/media/ctrl-space.gif)

## So, what did we learn?

Huzzah! Our sorting problem is solved, but the real treasure was the new tricks we learned along the way, right?

Yeah, kind of, but not quite. What I hope you take away from this aren't niche solutions but that you, as a developer, should learn your tools. Sometimes, it takes a bit of searching to find what you're looking for. Look at how far into the documentation I'd need to traverse to find information on the Before Submit Function if they didn't have a search bar! That would have taken time! And effort!

![](/assets/media/tina-menu.png)

The thing is that time and effort are well worth spending now to be more productive later. The Copilots and chatbots of the world can help, but in that half-automated pair programming session, you're still the one driving. You need to know your ship.
