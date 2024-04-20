import CMS from '@staticcms/core';

const config = {
	backend: {
		name: 'github',
		repo: 'cdvillard/cdv-blog',
		branch: 'main'
	},
	logo_url: '/safari-pinned-tab.svg',
	media_folder: 'public/assets/media',
	public_folder: '/assets/media',
	site_url: 'https://charlesvillard.co',
	display_url: import.meta.env.MODE === 'development' ? 'http://localhost:4321' : 'https://charlesvillard.co',
	collections: [
		{
			name: 'blog',
			label: 'Blog',
			folder: 'src/content/posts',
			create: true,
			slug: '{{year}}-{{month}}-{{day}}-{{slug}}',
			summary: "{{pubDate}} - {{title}} - Draft: {{draft}}",
			sortable_fields: {
				fields:['updatedDate', 'pubDate'],
				default:{
					field: 'updatedDate',
					direction: 'Descending'
				}
			},
			view_groups:[
				{
					label: "Drafts",
					field: "draft"
				},
			],
			fields: [
				{label: "Title", name: "title", widget: "string"},
				{label: "Description", name: "description", widget: "string"},
				{label: "Publish Date", name: "pubDate", widget: "datetime"},
				{label: "Updated Date", name: "updatedDate", widget: "datetime", required: false},
				{label: "Draft", name: "draft", widget: "boolean", default: true},
				{label: "RSS Only", name:"rssOnly",widget:"boolean",default:false},
				{label: "Featured Image", name: "featuredImage", widget: "image", required: false},
				{label: "Featured Image Alt", name: "featuredImageAlt", widget: "string", required: false},
				{label: "Body", name: "body", widget: "markdown"},
			]
		}
	]
};

CMS.init({config})
