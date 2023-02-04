import CMS from '@staticcms/core';

const config = {
	backend: {
		name: 'github',
		repo: 'cdvillard/cdv-astro-blog',
		branch: 'main'
	},
	media_folder: 'public/assets',
	public_folder: 'assets',
	site_url: 'https://charlesvillard.co',
	display_url: 'https://charlesvillard.co',
	collections: [
		{
			name: 'blog',
			label: 'Blog',
			folder: 'blog',
			create: true,
			slug: '{{year}}-{{month}}-{{day}}-{{slug}}',
			fields: [
				{label: 'Layout', name: 'layout', widget: 'hidden', default: '../layouts/BlogPost.astro'},
				{label: "Title", name: "title", widget: "string"},
				{label: "Publish Date", name: "pubDate", widget: "datetime"},
				{label: "Draft", name: "draft", widget: "boolean", default: true},
				{label: "RSS Only", name:"rssOnly",widget:"boolean",default:false},
				{label: "Body", name: "body", widget: "markdown"},
			]
		}
	]
};

CMS.init({config})