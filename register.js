// Add custom icons to the Icon Block.
alert('test');
wp.domReady(() => {

	const { __ } = wp.i18n;
	const { addFilter } = wp.hooks;

	function addCustomIcons(icons) {

		const customIcons = [
			{
				name: 'a-arrow-down',
				title: 'A Arrow Down',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m14 12 4 4 4-4m-4 4V7M2 16l4.039-9.69a.5.5 0 0 1 .923 0L11 16m-7.696-3h6.392"/></svg>'
			},
			{
				name: 'a-arrow-up',
				title: 'A Arrow Up',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m14 11 4-4 4 4m-4 5V7M2 16l4.039-9.69a.5.5 0 0 1 .923 0L11 16m-7.696-3h6.392"/></svg>'
			},
			{
				name: 'a-large-small',
				title: 'A Large Small',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m15 16 2.536-7.328a1.02 1.02 1 0 1 1.928 0L22 16m-6.303-2h5.606M2 16l4.039-9.69a.5.5 0 0 1 .923 0L11 16m-7.696-3h6.392"/></svg>'
			},
			{
				name: 'accessibility',
				title: 'Accessibility',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="16" cy="4" r="1"/><path d="m18 19 1-7-6 1M5 8l3-3 5.5 3-2.36 3.5m-6.9 3a5 5 0 0 0 6.88 6"/><path d="M13.76 17.5a5 5 0 0 0-6.88-6"/></svg>'
			},
			{
				name: 'activity',
				title: 'Activity',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"/></svg>'
			},
			{
				name: 'air-vent',
				title: 'Air Vent',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M18 17.5a2.5 2.5 0 1 1-4 2.03V12m-8 0H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2M6 8h12M6.6 15.572A2 2 0 1 0 10 17v-5"/></svg>'
			},
			{
				name: 'airplay',
				title: 'Airplay',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"/><path d="m12 15 5 6H7Z"/></svg>'
			},
			{
				name: 'alarm-clock-check',
				title: 'Alarm Clock Check',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="13" r="8"/><path d="M5 3 2 6m20 0-3-3M6.38 18.7 4 21m13.64-2.33L20 21M9 13l2 2 4-4"/></svg>'
			},
			{
				name: 'alarm-clock-minus',
				title: 'Alarm Clock Minus',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="13" r="8"/><path d="M5 3 2 6m20 0-3-3M6.38 18.7 4 21m13.64-2.33L20 21M9 13h6"/></svg>'
			},
			{
				name: 'alarm-clock-off',
				title: 'Alarm Clock Off',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M6.87 6.87a8 8 0 1 0 11.26 11.26m1.77-3.88a8 8 0 0 0-9.15-9.15M22 6l-3-3M6.26 18.67 4 21M2 2l20 20M4 4 2 6"/></svg>'
			},
			{
				name: 'alarm-clock-plus',
				title: 'Alarm Clock Plus',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="13" r="8"/><path d="M5 3 2 6m20 0-3-3M6.38 18.7 4 21m13.64-2.33L20 21m-8-11v6m-3-3h6"/></svg>'
			},
			{
				name: 'alarm-clock',
				title: 'Alarm Clock',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="13" r="8"/><path d="M12 9v4l2 2M5 3 2 6m20 0-3-3M6.38 18.7 4 21m13.64-2.33L20 21"/></svg>'
			},
			{
				name: 'alarm-smoke',
				title: 'Alarm Smoke',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M11 21c0-2.5 2-2.5 2-5m3 5c0-2.5 2-2.5 2-5m1-8-.8 3a1.25 1.25 0 0 1-1.2 1H7a1.25 1.25 0 0 1-1.2-1L5 8m16-5a1 1 0 0 1 1 1v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a1 1 0 0 1 1-1zM6 21c0-2.5 2-2.5 2-5"/></svg>'
			},
			{
				name: 'album',
				title: 'Album',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><path d="M11 3v8l3-3 3 3V3"/></svg>'
			},
			{
				name: 'align-center-horizontal',
				title: 'Align Center Horizontal',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M2 12h20m-12 4v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-4m6-8V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v4m16 8v1a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-1m0-8V7c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v1"/></svg>'
			},
			{
				name: 'align-center-vertical',
				title: 'Align Center Vertical',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 2v20M8 10H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h4m8 6h4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-4M8 20H7a2 2 0 0 1-2-2v-2c0-1.1.9-2 2-2h1m8 0h1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1"/></svg>'
			},
			{
				name: 'align-end-horizontal',
				title: 'Align End Horizontal',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="6" height="16" x="4" y="2" rx="2"/><rect width="6" height="9" x="14" y="9" rx="2"/><path d="M22 22H2"/></svg>'
			},
			{
				name: 'align-end-vertical',
				title: 'Align End Vertical',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="16" height="6" x="2" y="4" rx="2"/><rect width="9" height="6" x="9" y="14" rx="2"/><path d="M22 22V2"/></svg>'
			},
			{
				name: 'align-horizontal-distribute-center',
				title: 'Align Horizontal Distribute Center',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="6" height="14" x="4" y="5" rx="2"/><rect width="6" height="10" x="14" y="7" rx="2"/><path d="M17 22v-5m0-10V2M7 22v-3M7 5V2"/></svg>'
			},
			{
				name: 'align-horizontal-distribute-end',
				title: 'Align Horizontal Distribute End',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="6" height="14" x="4" y="5" rx="2"/><rect width="6" height="10" x="14" y="7" rx="2"/><path d="M10 2v20M20 2v20"/></svg>'
			},
			{
				name: 'align-horizontal-distribute-start',
				title: 'Align Horizontal Distribute Start',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="6" height="14" x="4" y="5" rx="2"/><rect width="6" height="10" x="14" y="7" rx="2"/><path d="M4 2v20M14 2v20"/></svg>'
			},
			{
				name: 'align-horizontal-justify-center',
				title: 'Align Horizontal Justify Center',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="6" height="14" x="2" y="5" rx="2"/><rect width="6" height="10" x="16" y="7" rx="2"/><path d="M12 2v20"/></svg>'
			},
			{
				name: 'align-horizontal-justify-end',
				title: 'Align Horizontal Justify End',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="6" height="14" x="2" y="5" rx="2"/><rect width="6" height="10" x="12" y="7" rx="2"/><path d="M22 2v20"/></svg>'
			},
			{
				name: 'align-horizontal-justify-start',
				title: 'Align Horizontal Justify Start',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="6" height="14" x="6" y="5" rx="2"/><rect width="6" height="10" x="16" y="7" rx="2"/><path d="M2 2v20"/></svg>'
			},
			{
				name: 'align-horizontal-space-around',
				title: 'Align Horizontal Space Around',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="6" height="10" x="9" y="7" rx="2"/><path d="M4 22V2m16 20V2"/></svg>'
			},
			{
				name: 'align-horizontal-space-between',
				title: 'Align Horizontal Space Between',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="6" height="14" x="3" y="5" rx="2"/><rect width="6" height="10" x="15" y="7" rx="2"/><path d="M3 2v20M21 2v20"/></svg>'
			},
			{
				name: 'align-start-horizontal',
				title: 'Align Start Horizontal',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="6" height="16" x="4" y="6" rx="2"/><rect width="6" height="9" x="14" y="6" rx="2"/><path d="M22 2H2"/></svg>'
			},
			{
				name: 'align-start-vertical',
				title: 'Align Start Vertical',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="9" height="6" x="6" y="14" rx="2"/><rect width="16" height="6" x="6" y="4" rx="2"/><path d="M2 2v20"/></svg>'
			},
			{
				name: 'align-vertical-distribute-center',
				title: 'Align Vertical Distribute Center',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M22 17h-3m3-10h-5M5 17H2M7 7H2"/><rect width="14" height="6" x="5" y="14" rx="2"/><rect width="10" height="6" x="7" y="4" rx="2"/></svg>'
			},
			{
				name: 'align-vertical-distribute-end',
				title: 'Align Vertical Distribute End',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="14" height="6" x="5" y="14" rx="2"/><rect width="10" height="6" x="7" y="4" rx="2"/><path d="M2 20h20M2 10h20"/></svg>'
			},
			{
				name: 'align-vertical-distribute-start',
				title: 'Align Vertical Distribute Start',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="14" height="6" x="5" y="14" rx="2"/><rect width="10" height="6" x="7" y="4" rx="2"/><path d="M2 14h20M2 4h20"/></svg>'
			},
			{
				name: 'align-vertical-justify-center',
				title: 'Align Vertical Justify Center',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="14" height="6" x="5" y="16" rx="2"/><rect width="10" height="6" x="7" y="2" rx="2"/><path d="M2 12h20"/></svg>'
			},
			{
				name: 'align-vertical-justify-end',
				title: 'Align Vertical Justify End',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="14" height="6" x="5" y="12" rx="2"/><rect width="10" height="6" x="7" y="2" rx="2"/><path d="M2 22h20"/></svg>'
			},
			{
				name: 'align-vertical-justify-start',
				title: 'Align Vertical Justify Start',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="14" height="6" x="5" y="16" rx="2"/><rect width="10" height="6" x="7" y="6" rx="2"/><path d="M2 2h20"/></svg>'
			},
			{
				name: 'align-vertical-space-around',
				title: 'Align Vertical Space Around',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="10" height="6" x="7" y="9" rx="2"/><path d="M22 20H2M22 4H2"/></svg>'
			},
			{
				name: 'align-vertical-space-between',
				title: 'Align Vertical Space Between',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="14" height="6" x="5" y="15" rx="2"/><rect width="10" height="6" x="7" y="3" rx="2"/><path d="M2 21h20M2 3h20"/></svg>'
			},
			{
				name: 'ambulance',
				title: 'Ambulance',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 10H6m8 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2m14 0h2a1 1 0 0 0 1-1v-3.28a1 1 0 0 0-.684-.948l-1.923-.641a1 1 0 0 1-.578-.502l-1.539-3.076A1 1 0 0 0 16.382 8H14M8 8v4m1 6h6"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/></svg>'
			},
			{
				name: 'ampersand-square',
				title: 'Ampersand Square',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M16 17c-4-2-7-6-7-8a2 2 0 0 1 4 0c0 3-5 1.5-5 5 0 1.7 1.3 3 3 3 3 0 5-2 5-4"/></svg>'
			},
			{
				name: 'ampersand',
				title: 'Ampersand',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M17.5 12c0 4.4-3.6 8-8 8A4.5 4.5 0 0 1 5 15.5c0-6 8-4 8-8.5a3 3 0 1 0-6 0c0 3 2.5 8.5 12 13m-3-8h3"/></svg>'
			},
			{
				name: 'ampersands',
				title: 'Ampersands',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 17c-5-3-7-7-7-9a2 2 0 0 1 4 0c0 2.5-5 2.5-5 6 0 1.7 1.3 3 3 3 2.8 0 5-2.2 5-5m12 5c-5-3-7-7-7-9a2 2 0 0 1 4 0c0 2.5-5 2.5-5 6 0 1.7 1.3 3 3 3 2.8 0 5-2.2 5-5"/></svg>'
			},
			{
				name: 'amphora',
				title: 'Amphora',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 2v5.632c0 .424-.272.795-.653.982A6 6 0 0 0 6 14c.006 4 3 7 5 8"/><path d="M10 5H8a2 2 0 0 0 0 4h.68M14 2v5.632c0 .424.272.795.652.982A6 6 0 0 1 18 14c0 4-3 7-5 8"/><path d="M14 5h2a2 2 0 0 1 0 4h-.68M18 22H6M9 2h6"/></svg>'
			},
			{
				name: 'anchor',
				title: 'Anchor',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 22V8m-7 4H2a10 10 0 0 0 20 0h-3"/><circle cx="12" cy="5" r="3"/></svg>'
			},
			{
				name: 'angry',
				title: 'Angry',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M16 16s-1.5-2-4-2-4 2-4 2m-.5-8L10 9m4 0 2.5-1M9 10h.01M15 10h.01"/></svg>'
			},
			{
				name: 'annoyed',
				title: 'Annoyed',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M8 15h8M8 9h2m4 0h2"/></svg>'
			},
			{
				name: 'antenna',
				title: 'Antenna',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M2 12 7 2m0 10 5-10m0 10 5-10m0 10 5-10M4.5 7h15M12 16v6"/></svg>'
			},
			{
				name: 'anvil',
				title: 'Anvil',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M7 10H6a4 4 0 0 1-4-4 1 1 0 0 1 1-1h4m0 0a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1 7 7 0 0 1-7 7H8a1 1 0 0 1-1-1zm2 7v5m6-5v5M5 20a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3 1 1 0 0 1-1 1H6a1 1 0 0 1-1-1"/></svg>'
			},
			{
				name: 'aperture',
				title: 'Aperture',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="m14.31 8 5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16 3.95 6.06M14.31 16H2.83m13.79-4-5.74 9.94"/></svg>'
			},
			{
				name: 'app-window-mac',
				title: 'App Window Mac',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="M6 8h.01M10 8h.01M14 8h.01"/></svg>'
			},
			{
				name: 'app-window',
				title: 'App Window',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="M10 4v4M2 8h20M6 4v4"/></svg>'
			},
			{
				name: 'apple-core',
				title: 'Apple Core',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M14 2a2 2 0 0 0-2 2v2.53"/><path d="M12 6.53a5.98 5.98 0 0 0-8.5.5 4 4 0 0 1 4.02 5.86 4 4 0 0 1-1.76 7.04C6.82 21.17 7.97 22 9 22c1.5 0 1.5-1 3-1s1.5 1 3 1c1.03 0 2.18-.83 3.24-2.07a4 4 0 0 1-1.76-7.03 4 4 0 0 1 4.02-5.87 5.99 5.99 0 0 0-8.5-.5"/></svg>'
			},
			{
				name: 'apple',
				title: 'Apple',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 6.528V3a1 1 0 0 1 1-1h0"/><path d="M18.237 21A15 15 0 0 0 22 11a6 6 0 0 0-10-4.472A6 6 0 0 0 2 11a15.1 15.1 0 0 0 3.763 10 3 3 0 0 0 3.648.648 5.5 5.5 0 0 1 5.178 0A3 3 0 0 0 18.237 21"/></svg>'
			},
			{
				name: 'archive-restore',
				title: 'Archive Restore',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="20" height="5" x="2" y="3" rx="1"/><path d="M4 8v11a2 2 0 0 0 2 2h2M20 8v11a2 2 0 0 1-2 2h-2m-7-6 3-3 3 3m-3-3v9"/></svg>'
			},
			{
				name: 'archive-x',
				title: 'Archive X',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="20" height="5" x="2" y="3" rx="1"/><path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8M9.5 17l5-5m-5 0 5 5"/></svg>'
			},
			{
				name: 'archive',
				title: 'Archive',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="20" height="5" x="2" y="3" rx="1"/><path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8m-10 4h4"/></svg>'
			},
			{
				name: 'armchair',
				title: 'Armchair',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3"/><path d="M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0zm2 2v2m14-2v2"/></svg>'
			},
			{
				name: 'arrow-big-down-dash',
				title: 'Arrow Big Down Dash',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M15 11a1 1 0 0 0 1 1h2.939a1 1 0 0 1 .75 1.811l-6.835 6.836a1.207 1.207 0 0 1-1.707 0L4.31 13.81a1 1 0 0 1 .75-1.811H8a1 1 0 0 0 1-1V9a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1zM9 4h6"/></svg>'
			},
			{
				name: 'arrow-big-down',
				title: 'Arrow Big Down',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M15 11a1 1 0 0 0 1 1h2.939a1 1 0 0 1 .75 1.811l-6.835 6.836a1.207 1.207 0 0 1-1.707 0L4.31 13.81a1 1 0 0 1 .75-1.811H8a1 1 0 0 0 1-1V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1z"/></svg>'
			},
			{
				name: 'arrow-big-left-dash',
				title: 'Arrow Big Left Dash',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M13 9a1 1 0 0 1-1-1V5.061a1 1 0 0 0-1.811-.75l-6.835 6.836a1.207 1.207 0 0 0 0 1.707l6.835 6.835a1 1 0 0 0 1.811-.75V16a1 1 0 0 1 1-1h2a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1zm7 0v6"/></svg>'
			},
			{
				name: 'arrow-big-left',
				title: 'Arrow Big Left',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M13 9a1 1 0 0 1-1-1V5.061a1 1 0 0 0-1.811-.75l-6.835 6.836a1.207 1.207 0 0 0 0 1.707l6.835 6.835a1 1 0 0 0 1.811-.75V16a1 1 0 0 1 1-1h6a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1z"/></svg>'
			},
			{
				name: 'arrow-big-right-dash',
				title: 'Arrow Big Right Dash',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M11 9a1 1 0 0 0 1-1V5.061a1 1 0 0 1 1.811-.75l6.836 6.836a1.207 1.207 0 0 1 0 1.707l-6.836 6.835a1 1 0 0 1-1.811-.75V16a1 1 0 0 0-1-1H9a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1zM4 9v6"/></svg>'
			},
			{
				name: 'arrow-big-right',
				title: 'Arrow Big Right',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M11 9a1 1 0 0 0 1-1V5.061a1 1 0 0 1 1.811-.75l6.836 6.836a1.207 1.207 0 0 1 0 1.707l-6.836 6.835a1 1 0 0 1-1.811-.75V16a1 1 0 0 0-1-1H5a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1z"/></svg>'
			},
			{
				name: 'arrow-big-up-dash',
				title: 'Arrow Big Up Dash',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M9 13a1 1 0 0 0-1-1H5.061a1 1 0 0 1-.75-1.811l6.836-6.835a1.207 1.207 0 0 1 1.707 0l6.835 6.835a1 1 0 0 1-.75 1.811H16a1 1 0 0 0-1 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1zm0 7h6"/></svg>'
			},
			{
				name: 'arrow-big-up',
				title: 'Arrow Big Up',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M9 13a1 1 0 0 0-1-1H5.061a1 1 0 0 1-.75-1.811l6.836-6.835a1.207 1.207 0 0 1 1.707 0l6.835 6.835a1 1 0 0 1-.75 1.811H16a1 1 0 0 0-1 1v6a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1z"/></svg>'
			},
			{
				name: 'arrow-down-0-1',
				title: 'Arrow Down 0 1',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m3 16 4 4 4-4m-4 4V4"/><rect width="4" height="6" x="15" y="4" ry="2"/><path d="M17 20v-6h-2m0 6h4"/></svg>'
			},
			{
				name: 'arrow-down-1-0',
				title: 'Arrow Down 1 0',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m3 16 4 4 4-4m-4 4V4m10 6V4h-2m0 6h4"/><rect width="4" height="6" x="15" y="14" ry="2"/></svg>'
			},
			{
				name: 'arrow-down-a-z',
				title: 'Arrow Down A Z',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m3 16 4 4 4-4m-4 4V4m13 4h-5m0 2V6.5a2.5 2.5 0 0 1 5 0V10m-5 4h5l-5 6h5"/></svg>'
			},
			{
				name: 'arrow-down-from-line',
				title: 'Arrow Down From Line',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M19 3H5m7 18V7m-6 8 6 6 6-6"/></svg>'
			},
			{
				name: 'arrow-down-left',
				title: 'Arrow Down Left',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M17 7 7 17m10 0H7V7"/></svg>'
			},
			{
				name: 'arrow-down-narrow-wide',
				title: 'Arrow Down Narrow Wide',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m3 16 4 4 4-4m-4 4V4m4 0h4m-4 4h7m-7 4h10"/></svg>'
			},
			{
				name: 'arrow-down-right',
				title: 'Arrow Down Right',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m7 7 10 10m0-10v10H7"/></svg>'
			},
			{
				name: 'arrow-down-to-dot',
				title: 'Arrow Down To Dot',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 2v14m7-7-7 7-7-7"/><circle cx="12" cy="21" r="1"/></svg>'
			},
			{
				name: 'arrow-down-to-line',
				title: 'Arrow Down To Line',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 17V3m-6 8 6 6 6-6m1 10H5"/></svg>'
			},
			{
				name: 'arrow-down-up',
				title: 'Arrow Down Up',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m3 16 4 4 4-4m-4 4V4m14 4-4-4-4 4m4-4v16"/></svg>'
			},
			{
				name: 'arrow-down-wide-narrow',
				title: 'Arrow Down Wide Narrow',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m3 16 4 4 4-4m-4 4V4m4 0h10M11 8h7m-7 4h4"/></svg>'
			},
			{
				name: 'arrow-down-z-a',
				title: 'Arrow Down Z A',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m3 16 4 4 4-4M7 4v16m8-16h5l-5 6h5m-5 10v-3.5a2.5 2.5 0 0 1 5 0V20m0-2h-5"/></svg>'
			},
			{
				name: 'arrow-down',
				title: 'Arrow Down',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 5v14m7-7-7 7-7-7"/></svg>'
			},
			{
				name: 'arrow-left-from-line',
				title: 'Arrow Left From Line',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m9 6-6 6 6 6m-6-6h14m4 7V5"/></svg>'
			},
			{
				name: 'arrow-left-right',
				title: 'Arrow Left Right',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M8 3 4 7l4 4M4 7h16m-4 14 4-4-4-4m4 4H4"/></svg>'
			},
			{
				name: 'arrow-left-to-line',
				title: 'Arrow Left To Line',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M3 19V5m10 1-6 6 6 6m-6-6h14"/></svg>'
			},
			{
				name: 'arrow-left',
				title: 'Arrow Left',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m12 19-7-7 7-7m7 7H5"/></svg>'
			},
			{
				name: 'arrow-right-from-line',
				title: 'Arrow Right From Line',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M3 5v14m18-7H7m8 6 6-6-6-6"/></svg>'
			},
			{
				name: 'arrow-right-left',
				title: 'Arrow Right Left',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m16 3 4 4-4 4m4-4H4m4 14-4-4 4-4m-4 4h16"/></svg>'
			},
			{
				name: 'arrow-right-to-line',
				title: 'Arrow Right To Line',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M17 12H3m8 6 6-6-6-6m10-1v14"/></svg>'
			},
			{
				name: 'arrow-right',
				title: 'Arrow Right',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M5 12h14m-7-7 7 7-7 7"/></svg>'
			},
			{
				name: 'arrow-up-0-1',
				title: 'Arrow Up 0 1',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m3 8 4-4 4 4M7 4v16"/><rect width="4" height="6" x="15" y="4" ry="2"/><path d="M17 20v-6h-2m0 6h4"/></svg>'
			},
			{
				name: 'arrow-up-1-0',
				title: 'Arrow Up 1 0',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m3 8 4-4 4 4M7 4v16m10-10V4h-2m0 6h4"/><rect width="4" height="6" x="15" y="14" ry="2"/></svg>'
			},
			{
				name: 'arrow-up-a-z',
				title: 'Arrow Up A Z',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m3 8 4-4 4 4M7 4v16M20 8h-5m0 2V6.5a2.5 2.5 0 0 1 5 0V10m-5 4h5l-5 6h5"/></svg>'
			},
			{
				name: 'arrow-up-down',
				title: 'Arrow Up Down',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m21 16-4 4-4-4m4 4V4M3 8l4-4 4 4M7 4v16"/></svg>'
			},
			{
				name: 'arrow-up-from-dot',
				title: 'Arrow Up From Dot',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m5 9 7-7 7 7m-7 7V2"/><circle cx="12" cy="21" r="1"/></svg>'
			},
			{
				name: 'arrow-up-from-line',
				title: 'Arrow Up From Line',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m18 9-6-6-6 6m6-6v14m-7 4h14"/></svg>'
			},
			{
				name: 'arrow-up-left',
				title: 'Arrow Up Left',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M7 17V7h10m0 10L7 7"/></svg>'
			},
			{
				name: 'arrow-up-narrow-wide',
				title: 'Arrow Up Narrow Wide',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m3 8 4-4 4 4M7 4v16m4-8h4m-4 4h7m-7 4h10"/></svg>'
			},
			{
				name: 'arrow-up-right',
				title: 'Arrow Up Right',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M7 7h10v10M7 17 17 7"/></svg>'
			},
			{
				name: 'arrow-up-to-line',
				title: 'Arrow Up To Line',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M5 3h14m-1 10-6-6-6 6m6-6v14"/></svg>'
			},
			{
				name: 'arrow-up-wide-narrow',
				title: 'Arrow Up Wide Narrow',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m3 8 4-4 4 4M7 4v16m4-8h10m-10 4h7m-7 4h4"/></svg>'
			},
			{
				name: 'arrow-up-z-a',
				title: 'Arrow Up Z A',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m3 8 4-4 4 4M7 4v16m8-16h5l-5 6h5m-5 10v-3.5a2.5 2.5 0 0 1 5 0V20m0-2h-5"/></svg>'
			},
			{
				name: 'arrow-up',
				title: 'Arrow Up',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m5 12 7-7 7 7m-7 7V5"/></svg>'
			},
			{
				name: 'arrows-up-down-square',
				title: 'Arrows Up Down Square',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m6 9 3-3 3 3M9 6v6"/><rect width="20" height="20" x="2" y="2" rx="2"/><path d="M15 18v-6m3 3-3 3-3-3"/></svg>'
			},
			{
				name: 'arrows-up-from-line',
				title: 'Arrows Up From Line',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m4 6 3-3 3 3M7 17V3m7 3 3-3 3 3m-3 11V3M4 21h16"/></svg>'
			},
			{
				name: 'asterisk',
				title: 'Asterisk',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 6v12m5.196-9L6.804 15m0-6 10.392 6"/></svg>'
			},
			{
				name: 'astronaut-helmet',
				title: 'Astronaut Helmet',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m10.6 13.4 6.3 6.1c.3.5.1 1.1-.4 1.4-1.4.7-2.9 1.1-4.5 1.1a2 2 0 0 1-1.4-.6l-8-8A2 2 0 0 1 2 12a10 10 0 0 1 19.44-3.3c.3.7-.3 1.3-1 1.3H12"/><circle cx="12" cy="12" r="2"/><path d="M16.2 18.8c3-1.9 4.4-5.5 3.5-8.8"/></svg>'
			},
			{
				name: 'at-sign-circle',
				title: 'At Sign Circle',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M14 17.7a6 6 0 1 1 4-5.7 2 2 0 0 1-4 0"/><circle cx="12" cy="12" r="2"/></svg>'
			},
			{
				name: 'at-sign-square',
				title: 'At Sign Square',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="2"/><path d="M14 17.7a6 6 0 1 1 4-5.7 2 2 0 0 1-4 0"/><circle cx="12" cy="12" r="2"/></svg>'
			},
			{
				name: 'at-sign',
				title: 'At Sign',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4"/><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8"/></svg>'
			},
			{
				name: 'atom',
				title: 'Atom',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="1"/><path d="M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5"/><path d="M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5"/></svg>'
			},
			{
				name: 'audio-lines',
				title: 'Audio Lines',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M2 10v3m4-7v11m4-14v18m4-13v7m4-10v13m4-8v3"/></svg>'
			},
			{
				name: 'audio-waveform',
				title: 'Audio Waveform',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M2 13a2 2 0 0 0 2-2V7a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0V4a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0v-4a2 2 0 0 1 2-2"/></svg>'
			},
			{
				name: 'avocado',
				title: 'Avocado',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M22 7a4.95 4.95 0 0 0-8.6-3.4c-1.5 1.6-1.6 1.8-5 2.6a8 8 0 1 0 9.4 9.5c.7-3.4 1-3.6 2.6-5 1-1 1.6-2.3 1.6-3.7"/><circle cx="10" cy="14" r="3.5"/></svg>'
			},
			{
				name: 'award',
				title: 'Award',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"/><circle cx="12" cy="8" r="6"/></svg>'
			},
			{
				name: 'axe',
				title: 'Axe',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m14 12-8.381 8.38a1 1 0 0 1-3.001-3L11 9"/><path d="M15 15.5a.5.5 0 0 0 .5.5A6.5 6.5 0 0 0 22 9.5a.5.5 0 0 0-.5-.5h-1.672a2 2 0 0 1-1.414-.586l-5.062-5.062a1.205 1.205 0 0 0-1.704 0L9.352 5.648a1.205 1.205 0 0 0 0 1.704l5.062 5.062A2 2 0 0 1 15 13.828z"/></svg>'
			},
			{
				name: 'axis-3d',
				title: 'Axis 3d',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M13.5 10.5 15 9M4 4v15a1 1 0 0 0 1 1h15m-15.707-.293L6 18m3-3 1.5-1.5"/></svg>'
			},
			{
				name: 'baby-pacifier',
				title: 'Baby Pacifier',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10.1 7.4a1.95 1.95 0 0 0 3.7-1.5c-.8-2-3.2-3-5.2-2.2-2.9 1.2-4.8 3.7-5.4 6.5a1.95 1.95 0 0 0 0 3.6A9.05 9.05 0 0 0 7 19.42m10.1-.02c2-1.3 3.3-3.4 3.8-5.6a2 2 0 0 0 0-3.6 9.83 9.83 0 0 0-3.2-5M8 12h.01M16 12h.01"/><circle cx="12" cy="16" r="2"/><path d="M10 16h-.5A2.5 2.5 0 0 0 7 18.5v1A2.5 2.5 0 0 0 9.5 22h5a2.5 2.5 0 0 0 2.5-2.5v-1a2.5 2.5 0 0 0-2.5-2.5H14"/></svg>'
			},
			{
				name: 'baby',
				title: 'Baby',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5m1-4h.01"/><path d="M19.38 6.813A9 9 0 0 1 20.8 10.2a2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1m-3 5h.01"/></svg>'
			},
			{
				name: 'backpack',
				title: 'Backpack',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M4 10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm4 0h8m-8 8h8"/><path d="M8 22v-6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v6M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"/></svg>'
			},
			{
				name: 'bacon',
				title: 'Bacon',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M22 8c-2 5-5 2-7 7s-5 2-7 7l-6-6c2-5 5-2 7-7s5-2 7-7Z"/><path d="M5 19c2-5 5-2 7-7s5-2 7-7"/></svg>'
			},
			{
				name: 'badge-alert',
				title: 'Badge Alert',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76M12 8v4m0 4h.01"/></svg>'
			},
			{
				name: 'badge-cent',
				title: 'Badge Cent',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76M12 7v10"/><path d="M15.4 10a4 4 0 1 0 0 4"/></svg>'
			},
			{
				name: 'badge-check',
				title: 'Badge Check',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76"/><path d="m9 12 2 2 4-4"/></svg>'
			},
			{
				name: 'badge-dollar-sign',
				title: 'Badge Dollar Sign',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8m4 2V6"/></svg>'
			},
			{
				name: 'badge-euro',
				title: 'Badge Euro',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76M7 12h5"/><path d="M15 9.4a4 4 0 1 0 0 5.2"/></svg>'
			},
			{
				name: 'badge-indian-rupee',
				title: 'Badge Indian Rupee',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76M8 8h8m-8 4h8"/><path d="m13 17-5-1h1a4 4 0 0 0 0-8"/></svg>'
			},
			{
				name: 'badge-info',
				title: 'Badge Info',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76M12 16v-4m0-4h.01"/></svg>'
			},
			{
				name: 'badge-japanese-yen',
				title: 'Badge Japanese Yen',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76"/><path d="m9 8 3 3v7m0-7 3-3m-6 4h6m-6 4h6"/></svg>'
			},
			{
				name: 'badge-minus',
				title: 'Badge Minus',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76M8 12h8"/></svg>'
			},
			{
				name: 'badge-percent',
				title: 'Badge Percent',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76M15 9l-6 6m0-6h.01M15 15h.01"/></svg>'
			},
			{
				name: 'badge-plus',
				title: 'Badge Plus',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76M12 8v8m-4-4h8"/></svg>'
			},
			{
				name: 'badge-pound-sterling',
				title: 'Badge Pound Sterling',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76M8 12h4"/><path d="M10 16V9.5a2.5 2.5 0 0 1 5 0M8 16h7"/></svg>'
			},
			{
				name: 'badge-question-mark',
				title: 'Badge Question Mark',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3m.08 4h.01"/></svg>'
			},
			{
				name: 'badge-russian-ruble',
				title: 'Badge Russian Ruble',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76M9 16h5"/><path d="M9 12h5a2 2 0 1 0 0-4h-3v9"/></svg>'
			},
			{
				name: 'badge-swiss-franc',
				title: 'Badge Swiss Franc',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76"/><path d="M11 17V8h4m-4 4h3m-5 4h4"/></svg>'
			},
			{
				name: 'badge-turkish-lira',
				title: 'Badge Turkish Lira',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M11 7v10a5 5 0 0 0 5-5m-1-4-6 3"/><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76"/></svg>'
			},
			{
				name: 'badge-x',
				title: 'Badge X',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76M15 9l-6 6m0-6 6 6"/></svg>'
			},
			{
				name: 'badge',
				title: 'Badge',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76"/></svg>'
			},
			{
				name: 'bag-hand',
				title: 'Bag Hand',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M8 8c0-2.8 1.8-5 4-5s4 2.2 4 5m5 10.6-2-9.8c-.1-.5-.5-.8-1-.8H6c-.5 0-.9.3-1 .8l-2 9.8v.4a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2ZM12 12v4"/><path d="M18 8A6 6 0 0 1 6 8"/></svg>'
			},
			{
				name: 'baggage-claim',
				title: 'Baggage Claim',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M22 18H6a2 2 0 0 1-2-2V7a2 2 0 0 0-2-2"/><path d="M17 14V4a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v10"/><rect width="13" height="8" x="8" y="6" rx="1"/><circle cx="18" cy="20" r="2"/><circle cx="9" cy="20" r="2"/></svg>'
			},
			{
				name: 'ban',
				title: 'Ban',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M4.929 4.929 19.07 19.071"/><circle cx="12" cy="12" r="10"/></svg>'
			},
			{
				name: 'banana',
				title: 'Banana',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M4 13c3.5-2 8-2 10 2a5.5 5.5 0 0 1 8 5"/><path d="M5.15 17.89c5.52-1.52 8.65-6.89 7-12C11.55 4 11.5 2 13 2c3.22 0 5 5.5 5 8 0 6.5-4.2 12-10.49 12C5.11 22 2 22 2 20c0-1.5 1.14-1.55 3.15-2.11"/></svg>'
			},
			{
				name: 'bandage',
				title: 'Bandage',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 10.01h.01m-.01 4h.01m3.99-4h.01m-.01 4h.01M18 6v11.5M6 6v12"/><rect width="20" height="12" x="2" y="6" rx="2"/></svg>'
			},
			{
				name: 'banknote-arrow-down',
				title: 'Banknote Arrow Down',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5m-6 6 3 3 3-3m-4-7h.01m.99 4v6M6 12h.01"/><circle cx="12" cy="12" r="2"/></svg>'
			},
			{
				name: 'banknote-arrow-up',
				title: 'Banknote Arrow Up',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5m-4-1h.01M19 22v-6m3 3-3-3-3 3M6 12h.01"/><circle cx="12" cy="12" r="2"/></svg>'
			},
			{
				name: 'banknote-x',
				title: 'Banknote X',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M13 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5m-5 4 5 5m-4-10h.01M22 17l-5 5M6 12h.01"/><circle cx="12" cy="12" r="2"/></svg>'
			},
			{
				name: 'banknote',
				title: 'Banknote',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="20" height="12" x="2" y="6" rx="2"/><circle cx="12" cy="12" r="2"/><path d="M6 12h.01M18 12h.01"/></svg>'
			},
			{
				name: 'barbecue',
				title: 'Barbecue',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M6 4c0-1 2-1 2-2m4 2c0-1 2-1 2-2m4 2c0-1 2-1 2-2M3 8a9.06 9 0 0 0 18 0Zm6.2 7.6-1.3 2.6"/><circle cx="7" cy="20" r="2"/><path d="M9 20h8m-2.2-4.4L18 22"/></svg>'
			},
			{
				name: 'barber-pole',
				title: 'Barber Pole',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M7 6h10M7 22h10m-9 0V6a4 4 0 0 1 8 0v16M8 11.5l8-4M8 16l8-4m-8 8.5 8-4"/></svg>'
			},
			{
				name: 'barcode',
				title: 'Barcode',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M3 5v14M8 5v14m4-14v14m5-14v14m4-14v14"/></svg>'
			},
			{
				name: 'barn',
				title: 'Barn',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M22 12H2l2-6 8-4 8 4Z"/><path d="M10 8h4v4h-4zM7 22l10-10v10L7 12Z"/><path d="M21 12v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-8"/></svg>'
			},
			{
				name: 'barrel',
				title: 'Barrel',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 3a41 41 0 0 0 0 18m4-18a41 41 0 0 1 0 18"/><path d="M17 3a2 2 0 0 1 1.68.92 15.25 15.25 0 0 1 0 16.16A2 2 0 0 1 17 21H7a2 2 0 0 1-1.68-.92 15.25 15.25 0 0 1 0-16.16A2 2 0 0 1 7 3zM3.84 17h16.32M3.84 7h16.32"/></svg>'
			},
			{
				name: 'baseball',
				title: 'Baseball',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M2 12c5.5 0 10-4.5 10-10"/><circle cx="12" cy="12" r="10"/><path d="M22 12c-5.5 0-10 4.5-10 10M8 11.5l-1.5-2m5-1.5-2-1.5m5 11-2-1.5m5-1.5-1.5-2"/></svg>'
			},
			{
				name: 'baseline-square',
				title: 'Baseline Square',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9.5 12h5M9 13l3-6 3 6m-8 4h10"/></svg>'
			},
			{
				name: 'baseline',
				title: 'Baseline',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M4 20h16M6 16l6-12 6 12M8 12h8"/></svg>'
			},
			{
				name: 'basketball',
				title: 'Basketball',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M2.1 13.4A10.1 10.1 0 0 0 13.4 2.1M5 4.9l14 14.2m2.9-8.5a10.1 10.1 0 0 0-11.3 11.3"/></svg>'
			},
			{
				name: 'bat-ball',
				title: 'Bat Ball',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="18" cy="18" r="4"/><path d="m4 8 10 10m6.8-2.8c1.9-3.4 1.4-7.7-1.4-10.6-3.5-3.5-9.1-3.5-12.5 0-4.7 4.7-5.1 6.9-1.4 11.1l-2.9 2.9c-.8.8-.8 2 0 2.8s2 .8 2.8 0l2.9-2.9c2.6 2.3 4.5 3 6.6 2.1"/></svg>'
			},
			{
				name: 'bath-bubble',
				title: 'Bath Bubble',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M15 3h.01"/><circle cx="11.5" cy="6.5" r=".5"/><circle cx="16.5" cy="7.5" r=".5"/><path d="M2 12h6m5 3H8v-3c0-.6.4-1 1-1h3c.6 0 1 .4 1 1Zm0-3h9"/><path d="M4 12v5a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5M7 19v2m10-2v2"/></svg>'
			},
			{
				name: 'bath',
				title: 'Bath',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 4 8 6m9 13v2M2 12h20M7 19v2M9 5 7.621 3.621A2.121 2.121 0 0 0 4 5v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5"/></svg>'
			},
			{
				name: 'battery-charging',
				title: 'Battery Charging',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m11 7-3 5h4l-3 5m5.856-11H16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.935M22 14v-4M5.14 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2.936"/></svg>'
			},
			{
				name: 'battery-full',
				title: 'Battery Full',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 10v4m4-4v4m8 0v-4M6 10v4"/><rect width="16" height="12" x="2" y="6" rx="2"/></svg>'
			},
			{
				name: 'battery-low',
				title: 'Battery Low',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M22 14v-4M6 14v-4"/><rect width="16" height="12" x="2" y="6" rx="2"/></svg>'
			},
			{
				name: 'battery-medium',
				title: 'Battery Medium',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 14v-4m12 4v-4M6 14v-4"/><rect width="16" height="12" x="2" y="6" rx="2"/></svg>'
			},
			{
				name: 'battery-plus',
				title: 'Battery Plus',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 9v6m2.543-9H16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.605M22 14v-4M7 12h6m-5.394 6H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.606"/></svg>'
			},
			{
				name: 'battery-warning',
				title: 'Battery Warning',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 17h.01M10 7v6m4-7h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2m8-4v-4M6 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2"/></svg>'
			},
			{
				name: 'battery',
				title: 'Battery',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M22 14v-4"/><rect width="16" height="12" x="2" y="6" rx="2"/></svg>'
			},
			{
				name: 'beach-ball',
				title: 'Beach Ball',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M19.1 4.9c-1.6-1.6-6 .3-9.9 4.2S3.4 17.4 5 19s6-.3 9.9-4.2c3.8-3.9 5.7-8.3 4.2-9.9"/></svg>'
			},
			{
				name: 'beaker',
				title: 'Beaker',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M4.5 3h15M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3M6 14h12"/></svg>'
			},
			{
				name: 'bean-off',
				title: 'Bean Off',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22a13.96 13.96 0 0 0 9.9-4.1M10.75 5.093A6 6 0 0 1 22 8c0 2.411-.61 4.68-1.683 6.66"/><path d="M5.341 10.62a4 4 0 0 0 6.487 1.208M10.62 5.341a4 4 0 0 1 2.039 2.04M2 2l20 20"/></svg>'
			},
			{
				name: 'bean',
				title: 'Bean',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10.165 6.598C9.954 7.478 9.64 8.36 9 9s-1.521.954-2.402 1.165A6 6 0 0 0 8 22c7.732 0 14-6.268 14-14a6 6 0 0 0-11.835-1.402"/><path d="M5.341 10.62a4 4 0 1 0 5.279-5.28"/></svg>'
			},
			{
				name: 'bear-face',
				title: 'Bear Face',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m6 7 .5.5M18 7l-.5.5m3.3-3.3c-1.6-1.6-4.1-1.6-5.7 0l-1 1a13.6 13.6 0 0 0-4.2 0l-1-1a4 4 0 0 0-5.8 5.55A7 7 0 0 0 2 13.5C2 18.2 6.5 22 12 22s10-3.8 10-8.5a7 7 0 0 0-1.1-3.8c1.5-1.6 1.5-4-.1-5.5M10 12v-.5m4 .5v-.5m0 4.5h-4m2 0v2"/></svg>'
			},
			{
				name: 'bed-bunk',
				title: 'Bed Bunk',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M2 22V2m0 3h18a2 2 0 0 1 2 2v15M6 5v5m-4 0h20M2 14h20m0 5H2m4-5v5"/></svg>'
			},
			{
				name: 'bed-double',
				title: 'Bed Double',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4m-8-6v6M2 18h20"/></svg>'
			},
			{
				name: 'bed-single',
				title: 'Bed Single',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M3 20v-8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8M5 10V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4M3 18h18"/></svg>'
			},
			{
				name: 'bed',
				title: 'Bed',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M2 4v16M2 8h18a2 2 0 0 1 2 2v10M2 17h20M6 8v9"/></svg>'
			},
			{
				name: 'bee-hive',
				title: 'Bee Hive',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="10" height="4" x="7" y="2" rx="2"/><rect width="16" height="4" x="4" y="6" rx="2"/><path d="M14 14h6a2 2 0 1 0 0-4H4a2 2 0 1 0 0 4h6"/><rect width="4" height="8" x="10" y="10" rx="2"/><path d="M19 14a2 2 0 1 1 0 4H5a2 2 0 1 1 0-4"/><rect width="14" height="4" x="5" y="18" rx="2"/></svg>'
			},
			{
				name: 'bee',
				title: 'Bee',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m8 2 1.88 1.88m4.24 0L16 2M9 7V6a3 3 0 1 1 6 0v1M5 7a3 3 0 1 0 2.2 5.1C9.1 10 12 7 12 7s2.9 3 4.8 5.1A3 3 0 1 0 19 7Zm2.56 5h8.87M7.5 17h9"/><path d="M15.5 10.7c.9.9 1.4 2.1 1.5 3.3 0 5.8-5 8-5 8s-5-2.2-5-8c.1-1.2.6-2.4 1.5-3.3"/></svg>'
			},
			{
				name: 'beef',
				title: 'Beef',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M16.4 13.7A6.5 6.5 0 1 0 6.28 6.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3"/><path d="m18.5 6 2.19 4.5a6.48 6.48 0 0 1-2.29 7.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5"/><circle cx="12.5" cy="8.5" r="2.5"/></svg>'
			},
			{
				name: 'beer-off',
				title: 'Beer Off',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M13 13v5m4-6.53V8m0 3h1a3 3 0 0 1 2.745 4.211M2 2l20 20M5 8v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-3"/><path d="M7.536 7.535C6.766 7.649 6.154 8 5.5 8a2.5 2.5 0 0 1-1.768-4.268m4.995-.528C9.306 2.767 9.885 2 11 2c1.56 0 2 1.5 3 1.5s1.72-.5 2.5-.5a1 1 0 1 1 0 5c-.78 0-1.5-.5-2.5-.5a3.2 3.2 0 0 0-.842.12M9 14.6V18"/></svg>'
			},
			{
				name: 'beer',
				title: 'Beer',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M17 11h1a3 3 0 0 1 0 6h-1m-8-5v6m4-6v6m1-10.5c-1 0-1.44.5-3 .5s-2-.5-3-.5-1.72.5-2.5.5a2.5 2.5 0 0 1 0-5c.78 0 1.57.5 2.5.5S9.44 2 11 2s2 1.5 3 1.5 1.72-.5 2.5-.5a2.5 2.5 0 0 1 0 5c-.78 0-1.5-.5-2.5-.5"/><path d="M5 8v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8"/></svg>'
			},
			{
				name: 'beetle-scarab',
				title: 'Beetle Scarab',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m8 2 1.88 1.88m4.24 0L16 2M9 7.13V6a3 3 0 1 1 6 0v1.13"/><path d="M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6m0 0v-9"/><path d="M5 4.8C3.2 6.2 2 8.5 2 11h20c0-2.5-1.2-4.8-3-6.2M6.08 15h-4c.2 2.4 1.25 4.4 2.8 6m14.22 0a9 9.4 0 0 0 2.82-6h-4"/></svg>'
			},
			{
				name: 'bell-concierge-dot',
				title: 'Bell Concierge Dot',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="19" cy="9" r="3"/><path d="M2 18a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v2H2ZM12 4v4c-4.4 0-8 3.6-8 8m6-12h4"/></svg>'
			},
			{
				name: 'bell-concierge-off',
				title: 'Bell Concierge Off',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m2 2 20 20M12 4v2.3M10 4h4m5.8 10.1a8 8 0 0 0-5.9-5.9m-5.2.5C5.9 10 4 12.8 4 16"/><path d="M16 16H4a2 2 0 0 0-2 2v2h18"/></svg>'
			},
			{
				name: 'bell-concierge',
				title: 'Bell Concierge',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M3 20a1 1 0 0 1-1-1v-1a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1Zm17-4a8 8 0 1 0-16 0m8-12v4m-2-4h4"/></svg>'
			},
			{
				name: 'bell-dot',
				title: 'Bell Dot',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10.268 21a2 2 0 0 0 3.464 0m.184-18.686A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.74 7.327A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673 9 9 0 0 1-.585-.665"/><circle cx="18" cy="8" r="3"/></svg>'
			},
			{
				name: 'bell-electric',
				title: 'Bell Electric',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M18.518 17.347A7 7 0 0 1 14 19m4.8-15A11 11 0 0 1 20 9M9 9h.01"/><circle cx="20" cy="16" r="2"/><circle cx="9" cy="9" r="7"/><rect width="10" height="6" x="4" y="16" rx="2"/></svg>'
			},
			{
				name: 'bell-minus',
				title: 'Bell Minus',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10.268 21a2 2 0 0 0 3.464 0M15 8h6m-4.757-4.243A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673A9.4 9.4 0 0 1 18.667 12"/></svg>'
			},
			{
				name: 'bell-off',
				title: 'Bell Off',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10.268 21a2 2 0 0 0 3.464 0M17 17H4a1 1 0 0 1-.74-1.673C4.59 13.956 6 12.499 6 8a6 6 0 0 1 .258-1.742M2 2l20 20M8.668 3.01A6 6 0 0 1 18 8c0 2.687.77 4.653 1.707 6.05"/></svg>'
			},
			{
				name: 'bell-plus',
				title: 'Bell Plus',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10.268 21a2 2 0 0 0 3.464 0M15 8h6m-3-3v6m2.002 3.464a9 9 0 0 0 .738.863A1 1 0 0 1 20 17H4a1 1 0 0 1-.74-1.673C4.59 13.956 6 12.499 6 8a6 6 0 0 1 8.75-5.332"/></svg>'
			},
			{
				name: 'bell-ring',
				title: 'Bell Ring',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10.268 21a2 2 0 0 0 3.464 0M22 8c0-2.3-.8-4.3-2-6M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326M4 2C2.8 3.7 2 5.7 2 8"/></svg>'
			},
			{
				name: 'bell',
				title: 'Bell',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10.268 21a2 2 0 0 0 3.464 0m-10.47-5.674A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"/></svg>'
			},
			{
				name: 'belt',
				title: 'Belt',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M7.3 9H3c-.6 0-1-.4-1-1V4c0-.6.4-1 1-1h4.3M6 6h3m4 0h.01"/><rect width="10" height="8" x="7" y="2" rx="2"/><path d="M16.7 3H21c.6 0 1 .4 1 1v4c0 .6-.4 1-1 1h-4.3m-6.2 1-8.1 6.2m19.2-7.4L12.2 16M3 22c-.6 0-1-.4-1-1v-4c0-.6.4-1 1-1h16l3 3-3 3Z"/></svg>'
			},
			{
				name: 'between-horizontal-end',
				title: 'Between Horizontal End',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="13" height="7" x="3" y="3" rx="1"/><path d="m22 15-3-3 3-3"/><rect width="13" height="7" x="3" y="14" rx="1"/></svg>'
			},
			{
				name: 'between-horizontal-start',
				title: 'Between Horizontal Start',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="13" height="7" x="8" y="3" rx="1"/><path d="m2 9 3 3-3 3"/><rect width="13" height="7" x="8" y="14" rx="1"/></svg>'
			},
			{
				name: 'between-vertical-end',
				title: 'Between Vertical End',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="7" height="13" x="3" y="3" rx="1"/><path d="m9 22 3-3 3 3"/><rect width="7" height="13" x="14" y="3" rx="1"/></svg>'
			},
			{
				name: 'between-vertical-start',
				title: 'Between Vertical Start',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="7" height="13" x="3" y="8" rx="1"/><path d="m15 2-3 3-3-3"/><rect width="7" height="13" x="14" y="8" rx="1"/></svg>'
			},
			{
				name: 'biceps-flexed',
				title: 'Biceps Flexed',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12.409 13.017A5 5 0 0 1 22 15c0 3.866-4 7-9 7-4.077 0-8.153-.82-10.371-2.462-.426-.316-.631-.832-.62-1.362C2.118 12.723 2.627 2 10 2a3 3 0 0 1 3 3 2 2 0 0 1-2 2c-1.105 0-1.64-.444-2-1"/><path d="M15 14a5 5 0 0 0-7.584 2"/><path d="M9.964 6.825C8.019 7.977 9.5 13 8 15"/></svg>'
			},
			{
				name: 'bike',
				title: 'Bike',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="18.5" cy="17.5" r="3.5"/><circle cx="5.5" cy="17.5" r="3.5"/><circle cx="15" cy="5" r="1"/><path d="M12 17.5V14l-3-3 4-3 2 3h2"/></svg>'
			},
			{
				name: 'binary',
				title: 'Binary',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="4" height="6" x="14" y="14" rx="2"/><rect width="4" height="6" x="6" y="4" rx="2"/><path d="M6 20h4m4-10h4M6 14h2v6m6-16h2v6"/></svg>'
			},
			{
				name: 'binoculars',
				title: 'Binoculars',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 10h4m5-3V4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3m5 14a2 2 0 0 0 2-2v-3.851c0-1.39-2-2.962-2-4.829V8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v11a2 2 0 0 0 2 2zm2-5H2m2 5a2 2 0 0 1-2-2v-3.851c0-1.39 2-2.962 2-4.829V8a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v11a2 2 0 0 1-2 2zM9 7V4a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v3"/></svg>'
			},
			{
				name: 'biohazard',
				title: 'Biohazard',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="11.9" r="2"/><path d="M6.7 3.4c-.9 2.5 0 5.2 2.2 6.7C6.5 9 3.7 9.6 2 11.6m6.9-1.5 1.4.8m7-7.5c.9 2.5 0 5.2-2.2 6.7 2.4-1.2 5.2-.6 6.9 1.5m-6.9-1.5-1.4.8m3 9.9c-2.6-.4-4.6-2.6-4.7-5.3-.2 2.6-2.1 4.8-4.7 5.2m4.7-6.8v1.6m1.5-10.1q-1.5-.3-3 0m6.5 11c.7-.7 1.2-1.6 1.5-2.5m-13 0c.3.9.8 1.8 1.5 2.5"/></svg>'
			},
			{
				name: 'bird',
				title: 'Bird',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M16 7h.01M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20"/><path d="m20 7 2 .5-2 .5M10 18v3m4-3.25V21m-7-3a6 6 0 0 0 3.84-10.61"/></svg>'
			},
			{
				name: 'bitcoin',
				title: 'Bitcoin',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893-3.94-.694m5.155-6.2L8.29 4.26m5.908 1.042.348-1.97M7.48 20.364l3.126-17.727"/></svg>'
			},
			{
				name: 'blend',
				title: 'Blend',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="9" cy="9" r="7"/><circle cx="15" cy="15" r="7"/></svg>'
			},
			{
				name: 'blinds',
				title: 'Blinds',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M3 3h18m-1 4H8m12 4H8m2 8h10M8 15h12M4 3v14"/><circle cx="4" cy="19" r="2"/></svg>'
			},
			{
				name: 'blocks',
				title: 'Blocks',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 22V7a1 1 0 0 0-1-1H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5a1 1 0 0 0-1-1H2"/><rect width="8" height="8" x="14" y="2" rx="1"/></svg>'
			},
			{
				name: 'bluetooth-connected',
				title: 'Bluetooth Connected',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m7 7 10 10-5 5V2l5 5L7 17m11-5h3M3 12h3"/></svg>'
			},
			{
				name: 'bluetooth-off',
				title: 'Bluetooth Off',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m17 17-5 5V12l-5 5M2 2l20 20M14.5 9.5 17 7l-5-5v4.5"/></svg>'
			},
			{
				name: 'bluetooth-searching',
				title: 'Bluetooth Searching',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m7 7 10 10-5 5V2l5 5L7 17m13.83-2.17a4 4 0 0 0 0-5.66M18 12h.01"/></svg>'
			},
			{
				name: 'bluetooth',
				title: 'Bluetooth',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m7 7 10 10-5 5V2l5 5L7 17"/></svg>'
			},
			{
				name: 'bold-square',
				title: 'Bold Square',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M8 12h5.5a2.5 2.5 0 0 1 0 5H8V7h5a2.5 2.5 0 0 1 0 5"/></svg>'
			},
			{
				name: 'bold',
				title: 'Bold',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8"/></svg>'
			},
			{
				name: 'bolt',
				title: 'Bolt',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16"/><circle cx="12" cy="12" r="4"/></svg>'
			},
			{
				name: 'bomb',
				title: 'Bomb',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="11" cy="13" r="9"/><path d="M14.35 4.65 16.3 2.7a2.41 2.41 0 0 1 3.4 0l1.6 1.6a2.4 2.4 0 0 1 0 3.4l-1.95 1.95M22 2l-1.5 1.5"/></svg>'
			},
			{
				name: 'bone',
				title: 'Bone',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M17 10c.7-.7 1.69 0 2.5 0a2.5 2.5 0 1 0 0-5 .5.5 0 0 1-.5-.5 2.5 2.5 0 1 0-5 0c0 .81.7 1.8 0 2.5l-7 7c-.7.7-1.69 0-2.5 0a2.5 2.5 0 0 0 0 5c.28 0 .5.22.5.5a2.5 2.5 0 1 0 5 0c0-.81-.7-1.8 0-2.5Z"/></svg>'
			},
			{
				name: 'book-a',
				title: 'Book A',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"/><path d="m8 13 4-7 4 7m-6.9-2h5.7"/></svg>'
			},
			{
				name: 'book-alert',
				title: 'Book Alert',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 13h.01M12 6v3M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"/></svg>'
			},
			{
				name: 'book-audio',
				title: 'Book Audio',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 6v7m4-5v3M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20M8 8v3"/></svg>'
			},
			{
				name: 'book-check',
				title: 'Book Check',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"/><path d="m9 9.5 2 2 4-4"/></svg>'
			},
			{
				name: 'book-copy',
				title: 'Book Copy',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M5 7a2 2 0 0 0-2 2v11"/><path d="M5.803 18H5a2 2 0 0 0 0 4h9.5a.5.5 0 0 0 .5-.5V21m-6-6V4a2 2 0 0 1 2-2h9.5a.5.5 0 0 1 .5.5v14a.5.5 0 0 1-.5.5H11a2 2 0 0 1 0-4h10"/></svg>'
			},
			{
				name: 'book-dashed',
				title: 'Book Dashed',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 17h1.5M12 22h1.5M12 2h1.5m4 20H19a1 1 0 0 0 1-1M17.5 2H19a1 1 0 0 1 1 1v1.5m0 9.5v3h-2.5M20 8.5V10M4 10V8.5m0 11V14m0-9.5A2.5 2.5 0 0 1 6.5 2H8m0 20H6.5a1 1 0 0 1 0-5H8"/></svg>'
			},
			{
				name: 'book-down',
				title: 'Book Down',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 13V7M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"/><path d="m9 10 3 3 3-3"/></svg>'
			},
			{
				name: 'book-headphones',
				title: 'Book Headphones',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"/><path d="M8 12v-2a4 4 0 0 1 8 0v2"/><circle cx="15" cy="12" r="1"/><circle cx="9" cy="12" r="1"/></svg>'
			},
			{
				name: 'book-heart',
				title: 'Book Heart',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"/><path d="M8.62 9.8A2.25 2.25 0 1 1 12 6.836a2.25 2.25 0 1 1 3.38 2.966l-2.626 2.856a.998.998 0 0 1-1.507 0z"/></svg>'
			},
			{
				name: 'book-image',
				title: 'Book Image',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m20 13.7-2.1-2.1a2 2 0 0 0-2.8 0L9.7 17"/><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"/><circle cx="10" cy="8" r="2"/></svg>'
			},
			{
				name: 'book-key',
				title: 'Book Key',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m19 3 1 1m0-2-4.5 4.5M20 7.898V21a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"/><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2h7.844"/><circle cx="14" cy="8" r="2"/></svg>'
			},
			{
				name: 'book-lock',
				title: 'Book Lock',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M18 6V4a2 2 0 1 0-4 0v2m6 9v6a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"/><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H10"/><rect width="8" height="5" x="12" y="6" rx="1"/></svg>'
			},
			{
				name: 'book-marked',
				title: 'Book Marked',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 2v8l3-3 3 3V2"/><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"/></svg>'
			},
			{
				name: 'book-minus',
				title: 'Book Minus',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20M9 10h6"/></svg>'
			},
			{
				name: 'book-open-check',
				title: 'Book Open Check',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 21V7m4 5 2 2 4-4"/><path d="M22 6V4a1 1 0 0 0-1-1h-5a4 4 0 0 0-4 4 4 4 0 0 0-4-4H3a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h6a3 3 0 0 1 3 3 3 3 0 0 1 3-3h6a1 1 0 0 0 1-1v-1.3"/></svg>'
			},
			{
				name: 'book-open-text',
				title: 'Book Open Text',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 7v14m4-9h2m-2-4h2M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3zm3-6h2M6 8h2"/></svg>'
			},
			{
				name: 'book-open',
				title: 'Book Open',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 7v14m-9-3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"/></svg>'
			},
			{
				name: 'book-plus',
				title: 'Book Plus',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 7v6m-8 6.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20M9 10h6"/></svg>'
			},
			{
				name: 'book-text',
				title: 'Book Text',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20M8 11h8M8 7h6"/></svg>'
			},
			{
				name: 'book-type',
				title: 'Book Type',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 13h4m-2-7v7m4-5V6H8v2"/><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"/></svg>'
			},
			{
				name: 'book-up-2',
				title: 'Book Up 2',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 13V7m6-5h1a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"/><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2M9 10l3-3 3 3M9 5l3-3 3 3"/></svg>'
			},
			{
				name: 'book-up',
				title: 'Book Up',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 13V7M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"/><path d="m9 10 3-3 3 3"/></svg>'
			},
			{
				name: 'book-user',
				title: 'Book User',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M15 13a3 3 0 1 0-6 0"/><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"/><circle cx="12" cy="8" r="2"/></svg>'
			},
			{
				name: 'book-x',
				title: 'Book X',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m14.5 7-5 5M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20M9.5 7l5 5"/></svg>'
			},
			{
				name: 'book',
				title: 'Book',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"/></svg>'
			},
			{
				name: 'bookmark-check',
				title: 'Bookmark Check',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z"/><path d="m9 10 2 2 4-4"/></svg>'
			},
			{
				name: 'bookmark-minus',
				title: 'Bookmark Minus',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2zm-4-11H9"/></svg>'
			},
			{
				name: 'bookmark-plus',
				title: 'Bookmark Plus',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2zM12 7v6m3-3H9"/></svg>'
			},
			{
				name: 'bookmark-x',
				title: 'Bookmark X',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2ZM14.5 7.5l-5 5m0-5 5 5"/></svg>'
			},
			{
				name: 'bookmark',
				title: 'Bookmark',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>'
			},
			{
				name: 'boom-box',
				title: 'Boom Box',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M4 9V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4M8 8v1m4-1v1m4-1v1"/><rect width="20" height="12" x="2" y="9" rx="2"/><circle cx="8" cy="15" r="2"/><circle cx="16" cy="15" r="2"/></svg>'
			},
			{
				name: 'bot-message-square',
				title: 'Bot Message Square',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 6V2H8m7 9v2M2 12h2m16 0h2m-2 4a2 2 0 0 1-2 2H8.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 4 20.286V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2zM9 11v2"/></svg>'
			},
			{
				name: 'bot-off',
				title: 'Bot Off',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M13.67 8H18a2 2 0 0 1 2 2v4.33M2 14h2m16 0h2m0 8L2 2m6 6H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 1.414-.586M9 13v2m.67-11H12v2.33"/></svg>'
			},
			{
				name: 'bot',
				title: 'Bot',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2m16 0h2m-7-1v2m-6-2v2"/></svg>'
			},
			{
				name: 'bottle-baby',
				title: 'Bottle Baby',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M20 11c1.1-1.4 1.3-3.3.7-4.9l.8-.8a1.5 1.5 0 0 0-2.8-2.8l-.8.8A5.33 5.33 0 0 0 13 4"/><path d="M11.3 3.7a1 1 0 0 1 1.4 0l7.6 7.6a1 1 0 0 1 0 1.4l-1.6 1.6a1 1 0 0 1-1.4 0L9.7 6.7a1 1 0 0 1 0-1.4Z"/><path d="m10 7-7.3 7.3c-.9.9-.9 2.5 0 3.4l3.6 3.6c.9.9 2.5.9 3.4 0L17 14M4 13l2 2m1-5 2 2"/></svg>'
			},
			{
				name: 'bottle-champagne',
				title: 'Bottle Champagne',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M8 2h.01M12 3h.01M19 8l-3-3M9.7 21.3a2.4 2.4 0 0 1-3.4 0l-3.6-3.6a2.41 2.41 0 0 1 0-3.4l6.27-6.27A3.5 3.5 0 0 1 11.45 7h1.1a3.5 3.5 0 0 0 2.47-1.03l3.62-3.61a1.21 1.21 0 0 1 1.72 0l1.28 1.28a1.2 1.2 0 0 1 0 1.72l-3.62 3.61A3.5 3.5 0 0 0 17 11.45v1.1a3.5 3.5 0 0 1-1.03 2.48Z"/><path d="m9.06 8 3.23 3.24a1 1 0 0 1 0 1.41L8.65 16.3a1 1 0 0 1-1.41 0L4 13.06M21 12h.01m.99 4h.01"/></svg>'
			},
			{
				name: 'bottle-dispenser',
				title: 'Bottle Dispenser',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="18.5" cy="5.5" r=".5"/><path d="M20 10h.01M9 2h7m-5 0v4"/><rect width="4" height="4" x="9" y="6" rx="1"/><path d="M9 10c-1.7 0-3 1.3-3 3v7a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-7c0-1.7-1.3-3-3-3Z"/><path d="M6 14.5a6 6 0 0 1 5 0s2 1.25 5 0"/></svg>'
			},
			{
				name: 'bottle-perfume',
				title: 'Bottle Perfume',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M6 3h12v4H6zm3 4h6v4H9z"/><rect width="18" height="10" x="3" y="11" rx="2"/></svg>'
			},
			{
				name: 'bottle-plastic',
				title: 'Bottle Plastic',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 6.1V3c0-.6.4-1 1-1h2c.6 0 1 .4 1 1v3.1"/><path d="M17 14.5c0-1.2-.9-2.2-2-2.4V12a2 2 0 0 0 2-2 4 4 0 0 0-4-4h-2a4 4 0 0 0-4 4 2 2 0 0 0 2 2v.1a2.5 2.5 0 0 0 0 4.8v.1a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2v-.1c1.1-.2 2-1.2 2-2.4"/></svg>'
			},
			{
				name: 'bottle-spray',
				title: 'Bottle Spray',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 2v4m-6 4h4m0-2a2 2 0 0 1 2-2h3c.6 0 1-.4 1-1V3c0-.6-.4-1-1-1H5C3.3 2 2 3.3 2 5c0 .6.4 1 1 1h1a2 2 0 0 1 2 2v2l-2.3 2.3c-.4.4-.7 1.1-.7 1.7v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-6c0-.6-.3-1.3-.7-1.7L10 10Z"/><path d="M14 6c0 2 0 3 2 4M3 16.5a6 6 0 0 1 5 0s2 1.25 5 0M22 2h.01M20 5.5h.01M22 9h.01"/></svg>'
			},
			{
				name: 'bottle-toothbrush-comb',
				title: 'Bottle Toothbrush Comb',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M2 3h4v4H2zm4 4v2c0 .6.1 1.4.2 2L8 20.8v.2c0 .6-.4 1-1 1H3c-.6 0-1-.4-1-1V7m12-5v7l-2 5v8"/><path d="M10 3h4v6h-4zm8 3h4m-4 4h4m-4 4h4m-4 4h4M18 2h2a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2"/></svg>'
			},
			{
				name: 'bottle-wine',
				title: 'Bottle Wine',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a6 6 0 0 0 1.2 3.6l.6.8A6 6 0 0 1 17 13v8a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-8a6 6 0 0 1 1.2-3.6l.6-.8A6 6 0 0 0 10 5z"/><path d="M17 13h-4a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h4"/></svg>'
			},
			{
				name: 'bow-arrow',
				title: 'Bow Arrow',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M17 3h4v4m-2.425 4.082a13 13 0 0 1 1.048 9.027 1.17 1.17 0 0 1-1.914.597L14 17m-7-7L3.29 6.29a1.17 1.17 0 0 1 .6-1.91 13 13 0 0 1 9.03 1.05M7 14a1.7 1.7 0 0 0-1.207.5l-2.646 2.646A.5.5 0 0 0 3.5 18H5a1 1 0 0 1 1 1v1.5a.5.5 0 0 0 .854.354L9.5 18.207A1.7 1.7 0 0 0 10 17v-2a1 1 0 0 0-1-1zm2.707.293L21 3"/></svg>'
			},
			{
				name: 'bowl-chopsticks',
				title: 'Bowl Chopsticks',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m13 2-3 11M22 2l-8 11"/><ellipse cx="12" cy="12" rx="10" ry="5"/><path d="M22 12a10 10 0 0 1-20 0"/></svg>'
			},
			{
				name: 'bowl-overflow',
				title: 'Bowl Overflow',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 4C6.5 4 2 6.2 2 9c0 2.4 3.4 4.4 8 4.9 1.1.1 2 1 2 2.1v3a2 2 0 0 0 4 0v-3.4c0-1.1.9-2.2 1.9-2.6 2.5-.9 4.1-2.4 4.1-4 0-2.8-4.5-5-10-5"/><path d="M2 9c0 5.5 4.5 10 10 10m4-.8c3.5-1.5 6-5.1 6-9.2m-6 6.6c0-2.6 3-2.6 3-4.6 0-1.7-3.1-3-7-3s-7 1.3-7 3c0 1.4 2.1 2.5 5 2.9"/></svg>'
			},
			{
				name: 'bowling',
				title: 'Bowling',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M9 10h.01M6 13h.01M10 14h.01m1.08-7.93a8 8 0 1 0 .32 15.81M16 9h4m-5-4c0 1.5 1 2 1 4 0 2.5-2 4.5-2 7 0 2.6 1.9 6 1.9 6H20s2-3.4 2-6c0-2.5-2-4.5-2-7 0-2 1-2.5 1-4a3 3 0 1 0-6 0"/></svg>'
			},
			{
				name: 'box',
				title: 'Box',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5M12 22V12"/></svg>'
			},
			{
				name: 'boxes',
				title: 'Boxes',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3zM7 16.5l-4.74-2.85M7 16.5l5-3m-5 3v5.17m5-8.17V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5zm5 3-5-3m5 3 4.74-2.85M17 16.5v5.17"/><path d="M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0zM12 8 7.26 5.15M12 8l4.74-2.85M12 13.5V8"/></svg>'
			},
			{
				name: 'bra-sports',
				title: 'Bra Sports',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m17 21-9-9V3H4v10.6A4 4 0 0 0 6 21h12a4 4 0 0 0 2-7.4V3h-4v9l-4 4m-4-5h8"/></svg>'
			},
			{
				name: 'braces',
				title: 'Braces',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1m8 0h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1"/></svg>'
			},
			{
				name: 'brackets',
				title: 'Brackets',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M16 3h3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-3m-8 0H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h3"/></svg>'
			},
			{
				name: 'brain-circuit',
				title: 'Brain Circuit',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/><path d="M9 13a4.5 4.5 0 0 0 3-4M6.003 5.125A3 3 0 0 0 6.401 6.5m-2.924 4.396a4 4 0 0 1 .585-.396M6 18a4 4 0 0 1-1.967-.516M12 13h4m-4 5h6a2 2 0 0 1 2 2v1M12 8h8m-4 0V5a2 2 0 0 1 2-2"/><circle cx="16" cy="13" r=".5"/><circle cx="18" cy="3" r=".5"/><circle cx="20" cy="21" r=".5"/><circle cx="20" cy="8" r=".5"/></svg>'
			},
			{
				name: 'brain-cog',
				title: 'Brain Cog',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m10.852 14.772-.383.923m.383-6.467-.383-.923m2.679 6.467.382.924m.001-7.391-.383.923m1.624 1.624.923-.383m-.923 2.679.923.383M17.598 6.5A3 3 0 1 0 12 5a3 3 0 0 0-5.63-1.446 3 3 0 0 0-.368 1.571 4 4 0 0 0-2.525 5.771"/><path d="M17.998 5.125a4 4 0 0 1 2.525 5.771"/><path d="M19.505 10.294a4 4 0 0 1-1.5 7.706"/><path d="M4.032 17.483A4 4 0 0 0 11.464 20c.18-.311.892-.311 1.072 0a4 4 0 0 0 7.432-2.516"/><path d="M4.5 10.291A4 4 0 0 0 6 18m.002-12.875a3 3 0 0 0 .4 1.375m2.826 4.352-.923-.383m.923 2.679-.923.383"/><circle cx="12" cy="12" r="3"/></svg>'
			},
			{
				name: 'brain',
				title: 'Brain',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 18V5m3 8a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4m8.598-6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5"/><path d="M17.997 5.125a4 4 0 0 1 2.526 5.77"/><path d="M18 18a4 4 0 0 0 2-7.464"/><path d="M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517"/><path d="M6 18a4 4 0 0 1-2-7.464"/><path d="M6.003 5.125a4 4 0 0 0-2.526 5.77"/></svg>'
			},
			{
				name: 'brick-wall-fire',
				title: 'Brick Wall Fire',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M16 3v2.107M17 9c1 3 2.5 3.5 3.5 4.5A5 5 0 0 1 22 17a5 5 0 0 1-10 0c0-.3 0-.6.1-.9a2 2 0 1 0 3.3-2C13 11.5 16 9 17 9"/><path d="M21 8.274V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.938M3 15h5.253M3 9h8.228M8 15v6M8 3v6"/></svg>'
			},
			{
				name: 'brick-wall-shield',
				title: 'Brick Wall Shield',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 9v1.258M16 3v5.46m5 .658V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h5.75"/><path d="M22 17.5c0 2.499-1.75 3.749-3.83 4.474a.5.5 0 0 1-.335-.005c-2.085-.72-3.835-1.97-3.835-4.47V14a.5.5 0 0 1 .5-.499c1 0 2.25-.6 3.12-1.36a.6.6 0 0 1 .76-.001c.875.765 2.12 1.36 3.12 1.36a.5.5 0 0 1 .5.5zM3 15h7M3 9h12.142M8 15v6M8 3v6"/></svg>'
			},
			{
				name: 'brick-wall',
				title: 'Brick Wall',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M12 9v6m4 0v6m0-18v6M3 15h18M3 9h18M8 15v6M8 3v6"/></svg>'
			},
			{
				name: 'briefcase-business',
				title: 'Briefcase Business',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 12h.01M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2m14 7a18.15 18.15 0 0 1-20 0"/><rect width="20" height="14" x="2" y="6" rx="2"/></svg>'
			},
			{
				name: 'briefcase-conveyor-belt',
				title: 'Briefcase Conveyor Belt',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 20v2m4-2v2m4-2v2m3-2H3m3 0v2m2-6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v12"/><rect width="16" height="10" x="4" y="6" rx="2"/></svg>'
			},
			{
				name: 'briefcase-medical',
				title: 'Briefcase Medical',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 11v4m2-2h-4m6-7V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2m10 0v14M6 6v14"/><rect width="20" height="14" x="2" y="6" rx="2"/></svg>'
			},
			{
				name: 'briefcase-plus',
				title: 'Briefcase Plus',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><rect width="20" height="14" x="2" y="7" rx="2"/><path d="M15 14H9m3-3v6"/></svg>'
			},
			{
				name: 'briefcase',
				title: 'Briefcase',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/><rect width="20" height="14" x="2" y="6" rx="2"/></svg>'
			},
			{
				name: 'bring-to-front',
				title: 'Bring To Front',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="8" height="8" x="8" y="8" rx="2"/><path d="M4 10a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2m4 16a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2"/></svg>'
			},
			{
				name: 'broom',
				title: 'Broom',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m13 11 9-9m-7.4 10.6c.8.8.9 2.1.2 3L10 22l-8-8 6.4-4.8c.9-.7 2.2-.6 3 .2Zm-7.8-2.2 6.8 6.8M5 17l1.4-1.4"/></svg>'
			},
			{
				name: 'brush-cleaning',
				title: 'Brush Cleaning',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m16 22-1-4m4-4.01a1 1 0 0 0 1-1V12a2 2 0 0 0-2-2h-3a1 1 0 0 1-1-1V4a2 2 0 0 0-4 0v5a1 1 0 0 1-1 1H6a2 2 0 0 0-2 2v.99a1 1 0 0 0 1 1M5 14h14l1.973 6.767A1 1 0 0 1 20 22H4a1 1 0 0 1-.973-1.233zm3 8 1-4"/></svg>'
			},
			{
				name: 'brush',
				title: 'Brush',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m11 10 3 3m-7.5 8A3.5 3.5 0 1 0 3 17.5a2.62 2.62 0 0 1-.708 1.792A1 1 0 0 0 3 21z"/><path d="M9.969 17.031 21.378 5.624a1 1 0 0 0-3.002-3.002L6.967 14.031"/></svg>'
			},
			{
				name: 'bubbles',
				title: 'Bubbles',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M7.2 14.8a2 2 0 0 1 2 2"/><circle cx="18.5" cy="8.5" r="3.5"/><circle cx="7.5" cy="16.5" r="5.5"/><circle cx="7.5" cy="4.5" r="2.5"/></svg>'
			},
			{
				name: 'bucket',
				title: 'Bucket',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M6 7c0-2.8 2.2-5 5-5h2c2.8 0 5 2.2 5 5M5 11h14m-1 0-.8 9c-.1 1.1-1.1 2-2.2 2H9c-1.1 0-2.1-.9-2.2-2L6 11"/></svg>'
			},
			{
				name: 'bug-off',
				title: 'Bug Off',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 20v-8m2.12-8.12L16 2m-1 5.13V6a3 3 0 0 0-5.14-2.1L8 2"/><path d="M18 12.34V11a4 4 0 0 0-4-4h-1.3M2 2l20 20"/><path d="M21 5a4 4 0 0 1-3.55 3.97M22 13h-3.34M3 21a4 4 0 0 1 3.81-4M6 13H2"/><path d="M7.7 7.7A4 4 0 0 0 6 11v3a6 6 0 0 0 11.13 3.13"/></svg>'
			},
			{
				name: 'bug-play',
				title: 'Bug Play',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 19.655A6 6 0 0 1 6 14v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 3.97"/><path d="M14 15.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997a1 1 0 0 1-1.517-.86zm.12-11.123L16 2m5 3a4 4 0 0 1-3.55 3.97M3 21a4 4 0 0 1 3.81-4M3 5a4 4 0 0 0 3.55 3.97M6 13H2M8 2l1.88 1.88M9 7.13V6a3 3 0 1 1 6 0v1.13"/></svg>'
			},
			{
				name: 'bug',
				title: 'Bug',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 20v-9m2-4a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4zm.12-3.12L16 2"/><path d="M21 21a4 4 0 0 0-3.81-4M21 5a4 4 0 0 1-3.55 3.97M22 13h-4M3 21a4 4 0 0 1 3.81-4M3 5a4 4 0 0 0 3.55 3.97M6 13H2M8 2l1.88 1.88M9 7.13V6a3 3 0 1 1 6 0v1.13"/></svg>'
			},
			{
				name: 'building-2',
				title: 'Building 2',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 12h4m-4-4h4m0 13v-3a2 2 0 0 0-4 0v3"/><path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"/><path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"/></svg>'
			},
			{
				name: 'building',
				title: 'Building',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 10h.01M12 14h.01M12 6h.01M16 10h.01M16 14h.01M16 6h.01M8 10h.01M8 14h.01M8 6h.01M9 22v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"/><rect width="16" height="20" x="4" y="2" rx="2"/></svg>'
			},
			{
				name: 'bull-head',
				title: 'Bull Head',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M7 10a5 5 0 0 1-4-8 4 4 0 0 0 4 4h10a4 4 0 0 0 4-4 5 5 0 0 1-4 8"/><path d="M6.4 15c-.3-.6-.4-1.3-.4-2 0-4 3-3 3-7m1 6.5v1.6m7.6.9c.3-.6.4-1.3.4-2 0-4-3-3-3-7m-1 6.5v1.6"/><path d="M15 22a4 4 0 1 0-3-6.7A4 4 0 1 0 9 22Zm-6-4h.01M15 18h.01"/></svg>'
			},
			{
				name: 'burger',
				title: 'Burger',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M5 12a2 2 0 0 1-2-2 9 7 0 0 1 18 0 2 2 0 0 1-2 2l-3.5 4.1c-.8 1-2.4 1.1-3.4.3L7 12"/><path d="M11.7 16H4a2 2 0 0 1 0-4h16a2 2 0 0 1 0 4h-4.3M5 16a2 2 0 0 0-2 2c0 1.7 1.3 3 3 3h12c1.7 0 3-1.3 3-3a2 2 0 0 0-2-2"/></svg>'
			},
			{
				name: 'bus-front',
				title: 'Bus Front',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M4 6 2 7m8-1h4m8 1-2-1"/><rect width="16" height="16" x="4" y="3" rx="2"/><path d="M4 11h16M8 15h.01M16 15h.01M6 19v2m12 0v-2"/></svg>'
			},
			{
				name: 'bus',
				title: 'Bus',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M8 6v6m7-6v6M2 12h19.6M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2s-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3"/><circle cx="7" cy="18" r="2"/><path d="M9 18h5"/><circle cx="16" cy="18" r="2"/></svg>'
			},
			{
				name: 'butterfly',
				title: 'Butterfly',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M15.8 2C12 3.8 12 9 12 9s0-5.2-3.8-7M12 9v11"/><path d="M20 5c-3.5 0-6.5 3.9-8 6.3C10.5 8.9 7.5 5 4 5a2 2 0 0 0-2 2c0 2.3.6 4.4 1.5 5.6C4 13.5 4.9 14 6 14h2c-.9.4-2.1.9-2.6 1.5-1.6 1.6-.9 3.4.7 4.9 1.6 1.6 3.4 2.3 4.9.7.3-.3 1-1.1 1-1.1s.6.8 1 1.1c1.6 1.6 3.4.9 4.9-.7 1.6-1.6 2.3-3.4.7-4.9-.5-.5-1.7-1.1-2.6-1.5h2c1.1 0 2-.5 2.5-1.4.9-1.2 1.5-3.3 1.5-5.6a2 2 0 0 0-2-2"/></svg>'
			},
			{
				name: 'cabin',
				title: 'Cabin',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M2.6 10.4a2.12 2.12 0 1 0 3.02 2.98L12 7l6.4 6.4a2.12 2.12 0 1 0 2.979-3.021L13.7 2.7a2.4 2.4 0 0 0-3.404.004Z"/><path d="M14 22v-7a2 2 0 0 0-4 0v7"/><path d="M14 14h6v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-6h6m-6 4h6m4 0h6"/></svg>'
			},
			{
				name: 'cabinet-filing',
				title: 'Cabinet Filing',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M4 12h16"/><rect width="16" height="20" x="4" y="2" rx="2"/><path d="M10 6h4m-4 10h4"/></svg>'
			},
			{
				name: 'cable-car',
				title: 'Cable Car',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 3h.01M14 2h.01M2 9l20-5m-10 8V6.5"/><rect width="16" height="10" x="4" y="12" rx="3"/><path d="M9 12v5m6-5v5M4 17h16"/></svg>'
			},
			{
				name: 'cable',
				title: 'Cable',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M17 19a1 1 0 0 1-1-1v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a1 1 0 0 1-1 1zm0 2v-2"/><path d="M19 14V6.5a1 1 0 0 0-7 0v11a1 1 0 0 1-7 0V10m16 11v-2M3 5V3"/><path d="M4 10a2 2 0 0 1-2-2V6a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2a2 2 0 0 1-2 2zm3-5V3"/></svg>'
			},
			{
				name: 'cactus',
				title: 'Cactus',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M5 8v6a2 2 0 0 0 2 2h2m6-2h2a2 2 0 0 0 2-2V6M9 22V5a3 3 0 1 1 6 0v17m-8 0h10"/></svg>'
			},
			{
				name: 'cake-slice',
				title: 'Cake Slice',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M16 13H3m13 4H3m4.2-9.1-3.388 2.5A2 2 0 0 0 3 12.01V20a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-8.654c0-2-2.44-6.026-6.44-8.026a1 1 0 0 0-1.082.057L10.4 5.6"/><circle cx="9" cy="7" r="2"/></svg>'
			},
			{
				name: 'cake',
				title: 'Cake',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8"/><path d="M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1M2 21h20M7 8v3m5-3v3m5-3v3M7 4h.01M12 4h.01M17 4h.01"/></svg>'
			},
			{
				name: 'calculator',
				title: 'Calculator',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="16" height="20" x="4" y="2" rx="2"/><path d="M8 6h8m0 8v4m0-8h.01M12 10h.01M8 10h.01M12 14h.01M8 14h.01M12 18h.01M8 18h.01"/></svg>'
			},
			{
				name: 'calendar-1',
				title: 'Calendar 1',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M11 14h1v4m4-16v4M3 10h18M8 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/></svg>'
			},
			{
				name: 'calendar-arrow-down',
				title: 'Calendar Arrow Down',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m14 18 4 4 4-4M16 2v4m2 8v8"/><path d="M21 11.354V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7.343M3 10h18M8 2v4"/></svg>'
			},
			{
				name: 'calendar-arrow-up',
				title: 'Calendar Arrow Up',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m14 18 4-4 4 4M16 2v4m2 16v-8"/><path d="M21 11.343V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h9M3 10h18M8 2v4"/></svg>'
			},
			{
				name: 'calendar-check-2',
				title: 'Calendar Check 2',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M8 2v4m8-4v4m5 8V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8M3 10h18m-5 10 2 2 4-4"/></svg>'
			},
			{
				name: 'calendar-check',
				title: 'Calendar Check',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M8 2v4m8-4v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18M9 16l2 2 4-4"/></svg>'
			},
			{
				name: 'calendar-clock',
				title: 'Calendar Clock',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M16 14v2.2l1.6 1M16 2v4m5 1.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5M3 10h5m0-8v4"/><circle cx="16" cy="16" r="6"/></svg>'
			},
			{
				name: 'calendar-cog',
				title: 'Calendar Cog',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m15.228 16.852-.923-.383m.923 2.679-.923.383M16 2v4m.47 8.305.382.923m0 5.544-.383.924m2.679-6.468.383-.923m-.001 7.391-.382-.924m1.624-3.92.924-.383m-.924 2.679.924.383M21 10.592V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6M3 10h18M8 2v4"/><circle cx="18" cy="18" r="3"/></svg>'
			},
			{
				name: 'calendar-days',
				title: 'Calendar Days',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M8 2v4m8-4v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01"/></svg>'
			},
			{
				name: 'calendar-fold',
				title: 'Calendar Fold',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M8 2v4m8-4v4m5 11V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11ZM3 10h18"/><path d="M15 22v-4a2 2 0 0 1 2-2h4"/></svg>'
			},
			{
				name: 'calendar-heart',
				title: 'Calendar Heart',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12.127 22H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5.125"/><path d="M14.62 18.8A2.25 2.25 0 1 1 18 15.836a2.25 2.25 0 1 1 3.38 2.966l-2.626 2.856a.998.998 0 0 1-1.507 0zM16 2v4M3 10h18M8 2v4"/></svg>'
			},
			{
				name: 'calendar-minus-2',
				title: 'Calendar Minus 2',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M8 2v4m8-4v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18m-11 6h4"/></svg>'
			},
			{
				name: 'calendar-minus',
				title: 'Calendar Minus',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M16 19h6M16 2v4m5 9V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8.5M3 10h18M8 2v4"/></svg>'
			},
			{
				name: 'calendar-off',
				title: 'Calendar Off',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M4.2 4.2A2 2 0 0 0 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 1.82-1.18M21 15.5V6a2 2 0 0 0-2-2H9.5M16 2v4M3 10h7m11 0h-5.5M2 2l20 20"/></svg>'
			},
			{
				name: 'calendar-plus-2',
				title: 'Calendar Plus 2',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M8 2v4m8-4v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18m-11 6h4m-2-2v4"/></svg>'
			},
			{
				name: 'calendar-plus',
				title: 'Calendar Plus',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M16 19h6M16 2v4m3 10v6m2-9.402V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8.5M3 10h18M8 2v4"/></svg>'
			},
			{
				name: 'calendar-range',
				title: 'Calendar Range',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M16 2v4M3 10h18M8 2v4m9 8h-6m2 4H7m0-4h.01M17 18h.01"/></svg>'
			},
			{
				name: 'calendar-search',
				title: 'Calendar Search',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M16 2v4m5 5.75V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7.25M22 22l-1.875-1.875M3 10h18M8 2v4"/><circle cx="18" cy="18" r="3"/></svg>'
			},
			{
				name: 'calendar-sync',
				title: 'Calendar Sync',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M11 10v4h4"/><path d="m11 14 1.535-1.605a5 5 0 0 1 8 1.5M16 2v4m5 12-1.535 1.605a5 5 0 0 1-8-1.5"/><path d="M21 22v-4h-4m4-9.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h4.3M3 10h4m1-8v4"/></svg>'
			},
			{
				name: 'calendar-x-2',
				title: 'Calendar X 2',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M8 2v4m8-4v4m5 7V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8M3 10h18m-4 12 5-5m-5 0 5 5"/></svg>'
			},
			{
				name: 'calendar-x',
				title: 'Calendar X',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M8 2v4m8-4v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18m-7 4-4 4m0-4 4 4"/></svg>'
			},
			{
				name: 'calendar',
				title: 'Calendar',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M8 2v4m8-4v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/></svg>'
			},
			{
				name: 'camera-off',
				title: 'Camera Off',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M14.564 14.558a3 3 0 1 1-4.122-4.121M2 2l20 20"/><path d="M20 20H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 .819-.175m2.879-2.801A2 2 0 0 1 10.004 4h3.993a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v7.344"/></svg>'
			},
			{
				name: 'camera',
				title: 'Camera',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"/><circle cx="12" cy="13" r="3"/></svg>'
			},
			{
				name: 'candle-holder-lit',
				title: 'Candle Holder Lit',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 2S8 3.9 8 5s.9 2 2 2 2-.9 2-2-2-3-2-3m-2 9h4v7H8zm5 2-1-2"/><path d="M18 18a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4h18a2 2 0 1 0-2-2Z"/></svg>'
			},
			{
				name: 'candle-holder',
				title: 'Candle Holder',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M8 11h4v7H8z"/><path d="M18 18a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4h18a2 2 0 1 0-2-2Zm-8-9v2"/></svg>'
			},
			{
				name: 'candle-tealight-lit',
				title: 'Candle Tealight Lit',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 2s-2 1.9-2 3 .9 2 2 2 2-.9 2-2-2-3-2-3m0 10V7"/><ellipse cx="12" cy="13" rx="10" ry="3"/><path d="M2 13v6c0 1.7 4.5 3 10 3s10-1.3 10-3v-6M8 16v1m4-1v2"/></svg>'
			},
			{
				name: 'candle-tealight',
				title: 'Candle Tealight',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 12V7"/><ellipse cx="12" cy="13" rx="10" ry="3"/><path d="M2 13v6c0 1.7 4.5 3 10 3s10-1.3 10-3v-6"/></svg>'
			},
			{
				name: 'candlestick-big-lit',
				title: 'Candlestick Big Lit',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 2S9 5.3 9 7s1.3 3 3 3 3-1.3 3-3-3-5-3-5m4 20H8v-7c0-.6.4-1 1-1h6c.6 0 1 .4 1 1Zm-4-8v3"/><path d="M17 17s-.7-1.4-1.1-2.4"/></svg>'
			},
			{
				name: 'candlestick-big',
				title: 'Candlestick Big',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M16 22H8v-7c0-.6.4-1 1-1h6c.6 0 1 .4 1 1Zm-4-11v3"/></svg>'
			},
			{
				name: 'candlestick-lit',
				title: 'Candlestick Lit',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 2s-2 1.9-2 3 .9 2 2 2 2-.9 2-2-2-3-2-3m-2 9h4v11h-4zm5 2-1-2"/></svg>'
			},
			{
				name: 'candlestick',
				title: 'Candlestick',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 11h4v11h-4zm2-3v3"/></svg>'
			},
			{
				name: 'candy-cane',
				title: 'Candy Cane',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M5.7 21a2 2 0 0 1-3.5-2l8.6-14a6 6 0 0 1 10.4 6 2 2 0 1 1-3.464-2 2 2 0 1 0-3.464-2ZM17.75 7 15 2.1m-4.1 2.7L13 9m-5.1.7 2 4.4m-5 .6L7 18.9"/></svg>'
			},
			{
				name: 'candy-off',
				title: 'Candy Off',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 10v7.9m1.802-11.755a5 5 0 0 1 6.053 6.053M14 6.1v2.243m1.5 7.228-.964.964a5 5 0 0 1-7.071 0 5 5 0 0 1 0-7.07l.964-.965"/><path d="M16 7V3a1 1 0 0 1 1.707-.707 2.5 2.5 0 0 0 2.152.717 1 1 0 0 1 1.131 1.131 2.5 2.5 0 0 0 .717 2.152A1 1 0 0 1 21 8h-4M2 2l20 20M8 17v4a1 1 0 0 1-1.707.707 2.5 2.5 0 0 0-2.152-.717 1 1 0 0 1-1.131-1.131 2.5 2.5 0 0 0-.717-2.152A1 1 0 0 1 3 16h4"/></svg>'
			},
			{
				name: 'candy',
				title: 'Candy',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 7v10.9m4-11.8V17m2-10V3a1 1 0 0 1 1.707-.707 2.5 2.5 0 0 0 2.152.717 1 1 0 0 1 1.131 1.131 2.5 2.5 0 0 0 .717 2.152A1 1 0 0 1 21 8h-4"/><path d="M16.536 7.465a5 5 0 0 0-7.072 0l-2 2a5 5 0 0 0 0 7.07 5 5 0 0 0 7.072 0l2-2a5 5 0 0 0 0-7.07"/><path d="M8 17v4a1 1 0 0 1-1.707.707 2.5 2.5 0 0 0-2.152-.717 1 1 0 0 1-1.131-1.131 2.5 2.5 0 0 0-.717-2.152A1 1 0 0 1 3 16h4"/></svg>'
			},
			{
				name: 'cannabis',
				title: 'Cannabis',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 22v-4m-5-6c-1.5 0-4.5 1.5-5 3 3.5 1.5 6 1 6 1-1.5 1.5-2 3.5-2 5 2.5 0 4.5-1.5 6-3 1.5 1.5 3.5 3 6 3 0-1.5-.5-3.5-2-5 0 0 2.5.5 6-1-.5-1.5-3.5-3-5-3 1.5-1 4-4 4-6-2.5 0-5.5 1.5-7 3 0-2.5-.5-5-2-7-1.5 2-2 4.5-2 7-1.5-1.5-4.5-3-7-3 0 2 2.5 5 4 6"/></svg>'
			},
			{
				name: 'captions-off',
				title: 'Captions Off',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10.5 5H19a2 2 0 0 1 2 2v8.5M17 11h-.5m2.5 8H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2M2 2l20 20M7 11h4m-4 4h2.5"/></svg>'
			},
			{
				name: 'captions',
				title: 'Captions',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="18" height="14" x="3" y="5" rx="2" ry="2"/><path d="M7 15h4m4 0h2M7 11h2m4 0h4"/></svg>'
			},
			{
				name: 'car-front',
				title: 'Car Front',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8m4 6h.01M17 14h.01"/><rect width="18" height="8" x="3" y="10" rx="2"/><path d="M5 18v2m14-2v2"/></svg>'
			},
			{
				name: 'car-taxi-front',
				title: 'Car Taxi Front',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 2h4m7 6-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8m4 6h.01M17 14h.01"/><rect width="18" height="8" x="3" y="10" rx="2"/><path d="M5 18v2m14-2v2"/></svg>'
			},
			{
				name: 'car',
				title: 'Car',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/></svg>'
			},
			{
				name: 'caravan',
				title: 'Caravan',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M18 19V9a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v8a2 2 0 0 0 2 2h2"/><path d="M2 9h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2m20 4v1a1 1 0 0 1-1 1H10v-9a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v9"/><circle cx="8" cy="19" r="2"/></svg>'
			},
			{
				name: 'card-credit',
				title: 'Card Credit',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="20" height="14" x="2" y="5" rx="2"/><path d="M2 10h20"/></svg>'
			},
			{
				name: 'card-sd',
				title: 'Card Sd',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M6 22a2 2 0 0 1-2-2V6l4-4h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2Zm2-12V7.5M12 6v4m4-4v4"/></svg>'
			},
			{
				name: 'card-sim',
				title: 'Card Sim',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9l5 5v13a2 2 0 0 1-2 2Z"/><rect width="8" height="8" x="8" y="10" rx="2"/><path d="M8 14h8m-4 0v4"/></svg>'
			},
			{
				name: 'carrot',
				title: 'Carrot',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 0 0-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7M8.64 14l-2.05-2.04M15.34 15l-2.46-2.46"/><path d="M22 9s-1.33-2-3.5-2C16.86 7 15 9 15 9s1.33 2 3.5 2S22 9 22 9"/><path d="M15 2s-2 1.33-2 3.5S15 9 15 9s2-1.84 2-3.5C17 3.33 15 2 15 2"/></svg>'
			},
			{
				name: 'carton-off',
				title: 'Carton Off',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M14.1 8.5 16 6V3c0-.6-.4-1-1-1H9"/><path d="M11.7 6H16l3 4v3.3M2 2l20 20m-3-3v1a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V10l2.1-2.9M13 13v9"/></svg>'
			},
			{
				name: 'carton',
				title: 'Carton',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M16 6V3c0-.6-.4-1-1-1H9c-.6 0-1 .4-1 1v3l-3 4v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V10Z"/><path d="M13 22V10l3-4H8m-3 4h8"/></svg>'
			},
			{
				name: 'case-camel',
				title: 'Case Camel',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="7" cy="13" r="3"/><path d="M10 10v6m4-4h4.5a2 2 0 0 1 0 4H14V8h4a2 2 0 0 1 0 4"/></svg>'
			},
			{
				name: 'case-kebab',
				title: 'Case Kebab',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="4.5" cy="13.5" r="2.5"/><path d="M7 11v5m4-3h2"/><circle cx="19.5" cy="13.5" r="2.5"/><path d="M17 9v7"/></svg>'
			},
			{
				name: 'case-lower',
				title: 'Case Lower',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 9v7m4-10v10"/><circle cx="17.5" cy="12.5" r="3.5"/><circle cx="6.5" cy="12.5" r="3.5"/></svg>'
			},
			{
				name: 'case-sensitive',
				title: 'Case Sensitive',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m2 16 4.039-9.69a.5.5 0 0 1 .923 0L11 16m11-7v7M3.304 13h6.392"/><circle cx="18.5" cy="12.5" r="3.5"/></svg>'
			},
			{
				name: 'case-snake-upper',
				title: 'Case Snake Upper',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M2 16v-5.5a2.5 2.5 0 0 1 5 0V16m0-3H2m9 3h2m4-4h3a2 2 0 1 1 0 4h-3V8h2.5a2 2 0 0 1 .1 4"/></svg>'
			},
			{
				name: 'case-snake',
				title: 'Case Snake',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M7 11v5"/><circle cx="4.5" cy="13.5" r="2.5"/><path d="M11 16h2"/><circle cx="19.5" cy="13.5" r="2.5"/><path d="M17 9v7"/></svg>'
			},
			{
				name: 'case-upper',
				title: 'Case Upper',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M15 11h4.5a1 1 0 0 1 0 5h-4a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h3a1 1 0 0 1 0 5M2 16l4.039-9.69a.5.5 0 0 1 .923 0L11 16m-7.696-3h6.392"/></svg>'
			},
			{
				name: 'cassette-tape',
				title: 'Cassette Tape',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="20" height="16" x="2" y="4" rx="2"/><circle cx="8" cy="10" r="2"/><path d="M8 12h8"/><circle cx="16" cy="10" r="2"/><path d="m6 20 .7-2.9A1.4 1.4 0 0 1 8.1 16h7.8a1.4 1.4 0 0 1 1.4 1l.7 3"/></svg>'
			},
			{
				name: 'cast',
				title: 'Cast',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6M2 12a9 9 0 0 1 8 8m-8-4a5 5 0 0 1 4 4m-4 0h.01"/></svg>'
			},
			{
				name: 'castle',
				title: 'Castle',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 5V3m4 2V3m1 18v-3a3 3 0 0 0-6 0v3m9-18v8m0-6H6m16 6H2"/><path d="M22 9v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9m4-6v8"/></svg>'
			},
			{
				name: 'cat-big',
				title: 'Cat Big',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m6 7 .5.5M18 7l-.5.5M5 13a5 5 0 1 0 6.8 7.2l3-3.6A1 1 0 0 0 14 15h-4a1 1 0 0 0-.8 1.6l3 3.6A5 5 0 1 0 19 13h3c0-1.2-.4-2.4-1-3.4a3 3 0 0 0-5.8-5.3l-1 1a7 4 0 0 0-4.4 0l-1-1A3 3 0 0 0 3 9.6c-.6 1-1 2.2-1 3.4Zm5-2v-.5m4 .5v-.5M5 18H2m17 0h3"/></svg>'
			},
			{
				name: 'cat',
				title: 'Cat',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 5c.67 0 1.35.09 2 .26 1.78-2 5.03-2.84 6.42-2.26 1.4.58-.42 7-.42 7 .57 1.07 1 2.24 1 3.44C21 17.9 16.97 21 12 21s-9-3-9-7.56c0-1.25.5-2.4 1-3.44 0 0-1.89-6.42-.5-7s4.72.23 6.5 2.23A9 9 0 0 1 12 5m-4 9v.5m8-.5v.5"/><path d="M11.25 16.25h1.5L12 17z"/></svg>'
			},
			{
				name: 'cauldron',
				title: 'Cauldron',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="8" cy="3.5" r=".5"/><circle cx="14" cy="6" r="2"/><path d="M19 2h.01M22 8H2m5 4V8m4 2V8M4.4 8C2.9 9.5 2 11.4 2 13.5 2 18.2 6.5 22 12 22s10-3.8 10-8.5c0-2.1-.9-4-2.4-5.5M5 20l-1 2m15-2 1 2"/></svg>'
			},
			{
				name: 'cctv',
				title: 'Cctv',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M16.75 12h3.632a1 1 0 0 1 .894 1.447l-2.034 4.069a1 1 0 0 1-1.708.134l-2.124-2.97m1.696-5.627a1 1 0 0 1 .447 1.341l-3.106 6.211a1 1 0 0 1-1.342.447L3.61 12.3a2.92 2.92 0 0 1-1.3-3.91L3.69 5.6a2.92 2.92 0 0 1 3.92-1.3zM2 19h3.76a2 2 0 0 0 1.8-1.1L9 15m-7 6v-4m5-8h.01"/></svg>'
			},
			{
				name: 'cent-circle',
				title: 'Cent Circle',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 6v12m4-9a5 5 0 1 0 0 6"/></svg>'
			},
			{
				name: 'cent-square',
				title: 'Cent Square',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M12 7v10m3.4-7a4 4 0 1 0 0 4"/></svg>'
			},
			{
				name: 'cent',
				title: 'Cent',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M19 8a8 8 0 1 0 0 8M12 2v20"/></svg>'
			},
			{
				name: 'chairs-table-parasol',
				title: 'Chairs Table Parasol',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 8v13m9-13H3l9-6ZM7 13h10m-9 8v-3a1 1 0 0 0-1-1H3m0-5v9m13 0v-3c0-.5.5-1 1-1h4m0-5v9"/></svg>'
			},
			{
				name: 'chairs-table-platter',
				title: 'Chairs Table Platter',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 6V5m-4 5a4 4 0 0 1 8 0M6 10h12m-6 0v9m-4 0v-4c0-.6-.4-1-1-1H2m0-6v11m14 0v-4a1 1 0 0 1 1-1h5m0-6v11"/></svg>'
			},
			{
				name: 'chameleon',
				title: 'Chameleon',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M11 22c-5 0-9-4.5-9-10S6 2 11 2c2.2 0 4.2.9 5.7 2.3L19.3 2c3.1 3.1 3.5 7.9 1.3 11.4-.6.9-1.9.9-2.7.1l-1.2-1.2C15.2 10.9 13.2 10 11 10a6 6 0 0 0 0 12 4 4 0 0 0 0-8 2 2 0 0 0 0 4m3-11h.01"/><circle cx="14.5" cy="7" r="3.5"/><path d="M8 10.8 6 10l1-2m15 14a2 2 0 0 1-2-2v-6.1"/></svg>'
			},
			{
				name: 'chart-area',
				title: 'Chart Area',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M7 11.207a.5.5 0 0 1 .146-.353l2-2a.5.5 0 0 1 .708 0l3.292 3.292a.5.5 0 0 0 .708 0l4.292-4.292a.5.5 0 0 1 .854.353V16a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1z"/></svg>'
			},
			{
				name: 'chart-bar-big',
				title: 'Chart Bar Big',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M3 3v16a2 2 0 0 0 2 2h16"/><rect width="9" height="4" x="7" y="13" rx="1"/><rect width="12" height="4" x="7" y="5" rx="1"/></svg>'
			},
			{
				name: 'chart-bar-decreasing',
				title: 'Chart Bar Decreasing',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M3 3v16a2 2 0 0 0 2 2h16M7 11h8m-8 5h3M7 6h12"/></svg>'
			},
			{
				name: 'chart-bar-increasing',
				title: 'Chart Bar Increasing',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M3 3v16a2 2 0 0 0 2 2h16M7 11h8m-8 5h12M7 6h3"/></svg>'
			},
			{
				name: 'chart-bar-stacked',
				title: 'Chart Bar Stacked',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M11 13v4m4-12v4M3 3v16a2 2 0 0 0 2 2h16"/><rect width="9" height="4" x="7" y="13" rx="1"/><rect width="12" height="4" x="7" y="5" rx="1"/></svg>'
			},
			{
				name: 'chart-bar',
				title: 'Chart Bar',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M3 3v16a2 2 0 0 0 2 2h16M7 16h8m-8-5h12M7 6h3"/></svg>'
			},
			{
				name: 'chart-candlestick',
				title: 'Chart Candlestick',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M9 5v4"/><rect width="4" height="6" x="7" y="9" rx="1"/><path d="M9 15v2m8-14v2"/><rect width="4" height="8" x="15" y="5" rx="1"/><path d="M17 13v3M3 3v16a2 2 0 0 0 2 2h16"/></svg>'
			},
			{
				name: 'chart-column-big',
				title: 'Chart Column Big',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M3 3v16a2 2 0 0 0 2 2h16"/><rect width="4" height="12" x="15" y="5" rx="1"/><rect width="4" height="9" x="7" y="8" rx="1"/></svg>'
			},
			{
				name: 'chart-column-decreasing',
				title: 'Chart Column Decreasing',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M13 17V9m5 8v-3M3 3v16a2 2 0 0 0 2 2h16M8 17V5"/></svg>'
			},
			{
				name: 'chart-column-increasing',
				title: 'Chart Column Increasing',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M13 17V9m5 8V5M3 3v16a2 2 0 0 0 2 2h16M8 17v-3"/></svg>'
			},
			{
				name: 'chart-column-stacked',
				title: 'Chart Column Stacked',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M11 13H7m12-4h-4M3 3v16a2 2 0 0 0 2 2h16"/><rect width="4" height="12" x="15" y="5" rx="1"/><rect width="4" height="9" x="7" y="8" rx="1"/></svg>'
			},
			{
				name: 'chart-column',
				title: 'Chart Column',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M3 3v16a2 2 0 0 0 2 2h16m-3-4V9m-5 8V5M8 17v-3"/></svg>'
			},
			{
				name: 'chart-gantt',
				title: 'Chart Gantt',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 6h8m-6 10h6M3 3v16a2 2 0 0 0 2 2h16M8 11h7"/></svg>'
			},
			{
				name: 'chart-line',
				title: 'Chart Line',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="m19 9-5 5-4-4-3 3"/></svg>'
			},
			{
				name: 'chart-network',
				title: 'Chart Network',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m13.11 7.664 1.78 2.672m-.728 2.452-3.324 1.424M20 4l-6.06 1.515M3 3v16a2 2 0 0 0 2 2h16"/><circle cx="12" cy="6" r="2"/><circle cx="16" cy="12" r="2"/><circle cx="9" cy="15" r="2"/></svg>'
			},
			{
				name: 'chart-no-axes-column-decreasing',
				title: 'Chart No Axes Column Decreasing',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M5 21V3m7 18V9m7 12v-6"/></svg>'
			},
			{
				name: 'chart-no-axes-column-increasing',
				title: 'Chart No Axes Column Increasing',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M5 21v-6m7 6V9m7 12V3"/></svg>'
			},
			{
				name: 'chart-no-axes-column',
				title: 'Chart No Axes Column',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M5 21v-6m7 6V3m7 18V9"/></svg>'
			},
			{
				name: 'chart-no-axes-combined',
				title: 'Chart No Axes Combined',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 16v5m4-7v7m4-11v11m2-18-8.646 8.646a.5.5 0 0 1-.708 0L9.354 8.354a.5.5 0 0 0-.707 0L2 15m2 3v3m4-7v7"/></svg>'
			},
			{
				name: 'chart-no-axes-gantt',
				title: 'Chart No Axes Gantt',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M6 5h12M4 12h10m-2 7h8"/></svg>'
			},
			{
				name: 'chart-pie',
				title: 'Chart Pie',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z"/><path d="M21.21 15.89A10 10 0 1 1 8 2.83"/></svg>'
			},
			{
				name: 'chart-scatter',
				title: 'Chart Scatter',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="7.5" cy="7.5" r=".5" fill="currentColor"/><circle cx="18.5" cy="5.5" r=".5" fill="currentColor"/><circle cx="11.5" cy="11.5" r=".5" fill="currentColor"/><circle cx="7.5" cy="16.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="14.5" r=".5" fill="currentColor"/><path d="M3 3v16a2 2 0 0 0 2 2h16"/></svg>'
			},
			{
				name: 'chart-spline',
				title: 'Chart Spline',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M7 16c.5-2 1.5-7 4-7 2 0 2 3 4 3 2.5 0 4.5-5 5-7"/></svg>'
			},
			{
				name: 'check-check',
				title: 'Check Check',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M18 6 7 17l-5-5m20-2-7.5 7.5L13 16"/></svg>'
			},
			{
				name: 'check-line',
				title: 'Check Line',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M20 4 9 15m12 4H3m6-4-5-5"/></svg>'
			},
			{
				name: 'check',
				title: 'Check',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M20 6 9 17l-5-5"/></svg>'
			},
			{
				name: 'cheese',
				title: 'Cheese',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M21 19v-7c-1-6-7-9-7-9l-2.1 1.5a2 2 0 0 1-3 2.2L3 11v9c0 .6.4 1 1 1h3a2 2 0 0 1 4 0h8M9 12H3"/><path d="M9 12c0-.8 1.3-1.5 3-1.5s3 .7 3 1.5a3 3 0 1 1-6 0m12 0h-6"/><circle cx="19" cy="19" r="2"/></svg>'
			},
			{
				name: 'chef-hat',
				title: 'Chef Hat',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1ZM6 17h12"/></svg>'
			},
			{
				name: 'cherry',
				title: 'Cherry',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M2 17a5 5 0 0 0 10 0c0-2.76-2.5-5-5-3-2.5-2-5 .24-5 3m10 0a5 5 0 0 0 10 0c0-2.76-2.5-5-5-3-2.5-2-5 .24-5 3"/><path d="M7 14c3.22-2.91 4.29-8.75 5-12 1.66 2.38 4.94 9 5 12"/><path d="M22 9c-4.29 0-7.14-2.33-10-7 5.71 0 10 4.67 10 7"/></svg>'
			},
			{
				name: 'chest',
				title: 'Chest',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M8 19a2 2 0 0 0 2-2V9a4 4 0 0 0-8 0v8a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a4 4 0 0 0-4-4H6m-4 6h20m-6 0v3"/></svg>'
			},
			{
				name: 'chevron-down',
				title: 'Chevron Down',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6"/></svg>'
			},
			{
				name: 'chevron-first',
				title: 'Chevron First',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m17 18-6-6 6-6M7 6v12"/></svg>'
			},
			{
				name: 'chevron-last',
				title: 'Chevron Last',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m7 18 6-6-6-6m10 0v12"/></svg>'
			},
			{
				name: 'chevron-left',
				title: 'Chevron Left',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m15 18-6-6 6-6"/></svg>'
			},
			{
				name: 'chevron-right',
				title: 'Chevron Right',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m9 18 6-6-6-6"/></svg>'
			},
			{
				name: 'chevron-up',
				title: 'Chevron Up',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m18 15-6-6-6 6"/></svg>'
			},
			{
				name: 'chevrons-down-up',
				title: 'Chevrons Down Up',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m7 20 5-5 5 5M7 4l5 5 5-5"/></svg>'
			},
			{
				name: 'chevrons-down',
				title: 'Chevrons Down',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m7 6 5 5 5-5M7 13l5 5 5-5"/></svg>'
			},
			{
				name: 'chevrons-left-right-ellipsis',
				title: 'Chevrons Left Right Ellipsis',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 12h.01M16 12h.01M17 7l5 5-5 5M7 7l-5 5 5 5m1-5h.01"/></svg>'
			},
			{
				name: 'chevrons-left-right-square',
				title: 'Chevrons Left Right Square',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="m10 15-3-3 3-3m4 0 3 3-3 3"/></svg>'
			},
			{
				name: 'chevrons-left-right',
				title: 'Chevrons Left Right',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m9 7-5 5 5 5m6-10 5 5-5 5"/></svg>'
			},
			{
				name: 'chevrons-left',
				title: 'Chevrons Left',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m11 17-5-5 5-5m7 10-5-5 5-5"/></svg>'
			},
			{
				name: 'chevrons-right-left',
				title: 'Chevrons Right Left',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m20 17-5-5 5-5M4 17l5-5-5-5"/></svg>'
			},
			{
				name: 'chevrons-right',
				title: 'Chevrons Right',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m6 17 5-5-5-5m7 10 5-5-5-5"/></svg>'
			},
			{
				name: 'chevrons-up-down-square',
				title: 'Chevrons Up Down Square',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="m9 10 3-3 3 3m0 4-3 3-3-3"/></svg>'
			},
			{
				name: 'chevrons-up-down',
				title: 'Chevrons Up Down',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m7 15 5 5 5-5M7 9l5-5 5 5"/></svg>'
			},
			{
				name: 'chevrons-up',
				title: 'Chevrons Up',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m17 11-5-5-5 5m10 7-5-5-5 5"/></svg>'
			},
			{
				name: 'chromium',
				title: 'Chromium',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10.88 21.94 15.46 14m5.71-6H12M3.95 6.06 8.54 14"/><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/></svg>'
			},
			{
				name: 'church',
				title: 'Church',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 9h4m-2-2v5m2 9v-3a2 2 0 0 0-4 0v3"/><path d="m18 9 3.52 2.147a1 1 0 0 1 .48.854V19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-6.999a1 1 0 0 1 .48-.854L6 9"/><path d="M6 21V7a1 1 0 0 1 .376-.782l5-3.999a1 1 0 0 1 1.249.001l5 4A1 1 0 0 1 18 7v14"/></svg>'
			},
			{
				name: 'cigarette-off',
				title: 'Cigarette Off',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 12H3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h13m2-8c0-2.5-2-2.5-2-5M2 2l20 20m-1-10a1 1 0 0 1 1 1v2a1 1 0 0 1-.5.866M22 8c0-2.5-2-2.5-2-5M7 12v4"/></svg>'
			},
			{
				name: 'cigarette',
				title: 'Cigarette',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M17 12H3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h14m1-8c0-2.5-2-2.5-2-5m5 13a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1m1-4c0-2.5-2-2.5-2-5M7 12v4"/></svg>'
			},
			{
				name: 'circle-alert',
				title: 'Circle Alert',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 8v4m0 4h.01"/></svg>'
			},
			{
				name: 'circle-arrow-down',
				title: 'Circle Arrow Down',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 8v8m-4-4 4 4 4-4"/></svg>'
			},
			{
				name: 'circle-arrow-left',
				title: 'Circle Arrow Left',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="m12 8-4 4 4 4m4-4H8"/></svg>'
			},
			{
				name: 'circle-arrow-out-down-left',
				title: 'Circle Arrow Out Down Left',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M2 12a10 10 0 1 1 10 10M2 22l10-10M8 22H2v-6"/></svg>'
			},
			{
				name: 'circle-arrow-out-down-right',
				title: 'Circle Arrow Out Down Right',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 22a10 10 0 1 1 10-10m0 10L12 12m10 4v6h-6"/></svg>'
			},
			{
				name: 'circle-arrow-out-up-left',
				title: 'Circle Arrow Out Up Left',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M2 8V2h6M2 2l10 10m0-10A10 10 0 1 1 2 12"/></svg>'
			},
			{
				name: 'circle-arrow-out-up-right',
				title: 'Circle Arrow Out Up Right',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M22 12A10 10 0 1 1 12 2m10 0L12 12m4-10h6v6"/></svg>'
			},
			{
				name: 'circle-arrow-right',
				title: 'Circle Arrow Right',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="m12 16 4-4-4-4m-4 4h8"/></svg>'
			},
			{
				name: 'circle-arrow-up',
				title: 'Circle Arrow Up',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="m16 12-4-4-4 4m4 4V8"/></svg>'
			},
			{
				name: 'circle-check-big',
				title: 'Circle Check Big',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M21.801 10A10 10 0 1 1 17 3.335"/><path d="m9 11 3 3L22 4"/></svg>'
			},
			{
				name: 'circle-check',
				title: 'Circle Check',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>'
			},
			{
				name: 'circle-chevron-down',
				title: 'Circle Chevron Down',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="m16 10-4 4-4-4"/></svg>'
			},
			{
				name: 'circle-chevron-left',
				title: 'Circle Chevron Left',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="m14 16-4-4 4-4"/></svg>'
			},
			{
				name: 'circle-chevron-right',
				title: 'Circle Chevron Right',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="m10 8 4 4-4 4"/></svg>'
			},
			{
				name: 'circle-chevron-up',
				title: 'Circle Chevron Up',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="m8 14 4-4 4 4"/></svg>'
			},
			{
				name: 'circle-dashed',
				title: 'Circle Dashed',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10.1 2.182a10 10 0 0 1 3.8 0m0 19.636a10 10 0 0 1-3.8 0m7.509-18.097a10 10 0 0 1 2.69 2.7M2.182 13.9a10 10 0 0 1 0-3.8m18.097 7.509a10 10 0 0 1-2.7 2.69M21.818 10.1a10 10 0 0 1 0 3.8M3.721 6.391a10 10 0 0 1 2.7-2.69m-.03 16.578a10 10 0 0 1-2.69-2.7"/></svg>'
			},
			{
				name: 'circle-divide',
				title: 'Circle Divide',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M8 12h8m-4-4"/><circle cx="12" cy="12" r="10"/></svg>'
			},
			{
				name: 'circle-dollar-sign',
				title: 'Circle Dollar Sign',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8m4 2V6"/></svg>'
			},
			{
				name: 'circle-dot-dashed',
				title: 'Circle Dot Dashed',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10.1 2.18a9.9 9.9 0 0 1 3.8 0m3.7 1.53a10 10 0 0 1 2.69 2.7m1.53 3.69a9.9 9.9 0 0 1 0 3.8m-1.53 3.7a10 10 0 0 1-2.7 2.69m-3.69 1.53a9.9 9.9 0 0 1-3.8 0m-3.7-1.53a10 10 0 0 1-2.69-2.7M2.18 13.9a9.9 9.9 0 0 1 0-3.8m1.53-3.7a10 10 0 0 1 2.7-2.69"/><circle cx="12" cy="12" r="1"/></svg>'
			},
			{
				name: 'circle-dot',
				title: 'Circle Dot',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="1"/></svg>'
			},
			{
				name: 'circle-ellipsis',
				title: 'Circle Ellipsis',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M17 12h.01M12 12h.01M7 12h.01"/></svg>'
			},
			{
				name: 'circle-equal',
				title: 'Circle Equal',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M7 10h10M7 14h10"/><circle cx="12" cy="12" r="10"/></svg>'
			},
			{
				name: 'circle-fading-arrow-up',
				title: 'Circle Fading Arrow Up',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 2a10 10 0 0 1 7.38 16.75M16 12l-4-4-4 4m4 4V8m-9.5.875a10 10 0 0 0-.5 3M2.83 16a10 10 0 0 0 2.43 3.4M4.636 5.235a10 10 0 0 1 .891-.857M8.644 21.42a10 10 0 0 0 7.631-.38"/></svg>'
			},
			{
				name: 'circle-fading-plus',
				title: 'Circle Fading Plus',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 2a10 10 0 0 1 7.38 16.75M12 8v8m4-4H8M2.5 8.875a10 10 0 0 0-.5 3M2.83 16a10 10 0 0 0 2.43 3.4M4.636 5.235a10 10 0 0 1 .891-.857M8.644 21.42a10 10 0 0 0 7.631-.38"/></svg>'
			},
			{
				name: 'circle-gauge',
				title: 'Circle Gauge',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M15.6 2.7a10 10 0 1 0 5.7 5.7"/><circle cx="12" cy="12" r="2"/><path d="M13.4 10.6 19 5"/></svg>'
			},
			{
				name: 'circle-minus',
				title: 'Circle Minus',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/></svg>'
			},
			{
				name: 'circle-off',
				title: 'Circle Off',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m2 2 20 20M8.35 2.69A10 10 0 0 1 21.3 15.65m-2.22 3.43A10 10 0 1 1 4.92 4.92"/></svg>'
			},
			{
				name: 'circle-parking-off',
				title: 'Circle Parking Off',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12.656 7H13a3 3 0 0 1 2.984 3.307M13 13H9m10.071 6.071A1 1 0 0 1 4.93 4.93M2 2l20 20"/><path d="M8.357 2.687a10 10 0 0 1 12.956 12.956M9 17V9"/></svg>'
			},
			{
				name: 'circle-parking',
				title: 'Circle Parking',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M9 17V7h4a3 3 0 0 1 0 6H9"/></svg>'
			},
			{
				name: 'circle-pause',
				title: 'Circle Pause',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M10 15V9m4 6V9"/></svg>'
			},
			{
				name: 'circle-percent',
				title: 'Circle Percent',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6m0-6h.01M15 15h.01"/></svg>'
			},
			{
				name: 'circle-play',
				title: 'Circle Play',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"/><circle cx="12" cy="12" r="10"/></svg>'
			},
			{
				name: 'circle-plus',
				title: 'Circle Plus',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M8 12h8m-4-4v8"/></svg>'
			},
			{
				name: 'circle-pound-sterling',
				title: 'Circle Pound Sterling',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 16V9.5a1 1 0 0 1 5 0M8 12h4m-4 4h7"/><circle cx="12" cy="12" r="10"/></svg>'
			},
			{
				name: 'circle-power',
				title: 'Circle Power',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 7v4M7.998 9.003a5 5 0 1 0 8-.005"/><circle cx="12" cy="12" r="10"/></svg>'
			},
			{
				name: 'circle-question-mark',
				title: 'Circle Question Mark',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3m.08 4h.01"/></svg>'
			},
			{
				name: 'circle-slash-2',
				title: 'Circle Slash 2',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M22 2 2 22"/><circle cx="12" cy="12" r="10"/></svg>'
			},
			{
				name: 'circle-slash',
				title: 'Circle Slash',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="m9 15 6-6"/></svg>'
			},
			{
				name: 'circle-small',
				title: 'Circle Small',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="6"/></svg>'
			},
			{
				name: 'circle-star',
				title: 'Circle Star',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M11.051 7.616a1 1 0 0 1 1.909.024l.737 1.452a1 1 0 0 0 .737.535l1.634.256a1 1 0 0 1 .588 1.806l-1.172 1.168a1 1 0 0 0-.282.866l.259 1.613a1 1 0 0 1-1.541 1.134l-1.465-.75a1 1 0 0 0-.912 0l-1.465.75a1 1 0 0 1-1.539-1.133l.258-1.613a1 1 0 0 0-.282-.867l-1.156-1.152a1 1 0 0 1 .572-1.822l1.633-.256a1 1 0 0 0 .737-.535z"/><circle cx="12" cy="12" r="10"/></svg>'
			},
			{
				name: 'circle-stop',
				title: 'Circle Stop',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><rect width="6" height="6" x="9" y="9" rx="1"/></svg>'
			},
			{
				name: 'circle-user-round',
				title: 'Circle User Round',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M18 20a6 6 0 0 0-12 0"/><circle cx="12" cy="10" r="4"/><circle cx="12" cy="12" r="10"/></svg>'
			},
			{
				name: 'circle-user',
				title: 'Circle User',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="10" r="3"/><path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"/></svg>'
			},
			{
				name: 'circle-x',
				title: 'Circle X',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6m0-6 6 6"/></svg>'
			},
			{
				name: 'circle',
				title: 'Circle',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>'
			},
			{
				name: 'circuit-board',
				title: 'Circuit Board',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M11 9h4a2 2 0 0 0 2-2V3"/><circle cx="9" cy="9" r="2"/><path d="M7 21v-4a2 2 0 0 1 2-2h4"/><circle cx="15" cy="15" r="2"/></svg>'
			},
			{
				name: 'citrus',
				title: 'Citrus',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M21.66 17.67a1.08 1.08 0 0 1-.04 1.6A12 12 0 0 1 4.73 2.38a1.1 1.1 0 0 1 1.61-.04z"/><path d="M19.65 15.66A8 8 0 0 1 8.35 4.34M14 10l-5.5 5.5"/><path d="M14 17.85V10H6.15"/></svg>'
			},
			{
				name: 'clapperboard',
				title: 'Clapperboard',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Zm-14-.7 3.1 3.9m3.1-5.8 3.1 4M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"/></svg>'
			},
			{
				name: 'clipboard-check',
				title: 'Clipboard Check',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="m9 14 2 2 4-4"/></svg>'
			},
			{
				name: 'clipboard-clock',
				title: 'Clipboard Clock',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M16 14v2.2l1.6 1M16 4h2a2 2 0 0 1 2 2v.832M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h2"/><circle cx="16" cy="16" r="6"/><rect width="8" height="4" x="8" y="2" rx="1"/></svg>'
			},
			{
				name: 'clipboard-copy',
				title: 'Clipboard Copy',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2M16 4h2a2 2 0 0 1 2 2v4m1 4H11"/><path d="m15 10-4 4 4 4"/></svg>'
			},
			{
				name: 'clipboard-list',
				title: 'Clipboard List',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2m4 7h4m-4 5h4m-8-5h.01M8 16h.01"/></svg>'
			},
			{
				name: 'clipboard-minus',
				title: 'Clipboard Minus',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2m1 10h6"/></svg>'
			},
			{
				name: 'clipboard-paste',
				title: 'Clipboard Paste',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M11 14h10M16 4h2a2 2 0 0 1 2 2v1.344M17 18l4-4-4-4"/><path d="M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 1.793-1.113"/><rect width="8" height="4" x="8" y="2" rx="1"/></svg>'
			},
			{
				name: 'clipboard-pen-line',
				title: 'Clipboard Pen Line',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="8" height="4" x="8" y="2" rx="1"/><path d="M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-.5M16 4h2a2 2 0 0 1 1.73 1M8 18h1"/><path d="M21.378 12.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"/></svg>'
			},
			{
				name: 'clipboard-pen',
				title: 'Clipboard Pen',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="8" height="4" x="8" y="2" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-5.5M4 13.5V6a2 2 0 0 1 2-2h2"/><path d="M13.378 15.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"/></svg>'
			},
			{
				name: 'clipboard-plus',
				title: 'Clipboard Plus',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2m1 10h6m-3 3v-6"/></svg>'
			},
			{
				name: 'clipboard-type',
				title: 'Clipboard Type',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M9 12v-1h6v1m-4 5h2m-1-6v6"/></svg>'
			},
			{
				name: 'clipboard-x',
				title: 'Clipboard X',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2m7 7-6 6m0-6 6 6"/></svg>'
			},
			{
				name: 'clipboard',
				title: 'Clipboard',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/></svg>'
			},
			{
				name: 'clock-1',
				title: 'Clock 1',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 6v6l2-4"/><circle cx="12" cy="12" r="10"/></svg>'
			},
			{
				name: 'clock-10',
				title: 'Clock 10',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 6v6l-4-2"/><circle cx="12" cy="12" r="10"/></svg>'
			},
			{
				name: 'clock-11',
				title: 'Clock 11',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 6v6l-2-4"/><circle cx="12" cy="12" r="10"/></svg>'
			},
			{
				name: 'clock-12',
				title: 'Clock 12',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 6v6"/><circle cx="12" cy="12" r="10"/></svg>'
			},
			{
				name: 'clock-2',
				title: 'Clock 2',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 6v6l4-2"/><circle cx="12" cy="12" r="10"/></svg>'
			},
			{
				name: 'clock-3',
				title: 'Clock 3',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 6v6h4"/><circle cx="12" cy="12" r="10"/></svg>'
			},
			{
				name: 'clock-4',
				title: 'Clock 4',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 6v6l4 2"/><circle cx="12" cy="12" r="10"/></svg>'
			},
			{
				name: 'clock-5',
				title: 'Clock 5',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 6v6l2 4"/><circle cx="12" cy="12" r="10"/></svg>'
			},
			{
				name: 'clock-6',
				title: 'Clock 6',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 6v10"/><circle cx="12" cy="12" r="10"/></svg>'
			},
			{
				name: 'clock-7',
				title: 'Clock 7',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 6v6l-2 4"/><circle cx="12" cy="12" r="10"/></svg>'
			},
			{
				name: 'clock-8',
				title: 'Clock 8',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 6v6l-4 2"/><circle cx="12" cy="12" r="10"/></svg>'
			},
			{
				name: 'clock-9',
				title: 'Clock 9',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 6v6H8"/><circle cx="12" cy="12" r="10"/></svg>'
			},
			{
				name: 'clock-alert',
				title: 'Clock Alert',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 6v6l4 2m4-2v5m0 4h.01"/><path d="M21.25 8.2A10 10 0 1 0 16 21.16"/></svg>'
			},
			{
				name: 'clock-arrow-down',
				title: 'Clock Arrow Down',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 6v6l2 1"/><path d="M12.337 21.994a10 10 0 1 1 9.588-8.767"/><path d="m14 18 4 4 4-4m-4-4v8"/></svg>'
			},
			{
				name: 'clock-arrow-up',
				title: 'Clock Arrow Up',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 6v6l1.56.78"/><path d="M13.227 21.925a10 10 0 1 1 8.767-9.588"/><path d="m14 18 4-4 4 4m-4 4v-8"/></svg>'
			},
			{
				name: 'clock-fading',
				title: 'Clock Fading',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 2a10 10 0 0 1 7.38 16.75M12 6v6l4 2M2.5 8.875a10 10 0 0 0-.5 3M2.83 16a10 10 0 0 0 2.43 3.4M4.636 5.235a10 10 0 0 1 .891-.857M8.644 21.42a10 10 0 0 0 7.631-.38"/></svg>'
			},
			{
				name: 'clock-plus',
				title: 'Clock Plus',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 6v6l3.644 1.822M16 19h6m-3-3v6"/><path d="M21.92 13.267a10 10 0 1 0-8.653 8.653"/></svg>'
			},
			{
				name: 'clock',
				title: 'Clock',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 6v6l4 2"/><circle cx="12" cy="12" r="10"/></svg>'
			},
			{
				name: 'closed-caption',
				title: 'Closed Caption',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 9.17a3 3 0 1 0 0 5.66m7-5.66a3 3 0 1 0 0 5.66"/><rect width="20" height="14" x="2" y="5" rx="2"/></svg>'
			},
			{
				name: 'cloth',
				title: 'Cloth',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M3 5a1.41 1.41 0 0 0 0 2l1 1a1.41 1.41 0 0 1 0 2l-1 1a1.41 1.41 0 0 0 0 2l1 1a1.41 1.41 0 0 1 0 2l-1 1a1.41 1.41 0 0 0 0 2l2 2a1.41 1.41 0 0 0 2 0l1-1a1.41 1.41 0 0 1 2 0l1 1a1.41 1.41 0 0 0 2 0l1-1a1.41 1.41 0 0 1 2 0l1 1a1.41 1.41 0 0 0 2 0l2-2a1.41 1.41 0 0 0 0-2l-1-1a1.41 1.41 0 0 1 0-2l1-1a1.41 1.41 0 0 0 0-2l-1-1a1.41 1.41 0 0 1 0-2l1-1a1.41 1.41 0 0 0 0-2l-2-2a1.41 1.41 0 0 0-2 0l-1 1a1.41 1.41 0 0 1-2 0l-1-1a1.41 1.41 0 0 0-2 0l-1 1a1.41 1.41 0 0 1-2 0L7 3a1.41 1.41 0 0 0-2 0Z"/></svg>'
			},
			{
				name: 'cloud-alert',
				title: 'Cloud Alert',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 12v4m0 4h.01M17 18h.5a1 1 0 0 0 0-9h-1.79A7 7 0 1 0 7 17.708"/></svg>'
			},
			{
				name: 'cloud-check',
				title: 'Cloud Check',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m17 15-5.5 5.5L9 18"/><path d="M5 17.743A7 7 0 1 1 15.71 10h1.79a4.5 4.5 0 0 1 1.5 8.742"/></svg>'
			},
			{
				name: 'cloud-cog',
				title: 'Cloud Cog',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m10.852 19.772-.383.924m2.679-6.468.383-.923m-.383 6.467a3 3 0 1 0-2.296-5.544l-.383-.923"/><path d="m13.53 20.696-.382-.924a3 3 0 1 1-2.296-5.544m3.92 1.624.923-.383m-.923 2.679.923.383"/><path d="M4.2 15.1a7 7 0 1 1 9.93-9.858A7 7 0 0 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.2m-10.772-.348-.923-.383m.923 2.679-.923.383"/></svg>'
			},
			{
				name: 'cloud-download',
				title: 'Cloud Download',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 13v8l-4-4m4 4 4-4"/><path d="M4.393 15.269A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.436 8.284"/></svg>'
			},
			{
				name: 'cloud-drizzle',
				title: 'Cloud Drizzle',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242M8 19v1m0-6v1m8 4v1m0-6v1m-4 6v1m0-6v1"/></svg>'
			},
			{
				name: 'cloud-fog',
				title: 'Cloud Fog',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242M16 17H7m10 4H9"/></svg>'
			},
			{
				name: 'cloud-hail',
				title: 'Cloud Hail',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242M16 14v2m-8-2v2m8 4h.01M8 20h.01M12 16v2m0 4h.01"/></svg>'
			},
			{
				name: 'cloud-lightning',
				title: 'Cloud Lightning',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973"/><path d="m13 12-3 5h4l-3 5"/></svg>'
			},
			{
				name: 'cloud-moon-rain',
				title: 'Cloud Moon Rain',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M11 20v2m7.376-7.488a6 6 0 0 0 3.461-4.127c.148-.625-.659-.97-1.248-.714a4 4 0 0 1-5.259-5.26c.255-.589-.09-1.395-.716-1.248a6 6 0 0 0-4.594 5.36M3 20a5 5 0 1 1 8.9-4H13a3 3 0 0 1 2 5.24M7 19v2"/></svg>'
			},
			{
				name: 'cloud-moon',
				title: 'Cloud Moon',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M13 16a3 3 0 0 1 0 6H7a5 5 0 1 1 4.9-6zm5.376-1.488a6 6 0 0 0 3.461-4.127c.148-.625-.659-.97-1.248-.714a4 4 0 0 1-5.259-5.26c.255-.589-.09-1.395-.716-1.248a6 6 0 0 0-4.594 5.36"/></svg>'
			},
			{
				name: 'cloud-off',
				title: 'Cloud Off',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m2 2 20 20M5.782 5.782A7 7 0 0 0 9 19h8.5a4.5 4.5 0 0 0 1.307-.193m2.725-2.307A4.5 4.5 0 0 0 17.5 10h-1.79A7.01 7.01 0 0 0 10 5.07"/></svg>'
			},
			{
				name: 'cloud-rain-wind',
				title: 'Cloud Rain Wind',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242M9.2 22l3-7M9 13l-3 7m11-7-3 7"/></svg>'
			},
			{
				name: 'cloud-rain',
				title: 'Cloud Rain',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242M16 14v6m-8-6v6m4-4v6"/></svg>'
			},
			{
				name: 'cloud-snow',
				title: 'Cloud Snow',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242M8 15h.01M8 19h.01M12 17h.01M12 21h.01M16 15h.01M16 19h.01"/></svg>'
			},
			{
				name: 'cloud-sun-rain',
				title: 'Cloud Sun Rain',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 2v2m-7.07.93 1.41 1.41M20 12h2m-2.93-7.07-1.41 1.41m-1.713 6.31a4 4 0 0 0-5.925-4.128M3 20a5 5 0 1 1 8.9-4H13a3 3 0 0 1 2 5.24M11 20v2m-4-3v2"/></svg>'
			},
			{
				name: 'cloud-sun',
				title: 'Cloud Sun',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 2v2m-7.07.93 1.41 1.41M20 12h2m-2.93-7.07-1.41 1.41m-1.713 6.31a4 4 0 0 0-5.925-4.128M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6"/></svg>'
			},
			{
				name: 'cloud-upload',
				title: 'Cloud Upload',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 13v8m-8-6.101A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/><path d="m8 17 4-4 4 4"/></svg>'
			},
			{
				name: 'cloud',
				title: 'Cloud',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9"/></svg>'
			},
			{
				name: 'cloudy',
				title: 'Cloudy',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M17.5 21H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9"/><path d="M22 10a3 3 0 0 0-3-3h-2.207a5.502 5.502 0 0 0-10.702.5"/></svg>'
			},
			{
				name: 'clover',
				title: 'Clover',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M16.17 7.83 2 22m2.02-10a2.827 2.827 0 1 1 3.81-4.17A2.827 2.827 0 1 1 12 4.02a2.827 2.827 0 1 1 4.17 3.81A2.827 2.827 0 1 1 19.98 12a2.827 2.827 0 1 1-3.81 4.17A2.827 2.827 0 1 1 12 19.98a2.827 2.827 0 1 1-4.17-3.81A1 1 0 1 1 4 12m3.83-4.17 8.34 8.34"/></svg>'
			},
			{
				name: 'club',
				title: 'Club',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M17.28 9.05a5.5 5.5 0 1 0-10.56 0A5.5 5.5 0 1 0 12 17.66a5.5 5.5 0 1 0 5.28-8.6ZM12 17.66V22"/></svg>'
			},
			{
				name: 'coat-hanger',
				title: 'Coat Hanger',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M9 5a3 3 0 1 1 5.1 2.1l-1.5 1.5A2 2 0 0 0 12 10v1M4 21a2 2 0 0 1-1.1-3.7L12 11l9.2 6.4A2 2 0 0 1 20 21Z"/></svg>'
			},
			{
				name: 'cocktail',
				title: 'Cocktail',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M9 6 6.6 2.8C6.3 2.4 5.6 2 5 2H2m16 4-7 8-7-8Z"/><path d="M15.4 9.1A4 4 0 1 0 14 6m-3 8v8m-4 0h8"/></svg>'
			},
			{
				name: 'coconut',
				title: 'Coconut',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><ellipse cx="12" cy="9" rx="10" ry="7"/><path d="M2 9v3a10 10 0 0 0 20 0V9"/><ellipse cx="12" cy="9" rx="6" ry="3"/><path d="m14 8 6-6h2"/></svg>'
			},
			{
				name: 'code-xml',
				title: 'Code Xml',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m18 16 4-4-4-4M6 8l-4 4 4 4m8.5-12-5 16"/></svg>'
			},
			{
				name: 'code',
				title: 'Code',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m16 18 6-6-6-6M8 6l-6 6 6 6"/></svg>'
			},
			{
				name: 'codepen',
				title: 'Codepen',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m12 2 10 6.5v7L12 22 2 15.5v-7zm0 20v-6.5"/><path d="m22 8.5-10 7-10-7"/><path d="m2 15.5 10-7 10 7M12 2v6.5"/></svg>'
			},
			{
				name: 'codesandbox',
				title: 'Codesandbox',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16"/><path d="m7.5 4.21 4.5 2.6 4.5-2.6m-9 15.58V14.6L3 12m18 0-4.5 2.6v5.19M3.27 6.96 12 12.01l8.73-5.05M12 22.08V12"/></svg>'
			},
			{
				name: 'coffee-bean',
				title: 'Coffee Bean',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M4.05 19.95a11.24 8.585 135 0 0 15.9-15.9 11.24 8.585 135 0 0-15.9 15.9"/><path d="M19.8 4.2C20 14 4 10 4.2 19.8"/></svg>'
			},
			{
				name: 'coffee',
				title: 'Coffee',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 2v2m4-2v2m2 4a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1M6 2v2"/></svg>'
			},
			{
				name: 'coffeemaker',
				title: 'Coffeemaker',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M14 22V12a2 2 0 0 0-2-2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v18H2"/><path d="M10 2v2a2 2 0 1 1-4 0V2m16 4h-4m4 4h-4m0 12v-6a2 2 0 0 1 2-2h2M7 10v2m0 10c-1.7 0-3-1.3-3-3v-3h6v3c0 1.7-1.3 3-3 3m-5-4a2 2 0 0 1 2-2"/></svg>'
			},
			{
				name: 'cog',
				title: 'Cog',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M11 10.27 7 3.34m4 10.39-4 6.93M12 22v-2m0-18v2m2 8h8m-5 8.66-1-1.73m1-15.59-1 1.73M2 12h2m16.66 5-1.73-1m1.73-9-1.73 1M3.34 17l1.73-1M3.34 7l1.73 1"/><circle cx="12" cy="12" r="2"/><circle cx="12" cy="12" r="8"/></svg>'
			},
			{
				name: 'coins-exchange',
				title: 'Coins Exchange',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M6 10V5c0-1.7 1.3-3 3-3h1"/><path d="m3 7 3 3 3-3"/><circle cx="18" cy="6" r="4"/><path d="M18 14v5c0 1.7-1.3 3-3 3h-1"/><path d="m21 17-3-3-3 3"/><circle cx="6" cy="18" r="4"/></svg>'
			},
			{
				name: 'coins-stack',
				title: 'Coins Stack',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><ellipse cx="12" cy="6" rx="9" ry="3"/><path d="M3 10c0 1.7 4 3 9 3s9-1.3 9-3M3 14c0 1.7 4 3 9 3s9-1.3 9-3"/><path d="M3 6v12c0 1.7 4 3 9 3s9-1.3 9-3V6"/></svg>'
			},
			{
				name: 'coins',
				title: 'Coins',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="8" cy="8" r="6"/><path d="M18.09 10.37A6 6 0 1 1 10.34 18M7 6h1v4"/><path d="m16.71 13.88.7.71-2.82 2.82"/></svg>'
			},
			{
				name: 'columns-2',
				title: 'Columns 2',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M12 3v18"/></svg>'
			},
			{
				name: 'columns-3-cog',
				title: 'Columns 3 Cog',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10.5 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5.5m-6.7 9.1 1-.4M15 3v7.5m.2 6.4-.9-.3m2.3 5.1.3-.9m-.1-5.5-.4-1m2.7.9.3-.9m.2 7.4-.4-1m1.5-3.9 1-.4m0 3-.9-.3M9 3v18"/><circle cx="18" cy="18" r="3"/></svg>'
			},
			{
				name: 'columns-3',
				title: 'Columns 3',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 3v18m6-18v18"/></svg>'
			},
			{
				name: 'columns-4',
				title: 'Columns 4',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7.5 3v18M12 3v18m4.5-18v18"/></svg>'
			},
			{
				name: 'combine',
				title: 'Combine',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M14 3a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1m5-7a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1M7 15l3 3m-3 3 3-3H5a2 2 0 0 1-2-2v-2"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="3" rx="1"/></svg>'
			},
			{
				name: 'command',
				title: 'Command',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3"/></svg>'
			},
			{
				name: 'compass',
				title: 'Compass',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"/><circle cx="12" cy="12" r="10"/></svg>'
			},
			{
				name: 'component',
				title: 'Component',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M15.536 11.293a1 1 0 0 0 0 1.414l2.376 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0zm-13.239 0a1 1 0 0 0 0 1.414l2.377 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414L6.088 8.916a1 1 0 0 0-1.414 0zm6.619 6.619a1 1 0 0 0 0 1.415l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.415l-2.377-2.376a1 1 0 0 0-1.414 0zm0-13.238a1 1 0 0 0 0 1.414l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z"/></svg>'
			},
			{
				name: 'computer',
				title: 'Computer',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="14" height="8" x="5" y="2" rx="2"/><rect width="20" height="8" x="2" y="14" rx="2"/><path d="M6 18h2m4 0h6"/></svg>'
			},
			{
				name: 'concierge-bell',
				title: 'Concierge Bell',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M3 20a1 1 0 0 1-1-1v-1a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1Zm17-4a8 8 0 1 0-16 0m8-12v4m-2-4h4"/></svg>'
			},
			{
				name: 'cone',
				title: 'Cone',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m20.9 18.55-8-15.98a1 1 0 0 0-1.8 0l-8 15.98"/><ellipse cx="12" cy="19" rx="9" ry="3"/></svg>'
			},
			{
				name: 'construction',
				title: 'Construction',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="20" height="8" x="2" y="6" rx="1"/><path d="M17 14v7M7 14v7M17 3v3M7 3v3m3 8L2.3 6.3M14 6l7.7 7.7M8 6l8 8"/></svg>'
			},
			{
				name: 'contact-round',
				title: 'Contact Round',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M16 2v2m1.915 18a6 6 0 0 0-12 0M8 2v2"/><circle cx="12" cy="12" r="4"/><rect width="18" height="18" x="3" y="4" rx="2"/></svg>'
			},
			{
				name: 'contact',
				title: 'Contact',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M16 2v2M7 22v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2M8 2v2"/><circle cx="12" cy="11" r="3"/><rect width="18" height="18" x="3" y="4" rx="2"/></svg>'
			},
			{
				name: 'container',
				title: 'Container',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M22 7.7c0-.6-.4-1.2-.8-1.5l-6.3-3.9a1.72 1.72 0 0 0-1.7 0l-10.3 6c-.5.2-.9.8-.9 1.4v6.6c0 .5.4 1.2.8 1.5l6.3 3.9a1.72 1.72 0 0 0 1.7 0l10.3-6c.5-.3.9-1 .9-1.5Z"/><path d="M10 21.9V14L2.1 9.1M10 14l11.9-6.9M14 19.8v-8.1m4 5.8V9.4"/></svg>'
			},
			{
				name: 'contrast',
				title: 'Contrast',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 18a6 6 0 0 0 0-12z"/></svg>'
			},
			{
				name: 'cookie',
				title: 'Cookie',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5M8.5 8.5v.01M16 15.5v.01M12 12v.01M11 17v.01M7 14v.01"/></svg>'
			},
			{
				name: 'cooking-pot',
				title: 'Cooking Pot',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M2 12h20m-2 0v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8m0-4 16-4M8.86 6.78l-.45-1.81a2 2 0 0 1 1.45-2.43l1.94-.48a2 2 0 0 1 2.43 1.46l.45 1.8"/></svg>'
			},
			{
				name: 'copy-check',
				title: 'Copy Check',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m12 15 2 2 4-4"/><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>'
			},
			{
				name: 'copy-code',
				title: 'Copy Code',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M4 16a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2"/><rect width="14" height="14" x="8" y="8" rx="2"/><path d="m13 13-1 2 1 2m4-4 1 2-1 2"/></svg>'
			},
			{
				name: 'copy-down',
				title: 'Copy Down',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M4 16a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2"/><rect width="14" height="14" x="8" y="8" rx="2"/><path d="M15 12v6m-3-3 3 3 3-3"/></svg>'
			},
			{
				name: 'copy-file-path',
				title: 'Copy File Path',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/><rect width="14" height="14" x="8" y="8" rx="2"/><path d="M12 18h.01M18 12l-2 6"/></svg>'
			},
			{
				name: 'copy-image',
				title: 'Copy Image',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M4 16a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2"/><rect width="14" height="14" x="8" y="8" rx="2"/><circle cx="14" cy="14" r="2"/><path d="m13.4 22 4.7-3.9c.8-.8 2-.8 2.8 0l1.1 1.1"/></svg>'
			},
			{
				name: 'copy-minus',
				title: 'Copy Minus',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 15h6"/><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>'
			},
			{
				name: 'copy-plus',
				title: 'Copy Plus',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M15 12v6m-3-3h6"/><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>'
			},
			{
				name: 'copy-slash',
				title: 'Copy Slash',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m12 18 6-6"/><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>'
			},
			{
				name: 'copy-text',
				title: 'Copy Text',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M4 16a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2"/><rect width="14" height="14" x="8" y="8" rx="2"/><path d="M12 13h6m-6 4h6"/></svg>'
			},
			{
				name: 'copy-type',
				title: 'Copy Type',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="14" height="14" x="8" y="8" rx="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2m-4 9v-1h6v1m-3-1v6m-1 0h2"/></svg>'
			},
			{
				name: 'copy-x',
				title: 'Copy X',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m12 12 6 6m-6 0 6-6"/><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>'
			},
			{
				name: 'copy',
				title: 'Copy',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>'
			},
			{
				name: 'copyleft',
				title: 'Copyleft',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M9.17 14.83a4 4 0 1 0 0-5.66"/></svg>'
			},
			{
				name: 'copyright',
				title: 'Copyright',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M14.83 14.83a4 4 0 1 1 0-5.66"/></svg>'
			},
			{
				name: 'corner-down-left',
				title: 'Corner Down Left',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M20 4v7a4 4 0 0 1-4 4H4"/><path d="m9 10-5 5 5 5"/></svg>'
			},
			{
				name: 'corner-down-right',
				title: 'Corner Down Right',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m15 10 5 5-5 5"/><path d="M4 4v7a4 4 0 0 0 4 4h12"/></svg>'
			},
			{
				name: 'corner-left-down',
				title: 'Corner Left Down',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m14 15-5 5-5-5"/><path d="M20 4h-7a4 4 0 0 0-4 4v12"/></svg>'
			},
			{
				name: 'corner-left-up',
				title: 'Corner Left Up',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M14 9 9 4 4 9"/><path d="M20 20h-7a4 4 0 0 1-4-4V4"/></svg>'
			},
			{
				name: 'corner-right-down',
				title: 'Corner Right Down',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m10 15 5 5 5-5"/><path d="M4 4h7a4 4 0 0 1 4 4v12"/></svg>'
			},
			{
				name: 'corner-right-up',
				title: 'Corner Right Up',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m10 9 5-5 5 5"/><path d="M4 20h7a4 4 0 0 0 4-4V4"/></svg>'
			},
			{
				name: 'corner-up-left',
				title: 'Corner Up Left',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M20 20v-7a4 4 0 0 0-4-4H4"/><path d="M9 14 4 9l5-5"/></svg>'
			},
			{
				name: 'corner-up-right',
				title: 'Corner Up Right',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m15 14 5-5-5-5"/><path d="M4 20v-7a4 4 0 0 1 4-4h12"/></svg>'
			},
			{
				name: 'cow-head',
				title: 'Cow Head',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M17.8 15.1a10 10 0 0 0 .9-7.1h.3c1.7 0 3-1.3 3-3V3h-3c-1.3 0-2.4.8-2.8 1.9a10 10 0 0 0-8.4 0C7.4 3.8 6.3 3 5 3H2v2c0 1.7 1.3 3 3 3h.3a10 10 0 0 0 .9 7.1M9 9.5v.5m6-.5v.5"/><path d="M15 22a4 4 0 1 0-3-6.6A4 4 0 1 0 9 22Zm-6-4h.01M15 18h.01"/></svg>'
			},
			{
				name: 'cow-udder-droplets',
				title: 'Cow Udder Droplets',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M2 2c0 2 .6 4 1.7 5.5L2.3 10a2 2 0 0 0 3.4 2l.9-1.6c1 .6 2.1 1.1 3.4 1.4V14a2 2 0 0 0 4 0v-2.2a8.5 8.5 0 0 0 3.4-1.4l.9 1.6a1.94 1.94 0 1 0 3.4-2l-1.4-2.5C21.4 6 22 4 22 2Zm5.9 16.6c-.6-.6-1.1-1.3-1.4-2.1-.3.8-.8 1.5-1.4 2.1a1.93 1.93 0 1 0 2.8 0m11 0c-.6-.6-1.1-1.3-1.4-2.1-.3.8-.8 1.5-1.4 2.1a1.93 1.93 0 1 0 2.8 0"/></svg>'
			},
			{
				name: 'cpu',
				title: 'Cpu',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 20v2m0-20v2m5 16v2m0-20v2M2 12h2m-2 5h2M2 7h2m16 5h2m-2 5h2M20 7h2M7 20v2M7 2v2"/><rect width="16" height="16" x="4" y="4" rx="2"/><rect width="8" height="8" x="8" y="8" rx="1"/></svg>'
			},
			{
				name: 'crab',
				title: 'Crab',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M7.5 14A6 6 0 1 1 10 2.36L8 5l2 2S7 8 2 8m14.5 6A6 6 0 1 0 14 2.36L16 5l-2 2s3 1 8 1m-12 5v-2m4 2v-2"/><ellipse cx="12" cy="17.5" rx="7" ry="4.5"/><path d="M2 16c2 0 3 1 3 1m-3 5c0-1.7 1.3-3 3-3m14-2s1-1 3-1m-3 3c1.7 0 3 1.3 3 3"/></svg>'
			},
			{
				name: 'creative-commons',
				title: 'Creative Commons',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M10 9.3a2.8 2.8 0 0 0-3.5 1 3.1 3.1 0 0 0 0 3.4 2.7 2.7 0 0 0 3.5 1m7-5.4a2.8 2.8 0 0 0-3.5 1 3.1 3.1 0 0 0 0 3.4 2.7 2.7 0 0 0 3.5 1"/></svg>'
			},
			{
				name: 'credit-card',
				title: 'Credit Card',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="20" height="14" x="2" y="5" rx="2"/><path d="M2 10h20"/></svg>'
			},
			{
				name: 'cricket-ball',
				title: 'Cricket Ball',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M5 8 3.6 6.6M8 11l1 1m3 3 1 1m3 3 1.4 1.4"/><circle cx="12" cy="12" r="10"/><path d="M8 5 6.6 3.6M11 8l1 1m3 3 1 1m4.4 4.4L19 16"/></svg>'
			},
			{
				name: 'cricket-wicket',
				title: 'Cricket Wicket',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m6 2 4 2m4-1 4-1"/><circle cx="12" cy="13" r="2"/><path d="M6 7v15m7-15-.3 4.1m-.2 3.8L12 22m6-15v15"/></svg>'
			},
			{
				name: 'croissant',
				title: 'Croissant',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10.2 18H4.774a1.5 1.5 0 0 1-1.352-.97 11 11 0 0 1 .132-6.487M18 10.2V4.774a1.5 1.5 0 0 0-.97-1.352 11 11 0 0 0-6.486.132"/><path d="M18 5a4 3 0 0 1 4 3 2 2 0 0 1-2 2 10 10 0 0 0-5.139 1.42M5 18a3 4 0 0 0 3 4 2 2 0 0 0 2-2 10 10 0 0 1 1.42-5.14"/><path d="M8.709 2.554a10 10 0 0 0-6.155 6.155 1.5 1.5 0 0 0 .676 1.626l9.807 5.42a2 2 0 0 0 2.718-2.718l-5.42-9.807a1.5 1.5 0 0 0-1.626-.676"/></svg>'
			},
			{
				name: 'crop',
				title: 'Crop',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M6 2v14a2 2 0 0 0 2 2h14"/><path d="M18 22V8a2 2 0 0 0-2-2H2"/></svg>'
			},
			{
				name: 'cross-square',
				title: 'Cross Square',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="3"/><path d="M14 10V7c0-.6-.4-1-1-1h-2c-.6 0-1 .4-1 1v3H7c-.6 0-1 .4-1 1v2c0 .6.4 1 1 1h3v3c0 .6.4 1 1 1h2c.6 0 1-.4 1-1v-3h3c.6 0 1-.4 1-1v-2c0-.6-.4-1-1-1Z"/></svg>'
			},
			{
				name: 'cross',
				title: 'Cross',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M4 9a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h4a1 1 0 0 1 1 1v4a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-4a1 1 0 0 1 1-1h4a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-4a1 1 0 0 1-1-1V4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4a1 1 0 0 1-1 1z"/></svg>'
			},
			{
				name: 'crosshair-2-dot',
				title: 'Crosshair 2 Dot',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="8"/><path d="M12 6V2m10 10h-4M6 12H2m10 10v-4m0-6h.01"/></svg>'
			},
			{
				name: 'crosshair-2',
				title: 'Crosshair 2',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="8"/><path d="M12 6V2m10 10h-4M6 12H2m10 10v-4"/></svg>'
			},
			{
				name: 'crosshair-plus-dot',
				title: 'Crosshair Plus Dot',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 16v5m0-18v5m4 4h5M3 12h5m4 0h.01"/></svg>'
			},
			{
				name: 'crosshair-plus',
				title: 'Crosshair Plus',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 16v5m0-18v5m4 4h5M3 12h5"/></svg>'
			},
			{
				name: 'crosshair-square',
				title: 'Crosshair Square',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M8 3H5a2 2 0 0 0-2 2v3m9-5v5m9 0V5a2 2 0 0 0-2-2h-3m0 9h5m-5 9h3a2 2 0 0 0 2-2v-3m-9 0v5m-9-5v3a2 2 0 0 0 2 2h3m-5-9h5m4 0h.01"/></svg>'
			},
			{
				name: 'crosshair',
				title: 'Crosshair',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M22 12h-4M6 12H2m10-6V2m0 20v-4"/></svg>'
			},
			{
				name: 'crown',
				title: 'Crown',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294zM5 21h14"/></svg>'
			},
			{
				name: 'cuboid',
				title: 'Cuboid',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m21.12 6.4-6.05-4.06a2 2 0 0 0-2.17-.05L2.95 8.41a2 2 0 0 0-.95 1.7v5.82a2 2 0 0 0 .88 1.66l6.05 4.07a2 2 0 0 0 2.17.05l9.95-6.12a2 2 0 0 0 .95-1.7V8.06a2 2 0 0 0-.88-1.66"/><path d="M10 22v-8L2.25 9.15M10 14l11.77-6.87"/></svg>'
			},
			{
				name: 'cup-saucer',
				title: 'Cup Saucer',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M2 18a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4ZM6 8h12v6a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4Zm12 0h1a3 3 0 0 1 3 3v0a3 3 0 0 1-3 3h-1M6 4a1 1 0 0 1 1-1 1 1 0 0 0 1-1m4 2a1 1 0 0 1 1-1 1 1 0 0 0 1-1m4 2a1 1 0 0 1 1-1 1 1 0 0 0 1-1"/></svg>'
			},
			{
				name: 'cup-soda',
				title: 'Cup Soda',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m6 8 1.75 12.28a2 2 0 0 0 2 1.72h4.54a2 2 0 0 0 2-1.72L18 8M5 8h14"/><path d="M7 15a6.47 6.47 0 0 1 5 0 6.47 6.47 0 0 0 5 0m-5-7 1-6h2"/></svg>'
			},
			{
				name: 'cup-to-go',
				title: 'Cup To Go',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M4 7h16m-1.8 4 .8-4-.8-4c-.1-.5-.6-1-1.2-1H7c-.6 0-1.1.4-1.2 1C5.5 4.4 5 7 5 7l.8 4M18 18H6l-1-7h14ZM7.2 18l.6 3c.1.5.6 1 1.2 1h6c.6 0 1.1-.4 1.2-1l.6-3"/></svg>'
			},
			{
				name: 'currency-square',
				title: 'Currency Square',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="m17 7-2.17 2.17M17 17l-2.17-2.17M7 17l2.17-2.17M7 7l2.17 2.17"/><circle cx="12" cy="12" r="4"/></svg>'
			},
			{
				name: 'currency',
				title: 'Currency',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="8"/><path d="m3 3 3 3m15-3-3 3M3 21l3-3m15 3-3-3"/></svg>'
			},
			{
				name: 'cylinder',
				title: 'Cylinder',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14a9 3 0 0 0 18 0V5"/></svg>'
			},
			{
				name: 'dam',
				title: 'Dam',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M11 11.31c1.17.56 1.54 1.69 3.5 1.69 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1m-10.25 6c.35.5 1.45 1 2.75 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1M2 10h4m-4 4h4m-4 4h4M2 6h4"/><path d="M7 3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1L10 4a1 1 0 0 0-1-1z"/></svg>'
			},
			{
				name: 'database-backup',
				title: 'Database Backup',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 12a9 3 0 0 0 5 2.69M21 9.3V5"/><path d="M3 5v14a9 3 0 0 0 6.47 2.88M12 12v4h4"/><path d="M13 20a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L12 16"/></svg>'
			},
			{
				name: 'database-zap',
				title: 'Database Zap',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14a9 3 0 0 0 12 2.84M21 5v3m0 4-3 5h4l-3 5"/><path d="M3 12a9 3 0 0 0 11.59 2.87"/></svg>'
			},
			{
				name: 'database',
				title: 'Database',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14a9 3 0 0 0 18 0V5"/><path d="M3 12a9 3 0 0 0 18 0"/></svg>'
			},
			{
				name: 'decimals-arrow-left',
				title: 'Decimals Arrow Left',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m13 21-3-3 3-3m7 3H10m-7-7h.01"/><rect width="5" height="8" x="6" y="3" rx="2.5"/></svg>'
			},
			{
				name: 'decimals-arrow-right',
				title: 'Decimals Arrow Right',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 18h10m-3 3 3-3-3-3M3 11h.01"/><rect width="5" height="8" x="15" y="3" rx="2.5"/><rect width="5" height="8" x="6" y="3" rx="2.5"/></svg>'
			},
			{
				name: 'delete',
				title: 'Delete',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 5a2 2 0 0 0-1.344.519l-6.328 5.74a1 1 0 0 0 0 1.481l6.328 5.741A2 2 0 0 0 10 19h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zm2 4 6 6m0-6-6 6"/></svg>'
			},
			{
				name: 'desk-lamp',
				title: 'Desk Lamp',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m17 7 1-2m-3 2h4v4h-4zM6 7v4m3-4H3l1-5h4Zm13 15V12c0-.6-.4-1-1-1H3c-.6 0-1 .4-1 1v10m8-7H2m8-4v8m12 0H2"/></svg>'
			},
			{
				name: 'dessert',
				title: 'Dessert',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10.162 3.167A10 10 0 0 0 2 13a2 2 0 0 0 4 0v-1a2 2 0 0 1 4 0v4a2 2 0 0 0 4 0v-4a2 2 0 0 1 4 0v1a2 2 0 0 0 4-.006 10 10 0 0 0-8.161-9.826"/><path d="M20.804 14.869a9 9 0 0 1-17.608 0"/><circle cx="12" cy="4" r="2"/></svg>'
			},
			{
				name: 'diameter',
				title: 'Diameter',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="19" cy="19" r="2"/><circle cx="5" cy="5" r="2"/><path d="M6.48 3.66a10 10 0 0 1 13.86 13.86M6.41 6.41l11.18 11.18M3.66 6.48a10 10 0 0 0 13.86 13.86"/></svg>'
			},
			{
				name: 'diamond-minus',
				title: 'Diamond Minus',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0zM8 12h8"/></svg>'
			},
			{
				name: 'diamond-percent',
				title: 'Diamond Percent',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0Zm6.5-1.1h.01m5.29.3-5 5m5.2.3h.01"/></svg>'
			},
			{
				name: 'diamond-plus',
				title: 'Diamond Plus',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 8v8m-9.3-5.7a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0zM8 12h8"/></svg>'
			},
			{
				name: 'diamond',
				title: 'Diamond',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0Z"/></svg>'
			},
			{
				name: 'diaper',
				title: 'Diaper',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M2 9h4m16 0h-4M9 20a7 7 0 0 1-7-7V7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v6a7 7 0 0 1-7 7Z"/><path d="M2 13a7 7 0 0 1 7 7m6 0a7 7 0 0 1 7-7"/></svg>'
			},
			{
				name: 'dice-1',
				title: 'Dice 1',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><path d="M12 12h.01"/></svg>'
			},
			{
				name: 'dice-2',
				title: 'Dice 2',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><path d="M15 9h.01M9 15h.01"/></svg>'
			},
			{
				name: 'dice-3',
				title: 'Dice 3',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><path d="M16 8h.01M12 12h.01M8 16h.01"/></svg>'
			},
			{
				name: 'dice-4',
				title: 'Dice 4',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><path d="M16 8h.01M8 8h.01M8 16h.01M16 16h.01"/></svg>'
			},
			{
				name: 'dice-5',
				title: 'Dice 5',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><path d="M16 8h.01M8 8h.01M8 16h.01M16 16h.01M12 12h.01"/></svg>'
			},
			{
				name: 'dice-6',
				title: 'Dice 6',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><path d="M16 8h.01M16 12h.01M16 16h.01M8 8h.01M8 12h.01M8 16h.01"/></svg>'
			},
			{
				name: 'dices',
				title: 'Dices',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="12" height="12" x="2" y="10" rx="2" ry="2"/><path d="m17.92 14 3.5-3.5a2.24 2.24 0 0 0 0-3l-5-4.92a2.24 2.24 0 0 0-3 0L10 6M6 18h.01M10 14h.01M15 6h.01M18 9h.01"/></svg>'
			},
			{
				name: 'diff',
				title: 'Diff',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 3v14m-7-7h14M5 21h14"/></svg>'
			},
			{
				name: 'disc-2',
				title: 'Disc 2',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/><path d="M12 12h.01"/></svg>'
			},
			{
				name: 'disc-3',
				title: 'Disc 3',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M6 12c0-1.7.7-3.2 1.8-4.2"/><circle cx="12" cy="12" r="2"/><path d="M18 12c0 1.7-.7 3.2-1.8 4.2"/></svg>'
			},
			{
				name: 'disc-album',
				title: 'Disc Album',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="2"/><circle cx="12" cy="12" r="5"/><path d="M12 12h.01"/></svg>'
			},
			{
				name: 'disc',
				title: 'Disc',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="2"/></svg>'
			},
			{
				name: 'dishwasher',
				title: 'Dishwasher',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M17 6v2M3 7h18"/><rect width="18" height="20" x="3" y="2" rx="2"/><path d="m9 11-2 7"/><circle cx="14.5" cy="15.5" r="2.5"/><path d="m13 11-2 7"/></svg>'
			},
			{
				name: 'divide',
				title: 'Divide',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="6" r="1"/><path d="M5 12h14"/><circle cx="12" cy="18" r="1"/></svg>'
			},
			{
				name: 'dna-off',
				title: 'Dna Off',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M15 2c-1.35 1.5-2.092 3-2.5 4.5L14 8m3-2-2.891-2.891M2 15c3.333-3 6.667-3 10-3M2 2l20 20M20 9l.891.891M22 9c-1.5 1.35-3 2.092-4.5 2.5l-1-1M3.109 14.109 4 15m2.5-2.5 1 1M7 18l2.891 2.891M9 22c1.35-1.5 2.092-3 2.5-4.5L10 16"/></svg>'
			},
			{
				name: 'dna',
				title: 'Dna',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m10 16 1.5 1.5M14 8l-1.5-1.5M15 2c-1.798 1.998-2.518 3.995-2.807 5.993M16.5 10.5l1 1M17 6l-2.891-2.891M2 15c6.667-6 13.333 0 20-6m-2 0 .891.891M3.109 14.109 4 15m2.5-2.5 1 1M7 18l2.891 2.891M9 22c1.798-1.998 2.518-3.995 2.807-5.993"/></svg>'
			},
			{
				name: 'dock',
				title: 'Dock',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M2 8h20"/><rect width="20" height="16" x="2" y="4" rx="2"/><path d="M6 16h12"/></svg>'
			},
			{
				name: 'dog',
				title: 'Dog',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M11.25 16.25h1.5L12 17zM16 14v.5"/><path d="M4.42 11.247A13.2 13.2 0 0 0 4 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444a11.7 11.7 0 0 0-.493-3.309M8 14v.5"/><path d="M8.5 8.5c-.384 1.05-1.083 2.028-2.344 2.5-1.931.722-3.576-.297-3.656-1-.113-.994 1.177-6.53 4-7 1.923-.321 3.651.845 3.651 2.235A7.5 7.5 0 0 1 14 5.277c0-1.39 1.844-2.598 3.767-2.277 2.823.47 4.113 6.006 4 7-.08.703-1.725 1.722-3.656 1-1.261-.472-1.855-1.45-2.239-2.5"/></svg>'
			},
			{
				name: 'dollar-sign-circle',
				title: 'Dollar Sign Circle',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8m4 2V6"/></svg>'
			},
			{
				name: 'dollar-sign-square',
				title: 'Dollar Sign Square',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M12 17V7m4 1h-6a2 2 0 0 0 0 4h4a2 2 0 0 1 0 4H8"/></svg>'
			},
			{
				name: 'dollar-sign',
				title: 'Dollar Sign',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 2v20m5-17H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>'
			},
			{
				name: 'donut',
				title: 'Donut',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M20.5 10a2.5 2.5 0 0 1-2.4-3H18a2.95 2.95 0 0 1-2.6-4.4 10 10 0 1 0 6.3 7.1c-.3.2-.8.3-1.2.3"/><circle cx="12" cy="12" r="3"/></svg>'
			},
			{
				name: 'door-closed-locked',
				title: 'Door Closed Locked',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 12h.01M18 9V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14m-4 0h8m10-3v-2a2 2 0 1 0-4 0v2"/><rect width="8" height="5" x="14" y="17" rx="1"/></svg>'
			},
			{
				name: 'door-closed',
				title: 'Door Closed',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 12h.01M18 20V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14m-4 0h20"/></svg>'
			},
			{
				name: 'door-open',
				title: 'Door Open',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M11 20H2m9-15.438v16.157a1 1 0 0 0 1.242.97L19 20V5.562a2 2 0 0 0-1.515-1.94l-4-1A2 2 0 0 0 11 4.561zM11 4H8a2 2 0 0 0-2 2v14m8-8h.01M22 20h-3"/></svg>'
			},
			{
				name: 'doorbell-intercom',
				title: 'Doorbell Intercom',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M14.8 4a2.9 2.9 0 0 0-5.6 0H5c-.6 0-1 .4-1 1v14c0 .6.4 1 1 1h4.2a2.9 2.9 0 0 0 5.6 0H19c.6 0 1-.4 1-1V5c0-.6-.4-1-1-1ZM8 8h.01M12 8h.01M16 8h.01"/><circle cx="12" cy="14" r="2"/></svg>'
			},
			{
				name: 'dot',
				title: 'Dot',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="12.1" cy="12.1" r="1"/></svg>'
			},
			{
				name: 'download',
				title: 'Download',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/></svg>'
			},
			{
				name: 'drafting-compass',
				title: 'Drafting Compass',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m12.99 6.74 1.93 3.44M19.136 12a10 10 0 0 1-14.271 0M21 21l-2.16-3.84M3 21l8.02-14.26"/><circle cx="12" cy="5" r="2"/></svg>'
			},
			{
				name: 'drama',
				title: 'Drama',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 11h.01M14 6h.01M18 6h.01M6.5 13.1h.01M22 5c0 9-4 12-6 12s-6-3-6-12q0-3 6-3c6 0 6 1 6 3"/><path d="M17.4 9.9c-.8.8-2 .8-2.8 0m-4.5-2.8C9 7.2 7.7 7.7 6 8.6c-3.5 2-4.7 3.9-3.7 5.6 4.5 7.8 9.5 8.4 11.2 7.4.9-.5 1.9-2.1 1.9-4.7"/><path d="M9.1 16.5c.3-1.1 1.4-1.7 2.4-1.4"/></svg>'
			},
			{
				name: 'dress',
				title: 'Dress',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M16 2v3a5.14 5.14 0 0 1 .7 4.8l-.2.5a7.64 7.64 0 0 0 .4 6.3C17.7 17.9 19 20 19 20s-3.1 2-7 2-7-2-7-2 1.3-2.1 2.1-3.5a7.64 7.64 0 0 0 .4-6.2l-.2-.5A5.66 5.66 0 0 1 8 5V2"/><path d="M16 5c-1.8 0-3.3 1-4 2.5C11.3 6 9.8 5 8 5"/></svg>'
			},
			{
				name: 'dribbble',
				title: 'Dribbble',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94m19.5 1.9c-6.62-1.41-12.14 1-16.38 6.32"/><path d="M8.56 2.75c4.37 6 6 9.42 8 17.72"/></svg>'
			},
			{
				name: 'drill',
				title: 'Drill',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H5a3 3 0 0 1-3-3 1 1 0 0 1 1-1zm3-8H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1l-.81 3.242a1 1 0 0 1-.97.758H8m6-10h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-3m4-2h4M5 10l-2 8m4 0 2-8"/></svg>'
			},
			{
				name: 'drone',
				title: 'Drone',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 10 7 7m3 7-3 3m7-7 3-3m-3 7 3 3M14.205 4.139a4 4 0 1 1 5.439 5.863M19.637 14a4 4 0 1 1-5.432 5.868M4.367 10a4 4 0 1 1 5.438-5.862m-.01 15.724a4 4 0 1 1-5.429-5.873"/><rect width="4" height="8" x="10" y="8" rx="1"/></svg>'
			},
			{
				name: 'droplet-off',
				title: 'Droplet Off',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M18.715 13.186C18.29 11.858 17.384 10.607 16 9.5c-2-1.6-3.5-4-4-6.5a10.7 10.7 0 0 1-.884 2.586M2 2l20 20M8.795 8.797A11 11 0 0 1 8 9.5C6 11.1 5 13 5 15a7 7 0 0 0 13.222 3.208"/></svg>'
			},
			{
				name: 'droplet',
				title: 'Droplet',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5S5 13 5 15a7 7 0 0 0 7 7"/></svg>'
			},
			{
				name: 'droplets',
				title: 'Droplets',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05"/><path d="M12.56 6.6A11 11 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"/></svg>'
			},
			{
				name: 'drum',
				title: 'Drum',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m2 2 8 8m12-8-8 8"/><ellipse cx="12" cy="9" rx="10" ry="5"/><path d="M7 13.4v7.9m5-7.3v8m5-8.6v7.9M2 9v8a10 5 0 0 0 20 0V9"/></svg>'
			},
			{
				name: 'drumstick',
				title: 'Drumstick',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M15.4 15.63a7.875 6 135 1 1 6.23-6.23 4.5 3.43 135 0 0-6.23 6.23"/><path d="m8.29 12.71-2.6 2.6a2.5 2.5 0 1 0-1.65 4.65A2.5 2.5 0 1 0 8.7 18.3l2.59-2.59"/></svg>'
			},
			{
				name: 'dumbbell',
				title: 'Dumbbell',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M17.596 12.768a2 2 0 1 0 2.829-2.829l-1.768-1.767a2 2 0 0 0 2.828-2.829l-2.828-2.828a2 2 0 0 0-2.829 2.828l-1.767-1.768a2 2 0 1 0-2.829 2.829zM2.5 21.5l1.4-1.4M20.1 3.9l1.4-1.4M5.343 21.485a2 2 0 1 0 2.829-2.828l1.767 1.768a2 2 0 1 0 2.829-2.829l-6.364-6.364a2 2 0 1 0-2.829 2.829l1.768 1.767a2 2 0 0 0-2.828 2.829zM9.6 14.4l4.8-4.8"/></svg>'
			},
			{
				name: 'ear-off',
				title: 'Ear Off',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M6 18.5a3.5 3.5 0 1 0 7 0c0-1.57.92-2.52 2.04-3.46M6 8.5c0-.75.13-1.47.36-2.14M8.8 3.15A6.5 6.5 0 0 1 19 8.5c0 1.63-.44 2.81-1.09 3.76"/><path d="M12.5 6A2.5 2.5 0 0 1 15 8.5M10 13a2 2 0 0 0 1.82-1.18M2 2l20 20"/></svg>'
			},
			{
				name: 'ear',
				title: 'Ear',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M6 8.5a6.5 6.5 0 1 1 13 0c0 6-6 6-6 10a3.5 3.5 0 1 1-7 0"/><path d="M15 8.5a2.5 2.5 0 0 0-5 0v1a2 2 0 1 1 0 4"/></svg>'
			},
			{
				name: 'earth-lock',
				title: 'Earth Lock',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M7 3.34V5a3 3 0 0 0 3 3m1 13.95V18a2 2 0 0 0-2-2 2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05m19.49 4H17a2 2 0 0 0-2 2v4.54"/><path d="M12 2a10 10 0 1 0 9.54 13M20 6V4a2 2 0 1 0-4 0v2"/><rect width="8" height="5" x="14" y="6" rx="1"/></svg>'
			},
			{
				name: 'earth',
				title: 'Earth',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M21.54 15H17a2 2 0 0 0-2 2v4.54M7 3.34V5a3 3 0 0 0 3 3 2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17M11 21.95V18a2 2 0 0 0-2-2 2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"/><circle cx="12" cy="12" r="10"/></svg>'
			},
			{
				name: 'eclipse',
				title: 'Eclipse',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 2a7 7 0 1 0 10 10"/></svg>'
			},
			{
				name: 'egg-cup',
				title: 'Egg Cup',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M18 11c0-3.3-2.7-9-6-9s-6 5.7-6 9m13 0a7 7 0 1 1-14 0Zm-7 7v4m-3 0h6"/></svg>'
			},
			{
				name: 'egg-fried',
				title: 'Egg Fried',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="11.5" cy="12.5" r="3.5"/><path d="M3 8c0-3.5 2.5-6 6.5-6 5 0 4.83 3 7.5 5s5 2 5 6c0 4.5-2.5 6.5-7 6.5-2.5 0-2.5 2.5-6 2.5s-7-2-7-5.5c0-3 1.5-3 1.5-5C3.5 10 3 9 3 8"/></svg>'
			},
			{
				name: 'egg-off',
				title: 'Egg Off',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m2 2 20 20m-2-7.653V14c0-6-4-12-8-12-1.078 0-2.157.436-3.157 1.19M6.206 6.21C4.871 8.4 4 11.2 4 14a8 8 0 0 0 14.568 4.568"/></svg>'
			},
			{
				name: 'egg',
				title: 'Egg',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 2C8 2 4 8 4 14a8 8 0 0 0 16 0c0-6-4-12-8-12"/></svg>'
			},
			{
				name: 'elephant-face',
				title: 'Elephant Face',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M11 10a4 4 0 0 0 4 4 2 2 0 0 1 0 4 7 7 0 0 1-2.8-.6c-.5-.2-.9 0-1 .6l-.1 1-.9.9c-.4.4-.3.9.2 1.2 1.4.6 3 .9 4.6.9 3.3 0 6-2.7 6-6V8a4 4 0 0 0-4-4h-4.6c-.7-1.2-2-2-3.4-2H6C4.3 2 3 3.3 3 5v1a7 7 0 0 0 7 7h2.4m3.1-3H15"/></svg>'
			},
			{
				name: 'elephant',
				title: 'Elephant',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M14.5 12H14c-2.8 0-5-2.2-5-5V5a2 2 0 0 1 2-2h2c1.5 0 2.8.8 3.4 2H19c1.7 0 3 1.3 3 3v10m-4-8h.01"/><path d="M14 10a4 4 0 0 0 4 4 4 4 0 0 1 4 4 2 2 0 0 1-4 0m-8-2v5"/><path d="M18 14a4 4 0 0 0-4 4v3H6v-2.6c0-1.1-.8-2.3-1.7-3C2.9 14.3 2 12.8 2 11c0-3.3 3.1-6 7-6m-7 6v7"/></svg>'
			},
			{
				name: 'ellipsis-vertical',
				title: 'Ellipsis Vertical',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></svg>'
			},
			{
				name: 'ellipsis',
				title: 'Ellipsis',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>'
			},
			{
				name: 'equal-approximately',
				title: 'Equal Approximately',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M5 15a6.5 6.5 0 0 1 7 0 6.5 6.5 0 0 0 7 0M5 9a6.5 6.5 0 0 1 7 0 6.5 6.5 0 0 0 7 0"/></svg>'
			},
			{
				name: 'equal-not',
				title: 'Equal Not',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M5 9h14M5 15h14m0-10L5 19"/></svg>'
			},
			{
				name: 'equal',
				title: 'Equal',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M5 9h14M5 15h14"/></svg>'
			},
			{
				name: 'eraser',
				title: 'Eraser',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M21 21H8a2 2 0 0 1-1.42-.587l-3.994-3.999a2 2 0 0 1 0-2.828l10-10a2 2 0 0 1 2.829 0l5.999 6a2 2 0 0 1 0 2.828L12.834 21m-7.752-9.91 8.828 8.828"/></svg>'
			},
			{
				name: 'escalator-arrow-down-left',
				title: 'Escalator Arrow Down Left',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="9" cy="3" r="1"/><path d="M9 7v3m8-7c-.6 0-1.3.3-1.7.7L6 13H4a2 2 0 0 0 0 4h3c.6 0 1.3-.3 1.7-.7L18 7h2a2 2 0 0 0 0-4Zm5 10-9 9m0-4v4h4"/></svg>'
			},
			{
				name: 'escalator-arrow-up-right',
				title: 'Escalator Arrow Up Right',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="9" cy="3" r="1"/><path d="M9 7v3m8-7c-.6 0-1.3.3-1.7.7L6 13H4a2 2 0 0 0 0 4h3c.6 0 1.3-.3 1.7-.7L18 7h2a2 2 0 0 0 0-4Zm5 10-9 9m5-9h4v4"/></svg>'
			},
			{
				name: 'ethernet-port',
				title: 'Ethernet Port',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m15 20 3-3h2a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h2l3 3zM6 8v1m4-1v1m4-1v1m4-1v1"/></svg>'
			},
			{
				name: 'euro-circle',
				title: 'Euro Circle',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M6 12h7m3-3a5 5 0 1 0 0 6"/></svg>'
			},
			{
				name: 'euro-square',
				title: 'Euro Square',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 12h7m2-4a5.14 5.14 0 0 0-8 4 4.95 4.95 0 0 0 8 4"/></svg>'
			},
			{
				name: 'euro',
				title: 'Euro',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M4 10h12M4 14h9m6-8a7.7 7.7 0 0 0-5.2-2A7.9 7.9 0 0 0 6 12c0 4.4 3.5 8 7.8 8 2 0 3.8-.8 5.2-2"/></svg>'
			},
			{
				name: 'ev-charger',
				title: 'Ev Charger',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 4 0v-6.998a2 2 0 0 0-.59-1.42L18 5m-4 16V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v16m-1 0h13M3 7h11"/><path d="m9 11-2 3h3l-2 3"/></svg>'
			},
			{
				name: 'expand',
				title: 'Expand',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m15 15 6 6M15 9l6-6m0 13v5h-5m5-13V3h-5M3 16v5h5m-5 0 6-6M3 8V3h5m1 6L3 3"/></svg>'
			},
			{
				name: 'external-link',
				title: 'External Link',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M15 3h6v6m-11 5L21 3m-3 10v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>'
			},
			{
				name: 'eye-closed',
				title: 'Eye Closed',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m15 18-.722-3.25M2 8a10.645 10.645 0 0 0 20 0m-2 7-1.726-2.05M4 15l1.726-2.05M9 18l.722-3.25"/></svg>'
			},
			{
				name: 'eye-off',
				title: 'Eye Off',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.8 10.8 0 0 1-1.444 2.49m-6.41-.679a3 3 0 0 1-4.242-4.242"/><path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143M2 2l20 20"/></svg>'
			},
			{
				name: 'eye',
				title: 'Eye',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/></svg>'
			},
			{
				name: 'face-alien',
				title: 'Face Alien',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M22 12a7.85 7.85 0 0 1-3.7 6.6l-4 2.7a3.9 3.9 0 0 1-4.5 0l-4-2.7A7.57 7.57 0 0 1 2 12a10 10 0 0 1 20 0"/><path d="M10.7 11.3c-1.4-1.3-3.3-1.7-4.2-.8s-.5 2.8.8 4.2c1.4 1.4 3.2 1.8 4.2.8.9-.9.5-2.8-.8-4.2"/><path d="M17.5 10.5c-.9-.9-2.8-.5-4.2.8-1.4 1.4-1.8 3.2-.8 4.2.9.9 2.8.5 4.2-.8 1.3-1.4 1.7-3.3.8-4.2"/></svg>'
			},
			{
				name: 'facebook',
				title: 'Facebook',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>'
			},
			{
				name: 'factory',
				title: 'Factory',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 16h.01M16 16h.01M3 19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.5a.5.5 0 0 0-.769-.422l-4.462 2.844A.5.5 0 0 1 15 10.5v-2a.5.5 0 0 0-.769-.422L9.77 10.922A.5.5 0 0 1 9 10.5V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2zm5-3h.01"/></svg>'
			},
			{
				name: 'fan-handheld',
				title: 'Fan Handheld',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M3 4c0-.6.4-1 1-1a17.8 17.8 0 0 1 16.9 16.9c0 .6-.4 1-1 1.1H5c-1.1.1-2-.8-2-1.9Zm6.9.4L3 19M15.7 8.3 3.6 20.4m16-6.3L5 21"/></svg>'
			},
			{
				name: 'fan',
				title: 'Fan',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10.827 16.379a6.082 6.082 0 0 1-8.618-7.002l5.412 1.45a6.082 6.082 0 0 1 7.002-8.618l-1.45 5.412a6.082 6.082 0 0 1 8.618 7.002l-5.412-1.45a6.082 6.082 0 0 1-7.002 8.618zM12 12v.01"/></svg>'
			},
			{
				name: 'farm',
				title: 'Farm',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M8 14V4.5a2.5 2.5 0 0 0-5 0V14m5-6 6-5 8 6m-2-5v10m-8-4h4v4h-4zM2 14h20M2 22l5-8m0 8 5-8m10 8H12l5-8m-2 4h7"/></svg>'
			},
			{
				name: 'fast-forward',
				title: 'Fast Forward',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 6a2 2 0 0 1 3.414-1.414l6 6a2 2 0 0 1 0 2.828l-6 6A2 2 0 0 1 12 18z"/><path d="M2 6a2 2 0 0 1 3.414-1.414l6 6a2 2 0 0 1 0 2.828l-6 6A2 2 0 0 1 2 18z"/></svg>'
			},
			{
				name: 'faucet',
				title: 'Faucet',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10.22 4.9 5.4 6H5a2 2 0 0 1 0-4h.4l4.86 1"/><circle cx="12" cy="4" r="2"/><path d="m13.78 4.9 4.8 1h.4a2 2 0 0 0 0-4h-.4l-4.92 1M12 6v3m6 1h4v6h-4zm4-1v8"/><path d="M18 11h-2.6a3.87 3.87 0 0 0-6.8 0H7c-2.8 0-5 2.2-5 5v1h4v-1c0-.6.4-1 1-1h1.6a3.87 3.87 0 0 0 6.8 0H18"/><path d="M3.5 17S2 19 2 20a2 2 0 0 0 4 0c0-1-1.5-3-1.5-3"/></svg>'
			},
			{
				name: 'feather-plus',
				title: 'Feather Plus',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M2 7h6M5 4v6m.1 7H14l8-8.2c-2.3-2.3-6.1-2.3-8.5 0L2.1 20M18 13H9.2"/></svg>'
			},
			{
				name: 'feather-square',
				title: 'Feather Square',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10.3 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-8.8"/><path d="m7 12 8.5-8.5c2-2 4.5-2 6.5 0L16.5 9H10"/></svg>'
			},
			{
				name: 'feather-text',
				title: 'Feather Text',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M17.9 8H9.2m-4.1 4H14l8-8.2c-2.3-2.3-6.1-2.3-8.5 0L2 15m0 4h8m11-2v1c0 1 1 1.5 1 2.5 0 .8-.7 1.5-1.5 1.5h-5c-.8 0-1.5-.7-1.5-1.5 0-1 1-1.5 1-2.5v-1m-1 0h8"/></svg>'
			},
			{
				name: 'feather',
				title: 'Feather',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12.67 19a2 2 0 0 0 1.416-.588l6.154-6.172a6 6 0 0 0-8.49-8.49L5.586 9.914A2 2 0 0 0 5 11.328V18a1 1 0 0 0 1 1zM16 8 2 22m15.5-7H9"/></svg>'
			},
			{
				name: 'fence',
				title: 'Fence',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M4 3 2 5v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Zm2 5h4M6 18h4m2-15-2 2v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Zm2 5h4m-4 10h4m2-15-2 2v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z"/></svg>'
			},
			{
				name: 'ferris-wheel',
				title: 'Ferris Wheel',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="2"/><path d="M12 2v4m-5.2 9-3.5 2M20.7 7l-3.5 2M6.8 9 3.3 7m17.4 10-3.5-2M9 22l3-8 3 8m-7 0h8"/><path d="M18 18.7a9 9 0 1 0-12 0"/></svg>'
			},
			{
				name: 'figma',
				title: 'Figma',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5M12 2h3.5a3.5 3.5 0 1 1 0 7H12z"/><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0m-7 7A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0m0-7A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5"/></svg>'
			},
			{
				name: 'file-archive',
				title: 'File Archive',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 12v-1m0 7v-2m0-9V6m4-4v4a2 2 0 0 0 2 2h4"/><path d="M15.5 22H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v16a2 2 0 0 0 .274 1.01"/><circle cx="10" cy="20" r="2"/></svg>'
			},
			{
				name: 'file-audio-2',
				title: 'File Audio 2',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v2"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><circle cx="3" cy="17" r="1"/><path d="M2 17v-3a4 4 0 0 1 8 0v3"/><circle cx="9" cy="17" r="1"/></svg>'
			},
			{
				name: 'file-audio',
				title: 'File Audio',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M17.5 22h.5a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3"/><path d="M14 2v4a2 2 0 0 0 2 2h4M2 19a2 2 0 1 1 4 0v1a2 2 0 1 1-4 0v-4a6 6 0 0 1 12 0v4a2 2 0 1 1-4 0v-1a2 2 0 1 1 4 0"/></svg>'
			},
			{
				name: 'file-axis-3d',
				title: 'File Axis 3d',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4M8 18l4-4m-4-4v8h8"/></svg>'
			},
			{
				name: 'file-badge-2',
				title: 'File Badge 2',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m13.69 12.479 1.29 4.88a.5.5 0 0 1-.697.591l-1.844-.849a1 1 0 0 0-.88.001l-1.846.85a.5.5 0 0 1-.693-.593l1.29-4.88"/><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z"/><circle cx="12" cy="10" r="3"/></svg>'
			},
			{
				name: 'file-badge',
				title: 'File Badge',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3.072"/><path d="M14 2v4a2 2 0 0 0 2 2h4M6.69 16.479l1.29 4.88a.5.5 0 0 1-.698.591l-1.843-.849a1 1 0 0 0-.88.001l-1.846.85a.5.5 0 0 1-.693-.593l1.29-4.88"/><circle cx="5" cy="14" r="3"/></svg>'
			},
			{
				name: 'file-box',
				title: 'File Box',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M14.5 22H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"/><path d="M14 2v4a2 2 0 0 0 2 2h4M3 13.1a2 2 0 0 0-1 1.76v3.24a2 2 0 0 0 .97 1.78L6 21.7a2 2 0 0 0 2.03.01L11 19.9a2 2 0 0 0 1-1.76V14.9a2 2 0 0 0-.97-1.78L8 11.3a2 2 0 0 0-2.03-.01ZM7 17v5"/><path d="M11.7 14.2 7 17l-4.7-2.8"/></svg>'
			},
			{
				name: 'file-chart-column-increasing',
				title: 'File Chart Column Increasing',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4M8 18v-2m4 2v-4m4 4v-6"/></svg>'
			},
			{
				name: 'file-chart-column',
				title: 'File Chart Column',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4M8 18v-1m4 1v-6m4 6v-3"/></svg>'
			},
			{
				name: 'file-chart-line',
				title: 'File Chart Line',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4m-4 5-3.5 3.5-2-2L8 17"/></svg>'
			},
			{
				name: 'file-chart-pie',
				title: 'File Chart Pie',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M16 22h2a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3.5m.017 4.012a6 6 0 1 0 8.466 8.475"/><path d="M9 16a1 1 0 0 1-1-1v-4c0-.552.45-1.008.995-.917a6 6 0 0 1 4.922 4.922c.091.544-.365.995-.917.995z"/></svg>'
			},
			{
				name: 'file-check-2',
				title: 'File Check 2',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"/><path d="M14 2v4a2 2 0 0 0 2 2h4M3 15l2 2 4-4"/></svg>'
			},
			{
				name: 'file-check',
				title: 'File Check',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4M9 15l2 2 4-4"/></svg>'
			},
			{
				name: 'file-clock',
				title: 'File Clock',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M16 22h2a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3m4 7v2.2l1.6 1"/><circle cx="8" cy="16" r="6"/></svg>'
			},
			{
				name: 'file-code-2',
				title: 'File Code 2',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"/><path d="M14 2v4a2 2 0 0 0 2 2h4M5 12l-3 3 3 3m4 0 3-3-3-3"/></svg>'
			},
			{
				name: 'file-code',
				title: 'File Code',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 12.5 8 15l2 2.5m4-5 2 2.5-2 2.5M14 2v4a2 2 0 0 0 2 2h4"/><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z"/></svg>'
			},
			{
				name: 'file-cog',
				title: 'File Cog',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M14 2v4a2 2 0 0 0 2 2h4M2.305 15.53l.923-.382m0-2.296-.924-.383"/><path d="M4.677 21.5a2 2 0 0 0 1.313.5H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v2.5m.852 4.728-.383-.923m.383 6.467-.383.924m2.679-6.468.383-.923m-.001 7.391-.382-.924m1.624-3.92.923-.383m-.923 2.679.923.383"/><circle cx="6" cy="14" r="3"/></svg>'
			},
			{
				name: 'file-diff',
				title: 'File Diff',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Zm-6 8h6m-3 3V7M9 17h6"/></svg>'
			},
			{
				name: 'file-digit',
				title: 'File Digit',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><rect width="4" height="6" x="2" y="12" rx="2"/><path d="M10 12h2v6m-2 0h4"/></svg>'
			},
			{
				name: 'file-down',
				title: 'File Down',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4m-8 10v-6m-3 3 3 3 3-3"/></svg>'
			},
			{
				name: 'file-heart',
				title: 'File Heart',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M14 2v4a2 2 0 0 0 2 2h4M2.62 13.8A2.25 2.25 0 1 1 6 10.836a2.25 2.25 0 1 1 3.38 2.966l-2.626 2.856a.998.998 0 0 1-1.507 0z"/><path d="M4 6.005V4a2 2 0 0 1 2-2h9l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-1.9-1.376"/></svg>'
			},
			{
				name: 'file-image',
				title: 'File Image',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><circle cx="10" cy="12" r="2"/><path d="m20 17-1.296-1.296a2.41 2.41 0 0 0-3.408 0L9 22"/></svg>'
			},
			{
				name: 'file-input',
				title: 'File Input',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"/><path d="M14 2v4a2 2 0 0 0 2 2h4M2 15h10m-3 3 3-3-3-3"/></svg>'
			},
			{
				name: 'file-json-2',
				title: 'File Json 2',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"/><path d="M14 2v4a2 2 0 0 0 2 2h4M4 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1m4 0a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1"/></svg>'
			},
			{
				name: 'file-json',
				title: 'File Json',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4m-10 4a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1m4 0a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1"/></svg>'
			},
			{
				name: 'file-key-2',
				title: 'File Key 2',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v6"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><circle cx="4" cy="16" r="2"/><path d="m10 10-4.5 4.5M9 11l1 1"/></svg>'
			},
			{
				name: 'file-key',
				title: 'File Key',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><circle cx="10" cy="16" r="2"/><path d="m16 10-4.5 4.5M15 11l1 1"/></svg>'
			},
			{
				name: 'file-lock-2',
				title: 'File Lock 2',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v1"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><rect width="8" height="5" x="2" y="13" rx="1"/><path d="M8 13v-2a2 2 0 1 0-4 0v2"/></svg>'
			},
			{
				name: 'file-lock',
				title: 'File Lock',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><rect width="8" height="6" x="8" y="12" rx="1"/><path d="M10 12v-2a2 2 0 1 1 4 0v2"/></svg>'
			},
			{
				name: 'file-minus-2',
				title: 'File Minus 2',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"/><path d="M14 2v4a2 2 0 0 0 2 2h4M3 15h6"/></svg>'
			},
			{
				name: 'file-minus',
				title: 'File Minus',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4M9 15h6"/></svg>'
			},
			{
				name: 'file-music',
				title: 'File Music',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10.5 22H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v8.4"/><path d="M8 18v-7.7L16 9v7"/><circle cx="14" cy="16" r="2"/><circle cx="6" cy="18" r="2"/></svg>'
			},
			{
				name: 'file-output',
				title: 'File Output',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M14 2v4a2 2 0 0 0 2 2h4M4 7V4a2 2 0 0 1 2-2 2 2 0 0 0-2 2"/><path d="M4.063 20.999a2 2 0 0 0 2 1L18 22a2 2 0 0 0 2-2V7l-5-5H6m-1 9-3 3"/><path d="m5 17-3-3h10"/></svg>'
			},
			{
				name: 'file-pen-line',
				title: 'File Pen Line',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m18 5-2.414-2.414A2 2 0 0 0 14.172 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2"/><path d="M21.378 12.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506zM8 18h1"/></svg>'
			},
			{
				name: 'file-pen',
				title: 'File Pen',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12.5 22H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v9.5"/><path d="M14 2v4a2 2 0 0 0 2 2h4m-6.622 7.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"/></svg>'
			},
			{
				name: 'file-play',
				title: 'File Play',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z"/><path d="M15.033 13.44a.647.647 0 0 1 0 1.12l-4.065 2.352a.645.645 0 0 1-.968-.56v-4.704a.645.645 0 0 1 .967-.56z"/></svg>'
			},
			{
				name: 'file-plus-2',
				title: 'File Plus 2',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"/><path d="M14 2v4a2 2 0 0 0 2 2h4M3 15h6m-3-3v6"/></svg>'
			},
			{
				name: 'file-plus',
				title: 'File Plus',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4M9 15h6m-3 3v-6"/></svg>'
			},
			{
				name: 'file-question-mark',
				title: 'File Question Mark',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 17h.01M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z"/><path d="M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3"/></svg>'
			},
			{
				name: 'file-scan',
				title: 'File Scan',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M20 10V7l-5-5H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h4"/><path d="M14 2v4a2 2 0 0 0 2 2h4m-4 6a2 2 0 0 0-2 2m6-2a2 2 0 0 1 2 2m-2 6a2 2 0 0 0 2-2m-6 2a2 2 0 0 1-2-2"/></svg>'
			},
			{
				name: 'file-search-2',
				title: 'File Search 2',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><circle cx="11.5" cy="14.5" r="2.5"/><path d="M13.3 16.3 15 18"/></svg>'
			},
			{
				name: 'file-search',
				title: 'File Search',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M4.268 21a2 2 0 0 0 1.727 1H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3m5 11-1.5-1.5"/><circle cx="5" cy="14" r="3"/></svg>'
			},
			{
				name: 'file-sliders',
				title: 'File Sliders',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4M8 12h8m-6-1v2m-2 4h8m-2-1v2"/></svg>'
			},
			{
				name: 'file-spreadsheet',
				title: 'File Spreadsheet',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4M8 13h2m4 0h2m-8 4h2m4 0h2"/></svg>'
			},
			{
				name: 'file-stack',
				title: 'File Stack',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M11 21a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1m12 4a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1m12-1a2 2 0 0 0-.586-1.414l-2-2A2 2 0 0 0 17 2h-3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1z"/></svg>'
			},
			{
				name: 'file-symlink',
				title: 'File Symlink',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m10 18 3-3-3-3m4-10v4a2 2 0 0 0 2 2h4"/><path d="M4 11V4a2 2 0 0 1 2-2h9l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h7"/></svg>'
			},
			{
				name: 'file-terminal',
				title: 'File Terminal',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4M8 16l2-2-2-2m4 6h4"/></svg>'
			},
			{
				name: 'file-text',
				title: 'File Text',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4M10 9H8m8 4H8m8 4H8"/></svg>'
			},
			{
				name: 'file-type-2',
				title: 'File Type 2',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"/><path d="M14 2v4a2 2 0 0 0 2 2h4M2 13v-1h6v1m-3-1v6m-1 0h2"/></svg>'
			},
			{
				name: 'file-type',
				title: 'File Type',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4M9 13v-1h6v1m-3-1v6m-1 0h2"/></svg>'
			},
			{
				name: 'file-up',
				title: 'File Up',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4m-8 4v6m3-3-3-3-3 3"/></svg>'
			},
			{
				name: 'file-user',
				title: 'File User',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M14 2v4a2 2 0 0 0 2 2h4m-5 10a3 3 0 1 0-6 0"/><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z"/><circle cx="12" cy="13" r="2"/></svg>'
			},
			{
				name: 'file-video-camera',
				title: 'File Video Camera',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><rect width="8" height="6" x="2" y="12" rx="1"/><path d="m10 13.843 3.033-1.755a.645.645 0 0 1 .967.56v4.704a.645.645 0 0 1-.967.56L10 16.157"/></svg>'
			},
			{
				name: 'file-volume-2',
				title: 'File Volume 2',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4M8 15h.01m3.49-1.5a2.5 2.5 0 0 1 0 3M15 12a5 5 0 0 1 0 6"/></svg>'
			},
			{
				name: 'file-volume',
				title: 'File Volume',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M11 11a5 5 0 0 1 0 6m3-15v4a2 2 0 0 0 2 2h4"/><path d="M4 6.765V4a2 2 0 0 1 2-2h9l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-.93-.23"/><path d="M7 10.51a.5.5 0 0 0-.826-.38l-1.893 1.628A1 1 0 0 1 3.63 12H2.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h1.129a1 1 0 0 1 .652.242l1.893 1.63a.5.5 0 0 0 .826-.38z"/></svg>'
			},
			{
				name: 'file-warning',
				title: 'File Warning',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Zm-3 7v4m0 4h.01"/></svg>'
			},
			{
				name: 'file-x-2',
				title: 'File X 2',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"/><path d="M14 2v4a2 2 0 0 0 2 2h4M8 12.5l-5 5m0-5 5 5"/></svg>'
			},
			{
				name: 'file-x',
				title: 'File X',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4m-5.5 4.5-5 5m0-5 5 5"/></svg>'
			},
			{
				name: 'file',
				title: 'File',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/></svg>'
			},
			{
				name: 'files',
				title: 'Files',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M15 2a2 2 0 0 1 1.414.586l4 4A2 2 0 0 1 21 8v7a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z"/><path d="M15 2v4a2 2 0 0 0 2 2h4M5 7a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h8a2 2 0 0 0 1.732-1"/></svg>'
			},
			{
				name: 'film',
				title: 'Film',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 3v18M3 7.5h4M3 12h18M3 16.5h4M17 3v18m0-13.5h4m-4 9h4"/></svg>'
			},
			{
				name: 'fingerprint',
				title: 'Fingerprint',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4M14 13.12c0 2.38 0 6.38-1 8.88m4.29-.98c.12-.6.43-2.3.5-3.02M2 12a10 10 0 0 1 18-6M2 16h.01m19.79 0c.2-2 .131-5.354 0-6"/><path d="M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2m2.31 12c.21-.66.45-1.32.57-2M9 6.8a6 6 0 0 1 9 5.2v2"/></svg>'
			},
			{
				name: 'fire-extinguisher',
				title: 'Fire Extinguisher',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M15 6.5V3a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3.5M9 18h8m1-15h-3"/><path d="M11 3a6 6 0 0 0-6 6v11m0-7h4m8-3a4 4 0 0 0-8 0v10a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2Z"/></svg>'
			},
			{
				name: 'fish-off',
				title: 'Fish Off',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M18 12.47v.03m0-.5v.47m-.475 5.056A6.7 6.7 0 0 1 15 18c-3.56 0-7.56-2.53-8.5-6 .348-1.28 1.114-2.433 2.121-3.38m3.444-2.088A8.8 8.8 0 0 1 15 6c3.56 0 6.06 2.54 7 6-.309 1.14-.786 2.177-1.413 3.058"/><path d="M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33m7.48-4.372A9.8 9.8 0 0 1 16 6.07m0 11.86a9.8 9.8 0 0 1-1.728-3.618"/><path d="m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98M8.53 3h5.27a2 2 0 0 1 1.98 1.67l.23 1.4M2 2l20 20"/></svg>'
			},
			{
				name: 'fish-symbol',
				title: 'Fish Symbol',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M2 16s9-15 20-4C11 23 2 8 2 8"/></svg>'
			},
			{
				name: 'fish',
				title: 'Fish',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M6.5 12c.94-3.46 4.94-6 8.5-6s6.06 2.54 7 6c-.94 3.47-3.44 6-7 6s-7.56-2.53-8.5-6M18 12v.5"/><path d="M16 17.93a9.77 9.77 0 0 1 0-11.86m-9 4.6C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33"/><path d="M10.46 7.26C10.2 5.88 9.17 4.24 8 3h5.8a2 2 0 0 1 1.98 1.67l.23 1.4m0 11.86-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98"/></svg>'
			},
			{
				name: 'flag-off',
				title: 'Flag Off',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528M2 2l20 20M4 22V4m3.656-2H8c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10.347"/></svg>'
			},
			{
				name: 'flag-triangle-left',
				title: 'Flag Triangle Left',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M18 22V2.8a.8.8 0 0 0-1.17-.71L5.45 7.78a.8.8 0 0 0 0 1.44L18 15.5"/></svg>'
			},
			{
				name: 'flag-triangle-right',
				title: 'Flag Triangle Right',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M6 22V2.8a.8.8 0 0 1 1.17-.71l11.38 5.69a.8.8 0 0 1 0 1.44L6 15.5"/></svg>'
			},
			{
				name: 'flag',
				title: 'Flag',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528"/></svg>'
			},
			{
				name: 'flame-kindling',
				title: 'Flame Kindling',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 2c1 3 2.5 3.5 3.5 4.5A5 5 0 0 1 17 10a5 5 0 1 1-10 0c0-.3 0-.6.1-.9a2 2 0 1 0 3.3-2C8 4.5 11 2 12 2M5 22l14-4M5 18l14 4"/></svg>'
			},
			{
				name: 'flame',
				title: 'Flame',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4"/></svg>'
			},
			{
				name: 'flashlight-off',
				title: 'Flashlight Off',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M16 16v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V10c0-2-2-2-2-4m1-4h11v4c0 2-2 2-2 4v1m-5-5h7M2 2l20 20"/></svg>'
			},
			{
				name: 'flashlight',
				title: 'Flashlight',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M18 6c0 2-2 2-2 4v10a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V10c0-2-2-2-2-4V2h12zM6 6h12m-6 6"/></svg>'
			},
			{
				name: 'flask-conical-off',
				title: 'Flask Conical Off',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 2v2.343M14 2v6.343M2 2l20 20m-2-2a2 2 0 0 1-2 2H6a2 2 0 0 1-1.755-2.96l5.227-9.563M6.453 15H15M8.5 2h7"/></svg>'
			},
			{
				name: 'flask-conical',
				title: 'Flask Conical',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2M6.453 15h11.094M8.5 2h7"/></svg>'
			},
			{
				name: 'flask-round',
				title: 'Flask Round',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 2v6.292a7 7 0 1 0 4 0V2M5 15h14M8.5 2h7"/></svg>'
			},
			{
				name: 'flip-horizontal-2',
				title: 'Flip Horizontal 2',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m3 7 5 5-5 5zm18 0-5 5 5 5zm-9 13v2m0-8v2m0-8v2m0-8v2"/></svg>'
			},
			{
				name: 'flip-horizontal',
				title: 'Flip Horizontal',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M8 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h3m8-18h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-3m-4-1v2m0-8v2m0-8v2m0-8v2"/></svg>'
			},
			{
				name: 'flip-vertical-2',
				title: 'Flip Vertical 2',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m17 3-5 5-5-5zm0 18-5-5-5 5zM4 12H2m8 0H8m8 0h-2m8 0h-2"/></svg>'
			},
			{
				name: 'flip-vertical',
				title: 'Flip Vertical',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M21 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3m18 8v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3m1-4H2m8 0H8m8 0h-2m8 0h-2"/></svg>'
			},
			{
				name: 'flippers',
				title: 'Flippers',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M20 17c0-4 2-7 2-13.5 0-.3-.2-.5-.5-.5C19 3 17 4 17 4s-2-1-4.5-1h-1C9 3 7 4 7 4S5 3 2.5 3c-.3 0-.5.2-.5.5C2 10 4 13 4 17"/><path d="M12 3v.5C12 10 10 13 10 17"/><rect width="6" height="7" x="4" y="14" rx="3"/><path d="M12 3.5C12 10 14 13 14 17"/><rect width="6" height="7" x="14" y="14" rx="3"/><path d="M7 4v6m10-6v6"/></svg>'
			},
			{
				name: 'floor-plan',
				title: 'Floor Plan',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-5M9 3v7m12 0h-7M3 15h9"/></svg>'
			},
			{
				name: 'floppy-disk-2',
				title: 'Floppy Disk 2',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M5 21a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2Z"/><path d="M7 3h7v5H7z"/><circle cx="12" cy="14" r="2"/></svg>'
			},
			{
				name: 'floppy-disk-rear',
				title: 'Floppy Disk Rear',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M5 21a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2Z"/><circle cx="12" cy="12" r="2"/><path d="M12 21v-3"/></svg>'
			},
			{
				name: 'floppy-disk',
				title: 'Floppy Disk',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M7 3v5h8"/><path d="M5 21a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2Z"/><path d="M17 21v-8H7v8"/></svg>'
			},
			{
				name: 'floppy-disks-2',
				title: 'Floppy Disks 2',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M8 18a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h10l4 4v10a2 2 0 0 1-2 2Z"/><path d="M10 2h7v4h-7z"/><circle cx="14" cy="12" r="2"/><path d="M18 22H4a2 2 0 0 1-2-2V6"/></svg>'
			},
			{
				name: 'floppy-disks-rear',
				title: 'Floppy Disks Rear',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M8 18a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h10l4 4v10a2 2 0 0 1-2 2Z"/><circle cx="14" cy="10" r="2"/><path d="M14 18v-2m4 6H4a2 2 0 0 1-2-2V6"/></svg>'
			},
			{
				name: 'floppy-disks',
				title: 'Floppy Disks',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M6 4a2 2 0 0 1 2-2h10l4 4v10.2a2 2 0 0 1-2 1.8H8a2 2 0 0 1-2-2Z"/><path d="M10 2v4h6m2 12v-7h-8v7"/><path d="M18 22H4a2 2 0 0 1-2-2V6"/></svg>'
			},
			{
				name: 'flower-2',
				title: 'Flower 2',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1"/><circle cx="12" cy="8" r="2"/><path d="M12 10v12m0 0c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5m0 0c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5"/></svg>'
			},
			{
				name: 'flower-lotus',
				title: 'Flower Lotus',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 20c0-5.5-4.5-10-10-10 0 5.5 4.5 10 10 10"/><path d="M9.7 8.3c-1.8-2-3.8-3.1-3.8-3.1s-.8 2.5-.5 5.4"/><path d="M15 12.9V12c0-4.4-3-8-3-8s-3 3.6-3 8v.9"/><path d="M18.6 10.6c.3-2.9-.5-5.4-.5-5.4s-2 1-3.8 3.1"/><path d="M12 20c5.5 0 10-4.5 10-10-5.5 0-10 4.5-10 10"/></svg>'
			},
			{
				name: 'flower-pot',
				title: 'Flower Pot',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M9 8h1m2-3v1m3 2h-1"/><circle cx="12" cy="8" r="2"/><path d="M12 11a3 3 0 1 1-3-3 3 3 0 1 1 3-3 3 3 0 1 1 3 3 3 3 0 1 1-3 3m0-1v8m3 0-1 4h-4l-1-4m-1 0h8"/></svg>'
			},
			{
				name: 'flower-rose-single',
				title: 'Flower Rose Single',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M18 9.52a4.04 4.04 0 1 1 2-3.47"/><circle cx="17" cy="7.8" r="2"/><path d="m14 2.5-2 1.3a6 6 0 1 0 6 10.4l2-1.2a4 4 0 0 0-4-6.95"/><path d="M9.77 12C4 15 2 22 2 22"/><path d="M13 20s-5 3-9.2-2c0 0 5.2-3 9.2 2"/></svg>'
			},
			{
				name: 'flower-rose',
				title: 'Flower Rose',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M14 6a4 4 0 1 1-2-3.46"/><circle cx="12" cy="6" r="2"/><path d="M10 6a4 4 0 0 1 8 0v2A6 6 0 0 1 6 8V6m6 8v8m0 0c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5m0 0c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5"/></svg>'
			},
			{
				name: 'flower-stem',
				title: 'Flower Stem',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M9 8h1m2-3v1m3 2h-1"/><circle cx="12" cy="8" r="2"/><path d="M12 11a3 3 0 1 1-3-3 3 3 0 1 1 3-3 3 3 0 1 1 3 3 3 3 0 1 1-3 3m0-1v12m0 0c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5m0 0c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5"/></svg>'
			},
			{
				name: 'flower-tulip',
				title: 'Flower Tulip',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 7c-2-3.2-6-4-6-4v5c0 3.3 2.7 6 6 6v8"/><path d="M9.5 4.5C10 3 12 2 12 2s2 1 2.5 2.5"/><path d="M12 14c3.3 0 6-2.7 6-6V3c-6.2.9-10.8 11-6 11m0 8c-4.2 0-7-1.7-7-5 4.2 0 7 1.7 7 5m0 0c4.2 0 7-1.7 7-5-4.2 0-7 1.7-7 5"/></svg>'
			},
			{
				name: 'flower',
				title: 'Flower',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M12 16.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 1 1 12 7.5a4.5 4.5 0 1 1 4.5 4.5 4.5 4.5 0 1 1-4.5 4.5m0-9V9m-4.5 3H9m7.5 0H15m-3 4.5V15M8 8l1.88 1.88m4.24 0L16 8m-8 8 1.88-1.88m4.24 0L16 16"/></svg>'
			},
			{
				name: 'focus',
				title: 'Focus',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M3 7V5a2 2 0 0 1 2-2h2m10 0h2a2 2 0 0 1 2 2v2m0 10v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2"/></svg>'
			},
			{
				name: 'fold-horizontal',
				title: 'Fold Horizontal',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M2 12h6m14 0h-6M12 2v2m0 4v2m0 4v2m0 4v2m7-13-3 3 3 3M5 15l3-3-3-3"/></svg>'
			},
			{
				name: 'fold-vertical',
				title: 'Fold Vertical',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 22v-6m0-8V2M4 12H2m8 0H8m8 0h-2m8 0h-2m-5 7-3-3-3 3m6-14-3 3-3-3"/></svg>'
			},
			{
				name: 'folder-archive',
				title: 'Folder Archive',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="15" cy="19" r="2"/><path d="M20.9 19.8A2 2 0 0 0 22 18V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h5.1m5.9-9v-1m0 7v-2"/></svg>'
			},
			{
				name: 'folder-check',
				title: 'Folder Check',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/><path d="m9 13 2 2 4-4"/></svg>'
			},
			{
				name: 'folder-clock',
				title: 'Folder Clock',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M16 14v2.2l1.6 1M7 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2"/><circle cx="16" cy="16" r="6"/></svg>'
			},
			{
				name: 'folder-closed',
				title: 'Folder Closed',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2ZM2 10h20"/></svg>'
			},
			{
				name: 'folder-code',
				title: 'Folder Code',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 10.5 8 13l2 2.5m4-5 2 2.5-2 2.5"/><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2z"/></svg>'
			},
			{
				name: 'folder-cog',
				title: 'Folder Cog',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10.3 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.98a2 2 0 0 1 1.69.9l.66 1.2A2 2 0 0 0 12 6h8a2 2 0 0 1 2 2v3.3m-7.695 8.23.923-.382m0-2.296-.923-.383m2.547-1.241-.383-.923m.383 6.467-.383.924m2.679-6.468.383-.923m-.001 7.391-.382-.924m1.624-3.92.924-.383m-.924 2.679.924.383"/><circle cx="18" cy="18" r="3"/></svg>'
			},
			{
				name: 'folder-dot',
				title: 'Folder Dot',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2"/><circle cx="12" cy="13" r="1"/></svg>'
			},
			{
				name: 'folder-down',
				title: 'Folder Down',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Zm-8-10v6"/><path d="m15 13-3 3-3-3"/></svg>'
			},
			{
				name: 'folder-git-2',
				title: 'Folder Git 2',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5"/><circle cx="13" cy="12" r="2"/><path d="M18 19c-2.8 0-5-2.2-5-5v8"/><circle cx="20" cy="19" r="2"/></svg>'
			},
			{
				name: 'folder-git',
				title: 'Folder Git',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="13" r="2"/><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Zm-6-7h3M7 13h3"/></svg>'
			},
			{
				name: 'folder-heart',
				title: 'Folder Heart',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10.638 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v3.417"/><path d="M14.62 18.8A2.25 2.25 0 1 1 18 15.836a2.25 2.25 0 1 1 3.38 2.966l-2.626 2.856a.998.998 0 0 1-1.507 0z"/></svg>'
			},
			{
				name: 'folder-input',
				title: 'Folder Input',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M2 9V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-1m0-4h10"/><path d="m9 16 3-3-3-3"/></svg>'
			},
			{
				name: 'folder-kanban',
				title: 'Folder Kanban',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2m4-10v4m4-4v2m4-2v6"/></svg>'
			},
			{
				name: 'folder-key',
				title: 'Folder Key',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="16" cy="20" r="2"/><path d="M10 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v2m0 4-4.5 4.5M21 15l1 1"/></svg>'
			},
			{
				name: 'folder-lock',
				title: 'Folder Lock',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="8" height="5" x="14" y="17" rx="1"/><path d="M10 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v2.5"/><path d="M20 17v-2a2 2 0 1 0-4 0v2"/></svg>'
			},
			{
				name: 'folder-minus',
				title: 'Folder Minus',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M9 13h6m5 7a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/></svg>'
			},
			{
				name: 'folder-open-dot',
				title: 'Folder Open Dot',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m6 14 1.45-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.55 6a2 2 0 0 1-1.94 1.5H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H18a2 2 0 0 1 2 2v2"/><circle cx="14" cy="15" r="1"/></svg>'
			},
			{
				name: 'folder-open',
				title: 'Folder Open',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"/></svg>'
			},
			{
				name: 'folder-output',
				title: 'Folder Output',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M2 7.5V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-1.5M2 13h10"/><path d="m5 10-3 3 3 3"/></svg>'
			},
			{
				name: 'folder-pen',
				title: 'Folder Pen',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M2 11.5V5a2 2 0 0 1 2-2h3.9c.7 0 1.3.3 1.7.9l.8 1.2c.4.6 1 .9 1.7.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-9.5"/><path d="M11.378 13.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"/></svg>'
			},
			{
				name: 'folder-plus',
				title: 'Folder Plus',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 10v6m-3-3h6m5 7a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/></svg>'
			},
			{
				name: 'folder-root',
				title: 'Folder Root',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2"/><circle cx="12" cy="13" r="2"/><path d="M12 15v5"/></svg>'
			},
			{
				name: 'folder-search-2',
				title: 'Folder Search 2',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="11.5" cy="12.5" r="2.5"/><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Zm-6.7-5.7L15 16"/></svg>'
			},
			{
				name: 'folder-search',
				title: 'Folder Search',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10.7 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v4.1M21 21l-1.9-1.9"/><circle cx="17" cy="17" r="3"/></svg>'
			},
			{
				name: 'folder-symlink',
				title: 'Folder Symlink',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M2 9.35V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h7"/><path d="m8 16 3-3-3-3"/></svg>'
			},
			{
				name: 'folder-sync',
				title: 'Folder Sync',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v.5"/><path d="M12 10v4h4"/><path d="m12 14 1.535-1.605a5 5 0 0 1 8 1.5M22 22v-4h-4"/><path d="m22 18-1.535 1.605a5 5 0 0 1-8-1.5"/></svg>'
			},
			{
				name: 'folder-tree',
				title: 'Folder Tree',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M20 10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2.5a1 1 0 0 1-.8-.4l-.9-1.2A1 1 0 0 0 15 3h-2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Zm0 11a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-2.9a1 1 0 0 1-.88-.55l-.42-.85a1 1 0 0 0-.92-.6H13a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1ZM3 5a2 2 0 0 0 2 2h3"/><path d="M3 3v13a2 2 0 0 0 2 2h3"/></svg>'
			},
			{
				name: 'folder-up',
				title: 'Folder Up',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Zm-8-10v6"/><path d="m9 13 3-3 3 3"/></svg>'
			},
			{
				name: 'folder-x',
				title: 'Folder X',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2ZM9.5 10.5l5 5m0-5-5 5"/></svg>'
			},
			{
				name: 'folder',
				title: 'Folder',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/></svg>'
			},
			{
				name: 'folders',
				title: 'Folders',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M20 5a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h2.5a1.5 1.5 0 0 1 1.2.6l.6.8a1.5 1.5 0 0 0 1.2.6z"/><path d="M3 8.268a2 2 0 0 0-1 1.738V19a2 2 0 0 0 2 2h11a2 2 0 0 0 1.732-1"/></svg>'
			},
			{
				name: 'football-goal',
				title: 'Football Goal',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M15.7 2.3c-.2-.2-.9-.4-1.7-.3a4.6 4.6 0 0 0-3.7 5.7c.3.2.9.4 1.7.3a4.6 4.6 0 0 0 3.7-5.7"/><path d="M20 2v9c0 .6-.4 1-1 1H5c-.6 0-1-.4-1-1V2m10 14a4 4 0 0 0-4-4m3 4c-.6 0-1 .4-1 1v4c0 .6.4 1 1 1h2c.6 0 1-.4 1-1v-4c0-.6-.4-1-1-1Z"/></svg>'
			},
			{
				name: 'football-helmet',
				title: 'Football Helmet',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M7 14h.01M21.6 9c-1.3-4-5.1-7-9.6-7C6.5 2 2 6.5 2 12c0 2.6 1 5 3 7 1.4 1.3 3.6 1.4 4.9 0 .7-.7 1-1.6 1-2.5V13c0-1.7 1.3-3 3-3h6.8c.7 0 1-.4.9-1m.4 9H10.7"/><path d="M11 14h9a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2c-2.8 0-5-2.2-5-5v-3"/></svg>'
			},
			{
				name: 'football',
				title: 'Football',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M21 3c-.8-.8-3-1.2-5.8-.9s-6 1.6-8.8 4.4-4 6-4.4 8.8.1 5 .9 5.8 3 1.2 5.8.9 6-1.6 8.8-4.4 4-6 4.4-8.8-.1-5-.9-5.8M6.4 17.6 9 15"/><path d="M8.7 21.9c-.8-3.3-3.4-5.8-6.7-6.7m6.1-1.3 2 2M11 11l2 2m.9-4.9 2 2m-.6-8c.8 3.3 3.4 5.8 6.6 6.6M15 9l2.6-2.6"/></svg>'
			},
			{
				name: 'footprints',
				title: 'Footprints',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0m16 4v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0m-4-3h4M4 13h4"/></svg>'
			},
			{
				name: 'fork-knife-crossed',
				title: 'Fork Knife Crossed',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8m-7 7L3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0zm0 0 7 7m-19.9-.2 6.4-6.3M19 5l-7 7"/></svg>'
			},
			{
				name: 'fork-knife',
				title: 'Fork Knife',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2M7 2v20m14-7V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2zm0 0v7"/></svg>'
			},
			{
				name: 'forklift',
				title: 'Forklift',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 12H5a2 2 0 0 0-2 2v5"/><circle cx="13" cy="19" r="2"/><circle cx="5" cy="19" r="2"/><path d="M8 19h3m5-17v17h6M6 12V7c0-1.1.9-2 2-2h3l5 5"/></svg>'
			},
			{
				name: 'forward',
				title: 'Forward',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m15 17 5-5-5-5"/><path d="M4 18v-2a4 4 0 0 1 4-4h12"/></svg>'
			},
			{
				name: 'fox-face-tail',
				title: 'Fox Face Tail',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M19.9 8.3C20.6 7 21 5.6 21 4c0-.6-.4-1-1-1-2.3 0-4.3.8-5.9 2.2a15 15 0 0 0-4.2 0A8.78 8.78 0 0 0 4 3c-.6 0-1 .4-1 1 0 1.6.4 3 1.1 4.3-.6.7-1.1 1.4-1.4 2.2C4 13 11 16 12 16s8-3 9.3-5.5c-.3-.8-.8-1.5-1.4-2.2M9 9v.5m4 3.5h-2m1 3v-3m3-4v.5"/><path d="M6.3 20.5A6.87 6.87 0 0 0 9 15H2.2c.8 4 4.9 7 9.8 7 5.5 0 10-3.8 10-8.5 0-1.1-.2-2.1-.7-3"/></svg>'
			},
			{
				name: 'frame',
				title: 'Frame',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M22 6H2m20 12H2M6 2v20M18 2v20"/></svg>'
			},
			{
				name: 'framer',
				title: 'Framer',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M5 16V9h14V2H5l14 14h-7m-7 0 7 7v-7m-7 0h7"/></svg>'
			},
			{
				name: 'frog-face',
				title: 'Frog Face',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M6 7h.01"/><circle cx="6" cy="7" r="4"/><path d="M14.4 5.3a10 10 0 0 0-4.8 0"/><circle cx="18" cy="7" r="4"/><path d="M18 7h.01M22 13.5C22 16 17.5 18 12 18S2 16 2 13.5m8 .5h.01M14 14h.01"/><path d="M3.1 9.75A7 7 0 0 0 2 13.5C2 18.2 6.5 22 12 22s10-3.8 10-8.5a7 7 0 0 0-1.1-3.75"/></svg>'
			},
			{
				name: 'frown',
				title: 'Frown',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M16 16s-1.5-2-4-2-4 2-4 2m1-7h.01M15 9h.01"/></svg>'
			},
			{
				name: 'fruit',
				title: 'Fruit',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="m10 10 4-3m-4 0 4 3"/></svg>'
			},
			{
				name: 'fuel',
				title: 'Fuel',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 4 0v-6.998a2 2 0 0 0-.59-1.42L18 5m-4 16V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v16m-1 0h13M3 9h11"/></svg>'
			},
			{
				name: 'fullscreen',
				title: 'Fullscreen',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M3 7V5a2 2 0 0 1 2-2h2m10 0h2a2 2 0 0 1 2 2v2m0 10v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2"/><rect width="10" height="8" x="7" y="8" rx="1"/></svg>'
			},
			{
				name: 'funnel-plus',
				title: 'Funnel Plus',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M13.354 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14v6a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341l1.218-1.348M16 6h6m-3-3v6"/></svg>'
			},
			{
				name: 'funnel-x',
				title: 'Funnel X',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12.531 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14v6a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341l.427-.473M16.5 3.5l5 5m0-5-5 5"/></svg>'
			},
			{
				name: 'funnel',
				title: 'Funnel',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"/></svg>'
			},
			{
				name: 'gallery-horizontal-end',
				title: 'Gallery Horizontal End',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M2 7v10M6 5v14"/><rect width="12" height="18" x="10" y="3" rx="2"/></svg>'
			},
			{
				name: 'gallery-horizontal',
				title: 'Gallery Horizontal',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M2 3v18"/><rect width="12" height="18" x="6" y="3" rx="2"/><path d="M22 3v18"/></svg>'
			},
			{
				name: 'gallery-thumbnails',
				title: 'Gallery Thumbnails',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="18" height="14" x="3" y="3" rx="2"/><path d="M4 21h1m4 0h1m4 0h1m4 0h1"/></svg>'
			},
			{
				name: 'gallery-vertical-end',
				title: 'Gallery Vertical End',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M7 2h10M5 6h14"/><rect width="18" height="12" x="3" y="10" rx="2"/></svg>'
			},
			{
				name: 'gallery-vertical',
				title: 'Gallery Vertical',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M3 2h18"/><rect width="18" height="12" x="3" y="6" rx="2"/><path d="M3 22h18"/></svg>'
			},
			{
				name: 'gamepad-2',
				title: 'Gamepad 2',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M6 11h4M8 9v4m7-1h.01M18 10h.01m-.69-5H6.68a4 4 0 0 0-3.978 3.59l-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258q-.01-.075-.017-.151A4 4 0 0 0 17.32 5"/></svg>'
			},
			{
				name: 'gamepad',
				title: 'Gamepad',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M6 12h4m-2-2v4m7-1h.01M18 11h.01"/><rect width="20" height="12" x="2" y="6" rx="2"/></svg>'
			},
			{
				name: 'garlic',
				title: 'Garlic',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M15 4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v1c0 1-.5 2-1.4 2.5L5.1 9.1A7 7 0 0 0 9 22h6a7 7 0 0 0 3.8-12.8l-2.5-1.6A3.32 3.32 0 0 1 15 5Z"/><path d="M9 5c0 4-2 4-2 9 0 4.4 2.2 8 5 8s5-3.6 5-8c0-5-2-5-2-9"/></svg>'
			},
			{
				name: 'gauge',
				title: 'Gauge',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m12 14 4-4M3.34 19a10 10 0 1 1 17.32 0"/></svg>'
			},
			{
				name: 'gavel',
				title: 'Gavel',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m14 13-8.381 8.38a1 1 0 0 1-3.001-3l8.384-8.381M16 16l6-6m-.5.5-8-8M8 8l6-6M8.5 7.5l8 8"/></svg>'
			},
			{
				name: 'gearbox-square',
				title: 'Gearbox Square',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 7v10m5-10v10m5-10v5H7"/></svg>'
			},
			{
				name: 'gearbox',
				title: 'Gearbox',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M5 4v16m7-16v16m7-16v8H5"/></svg>'
			},
			{
				name: 'gem-ring',
				title: 'Gem Ring',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M13.2 8.1 16 4.4 14.4 2H9.6L8 4.4l2.8 3.7"/><circle cx="12" cy="15" r="7"/></svg>'
			},
			{
				name: 'gem',
				title: 'Gem',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10.5 3 8 9l4 13 4-13-2.5-6"/><path d="M17 3a2 2 0 0 1 1.6.8l3 4a2 2 0 0 1 .013 2.382l-7.99 10.986a2 2 0 0 1-3.247 0l-7.99-10.986A2 2 0 0 1 2.4 7.8l2.998-3.997A2 2 0 0 1 7 3zM2 9h20"/></svg>'
			},
			{
				name: 'georgian-lari',
				title: 'Georgian Lari',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M11.5 21a7.5 7.5 0 1 1 7.35-9M13 12V3M4 21h16M9 12V3"/></svg>'
			},
			{
				name: 'ghost',
				title: 'Ghost',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M9 10h.01M15 10h.01M12 2a8 8 0 0 0-8 8v12l3-3 2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 0 0-8-8"/></svg>'
			},
			{
				name: 'gift',
				title: 'Gift',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="18" height="4" x="3" y="8" rx="1"/><path d="M12 8v13m7-9v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7m2.5-4a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"/></svg>'
			},
			{
				name: 'git-branch-plus',
				title: 'Git Branch Plus',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M6 3v12m12-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6M6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/><path d="M15 6a9 9 0 0 0-9 9m12 0v6m3-3h-6"/></svg>'
			},
			{
				name: 'git-branch',
				title: 'Git Branch',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M6 3v12"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/></svg>'
			},
			{
				name: 'git-commit-horizontal',
				title: 'Git Commit Horizontal',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M3 12h6m6 0h6"/></svg>'
			},
			{
				name: 'git-commit-vertical',
				title: 'Git Commit Vertical',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 3v6"/><circle cx="12" cy="12" r="3"/><path d="M12 15v6"/></svg>'
			},
			{
				name: 'git-compare-arrows',
				title: 'Git Compare Arrows',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="5" cy="6" r="3"/><path d="M12 6h5a2 2 0 0 1 2 2v7"/><path d="m15 9-3-3 3-3"/><circle cx="19" cy="18" r="3"/><path d="M12 18H7a2 2 0 0 1-2-2V9"/><path d="m9 15 3 3-3 3"/></svg>'
			},
			{
				name: 'git-compare',
				title: 'Git Compare',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M13 6h3a2 2 0 0 1 2 2v7m-7 3H8a2 2 0 0 1-2-2V9"/></svg>'
			},
			{
				name: 'git-fork',
				title: 'Git Fork',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><circle cx="18" cy="6" r="3"/><path d="M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9m6 3v3"/></svg>'
			},
			{
				name: 'git-graph',
				title: 'Git Graph',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="5" cy="6" r="3"/><path d="M5 9v6"/><circle cx="5" cy="18" r="3"/><path d="M12 3v18"/><circle cx="19" cy="6" r="3"/><path d="M16 15.7A9 9 0 0 0 19 9"/></svg>'
			},
			{
				name: 'git-merge',
				title: 'Git Merge',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M6 21V9a9 9 0 0 0 9 9"/></svg>'
			},
			{
				name: 'git-pull-request-arrow',
				title: 'Git Pull Request Arrow',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="5" cy="6" r="3"/><path d="M5 9v12"/><circle cx="19" cy="18" r="3"/><path d="m15 9-3-3 3-3"/><path d="M12 6h5a2 2 0 0 1 2 2v7"/></svg>'
			},
			{
				name: 'git-pull-request-closed',
				title: 'Git Pull Request Closed',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="6" cy="6" r="3"/><path d="M6 9v12M21 3l-6 6m6 0-6-6m3 8.5V15"/><circle cx="18" cy="18" r="3"/></svg>'
			},
			{
				name: 'git-pull-request-create-arrow',
				title: 'Git Pull Request Create Arrow',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="5" cy="6" r="3"/><path d="M5 9v12M15 9l-3-3 3-3"/><path d="M12 6h5a2 2 0 0 1 2 2v3m0 4v6m3-3h-6"/></svg>'
			},
			{
				name: 'git-pull-request-create',
				title: 'Git Pull Request Create',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="6" cy="6" r="3"/><path d="M6 9v12m7-15h3a2 2 0 0 1 2 2v3m0 4v6m3-3h-6"/></svg>'
			},
			{
				name: 'git-pull-request-draft',
				title: 'Git Pull Request Draft',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M18 6V5m0 6v-1M6 9v12"/></svg>'
			},
			{
				name: 'git-pull-request',
				title: 'Git Pull Request',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M13 6h3a2 2 0 0 1 2 2v7M6 9v12"/></svg>'
			},
			{
				name: 'github',
				title: 'Github',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65S8.93 17.38 9 18v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>'
			},
			{
				name: 'gitlab',
				title: 'Gitlab',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m22 13.29-3.33-10a.4.4 0 0 0-.14-.18.38.38 0 0 0-.22-.11.4.4 0 0 0-.23.07.4.4 0 0 0-.14.18l-2.26 6.67H8.32L6.1 3.26a.4.4 0 0 0-.1-.18.38.38 0 0 0-.26-.08.4.4 0 0 0-.23.07.4.4 0 0 0-.14.18L2 13.29a.74.74 0 0 0 .27.83L12 21l9.69-6.88a.71.71 0 0 0 .31-.83"/></svg>'
			},
			{
				name: 'glass-water',
				title: 'Glass Water',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M5.116 4.104A1 1 0 0 1 6.11 3h11.78a1 1 0 0 1 .994 1.105L17.19 20.21A2 2 0 0 1 15.2 22H8.8a2 2 0 0 1-2-1.79z"/><path d="M6 12a5 5 0 0 1 6 0 5 5 0 0 0 6 0"/></svg>'
			},
			{
				name: 'glasses-square',
				title: 'Glasses Square',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m2.2 13.1 3.1-6.4C5.8 5.7 6.8 5 8 5"/><rect width="8" height="6" x="2" y="12" rx="2"/><path d="M14 15a2 2 0 0 0-4 0"/><rect width="8" height="6" x="14" y="12" rx="2"/><path d="m21.8 13.1-3.1-6.4C18.2 5.7 17.2 5 16 5"/></svg>'
			},
			{
				name: 'glasses-sun',
				title: 'Glasses Sun',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m2.16 14.2 3.1-7.4C5.7 5.8 6.8 5 8 5"/><path d="M4 13a2 2 0 0 0-2 2v1c0 1.7 1.3 3 3 3h1c3.3 0 6-2.7 6-6 0 3.3 2.7 6 6 6h1c1.7 0 3-1.3 3-3v-1a2 2 0 0 0-2-2Z"/><path d="m21.83 14.2-3.1-7.4C18.3 5.8 17.2 5 16 5"/></svg>'
			},
			{
				name: 'glasses',
				title: 'Glasses',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="6" cy="15" r="4"/><circle cx="18" cy="15" r="4"/><path d="M14 15a2 2 0 0 0-2-2 2 2 0 0 0-2 2m-7.5-2L5 7c.7-1.3 1.4-2 3-2m13.5 8L19 7c-.7-1.3-1.5-2-3-2"/></svg>'
			},
			{
				name: 'globe-lock',
				title: 'Globe Lock',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M15.686 15A14.5 14.5 0 0 1 12 22a14.5 14.5 0 0 1 0-20 10 10 0 1 0 9.542 13M2 12h8.5M20 6V4a2 2 0 1 0-4 0v2"/><rect width="8" height="5" x="14" y="6" rx="1"/></svg>'
			},
			{
				name: 'globe',
				title: 'Globe',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20M2 12h20"/></svg>'
			},
			{
				name: 'goal-net',
				title: 'Goal Net',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M2 20V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v14M8 8v12m4-12v12m4-12v12M6 10h12M6 14h12M6 18h12"/></svg>'
			},
			{
				name: 'goal',
				title: 'Goal',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 13V2l8 4-8 4"/><path d="M20.561 10.222a9 9 0 1 1-12.55-5.29"/><path d="M8.002 9.997a5 5 0 1 0 8.9 2.02"/></svg>'
			},
			{
				name: 'goblet-crack',
				title: 'Goblet Crack',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M8 2c-1.78 2.72-3 6.65-3 9a7 7 0 1 0 14 0c0-2.35-1.22-6.28-3-9Zm4 16v4m-4 0h8"/><path d="m13 11-1-1 2-2-3-3 3-3"/></svg>'
			},
			{
				name: 'goblet',
				title: 'Goblet',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M8 2c-1.78 2.72-3 6.65-3 9a7 7 0 1 0 14 0c0-2.35-1.22-6.28-3-9Zm4 16v4m-4 0h8"/><path d="M5 11c.84-.5 1.68-1 3.5-1 3.5 0 3.5 2 7 2 1.82 0 2.66-.5 3.5-1"/></svg>'
			},
			{
				name: 'golf-driver',
				title: 'Golf Driver',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="6" cy="9" r="2"/><path d="M6 11v2M22 2l-9.3 14.1c-.4.6-1 .9-1.7.9H4a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h2c1.6 0 3.1-.7 4.1-2.1l2.6-3.8"/></svg>'
			},
			{
				name: 'gpu',
				title: 'Gpu',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M2 21V3m0 2h18a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2.26M7 17v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-3"/><circle cx="16" cy="11" r="2"/><circle cx="8" cy="11" r="2"/></svg>'
			},
			{
				name: 'graduation-cap',
				title: 'Graduation Cap',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0zM22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/></svg>'
			},
			{
				name: 'grape',
				title: 'Grape',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M22 5V2l-5.89 5.89"/><circle cx="16.6" cy="15.89" r="3"/><circle cx="8.11" cy="7.4" r="3"/><circle cx="12.35" cy="11.65" r="3"/><circle cx="13.91" cy="5.85" r="3"/><circle cx="18.15" cy="10.09" r="3"/><circle cx="6.56" cy="13.2" r="3"/><circle cx="10.8" cy="17.44" r="3"/><circle cx="5" cy="19" r="3"/></svg>'
			},
			{
				name: 'grapes',
				title: 'Grapes',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M22 5V2l-5.89 5.89"/><circle cx="16.6" cy="15.89" r="3"/><circle cx="8.11" cy="7.4" r="3"/><circle cx="12.35" cy="11.65" r="3"/><circle cx="13.91" cy="5.85" r="3"/><circle cx="18.15" cy="10.09" r="3"/><circle cx="6.56" cy="13.2" r="3"/><circle cx="10.8" cy="17.44" r="3"/><circle cx="5" cy="19" r="3"/></svg>'
			},
			{
				name: 'grid-2x2-check',
				title: 'Grid 2x2 Check',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 3v17a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1H3m13 7 2 2 4-4"/></svg>'
			},
			{
				name: 'grid-2x2-plus',
				title: 'Grid 2x2 Plus',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 3v17a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1H3m13 7h6m-3 3v-6"/></svg>'
			},
			{
				name: 'grid-2x2-x',
				title: 'Grid 2x2 X',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 3v17a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1H3m13 4 5 5m-5 0 5-5"/></svg>'
			},
			{
				name: 'grid-2x2',
				title: 'Grid 2x2',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 3v18m-9-9h18"/><rect width="18" height="18" x="3" y="3" rx="2"/></svg>'
			},
			{
				name: 'grid-3x2',
				title: 'Grid 3x2',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M15 3v18M3 12h18M9 3v18"/><rect width="18" height="18" x="3" y="3" rx="2"/></svg>'
			},
			{
				name: 'grid-3x3',
				title: 'Grid 3x3',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18M3 15h18M9 3v18m6-18v18"/></svg>'
			},
			{
				name: 'grid-lines-offset',
				title: 'Grid Lines Offset',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M7 3v18m6-18v18M3 11h18M3 17h18"/></svg>'
			},
			{
				name: 'grid-lines',
				title: 'Grid Lines',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M9 3v18m6-18v18M3 9h18M3 15h18"/></svg>'
			},
			{
				name: 'grip-horizontal',
				title: 'Grip Horizontal',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="9" r="1"/><circle cx="19" cy="9" r="1"/><circle cx="5" cy="9" r="1"/><circle cx="12" cy="15" r="1"/><circle cx="19" cy="15" r="1"/><circle cx="5" cy="15" r="1"/></svg>'
			},
			{
				name: 'grip-vertical',
				title: 'Grip Vertical',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="9" cy="12" r="1"/><circle cx="9" cy="5" r="1"/><circle cx="9" cy="19" r="1"/><circle cx="15" cy="12" r="1"/><circle cx="15" cy="5" r="1"/><circle cx="15" cy="19" r="1"/></svg>'
			},
			{
				name: 'grip',
				title: 'Grip',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="5" r="1"/><circle cx="19" cy="5" r="1"/><circle cx="5" cy="5" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/><circle cx="12" cy="19" r="1"/><circle cx="19" cy="19" r="1"/><circle cx="5" cy="19" r="1"/></svg>'
			},
			{
				name: 'group',
				title: 'Group',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M3 7V5c0-1.1.9-2 2-2h2m10 0h2c1.1 0 2 .9 2 2v2m0 10v2c0 1.1-.9 2-2 2h-2M7 21H5c-1.1 0-2-.9-2-2v-2"/><rect width="7" height="5" x="7" y="7" rx="1"/><rect width="7" height="5" x="10" y="12" rx="1"/></svg>'
			},
			{
				name: 'guitar',
				title: 'Guitar',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m11.9 12.1 4.514-4.514M20.1 2.3a1 1 0 0 0-1.4 0l-1.114 1.114A2 2 0 0 0 17 4.828v1.344a2 2 0 0 1-.586 1.414A2 2 0 0 1 17.828 7h1.344a2 2 0 0 0 1.414-.586L21.7 5.3a1 1 0 0 0 0-1.4zM6 16l2 2m.23-8.15A3 3 0 0 1 11 8a5 5 0 0 1 5 5 3 3 0 0 1-1.85 2.77l-.92.38A2 2 0 0 0 12 18a4 4 0 0 1-4 4 6 6 0 0 1-6-6 4 4 0 0 1 4-4 2 2 0 0 0 1.85-1.23z"/></svg>'
			},
			{
				name: 'hairdryer',
				title: 'Hairdryer',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="8" cy="8" r="2"/><path d="M18 11s-7 3-10 3A6 6 0 0 1 8 2c3 0 10 3 10 3Zm0-6 4-2v10l-4-2"/><path d="m7 13.9.8 5.1c.1.5.6 1 1.2 1h2c.6 0 .9-.4.8-1l-.9-5.5m.74 4.5s3.3-2 7.3-2a2 2 0 0 1 0 4H17a2 2 0 0 0-2 2"/></svg>'
			},
			{
				name: 'ham',
				title: 'Ham',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M13.144 21.144A7.274 10.445 45 1 0 2.856 10.856"/><path d="M13.144 21.144A7.274 4.365 45 0 0 2.856 10.856a7.274 4.365 45 0 0 10.288 10.288m3.421-10.709L18.6 8.4a2.501 2.501 0 1 0 1.65-4.65 2.5 2.5 0 1 0-4.66 1.66l-2.024 2.025M8.5 16.5l-1-1"/></svg>'
			},
			{
				name: 'hamburger',
				title: 'Hamburger',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 16H4a2 2 0 1 1 0-4h16a2 2 0 1 1 0 4h-4.25M5 12a2 2 0 0 1-2-2 9 7 0 0 1 18 0 2 2 0 0 1-2 2M5 16a2 2 0 0 0-2 2 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 2 2 0 0 0-2-2q0 0 0 0"/><path d="m6.67 12 6.13 4.6a2 2 0 0 0 2.8-.4l3.15-4.2"/></svg>'
			},
			{
				name: 'hammer',
				title: 'Hammer',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m15 12-9.373 9.373a1 1 0 0 1-3.001-3L12 9m6 6 4-4"/><path d="m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172v-.344a2 2 0 0 0-.586-1.414l-1.657-1.657A6 6 0 0 0 12.516 3H9l1.243 1.243A6 6 0 0 1 12 8.485V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5"/></svg>'
			},
			{
				name: 'hand-coins',
				title: 'Hand Coins',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17"/><path d="m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9M2 16l6 6"/><circle cx="16" cy="9" r="2.9"/><circle cx="6" cy="5" r="3"/></svg>'
			},
			{
				name: 'hand-fist',
				title: 'Hand Fist',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12.035 17.012a3 3 0 0 0-3-3l-.311-.002a.72.72 0 0 1-.505-1.229l1.195-1.195A2 2 0 0 1 10.828 11H12a2 2 0 0 0 0-4H9.243a3 3 0 0 0-2.122.879l-2.707 2.707A4.83 4.83 0 0 0 3 14a8 8 0 0 0 8 8h2a8 8 0 0 0 8-8V7a2 2 0 1 0-4 0v2a2 2 0 1 0 4 0"/><path d="M13.888 9.662A2 2 0 0 0 17 8V5a2 2 0 1 0-4 0M9 5a2 2 0 1 0-4 0v5m4-3V4a2 2 0 1 1 4 0v3.268"/></svg>'
			},
			{
				name: 'hand-grab',
				title: 'Hand Grab',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M18 11.5V9a2 2 0 0 0-2-2 2 2 0 0 0-2 2v1.4m0-.4V8a2 2 0 0 0-2-2 2 2 0 0 0-2 2v2m0-.1V9a2 2 0 0 0-2-2 2 2 0 0 0-2 2v5m0 0a2 2 0 0 0-2-2 2 2 0 0 0-2 2"/><path d="M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-4a8 8 0 0 1-8-8 2 2 0 1 1 4 0"/></svg>'
			},
			{
				name: 'hand-heart',
				title: 'Hand Heart',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M11 14h2a2 2 0 0 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 16"/><path d="m14.45 13.39 5.05-4.694C20.196 8 21 6.85 21 5.75a2.75 2.75 0 0 0-4.797-1.837.276.276 0 0 1-.406 0A2.75 2.75 0 0 0 11 5.75c0 1.2.802 2.248 1.5 2.946L16 11.95M2 15l6 6"/><path d="m7 20 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a1 1 0 0 0-2.75-2.91"/></svg>'
			},
			{
				name: 'hand-helping',
				title: 'Hand Helping',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M11 12h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 14"/><path d="m7 18 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9M2 13l6 6"/></svg>'
			},
			{
				name: 'hand-metal',
				title: 'Hand Metal',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M18 12.5V10a2 2 0 0 0-2-2 2 2 0 0 0-2 2v1.4m0-.4V9a2 2 0 1 0-4 0v2m0-.5V5a2 2 0 1 0-4 0v9"/><path d="m7 15-1.76-1.76a2 2 0 0 0-2.83 2.82l3.6 3.6C7.5 21.14 9.2 22 12 22h2a8 8 0 0 0 8-8V7a2 2 0 1 0-4 0v5"/></svg>'
			},
			{
				name: 'hand-platter',
				title: 'Hand Platter',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 3V2m3.4 15.4 3.2-2.8a2 2 0 1 1 2.8 2.9l-3.6 3.3c-.7.8-1.7 1.2-2.8 1.2h-4c-1.1 0-2.1-.4-2.8-1.2l-1.302-1.464A1 1 0 0 0 6.151 19H5"/><path d="M2 14h12a2 2 0 0 1 0 4h-2m-8-8h16M5 10a7 7 0 0 1 14 0"/><path d="M5 14v6a1 1 0 0 1-1 1H2"/></svg>'
			},
			{
				name: 'hand',
				title: 'Hand',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M18 11V6a2 2 0 0 0-2-2 2 2 0 0 0-2 2m0 4V4a2 2 0 0 0-2-2 2 2 0 0 0-2 2v2m0 4.5V6a2 2 0 0 0-2-2 2 2 0 0 0-2 2v8"/><path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"/></svg>'
			},
			{
				name: 'handbag',
				title: 'Handbag',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M2.048 18.566A2 2 0 0 0 4 21h16a2 2 0 0 0 1.952-2.434l-2-9A2 2 0 0 0 18 8H6a2 2 0 0 0-1.952 1.566z"/><path d="M8 11V6a4 4 0 0 1 8 0v5"/></svg>'
			},
			{
				name: 'handshake',
				title: 'Handshake',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m11 17 2 2a1 1 0 1 0 3-3"/><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"/><path d="m21 3 1 11h-2M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3M3 4h8"/></svg>'
			},
			{
				name: 'hard-drive-download',
				title: 'Hard Drive Download',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 2v8m4-4-4 4-4-4"/><rect width="20" height="8" x="2" y="14" rx="2"/><path d="M6 18h.01M10 18h.01"/></svg>'
			},
			{
				name: 'hard-drive-upload',
				title: 'Hard Drive Upload',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m16 6-4-4-4 4m4-4v8"/><rect width="20" height="8" x="2" y="14" rx="2"/><path d="M6 18h.01M10 18h.01"/></svg>'
			},
			{
				name: 'hard-drive',
				title: 'Hard Drive',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M22 12H2m3.45-6.89L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11M6 16h.01M10 16h.01"/></svg>'
			},
			{
				name: 'hard-hat',
				title: 'Hard Hat',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5m0-4a6 6 0 0 1 6 6v3M4 15v-3a6 6 0 0 1 6-6"/><rect width="20" height="4" x="2" y="15" rx="1"/></svg>'
			},
			{
				name: 'hash',
				title: 'Hash',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M4 9h16M4 15h16M10 3 8 21m8-18-2 18"/></svg>'
			},
			{
				name: 'hat-baseball',
				title: 'Hat Baseball',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 3v1m0 10c2.8 0 5.5.3 8 .9V12a8 8 0 0 0-16 0v2.9c2.5-.6 5.2-.9 8-.9"/><path d="M9 14.1V10h6v4.1"/><path d="M2.3 18A2 2 0 0 0 4 21h.4l1.6-.4a26.44 26.44 0 0 1 12 0l1.6.4h.4a2 2 0 0 0 1.7-3l-1.8-3.2a39.9 39.9 0 0 0-15.8 0Z"/></svg>'
			},
			{
				name: 'hat-beanie',
				title: 'Hat Beanie',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10.4 6.2C6.7 6.9 4 10.1 4 14v1"/><circle cx="12" cy="5" r="2"/><path d="M20 15v-1c0-3.9-2.7-7.1-6.4-7.8"/><rect width="20" height="5" x="2" y="15" rx="1"/><path d="M6 15v5m4-5v5m4-5v5m4-5v5"/></svg>'
			},
			{
				name: 'hat-bowler',
				title: 'Hat Bowler',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M6 13c0 1.7 2.7 3 6 3s6-1.3 6-3v-3a6 6 0 0 0-12 0Z"/><path d="M6 9c0 1.7 2.7 3 6 3s6-1.3 6-3"/><path d="M6 9.2C3.6 10.3 2 12 2 14c0 3.3 4.5 6 10 6s10-2.7 10-6c0-2-1.6-3.7-4-4.8"/></svg>'
			},
			{
				name: 'hat-chef',
				title: 'Hat Chef',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M6 13.85A4 4 0 0 1 7.4 6a5 5 0 0 1 9.2 0 4 4 0 0 1 1.4 7.85V21H6ZM6 17h12"/></svg>'
			},
			{
				name: 'hat-glasses',
				title: 'Hat Glasses',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M14 18a2 2 0 0 0-4 0m9-7-2.11-6.657a2 2 0 0 0-2.752-1.148l-1.276.61A2 2 0 0 1 12 4H8.5a2 2 0 0 0-1.925 1.456L5 11m-3 0h20"/><circle cx="17" cy="18" r="3"/><circle cx="7" cy="18" r="3"/></svg>'
			},
			{
				name: 'hat-hard',
				title: 'Hat Hard',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 6.3c-3.4.9-6 4-6 7.7v2m6-6V5c0-.6.4-1 1-1h2c.6 0 1 .4 1 1v5m6 6v-2c0-3.7-2.6-6.8-6-7.7"/><rect width="20" height="4" x="2" y="16" rx="1"/></svg>'
			},
			{
				name: 'hat-top',
				title: 'Hat Top',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><ellipse cx="12" cy="5" rx="7" ry="3"/><path d="M5 5c0 1 1 4 1 6v4c0 1.7 2.7 3 6 3s6-1.3 6-3v-4c0-2 1-5 1-6"/><path d="M18 11c0 1.7-2.7 3-6 3s-6-1.3-6-3"/><path d="M6 11.2C3.6 12.3 2 14 2 16c0 3.3 4.5 6 10 6s10-2.7 10-6c0-2-1.6-3.7-4-4.8"/></svg>'
			},
			{
				name: 'haze',
				title: 'Haze',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m5.2 6.2 1.4 1.4M2 13h2m16 0h2m-4.6-5.4 1.4-1.4M22 17H2m20 4H2m14-8a4 4 0 0 0-8 0m4-8V2.5"/></svg>'
			},
			{
				name: 'hdmi-port',
				title: 'Hdmi Port',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M22 9a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h1l2 2h12l2-2h1a1 1 0 0 0 1-1ZM7.5 12h9"/></svg>'
			},
			{
				name: 'heading-1',
				title: 'Heading 1',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M4 12h8m-8 6V6m8 12V6m5 6 3-2v8"/></svg>'
			},
			{
				name: 'heading-2',
				title: 'Heading 2',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M4 12h8m-8 6V6m8 12V6m9 12h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1"/></svg>'
			},
			{
				name: 'heading-3',
				title: 'Heading 3',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M4 12h8m-8 6V6m8 12V6m5.5 4.5c1.7-1 3.5 0 3.5 1.5a2 2 0 0 1-2 2m-2 3.5c2 1.5 4 .3 4-1.5a2 2 0 0 0-2-2"/></svg>'
			},
			{
				name: 'heading-4',
				title: 'Heading 4',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 18V6m5 4v3a1 1 0 0 0 1 1h3m0-4v8M4 12h8m-8 6V6"/></svg>'
			},
			{
				name: 'heading-5',
				title: 'Heading 5',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M4 12h8m-8 6V6m8 12V6m5 7v-3h4m-4 7.7c.4.2.8.3 1.3.3 1.5 0 2.7-1.1 2.7-2.5S19.8 13 18.3 13H17"/></svg>'
			},
			{
				name: 'heading-6',
				title: 'Heading 6',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M4 12h8m-8 6V6m8 12V6"/><circle cx="19" cy="16" r="2"/><path d="M20 10c-2 2-3 3.5-3 6"/></svg>'
			},
			{
				name: 'heading-circle',
				title: 'Heading Circle',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M9 16V8m0 4h6m0 4V8"/></svg>'
			},
			{
				name: 'heading-square',
				title: 'Heading Square',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M8 17V7m0 5h8m0 5V7"/></svg>'
			},
			{
				name: 'heading',
				title: 'Heading',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M6 12h12M6 20V4m12 16V4"/></svg>'
			},
			{
				name: 'headphone-off',
				title: 'Headphone Off',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M21 14h-1.343M9.128 3.47A9 9 0 0 1 21 12v3.343M2 2l20 20m-1.586-1.586A2 2 0 0 1 19 21h-1a2 2 0 0 1-2-2v-3M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 2.636-6.364"/></svg>'
			},
			{
				name: 'headphones',
				title: 'Headphones',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"/></svg>'
			},
			{
				name: 'headset',
				title: 'Headset',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2z"/><path d="M21 16v2a4 4 0 0 1-4 4h-5"/></svg>'
			},
			{
				name: 'heart-crack',
				title: 'Heart Crack',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12.409 5.824c-.702.792-1.15 1.496-1.415 2.166l2.153 2.156a.5.5 0 0 1 0 .707l-2.293 2.293a.5.5 0 0 0 0 .707L12 15"/><path d="M13.508 20.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5a5.5 5.5 0 0 1 9.591-3.677.6.6 0 0 0 .818.001A5.5 5.5 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5z"/></svg>'
			},
			{
				name: 'heart-handshake',
				title: 'Heart Handshake',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052 2.12 2.12 0 0 0-.004-3 2.124 2.124 0 1 0 3-3 2.124 2.124 0 0 0 3.004 0 2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0 2 2 0 0 1 0-2.828l2.823-2.762"/></svg>'
			},
			{
				name: 'heart-minus',
				title: 'Heart Minus',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m14.876 18.99-1.368 1.323a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5a5.2 5.2 0 0 1-.244 1.572M15 15h6"/></svg>'
			},
			{
				name: 'heart-off',
				title: 'Heart Off',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10.5 4.893a5.5 5.5 0 0 1 1.091.931.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 1.872-1.002 3.356-2.187 4.655m-2.846 2.812-3.459 3.346a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5a5.5 5.5 0 0 1 2.747-4.761M2 2l20 20"/></svg>'
			},
			{
				name: 'heart-plus',
				title: 'Heart Plus',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m14.479 19.374-.971.939a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5a5.2 5.2 0 0 1-.219 1.49M15 15h6m-3-3v6"/></svg>'
			},
			{
				name: 'heart-pulse',
				title: 'Heart Pulse',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"/><path d="M3.22 13H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"/></svg>'
			},
			{
				name: 'heart',
				title: 'Heart',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"/></svg>'
			},
			{
				name: 'heater',
				title: 'Heater',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M11 8c2-3-2-3 0-6m4.5 6c2-3-2-3 0-6M6 10h.01M6 14h.01M10 16v-4m4 4v-4m4 4v-4"/><path d="M20 6a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3M5 20v2m14-2v2"/></svg>'
			},
			{
				name: 'hedgehog',
				title: 'Hedgehog',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M4 11 3 7.7 5.7 7l.1-2.8 2.7.6 1.3-2.6L12 4l2.2-1.8 1.3 2.6 2.7-.6.1 2.8 2.7.7-1.2 2.5L22 12l-2.2 1.8 1.2 2.5-3 .7m-8 0h.01"/><path d="M3 16c2.8 0 5-2.2 5-5 3.3 0 6 2.7 6 6a4 4 0 0 0 4 4h-8c-1.1 0-2.6-.6-3.4-1.4zv-1"/></svg>'
			},
			{
				name: 'helmet-diving',
				title: 'Helmet Diving',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M16 17.9c1.5-.9 2.7-2.2 3.4-3.9h.8c.4 0 .8-.4.8-1V9c0-.6-.4-1-.8-1h-.8A7.92 7.92 0 0 0 15 3.6v-.8c0-.4-.4-.8-1-.8h-4c-.6 0-1 .4-1 .8v.8A7.92 7.92 0 0 0 4.6 8h-.8c-.4 0-.8.4-.8 1v4c0 .6.4 1 .8 1h.8c.7 1.7 1.9 3 3.4 3.9"/><circle cx="12" cy="11" r="4"/><path d="M8 11h8m-4-4v8m-5.3 2c-1 .6-1.7 1.2-1.7 2 0 1.7 3.1 3 7 3s7-1.3 7-3c0-.8-.7-1.4-1.7-2"/></svg>'
			},
			{
				name: 'hexagon',
				title: 'Hexagon',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16"/></svg>'
			},
			{
				name: 'hexagons-3',
				title: 'Hexagons 3',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M8 4.4a2 2 0 0 0-1 1.73v4.37l-4 2.4a2 2 0 0 0-1 1.73v3.27a2 2 0 0 0 .97 1.68L6 21.4a2 2 0 0 0 2.03-.02L12 19l4 2.4a2 2 0 0 0 2.03-.02L21 19.6a2 2 0 0 0 1-1.73V14.6a2 2 0 0 0-.97-1.68L17 10.5V6.1a2 2 0 0 0-.97-1.68L13 2.6a2 2 0 0 0-2.03.02Z"/><path d="m7 10.5 5 3 5-3m-5 3V19"/></svg>'
			},
			{
				name: 'hexagons-7',
				title: 'Hexagons 7',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M5.3 4.3v3.9L2 10.1v3.8l3.3 1.9v3.9l3.4 1.9 3.3-1.9 3.3 1.9 3.4-1.9v-3.9l3.3-1.9v-3.8l-3.3-1.9V4.3l-3.4-1.9L12 4.3 8.7 2.4ZM12 8.2V4.3m6.7 3.9-3.4 1.9m0 3.8 3.4 1.9M12 19.7v-3.9m-3.3-1.9-3.4 1.9m0-7.6 3.4 1.9"/><path d="m8.7 13.9 3.3 1.9 3.3-1.9v-3.8L12 8.2l-3.3 1.9Z"/></svg>'
			},
			{
				name: 'high-heel',
				title: 'High Heel',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M4 3c6 6 8.4 10.5 9.8 12 .9 1 2.5 1.3 3.7.6.3-.2.5-.3.7-.6.6.3 3.8 3.1 3.8 5 0 1-1 1-1 1h-7c-1 0-2-.5-2.6-1.5L10.1 17c-.9-1.6-2.2-3-3.7-4.2L4 11a5 5 0 0 1 0-8"/><path d="m2.56 9.3.6 1.1C4.2 12.6 5 16.5 5 21"/></svg>'
			},
			{
				name: 'highlighter',
				title: 'Highlighter',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m9 11-6 6v3h9l3-3"/><path d="m22 12-4.6 4.6a2 2 0 0 1-2.8 0l-5.2-5.2a2 2 0 0 1 0-2.8L14 4"/></svg>'
			},
			{
				name: 'history',
				title: 'History',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5m4-1v5l4 2"/></svg>'
			},
			{
				name: 'hockey-mask',
				title: 'Hockey Mask',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M2 12a10 10 0 1 0 20 0c0-4.1-.4-6.6-1.9-8.1S16.1 2 12 2s-6.6.4-8.1 1.9S2 7.9 2 12m10-6h.01"/><circle cx="8" cy="10.5" r="2"/><circle cx="16" cy="10.5" r="2"/><path d="M8.5 17h.01M12 15h.01m3.49 2h.01"/></svg>'
			},
			{
				name: 'hockey',
				title: 'Hockey',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="17" cy="19" r="3"/><path d="M2.8 13a5.95 5.95 0 1 0 10.4 6l8.5-14a1.94 1.94 0 1 0-3.4-2L9.7 17a1.88 1.88 0 1 1-3.4-2 1.94 1.94 0 1 0-3.5-2m17.8-6.2-3.3-2.1m-2.1 3.4 3.3 2.1"/></svg>'
			},
			{
				name: 'hop-off',
				title: 'Hop Off',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10.82 16.12c1.69.6 3.91.79 5.18.85.28.01.53-.09.7-.27"/><path d="M11.14 20.57c.52.24 2.44 1.12 4.08 1.37.46.06.86-.25.9-.71.12-1.52-.3-3.43-.5-4.28"/><path d="M16.13 21.05c1.65.63 3.68.84 4.87.91a.9.9 0 0 0 .7-.26M17.99 5.52a20.8 20.8 0 0 1 3.15 4.5.8.8 0 0 1-.68 1.13c-1.17.1-2.5.02-3.9-.25"/><path d="M20.57 11.14c.24.52 1.12 2.44 1.37 4.08.04.3-.08.59-.31.75M4.93 4.93a10 10 0 0 0-.67 13.4c.35.43.96.4 1.17-.12.69-1.71 1.07-5.07 1.07-6.71 1.34.45 3.1.9 4.88.62a.85.85 0 0 0 .48-.24"/><path d="M5.52 17.99c1.05.95 2.91 2.42 4.5 3.15a.8.8 0 0 0 1.13-.68c.2-2.34-.33-5.3-1.57-8.28m-1.23-9.5a10 10 0 0 1 9.98 1.58c.43.35.4.96-.12 1.17-1.5.6-4.3.98-6.07 1.05M2 2l20 20"/></svg>'
			},
			{
				name: 'hop',
				title: 'Hop',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10.82 16.12c1.69.6 3.91.79 5.18.85.55.03 1-.42.97-.97-.06-1.27-.26-3.5-.85-5.18M11.5 6.5c1.64 0 5-.38 6.71-1.07.52-.2.55-.82.12-1.17A10 10 0 0 0 4.26 18.33c.35.43.96.4 1.17-.12.69-1.71 1.07-5.07 1.07-6.71 1.34.45 3.1.9 4.88.62a.88.88 0 0 0 .73-.74c.3-2.14-.15-3.5-.61-4.88"/><path d="M15.62 16.95c.2.85.62 2.76.5 4.28a.77.77 0 0 1-.9.7 16.6 16.6 0 0 1-4.08-1.36"/><path d="M16.13 21.05c1.65.63 3.68.84 4.87.91a.9.9 0 0 0 .96-.96 17.7 17.7 0 0 0-.9-4.87"/><path d="M16.94 15.62c.86.2 2.77.62 4.29.5a.77.77 0 0 0 .7-.9 16.6 16.6 0 0 0-1.36-4.08"/><path d="M17.99 5.52a20.8 20.8 0 0 1 3.15 4.5.8.8 0 0 1-.68 1.13c-2.33.2-5.3-.32-8.27-1.57M4.93 4.93 3 3a.7.7 0 0 1 0-1m6.58 10.18c1.24 2.98 1.77 5.95 1.57 8.28a.8.8 0 0 1-1.13.68 20.8 20.8 0 0 1-4.5-3.15"/></svg>'
			},
			{
				name: 'horse-head',
				title: 'Horse Head',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M11.5 12H11m-6 3a4 4 0 0 0 4 4h7.8l.3.3a3 3 0 0 0 4-4.46L12 7c0-3-1-5-1-5S8 3 8 7c-4 1-6 3-6 3"/><path d="M6.14 17.8S4 19 2 22"/></svg>'
			},
			{
				name: 'hospital',
				title: 'Hospital',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 7v4m2 10v-3a2 2 0 0 0-4 0v3m4-12h-4"/><path d="M18 11h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h2"/><path d="M18 21V5a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16"/></svg>'
			},
			{
				name: 'hot-dog',
				title: 'Hot Dog',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M17.1 3.5a4 4 0 0 0-5.9-.3l-8 8a4 4 0 0 0 .2 5.9m3.5 3.6a4.07 4.07 0 0 0 5.9.1l8-8a4 4 0 0 0-.1-5.9"/><path d="M21.3 6.3a2.5 2.5 0 0 0-3.5-3.5l-15 15a2.5 2.5 0 0 0 3.5 3.5Z"/></svg>'
			},
			{
				name: 'hotel',
				title: 'Hotel',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 22v-6.57M12 11h.01M12 7h.01M14 15.43V22m1-6a5 5 0 0 0-6 0m7-5h.01M16 7h.01M8 11h.01M8 7h.01"/><rect width="16" height="20" x="4" y="2" rx="2"/></svg>'
			},
			{
				name: 'hourglass',
				title: 'Hourglass',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M5 22h14M5 2h14m-2 20v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2"/></svg>'
			},
			{
				name: 'house-heart',
				title: 'House Heart',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M8.62 13.8A2.25 2.25 0 1 1 12 10.836a2.25 2.25 0 1 1 3.38 2.966l-2.626 2.856a.998.998 0 0 1-1.507 0z"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>'
			},
			{
				name: 'house-manor',
				title: 'House Manor',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M9 6V2H5v4m14 0V2h-4v4"/><rect width="20" height="16" x="2" y="6" rx="2"/><path d="M2 12h4m0 10V12l5.5-6m1 0 5.5 6v10m0-10h4m-10-1h.01M10 22v-5a2 2 0 1 1 4 0v5"/></svg>'
			},
			{
				name: 'house-off',
				title: 'House Off',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M21 15.3V9l-9-7-2.4 1.9M2 2l20 20M6.4 6.4 3 9v11a2 2 0 0 0 2 2h14a2 2 0 0 0 1.8-1.2"/><path d="M12 12H9v10m6 0v-7"/></svg>'
			},
			{
				name: 'house-plug',
				title: 'House Plug',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 12V8.964M14 12V8.964M15 12a1 1 0 0 1 1 1v2a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-2a1 1 0 0 1 1-1z"/><path d="M8.5 21H5a2 2 0 0 1-2-2v-9a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2v-2"/></svg>'
			},
			{
				name: 'house-plus',
				title: 'House Plus',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12.35 21H5a2 2 0 0 1-2-2v-9a2 2 0 0 1 .71-1.53l7-6a2 2 0 0 1 2.58 0l7 6A2 2 0 0 1 21 10v2.35"/><path d="M14.8 12.4a1 1 0 0 0-.8-.4h-4a1 1 0 0 0-1 1v8m6-3h6m-3-3v6"/></svg>'
			},
			{
				name: 'house-roof-off',
				title: 'House Roof Off',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m12 6.8 6.6 6.6a2 2 0 0 0 2.8-2.8l-8-8c-.8-.8-2-.8-2.8 0L9.2 4M2 2l20 20M6.6 6.6l-4 4a2 2 0 0 0 2.8 2.8l4-4M14 22v-6a2 2 0 0 0-4 0v6"/><path d="M4 14v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2"/></svg>'
			},
			{
				name: 'house-roof',
				title: 'House Roof',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M2.6 10.4a2.12 2.12 0 1 0 3.02 2.98L12 7l6.4 6.4a2.12 2.12 0 1 0 2.979-3.021L13.7 2.7a2.4 2.4 0 0 0-3.404.004Z"/><path d="M20 14v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-6"/><path d="M14 22v-6a2 2 0 0 0-4 0v6"/></svg>'
			},
			{
				name: 'house-wifi',
				title: 'House Wifi',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M9.5 13.866a4 4 0 0 1 5 .01M12 17h.01"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M7 10.754a8 8 0 0 1 10 0"/></svg>'
			},
			{
				name: 'house',
				title: 'House',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"/><path d="M9 22V12h6v10"/></svg>'
			},
			{
				name: 'houses',
				title: 'Houses',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M6 17H3c-.6 0-1-.4-1-1V8.5L8 4l10 7.5V19c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1v-7.5L16 4l6 4.5V16c0 .6-.4 1-1 1h-3"/><path d="M10 20v-6h4v6"/></svg>'
			},
			{
				name: 'ice-cream-bowl',
				title: 'Ice Cream Bowl',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 17c5 0 8-2.69 8-6H4c0 3.31 3 6 8 6m-4 4h8m-4-3v3M5.14 11a3.5 3.5 0 1 1 6.71 0"/><path d="M12.14 11a3.5 3.5 0 1 1 6.71 0"/><path d="M15.5 6.5a3.5 3.5 0 1 0-7 0"/></svg>'
			},
			{
				name: 'ice-cream-cone',
				title: 'Ice Cream Cone',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m7 11 4.08 10.35a1 1 0 0 0 1.84 0L17 11m0-4A5 5 0 0 0 7 7m10 0a2 2 0 0 1 0 4H7a2 2 0 0 1 0-4"/></svg>'
			},
			{
				name: 'ice-hockey',
				title: 'Ice Hockey',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 4v4c0 1.1-1.8 2-4 2s-4-.9-4-2V4"/><ellipse cx="6" cy="4" rx="4" ry="2"/><path d="M4 17a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h4a6 6 0 0 0 5.2-3l8.5-14a1.94 1.94 0 1 0-3.4-2l-7.9 13c-.4.6-1 1-1.7 1ZM20.6 6.8l-3.3-2.1m-2.1 3.4 3.3 2.1M6 17v5"/></svg>'
			},
			{
				name: 'ice-skate',
				title: 'Ice Skate',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M11 2v9m0-4L8 8m3-5L4 5v11a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2 3.08 3.08 0 0 0-1.8-2.8L11 11l-3 1m-1 6v4m8-4v4M4 22h12c2.1 0 3.9-1.1 5-2.7"/></svg>'
			},
			{
				name: 'id-card-lanyard',
				title: 'Id Card Lanyard',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M13.5 8h-3M15 2l-1 2h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h3"/><path d="M16.899 22A5 5 0 0 0 7.1 22M9 2l3 6"/><circle cx="12" cy="15" r="3"/></svg>'
			},
			{
				name: 'id-card',
				title: 'Id Card',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M16 10h2m-2 4h2M6.17 15a3 3 0 0 1 5.66 0"/><circle cx="9" cy="11" r="2"/><rect width="20" height="14" x="2" y="5" rx="2"/></svg>'
			},
			{
				name: 'igloo',
				title: 'Igloo',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M18 20.2c2.4-.7 4-1.9 4-3.2v-5a10 10 0 1 0-20 0v5c0 1.3 1.6 2.5 4 3.2"/><path d="M6.5 3.65C7.5 5 9.6 6 12 6s4.5-1 5.5-2.35"/><path d="M10.1 5.8c-1 .9-1.8 2.6-2 4.6m7.8 0c-.3-2-1-3.6-2-4.6"/><path d="M3.3 7.1C5.3 9.5 8.5 11 12 11s6.7-1.5 8.7-3.9M2 12c.9 1.2 2.4 2.4 4.3 3.1"/><path d="M6 21c0 .6.4 1 1 1h10c.6 0 1-.4 1-1v-4a6 6 0 1 0-12 0Z"/><path d="M17.7 15.1c1.9-.7 3.4-1.9 4.3-3.1M10 22v-5a2 2 0 1 1 4 0v5"/></svg>'
			},
			{
				name: 'image-down',
				title: 'Image Down',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21"/><path d="m14 19 3 3v-5.5m0 5.5 3-3"/><circle cx="9" cy="9" r="2"/></svg>'
			},
			{
				name: 'image-minus',
				title: 'Image Minus',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M21 9v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7m4 2h6"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>'
			},
			{
				name: 'image-off',
				title: 'Image Off',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m2 2 20 20M10.41 10.41a2 2 0 1 1-2.83-2.83m5.92 5.92L6 21m12-9 3 3"/><path d="M3.59 3.59A2 2 0 0 0 3 5v14a2 2 0 0 0 2 2h14c.55 0 1.052-.22 1.41-.59M21 15V5a2 2 0 0 0-2-2H9"/></svg>'
			},
			{
				name: 'image-play',
				title: 'Image Play',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M15 15.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997a1 1 0 0 1-1.517-.86z"/><path d="M21 12.17V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6m-5 0 5-5"/><circle cx="9" cy="9" r="2"/></svg>'
			},
			{
				name: 'image-plus',
				title: 'Image Plus',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M16 5h6m-3-3v6m2 3.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/><circle cx="9" cy="9" r="2"/></svg>'
			},
			{
				name: 'image-up',
				title: 'Image Up',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21"/><path d="m14 19.5 3-3 3 3M17 22v-5.5"/><circle cx="9" cy="9" r="2"/></svg>'
			},
			{
				name: 'image-upscale',
				title: 'Image Upscale',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M16 3h5v5m-4 13h2a2 2 0 0 0 2-2m0-7v3m0-12-5 5M3 7V5a2 2 0 0 1 2-2m0 18 4.144-4.144a1.21 1.21 0 0 1 1.712 0L13 19M9 3h3"/><rect width="10" height="10" x="3" y="11" rx="1"/></svg>'
			},
			{
				name: 'image',
				title: 'Image',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>'
			},
			{
				name: 'images',
				title: 'Images',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m22 11-1.296-1.296a2.4 2.4 0 0 0-3.408 0L11 16"/><path d="M4 8a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2"/><circle cx="13" cy="7" r="1" fill="currentColor"/><rect width="14" height="14" x="8" y="2" rx="2"/></svg>'
			},
			{
				name: 'import',
				title: 'Import',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 3v12m-4-4 4 4 4-4"/><path d="M8 5H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-4"/></svg>'
			},
			{
				name: 'inbox',
				title: 'Inbox',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M22 12h-6l-2 3h-4l-2-3H2"/><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11"/></svg>'
			},
			{
				name: 'indian-rupee-circle',
				title: 'Indian Rupee Circle',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M9 11h6.5m0-4H9a4 4 0 0 1 0 8l3 3"/></svg>'
			},
			{
				name: 'indian-rupee-square',
				title: 'Indian Rupee Square',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M8 7h8m-8 4h8m-4 6-4-2h1a4 4 0 0 0 0-8"/></svg>'
			},
			{
				name: 'indian-rupee',
				title: 'Indian Rupee',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M6 3h12M6 8h12M6 13l8.5 8M6 13h3m0 0c6.667 0 6.667-10 0-10"/></svg>'
			},
			{
				name: 'infinity',
				title: 'Infinity',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M6 16c5 0 7-8 12-8a4 4 0 0 1 0 8c-5 0-7-8-12-8a4 4 0 1 0 0 8"/></svg>'
			},
			{
				name: 'info',
				title: 'Info',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4m0-4h.01"/></svg>'
			},
			{
				name: 'inspection-panel',
				title: 'Inspection Panel',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 7h.01M17 7h.01M7 17h.01M17 17h.01"/></svg>'
			},
			{
				name: 'instagram',
				title: 'Instagram',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37m1.5-4.87h.01"/></svg>'
			},
			{
				name: 'intercom',
				title: 'Intercom',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="2"/><path d="M6 9v6m4-9v12m4-12v12m4-9v6"/></svg>'
			},
			{
				name: 'iron-off',
				title: 'Iron Off',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12.9 7.3C11.4 4 8.7 2 8 2m14 14.3V8a2 2 0 0 0-4 0v4.3M2 2l20 20M6 11h.01M10 11h.01M6 15h.01M10 15h.01M4.7 4.7C3.3 6.4 2 9 2 12v7h12v-5M3 22h10"/></svg>'
			},
			{
				name: 'iron',
				title: 'Iron',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M8 7h.01M6 11h.01M10 11h.01M6 15h.01M10 15h.01M14 19v-7C14 6 9 2 8 2S2 6 2 12v7h14a2 2 0 0 0 2-2V8a2 2 0 0 1 4 0v9M3 22h10"/></svg>'
			},
			{
				name: 'ironing-board',
				title: 'Ironing Board',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M6 3a4 4 0 0 0 0 8h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2Zm0 18 12-10M6 11l12 10"/></svg>'
			},
			{
				name: 'italic-square',
				title: 'Italic Square',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M16 7h-6m3.5 0-4 10m3.5 0H7"/></svg>'
			},
			{
				name: 'italic',
				title: 'Italic',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M19 4h-9m4 16H5M15 4 9 20"/></svg>'
			},
			{
				name: 'iteration-ccw',
				title: 'Iteration Ccw',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m16 14 4 4-4 4"/><path d="M20 10a8 8 0 1 0-8 8h8"/></svg>'
			},
			{
				name: 'iteration-cw',
				title: 'Iteration Cw',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M4 10a8 8 0 1 1 8 8H4"/><path d="m8 22-4-4 4-4"/></svg>'
			},
			{
				name: 'jacket-sports',
				title: 'Jacket Sports',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M8 4c0 1.1 1.8 2 4 2s4-.9 4-2V3c0-.6-.4-1-1-1H9c-.6 0-1 .4-1 1Z"/><path d="M8 4c0 2 4 5 4 10v8m0-8c0-5 4-8 4-10M6 19H3c-.6 0-1-.4-1-1V7c0-1.1.8-2.3 1.9-2.6L8 3"/><path d="M18 9v12c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9"/><path d="m16 3 4.1 1.4C21.2 4.7 22 5.9 22 7v11c0 .6-.4 1-1 1h-3M2 15h4l2-2"/><path d="M22 15h-4l-2-2M6 18h12"/></svg>'
			},
			{
				name: 'jacket',
				title: 'Jacket',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M8 4c0 1.1 1.8 2 4 2s4-.9 4-2V3c0-.6-.4-1-1-1H9c-.6 0-1 .4-1 1Z"/><path d="M8 4c0 2 4 5 4 10v8m0-8c0-5 4-8 4-10M6 19H3c-.6 0-1-.4-1-1V7c0-1.1.8-2.3 1.9-2.6L8 3"/><path d="M18 9v12c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9"/><path d="m16 3 4.1 1.4C21.2 4.7 22 5.9 22 7v11c0 .6-.4 1-1 1h-3M6 15l2-2m10 2-2-2"/></svg>'
			},
			{
				name: 'japanese-yen-circle',
				title: 'Japanese Yen Circle',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="m9 7 3 3v8m0-8 3-3m-6 4h6m-6 4h6"/></svg>'
			},
			{
				name: 'japanese-yen-square',
				title: 'Japanese Yen Square',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="m9 7 3 3v7m0-7 3-3m-6 4h6m-6 4h6"/></svg>'
			},
			{
				name: 'japanese-yen',
				title: 'Japanese Yen',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 9.5V21m0-11.5L6 3m6 6.5L18 3M6 15h12M6 11h12"/></svg>'
			},
			{
				name: 'jar',
				title: 'Jar',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M4 3h16M5 3v1.6c0 .8-.2 1.6-.7 2.2l-.7 1C3.2 8.4 3 9.2 3 10v8c0 1.7 1.3 3 3 3h12c1.7 0 3-1.3 3-3v-8c0-.8-.2-1.6-.7-2.2l-.7-1c-.4-.7-.6-1.4-.6-2.2V3M3 13h4"/><rect width="10" height="7" x="7" y="10" rx="1"/><path d="M17 13h4"/></svg>'
			},
			{
				name: 'joystick',
				title: 'Joystick',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M21 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2zM6 15v-2m6 2V9"/><circle cx="12" cy="6" r="3"/></svg>'
			},
			{
				name: 'jug',
				title: 'Jug',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m19 3-2 5H5L3 3zm0 0c1.7 0 3 1.3 3 3v4M2 16c1.08-.5 2.16-1 4.5-1 4.5 0 4.5 2 9 2 2.34 0 3.42-.5 4.5-1"/><path d="M15 21a5 5 0 0 0 4.48-7.22L17 8H5l-2.5 5.8A5 5 0 0 0 7 21Z"/></svg>'
			},
			{
				name: 'kanban',
				title: 'Kanban',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M5 3v14m7-14v8m7-8v18"/></svg>'
			},
			{
				name: 'kayak',
				title: 'Kayak',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M18 17a1 1 0 0 0-1 1v1a2 2 0 1 0 2-2zm2.97-13.39a.45.45 0 0 0-.58-.58C10.2 6.6 6.6 10.2 3.03 20.39a.45.45 0 0 0 .58.58C13.8 17.4 17.4 13.8 20.97 3.61M6.707 6.707l10.586 10.586M7 5a2 2 0 1 0-2 2h1a1 1 0 0 0 1-1z"/></svg>'
			},
			{
				name: 'kebab',
				title: 'Kebab',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m12 12 4.2-4.2c.4-.4.4-1 .1-1.5a2.9 2.9 0 1 1 4.8.8"/><path d="M15.3 11.3c.9.9.9 2.5 0 3.4l-1.6 1.6c-.9.9-2.5.9-3.4 0 .9.9.9 2.5 0 3.4l-1.6 1.6c-.9.9-2.5.9-3.4 0l-2.6-2.6c-.9-.9-.9-2.5 0-3.4l1.6-1.6c.9-.9 2.5-.9 3.4 0-.9-.9-.9-2.5 0-3.4l1.6-1.6c.9-.9 2.5-.9 3.4 0Zm-5 5-2.6-2.6M9 15l-2 2m-5 5 2-2"/></svg>'
			},
			{
				name: 'kettle-electric',
				title: 'Kettle Electric',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M2 14v-4c0-1.7 1.3-3 3-3h16v2c0 2-1.5 3.7-3.5 3.9M11 7v7"/><path d="M12 2C9.2 2 7 4.2 7 7l-.8 9c-.1 1.1.7 2 1.8 2h8c1.1 0 1.9-.9 1.8-2a1607 1607 0 0 1-.8-9c0-2.8-2.2-5-5-5M6 22h12"/></svg>'
			},
			{
				name: 'kettle',
				title: 'Kettle',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 6v1M2 22h16M3 18c-.6 0-1-.4-1-1v-2a8 8 0 0 1 16 0v2c0 .6-.4 1-1 1Z"/><path d="M5 8.8V7a5 5 0 0 1 10 0v1.8"/><path d="M18 14.5A9.06 9.06 0 0 0 22 7l-3-1c-1 2-3.5 5-9 5-2.5 0-4.4-.6-5.8-1.5"/></svg>'
			},
			{
				name: 'key-round',
				title: 'Key Round',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"/><circle cx="16.5" cy="7.5" r=".5" fill="currentColor"/></svg>'
			},
			{
				name: 'key-square',
				title: 'Key Square',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12.4 2.7a2.5 2.5 0 0 1 3.4 0l5.5 5.5a2.5 2.5 0 0 1 0 3.4l-3.7 3.7a2.5 2.5 0 0 1-3.4 0L8.7 9.8a2.5 2.5 0 0 1 0-3.4zM14 7l3 3m-7.6.6-6.814 6.814A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814"/></svg>'
			},
			{
				name: 'key',
				title: 'Key',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4m2-2-9.6 9.6"/><circle cx="7.5" cy="15.5" r="5.5"/></svg>'
			},
			{
				name: 'keyboard-music',
				title: 'Keyboard Music',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="M6 8h4m4 0h.01M18 8h.01M2 12h20M6 12v4m4-4v4m4-4v4m4-4v4"/></svg>'
			},
			{
				name: 'keyboard-off',
				title: 'Keyboard Off',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M20 4a2 2 0 0 1 2 2m0 0v10.41M7 16h9M9.69 4H20m-6 4h.01M18 8h.01M2 2l20 20m-2-2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2m2 4h.01M8 12h.01"/></svg>'
			},
			{
				name: 'keyboard',
				title: 'Keyboard',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 8h.01M12 12h.01M14 8h.01M16 12h.01M18 8h.01M6 8h.01M7 16h10m-9-4h.01"/><rect width="20" height="16" x="2" y="4" rx="2"/></svg>'
			},
			{
				name: 'kiwi',
				title: 'Kiwi',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 6v1m3 2 1-1m1 4h1m-3 3 1 1m-4 1v1m-4-2 1-1m-3-3h1m1-4 1 1"/></svg>'
			},
			{
				name: 'lamp-ceiling',
				title: 'Lamp Ceiling',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 2v5m2.829 8.998a3 3 0 1 1-5.658 0"/><path d="M20.92 14.606A1 1 0 0 1 20 16H4a1 1 0 0 1-.92-1.394l3-7A1 1 0 0 1 7 7h10a1 1 0 0 1 .92.606z"/></svg>'
			},
			{
				name: 'lamp-desk',
				title: 'Lamp Desk',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10.293 2.293a1 1 0 0 1 1.414 0l2.5 2.5 5.994 1.227a1 1 0 0 1 .506 1.687l-7 7a1 1 0 0 1-1.687-.506l-1.227-5.994-2.5-2.5a1 1 0 0 1 0-1.414zm3.914 2.5-3.414 3.414M3 20a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z"/><path d="m9.086 6.5-4.793 4.793a1 1 0 0 0-.18 1.17L7 18"/></svg>'
			},
			{
				name: 'lamp-floor',
				title: 'Lamp Floor',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 10v12m5.929-14.371A1 1 0 0 1 17 9H7a1 1 0 0 1-.928-1.371l2-5A1 1 0 0 1 9 2h6a1 1 0 0 1 .928.629zM9 22h6"/></svg>'
			},
			{
				name: 'lamp-wall-down',
				title: 'Lamp Wall Down',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M19.929 18.629A1 1 0 0 1 19 20H9a1 1 0 0 1-.928-1.371l2-5A1 1 0 0 1 11 13h6a1 1 0 0 1 .928.629zM6 3a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm2 3h4a2 2 0 0 1 2 2v5"/></svg>'
			},
			{
				name: 'lamp-wall-up',
				title: 'Lamp Wall Up',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M19.929 9.629A1 1 0 0 1 19 11H9a1 1 0 0 1-.928-1.371l2-5A1 1 0 0 1 11 4h6a1 1 0 0 1 .928.629zM6 15a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H5a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1z"/><path d="M8 18h4a2 2 0 0 0 2-2v-5"/></svg>'
			},
			{
				name: 'lamp',
				title: 'Lamp',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 12v6m-7.923-7.385A1 1 0 0 0 5 12h14a1 1 0 0 0 .923-1.385l-3.077-7.384A2 2 0 0 0 15 2H9a2 2 0 0 0-1.846 1.23ZM8 20a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1z"/></svg>'
			},
			{
				name: 'land-plot',
				title: 'Land Plot',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m12 8 6-3-6-3v10"/><path d="m8 11.99-5.5 3.14a1 1 0 0 0 0 1.74l8.5 4.86a2 2 0 0 0 2 0l8.5-4.86a1 1 0 0 0 0-1.74L16 12m-9.51.85 11.02 6.3m0-6.3L6.5 19.15"/></svg>'
			},
			{
				name: 'landmark',
				title: 'Landmark',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 18v-7m1.12-8.802a2 2 0 0 1 1.76.006l7.866 3.847c.476.233.31.949-.22.949H3.474c-.53 0-.695-.716-.22-.949zM14 18v-7m4 7v-7M3 22h18M6 18v-7"/></svg>'
			},
			{
				name: 'languages',
				title: 'Languages',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m5 8 6 6m-7 0 6-6 2-3M2 5h12M7 2h1m14 20-5-10-5 10m2-4h6"/></svg>'
			},
			{
				name: 'laptop-minimal-check',
				title: 'Laptop Minimal Check',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M2 20h20M9 10l2 2 4-4"/><rect width="18" height="12" x="3" y="4" rx="2"/></svg>'
			},
			{
				name: 'laptop-minimal',
				title: 'Laptop Minimal',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="18" height="12" x="3" y="4" rx="2" ry="2"/><path d="M2 20h20"/></svg>'
			},
			{
				name: 'laptop',
				title: 'Laptop',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M18 5a2 2 0 0 1 2 2v8.526a2 2 0 0 0 .212.897l1.068 2.127a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45l1.068-2.127A2 2 0 0 0 4 15.526V7a2 2 0 0 1 2-2zm2.054 10.987H3.946"/></svg>'
			},
			{
				name: 'lasso-select',
				title: 'Lasso Select',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M7 22a5 5 0 0 1-2-4m2-1.07c.96.43 1.96.74 2.99.91M3.34 14A6.8 6.8 0 0 1 2 10c0-4.42 4.48-8 10-8s10 3.58 10 8a7.2 7.2 0 0 1-.33 2"/><path d="M5 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4m9.33 4h-.09a.35.35 0 0 1-.24-.32v-10a.34.34 0 0 1 .33-.34c.08 0 .15.03.21.08l7.34 6a.33.33 0 0 1-.21.59h-4.49l-2.57 3.85a.35.35 0 0 1-.28.14"/></svg>'
			},
			{
				name: 'lasso',
				title: 'Lasso',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M3.704 14.467A10 8 0 0 1 2 10a10 8 0 0 1 20 0 10 8 0 0 1-10 8 10 8 0 0 1-5.181-1.158M7 22a5 5 0 0 1-2-3.994"/><circle cx="5" cy="16" r="2"/></svg>'
			},
			{
				name: 'laugh',
				title: 'Laugh',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M18 13a6 6 0 0 1-6 5 6 6 0 0 1-6-5zM9 9h.01M15 9h.01"/></svg>'
			},
			{
				name: 'layers-2',
				title: 'Layers 2',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M13 13.74a2 2 0 0 1-2 0L2.5 8.87a1 1 0 0 1 0-1.74L11 2.26a2 2 0 0 1 2 0l8.5 4.87a1 1 0 0 1 0 1.74zm7 .545 1.5.845a1 1 0 0 1 0 1.74L13 21.74a2 2 0 0 1-2 0l-8.5-4.87a1 1 0 0 1 0-1.74l1.5-.845"/></svg>'
			},
			{
				name: 'layers',
				title: 'Layers',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"/><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"/><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"/></svg>'
			},
			{
				name: 'layout-dashboard',
				title: 'Layout Dashboard',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></svg>'
			},
			{
				name: 'layout-grid-move-horizontal',
				title: 'Layout Grid Move Horizontal',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><path d="m7 14-4 4 4 4m14-4H3m14-4 4 4-4 4"/></svg>'
			},
			{
				name: 'layout-grid-move-vertical',
				title: 'Layout Grid Move Vertical',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><path d="m2 7 4-4 4 4M6 3v18m-4-4 4 4 4-4"/></svg>'
			},
			{
				name: 'layout-grid-plus',
				title: 'Layout Grid Plus',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/><path d="M17.5 3v7M14 6.5h7"/></svg>'
			},
			{
				name: 'layout-grid',
				title: 'Layout Grid',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/></svg>'
			},
			{
				name: 'layout-list-move',
				title: 'Layout List Move',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 7 6 3 2 7m4-4v18m-4-4 4 4 4-4m4-13h7m-7 5h7m-7 6h7m-7 5h7"/></svg>'
			},
			{
				name: 'layout-list',
				title: 'Layout List',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/><path d="M14 4h7m-7 5h7m-7 6h7m-7 5h7"/></svg>'
			},
			{
				name: 'layout-panel-left',
				title: 'Layout Panel Left',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="7" height="18" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/></svg>'
			},
			{
				name: 'layout-panel-top',
				title: 'Layout Panel Top',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="18" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/></svg>'
			},
			{
				name: 'layout-template',
				title: 'Layout Template',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="18" height="7" x="3" y="3" rx="1"/><rect width="9" height="7" x="3" y="14" rx="1"/><rect width="5" height="7" x="16" y="14" rx="1"/></svg>'
			},
			{
				name: 'leaf',
				title: 'Leaf',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>'
			},
			{
				name: 'leafy-green',
				title: 'Leafy Green',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M2 22c1.25-.987 2.27-1.975 3.9-2.2a5.56 5.56 0 0 1 3.8 1.5 4 4 0 0 0 6.187-2.353 3.5 3.5 0 0 0 3.69-5.116A3.5 3.5 0 0 0 20.95 8 3.5 3.5 0 1 0 16 3.05a3.5 3.5 0 0 0-5.831 1.373 3.5 3.5 0 0 0-5.116 3.69 4 4 0 0 0-2.348 6.155C3.499 15.42 4.409 16.712 4.2 18.1 3.926 19.743 3.014 20.732 2 22m0 0L17 7"/></svg>'
			},
			{
				name: 'lectern',
				title: 'Lectern',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M16 12h3a2 2 0 0 0 1.902-1.38l1.056-3.333A1 1 0 0 0 21 6H3a1 1 0 0 0-.958 1.287l1.056 3.334A2 2 0 0 0 5 12h3"/><path d="M18 6V3a1 1 0 0 0-1-1h-3"/><rect width="8" height="12" x="8" y="10" rx="1"/></svg>'
			},
			{
				name: 'lemon',
				title: 'Lemon',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M17.6 2.4c-.5.2-1.3.6-1.8.6H12a9 9 0 0 0-9 9v3.8c0 .6-.4 1.3-.6 1.8a2.95 2.95 0 0 0 4 4c.5-.2 1.3-.6 1.8-.6H12a9 9 0 0 0 9-9V8.2c0-.6.4-1.3.6-1.8a2.95 2.95 0 0 0-4-4"/><path d="M7 12c0-2.8 2.2-5 5-5"/></svg>'
			},
			{
				name: 'library-big',
				title: 'Library Big',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="8" height="18" x="3" y="3" rx="1"/><path d="M7 3v18m13.4-2.1c.2.5-.1 1.1-.6 1.3l-1.9.7c-.5.2-1.1-.1-1.3-.6L11.1 5.1c-.2-.5.1-1.1.6-1.3l1.9-.7c.5-.2 1.1.1 1.3.6Z"/></svg>'
			},
			{
				name: 'library',
				title: 'Library',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m16 6 4 14M12 6v14M8 8v12M4 4v16"/></svg>'
			},
			{
				name: 'life-buoy',
				title: 'Life Buoy',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="m4.93 4.93 4.24 4.24m5.66 0 4.24-4.24m-4.24 9.9 4.24 4.24m-9.9-4.24-4.24 4.24"/><circle cx="12" cy="12" r="4"/></svg>'
			},
			{
				name: 'life-jacket',
				title: 'Life Jacket',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 14a2.5 2.5 0 0 0-.8-1.9 3.5 3.5 0 1 1 5.6 0l-.3.4A2.5 2.5 0 0 0 14 14v5a3 3 0 1 0 6 0v-9a8 8 0 0 0-16 0v9a3 3 0 1 0 6 0Z"/></svg>'
			},
			{
				name: 'ligature-square',
				title: 'Ligature Square',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 12h3m4.4-4a3.5 3.5 0 0 0-5.9 2.5V17m1.5 0H7m7-5h1.5v5m1.5 0h-3"/></svg>'
			},
			{
				name: 'ligature',
				title: 'Ligature',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M14 12h2v8m-2 0h4M6 12h4m-4 8h4m-2 0V8a4 4 0 0 1 7.464-2"/></svg>'
			},
			{
				name: 'light-switch',
				title: 'Light Switch',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="2"/><path d="M10 8h4v8h-4zm0 4h4"/></svg>'
			},
			{
				name: 'lightbulb-off',
				title: 'Lightbulb Off',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M16.8 11.2c.8-.9 1.2-2 1.2-3.2a6 6 0 0 0-9.3-5M2 2l20 20M6.3 6.3a4.67 4.67 0 0 0 1.2 5.2c.7.7 1.3 1.5 1.5 2.5m0 4h6m-5 4h4"/></svg>'
			},
			{
				name: 'lightbulb',
				title: 'Lightbulb',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5m0 4h6m-5 4h4"/></svg>'
			},
			{
				name: 'line-squiggle',
				title: 'Line Squiggle',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M7 3.5c5-2 7 2.5 3 4C1.5 10 2 15 5 16c5 2 9-10 14-7s.5 13.5-4 12c-5-2.5.5-11 6-2"/></svg>'
			},
			{
				name: 'lingerie',
				title: 'Lingerie',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M5 2v2a2 2 0 0 0-2 2v2c0 1.7 1.3 3 3 3h2a2 2 0 0 0 2-2h4a2 2 0 0 0 2 2h2c1.7 0 3-1.3 3-3V6a2 2 0 0 0-2-2"/><path d="M10 9c0-2.8-2.2-5-5-5m14-2v2c-2.8 0-5 2.2-5 5M3 15a7 7 0 0 1 7 7h4a7 7 0 0 1 7-7Z"/></svg>'
			},
			{
				name: 'link-2-off',
				title: 'Link 2 Off',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M9 17H7A5 5 0 0 1 7 7m8 0h2a5 5 0 0 1 4 8M8 12h4M2 2l20 20"/></svg>'
			},
			{
				name: 'link-2',
				title: 'Link 2',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M9 17H7A5 5 0 0 1 7 7h2m6 0h2a5 5 0 1 1 0 10h-2m-7-5h8"/></svg>'
			},
			{
				name: 'link',
				title: 'Link',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>'
			},
			{
				name: 'linkedin',
				title: 'Linkedin',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>'
			},
			{
				name: 'list-check',
				title: 'List Check',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M16 5H3m13 7H3m8 7H3m12-1 2 2 4-4"/></svg>'
			},
			{
				name: 'list-checks',
				title: 'List Checks',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M13 5h8m-8 7h8m-8 7h8M3 17l2 2 4-4M3 7l2 2 4-4"/></svg>'
			},
			{
				name: 'list-chevrons-down-up',
				title: 'List Chevrons Down Up',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M3 5h8m-8 7h8m-8 7h8m4-14 3 3 3-3m-6 14 3-3 3 3"/></svg>'
			},
			{
				name: 'list-chevrons-up-down',
				title: 'List Chevrons Up Down',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M3 5h8m-8 7h8m-8 7h8m4-11 3-3 3 3m-6 8 3 3 3-3"/></svg>'
			},
			{
				name: 'list-collapse',
				title: 'List Collapse',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 5h11m-11 7h11m-11 7h11M3 10l3-3-3-3m0 16 3-3-3-3"/></svg>'
			},
			{
				name: 'list-end',
				title: 'List End',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M16 5H3m13 7H3m6 7H3m13-3-3 3 3 3"/><path d="M21 5v12a2 2 0 0 1-2 2h-6"/></svg>'
			},
			{
				name: 'list-filter-plus',
				title: 'List Filter Plus',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 5H2m4 7h12m-9 7h6m1-14h6m-3 3V2"/></svg>'
			},
			{
				name: 'list-filter',
				title: 'List Filter',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M2 5h20M6 12h12m-9 7h6"/></svg>'
			},
			{
				name: 'list-indent-decrease',
				title: 'List Indent Decrease',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M21 5H11m10 7H11m10 7H11M7 8l-4 4 4 4"/></svg>'
			},
			{
				name: 'list-indent-increase',
				title: 'List Indent Increase',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M21 5H11m10 7H11m10 7H11M3 8l4 4-4 4"/></svg>'
			},
			{
				name: 'list-minus',
				title: 'List Minus',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M16 5H3m8 7H3m13 7H3m18-7h-6"/></svg>'
			},
			{
				name: 'list-music',
				title: 'List Music',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M16 5H3m8 7H3m8 7H3m18-3V5"/><circle cx="18" cy="16" r="3"/></svg>'
			},
			{
				name: 'list-ordered',
				title: 'List Ordered',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M11 5h10m-10 7h10m-10 7h10M4 4h1v5M4 9h2m.5 11H3.4c0-1 2.6-1.925 2.6-3.5a1.5 1.5 0 0 0-2.6-1.02"/></svg>'
			},
			{
				name: 'list-plus',
				title: 'List Plus',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M16 5H3m8 7H3m13 7H3M18 9v6m3-3h-6"/></svg>'
			},
			{
				name: 'list-restart',
				title: 'List Restart',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M21 5H3m4 7H3m4 7H3m9-1a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L11 14"/><path d="M11 10v4h4"/></svg>'
			},
			{
				name: 'list-start',
				title: 'List Start',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M3 5h6m-6 7h13M3 19h13m0-11-3-3 3-3"/><path d="M21 19V7a2 2 0 0 0-2-2h-6"/></svg>'
			},
			{
				name: 'list-todo',
				title: 'List Todo',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M13 5h8m-8 7h8m-8 7h8M3 17l2 2 4-4"/><rect width="6" height="6" x="3" y="4" rx="1"/></svg>'
			},
			{
				name: 'list-tree',
				title: 'List Tree',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M8 5h13m-8 7h8m-8 7h8M3 10a2 2 0 0 0 2 2h3"/><path d="M3 5v12a2 2 0 0 0 2 2h3"/></svg>'
			},
			{
				name: 'list-video',
				title: 'List Video',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M21 5H3m7 7H3m7 7H3m12-6.997a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997a1 1 0 0 1-1.517-.86z"/></svg>'
			},
			{
				name: 'list-x',
				title: 'List X',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M16 5H3m8 7H3m13 7H3m12.5-9.5 5 5m0-5-5 5"/></svg>'
			},
			{
				name: 'list',
				title: 'List',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M3 5h.01M3 12h.01M3 19h.01M8 5h13M8 12h13M8 19h13"/></svg>'
			},
			{
				name: 'loader-circle',
				title: 'Loader Circle',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>'
			},
			{
				name: 'loader-pinwheel',
				title: 'Loader Pinwheel',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M22 12a1 1 0 0 1-10 0 1 1 0 0 0-10 0"/><path d="M7 20.7a1 1 0 1 1 5-8.7 1 1 0 1 0 5-8.6"/><path d="M7 3.3a1 1 0 1 1 5 8.6 1 1 0 1 0 5 8.6"/><circle cx="12" cy="12" r="10"/></svg>'
			},
			{
				name: 'loader',
				title: 'Loader',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 2v4m4.2 1.8 2.9-2.9M18 12h4m-5.8 4.2 2.9 2.9M12 18v4m-7.1-2.9 2.9-2.9M2 12h4M4.9 4.9l2.9 2.9"/></svg>'
			},
			{
				name: 'locate-fixed',
				title: 'Locate Fixed',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M2 12h3m14 0h3M12 2v3m0 14v3"/><circle cx="12" cy="12" r="7"/><circle cx="12" cy="12" r="3"/></svg>'
			},
			{
				name: 'locate-off',
				title: 'Locate Off',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 19v3m0-20v3m6.89 8.24a7 7 0 0 0-8.13-8.13M19 12h3M2 12h3M2 2l20 20M7.05 7.05a7 7 0 0 0 9.9 9.9"/></svg>'
			},
			{
				name: 'locate-square',
				title: 'Locate Square',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="14" height="14" x="5" y="5" rx="2"/><path d="M12 5V2m7 10h3M12 22v-3M2 12h3"/></svg>'
			},
			{
				name: 'locate',
				title: 'Locate',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M2 12h3m14 0h3M12 2v3m0 14v3"/><circle cx="12" cy="12" r="7"/></svg>'
			},
			{
				name: 'lock-keyhole-open',
				title: 'Lock Keyhole Open',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="16" r="1"/><rect width="18" height="12" x="3" y="10" rx="2"/><path d="M7 10V7a5 5 0 0 1 9.33-2.5"/></svg>'
			},
			{
				name: 'lock-keyhole',
				title: 'Lock Keyhole',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="16" r="1"/><rect width="18" height="12" x="3" y="10" rx="2"/><path d="M7 10V7a5 5 0 0 1 10 0v3"/></svg>'
			},
			{
				name: 'lock-open',
				title: 'Lock Open',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 9.9-1"/></svg>'
			},
			{
				name: 'lock',
				title: 'Lock',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>'
			},
			{
				name: 'log-in',
				title: 'Log In',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m10 17 5-5-5-5m5 5H3m12-9h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/></svg>'
			},
			{
				name: 'log-out',
				title: 'Log Out',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m16 17 5-5-5-5m5 5H9m0 9H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/></svg>'
			},
			{
				name: 'logs',
				title: 'Logs',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M3 5h1m-1 7h1m-1 7h1M8 5h1m-1 7h1m-1 7h1m4-14h8m-8 7h8m-8 7h8"/></svg>'
			},
			{
				name: 'lollipop',
				title: 'Lollipop',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3M11 11a2 2 0 0 0 4 0 4 4 0 0 0-8 0 6 6 0 0 0 12 0"/></svg>'
			},
			{
				name: 'luggage-cabin',
				title: 'Luggage Cabin',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M8 2h8m-6 0v5m4-5v5"/><rect width="12" height="14" x="6" y="7" rx="2"/><path d="M14 21v-8a2 2 0 1 0-4 0v8m-2 0v1m8-1v1"/></svg>'
			},
			{
				name: 'luggage',
				title: 'Luggage',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M6 20a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2"/><path d="M8 18V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v14m-6 2h4"/><circle cx="16" cy="20" r="2"/><circle cx="8" cy="20" r="2"/></svg>'
			},
			{
				name: 'lunch-box',
				title: 'Lunch Box',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><path d="M8 21a2 2 0 0 0 2-2v-8a4 4 0 0 0-8 0v8a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-8a4 4 0 0 0-4-4H6m-4 6h20"/></svg>'
			},
			{
				name: 'magnet',
				title: 'Magnet',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m12 15 4 4M2.352 10.648a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l6.029-6.029a1 1 0 1 1 3 3l-6.029 6.029a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l6.365-6.367A1 1 0 0 0 8.716 4.282zM5 8l4 4"/></svg>'
			},
			{
				name: 'mail-check',
				title: 'Mail Check',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7m14 12 2 2 4-4"/></svg>'
			},
			{
				name: 'mail-minus',
				title: 'Mail Minus',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M22 15V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7m14 12h6"/></svg>'
			},
			{
				name: 'mail-open',
				title: 'Mail Open',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0z"/><path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10"/></svg>'
			},
			{
				name: 'mail-plus',
				title: 'Mail Plus',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7m17 9v6m-3-3h6"/></svg>'
			},
			{
				name: 'mail-question-mark',
				title: 'Mail Question Mark',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M22 10.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12.5"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7m16 8.28c.2-.4.5-.8.9-1a2.1 2.1 0 0 1 2.6.4c.3.4.5.8.5 1.3 0 1.3-2 2-2 2M20 22v.01"/></svg>'
			},
			{
				name: 'mail-search',
				title: 'Mail Search',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M22 12.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h7.5"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7m16 14a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/><circle cx="18" cy="18" r="3"/><path d="m22 22-1.5-1.5"/></svg>'
			},
			{
				name: 'mail-warning',
				title: 'Mail Warning',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M22 10.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12.5"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7m18 7v4m0 4v.01"/></svg>'
			},
			{
				name: 'mail-x',
				title: 'Mail X',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h9"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7m15 10 4 4m0-4-4 4"/></svg>'
			},
			{
				name: 'mail',
				title: 'Mail',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect width="20" height="16" x="2" y="4" rx="2"/></svg>'
			},
			{
				name: 'mailbox-flag',
				title: 'Mailbox Flag',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M20 5.5A4 4 0 0 1 22 9v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a4 4 0 0 1 8 0v8a2 2 0 0 1-2 2M6 5h4"/><path d="M14 9V5h2v1h-2"/></svg>'
			},
			{
				name: 'mailbox',
				title: 'Mailbox',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M22 17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.5C2 7 4 5 6.5 5H18c2.2 0 4 1.8 4 4z"/><path d="M15 9h3v2M6.5 5C9 5 11 7 11 9.5V17a2 2 0 0 1-2 2m-3-9h1"/></svg>'
			},
			{
				name: 'mails',
				title: 'Mails',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M17 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 1-1.732M22 5.5l-6.419 4.179a2 2 0 0 1-2.162 0L7 5.5"/><rect width="15" height="12" x="7" y="3" rx="2"/></svg>'
			},
			{
				name: 'map-minus',
				title: 'Map Minus',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m11 19-1.106-.552a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0l4.212 2.106a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619V14m-6-8.236V14m6 4h-6M9 3.236v15"/></svg>'
			},
			{
				name: 'map-pin-check-inside',
				title: 'Map Pin Check Inside',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><path d="m9 10 2 2 4-4"/></svg>'
			},
			{
				name: 'map-pin-check',
				title: 'Map Pin Check',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M19.43 12.935c.357-.967.57-1.955.57-2.935a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 32 32 0 0 0 .813-.728"/><circle cx="12" cy="10" r="3"/><path d="m16 18 2 2 4-4"/></svg>'
			},
			{
				name: 'map-pin-house',
				title: 'Map Pin House',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M15 22a1 1 0 0 1-1-1v-4a1 1 0 0 1 .445-.832l3-2a1 1 0 0 1 1.11 0l3 2A1 1 0 0 1 22 17v4a1 1 0 0 1-1 1zm3-12a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 .601.2M18 22v-3"/><circle cx="10" cy="10" r="3"/></svg>'
			},
			{
				name: 'map-pin-minus-inside',
				title: 'Map Pin Minus Inside',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0M9 10h6"/></svg>'
			},
			{
				name: 'map-pin-minus',
				title: 'Map Pin Minus',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M18.977 14C19.6 12.701 20 11.343 20 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 32 32 0 0 0 .824-.738"/><circle cx="12" cy="10" r="3"/><path d="M16 18h6"/></svg>'
			},
			{
				name: 'map-pin-off',
				title: 'Map Pin Off',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12.75 7.09a3 3 0 0 1 2.16 2.16m2.162 7.822c-1.634 2.17-3.527 3.912-4.471 4.727a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 1.432-4.568M2 2l20 20"/><path d="M8.475 2.818A8 8 0 0 1 20 10c0 1.183-.31 2.377-.81 3.533M9.13 9.13a3 3 0 0 0 3.74 3.74"/></svg>'
			},
			{
				name: 'map-pin-pen',
				title: 'Map Pin Pen',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M17.97 9.304A8 8 0 0 0 2 10c0 4.69 4.887 9.562 7.022 11.468m12.356-4.842a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"/><circle cx="10" cy="10" r="3"/></svg>'
			},
			{
				name: 'map-pin-plus-inside',
				title: 'Map Pin Plus Inside',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0m-8-3v6m-3-3h6"/></svg>'
			},
			{
				name: 'map-pin-plus',
				title: 'Map Pin Plus',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M19.914 11.105A7 7 0 0 0 20 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 32 32 0 0 0 .824-.738"/><circle cx="12" cy="10" r="3"/><path d="M16 18h6m-3-3v6"/></svg>'
			},
			{
				name: 'map-pin-x-inside',
				title: 'Map Pin X Inside',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0m-5.5-2.5-5 5m0-5 5 5"/></svg>'
			},
			{
				name: 'map-pin-x',
				title: 'Map Pin X',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M19.752 11.901A7.8 7.8 0 0 0 20 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0l.09-.077"/><circle cx="12" cy="10" r="3"/><path d="m21.5 15.5-5 5m5 0-5-5"/></svg>'
			},
			{
				name: 'map-pin',
				title: 'Map Pin',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>'
			},
			{
				name: 'map-pinned',
				title: 'Map Pinned',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M18 8c0 3.613-3.869 7.429-5.393 8.795a1 1 0 0 1-1.214 0C9.87 15.429 6 11.613 6 8a6 6 0 0 1 12 0"/><circle cx="12" cy="8" r="2"/><path d="M8.714 14h-3.71a1 1 0 0 0-.948.683l-2.004 6A1 1 0 0 0 3 22h18a1 1 0 0 0 .948-1.316l-2-6a1 1 0 0 0-.949-.684h-3.712"/></svg>'
			},
			{
				name: 'map-plus',
				title: 'Map Plus',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m11 19-1.106-.552a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0l4.212 2.106a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619V12m-6-6.236V12m3 3v6m3-3h-6M9 3.236v15"/></svg>'
			},
			{
				name: 'map',
				title: 'Map',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0zm.894.211v15M9 3.236v15"/></svg>'
			},
			{
				name: 'mars-stroke',
				title: 'Mars Stroke',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m14 6 4 4m-1-7h4v4m0-4-7.75 7.75"/><circle cx="9" cy="15" r="6"/></svg>'
			},
			{
				name: 'mars',
				title: 'Mars',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M16 3h5v5m0-5-6.75 6.75"/><circle cx="10" cy="14" r="6"/></svg>'
			},
			{
				name: 'martini',
				title: 'Martini',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M8 22h8m-4-11v11m7-19-7 8-7-8Z"/></svg>'
			},
			{
				name: 'mask-snorkel',
				title: 'Mask Snorkel',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M13.5 14a2 2 0 0 1-1.4-.6l-.7-.8c-.8-.8-2-.8-2.8 0l-.7.8a2 2 0 0 1-1.4.6H6a4 4 0 0 1 0-8h8a4 4 0 0 1 0 8ZM12 18a2 2 0 0 1-4 0"/><path d="M10 20a2 2 0 0 0 2 2h4c3.3 0 6-2.7 6-6V2h-4v14a2 2 0 0 1-2 2m2-8h4"/><circle cx="4.5" cy="21.5" r=".5"/><path d="M3 17.5h.01"/></svg>'
			},
			{
				name: 'maximize-2',
				title: 'Maximize 2',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M15 3h6v6m0-6-7 7M3 21l7-7m-1 7H3v-6"/></svg>'
			},
			{
				name: 'maximize',
				title: 'Maximize',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3M3 16v3a2 2 0 0 0 2 2h3m8 0h3a2 2 0 0 0 2-2v-3"/></svg>'
			},
			{
				name: 'meal-box',
				title: 'Meal Box',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="6"/><path d="M22 12c0 3.3-2.7 6-6 6H8c-3.3 0-6-2.7-6-6m5-6h10"/><rect width="4" height="4" x="6" y="10" rx="1"/><rect width="4" height="4" x="14" y="10" rx="1"/></svg>'
			},
			{
				name: 'medal',
				title: 'Medal',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15M11 12 5.12 2.2M13 12l5.88-9.8M8 7h8"/><circle cx="12" cy="17" r="5"/><path d="M12 18v-2h-.5"/></svg>'
			},
			{
				name: 'megaphone-off',
				title: 'Megaphone Off',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M11.636 6A13 13 0 0 0 19.4 3.2 1 1 0 0 1 21 4v11.344m-6.622-.987A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h1M2 2l20 20"/><path d="M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14M8 8v6"/></svg>'
			},
			{
				name: 'megaphone',
				title: 'Megaphone',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"/><path d="M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14M8 6v8"/></svg>'
			},
			{
				name: 'meh',
				title: 'Meh',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M8 15h8M9 9h.01M15 9h.01"/></svg>'
			},
			{
				name: 'memory-stick',
				title: 'Memory Stick',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M6 19v-3m4 3v-3m4 3v-3m4 3v-3M8 11V9m8 2V9m-4 2V9M2 15h20M2 7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1.1a2 2 0 0 0 0 3.837V17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-5.1a2 2 0 0 0 0-3.837Z"/></svg>'
			},
			{
				name: 'menu',
				title: 'Menu',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M4 5h16M4 12h16M4 19h16"/></svg>'
			},
			{
				name: 'merge',
				title: 'Merge',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m8 6 4-4 4 4"/><path d="M12 2v10.3a4 4 0 0 1-1.172 2.872L4 22m16 0-5-5"/></svg>'
			},
			{
				name: 'message-circle-code',
				title: 'Message Circle Code',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m10 9-3 3 3 3m4 0 3-3-3-3"/><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"/></svg>'
			},
			{
				name: 'message-circle-dashed',
				title: 'Message Circle Dashed',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10.1 2.182a10 10 0 0 1 3.8 0m0 19.636a10 10 0 0 1-3.8 0M17.609 3.72a10 10 0 0 1 2.69 2.7M2.182 13.9a10 10 0 0 1 0-3.8m18.098 7.51a10 10 0 0 1-2.7 2.69m4.238-10.2a10 10 0 0 1 0 3.8M3.721 6.391a10 10 0 0 1 2.7-2.69m-.258 17.416-2.906.85a1 1 0 0 1-1.236-1.169l.965-2.98"/></svg>'
			},
			{
				name: 'message-circle-heart',
				title: 'Message Circle Heart',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"/><path d="M7.828 13.07A3 3 0 0 1 12 8.764a3 3 0 0 1 5.004 2.224 3 3 0 0 1-.832 2.083l-3.447 3.62a1 1 0 0 1-1.45-.001z"/></svg>'
			},
			{
				name: 'message-circle-more',
				title: 'Message Circle More',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719M8 12h.01M12 12h.01M16 12h.01"/></svg>'
			},
			{
				name: 'message-circle-off',
				title: 'Message Circle Off',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m2 2 20 20M4.93 4.929a10 10 0 0 0-1.938 11.412 2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 0 0 11.302-1.989M8.35 2.69A10 10 0 0 1 21.3 15.65"/></svg>'
			},
			{
				name: 'message-circle-plus',
				title: 'Message Circle Plus',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719M8 12h8m-4-4v8"/></svg>'
			},
			{
				name: 'message-circle-question-mark',
				title: 'Message Circle Question Mark',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3m.08 4h.01"/></svg>'
			},
			{
				name: 'message-circle-reply',
				title: 'Message Circle Reply',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"/><path d="m10 15-3-3 3-3"/><path d="M7 12h8a2 2 0 0 1 2 2v1"/></svg>'
			},
			{
				name: 'message-circle-warning',
				title: 'Message Circle Warning',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719M12 8v4m0 4h.01"/></svg>'
			},
			{
				name: 'message-circle-x',
				title: 'Message Circle X',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719M15 9l-6 6m0-6 6 6"/></svg>'
			},
			{
				name: 'message-circle',
				title: 'Message Circle',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"/></svg>'
			},
			{
				name: 'message-square-code',
				title: 'Message Square Code',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"/><path d="m10 8-3 3 3 3m4 0 3-3-3-3"/></svg>'
			},
			{
				name: 'message-square-dashed',
				title: 'Message Square Dashed',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 19h.01M12 3h.01M16 19h.01M16 3h.01M2 13h.01M2 17v4.286a.71.71 0 0 0 1.212.502l2.202-2.202A2 2 0 0 1 6.828 19H8M2 5a2 2 0 0 1 2-2M2 9h.01M20 3a2 2 0 0 1 2 2m0 8h.01M22 17a2 2 0 0 1-2 2m2-10h.01M8 3h.01"/></svg>'
			},
			{
				name: 'message-square-diff',
				title: 'Message Square Diff',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2zm-12-2h4m-4-6h4m-2-2v4"/></svg>'
			},
			{
				name: 'message-square-dot',
				title: 'Message Square Dot',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12.7 3H4a2 2 0 0 0-2 2v16.286a.71.71 0 0 0 1.212.502l2.202-2.202A2 2 0 0 1 6.828 19H20a2 2 0 0 0 2-2v-4.7"/><circle cx="19" cy="6" r="3"/></svg>'
			},
			{
				name: 'message-square-heart',
				title: 'Message Square Heart',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"/><path d="M7.5 9.5c0 .687.265 1.383.697 1.844l3.009 3.264a1.14 1.14 0 0 0 .407.314 1 1 0 0 0 .783-.004 1.14 1.14 0 0 0 .398-.31l3.008-3.264A2.77 2.77 0 0 0 16.5 9.5 2.5 2.5 0 0 0 12 8a2.5 2.5 0 0 0-4.5 1.5"/></svg>'
			},
			{
				name: 'message-square-lock',
				title: 'Message Square Lock',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M22 8.5V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v16.286a.71.71 0 0 0 1.212.502l2.202-2.202A2 2 0 0 1 6.828 19H10"/><path d="M20 15v-2a2 2 0 0 0-4 0v2"/><rect width="8" height="5" x="14" y="15" rx="1"/></svg>'
			},
			{
				name: 'message-square-more',
				title: 'Message Square More',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2zm-10-6h.01M16 11h.01M8 11h.01"/></svg>'
			},
			{
				name: 'message-square-off',
				title: 'Message Square Off',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M19 19H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.7.7 0 0 1 2 21.286V5a2 2 0 0 1 1.184-1.826M2 2l20 20M8.656 3H20a2 2 0 0 1 2 2v11.344"/></svg>'
			},
			{
				name: 'message-square-plus',
				title: 'Message Square Plus',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2zM12 8v6m-3-3h6"/></svg>'
			},
			{
				name: 'message-square-quote',
				title: 'Message Square Quote',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M14 14a2 2 0 0 0 2-2V8h-2"/><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"/><path d="M8 14a2 2 0 0 0 2-2V8H8"/></svg>'
			},
			{
				name: 'message-square-reply',
				title: 'Message Square Reply',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"/><path d="m10 8-3 3 3 3"/><path d="M17 14v-1a2 2 0 0 0-2-2H7"/></svg>'
			},
			{
				name: 'message-square-share',
				title: 'Message Square Share',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 3H4a2 2 0 0 0-2 2v16.286a.71.71 0 0 0 1.212.502l2.202-2.202A2 2 0 0 1 6.828 19H20a2 2 0 0 0 2-2v-4M16 3h6v6m-6 0 6-6"/></svg>'
			},
			{
				name: 'message-square-text',
				title: 'Message Square Text',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2zM7 11h10M7 15h6M7 7h8"/></svg>'
			},
			{
				name: 'message-square-warning',
				title: 'Message Square Warning',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2zm-10-2h.01M12 7v4"/></svg>'
			},
			{
				name: 'message-square-x',
				title: 'Message Square X',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2zm-7.5-8.5-5 5m0-5 5 5"/></svg>'
			},
			{
				name: 'message-square',
				title: 'Message Square',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"/></svg>'
			},
			{
				name: 'messages-square',
				title: 'Messages Square',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M16 10a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 14.286V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2zm4-1a2 2 0 0 1 2 2v10.286a.71.71 0 0 1-1.212.502l-2.202-2.202A2 2 0 0 0 17.172 19H10a2 2 0 0 1-2-2v-1"/></svg>'
			},
			{
				name: 'mic-off',
				title: 'Mic Off',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 19v3m3-12.66V5a3 3 0 0 0-5.68-1.33m7.63 13.28A7 7 0 0 1 5 12v-2m13.89 3.23A7 7 0 0 0 19 12v-2M2 2l20 20"/><path d="M9 9v3a3 3 0 0 0 5.12 2.12"/></svg>'
			},
			{
				name: 'mic-vocal',
				title: 'Mic Vocal',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m11 7.601-5.994 8.19a1 1 0 0 0 .1 1.298l.817.818a1 1 0 0 0 1.314.087L15.09 12"/><path d="M16.5 21.174C15.5 20.5 14.372 20 13 20c-2.058 0-3.928 2.356-6 2s-2.775-3.369-1.5-4.5"/><circle cx="16" cy="7" r="5"/></svg>'
			},
			{
				name: 'mic',
				title: 'Mic',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 19v3m7-12v2a7 7 0 0 1-14 0v-2"/><rect width="6" height="13" x="9" y="2" rx="3"/></svg>'
			},
			{
				name: 'microchip',
				title: 'Microchip',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M18 12h2m-2 4h2m-2 4h2M18 4h2m-2 4h2M4 12h2m-2 4h2m-2 4h2M4 4h2M4 8h2m2-6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-1.5c-.276 0-.494.227-.562.495a2 2 0 0 1-3.876 0C9.994 2.227 9.776 2 9.5 2z"/></svg>'
			},
			{
				name: 'microscope',
				title: 'Microscope',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M6 18h8M3 22h18m-7 0a7 7 0 1 0 0-14h-1m-4 6h2m-2-2a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Zm3-6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3"/></svg>'
			},
			{
				name: 'microwave',
				title: 'Microwave',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="20" height="15" x="2" y="4" rx="2"/><rect width="8" height="7" x="6" y="8" rx="1"/><path d="M18 8v7M6 19v2m12-2v2"/></svg>'
			},
			{
				name: 'milestone',
				title: 'Milestone',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 13v8m0-18v3M4 6a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h13a2 2 0 0 0 1.152-.365l3.424-2.317a1 1 0 0 0 0-1.635l-3.424-2.318A2 2 0 0 0 17 6z"/></svg>'
			},
			{
				name: 'milk-off',
				title: 'Milk Off',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M8 2h8M9 2v1.343M15 2v2.789a4 4 0 0 0 .672 2.219l.656.984a4 4 0 0 1 .672 2.22v1.131M7.8 7.8l-.128.192A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-3"/><path d="M7 15a6.47 6.47 0 0 1 5 0 6.47 6.47 0 0 0 3.435.435M2 2l20 20"/></svg>'
			},
			{
				name: 'milk',
				title: 'Milk',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M8 2h8M9 2v2.789a4 4 0 0 1-.672 2.219l-.656.984A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-9.789a4 4 0 0 0-.672-2.219l-.656-.984A4 4 0 0 1 15 4.788V2"/><path d="M7 15a6.47 6.47 0 0 1 5 0 6.47 6.47 0 0 0 5 0"/></svg>'
			},
			{
				name: 'minimize-2',
				title: 'Minimize 2',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m14 10 7-7m-1 7h-6V4M3 21l7-7m-6 0h6v6"/></svg>'
			},
			{
				name: 'minimize',
				title: 'Minimize',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3M3 16h3a2 2 0 0 1 2 2v3m8 0v-3a2 2 0 0 1 2-2h3"/></svg>'
			},
			{
				name: 'minus',
				title: 'Minus',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M5 12h14"/></svg>'
			},
			{
				name: 'monitor-check',
				title: 'Monitor Check',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m9 10 2 2 4-4"/><rect width="20" height="14" x="2" y="3" rx="2"/><path d="M12 17v4m-4 0h8"/></svg>'
			},
			{
				name: 'monitor-cog',
				title: 'Monitor Cog',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 17v4m2.305-13.47.923-.382m0-2.296-.923-.383m2.547-1.241-.383-.924m.383 6.468-.383.923m2.679-6.467.383-.924m-.001 7.392-.382-.924m1.624-3.92.924-.383m-.924 2.679.924.383M22 13v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7M8 21h8"/><circle cx="18" cy="6" r="3"/></svg>'
			},
			{
				name: 'monitor-dot',
				title: 'Monitor Dot',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 17v4m10-8.693V15a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h8.693M8 21h8"/><circle cx="19" cy="6" r="3"/></svg>'
			},
			{
				name: 'monitor-down',
				title: 'Monitor Down',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 13V7m3 3-3 3-3-3"/><rect width="20" height="14" x="2" y="3" rx="2"/><path d="M12 17v4m-4 0h8"/></svg>'
			},
			{
				name: 'monitor-off',
				title: 'Monitor Off',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M17 17H4a2 2 0 0 1-2-2V5c0-1.5 1-2 1-2m19 12V5a2 2 0 0 0-2-2H9M8 21h8m-4-4v4M2 2l20 20"/></svg>'
			},
			{
				name: 'monitor-pause',
				title: 'Monitor Pause',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 13V7m4 6V7"/><rect width="20" height="14" x="2" y="3" rx="2"/><path d="M12 17v4m-4 0h8"/></svg>'
			},
			{
				name: 'monitor-play',
				title: 'Monitor Play',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M15.033 9.44a.647.647 0 0 1 0 1.12l-4.065 2.352a.645.645 0 0 1-.968-.56V7.648a.645.645 0 0 1 .967-.56zM12 17v4m-4 0h8"/><rect width="20" height="14" x="2" y="3" rx="2"/></svg>'
			},
			{
				name: 'monitor-smartphone',
				title: 'Monitor Smartphone',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8m-2 4v-3.96 3.15M7 19h5"/><rect width="6" height="10" x="16" y="12" rx="2"/></svg>'
			},
			{
				name: 'monitor-speaker',
				title: 'Monitor Speaker',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M5.5 20H8m9-11h.01"/><rect width="10" height="16" x="12" y="4" rx="2"/><path d="M8 6H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h4"/><circle cx="17" cy="15" r="1"/></svg>'
			},
			{
				name: 'monitor-stop',
				title: 'Monitor Stop',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 17v4m-4 0h8"/><rect width="20" height="14" x="2" y="3" rx="2"/><rect width="6" height="6" x="9" y="7" rx="1"/></svg>'
			},
			{
				name: 'monitor-up',
				title: 'Monitor Up',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m9 10 3-3 3 3m-3 3V7"/><rect width="20" height="14" x="2" y="3" rx="2"/><path d="M12 17v4m-4 0h8"/></svg>'
			},
			{
				name: 'monitor-x',
				title: 'Monitor X',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m14.5 12.5-5-5m0 5 5-5"/><rect width="20" height="14" x="2" y="3" rx="2"/><path d="M12 17v4m-4 0h8"/></svg>'
			},
			{
				name: 'monitor',
				title: 'Monitor',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="20" height="14" x="2" y="3" rx="2"/><path d="M8 21h8m-4-4v4"/></svg>'
			},
			{
				name: 'moon-star',
				title: 'Moon Star',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M18 5h4m-2-2v4m.985 5.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"/></svg>'
			},
			{
				name: 'moon',
				title: 'Moon',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"/></svg>'
			},
			{
				name: 'mortar-pestle',
				title: 'Mortar Pestle',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M22 4a2 2 0 0 0-3-1.7l-8.5 5.1A3 3 0 0 0 12 13c.8 0 1.5-.3 2-.8l7.3-6.7c.4-.4.7-.9.7-1.5"/><path d="M22 12a10 10 0 0 1-20 0"/><path d="M11.1 7C6 7.2 2 9.4 2 12c0 2.8 4.5 5 10 5s10-2.2 10-5c0-1.5-1.4-2.9-3.6-3.8"/></svg>'
			},
			{
				name: 'motor-racing-helmet',
				title: 'Motor Racing Helmet',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M22 12.2a10 10 0 1 0-19.4 3.2c.2.5.8 1.1 1.3 1.3l13.2 5.1c.5.2 1.2 0 1.6-.3l2.6-2.6c.4-.4.7-1.2.7-1.7Z"/><path d="m21.8 18-10.5-4a2 2.06 0 0 1 .7-4h9.8"/></svg>'
			},
			{
				name: 'motorbike',
				title: 'Motorbike',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m18 14-1-3M3 9l6 2a2 2 0 0 1 2-2h2a2 2 0 0 1 1.99 1.81"/><path d="M8 17h3a1 1 0 0 0 1-1 6 6 0 0 1 6-6 1 1 0 0 0 1-1v-.75A5 5 0 0 0 17 5"/><circle cx="19" cy="17" r="3"/><circle cx="5" cy="17" r="3"/></svg>'
			},
			{
				name: 'mountain-snow',
				title: 'Mountain Snow',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m8 3 4 8 5-5 5 15H2z"/><path d="M4.14 15.08q3.93-2.355 7.86.42c2.74 1.94 5.49 2 8.23.19"/></svg>'
			},
			{
				name: 'mountain',
				title: 'Mountain',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m8 3 4 8 5-5 5 15H2z"/></svg>'
			},
			{
				name: 'mouse-off',
				title: 'Mouse Off',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 6v.343m6.218 11.875A7 7 0 0 1 5 15V9a7 7 0 0 1 .782-3.218M19 13.343V9A7 7 0 0 0 8.56 2.902M22 22 2 2"/></svg>'
			},
			{
				name: 'mouse-pointer-2',
				title: 'Mouse Pointer 2',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z"/></svg>'
			},
			{
				name: 'mouse-pointer-ban',
				title: 'Mouse Pointer Ban',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M2.034 2.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.944L8.204 7.545a1 1 0 0 0-.66.66l-1.066 3.443a.5.5 0 0 1-.944.033z"/><circle cx="16" cy="16" r="6"/><path d="m11.8 11.8 8.4 8.4"/></svg>'
			},
			{
				name: 'mouse-pointer-click',
				title: 'Mouse Pointer Click',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M14 4.1 12 6M5.1 8l-2.9-.8M6 12l-1.9 2M7.2 2.2 8 5.1m1.037 4.59a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z"/></svg>'
			},
			{
				name: 'mouse-pointer',
				title: 'Mouse Pointer',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12.586 12.586 19 19M3.688 3.037a.497.497 0 0 0-.651.651l6.5 15.999a.501.501 0 0 0 .947-.062l1.569-6.083a2 2 0 0 1 1.448-1.479l6.124-1.579a.5.5 0 0 0 .063-.947z"/></svg>'
			},
			{
				name: 'mouse',
				title: 'Mouse',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="14" height="20" x="5" y="2" rx="7"/><path d="M12 6v4"/></svg>'
			},
			{
				name: 'move-3d',
				title: 'Move 3d',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M5 3v16h16M5 19l6-6"/><path d="m2 6 3-3 3 3m10 10 3 3-3 3"/></svg>'
			},
			{
				name: 'move-diagonal-2',
				title: 'Move Diagonal 2',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M19 13v6h-6m-8-8V5h6M5 5l14 14"/></svg>'
			},
			{
				name: 'move-diagonal',
				title: 'Move Diagonal',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M11 19H5v-6m8-8h6v6m0-6L5 19"/></svg>'
			},
			{
				name: 'move-down-left',
				title: 'Move Down Left',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M11 19H5v-6m14-8L5 19"/></svg>'
			},
			{
				name: 'move-down-right',
				title: 'Move Down Right',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M19 13v6h-6M5 5l14 14"/></svg>'
			},
			{
				name: 'move-down',
				title: 'Move Down',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m8 18 4 4 4-4M12 2v20"/></svg>'
			},
			{
				name: 'move-horizontal',
				title: 'Move Horizontal',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m18 8 4 4-4 4M2 12h20M6 8l-4 4 4 4"/></svg>'
			},
			{
				name: 'move-left',
				title: 'Move Left',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m6 8-4 4 4 4m-4-4h20"/></svg>'
			},
			{
				name: 'move-right',
				title: 'Move Right',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m18 8 4 4-4 4M2 12h20"/></svg>'
			},
			{
				name: 'move-up-left',
				title: 'Move Up Left',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M5 11V5h6M5 5l14 14"/></svg>'
			},
			{
				name: 'move-up-right',
				title: 'Move Up Right',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M13 5h6v6m0-6L5 19"/></svg>'
			},
			{
				name: 'move-up',
				title: 'Move Up',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m8 6 4-4 4 4m-4-4v20"/></svg>'
			},
			{
				name: 'move-vertical',
				title: 'Move Vertical',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 2v20m-4-4 4 4 4-4M8 6l4-4 4 4"/></svg>'
			},
			{
				name: 'move',
				title: 'Move',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 2v20m3-3-3 3-3-3M19 9l3 3-3 3M2 12h20M5 9l-3 3 3 3M9 5l3-3 3 3"/></svg>'
			},
			{
				name: 'mug-teabag',
				title: 'Mug Teabag',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M17 8h1a4 4 0 1 1 0 8h-1M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Zm1-4a1 1 0 0 1 1-1 1 1 0 0 0 1-1m4 2a1 1 0 0 1 1-1 1 1 0 0 0 1-1m4 2a1 1 0 0 1 1-1 1 1 0 0 0 1-1M9 8v3"/><path d="M11 16v-3.5L9 11l-2 1.5V16Z"/></svg>'
			},
			{
				name: 'mug',
				title: 'Mug',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M17 8h1a4 4 0 1 1 0 8h-1M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Zm1-4a1 1 0 0 1 1-1 1 1 0 0 0 1-1m4 2a1 1 0 0 1 1-1 1 1 0 0 0 1-1m4 2a1 1 0 0 1 1-1 1 1 0 0 0 1-1"/></svg>'
			},
			{
				name: 'music-2',
				title: 'Music 2',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="8" cy="18" r="4"/><path d="M12 18V2l7 4"/></svg>'
			},
			{
				name: 'music-3',
				title: 'Music 3',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="18" r="4"/><path d="M16 18V2"/></svg>'
			},
			{
				name: 'music-4',
				title: 'Music 4',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M9 18V5l12-2v13M9 9l12-2"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>'
			},
			{
				name: 'music',
				title: 'Music',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>'
			},
			{
				name: 'mustache',
				title: 'Mustache',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M18.2 8.6a3.9 3.9 0 0 0-6.2-.2 3.75 3.75 0 0 0-6.2.2l-.6.8C4.5 10.4 3.3 11 2 11a5.55 5.55 0 0 0 10 3.2A5.45 5.45 0 0 0 22 11c-1.3 0-2.5-.6-3.2-1.6Z"/></svg>'
			},
			{
				name: 'navigation-2-off',
				title: 'Navigation 2 Off',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M9.31 9.31 5 21l7-4 7 4-1.17-3.17m-3.3-8.95L12 2l-1.17 3.17M2 2l20 20"/></svg>'
			},
			{
				name: 'navigation-2',
				title: 'Navigation 2',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m12 2 7 19-7-4-7 4z"/></svg>'
			},
			{
				name: 'navigation-off',
				title: 'Navigation Off',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M8.43 8.43 3 11l8 2 2 8 2.57-5.43m1.82-3.84L22 2l-9.73 4.61M2 2l20 20"/></svg>'
			},
			{
				name: 'navigation',
				title: 'Navigation',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m3 11 19-9-9 19-2-8z"/></svg>'
			},
			{
				name: 'network',
				title: 'Network',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="6" height="6" x="16" y="16" rx="1"/><rect width="6" height="6" x="2" y="16" rx="1"/><rect width="6" height="6" x="9" y="2" rx="1"/><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3m-7-4V8"/></svg>'
			},
			{
				name: 'newspaper',
				title: 'Newspaper',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M15 18h-5m8-4h-8m-6 8h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-4 0v-9a2 2 0 0 1 2-2h2"/><rect width="8" height="4" x="10" y="6" rx="1"/></svg>'
			},
			{
				name: 'nfc',
				title: 'Nfc',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M6 8.32a7.43 7.43 0 0 1 0 7.36m3.46-9.47a11.76 11.76 0 0 1 0 11.58M12.91 4.1a15.91 15.91 0 0 1 .01 15.8M16.37 2a20.16 20.16 0 0 1 0 20"/></svg>'
			},
			{
				name: 'non-binary',
				title: 'Non Binary',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 2v10M8.5 4l7 4m-7 0 7-4"/><circle cx="12" cy="17" r="5"/></svg>'
			},
			{
				name: 'notebook-pen',
				title: 'Notebook Pen',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4M2 6h4m-4 4h4m-4 4h4m-4 4h4"/><path d="M21.378 5.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"/></svg>'
			},
			{
				name: 'notebook-tabs',
				title: 'Notebook Tabs',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M2 6h4m-4 4h4m-4 4h4m-4 4h4"/><rect width="16" height="20" x="4" y="2" rx="2"/><path d="M15 2v20m0-15h5m-5 5h5m-5 5h5"/></svg>'
			},
			{
				name: 'notebook-text',
				title: 'Notebook Text',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M2 6h4m-4 4h4m-4 4h4m-4 4h4"/><rect width="16" height="20" x="4" y="2" rx="2"/><path d="M9.5 8h5m-5 4H16m-6.5 4H14"/></svg>'
			},
			{
				name: 'notebook',
				title: 'Notebook',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M2 6h4m-4 4h4m-4 4h4m-4 4h4"/><rect width="16" height="20" x="4" y="2" rx="2"/><path d="M16 2v20"/></svg>'
			},
			{
				name: 'notepad-text-dashed',
				title: 'Notepad Text Dashed',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M8 2v4m4-4v4m4-4v4m0-2h2a2 2 0 0 1 2 2v2m0 4v2m0 4v2a2 2 0 0 1-2 2h-1m-4 0h-2m-4 0H6a2 2 0 0 1-2-2v-2m0-4v-2m0-4V6a2 2 0 0 1 2-2h2m0 6h6m-6 4h8m-8 4h5"/></svg>'
			},
			{
				name: 'notepad-text',
				title: 'Notepad Text',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M8 2v4m4-4v4m4-4v4"/><rect width="16" height="18" x="4" y="4" rx="2"/><path d="M8 10h6m-6 4h8m-8 4h5"/></svg>'
			},
			{
				name: 'nut-off',
				title: 'Nut Off',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 4V2m-7 8v4a7.004 7.004 0 0 0 5.277 6.787c.412.104.802.292 1.102.592L12 22l.621-.621c.3-.3.69-.488 1.102-.592a7 7 0 0 0 4.125-2.939M19 10v3.343"/><path d="M12 12c-1.349-.573-1.905-1.005-2.5-2-.546.902-1.048 1.353-2.5 2-1.018-.644-1.46-1.08-2-2-1.028.71-1.69.918-3 1 1.081-1.048 1.757-2.03 2-3 .194-.776.84-1.551 1.79-2.21m11.654 5.997c.887-.457 1.28-.891 1.556-1.787 1.032.916 1.683 1.157 3 1-1.297-1.036-1.758-2.03-2-3-.5-2-4-4-8-4-.74 0-1.461.068-2.15.192M2 2l20 20"/></svg>'
			},
			{
				name: 'nut',
				title: 'Nut',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 4V2m-7 8v4a7.004 7.004 0 0 0 5.277 6.787c.412.104.802.292 1.102.592L12 22l.621-.621c.3-.3.69-.488 1.102-.592A7 7 0 0 0 19 14v-4"/><path d="M12 4C8 4 4.5 6 4 8c-.243.97-.919 1.952-2 3 1.31-.082 1.972-.29 3-1 .54.92.982 1.356 2 2 1.452-.647 1.954-1.098 2.5-2 .595.995 1.151 1.427 2.5 2 1.31-.621 1.862-1.058 2.5-2 .629.977 1.162 1.423 2.5 2 1.209-.548 1.68-.967 2-2 1.032.916 1.683 1.157 3 1-1.297-1.036-1.758-2.03-2-3-.5-2-4-4-8-4"/></svg>'
			},
			{
				name: 'octagon-alert',
				title: 'Octagon Alert',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 16h.01M12 8v4m3.312-10a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586l-4.688-4.688A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2z"/></svg>'
			},
			{
				name: 'octagon-minus',
				title: 'Octagon Minus',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586zM8 12h8"/></svg>'
			},
			{
				name: 'octagon-pause',
				title: 'Octagon Pause',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 15V9m4 6V9M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z"/></svg>'
			},
			{
				name: 'octagon-x',
				title: 'Octagon X',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m15 9-6 6m-6.414 1.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586zM9 9l6 6"/></svg>'
			},
			{
				name: 'octagon',
				title: 'Octagon',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z"/></svg>'
			},
			{
				name: 'olive',
				title: 'Olive',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m10 10 4-3m-4 0 4 3"/><ellipse cx="12" cy="12" rx="9" ry="10"/><path d="m2 22 5-5M18.69 5.31 22 2"/></svg>'
			},
			{
				name: 'omega',
				title: 'Omega',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M3 20h4.5a.5.5 0 0 0 .5-.5v-.282a.52.52 0 0 0-.247-.437 8 8 0 1 1 8.494-.001.52.52 0 0 0-.247.438v.282a.5.5 0 0 0 .5.5H21"/></svg>'
			},
			{
				name: 'onion',
				title: 'Onion',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="2"/><circle cx="12" cy="12" r="6"/><path d="M2.8 8.1a10 10 0 1 0 5.3-5.3C5 4 3 2 3 2L2 3s2 2 .8 5.1M18 20v2m3-1-1.9-1.9M22 18h-2"/></svg>'
			},
			{
				name: 'option',
				title: 'Option',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M3 3h6l6 18h6M14 3h7"/></svg>'
			},
			{
				name: 'orbit',
				title: 'Orbit',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M20.341 6.484A10 10 0 0 1 10.266 21.85m-6.607-4.334A10 10 0 0 1 13.74 2.152"/><circle cx="12" cy="12" r="3"/><circle cx="19" cy="5" r="2"/><circle cx="5" cy="19" r="2"/></svg>'
			},
			{
				name: 'origami',
				title: 'Origami',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 12V4a1 1 0 0 1 1-1h6.297a1 1 0 0 1 .651 1.759l-4.696 4.025M12 21l-7.414-7.414A2 2 0 0 1 4 12.172V6.415a1.002 1.002 0 0 1 1.707-.707L20 20.009"/><path d="m12.214 3.381 8.414 14.966a1 1 0 0 1-.167 1.199l-1.168 1.163a1 1 0 0 1-.706.291H6.351a1 1 0 0 1-.625-.219L3.25 18.8a1 1 0 0 1 .631-1.781l4.165.027"/></svg>'
			},
			{
				name: 'owl',
				title: 'Owl',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><ellipse cx="12" cy="9" rx="8" ry="7"/><path d="M12 9a4 4 0 1 1 8 0v12h-4C9.4 21 4 15.6 4 9a4 4 0 1 1 8 0v1M8 9h.01M16 9h.01"/><path d="M20 21a3.9 3.9 0 1 1 0-7.8m-10 6.2V22m4-1.15V22"/></svg>'
			},
			{
				name: 'pac-man-ghost',
				title: 'Pac Man Ghost',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M9 10h.01M15 10h.01M12 2a8 8 0 0 0-8 8v12l3-3 2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 0 0-8-8"/></svg>'
			},
			{
				name: 'pac-man',
				title: 'Pac Man',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m12 12 7.4 6.7a10 10 0 1 1 0-13.4Zm6 0h.01M22 12h.01"/></svg>'
			},
			{
				name: 'package-2',
				title: 'Package 2',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 3v6m4.76-6a2 2 0 0 1 1.8 1.1l2.23 4.479a2 2 0 0 1 .21.891V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9.472a2 2 0 0 1 .211-.894L5.45 4.1A2 2 0 0 1 7.24 3zM3.054 9.013h17.893"/></svg>'
			},
			{
				name: 'package-check',
				title: 'Package Check',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m16 16 2 2 4-4"/><path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14M7.5 4.27l9 5.15"/><path d="M3.29 7 12 12l8.71-5M12 22V12"/></svg>'
			},
			{
				name: 'package-minus',
				title: 'Package Minus',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M16 16h6m-1-6V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14M7.5 4.27l9 5.15"/><path d="M3.29 7 12 12l8.71-5M12 22V12"/></svg>'
			},
			{
				name: 'package-open',
				title: 'Package Open',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 22v-9m3.17-10.79a1.67 1.67 0 0 1 1.63 0L21 4.57a1.93 1.93 0 0 1 0 3.36L8.82 14.79a1.66 1.66 0 0 1-1.64 0L3 12.43a1.93 1.93 0 0 1 0-3.36z"/><path d="M20 13v3.87a2.06 2.06 0 0 1-1.11 1.83l-6 3.08a1.93 1.93 0 0 1-1.78 0l-6-3.08A2.06 2.06 0 0 1 4 16.87V13"/><path d="M21 12.43a1.93 1.93 0 0 0 0-3.36L8.83 2.2a1.64 1.64 0 0 0-1.63 0L3 4.57a1.93 1.93 0 0 0 0 3.36l12.18 6.86a1.64 1.64 0 0 0 1.63 0z"/></svg>'
			},
			{
				name: 'package-plus',
				title: 'Package Plus',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M16 16h6m-3-3v6m2-9V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14M7.5 4.27l9 5.15"/><path d="M3.29 7 12 12l8.71-5M12 22V12"/></svg>'
			},
			{
				name: 'package-search',
				title: 'Package Search',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14M7.5 4.27l9 5.15"/><path d="M3.29 7 12 12l8.71-5M12 22V12"/><circle cx="18.5" cy="15.5" r="2.5"/><path d="M20.27 17.27 22 19"/></svg>'
			},
			{
				name: 'package-x',
				title: 'Package X',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14M7.5 4.27l9 5.15"/><path d="M3.29 7 12 12l8.71-5M12 22V12m5 1 5 5m-5 0 5-5"/></svg>'
			},
			{
				name: 'package',
				title: 'Package',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73zm1 .27V12"/><path d="M3.29 7 12 12l8.71-5M7.5 4.27l9 5.15"/></svg>'
			},
			{
				name: 'paint-bucket',
				title: 'Paint Bucket',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m19 11-8-8-8.6 8.6a2 2 0 0 0 0 2.8l5.2 5.2c.8.8 2 .8 2.8 0zM5 2l5 5m-8 6h15m5 7a2 2 0 1 1-4 0c0-1.6 1.7-2.4 2-4 .3 1.6 2 2.4 2 4"/></svg>'
			},
			{
				name: 'paint-roller',
				title: 'Paint Roller',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="16" height="6" x="2" y="2" rx="2"/><path d="M10 16v-2a2 2 0 0 1 2-2h8a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/><rect width="4" height="6" x="8" y="16" rx="1"/></svg>'
			},
			{
				name: 'paintbrush-vertical',
				title: 'Paintbrush Vertical',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 2v2m4-2v4m3-4a1 1 0 0 1 1 1v9H6V3a1 1 0 0 1 1-1zM6 12a1 1 0 0 0-1 1v1a2 2 0 0 0 2 2h2a1 1 0 0 1 1 1v2.9a2 2 0 1 0 4 0V17a1 1 0 0 1 1-1h2a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1"/></svg>'
			},
			{
				name: 'paintbrush',
				title: 'Paintbrush',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m14.622 17.897-10.68-2.913M18.376 2.622a1 1 0 1 1 3.002 3.002L17.36 9.643a.5.5 0 0 0 0 .707l.944.944a2.41 2.41 0 0 1 0 3.408l-.944.944a.5.5 0 0 1-.707 0L8.354 7.348a.5.5 0 0 1 0-.707l.944-.944a2.41 2.41 0 0 1 3.408 0l.944.944a.5.5 0 0 0 .707 0zM9 8c-1.804 2.71-3.97 3.46-6.583 3.948a.507.507 0 0 0-.302.819l7.32 8.883a1 1 0 0 0 1.185.204C12.735 20.405 16 16.792 16 15"/></svg>'
			},
			{
				name: 'palette',
				title: 'Palette',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"/><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/></svg>'
			},
			{
				name: 'palmtree-island-sun',
				title: 'Palmtree Island Sun',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="6" cy="7" r="3"/><path d="M16 14s1-3 1-8V4s-1-2-3-2c-1 0-2 .5-2 .5"/><path d="M13 8a4 4 0 0 1 8 0"/><path d="M17 4s1-2 3-2c1 0 2 .5 2 .5M19.75 19A8 8 0 0 0 4 21"/><path d="M2 20c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/></svg>'
			},
			{
				name: 'pancakes',
				title: 'Pancakes',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M16 11.6c3.5-.8 6-2.5 6-4.6 0-2.8-4.5-5-10-5S2 4.2 2 7c0 2.5 3.7 4.6 8.4 5"/><path d="M3.3 9.5C2.5 10.2 2 11.1 2 12c0 2.8 4.5 5 10 5h.3m3.6-.4c3.6-.8 6.1-2.5 6.1-4.6 0-.9-.5-1.8-1.3-2.5"/><path d="M3.3 14.5C2.5 15.2 2 16.1 2 17c0 2.8 4.5 5 10 5s10-2.2 10-5c0-.9-.5-1.8-1.3-2.5"/><path d="M16 16a2 2 0 0 1-4 0v-2c0-1.1-.9-2-2-2.2-1.8-.5-3-1.6-3-2.8 0-1.7 2.2-3 5-3s5 1.3 5 3c0 .4-.1.7-.3 1.1-.3.5-.7 1.2-.7 1.7Z"/></svg>'
			},
			{
				name: 'panda',
				title: 'Panda',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M11.25 17.25h1.5L12 18zM15 12l2 2m1-7.5a.5.5 0 0 0-.5-.5"/><path d="M20.69 9.67a4.5 4.5 0 1 0-7.04-5.5 8.4 8.4 0 0 0-3.3 0 4.5 4.5 0 1 0-7.04 5.5C2.49 11.2 2 12.88 2 14.5 2 19.47 6.48 22 12 22s10-2.53 10-7.5c0-1.62-.48-3.3-1.3-4.83"/><path d="M6 6.5a.495.495 0 0 1 .5-.5M9 12l-2 2"/></svg>'
			},
			{
				name: 'panel-bottom-close',
				title: 'Panel Bottom Close',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 15h18m-6-7-3 3-3-3"/></svg>'
			},
			{
				name: 'panel-bottom-dashed',
				title: 'Panel Bottom Dashed',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M14 15h1m4 0h2M3 15h2m4 0h1"/></svg>'
			},
			{
				name: 'panel-bottom-open',
				title: 'Panel Bottom Open',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 15h18M9 10l3-3 3 3"/></svg>'
			},
			{
				name: 'panel-bottom',
				title: 'Panel Bottom',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 15h18"/></svg>'
			},
			{
				name: 'panel-left-close',
				title: 'Panel Left Close',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 3v18m7-6-3-3 3-3"/></svg>'
			},
			{
				name: 'panel-left-dashed',
				title: 'Panel Left Dashed',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 14v1m0 4v2M9 3v2m0 4v1"/></svg>'
			},
			{
				name: 'panel-left-open',
				title: 'Panel Left Open',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 3v18m5-12 3 3-3 3"/></svg>'
			},
			{
				name: 'panel-left-right-dashed',
				title: 'Panel Left Right Dashed',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M15 10V9m0 6v-1m0 7v-2m0-14V3m-6 7V9m0 6v-1m0 7v-2M9 5V3"/><rect width="18" height="18" x="3" y="3" rx="2"/></svg>'
			},
			{
				name: 'panel-left',
				title: 'Panel Left',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 3v18"/></svg>'
			},
			{
				name: 'panel-right-close',
				title: 'Panel Right Close',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M15 3v18M8 9l3 3-3 3"/></svg>'
			},
			{
				name: 'panel-right-dashed',
				title: 'Panel Right Dashed',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M15 14v1m0 4v2m0-18v2m0 4v1"/></svg>'
			},
			{
				name: 'panel-right-open',
				title: 'Panel Right Open',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M15 3v18m-5-6-3-3 3-3"/></svg>'
			},
			{
				name: 'panel-right',
				title: 'Panel Right',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M15 3v18"/></svg>'
			},
			{
				name: 'panel-top-bottom-dashed',
				title: 'Panel Top Bottom Dashed',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M14 15h1m-1-6h1m4 6h2m-2-6h2M3 15h2M3 9h2m4 6h1M9 9h1"/><rect width="18" height="18" x="3" y="3" rx="2"/></svg>'
			},
			{
				name: 'panel-top-close',
				title: 'Panel Top Close',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18M9 16l3-3 3 3"/></svg>'
			},
			{
				name: 'panel-top-dashed',
				title: 'Panel Top Dashed',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M14 9h1m4 0h2M3 9h2m4 0h1"/></svg>'
			},
			{
				name: 'panel-top-open',
				title: 'Panel Top Open',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18m-6 5-3 3-3-3"/></svg>'
			},
			{
				name: 'panel-top',
				title: 'Panel Top',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/></svg>'
			},
			{
				name: 'panels-left-bottom',
				title: 'Panels Left Bottom',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 3v18m0-6h12"/></svg>'
			},
			{
				name: 'panels-right-bottom',
				title: 'Panels Right Bottom',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 15h12m0-12v18"/></svg>'
			},
			{
				name: 'panels-top-left',
				title: 'Panels Top Left',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18M9 21V9"/></svg>'
			},
			{
				name: 'paperclip',
				title: 'Paperclip',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551"/></svg>'
			},
			{
				name: 'parentheses',
				title: 'Parentheses',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M8 21s-4-3-4-9 4-9 4-9m8 0s4 3 4 9-4 9-4 9"/></svg>'
			},
			{
				name: 'parking-meter',
				title: 'Parking Meter',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M11 15h2m-1-3v3m0 4v3m3.282-3a1 1 0 0 0 .948-.68l2.37-6.988a7 7 0 1 0-13.2 0l2.37 6.988a1 1 0 0 0 .948.68z"/><path d="M9 9a3 3 0 1 1 6 0"/></svg>'
			},
			{
				name: 'party-popper',
				title: 'Party Popper',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M5.8 11.3 2 22l10.7-3.79M4 3h.01M22 8h.01M15 2h.01M22 20h.01M22 2l-2.24.75a2.9 2.9 0 0 0-1.96 3.12c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10m8 3-.82-.33c-.86-.34-1.82.2-1.98 1.11-.11.7-.72 1.22-1.43 1.22H17M11 2l.33.82c.34.86-.2 1.82-1.11 1.98-.7.1-1.22.72-1.22 1.43V7"/><path d="M11 13c1.93 1.93 2.83 4.17 2 5s-3.07-.07-5-2-2.83-4.17-2-5 3.07.07 5 2"/></svg>'
			},
			{
				name: 'pause',
				title: 'Pause',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="5" height="18" x="14" y="3" rx="1"/><rect width="5" height="18" x="5" y="3" rx="1"/></svg>'
			},
			{
				name: 'paw-print',
				title: 'Paw Print',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="11" cy="4" r="2"/><circle cx="18" cy="8" r="2"/><circle cx="20" cy="16" r="2"/><path d="M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045q-.64-2.065-2.7-2.705A3.5 3.5 0 0 1 5.5 10Z"/></svg>'
			},
			{
				name: 'pc-case',
				title: 'Pc Case',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="14" height="20" x="5" y="2" rx="2"/><path d="M15 14h.01M9 6h6m-6 4h6"/></svg>'
			},
			{
				name: 'peace',
				title: 'Peace',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 2v20m7.1-2.9L12 12l-7 7"/></svg>'
			},
			{
				name: 'peach',
				title: 'Peach',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M14 2a2 2 0 0 0-2 2v2"/><path d="M12 6.5A6 6 0 0 1 22 11c0 6.1-4.5 11-10 11S2 17.1 2 11a6 6 0 0 1 12 0"/></svg>'
			},
			{
				name: 'pear',
				title: 'Pear',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M22 7a4.95 4.95 0 0 0-8.6-3.4c-1.5 1.6-1.6 1.8-5 2.6a8 8 0 1 0 9.4 9.5c.7-3.4 1-3.6 2.6-5 1-1 1.6-2.3 1.6-3.7m-3-2 3-3"/></svg>'
			},
			{
				name: 'pen-line',
				title: 'Pen Line',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M13 21h8m.174-14.188a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/></svg>'
			},
			{
				name: 'pen-off',
				title: 'Pen Off',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m10 10-6.157 6.162a2 2 0 0 0-.5.833l-1.322 4.36a.5.5 0 0 0 .622.624l4.358-1.323a2 2 0 0 0 .83-.5L14 13.982m-1.171-6.81 4.359-4.346a1 1 0 1 1 3.986 3.986l-4.353 4.353M2 2l20 20"/></svg>'
			},
			{
				name: 'pen-tool',
				title: 'Pen Tool',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z"/><path d="m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18M2.3 2.3l7.286 7.286"/><circle cx="11" cy="11" r="2"/></svg>'
			},
			{
				name: 'pen',
				title: 'Pen',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/></svg>'
			},
			{
				name: 'pencil-line',
				title: 'Pencil Line',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M13 21h8M15 5l4 4m2.174-2.188a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/></svg>'
			},
			{
				name: 'pencil-off',
				title: 'Pencil Off',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m10 10-6.157 6.162a2 2 0 0 0-.5.833l-1.322 4.36a.5.5 0 0 0 .622.624l4.358-1.323a2 2 0 0 0 .83-.5L14 13.982m-1.171-6.81 4.359-4.346a1 1 0 1 1 3.986 3.986l-4.353 4.353M15 5l4 4M2 2l20 20"/></svg>'
			},
			{
				name: 'pencil-ruler',
				title: 'Pencil Ruler',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M13 7 8.7 2.7a2.41 2.41 0 0 0-3.4 0L2.7 5.3a2.41 2.41 0 0 0 0 3.4L7 13m1-7 2-2m8 12 2-2m-3-3 4.3 4.3c.94.94.94 2.46 0 3.4l-2.6 2.6c-.94.94-2.46.94-3.4 0L11 17M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497zM15 5l4 4"/></svg>'
			},
			{
				name: 'pencil',
				title: 'Pencil',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497zM15 5l4 4"/></svg>'
			},
			{
				name: 'penguin',
				title: 'Penguin',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M17.9 15a5.87 5.87 0 0 0-1.7-3.3l-.2-.2c-.6-.6-1-1.5-1-2.5V5a3 3 0 1 0-6 0v4a3.74 3.74 0 0 1-1.2 2.8 6.2 6.2 0 0 0-1.7 3.3"/><path d="M9 10c-2 4-4-1-7 2m7-3.1c3-1.9 6 0 6 0s-2 3.1-3 4c-1-.9-3-4-3-4m6 1.1c2 4 4-1 7 2M2 19c0-1 1-1 1-2 0-.6.4-1 1-1 1 0 1-1 2-1 .4 0 .7.2.9.5L8.8 19a2 2 0 0 1-2.7 2.7l-3.5-1.9c-.4-.1-.6-.4-.6-.8"/><path d="M8.7 21a6.07 6.07 0 0 0 6.6 0"/><path d="M22 19c0-1-1-1-1-2 0-.6-.4-1-1-1-1 0-1-1-2-1-.4 0-.7.2-.9.5L15.2 19a2 2 0 0 0 2.7 2.7l3.5-1.9c.4-.1.6-.4.6-.8"/></svg>'
			},
			{
				name: 'pentagon',
				title: 'Pentagon',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10.83 2.38a2 2 0 0 1 2.34 0l8 5.74a2 2 0 0 1 .73 2.25l-3.04 9.26a2 2 0 0 1-1.9 1.37H7.04a2 2 0 0 1-1.9-1.37L2.1 10.37a2 2 0 0 1 .73-2.25z"/></svg>'
			},
			{
				name: 'pepper-chilli',
				title: 'Pepper Chilli',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M18 7V4a2 2 0 0 0-4 0m0 6s2 0 4 2c2-2 4-2 4-2"/><path d="M22 10c0 6.6-5.4 12-12 12-4.4 0-8-2.7-8-6v-.4C3.3 17.1 5 18 7 18c3.9 0 7-3.6 7-8 0-1.7 1.3-3 3-3h2c1.7 0 3 1.3 3 3"/></svg>'
			},
			{
				name: 'percent',
				title: 'Percent',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M19 5 5 19"/><circle cx="6.5" cy="6.5" r="2.5"/><circle cx="17.5" cy="17.5" r="2.5"/></svg>'
			},
			{
				name: 'person-standing',
				title: 'Person Standing',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="5" r="1"/><path d="m9 20 3-6 3 6M6 8l6 2 6-2m-6 2v4"/></svg>'
			},
			{
				name: 'philippine-peso',
				title: 'Philippine Peso',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M20 11H4m16-4H4m3 14V4a1 1 0 0 1 1-1h4a1 1 0 0 1 0 12H7"/></svg>'
			},
			{
				name: 'phone-call',
				title: 'Phone Call',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M13 2a9 9 0 0 1 9 9m-9-5a5 5 0 0 1 5 5m-4.168 5.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"/></svg>'
			},
			{
				name: 'phone-forwarded',
				title: 'Phone Forwarded',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M14 6h8m-4-4 4 4-4 4m-4.168 6.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"/></svg>'
			},
			{
				name: 'phone-incoming',
				title: 'Phone Incoming',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M16 2v6h6m0-6-6 6m-2.168 8.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"/></svg>'
			},
			{
				name: 'phone-missed',
				title: 'Phone Missed',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m16 2 6 6m0-6-6 6m-2.168 8.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"/></svg>'
			},
			{
				name: 'phone-off',
				title: 'Phone Off',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10.1 13.9a14 14 0 0 0 3.732 2.668 1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2 18 18 0 0 1-12.728-5.272M22 2 2 22m2.76-8.418A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 .244.473"/></svg>'
			},
			{
				name: 'phone-outgoing',
				title: 'Phone Outgoing',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m16 8 6-6m0 6V2h-6m-2.168 14.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"/></svg>'
			},
			{
				name: 'phone',
				title: 'Phone',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"/></svg>'
			},
			{
				name: 'pi',
				title: 'Pi',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M9 4v16M4 7c0-1.7 1.3-3 3-3h13"/><path d="M18 20c-1.7 0-3-1.3-3-3V4"/></svg>'
			},
			{
				name: 'piano',
				title: 'Piano',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M18.5 8c-1.4 0-2.6-.8-3.2-2A6.87 6.87 0 0 0 2 9v11a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-8.5C22 9.6 20.4 8 18.5 8M2 14h20M6 14v4m4-4v4m4-4v4m4-4v4"/></svg>'
			},
			{
				name: 'pickaxe',
				title: 'Pickaxe',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m14 13-8.381 8.38a1 1 0 0 1-3.001-3L11 9.999m4.973-5.972A13 13 0 0 0 5.902 2.373c-1.398.342-1.092 2.158.277 2.601a19.9 19.9 0 0 1 5.822 3.024m4 4.001a19.9 19.9 0 0 1 3.024 5.824c.444 1.369 2.26 1.676 2.603.278A13 13 0 0 0 20 8.069"/><path d="M18.352 3.352a1.205 1.205 0 0 0-1.704 0l-5.296 5.296a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l5.296-5.296a1.205 1.205 0 0 0 0-1.704z"/></svg>'
			},
			{
				name: 'picture-in-picture-2',
				title: 'Picture In Picture 2',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M21 9V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h4"/><rect width="10" height="7" x="12" y="13" rx="2"/></svg>'
			},
			{
				name: 'picture-in-picture',
				title: 'Picture In Picture',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M2 10h6V4M2 4l6 6m13 0V7a2 2 0 0 0-2-2h-7m-9 9v2a2 2 0 0 0 2 2h3"/><rect width="10" height="7" x="12" y="14" rx="1"/></svg>'
			},
			{
				name: 'pie',
				title: 'Pie',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M7 2C5.5 4 8.5 5 7 7m5-5c-1.5 2 1.5 3 0 5m5-5c-1.5 2 1.5 3 0 5m4 9s-2-5-9-5-9 5-9 5l1.7 5.1c.2.5.7.9 1.3.9h12c.5 0 1.1-.4 1.3-.9Z"/><path d="M2 16c1.7 0 1.6 1 3.3 1s1.7-1 3.4-1 1.6 1 3.3 1 1.7-1 3.3-1c1.7 0 1.6 1 3.3 1s1.7-1 3.3-1M8.5 16l1.5 6m5.5-6L14 22"/></svg>'
			},
			{
				name: 'pig-head',
				title: 'Pig Head',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M18 17.9c1.8-.9 3-2.5 3-5.1 0-1.8-.5-3.4-1.5-4.9 1.5-.3 2.5-1.5 2.5-3V3h-3c-1.3 0-2.4.8-2.8 2a10 10 0 0 0-8.4 0C7.4 3.8 6.3 3 5 3H2v2a3 3 0 0 0 2.5 2.9C3.5 9.3 3 11 3 12.8c0 2.6 1.2 4.2 3 5.1m4-3.9v-2m4 2v-2"/><path d="M14 22a4 4 0 1 0-2-7.45A4 4 0 1 0 10 22Zm-4-4h.01M14 18h.01"/></svg>'
			},
			{
				name: 'pig',
				title: 'Pig',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M19 4.5a4.12 4.12 0 0 0-5.5 1.6C13 6 12.5 6 12 6c-4.4 0-8 2.7-8 6 0 1.5.8 2.9 2 4v2a2 2 0 0 0 2 2h2v-2.2a12.3 12.3 0 0 0 4 0V19c0 .6.4 1 1 1h3v-4c.7-.6 1.2-1.2 1.5-2H21c.6 0 1-.4 1-1v-3h-2.5c-.4-1-1.2-1.8-2.2-2.5ZM16 11h.01"/><path d="M2.3 7a2 2 0 0 0 2.2 2.9"/></svg>'
			},
			{
				name: 'piggy-bank',
				title: 'Piggy Bank',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M11 17h3v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3a3.16 3.16 0 0 0 2-2h1a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-1a5 5 0 0 0-2-4V3a4 4 0 0 0-3.2 1.6l-.3.4H11a6 6 0 0 0-6 6v1a5 5 0 0 0 2 4v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1zm5-7h.01M2 8v1a2 2 0 0 0 2 2h1"/></svg>'
			},
			{
				name: 'pilcrow-left',
				title: 'Pilcrow Left',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M14 3v11m0-5h-3a3 3 0 0 1 0-6h9m-2 0v11m4 4H2l4-4m0 8-4-4"/></svg>'
			},
			{
				name: 'pilcrow-right',
				title: 'Pilcrow Right',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 3v11m0-5H7a1 1 0 0 1 0-6h8m-1 0v11m4 0 4 4H2m20 0-4 4"/></svg>'
			},
			{
				name: 'pilcrow',
				title: 'Pilcrow',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M13 4v16m4-16v16m2-16H9.5a4.5 4.5 0 0 0 0 9H13"/></svg>'
			},
			{
				name: 'pill-bottle',
				title: 'Pill Bottle',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M18 11h-4a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h4"/><path d="M6 7v13a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7"/><rect width="16" height="5" x="4" y="2" rx="1"/></svg>'
			},
			{
				name: 'pill',
				title: 'Pill',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7m-2-12 7 7"/></svg>'
			},
			{
				name: 'pillow',
				title: 'Pillow',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M21.3 7.5a2 2 0 1 0-2.9-2.7C17 4.3 14.6 4 12 4s-4.9.3-6.4.8a2 2 0 1 0-2.9 2.7 14 14 0 0 0 0 9 2 2 0 1 0 2.9 2.7c1.5.5 3.8.8 6.4.8s5-.3 6.4-.8a2 2 0 1 0 2.9-2.7 14 14 0 0 0 0-9"/></svg>'
			},
			{
				name: 'pin-off',
				title: 'Pin Off',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 17v5m3-12.66V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H7.89M2 2l20 20M9 9v1.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h11"/></svg>'
			},
			{
				name: 'pin-safety-open',
				title: 'Pin Safety Open',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M20.8 3.2c-1.6-1.6-4.1-1.6-5.7 0L12.3 6S15 9 18 6c-3 3 0 5.7 0 5.7l2.8-2.8c1.6-1.6 1.6-4.2 0-5.7M7.1 21.1l10.3-10.2"/><circle cx="5" cy="19" r="3"/><path d="M9 2s-4.1 9.5-6.755 15.8"/></svg>'
			},
			{
				name: 'pin-safety',
				title: 'Pin Safety',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M20.8 3.2c-1.6-1.6-4.1-1.6-5.7 0L12.3 6S15 9 18 6c-3 3 0 5.7 0 5.7l2.8-2.8c1.6-1.6 1.6-4.2 0-5.7M7.1 21.1l10.3-10.2"/><circle cx="5" cy="19" r="3"/><path d="M2.9 16.9 13.1 6.6"/></svg>'
			},
			{
				name: 'pin',
				title: 'Pin',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 17v5M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"/></svg>'
			},
			{
				name: 'pineapple-ring',
				title: 'Pineapple Ring',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><ellipse cx="12" cy="10" rx="10" ry="8"/><ellipse cx="12" cy="10" rx="3" ry="2"/><path d="m6 4 1.5 1.5m9.2-2.1L15.5 5M2 10v4c0 4.4 4.5 8 10 8s10-3.6 10-8v-4h-3"/><path d="m8 15-1 2v3.9m5-4.9v6"/></svg>'
			},
			{
				name: 'pipette',
				title: 'Pipette',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m12 9-8.414 8.414A2 2 0 0 0 3 18.828v1.344a2 2 0 0 1-.586 1.414A2 2 0 0 1 3.828 21h1.344a2 2 0 0 0 1.414-.586L15 12"/><path d="m18 9 .4.4a1 1 0 1 1-3 3l-3.8-3.8a1 1 0 1 1 3-3l.4.4 3.4-3.4a1 1 0 1 1 3 3zM2 22l.414-.414"/></svg>'
			},
			{
				name: 'pizza',
				title: 'Pizza',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m12 14-1 1m2.75 3.25-1.25 1.42m5.275-14.016a15.68 15.68 0 0 0-12.121 12.12M18.8 9.3a1 1 0 0 0 2.1 7.7"/><path d="M21.964 20.732a1 1 0 0 1-1.232 1.232l-18-5a1 1 0 0 1-.695-1.232A19.68 19.68 0 0 1 15.732 2.037a1 1 0 0 1 1.232.695z"/></svg>'
			},
			{
				name: 'plane-landing',
				title: 'Plane Landing',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M2 22h20M3.77 10.77 2 9l2-4.5 1.1.55c.55.28.9.84.9 1.45s.35 1.17.9 1.45L8 8.5l3-6 1.05.53a2 2 0 0 1 1.09 1.52l.72 5.4a2 2 0 0 0 1.09 1.52l4.4 2.2c.42.22.78.55 1.01.96l.6 1.03c.49.88-.06 1.98-1.06 2.1l-1.18.15c-.47.06-.95-.02-1.37-.24L4.29 11.15a2 2 0 0 1-.52-.38"/></svg>'
			},
			{
				name: 'plane-takeoff',
				title: 'Plane Takeoff',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M2 22h20M6.36 17.4 4 17l-2-4 1.1-.55a2 2 0 0 1 1.8 0l.17.1a2 2 0 0 0 1.8 0L8 12 5 6l.9-.45a2 2 0 0 1 2.09.2l4.02 3a2 2 0 0 0 2.1.2l4.19-2.06a2.4 2.4 0 0 1 1.73-.17L21 7a1.4 1.4 0 0 1 .87 1.99l-.38.76c-.23.46-.6.84-1.07 1.08L7.58 17.2a2 2 0 0 1-1.22.18Z"/></svg>'
			},
			{
				name: 'plane',
				title: 'Plane',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2"/></svg>'
			},
			{
				name: 'planet',
				title: 'Planet',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="8"/><path d="M4.05 13c-1.7 1.8-2.5 3.5-1.8 4.5 1.1 1.9 6.4 1 11.8-2s8.9-7.1 7.7-9c-.6-1-2.4-1.2-4.7-.7"/></svg>'
			},
			{
				name: 'play',
				title: 'Play',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"/></svg>'
			},
			{
				name: 'plug-2',
				title: 'Plug 2',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M9 2v6m6-6v6m-3 9v5M5 8h14M6 11V8h12v3a6 6 0 1 1-12 0"/></svg>'
			},
			{
				name: 'plug-zap',
				title: 'Plug Zap',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4ZM2 22l3-3m2.5-5.5L10 11m.5 5.5L13 14m5-11-4 4h6l-4 4"/></svg>'
			},
			{
				name: 'plug',
				title: 'Plug',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 22v-5M9 8V2m6 6V2m3 6v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z"/></svg>'
			},
			{
				name: 'plus',
				title: 'Plus',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M5 12h14m-7-7v14"/></svg>'
			},
			{
				name: 'pocket-knife',
				title: 'Pocket Knife',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M3 2v1c0 1 2 1 2 2S3 6 3 7s2 1 2 2-2 1-2 2 2 1 2 2m13-7h.01M6 18h.01m14.82-9.17a4 4 0 0 0-5.66-5.66l-12 12a4 4 0 1 0 5.66 5.66Z"/><path d="M18 11.66V22a4 4 0 0 0 4-4V6"/></svg>'
			},
			{
				name: 'pocket',
				title: 'Pocket',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M20 3a2 2 0 0 1 2 2v6a1 1 0 0 1-20 0V5a2 2 0 0 1 2-2z"/><path d="m8 10 4 4 4-4"/></svg>'
			},
			{
				name: 'podcast',
				title: 'Podcast',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path fill="currentColor" d="M13 17a1 1 0 1 0-2 0l.5 4.5a.5.5 0 0 0 1 0z"/><path d="M16.85 18.58a9 9 0 1 0-9.7 0"/><path d="M8 14a5 5 0 1 1 8 0"/><circle cx="12" cy="11" r="1" fill="currentColor"/></svg>'
			},
			{
				name: 'pointer-off',
				title: 'Pointer Off',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 4.5V4a2 2 0 0 0-2.41-1.957M13.9 8.4a2 2 0 0 0-1.26-1.295M21.7 16.2A8 8 0 0 0 22 14v-3a2 2 0 1 0-4 0v-1a2 2 0 0 0-3.63-1.158M7 15l-1.8-1.8a2 2 0 0 0-2.79 2.86L6 19.7a7.74 7.74 0 0 0 6 2.3h2a8 8 0 0 0 5.657-2.343M6 6v8M2 2l20 20"/></svg>'
			},
			{
				name: 'pointer',
				title: 'Pointer',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M22 14a8 8 0 0 1-8 8m4-11v-1a2 2 0 0 0-2-2 2 2 0 0 0-2 2m0 0V9a2 2 0 0 0-2-2 2 2 0 0 0-2 2v1m0-.5V4a2 2 0 0 0-2-2 2 2 0 0 0-2 2v10"/><path d="M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"/></svg>'
			},
			{
				name: 'pond',
				title: 'Pond',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M4 3v2"/><rect width="4" height="7" x="10" y="4" rx="2"/><path d="M4 12v10m8-20v2"/><rect width="4" height="7" x="2" y="5" rx="2"/><path d="M12 11v4.35m3 3.15V22c-3.8 0-7-1.6-7-3.5s3.2-3.5 7-3.5 7 1.6 7 3.5c0 1.3-1.5 2.5-3.9 3.1Z"/></svg>'
			},
			{
				name: 'popcorn',
				title: 'Popcorn',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M18 8a2 2 0 0 0 0-4 2 2 0 0 0-4 0 2 2 0 0 0-4 0 2 2 0 0 0-4 0 2 2 0 0 0 0 4m4 14L9 8m5 14 1-14"/><path d="M20 8c.5 0 .9.4.8 1l-2.6 12c-.1.5-.7 1-1.2 1H7c-.6 0-1.1-.4-1.2-1L3.2 9c-.1-.6.3-1 .8-1Z"/></svg>'
			},
			{
				name: 'popsicle',
				title: 'Popsicle',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M18.6 14.4c.8-.8.8-2 0-2.8l-8.1-8.1a4.95 4.95 0 1 0-7.1 7.1l8.1 8.1c.9.7 2.1.7 2.9-.1ZM22 22l-5.5-5.5"/></svg>'
			},
			{
				name: 'pound-sterling-circle',
				title: 'Pound Sterling Circle',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M10 17V9.5a2.5 2.5 0 0 1 5 0M8 13h5m-5 4h7"/></svg>'
			},
			{
				name: 'pound-sterling-square',
				title: 'Pound Sterling Square',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M10 17V9.5a2.5 2.5 0 0 1 5 0M8 13h5m-5 4h7"/></svg>'
			},
			{
				name: 'pound-sterling',
				title: 'Pound Sterling',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M18 7c0-5.333-8-5.333-8 0m0 0v14m-4 0h12M6 13h10"/></svg>'
			},
			{
				name: 'power-off',
				title: 'Power Off',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M18.36 6.64A9 9 0 0 1 20.77 15M6.16 6.16a9 9 0 1 0 12.68 12.68M12 2v4M2 2l20 20"/></svg>'
			},
			{
				name: 'power',
				title: 'Power',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 2v10m6.4-5.4a9 9 0 1 1-12.77.04"/></svg>'
			},
			{
				name: 'pram',
				title: 'Pram',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M18.7 4.4 14.5 10M13 10V2a8.1 8.1 0 0 1 8 8v1c0 1.7-1.3 3-3 3H6c-1.7 0-3-1.3-3-3v-1h18M8.2 18.4l3.3-4.4"/><circle cx="7" cy="20" r="2"/><path d="M15.8 18.4 5.6 4.8A1.94 1.94 0 0 0 2 6"/><circle cx="17" cy="20" r="2"/></svg>'
			},
			{
				name: 'presentation',
				title: 'Presentation',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M2 3h20m-1 0v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3m4 18 5-5 5 5"/></svg>'
			},
			{
				name: 'pretzel',
				title: 'Pretzel',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m20 19-6.5-6.5A4.9 4.9 0 0 1 12 9a5 5 0 0 1 10 0A10 10 0 0 1 2 9a5 5 0 1 1 10 0c0 1.4-.6 2.6-1.5 3.5L4 19"/></svg>'
			},
			{
				name: 'printer-check',
				title: 'Printer Check',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M13.5 22H7a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v.5M16 19l2 2 4-4"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v2M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6"/></svg>'
			},
			{
				name: 'printer',
				title: 'Printer',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6"/><rect width="12" height="8" x="6" y="14" rx="1"/></svg>'
			},
			{
				name: 'projector',
				title: 'Projector',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M5 7 3 5m6 1V3m4 4 2-2"/><circle cx="9" cy="13" r="3"/><path d="M11.83 12H20a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h2.17M16 16h2"/></svg>'
			},
			{
				name: 'proportions',
				title: 'Proportions',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="M12 9v11M2 9h13a2 2 0 0 1 2 2v9"/></svg>'
			},
			{
				name: 'pumpkin',
				title: 'Pumpkin',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M13 2c-1 1-1 2-1 2"/><path d="M17 4c-.9 0-1.8.4-2.5 1.2a3.32 3.32 0 0 0-5 0C8.8 4.4 7.9 4 7 4c-2.8 0-5 4-5 9s2.2 9 5 9c.9 0 1.8-.4 2.5-1.2a3.32 3.32 0 0 0 5 0c.7.8 1.6 1.2 2.5 1.2 2.8 0 5-4 5-9s-2.2-9-5-9"/><path d="M10 11 8 9l-2 2m12 0-2-2-2 2m-8 4 2 2 2-2 2 2 2-2 2 2 2-2"/></svg>'
			},
			{
				name: 'puzzle',
				title: 'Puzzle',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M15.39 4.39a1 1 0 0 0 1.68-.474 2.5 2.5 0 1 1 3.014 3.015 1 1 0 0 0-.474 1.68l1.683 1.682a2.414 2.414 0 0 1 0 3.414L19.61 15.39a1 1 0 0 1-1.68-.474 2.5 2.5 0 1 0-3.014 3.015 1 1 0 0 1 .474 1.68l-1.683 1.682a2.414 2.414 0 0 1-3.414 0L8.61 19.61a1 1 0 0 0-1.68.474 2.5 2.5 0 1 1-3.014-3.015 1 1 0 0 0 .474-1.68l-1.683-1.682a2.414 2.414 0 0 1 0-3.414L4.39 8.61a1 1 0 0 1 1.68.474 2.5 2.5 0 1 0 3.014-3.015 1 1 0 0 1-.474-1.68l1.683-1.682a2.414 2.414 0 0 1 3.414 0z"/></svg>'
			},
			{
				name: 'pyramid',
				title: 'Pyramid',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M2.5 16.88a1 1 0 0 1-.32-1.43l9-13.02a1 1 0 0 1 1.64 0l9 13.01a1 1 0 0 1-.32 1.44l-8.51 4.86a2 2 0 0 1-1.98 0ZM12 2v20"/></svg>'
			},
			{
				name: 'qr-code',
				title: 'Qr Code',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="5" height="5" x="3" y="3" rx="1"/><rect width="5" height="5" x="16" y="3" rx="1"/><rect width="5" height="5" x="3" y="16" rx="1"/><path d="M21 16h-3a2 2 0 0 0-2 2v3m5 0v.01M12 7v3a2 2 0 0 1-2 2H7m-4 0h.01M12 3h.01M12 16v.01M16 12h1m4 0v.01M12 21v-1"/></svg>'
			},
			{
				name: 'quote',
				title: 'Quote',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2zM5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"/></svg>'
			},
			{
				name: 'rabbit',
				title: 'Rabbit',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M13 16a3 3 0 0 1 2.24 5M18 12h.01"/><path d="M18 21h-8a4 4 0 0 1-4-4 7 7 0 0 1 7-7h.2L9.6 6.4a1 1 0 1 1 2.8-2.8L15.8 7h.2c3.3 0 6 2.7 6 6v1a2 2 0 0 1-2 2h-1a3 3 0 0 0-3 3"/><path d="M20 8.54V4a2 2 0 1 0-4 0v3m-8.388 5.524a3 3 0 1 0-1.6 4.3"/></svg>'
			},
			{
				name: 'radar',
				title: 'Radar',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M19.07 4.93A10 10 0 0 0 6.99 3.34M4 6h.01M2.29 9.62a10 10 0 1 0 19.02-1.27"/><path d="M16.24 7.76a6 6 0 1 0-8.01 8.91M12 18h.01m5.98-6.34a6 6 0 0 1-2.22 5.01"/><circle cx="12" cy="12" r="2"/><path d="m13.41 10.59 5.66-5.66"/></svg>'
			},
			{
				name: 'radiation',
				title: 'Radiation',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 12h.01M14 15.464a4 4 0 0 1-4 0l-2.472 4.282a1 1 0 0 0 .465 1.416 10 10 0 0 0 8.014 0 1 1 0 0 0 .465-1.416zM16 12a4 4 0 0 0-2-3.464l2.472-4.282a1 1 0 0 1 1.46-.305 10 10 0 0 1 4.006 6.94A1 1 0 0 1 21 12zm-8 0a4 4 0 0 1 2-3.464L7.528 4.254a1 1 0 0 0-1.46-.305 10 10 0 0 0-4.006 6.94A1 1 0 0 0 3 12z"/></svg>'
			},
			{
				name: 'radical',
				title: 'Radical',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M3 12h3.28a1 1 0 0 1 .948.684l2.298 7.934a.5.5 0 0 0 .96-.044L13.82 4.771A1 1 0 0 1 14.792 4H21"/></svg>'
			},
			{
				name: 'radio-receiver',
				title: 'Radio Receiver',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M5 16v2m14-2v2"/><rect width="20" height="8" x="2" y="8" rx="2"/><path d="M18 12h.01"/></svg>'
			},
			{
				name: 'radio-tower',
				title: 'Radio Tower',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M4.9 16.1C1 12.2 1 5.8 4.9 1.9m2.9 2.8a6.14 6.14 0 0 0-.8 7.5"/><circle cx="12" cy="9" r="2"/><path d="M16.2 4.8c2 2 2.26 5.11.8 7.47M19.1 1.9a9.96 9.96 0 0 1 0 14.1m-9.6 2h5M8 22l4-11 4 11"/></svg>'
			},
			{
				name: 'radio',
				title: 'Radio',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M16.247 7.761a6 6 0 0 1 0 8.478m2.828-11.306a10 10 0 0 1 0 14.134m-14.15 0a10 10 0 0 1 0-14.134m2.828 11.306a6 6 0 0 1 0-8.478"/><circle cx="12" cy="12" r="2"/></svg>'
			},
			{
				name: 'radius',
				title: 'Radius',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M20.34 17.52a10 10 0 1 0-2.82 2.82"/><circle cx="19" cy="19" r="2"/><path d="m13.41 13.41 4.18 4.18"/><circle cx="12" cy="12" r="2"/></svg>'
			},
			{
				name: 'rail-symbol',
				title: 'Rail Symbol',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M5 15h14M5 9h14m-5 11-5-5 6-6-5-5"/></svg>'
			},
			{
				name: 'rainbow',
				title: 'Rainbow',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M22 17a10 10 0 0 0-20 0"/><path d="M6 17a6 6 0 0 1 12 0"/><path d="M10 17a2 2 0 0 1 4 0"/></svg>'
			},
			{
				name: 'rat',
				title: 'Rat',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M13 22H4a2 2 0 0 1 0-4h12m-2.764 0a3 3 0 0 0-2.2-5M16 9h.01"/><path d="M16.82 3.94a3 3 0 1 1 3.237 4.868l1.815 2.587a1.5 1.5 0 0 1-1.5 2.1l-2.872-.453a3 3 0 0 0-3.5 3"/><path d="M17 4.988a3 3 0 1 0-5.2 2.052A7 7 0 0 0 4 14.015 4 4 0 0 0 8 18"/></svg>'
			},
			{
				name: 'ratio',
				title: 'Ratio',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="12" height="20" x="6" y="2" rx="2"/><rect width="20" height="12" x="2" y="6" rx="2"/></svg>'
			},
			{
				name: 'razor-blade',
				title: 'Razor Blade',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M22 8h-2V6H4v2H2v8h2v2h16v-2h2ZM6 11v2m4-1H6"/><circle cx="12" cy="12" r="2"/><path d="M18 12h-4m4-1v2"/></svg>'
			},
			{
				name: 'razor',
				title: 'Razor',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m22 11-1.6 1.6c-.8.8-2 .8-2.8 0l-6.2-6.2c-.8-.8-.8-2 0-2.8L13 2m2.8 2.8 3.4 3.4"/><path d="M17 12c-1.4 1.4-3.6 1.4-4.9 0s-1.4-3.6-.1-5"/><path d="m11.1 10.1-8.5 8.5a1.95 1.95 0 1 0 2.8 2.8l8.4-8.4"/></svg>'
			},
			{
				name: 'receipt-cent',
				title: 'Receipt Cent',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Zm8 4.5v11"/><path d="M15 9.4a4 4 0 1 0 0 5.2"/></svg>'
			},
			{
				name: 'receipt-euro',
				title: 'Receipt Euro',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Zm4 10h5"/><path d="M16 9.5a4 4 0 1 0 0 5.2"/></svg>'
			},
			{
				name: 'receipt-indian-rupee',
				title: 'Receipt Indian Rupee',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Zm4 5h8"/><path d="M12 17.5 8 15h1a4 4 0 0 0 0-8m-1 4h8"/></svg>'
			},
			{
				name: 'receipt-japanese-yen',
				title: 'Receipt Japanese Yen',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Zm8 8 3-3"/><path d="m9 7 3 3v7.5M9 11h6m-6 4h6"/></svg>'
			},
			{
				name: 'receipt-pound-sterling',
				title: 'Receipt Pound Sterling',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Zm4 11h5"/><path d="M10 17V9.5a2.5 2.5 0 0 1 5 0M8 17h7"/></svg>'
			},
			{
				name: 'receipt-russian-ruble',
				title: 'Receipt Russian Ruble',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Zm4 13h5"/><path d="M8 11h5a2 2 0 1 0 0-4h-3v10"/></svg>'
			},
			{
				name: 'receipt-swiss-franc',
				title: 'Receipt Swiss Franc',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"/><path d="M10 17V7h5m-5 4h4m-6 4h5"/></svg>'
			},
			{
				name: 'receipt-text',
				title: 'Receipt Text',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M13 16H8m6-8H8m8 4H8M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z"/></svg>'
			},
			{
				name: 'receipt-turkish-lira',
				title: 'Receipt Turkish Lira',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 6.5v11a5.5 5.5 0 0 0 5.5-5.5M14 8l-6 3"/><path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1z"/></svg>'
			},
			{
				name: 'receipt',
				title: 'Receipt',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8m4 1.5v-11"/></svg>'
			},
			{
				name: 'rectangle-circle',
				title: 'Rectangle Circle',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M14 4v16H3a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z"/><circle cx="14" cy="12" r="8"/></svg>'
			},
			{
				name: 'rectangle-ellipsis',
				title: 'Rectangle Ellipsis',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="20" height="12" x="2" y="6" rx="2"/><path d="M12 12h.01M17 12h.01M7 12h.01"/></svg>'
			},
			{
				name: 'rectangle-goggles',
				title: 'Rectangle Goggles',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M20 6a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-4a2 2 0 0 1-1.6-.8l-1.6-2.13a1 1 0 0 0-1.6 0L9.6 17.2A2 2 0 0 1 8 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"/></svg>'
			},
			{
				name: 'rectangle-horizontal',
				title: 'Rectangle Horizontal',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="20" height="12" x="2" y="6" rx="2"/></svg>'
			},
			{
				name: 'rectangle-vertical',
				title: 'Rectangle Vertical',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="12" height="20" x="6" y="2" rx="2"/></svg>'
			},
			{
				name: 'recycle',
				title: 'Recycle',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.79 1.79 0 0 1-.004-1.784L7.196 9.5M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.78 1.78 0 0 0 0-1.775l-1.226-2.12"/><path d="m14 16-3 3 3 3m-5.707-8.404L7.196 9.5 3.1 10.598m6.244-4.787 1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.78 1.78 0 0 1 1.546.888l3.943 6.843"/><path d="m13.378 9.633 4.096 1.098 1.097-4.096"/></svg>'
			},
			{
				name: 'redo-2',
				title: 'Redo 2',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m15 14 5-5-5-5"/><path d="M20 9H9.5A5.5 5.5 0 0 0 4 14.5 5.5 5.5 0 0 0 9.5 20H13"/></svg>'
			},
			{
				name: 'redo-dot',
				title: 'Redo Dot',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="17" r="1"/><path d="M21 7v6h-6"/><path d="M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7"/></svg>'
			},
			{
				name: 'redo',
				title: 'Redo',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M21 7v6h-6"/><path d="M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7"/></svg>'
			},
			{
				name: 'reel-thread',
				title: 'Reel Thread',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M6 6 4.4 4.6A1.5 1.5 0 0 1 5.5 2h13a1.5 1.5 0 0 1 1.1 2.5L18 6M6 6h12v12H6zm0 5 10-5"/><path d="M22 16v-3a4 4 0 0 0-4-4L6 15m2 3 10-5m0 5 1.6 1.4a1.45 1.45 0 0 1-1.1 2.5h-13a1.5 1.5 0 0 1-1.1-2.5L6 18"/></svg>'
			},
			{
				name: 'refresh-ccw-dot',
				title: 'Refresh Ccw Dot',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5m-5 4a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"/><path d="M16 16h5v5"/><circle cx="12" cy="12" r="1"/></svg>'
			},
			{
				name: 'refresh-ccw',
				title: 'Refresh Ccw',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5m-5 4a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"/><path d="M16 16h5v5"/></svg>'
			},
			{
				name: 'refresh-cw-off',
				title: 'Refresh Cw Off',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m21 8-2.26-2.26A9.75 9.75 0 0 0 12 3c-1 0-1.97.16-2.87.47M8 16H3v5m0-9c0-2.49 1-4.74 2.64-6.36"/><path d="m3 16 2.26 2.26A9.75 9.75 0 0 0 12 21c2.49 0 4.74-1 6.36-2.64M21 12c0 1-.16 1.97-.47 2.87M21 3v5h-5m6 14L2 2"/></svg>'
			},
			{
				name: 'refresh-cw',
				title: 'Refresh Cw',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5m5 4a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/></svg>'
			},
			{
				name: 'refrigerator-freezer',
				title: 'Refrigerator Freezer',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="14" height="20" x="5" y="2" rx="2"/><path d="M9 6h.01M5 10h14M9 14h.01"/></svg>'
			},
			{
				name: 'refrigerator',
				title: 'Refrigerator',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M5 6a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2zm0 4h14m-4-3v6"/></svg>'
			},
			{
				name: 'regex',
				title: 'Regex',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M17 3v10m-4.33-7.5 8.66 5m-8.66 0 8.66-5M9 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2z"/></svg>'
			},
			{
				name: 'remove-formatting-square',
				title: 'Remove Formatting Square',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 9V7h10v2m-4-2L8 17m-1 0h3m7-3-3 3m0-3 3 3"/></svg>'
			},
			{
				name: 'remove-formatting',
				title: 'Remove Formatting',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M4 7V4h16v3M5 20h6m2-16L8 20m7-5 5 5m0-5-5 5"/></svg>'
			},
			{
				name: 'repeat-1',
				title: 'Repeat 1',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m17 2 4 4-4 4"/><path d="M3 11v-1a4 4 0 0 1 4-4h14M7 22l-4-4 4-4"/><path d="M21 13v1a4 4 0 0 1-4 4H3m8-8h1v4"/></svg>'
			},
			{
				name: 'repeat-2',
				title: 'Repeat 2',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m2 9 3-3 3 3"/><path d="M13 18H7a2 2 0 0 1-2-2V6m17 9-3 3-3-3"/><path d="M11 6h6a2 2 0 0 1 2 2v10"/></svg>'
			},
			{
				name: 'repeat',
				title: 'Repeat',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m17 2 4 4-4 4"/><path d="M3 11v-1a4 4 0 0 1 4-4h14M7 22l-4-4 4-4"/><path d="M21 13v1a4 4 0 0 1-4 4H3"/></svg>'
			},
			{
				name: 'replace-all',
				title: 'Replace All',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M14 14a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1m0-17a1 1 0 0 1 1-1m0 7a1 1 0 0 1-1-1m5 5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1m2-17a1 1 0 0 0-1-1m1 6a1 1 0 0 1-1 1M3 7l3 3 3-3"/><path d="M6 10V5a2 2 0 0 1 2-2h2"/><rect width="7" height="7" x="3" y="14" rx="1"/></svg>'
			},
			{
				name: 'replace',
				title: 'Replace',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M14 4a1 1 0 0 1 1-1m0 7a1 1 0 0 1-1-1m7-5a1 1 0 0 0-1-1m1 6a1 1 0 0 1-1 1M3 7l3 3 3-3"/><path d="M6 10V5a2 2 0 0 1 2-2h2"/><rect width="7" height="7" x="3" y="14" rx="1"/></svg>'
			},
			{
				name: 'reply-all',
				title: 'Reply All',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m12 17-5-5 5-5"/><path d="M22 18v-2a4 4 0 0 0-4-4H7m0 5-5-5 5-5"/></svg>'
			},
			{
				name: 'reply',
				title: 'Reply',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M20 18v-2a4 4 0 0 0-4-4H4"/><path d="m9 17-5-5 5-5"/></svg>'
			},
			{
				name: 'rewind',
				title: 'Rewind',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 6a2 2 0 0 0-3.414-1.414l-6 6a2 2 0 0 0 0 2.828l6 6A2 2 0 0 0 12 18z"/><path d="M22 6a2 2 0 0 0-3.414-1.414l-6 6a2 2 0 0 0 0 2.828l6 6A2 2 0 0 0 22 18z"/></svg>'
			},
			{
				name: 'ribbon',
				title: 'Ribbon',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 11.22C11 9.997 10 9 10 8a2 2 0 0 1 4 0c0 1-.998 2.002-2.01 3.22M12 18l2.57-3.5"/><path d="M6.243 9.016a7 7 0 0 1 11.507-.009m-8.4 5.523L12 11.22"/><path d="M9.35 14.53C7.728 12.246 6 10.221 6 7a6 5 0 0 1 12 0c-.005 3.22-1.778 5.235-3.43 7.5l3.557 4.527a1 1 0 0 1-.203 1.43l-1.894 1.36a1 1 0 0 1-1.384-.215L12 18l-2.679 3.593a1 1 0 0 1-1.39.213l-1.865-1.353a1 1 0 0 1-.203-1.422z"/></svg>'
			},
			{
				name: 'rocket',
				title: 'Rocket',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0m1 7v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>'
			},
			{
				name: 'rocking-chair',
				title: 'Rocking Chair',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m3.5 2 3 10.5H18m-8.5 0-4 7.5m9.5-7.5 3.5 7.5M2.75 18a13 13 0 0 0 18.5 0"/></svg>'
			},
			{
				name: 'roller-coaster',
				title: 'Roller Coaster',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M6 19V5m4 14V6.8M14 19v-7.8M18 5v4m0 10v-6m4 6V9M2 19V9a4 4 0 0 1 4-4c2 0 4 1.33 6 4s4 4 6 4a4 4 0 1 0-3-6.65"/></svg>'
			},
			{
				name: 'rose',
				title: 'Rose',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M17 10h-1a4 4 0 1 1 4-4v.534"/><path d="M17 6h1a4 4 0 0 1 1.42 7.74l-2.29.87a6 6 0 0 1-5.339-10.68l2.069-1.31M4.5 17c2.8-.5 4.4 0 5.5.8s1.8 2.2 2.3 3.7c-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2"/><path d="M9.77 12C4 15 2 22 2 22"/><circle cx="17" cy="8" r="2"/></svg>'
			},
			{
				name: 'rotate-3d',
				title: 'Rotate 3d',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M16.466 7.5C15.643 4.237 13.952 2 12 2 9.239 2 7 6.477 7 12s2.239 10 5 10q.514-.002 1-.2m2.194-8.093 3.814 1.86-1.86 3.814"/><path d="M19 15.57c-1.804.885-4.274 1.43-7 1.43-5.523 0-10-2.239-10-5s4.477-5 10-5c4.838 0 8.873 1.718 9.8 4"/></svg>'
			},
			{
				name: 'rotate-ccw-key',
				title: 'Rotate Ccw Key',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m14.5 9.5 1 1m0-2-4 4M3 12a9 9 0 1 0 9-9 9.74 9.74 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><circle cx="10" cy="14" r="2"/></svg>'
			},
			{
				name: 'rotate-ccw-square',
				title: 'Rotate Ccw Square',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M20 9V7a2 2 0 0 0-2-2h-6"/><path d="m15 2-3 3 3 3m5 5v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2"/></svg>'
			},
			{
				name: 'rotate-ccw',
				title: 'Rotate Ccw',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>'
			},
			{
				name: 'rotate-cw-square',
				title: 'Rotate Cw Square',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 5H6a2 2 0 0 0-2 2v3"/><path d="m9 8 3-3-3-3M4 14v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/></svg>'
			},
			{
				name: 'rotate-cw',
				title: 'Rotate Cw',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/></svg>'
			},
			{
				name: 'route-off',
				title: 'Route Off',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="6" cy="19" r="3"/><path d="M9 19h8.5c.4 0 .9-.1 1.3-.2M5.2 5.2A3.5 3.53 0 0 0 6.5 12H12M2 2l20 20m-1-6.7a3.5 3.5 0 0 0-3.3-3.3M15 5h-4.3"/><circle cx="18" cy="5" r="3"/></svg>'
			},
			{
				name: 'route',
				title: 'Route',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="6" cy="19" r="3"/><path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"/><circle cx="18" cy="5" r="3"/></svg>'
			},
			{
				name: 'router',
				title: 'Router',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="20" height="8" x="2" y="14" rx="2"/><path d="M6.01 18H6m4.01 0H10m5-8v4m2.84-6.83a4 4 0 0 0-5.66 0m8.48-2.83a8 8 0 0 0-11.31 0"/></svg>'
			},
			{
				name: 'rows-2',
				title: 'Rows 2',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 12h18"/></svg>'
			},
			{
				name: 'rows-3',
				title: 'Rows 3',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M21 9H3m18 6H3"/></svg>'
			},
			{
				name: 'rows-4',
				title: 'Rows 4',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M21 7.5H3M21 12H3m18 4.5H3"/></svg>'
			},
			{
				name: 'rss',
				title: 'Rss',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M4 11a9 9 0 0 1 9 9M4 4a16 16 0 0 1 16 16"/><circle cx="5" cy="19" r="1"/></svg>'
			},
			{
				name: 'rugby',
				title: 'Rugby',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M15.7 2.3c-.2-.2-.9-.4-1.7-.3a4.6 4.6 0 0 0-3.7 5.7c.3.2.9.4 1.7.3a4.6 4.6 0 0 0 3.7-5.7M20 12H4"/><rect width="4" height="6" x="2" y="16" rx="1"/><path d="M4 2v14"/><rect width="4" height="6" x="18" y="16" rx="1"/><path d="M20 2v14"/></svg>'
			},
			{
				name: 'ruler-dimension-line',
				title: 'Ruler Dimension Line',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 15v-3.014M16 15v-3.014M20 6H4m16 2V4M4 8V4m4 11v-3.014"/><rect width="18" height="7" x="3" y="12" rx="1"/></svg>'
			},
			{
				name: 'ruler',
				title: 'Ruler',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Zm-6.8-2.8 2-2m-5-1 2-2m-5-1 2-2m7 11 2-2"/></svg>'
			},
			{
				name: 'russian-ruble-circle',
				title: 'Russian Ruble Circle',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M8 11h5a2 2 0 1 0 0-4h-3v10m-2-2h5"/></svg>'
			},
			{
				name: 'russian-ruble-square',
				title: 'Russian Ruble Square',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M8 15h5m-5-4h5a2 2 0 1 0 0-4h-3v10"/></svg>'
			},
			{
				name: 'russian-ruble',
				title: 'Russian Ruble',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M6 11h8a4 4 0 0 0 0-8H9v18m-3-6h8"/></svg>'
			},
			{
				name: 'sailboat',
				title: 'Sailboat',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 2v15m-3 5a4 4 0 0 1-4-4 1 1 0 0 1 1-1h16a1 1 0 0 1 1 1 4 4 0 0 1-4 4zM9.159 2.46a1 1 0 0 1 1.521-.193l9.977 8.98A1 1 0 0 1 20 13H4a1 1 0 0 1-.824-1.567z"/></svg>'
			},
			{
				name: 'salad',
				title: 'Salad',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M7 21h10m-5 0a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9"/><path d="M11.38 12a2.4 2.4 0 0 1-.4-4.77 2.4 2.4 0 0 1 3.2-2.77 2.4 2.4 0 0 1 3.47-.63 2.4 2.4 0 0 1 3.37 3.37 2.4 2.4 0 0 1-1.1 3.7 2.5 2.5 0 0 1 .03 1.1M13 12l4-4"/><path d="M10.9 7.25A3.99 3.99 0 0 0 4 10c0 .73.2 1.41.54 2"/></svg>'
			},
			{
				name: 'sandwich',
				title: 'Sandwich',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m2.37 11.223 8.372-6.777a2 2 0 0 1 2.516 0l8.371 6.777M21 15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-5.25M3 15a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h9"/><path d="m6.67 15 6.13 4.6a2 2 0 0 0 2.8-.4l3.15-4.2"/><rect width="20" height="4" x="2" y="11" rx="1"/></svg>'
			},
			{
				name: 'satellite-dish',
				title: 'Satellite Dish',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M4 10a7.31 7.31 0 0 0 10 10Zm5 5 3-3m5 1a6 6 0 0 0-6-6m10 6A10 10 0 0 0 11 3"/></svg>'
			},
			{
				name: 'satellite',
				title: 'Satellite',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m13.5 6.5-3.148-3.148a1.205 1.205 0 0 0-1.704 0L6.352 5.648a1.205 1.205 0 0 0 0 1.704L9.5 10.5m7-3L19 5m-1.5 5.5 3.148 3.148a1.205 1.205 0 0 1 0 1.704l-2.296 2.296a1.205 1.205 0 0 1-1.704 0L13.5 14.5M9 21a6 6 0 0 0-6-6"/><path d="M9.352 10.648a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l4.296-4.296a1.205 1.205 0 0 0 0-1.704l-2.296-2.296a1.205 1.205 0 0 0-1.704 0z"/></svg>'
			},
			{
				name: 'saudi-riyal',
				title: 'Saudi Riyal',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m20 19.5-5.5 1.2m0-16.7v11.22a1 1 0 0 0 1.242.97L20 15.2M2.978 19.351l5.549-1.363A2 2 0 0 0 10 16V2m10 8L4 13.5"/></svg>'
			},
			{
				name: 'sausage',
				title: 'Sausage',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M22 19a3 3 0 1 1-6 0A11 11 0 0 0 5 8a3 3 0 1 1 0-6 17 17 0 0 1 17 17m-9.2-7.8L2 22"/><path d="m9.2 8.8-2.5 2.5a3.1 3.1 0 0 0 0 4.2l1.8 1.8a3.1 3.1 0 0 0 4.2 0l2.5-2.5"/></svg>'
			},
			{
				name: 'save-all',
				title: 'Save All',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 2v3a1 1 0 0 0 1 1h5m2 12v-6a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6"/><path d="M18 22H4a2 2 0 0 1-2-2V6"/><path d="M8 18a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9.172a2 2 0 0 1 1.414.586l2.828 2.828A2 2 0 0 1 22 6.828V16a2 2 0 0 1-2.01 2z"/></svg>'
			},
			{
				name: 'save-off',
				title: 'Save Off',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M13 13H8a1 1 0 0 0-1 1v7m7-13h1m2 13v-4M2 2l20 20"/><path d="M20.41 20.41A2 2 0 0 1 19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 .59-1.41M29.5 11.5s5 5 4 5M9 3h6.2a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V15"/></svg>'
			},
			{
				name: 'save',
				title: 'Save',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"/><path d="M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7M7 3v4a1 1 0 0 0 1 1h7"/></svg>'
			},
			{
				name: 'scale-3d',
				title: 'Scale 3d',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M5 7v11a1 1 0 0 0 1 1h11m-11.707-.293L11 13"/><circle cx="19" cy="19" r="2"/><circle cx="5" cy="5" r="2"/></svg>'
			},
			{
				name: 'scale',
				title: 'Scale',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1M2 16l3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1m5 5h10M12 3v18M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"/></svg>'
			},
			{
				name: 'scaling',
				title: 'Scaling',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M14 15H9v-5m7-7h5v5m0-5L9 15"/></svg>'
			},
			{
				name: 'scan-barcode',
				title: 'Scan Barcode',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M3 7V5a2 2 0 0 1 2-2h2m10 0h2a2 2 0 0 1 2 2v2m0 10v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2M8 7v10m4-10v10m5-10v10"/></svg>'
			},
			{
				name: 'scan-eye',
				title: 'Scan Eye',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M3 7V5a2 2 0 0 1 2-2h2m10 0h2a2 2 0 0 1 2 2v2m0 10v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2"/><circle cx="12" cy="12" r="1"/><path d="M18.944 12.33a1 1 0 0 0 0-.66 7.5 7.5 0 0 0-13.888 0 1 1 0 0 0 0 .66 7.5 7.5 0 0 0 13.888 0"/></svg>'
			},
			{
				name: 'scan-face',
				title: 'Scan Face',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M3 7V5a2 2 0 0 1 2-2h2m10 0h2a2 2 0 0 1 2 2v2m0 10v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2m5-3s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01"/></svg>'
			},
			{
				name: 'scan-heart',
				title: 'Scan Heart',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M17 3h2a2 2 0 0 1 2 2v2m0 10v2a2 2 0 0 1-2 2h-2M3 7V5a2 2 0 0 1 2-2h2m0 18H5a2 2 0 0 1-2-2v-2m4.828-3.93A3 3 0 0 1 12 8.764a3 3 0 0 1 4.172 4.306l-3.447 3.62a1 1 0 0 1-1.449 0z"/></svg>'
			},
			{
				name: 'scan-line',
				title: 'Scan Line',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M3 7V5a2 2 0 0 1 2-2h2m10 0h2a2 2 0 0 1 2 2v2m0 10v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2m4-5h10"/></svg>'
			},
			{
				name: 'scan-qr-code',
				title: 'Scan Qr Code',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M17 12v4a1 1 0 0 1-1 1h-4m5-14h2a2 2 0 0 1 2 2v2m-4 1V7m4 10v2a2 2 0 0 1-2 2h-2M3 7V5a2 2 0 0 1 2-2h2m0 14h.01M7 21H5a2 2 0 0 1-2-2v-2"/><rect width="5" height="5" x="7" y="7" rx="1"/></svg>'
			},
			{
				name: 'scan-search',
				title: 'Scan Search',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M3 7V5a2 2 0 0 1 2-2h2m10 0h2a2 2 0 0 1 2 2v2m0 10v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2"/><circle cx="12" cy="12" r="3"/><path d="m16 16-1.9-1.9"/></svg>'
			},
			{
				name: 'scan-text',
				title: 'Scan Text',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M3 7V5a2 2 0 0 1 2-2h2m10 0h2a2 2 0 0 1 2 2v2m0 10v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2m4-9h8m-8 4h10M7 16h6"/></svg>'
			},
			{
				name: 'scan',
				title: 'Scan',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M3 7V5a2 2 0 0 1 2-2h2m10 0h2a2 2 0 0 1 2 2v2m0 10v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2"/></svg>'
			},
			{
				name: 'scarf',
				title: 'Scarf',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M19.5 2.5 7 15c-.5.5-.6 1.5-.2 2L9 20 21.6 7.6a2 1.7 0 0 0 .1-1.9l-2-3c-.2-.4-.7-.7-1.2-.7h-13c-.5 0-1 .3-1.2.7l-2 3a2 1.7 0 0 0 .2 2l6 5.8M12 10 4.5 2.5M13 20v2m3-16H8m9 6.1V22m0-4h4m-4 2H9v2M21 8.2V20"/></svg>'
			},
			{
				name: 'school',
				title: 'School',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M14 21v-3a2 2 0 0 0-4 0v3m8-16v16M4 6l7.106-3.79a2 2 0 0 1 1.788 0L20 6"/><path d="m6 11-3.52 2.147a1 1 0 0 0-.48.854V19a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a1 1 0 0 0-.48-.853L18 11M6 5v16"/><circle cx="12" cy="9" r="2"/></svg>'
			},
			{
				name: 'scissors-hair-comb',
				title: 'Scissors Hair Comb',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M6 2C5 5 7 5 6 8m4-6c-1 3 1 3 0 6"/><circle cx="4" cy="20" r="2"/><path d="M5.4 18.6 8 16m2.8-2.8L14 10"/><circle cx="12" cy="20" r="2"/><path d="m2 10 8.6 8.6M18 2h2a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2m0-16h4m-4 4h4m-4 4h4m-4 4h4"/></svg>'
			},
			{
				name: 'scissors-line-dashed',
				title: 'Scissors Line Dashed',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M5.42 9.42 8 12"/><circle cx="4" cy="8" r="2"/><path d="m14 6-8.58 8.58"/><circle cx="4" cy="16" r="2"/><path d="M10.8 14.8 14 18m2-6h-2m8 0h-2"/></svg>'
			},
			{
				name: 'scissors',
				title: 'Scissors',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="6" cy="6" r="3"/><path d="M8.12 8.12 12 12m8-8L8.12 15.88"/><circle cx="6" cy="18" r="3"/><path d="M14.8 14.8 20 20"/></svg>'
			},
			{
				name: 'screen-share-off',
				title: 'Screen Share Off',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M13 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3M8 21h8m-4-4v4M22 3l-5 5m0-5 5 5"/></svg>'
			},
			{
				name: 'screen-share',
				title: 'Screen Share',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M13 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3M8 21h8m-4-4v4m5-13 5-5m-5 0h5v5"/></svg>'
			},
			{
				name: 'scroll-text',
				title: 'Scroll Text',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M15 12h-5m5-4h-5m9 9V5a2 2 0 0 0-2-2H4"/><path d="M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3"/></svg>'
			},
			{
				name: 'scroll',
				title: 'Scroll',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M19 17V5a2 2 0 0 0-2-2H4"/><path d="M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3"/></svg>'
			},
			{
				name: 'search-check',
				title: 'Search Check',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m8 11 2 2 4-4"/><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>'
			},
			{
				name: 'search-code',
				title: 'Search Code',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m13 13.5 2-2.5-2-2.5M21 21l-4.3-4.3M9 8.5 7 11l2 2.5"/><circle cx="11" cy="11" r="8"/></svg>'
			},
			{
				name: 'search-slash',
				title: 'Search Slash',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m13.5 8.5-5 5"/><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>'
			},
			{
				name: 'search-x',
				title: 'Search X',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m13.5 8.5-5 5m0-5 5 5"/><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>'
			},
			{
				name: 'search',
				title: 'Search',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m21 21-4.34-4.34"/><circle cx="11" cy="11" r="8"/></svg>'
			},
			{
				name: 'section',
				title: 'Section',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M16 5a4 3 0 0 0-8 0c0 4 8 3 8 7a4 3 0 0 1-8 0"/><path d="M8 19a4 3 0 0 0 8 0c0-4-8-3-8-7a4 3 0 0 1 8 0"/></svg>'
			},
			{
				name: 'send-horizontal',
				title: 'Send Horizontal',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M3.714 3.048a.498.498 0 0 0-.683.627l2.843 7.627a2 2 0 0 1 0 1.396l-2.842 7.627a.498.498 0 0 0 .682.627l18-8.5a.5.5 0 0 0 0-.904zM6 12h16"/></svg>'
			},
			{
				name: 'send-to-back',
				title: 'Send To Back',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="8" height="8" x="14" y="14" rx="2"/><rect width="8" height="8" x="2" y="2" rx="2"/><path d="M7 14v1a2 2 0 0 0 2 2h1m4-10h1a2 2 0 0 1 2 2v1"/></svg>'
			},
			{
				name: 'send',
				title: 'Send',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11zm7.318-19.539-10.94 10.939"/></svg>'
			},
			{
				name: 'separator-horizontal',
				title: 'Separator Horizontal',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m16 16-4 4-4-4m-5-4h18M8 8l4-4 4 4"/></svg>'
			},
			{
				name: 'separator-vertical',
				title: 'Separator Vertical',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 3v18m4-5 4-4-4-4M8 8l-4 4 4 4"/></svg>'
			},
			{
				name: 'server-cog',
				title: 'Server Cog',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m10.852 14.772-.383.923m2.679-.923a3 3 0 1 0-2.296-5.544l-.383-.923m2.679.923.383-.923"/><path d="m13.53 15.696-.382-.924a3 3 0 1 1-2.296-5.544m3.92 1.624.923-.383m-.923 2.679.923.383"/><path d="M4.5 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-.5m-15 4H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-.5M6 18h.01M6 6h.01m3.218 4.852-.923-.383m.923 2.679-.923.383"/></svg>'
			},
			{
				name: 'server-crash',
				title: 'Server Crash',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M6 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2M6 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2M6 6h.01M6 18h.01"/><path d="m13 6-4 6h6l-4 6"/></svg>'
			},
			{
				name: 'server-off',
				title: 'Server Off',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M7 2h13a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-5m-5 0L2.5 2.5C2 2 2 2.5 2 5v3a2 2 0 0 0 2 2zm12 7v-1a2 2 0 0 0-2-2h-1M4 14a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16.5l1-.5.5.5-8-8zm2 4h.01M2 2l20 20"/></svg>'
			},
			{
				name: 'server',
				title: 'Server',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="20" height="8" x="2" y="2" rx="2" ry="2"/><rect width="20" height="8" x="2" y="14" rx="2" ry="2"/><path d="M6 6h.01M6 18h.01"/></svg>'
			},
			{
				name: 'settings-2',
				title: 'Settings 2',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M14 17H5M19 7h-9"/><circle cx="17" cy="17" r="3"/><circle cx="7" cy="7" r="3"/></svg>'
			},
			{
				name: 'settings',
				title: 'Settings',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"/><circle cx="12" cy="12" r="3"/></svg>'
			},
			{
				name: 'shapes',
				title: 'Shapes',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z"/><rect width="7" height="7" x="3" y="14" rx="1"/><circle cx="17.5" cy="17.5" r="3.5"/></svg>'
			},
			{
				name: 'share-2',
				title: 'Share 2',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m8.59 13.51 6.83 3.98m-.01-10.98-6.82 3.98"/></svg>'
			},
			{
				name: 'share',
				title: 'Share',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 2v13m4-9-4-4-4 4m-4 6v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/></svg>'
			},
			{
				name: 'shark',
				title: 'Shark',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M3.6 15a9.07 9.07 0 0 0 11.7 5.3S19 22 22 22c0 0-1-3-3-4.5 1.1-1.5 1.9-3.3 2-5.3l-8 4.6a1.94 1.94 0 1 1-2-3.4l6-3.5s5-2.8 5-6.8c0-.6-.4-1-1-1h-9q-2.7 0-4.8 1.5C5.7 2.5 3.9 2 2 2c0 0 1.4 2.1 2.3 4.5A10.63 10.63 0 0 0 3.1 13m10.7-6L13 6"/><path d="M21.12 6h-3.5c-1.1 0-2.8.5-3.82 1L9 9.8C3 11 2 15 2 15h4"/></svg>'
			},
			{
				name: 'shave-face',
				title: 'Shave Face',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 20a7 7 0 0 1-7-7V4c0-.6.4-1 1-1h6M7 7h.01M11 13h3V4c0-.6.4-1 1-1h6m-3 4h.01M14 19v2m4-4 1.5 1.5M19 13h2"/></svg>'
			},
			{
				name: 'sheet',
				title: 'Sheet',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><path d="M3 9h18M3 15h18M9 9v12m6-12v12"/></svg>'
			},
			{
				name: 'shell',
				title: 'Shell',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M14 11a2 2 0 1 1-4 0 4 4 0 0 1 8 0 6 6 0 0 1-12 0 8 8 0 0 1 16 0 10 10 0 1 1-20 0 11.93 11.93 0 0 1 2.42-7.22 2 2 0 1 1 3.16 2.44"/></svg>'
			},
			{
				name: 'shield-alert',
				title: 'Shield Alert',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1zm-8-5v4m0 4h.01"/></svg>'
			},
			{
				name: 'shield-ban',
				title: 'Shield Ban',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1zM4.243 5.21l14.39 12.472"/></svg>'
			},
			{
				name: 'shield-check',
				title: 'Shield Check',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>'
			},
			{
				name: 'shield-ellipsis',
				title: 'Shield Ellipsis',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1zM8 12h.01M12 12h.01M16 12h.01"/></svg>'
			},
			{
				name: 'shield-half',
				title: 'Shield Half',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1zm-8 9V2"/></svg>'
			},
			{
				name: 'shield-minus',
				title: 'Shield Minus',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1zM9 12h6"/></svg>'
			},
			{
				name: 'shield-off',
				title: 'Shield Off',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m2 2 20 20M5 5a1 1 0 0 0-1 1v7c0 5 3.5 7.5 7.67 8.94a1 1 0 0 0 .67.01c2.35-.82 4.48-1.97 5.9-3.71M9.309 3.652A12.3 12.3 0 0 0 11.24 2.28a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1v7a10 10 0 0 1-.08 1.264"/></svg>'
			},
			{
				name: 'shield-plus',
				title: 'Shield Plus',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1zM9 12h6m-3-3v6"/></svg>'
			},
			{
				name: 'shield-question-mark',
				title: 'Shield Question Mark',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3m.08 4h.01"/></svg>'
			},
			{
				name: 'shield-user',
				title: 'Shield User',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="M6.376 18.91a6 6 0 0 1 11.249.003"/><circle cx="12" cy="11" r="4"/></svg>'
			},
			{
				name: 'shield-x',
				title: 'Shield X',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1zm-5.5-3.5-5 5m0-5 5 5"/></svg>'
			},
			{
				name: 'shield',
				title: 'Shield',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/></svg>'
			},
			{
				name: 'ship-wheel',
				title: 'Ship Wheel',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="8"/><path d="M12 2v7.5M19 5l-5.23 5.23M22 12h-7.5m4.5 7-5.23-5.23M12 14.5V22m-1.77-8.23L5 19m4.5-7H2m8.23-1.77L5 5"/><circle cx="12" cy="12" r="2.5"/></svg>'
			},
			{
				name: 'ship',
				title: 'Ship',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 10.189V14m0-12v3m7 8V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6"/><path d="M19.38 20A11.6 11.6 0 0 0 21 14l-8.188-3.639a2 2 0 0 0-1.624 0L3 14a11.6 11.6 0 0 0 2.81 7.76"/><path d="M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1s1.2 1 2.5 1c2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/></svg>'
			},
			{
				name: 'shirt-folded-buttons',
				title: 'Shirt Folded Buttons',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M19 21H5a2 2 0 0 1-2-2V4c0-.6.4-1 1-1h12c.6 0 1 .4 1 1v15a2 2 0 1 0 4 0V7c0-.6-.4-1-1-1h-3"/><path d="M7 3v1a3 3 0 1 0 6 0V3m-3 8h.01M10 15h.01"/></svg>'
			},
			{
				name: 'shirt-long-sleeve',
				title: 'Shirt Long Sleeve',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M6 19H3c-.6 0-1-.4-1-1V6c0-1.1.8-2.3 1.9-2.6L8 2a4 4 0 0 0 8 0l4.1 1.4C21.2 3.7 22 4.9 22 6v12c0 .6-.4 1-1 1h-3"/><path d="M18 8v13c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V8"/></svg>'
			},
			{
				name: 'shirt-t-ruler',
				title: 'Shirt T Ruler',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M6 11H3c-.6 0-1-.4-1-1V6c0-1.1.8-2.3 1.9-2.6L8 2a4 4 0 0 0 8 0l4.1 1.4C21.2 3.7 22 4.9 22 6v4c0 .6-.4 1-1 1h-3M6 18V8m12 0v10"/><rect width="20" height="6" x="2" y="16" rx="2"/><path d="M10 16v2m4-2v2"/></svg>'
			},
			{
				name: 'shirt-t-v-neck',
				title: 'Shirt T V Neck',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M6 11H3c-.6 0-1-.4-1-1V6c0-1.1.8-2.3 1.9-2.6L8 2c0 2.2 3 5 4 5s4-2.8 4-5l4.1 1.4C21.2 3.7 22 4.9 22 6v4c0 .6-.4 1-1 1h-3"/><path d="M18 8v13c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V8"/></svg>'
			},
			{
				name: 'shirt-t',
				title: 'Shirt T',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M6 11H3c-.6 0-1-.4-1-1V6c0-1.1.8-2.3 1.9-2.6L8 2a4 4 0 0 0 8 0l4.1 1.4C21.2 3.7 22 4.9 22 6v4c0 .6-.4 1-1 1h-3"/><path d="M18 8v13c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V8"/></svg>'
			},
			{
				name: 'shirt',
				title: 'Shirt',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23"/></svg>'
			},
			{
				name: 'shopping-bag',
				title: 'Shopping Bag',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M16 10a4 4 0 0 1-8 0M3.103 6.034h17.794"/><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"/></svg>'
			},
			{
				name: 'shopping-basket',
				title: 'Shopping Basket',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m15 11-1 9m5-9-4-7M2 11h20M3.5 11l1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4M4.5 15.5h15M5 11l4-7m0 7 1 9"/></svg>'
			},
			{
				name: 'shopping-cart',
				title: 'Shopping Cart',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>'
			},
			{
				name: 'shorts-boxer',
				title: 'Shorts Boxer',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10.7 15.8 9 20H4a2 2 0 0 1-2-2V5c0-.6.4-1 1-1h18c.6 0 1 .4 1 1v13a2 2 0 0 1-2 2h-5l-1.7-4.2M2 8h20"/><path d="M16 8v4a4 4 0 0 1-8 0V8"/></svg>'
			},
			{
				name: 'shorts',
				title: 'Shorts',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M2 8h20M9 20H4a2 2 0 0 1-2-2V5c0-.6.4-1 1-1h18c.6 0 1 .4 1 1v13a2 2 0 0 1-2 2h-5l-3-5Zm0-8V8m6 0v4M5 13l-3 2m20 0-3-2"/></svg>'
			},
			{
				name: 'shovel-dig',
				title: 'Shovel Dig',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 6.5c-1.7 0-3-1.3-3-3V2h6v1.5c0 1.7-1.3 3-3 3m0 9.5V6.5M8 22v-4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4M6 22h12"/></svg>'
			},
			{
				name: 'shovel',
				title: 'Shovel',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M21.56 4.56a1.5 1.5 0 0 1 0 2.122l-.47.47a3 3 0 0 1-4.212-.03 3 3 0 0 1 0-4.243l.44-.44a1.5 1.5 0 0 1 2.121 0zM3 22a1 1 0 0 1-1-1v-3.586a1 1 0 0 1 .293-.707l3.355-3.355a1.205 1.205 0 0 1 1.704 0l3.296 3.296a1.205 1.205 0 0 1 0 1.704l-3.355 3.355a1 1 0 0 1-.707.293zm6-7 7.879-7.878"/></svg>'
			},
			{
				name: 'shower-head',
				title: 'Shower Head',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m4 4 2.5 2.5m7 0a4.95 4.95 0 0 0-7 7M15 5 5 15m9 2v.01M10 16v.01M13 13v.01M16 10v.01M11 20v.01M17 14v.01M20 11v.01"/></svg>'
			},
			{
				name: 'shower',
				title: 'Shower',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M9 10V8a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2M7 10h14"/><path d="M3 22V4a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v2m-4 8h.01M14 14h.01M18 14h.01M9 18h.01M14 18h.01M19 18h.01M8 22h.01M14 22h.01M20 22h.01"/></svg>'
			},
			{
				name: 'shredder',
				title: 'Shredder',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 22v-5m4 2v-2m0-15v4a2 2 0 0 0 2 2h4m-2 12v-3M2 13h20"/><path d="M20 13V7l-5-5H6a2 2 0 0 0-2 2v9m2 7v-3"/></svg>'
			},
			{
				name: 'shrimp',
				title: 'Shrimp',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M11 12h.01M13 22c.5-.5 1.12-1 2.5-1-1.38 0-2-.5-2.5-1m1-18a3.28 3.28 0 0 1-3.227 1.798l-6.17-.561A2.387 2.387 0 1 0 4.387 8H15.5a1 1 0 0 1 0 13 1 1 0 0 0 0-5H12a7 7 0 0 1-7-7V8"/><path d="M14 8a8.5 8.5 0 0 1 0 8m2 0c2 0 4.5-4 4-6"/></svg>'
			},
			{
				name: 'shrink',
				title: 'Shrink',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m15 15 6 6m-6-6v4.8m0-4.8h4.8M9 19.8V15m0 0H4.2M9 15l-6 6M15 4.2V9m0 0h4.8M15 9l6-6M9 4.2V9m0 0H4.2M9 9 3 3"/></svg>'
			},
			{
				name: 'shrub',
				title: 'Shrub',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 22v-5.172a2 2 0 0 0-.586-1.414L9.5 13.5m5 1L12 17"/><path d="M17 8.8A6 6 0 0 1 13.8 20H10A6.5 6.5 0 0 1 7 8a5 5 0 0 1 10 0z"/></svg>'
			},
			{
				name: 'shuffle',
				title: 'Shuffle',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m18 14 4 4-4 4m0-20 4 4-4 4"/><path d="M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22M2 6h1.972a4 4 0 0 1 3.6 2.2M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45"/></svg>'
			},
			{
				name: 'sigma',
				title: 'Sigma',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M18 7V5a1 1 0 0 0-1-1H6.5a.5.5 0 0 0-.4.8l4.5 6a2 2 0 0 1 0 2.4l-4.5 6a.5.5 0 0 0 .4.8H17a1 1 0 0 0 1-1v-2"/></svg>'
			},
			{
				name: 'signal-high',
				title: 'Signal High',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M2 20h.01M7 20v-4m5 4v-8m5 8V8"/></svg>'
			},
			{
				name: 'signal-low',
				title: 'Signal Low',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M2 20h.01M7 20v-4"/></svg>'
			},
			{
				name: 'signal-medium',
				title: 'Signal Medium',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M2 20h.01M7 20v-4m5 4v-8"/></svg>'
			},
			{
				name: 'signal-zero',
				title: 'Signal Zero',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M2 20h.01"/></svg>'
			},
			{
				name: 'signal',
				title: 'Signal',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M2 20h.01M7 20v-4m5 4v-8m5 8V8m5-4v16"/></svg>'
			},
			{
				name: 'signature',
				title: 'Signature',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m21 17-2.156-1.868A.5.5 0 0 0 18 15.5v.5a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1c0-2.545-3.991-3.97-8.5-4a1 1 0 0 0 0 5c4.153 0 4.745-11.295 5.708-13.5a2.5 2.5 0 1 1 3.31 3.284M3 21h18"/></svg>'
			},
			{
				name: 'signpost-big',
				title: 'Signpost Big',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 9H4L2 7l2-2h6m4 0h6l2 2-2 2h-6m-4 13V4a2 2 0 1 1 4 0v18m-6 0h8"/></svg>'
			},
			{
				name: 'signpost',
				title: 'Signpost',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 13v8m0-18v3m6 0a2 2 0 0 1 1.387.56l2.307 2.22a1 1 0 0 1 0 1.44l-2.307 2.22A2 2 0 0 1 18 13H6a2 2 0 0 1-1.387-.56l-2.306-2.22a1 1 0 0 1 0-1.44l2.306-2.22A2 2 0 0 1 6 6z"/></svg>'
			},
			{
				name: 'siren',
				title: 'Siren',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M7 18v-6a5 5 0 1 1 10 0v6M5 21a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2zm16-9h1m-3.5-7.5L18 5M2 12h1m9-10v1M4.929 4.929l.707.707M12 12v6"/></svg>'
			},
			{
				name: 'skip-back',
				title: 'Skip Back',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M17.971 4.285A2 2 0 0 1 21 6v12a2 2 0 0 1-3.029 1.715l-9.997-5.998a2 2 0 0 1-.003-3.432zM3 20V4"/></svg>'
			},
			{
				name: 'skip-forward',
				title: 'Skip Forward',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M21 4v16M6.029 4.285A2 2 0 0 0 3 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z"/></svg>'
			},
			{
				name: 'skirt',
				title: 'Skirt',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M6 3h12v4H6zm0 4c0 1.7-.4 3.3-1 4.4C3.8 13.6 2 17 2 17s1.8 1.2 4.5 2.1"/><path d="m8 16-2 4s2.7 1 6 1 6-1 6-1l-2-4"/><path d="M17.5 19.1C20.2 18.2 22 17 22 17s-1.8-3.4-3-5.6c-.6-1.1-1-2.7-1-4.4"/></svg>'
			},
			{
				name: 'skis',
				title: 'Skis',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m2 4 3-1M3 2l7 20m0-20L3 22m-1-2 3 1m17 1V6c0-2.2-2-4-2-4s-2 1.8-2 4c0-2.2-2-4-2-4s-2 1.8-2 4v16ZM18 6v16"/></svg>'
			},
			{
				name: 'skull',
				title: 'Skull',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m12.5 17-.5-1-.5 1z"/><path d="M15 22a1 1 0 0 0 1-1v-1a2 2 0 0 0 1.56-3.25 8 8 0 1 0-11.12 0A2 2 0 0 0 8 20v1a1 1 0 0 0 1 1z"/><circle cx="15" cy="12" r="1"/><circle cx="9" cy="12" r="1"/></svg>'
			},
			{
				name: 'slack',
				title: 'Slack',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="3" height="8" x="13" y="2" rx="1.5"/><path d="M19 8.5V10h1.5A1.5 1.5 0 1 0 19 8.5"/><rect width="3" height="8" x="8" y="14" rx="1.5"/><path d="M5 15.5V14H3.5A1.5 1.5 0 1 0 5 15.5"/><rect width="8" height="3" x="14" y="13" rx="1.5"/><path d="M15.5 19H14v1.5a1.5 1.5 0 1 0 1.5-1.5"/><rect width="8" height="3" x="2" y="8" rx="1.5"/><path d="M8.5 5H10V3.5A1.5 1.5 0 1 0 8.5 5"/></svg>'
			},
			{
				name: 'slash',
				title: 'Slash',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M22 2 2 22"/></svg>'
			},
			{
				name: 'slice',
				title: 'Slice',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M11 16.586V19a1 1 0 0 1-1 1H2L18.37 3.63a1 1 0 1 1 3 3l-9.663 9.663a1 1 0 0 1-1.414 0L8 14"/></svg>'
			},
			{
				name: 'sliders-horizontal',
				title: 'Sliders Horizontal',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 5H3m9 14H3M14 3v4m2 10v4m5-9h-9m9 7h-5m5-14h-7m-6 5v4m0-2H3"/></svg>'
			},
			{
				name: 'sliders-vertical',
				title: 'Sliders Vertical',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 8h4m-2 13v-9m0-4V3m5 13h4m-2-4V3m0 18v-5M3 14h4m-2-4V3m0 18v-7"/></svg>'
			},
			{
				name: 'slot-card-credit',
				title: 'Slot Card Credit',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M7 13H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-3M6 9h12"/><path d="M17 9v8.3c0 .9-.9 1.7-2 1.7H9c-1.1 0-2-.7-2-1.7V9m4 0v10"/></svg>'
			},
			{
				name: 'slot-card',
				title: 'Slot Card',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M7 13H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-3M6 9h12"/><path d="m13 9 4 4v4a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V9"/></svg>'
			},
			{
				name: 'slot-disc',
				title: 'Slot Disc',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M6 13H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2M6 9h12"/><circle cx="12" cy="14" r=".5"/><path d="M8.7 9a6.07 6.07 0 1 0 6.6 0"/></svg>'
			},
			{
				name: 'smartphone-charging',
				title: 'Smartphone Charging',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12.667 8 10 12h4l-2.667 4"/></svg>'
			},
			{
				name: 'smartphone-nfc',
				title: 'Smartphone Nfc',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="7" height="12" x="2" y="6" rx="1"/><path d="M13 8.32a7.43 7.43 0 0 1 0 7.36m3.46-9.47a11.76 11.76 0 0 1 0 11.58M19.91 4.1a15.91 15.91 0 0 1 .01 15.8"/></svg>'
			},
			{
				name: 'smartphone',
				title: 'Smartphone',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg>'
			},
			{
				name: 'smile-plus',
				title: 'Smile Plus',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M22 11v1a10 10 0 1 1-9-10"/><path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01M16 5h6m-3-3v6"/></svg>'
			},
			{
				name: 'smile',
				title: 'Smile',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01"/></svg>'
			},
			{
				name: 'snail',
				title: 'Snail',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M2 13a6 6 0 1 0 12 0 4 4 0 1 0-8 0 2 2 0 0 0 4 0"/><circle cx="10" cy="13" r="8"/><path d="M2 21h12c4.4 0 8-3.6 8-8V7a2 2 0 1 0-4 0v6m0-10 1.1 2.2M22 3l-1.1 2.2"/></svg>'
			},
			{
				name: 'sneaker',
				title: 'Sneaker',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M14.1 7.9 12.5 10m4.9.1L16 12M2 16a2 2 0 0 0 2 2h13c2.8 0 5-2.2 5-5a2 2 0 0 0-2-2c-.8 0-1.6-.2-2.2-.7l-6.2-4.2c-.4-.3-.9-.2-1.3.1 0 0-.6.8-1.2 1.1a3.5 3.5 0 0 1-4.2.1C4.4 7 3.7 6.3 3.7 6.3A.92.92 0 0 0 2 7Z"/><path d="M2 11c0 1.7 1.3 3 3 3h7"/></svg>'
			},
			{
				name: 'snowboard',
				title: 'Snowboard',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M22 6a4 4 0 0 0-7.2-2.3c-4.2 5.8-5.3 6.9-11.1 11.1a4 4 0 1 0 5.5 5.5c4.2-5.8 5.3-6.9 11.1-11.1 1-.7 1.7-1.9 1.7-3.2"/><path d="M6.15 13H11v4.85"/></svg>'
			},
			{
				name: 'snowflake',
				title: 'Snowflake',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m10 20-1.25-2.5L6 18m4-14L8.75 6.5 6 6m8 14 1.25-2.5L18 18M14 4l1.25 2.5L18 6"/><path d="m17 21-3-6h-4m7-12-3 6 1.5 3M2 12h6.5L10 9m10 1-1.5 2 1.5 2"/><path d="M22 12h-6.5L14 15M4 10l1.5 2L4 14m3 7 3-6-1.5-3M7 3l3 6h4"/></svg>'
			},
			{
				name: 'snowman',
				title: 'Snowman',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="6" r="4"/><path d="M12 14h.01M12 18h.01M2 9h2V7m3 5L4 9m13.8 2.1L20 9m0-2v2h2M9 8.7a7 7 0 1 0 6 0M5 22h14"/></svg>'
			},
			{
				name: 'soap-bar',
				title: 'Soap Bar',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M11.3 2.7c.9-.9 2.5-.9 3.4 0l5.6 5.6c.9.9.9 2.5 0 3.4l-8.6 8.6c-.9.9-2.5.9-3.4 0l-5.6-5.6c-.9-.9-.9-2.5 0-3.4Z"/><path d="m13 7-6 6 3 3 6-6Z"/><circle cx="20.5" cy="17.5" r=".5"/><circle cx="17.5" cy="21.5" r=".5"/><path d="M22 22h.01"/></svg>'
			},
			{
				name: 'soap-dispenser-droplet',
				title: 'Soap Dispenser Droplet',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10.5 2v4M14 2H7a2 2 0 0 0-2 2m14.29 10.76A6.67 6.67 0 0 1 17 11a6.6 6.6 0 0 1-2.29 3.76c-1.15.92-1.71 2.04-1.71 3.19 0 2.22 1.8 4.05 4 4.05s4-1.83 4-4.05c0-1.16-.57-2.26-1.71-3.19M9.607 21H6a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h7V7a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3"/></svg>'
			},
			{
				name: 'soccer-ball',
				title: 'Soccer Ball',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M11.9 6.7s-3 1.3-5 3.6c0 0 0 3.6 1.9 5.9 0 0 3.1.7 6.2 0 0 0 1.9-2.3 1.9-5.9 0 .1-2-2.3-5-3.6m0 0V2m5 8.4s3-1.4 4.5-1.6M15 16.3s1.9 2.7 2.9 3.7m-9.1-3.7S6.9 19 6 20"/><path d="M2.6 8.7C4 9 7 10.4 7 10.4"/></svg>'
			},
			{
				name: 'soccer-pitch',
				title: 'Soccer Pitch',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 5v5m0 4v5"/><circle cx="12" cy="12" r="2"/><path d="M2 9h4v6H2"/><path d="M3 19c-.6 0-1-.4-1-1V6c0-.6.4-1 1-1h18c.6 0 1 .4 1 1v12c0 .6-.4 1-1 1Z"/><path d="M22 15h-4V9h4"/></svg>'
			},
			{
				name: 'socket-eu',
				title: 'Socket Eu',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="2"/><circle cx="12" cy="12" r="6"/><path d="M10 12h.01M14 12h.01"/></svg>'
			},
			{
				name: 'socket-uk',
				title: 'Socket Uk',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="2"/><path d="M12 8v2m-2 5H8m6 0h2"/></svg>'
			},
			{
				name: 'socket-usa',
				title: 'Socket Usa',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="2"/><circle cx="12" cy="12" r="6"/><path d="M10 11v2m4-2v2"/></svg>'
			},
			{
				name: 'socks',
				title: 'Socks',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M9.6 20.4 9 21a3.38 3.38 0 1 1-4.9-4.9l3.5-3.5C8.4 11.6 9 10.4 9 9V3c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v10a5.15 5.15 0 0 1-1.5 3.6L15 21a3.38 3.38 0 1 1-4.9-4.9l3.5-3.5c.8-1 1.4-2.2 1.4-3.6V2M9 6h12"/></svg>'
			},
			{
				name: 'sofa',
				title: 'Sofa',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3"/><path d="M2 16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0zm2 2v2m16-2v2M12 4v9"/></svg>'
			},
			{
				name: 'soup',
				title: 'Soup',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9m-5 0h10m2.5-9L22 6m-5.75-3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.73 1.62m-5.48-5c.27.1.8.53.74 1.36-.05.83-.93 1.2-.98 2.02-.06.78.33 1.24.72 1.62M6.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.74 1.62"/></svg>'
			},
			{
				name: 'space',
				title: 'Space',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M22 17v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1"/></svg>'
			},
			{
				name: 'spade',
				title: 'Spade',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 18v4M2 14.499a5.5 5.5 0 0 0 9.591 3.675.6.6 0 0 1 .818.001A5.5 5.5 0 0 0 22 14.5c0-2.29-1.5-4-3-5.5l-5.492-5.312a2 2 0 0 0-3-.02L5 8.999c-1.5 1.5-3 3.2-3 5.5"/></svg>'
			},
			{
				name: 'sparkle',
				title: 'Sparkle',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"/></svg>'
			},
			{
				name: 'sparkles',
				title: 'Sparkles',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594zM20 2v4m2-2h-4"/><circle cx="4" cy="20" r="2"/></svg>'
			},
			{
				name: 'speaker',
				title: 'Speaker',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="16" height="20" x="4" y="2" rx="2"/><path d="M12 6h.01"/><circle cx="12" cy="14" r="4"/><path d="M12 14h.01"/></svg>'
			},
			{
				name: 'speech',
				title: 'Speech',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M8.8 20v-4.1l1.9.2a2.3 2.3 0 0 0 2.164-2.1V8.3A5.37 5.37 0 0 0 2 8.25c0 2.8.656 3.054 1 4.55a5.8 5.8 0 0 1 .029 2.758L2 20m17.8-2.2a7.5 7.5 0 0 0 .003-10.603M17 15a3.5 3.5 0 0 0-.025-4.975"/></svg>'
			},
			{
				name: 'spell-check-2',
				title: 'Spell Check 2',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m6 16 6-12 6 12M8 12h8M4 21c1.1 0 1.1-1 2.3-1s1.1 1 2.3 1c1.1 0 1.1-1 2.3-1 1.1 0 1.1 1 2.3 1 1.1 0 1.1-1 2.3-1 1.1 0 1.1 1 2.3 1 1.1 0 1.1-1 2.3-1"/></svg>'
			},
			{
				name: 'spell-check',
				title: 'Spell Check',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m6 16 6-12 6 12M8 12h8m0 8 2 2 4-4"/></svg>'
			},
			{
				name: 'spider-web',
				title: 'Spider Web',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M21 17.2V6.8L12 2 3 6.8v10.4l9 4.8Zm-19 .6L22 6.2m-20 0 20 11.6M12 2v20"/><path d="M17 14.9V9.1l-5-2.6-5 2.6v5.8l5 2.6Z"/></svg>'
			},
			{
				name: 'spider',
				title: 'Spider',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 5v1m4 0V5m-4 5.4V8a2 2 0 1 1 4 0v2.4M7 15H4l-2 2.5m5.42-.5L5 20l1 2m2-10-4-1-2-3m7 3L5.5 6 7 2"/><path d="M8 18a5 5 0 1 1 8 0s-2 3-4 4c-2-1-4-4-4-4"/><path d="m15 11 3.5-5L17 2m-1 10 4-1 2-3m-5 7h3l2 2.5m-5.43-.5L19 20l-1 2"/></svg>'
			},
			{
				name: 'spline-pointer',
				title: 'Spline Pointer',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033zM5 17A12 12 0 0 1 17 5"/><circle cx="19" cy="5" r="2"/><circle cx="5" cy="19" r="2"/></svg>'
			},
			{
				name: 'spline',
				title: 'Spline',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="19" cy="5" r="2"/><circle cx="5" cy="19" r="2"/><path d="M5 17A12 12 0 0 1 17 5"/></svg>'
			},
			{
				name: 'split',
				title: 'Split',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M16 3h5v5M8 3H3v5"/><path d="M12 22v-8.3a4 4 0 0 0-1.172-2.872L3 3m12 6 6-6"/></svg>'
			},
			{
				name: 'spool',
				title: 'Spool',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M17 13.44 4.442 17.082A2 2 0 0 0 4.982 21H19a2 2 0 0 0 .558-3.921l-1.115-.32A2 2 0 0 1 17 14.837V7.66"/><path d="m7 10.56 12.558-3.642A2 2 0 0 0 19.018 3H5a2 2 0 0 0-.558 3.921l1.115.32A2 2 0 0 1 7 9.163v7.178"/></svg>'
			},
			{
				name: 'spotlight',
				title: 'Spotlight',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M15.295 19.562 16 22m1-6 3.758 2.098M19 12.5l3.026-.598M7.61 6.3a3 3 0 0 0-3.92 1.3l-1.38 2.79a3 3 0 0 0 1.3 3.91l6.89 3.597a1 1 0 0 0 1.342-.447l3.106-6.211a1 1 0 0 0-.447-1.341zM8 9V2"/></svg>'
			},
			{
				name: 'spray-can',
				title: 'Spray Can',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M3 3h.01M7 5h.01M11 7h.01M3 7h.01M7 9h.01M3 11h.01M15 5h4v4h-4zm4 4 2 2v10c0 .6-.4 1-1 1h-6c-.6 0-1-.4-1-1V11l2-2m-2 5 8-2m-8 7 8-2"/></svg>'
			},
			{
				name: 'sprout',
				title: 'Sprout',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M14 9.536V7a4 4 0 0 1 4-4h1.5a.5.5 0 0 1 .5.5V5a4 4 0 0 1-4 4 4 4 0 0 0-4 4c0 2 1 3 1 5a5 5 0 0 1-1 3M4 9a5 5 0 0 1 8 4 5 5 0 0 1-8-4m1 12h14"/></svg>'
			},
			{
				name: 'square-activity',
				title: 'Square Activity',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M17 12h-2l-2 5-2-10-2 5H7"/></svg>'
			},
			{
				name: 'square-arrow-down-left',
				title: 'Square Arrow Down Left',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="m16 8-8 8m8 0H8V8"/></svg>'
			},
			{
				name: 'square-arrow-down-right',
				title: 'Square Arrow Down Right',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="m8 8 8 8m0-8v8H8"/></svg>'
			},
			{
				name: 'square-arrow-down',
				title: 'Square Arrow Down',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M12 8v8m-4-4 4 4 4-4"/></svg>'
			},
			{
				name: 'square-arrow-left',
				title: 'Square Arrow Left',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="m12 8-4 4 4 4m4-4H8"/></svg>'
			},
			{
				name: 'square-arrow-out-down-left',
				title: 'Square Arrow Out Down Left',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M13 21h6a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6m0 10 9-9m-3 9H3v-6"/></svg>'
			},
			{
				name: 'square-arrow-out-down-right',
				title: 'Square Arrow Out Down Right',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6m10 0-9-9m9 3v6h-6"/></svg>'
			},
			{
				name: 'square-arrow-out-up-left',
				title: 'Square Arrow Out Up Left',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M13 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6M3 3l9 9M3 9V3h6"/></svg>'
			},
			{
				name: 'square-arrow-out-up-right',
				title: 'Square Arrow Out Up Right',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6m10 0-9 9m3-9h6v6"/></svg>'
			},
			{
				name: 'square-arrow-right',
				title: 'Square Arrow Right',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M8 12h8m-4 4 4-4-4-4"/></svg>'
			},
			{
				name: 'square-arrow-up-left',
				title: 'Square Arrow Up Left',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M8 16V8h8m0 8L8 8"/></svg>'
			},
			{
				name: 'square-arrow-up-right',
				title: 'Square Arrow Up Right',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M8 8h8v8m-8 0 8-8"/></svg>'
			},
			{
				name: 'square-arrow-up',
				title: 'Square Arrow Up',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="m16 12-4-4-4 4m4 4V8"/></svg>'
			},
			{
				name: 'square-asterisk',
				title: 'Square Asterisk',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M12 8v8m-3.5-2 7-4m-7 0 7 4"/></svg>'
			},
			{
				name: 'square-bottom-dashed-scissors',
				title: 'Square Bottom Dashed Scissors',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M4 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2m-10 0H8m8 0h-2"/><circle cx="8" cy="8" r="2"/><path d="M9.414 9.414 12 12m2.8 2.8L18 18"/><circle cx="8" cy="16" r="2"/><path d="m18 6-8.586 8.586"/></svg>'
			},
			{
				name: 'square-chart-gantt',
				title: 'Square Chart Gantt',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 8h7m-8 4h6m-3 4h5"/></svg>'
			},
			{
				name: 'square-check-big',
				title: 'Square Check Big',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M21 10.656V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.344"/><path d="m9 11 3 3L22 4"/></svg>'
			},
			{
				name: 'square-check',
				title: 'Square Check',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="m9 12 2 2 4-4"/></svg>'
			},
			{
				name: 'square-chevron-down',
				title: 'Square Chevron Down',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="m16 10-4 4-4-4"/></svg>'
			},
			{
				name: 'square-chevron-left',
				title: 'Square Chevron Left',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="m14 16-4-4 4-4"/></svg>'
			},
			{
				name: 'square-chevron-right',
				title: 'Square Chevron Right',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="m10 8 4 4-4 4"/></svg>'
			},
			{
				name: 'square-chevron-up',
				title: 'Square Chevron Up',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="m8 14 4-4 4 4"/></svg>'
			},
			{
				name: 'square-code',
				title: 'Square Code',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m10 9-3 3 3 3m4 0 3-3-3-3"/><rect width="18" height="18" x="3" y="3" rx="2"/></svg>'
			},
			{
				name: 'square-dashed-bottom-code',
				title: 'Square Dashed Bottom Code',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 9.5 8 12l2 2.5m4 6.5h1M14 9.5l2 2.5-2 2.5"/><path d="M5 21a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2M9 21h1"/></svg>'
			},
			{
				name: 'square-dashed-bottom',
				title: 'Square Dashed Bottom',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M5 21a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2M9 21h1m4 0h1"/></svg>'
			},
			{
				name: 'square-dashed-kanban',
				title: 'Square Dashed Kanban',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M8 7v7m4-7v4m4-4v9M5 3a2 2 0 0 0-2 2m6-2h1m4 0h1m4 0a2 2 0 0 1 2 2m0 4v1m0 4v1m0 4a2 2 0 0 1-2 2m-5 0h1m-6 0h1m-5 0a2 2 0 0 1-2-2m0-5v1m0-6v1"/></svg>'
			},
			{
				name: 'square-dashed-mouse-pointer',
				title: 'Square Dashed Mouse Pointer',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033zM5 3a2 2 0 0 0-2 2m16-2a2 2 0 0 1 2 2M5 21a2 2 0 0 1-2-2M9 3h1M9 21h2m3-18h1M3 9v1m18-1v2M3 14v1"/></svg>'
			},
			{
				name: 'square-dashed-top-solid',
				title: 'Square Dashed Top Solid',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M14 21h1m6-7v1m0 4a2 2 0 0 1-2 2m2-12v1M3 14v1M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2M3 9v1m2 11a2 2 0 0 1-2-2m6 2h1"/></svg>'
			},
			{
				name: 'square-dashed',
				title: 'Square Dashed',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M5 3a2 2 0 0 0-2 2m16-2a2 2 0 0 1 2 2m0 14a2 2 0 0 1-2 2M5 21a2 2 0 0 1-2-2M9 3h1M9 21h1m4-18h1m-1 18h1M3 9v1m18-1v1M3 14v1m18-1v1"/></svg>'
			},
			{
				name: 'square-divide',
				title: 'Square Divide',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><path d="M8 12h8m-4-4"/></svg>'
			},
			{
				name: 'square-dot',
				title: 'Square Dot',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="2"/><circle cx="12" cy="12" r="1"/></svg>'
			},
			{
				name: 'square-equal',
				title: 'Square Equal',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 10h10M7 14h10"/></svg>'
			},
			{
				name: 'square-function',
				title: 'Square Function',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><path d="M9 17c2 0 2.8-1 2.8-2.8V10c0-2 1-3.3 3.2-3m-6 4.2h5.7"/></svg>'
			},
			{
				name: 'square-kanban',
				title: 'Square Kanban',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M8 7v7m4-7v4m4-4v9"/></svg>'
			},
			{
				name: 'square-library',
				title: 'Square Library',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 7v10m4-10v10m4-10 2 10"/></svg>'
			},
			{
				name: 'square-m',
				title: 'Square M',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M8 16V8.5a.5.5 0 0 1 .9-.3l2.7 3.599a.5.5 0 0 0 .8 0l2.7-3.6a.5.5 0 0 1 .9.3V16"/><rect width="18" height="18" x="3" y="3" rx="2"/></svg>'
			},
			{
				name: 'square-menu',
				title: 'Square Menu',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 8h10M7 12h10M7 16h10"/></svg>'
			},
			{
				name: 'square-minus',
				title: 'Square Minus',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M8 12h8"/></svg>'
			},
			{
				name: 'square-mouse-pointer',
				title: 'Square Mouse Pointer',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z"/><path d="M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6"/></svg>'
			},
			{
				name: 'square-parking-off',
				title: 'Square Parking Off',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M3.6 3.6A2 2 0 0 1 5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-.59 1.41M3 8.7V19a2 2 0 0 0 2 2h10.3M2 2l20 20"/><path d="M13 13a3 3 0 1 0 0-6H9v2m0 8v-2.3"/></svg>'
			},
			{
				name: 'square-parking',
				title: 'Square Parking',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 17V7h4a3 3 0 0 1 0 6H9"/></svg>'
			},
			{
				name: 'square-pause',
				title: 'Square Pause',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M10 15V9m4 6V9"/></svg>'
			},
			{
				name: 'square-pen',
				title: 'Square Pen',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"/></svg>'
			},
			{
				name: 'square-percent',
				title: 'Square Percent',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="m15 9-6 6m0-6h.01M15 15h.01"/></svg>'
			},
			{
				name: 'square-pi',
				title: 'Square Pi',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 7h10m-7 0v10m6 0a2 2 0 0 1-2-2V7"/></svg>'
			},
			{
				name: 'square-pilcrow',
				title: 'Square Pilcrow',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M12 12H9.5a2.5 2.5 0 0 1 0-5H17m-5 0v10m4-10v10"/></svg>'
			},
			{
				name: 'square-play',
				title: 'Square Play',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"/></svg>'
			},
			{
				name: 'square-plus',
				title: 'Square Plus',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M8 12h8m-4-4v8"/></svg>'
			},
			{
				name: 'square-power',
				title: 'Square Power',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 7v4M7.998 9.003a5 5 0 1 0 8-.005"/><rect width="18" height="18" x="3" y="3" rx="2"/></svg>'
			},
			{
				name: 'square-radical',
				title: 'Square Radical',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M7 12h2l2 5 2-10h4"/><rect width="18" height="18" x="3" y="3" rx="2"/></svg>'
			},
			{
				name: 'square-round-corner',
				title: 'Square Round Corner',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M21 11a8 8 0 0 0-8-8m8 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/></svg>'
			},
			{
				name: 'square-scissors',
				title: 'Square Scissors',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="2"/><circle cx="8" cy="8" r="2"/><path d="M9.414 9.414 12 12m2.8 2.8L18 18"/><circle cx="8" cy="16" r="2"/><path d="m18 6-8.586 8.586"/></svg>'
			},
			{
				name: 'square-sigma',
				title: 'Square Sigma',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M16 8.9V7H8l4 5-4 5h8v-1.9"/></svg>'
			},
			{
				name: 'square-slash',
				title: 'Square Slash',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="m9 15 6-6"/></svg>'
			},
			{
				name: 'square-split-horizontal',
				title: 'Square Split Horizontal',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M8 19H5c-1 0-2-1-2-2V7c0-1 1-2 2-2h3m8 0h3c1 0 2 1 2 2v10c0 1-1 2-2 2h-3M12 4v16"/></svg>'
			},
			{
				name: 'square-split-vertical',
				title: 'Square Split Vertical',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M5 8V5c0-1 1-2 2-2h10c1 0 2 1 2 2v3m0 8v3c0 1-1 2-2 2H7c-1 0-2-1-2-2v-3m-1-4h16"/></svg>'
			},
			{
				name: 'square-square',
				title: 'Square Square',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="2"/><rect width="8" height="8" x="8" y="8" rx="1"/></svg>'
			},
			{
				name: 'square-stack',
				title: 'Square Stack',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M4 10c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2m0 12c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2"/><rect width="8" height="8" x="14" y="14" rx="2"/></svg>'
			},
			{
				name: 'square-star',
				title: 'Square Star',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M11.035 7.69a1 1 0 0 1 1.909.024l.737 1.452a1 1 0 0 0 .737.535l1.634.256a1 1 0 0 1 .588 1.806l-1.172 1.168a1 1 0 0 0-.282.866l.259 1.613a1 1 0 0 1-1.541 1.134l-1.465-.75a1 1 0 0 0-.912 0l-1.465.75a1 1 0 0 1-1.539-1.133l.258-1.613a1 1 0 0 0-.282-.866l-1.156-1.153a1 1 0 0 1 .572-1.822l1.633-.256a1 1 0 0 0 .737-.535z"/><rect width="18" height="18" x="3" y="3" rx="2"/></svg>'
			},
			{
				name: 'square-stop',
				title: 'Square Stop',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="2"/><rect width="6" height="6" x="9" y="9" rx="1"/></svg>'
			},
			{
				name: 'square-terminal',
				title: 'Square Terminal',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m7 11 2-2-2-2m4 6h4"/><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/></svg>'
			},
			{
				name: 'square-user-round',
				title: 'Square User Round',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M18 21a6 6 0 0 0-12 0"/><circle cx="12" cy="11" r="4"/><rect width="18" height="18" x="3" y="3" rx="2"/></svg>'
			},
			{
				name: 'square-user',
				title: 'Square User',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="2"/><circle cx="12" cy="10" r="3"/><path d="M7 21v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2"/></svg>'
			},
			{
				name: 'square-x',
				title: 'Square X',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><path d="m15 9-6 6m0-6 6 6"/></svg>'
			},
			{
				name: 'square',
				title: 'Square',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="2"/></svg>'
			},
			{
				name: 'squares-exclude',
				title: 'Squares Exclude',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M16 12v2a2 2 0 0 1-2 2H9a1 1 0 0 0-1 1v3a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2h0M4 16a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v3a1 1 0 0 1-1 1h-5a2 2 0 0 0-2 2v2"/></svg>'
			},
			{
				name: 'squares-intersect',
				title: 'Squares Intersect',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 22a2 2 0 0 1-2-2m6-18a2 2 0 0 1 2 2m0 18h-2M2 10V8m0-4a2 2 0 0 1 2-2m16 6a2 2 0 0 1 2 2m0 4v2m0 4a2 2 0 0 1-2 2M4 16a2 2 0 0 1-2-2m6-4a2 2 0 0 1 2-2h5a1 1 0 0 1 1 1v5a2 2 0 0 1-2 2H9a1 1 0 0 1-1-1zm0-8h2"/></svg>'
			},
			{
				name: 'squares-subtract',
				title: 'Squares Subtract',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 22a2 2 0 0 1-2-2m8 2h-2m2-18a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-5a2 2 0 0 1 2-2h5a1 1 0 0 0 1-1zm4 4a2 2 0 0 1 2 2m0 4v2m0 4a2 2 0 0 1-2 2"/></svg>'
			},
			{
				name: 'squares-unite',
				title: 'Squares Unite',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M4 16a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v3a1 1 0 0 0 1 1h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2v-3a1 1 0 0 0-1-1z"/></svg>'
			},
			{
				name: 'squircle-dashed',
				title: 'Squircle Dashed',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M13.77 3.043a34 34 0 0 0-3.54 0m3.541 17.913a33 33 0 0 1-3.541.001m9.95-3.217c-.51 1.15-1.29 1.93-2.439 2.44M20.18 6.259c-.51-1.148-1.291-1.929-2.44-2.438m3.217 6.409a33 33 0 0 1 0 3.54M3.043 10.23a34 34 0 0 0 .001 3.541m3.216 6.408c-1.15-.508-1.93-1.29-2.44-2.438M6.26 3.82c-1.149.51-1.93 1.291-2.44 2.44"/></svg>'
			},
			{
				name: 'squircle',
				title: 'Squircle',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9-9 9-9-1.8-9-9 1.8-9 9-9"/></svg>'
			},
			{
				name: 'squirrel',
				title: 'Squirrel',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M15.236 22a3 3 0 0 0-2.2-5"/><path d="M16 20a3 3 0 0 1 3-3h1a2 2 0 0 0 2-2v-2a4 4 0 0 0-4-4V4m0 9h.01"/><path d="M18 6a4 4 0 0 0-4 4 7 7 0 0 0-7 7c0-5 4-5 4-10.5a4.5 4.5 0 1 0-9 0 2.5 2.5 0 0 0 5 0C7 10 3 11 3 17c0 2.8 2.2 5 5 5h10"/></svg>'
			},
			{
				name: 'stairs-arch',
				title: 'Stairs Arch',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M21 21H3V11a9 9 0 1 1 18 0Z"/><path d="M20.77 9H12v4m-4 4v-4h13M3 17h18"/></svg>'
			},
			{
				name: 'stairs-arrow-down-left',
				title: 'Stairs Arrow Down Left',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m12 2-9 9m0-4v4h4m-5 9h5v-5h5v-5h5V5h5"/></svg>'
			},
			{
				name: 'stairs-arrow-up-right',
				title: 'Stairs Arrow Up Right',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m3 11 9-9M8 2h4v4M2 20h5v-5h5v-5h5V5h5"/></svg>'
			},
			{
				name: 'stairs',
				title: 'Stairs',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M2 16h10v4H2zm2-4h10v4H4zm2-4h10v4H6zm2-4h10v4H8z"/><path d="M12 20h10V4h-4"/></svg>'
			},
			{
				name: 'stamp',
				title: 'Stamp',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M14 13V8.5C14 7 15 7 15 5a3 3 0 0 0-6 0c0 2 1 2 1 3.5V13m10 2.5a2.5 2.5 0 0 0-2.5-2.5h-11A2.5 2.5 0 0 0 4 15.5V17a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1zM5 22h14"/></svg>'
			},
			{
				name: 'star-half',
				title: 'Star Half',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 18.338a2.1 2.1 0 0 0-.987.244L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16l2.309-4.679A.53.53 0 0 1 12 2"/></svg>'
			},
			{
				name: 'star-north',
				title: 'Star North',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M3 12h18m-9-9v18m5-14L7 17M7 7l10 10"/></svg>'
			},
			{
				name: 'star-off',
				title: 'Star Off',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M8.34 8.34 2 9.27l5 4.87L5.82 21 12 17.77 18.18 21l-.59-3.43m.83-4.81L22 9.27l-6.91-1L12 2l-1.44 2.91M2 2l20 20"/></svg>'
			},
			{
				name: 'star',
				title: 'Star',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"/></svg>'
			},
			{
				name: 'steering-wheel',
				title: 'Steering Wheel',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="m3.3 7 7 4m3.4 0 7-4M12 14v8"/><circle cx="12" cy="12" r="2"/></svg>'
			},
			{
				name: 'step-back',
				title: 'Step Back',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M13.971 4.285A2 2 0 0 1 17 6v12a2 2 0 0 1-3.029 1.715l-9.997-5.998a2 2 0 0 1-.003-3.432zM21 20V4"/></svg>'
			},
			{
				name: 'step-forward',
				title: 'Step Forward',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10.029 4.285A2 2 0 0 0 7 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432zM3 4v16"/></svg>'
			},
			{
				name: 'stethoscope',
				title: 'Stethoscope',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M11 2v2M5 2v2m0-1H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1"/><path d="M8 15a6 6 0 0 0 12 0v-3"/><circle cx="20" cy="10" r="2"/></svg>'
			},
			{
				name: 'sticker',
				title: 'Sticker',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M15.5 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V8.5z"/><path d="M14 3v4a2 2 0 0 0 2 2h4M8 13h.01M16 13h.01M10 16s.8 1 2 1c1.3 0 2-1 2-1"/></svg>'
			},
			{
				name: 'sticky-note',
				title: 'Sticky Note',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8Z"/><path d="M15 3v4a2 2 0 0 0 2 2h4"/></svg>'
			},
			{
				name: 'store',
				title: 'Store',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5m8.774-10.69a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244"/><path d="M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05"/></svg>'
			},
			{
				name: 'strawberry',
				title: 'Strawberry',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m17 7 3.5-3.5M17 2v5h5M2.1 17.1a4 4 0 0 0 4.8 4.8l9-2.1a6.32 6.32 0 0 0 2.9-10.9L15 5.2A6.5 6.5 0 0 0 4.1 8.3Zm6.4-7.6h.01m3.99-1h.01m-5.01 5h.01m3.99-1h.01m3.99-1h.01m-9.01 6h.01m3.99-1h.01m3.99-1h.01"/></svg>'
			},
			{
				name: 'stretch-horizontal',
				title: 'Stretch Horizontal',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="20" height="6" x="2" y="4" rx="2"/><rect width="20" height="6" x="2" y="14" rx="2"/></svg>'
			},
			{
				name: 'stretch-vertical',
				title: 'Stretch Vertical',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="6" height="20" x="4" y="2" rx="2"/><rect width="6" height="20" x="14" y="2" rx="2"/></svg>'
			},
			{
				name: 'strikethrough-square',
				title: 'Strikethrough Square',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M10.5 12a2.5 2.5 0 0 1 0-5H15m-8 5h10m-9 5h5.5a2.5 2.5 0 0 0 0-5"/></svg>'
			},
			{
				name: 'strikethrough',
				title: 'Strikethrough',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M16 4H9a3 3 0 0 0-2.83 4M14 12a4 4 0 0 1 0 8H6m-2-8h16"/></svg>'
			},
			{
				name: 'stroller',
				title: 'Stroller',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M14 12.95c1.6-1.6 4.1-1.6 5.7.05"/><circle cx="11" cy="6.5" r="2.5"/><path d="M18.3 17.2 5.45 4.5M19.7 17 13 18.1c-2.7.5-5.5-1-5.7-4.1-.4-2.6-.9-5.7-1.3-8.3A2 2 0 0 0 2 6"/><circle cx="8" cy="19" r="2"/><circle cx="20" cy="19" r="2"/></svg>'
			},
			{
				name: 'subscript',
				title: 'Subscript',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m4 5 8 8m0-8-8 8m16 6h-4c0-1.5.44-2 1.5-2.5S20 15.33 20 14c0-.47-.17-.93-.48-1.29a2.11 2.11 0 0 0-2.62-.44c-.42.24-.74.62-.9 1.07"/></svg>'
			},
			{
				name: 'sun-dim',
				title: 'Sun Dim',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4"/><path d="M12 4h.01M20 12h.01M12 20h.01M4 12h.01m13.647-5.657h.01m-.01 11.314h.01m-11.324 0h.01m-.01-11.314h.01"/></svg>'
			},
			{
				name: 'sun-medium',
				title: 'Sun Medium',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4"/><path d="M12 3v1m0 16v1m-9-9h1m16 0h1m-2.636-6.364-.707.707M6.343 17.657l-.707.707m0-12.728.707.707m11.314 11.314.707.707"/></svg>'
			},
			{
				name: 'sun-moon',
				title: 'Sun Moon',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 2v2m2.837 12.385a6 6 0 1 1-7.223-7.222c.624-.147.97.66.715 1.248a4 4 0 0 0 5.26 5.259c.589-.255 1.396.09 1.248.715M16 12a4 4 0 0 0-4-4m7-3-1.256 1.256M20 12h2"/></svg>'
			},
			{
				name: 'sun-snow',
				title: 'Sun Snow',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 21v-1m0-16V3m0 6a3 3 0 0 0 0 6m4 5 1.25-2.5L18 18M14 4l1.25 2.5L18 6"/><path d="m17 21-3-6 1.5-3H22m-5-9-3 6 1.5 3M2 12h1"/><path d="m20 10-1.5 2 1.5 2M3.64 18.36l.7-.7m0-11.32-.7-.7"/></svg>'
			},
			{
				name: 'sun',
				title: 'Sun',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32 1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>'
			},
			{
				name: 'sunlounger-parasol-sun-palmtree',
				title: 'Sunlounger Parasol Sun Palmtree',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="4" cy="4" r="2"/><path d="M16 14s1-3 1-8V4s-1-2-3-2c-1 0-2 .5-2 .5"/><path d="M13 8a4 4 0 0 1 8 0"/><path d="M17 4s1-2 3-2c1 0 2 .5 2 .5M4 14l3-5 5 3Zm4-1 2 8m-7 0 .7-2.1c.2-.5.7-.9 1.3-.9h12c.5 0 1.3-.4 1.6-.8L22 13m-1 8-3-3"/></svg>'
			},
			{
				name: 'sunlounger-parasol-sun',
				title: 'Sunlounger Parasol Sun',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="20" cy="4" r="2"/><path d="M2.4 14.4a7 7 0 0 1 13.2-4.8ZM9 12l3 9m-9 0 .7-2.1c.2-.5.7-.9 1.3-.9h12c.5 0 1.3-.4 1.6-.8L22 13m-1 8-3-3"/></svg>'
			},
			{
				name: 'sunlounger-parasol-table',
				title: 'Sunlounger Parasol Table',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M21 8H3l9-6Zm-9 0v13m-4-8h8M3 21l.7-2.1c.2-.5.7-.9 1.3-.9h12c.5 0 1.3-.4 1.6-.8L22 13m-1 8-3.2-3.2"/></svg>'
			},
			{
				name: 'sunrise',
				title: 'Sunrise',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 2v8m-7.07.93 1.41 1.41M2 18h2m16 0h2m-2.93-7.07-1.41 1.41M22 22H2M8 6l4-4 4 4m0 12a4 4 0 0 0-8 0"/></svg>'
			},
			{
				name: 'sunset',
				title: 'Sunset',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 10V2m-7.07 8.93 1.41 1.41M2 18h2m16 0h2m-2.93-7.07-1.41 1.41M22 22H2M16 6l-4 4-4-4m8 12a4 4 0 0 0-8 0"/></svg>'
			},
			{
				name: 'superscript',
				title: 'Superscript',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m4 19 8-8m0 8-8-8m16 1h-4c0-1.5.442-2 1.5-2.5S20 8.334 20 7.002c0-.472-.17-.93-.484-1.29a2.105 2.105 0 0 0-2.617-.436c-.42.239-.738.614-.899 1.06"/></svg>'
			},
			{
				name: 'surfboard',
				title: 'Surfboard',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M22 2 2.6 21.4m11.2-2.2A18 18 0 0 0 22 4V2h-2C10.1 2 2 10.1 2 20a2 2 0 0 0 2 2 17 17 0 0 0 7.63-1.7"/><path d="M7 17c2.7 0 4.9 2.3 5 5a6.7 6.7 0 0 0-.1-9.9"/></svg>'
			},
			{
				name: 'sushi-2',
				title: 'Sushi 2',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M16.4 3.3a8.23 8.23 0 0 0-8.8 0L3.8 6c-2.4 1.7-2.4 4.4 0 6.1l3.9 2.7c2.4 1.7 6.3 1.7 8.7 0l3.9-2.7c2.4-1.7 2.4-4.4 0-6.1Z"/><path d="M2 9v6c0 1.1.6 2.2 1.8 3l3.9 2.7c2.4 1.7 6.3 1.7 8.7 0l3.9-2.7c1.2-.8 1.8-1.9 1.8-3V9"/><path d="M7.7 10.1c-.9-.6-.9-1.6 0-2.2l2.7-1.8c.9-.6 2.4-.6 3.3 0l2.7 1.8c.9.6.9 1.6 0 2.2l-2.7 1.8c-.9.6-2.4.6-3.3 0Z"/><path d="M15 11c-2-3-5-2-6 0"/></svg>'
			},
			{
				name: 'sushi-3',
				title: 'Sushi 3',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M22 10a2 2 0 0 1-2 2h-.5l-5.6-1.4c-1.1-.3-2.8-.3-3.9 0L4.4 12H4a2 2 0 0 1-2-2 4 4 0 0 1 4-4h12a4 4 0 0 1 4 4M6 11l1-5m3 4 1-4m3 4 1-4m3 5 1-4m1 5v4a2 2 0 0 1-4 0 2 2 0 0 1-4 0 2 2 0 0 1-4 0 2 2 0 0 1-4 0v-4"/></svg>'
			},
			{
				name: 'sushi-chopsticks',
				title: 'Sushi Chopsticks',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M2 18V2m20 16V2M6 11c0-2.8 2.2-5 5-5h2c2.8 0 5 2.2 5 5v6c0 2.8-2.2 5-5 5h-2c-2.8 0-5-2.2-5-5Z"/><path d="M18 13c0 2.8-2.2 5-5 5h-2c-2.8 0-5-2.2-5-5"/><path d="M11 14c-.6 0-1-.4-1-1v-2c0-.6.4-1 1-1h2c.6 0 1 .4 1 1v2c0 .6-.4 1-1 1Z"/></svg>'
			},
			{
				name: 'sushi',
				title: 'Sushi',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="7"/><rect width="8" height="8" x="8" y="8" rx="2"/><path d="M12 8v8m-4-4h4"/></svg>'
			},
			{
				name: 'swatch-book',
				title: 'Swatch Book',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M11 17a4 4 0 0 1-8 0V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2Z"/><path d="M16.7 13H19a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H7m0-4h.01"/><path d="m11 8 2.3-2.3a2.4 2.4 0 0 1 3.404.004L18.6 7.6a2.4 2.4 0 0 1 .026 3.434L9.9 19.8"/></svg>'
			},
			{
				name: 'sweater',
				title: 'Sweater',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M6 19H3c-.6 0-1-.4-1-1V6c0-1.1.8-2.3 1.9-2.6L8 2a4 4 0 0 0 8 0l4.1 1.4C21.2 3.7 22 4.9 22 6v12c0 .6-.4 1-1 1h-3"/><path d="M18 8v13c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V8"/><path d="m6 10 2 2 2-2 2 2 2-2 2 2 2-2M6 16l2 2 2-2 2 2 2-2 2 2 2-2"/></svg>'
			},
			{
				name: 'swiss-franc-circle',
				title: 'Swiss Franc Circle',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M10 17V7h5m-5 4h4m-6 4h5"/></svg>'
			},
			{
				name: 'swiss-franc-square',
				title: 'Swiss Franc Square',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M10 17V7h5m-5 4h4m-6 4h5"/></svg>'
			},
			{
				name: 'swiss-franc',
				title: 'Swiss Franc',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 21V3h8M6 16h9m-5-6.5h7"/></svg>'
			},
			{
				name: 'switch-camera',
				title: 'Switch Camera',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M11 19H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h5m4 0h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-5"/><circle cx="12" cy="12" r="3"/><path d="m18 22-3-3 3-3M6 2l3 3-3 3"/></svg>'
			},
			{
				name: 'sword',
				title: 'Sword',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M14.5 17.5 3 6V3h3l11.5 11.5M13 19l6-6m-3 3 4 4m-1 1 2-2"/></svg>'
			},
			{
				name: 'swords',
				title: 'Swords',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M14.5 17.5 3 6V3h3l11.5 11.5M13 19l6-6m-3 3 4 4m-1 1 2-2M14.5 6.5 18 3h3v3l-3.5 3.5M5 14l4 4m-2-1-3 3m-1-1 2 2"/></svg>'
			},
			{
				name: 'syringe',
				title: 'Syringe',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m18 2 4 4m-5 1 3-3m-1 5L8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5m-6 6 4 4m-8 4-3 3M14 4l6 6"/></svg>'
			},
			{
				name: 'tab-arrow-down',
				title: 'Tab Arrow Down',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 16V8m4 4-4 4-4-4"/><path d="M4 20V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v14m2 0H2"/></svg>'
			},
			{
				name: 'tab-arrow-up-right',
				title: 'Tab Arrow Up Right',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m15 9-6 6m0-6h6v6"/><path d="M4 20V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v14m2 0H2"/></svg>'
			},
			{
				name: 'tab-check',
				title: 'Tab Check',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m9 12 2 2 4-4"/><path d="M4 20V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v14m2 0H2"/></svg>'
			},
			{
				name: 'tab-dot',
				title: 'Tab Dot',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="1"/><path d="M4 20V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v14m2 0H2"/></svg>'
			},
			{
				name: 'tab-plus',
				title: 'Tab Plus',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M15 12H9m3-3v6m-8 5V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v14m2 0H2"/></svg>'
			},
			{
				name: 'tab-slash',
				title: 'Tab Slash',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m14.5 9.5-5 5M4 20V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v14m2 0H2"/></svg>'
			},
			{
				name: 'tab-text',
				title: 'Tab Text',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M8 8h6m-6 4h8m-8 4h6M4 20V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v14m2 0H2"/></svg>'
			},
			{
				name: 'tab-x',
				title: 'Tab X',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m14.5 9.5-5 5m5 0-5-5M4 20V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v14m2 0H2"/></svg>'
			},
			{
				name: 'tab',
				title: 'Tab',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M4 20V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v14m2 0H2"/></svg>'
			},
			{
				name: 'table-2',
				title: 'Table 2',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18"/></svg>'
			},
			{
				name: 'table-cells-merge',
				title: 'Table Cells Merge',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 21v-6m0-6V3M3 15h18M3 9h18"/><rect width="18" height="18" x="3" y="3" rx="2"/></svg>'
			},
			{
				name: 'table-cells-split',
				title: 'Table Cells Split',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 15V9m-9 6h18M3 9h18"/><rect width="18" height="18" x="3" y="3" rx="2"/></svg>'
			},
			{
				name: 'table-columns-split',
				title: 'Table Columns Split',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M14 14v2m0 4v2m0-20v2m0 4v2M2 15h8M2 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H2M2 9h8m12 6h-4m4-12h-2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h2m0-12h-4M5 3v18"/></svg>'
			},
			{
				name: 'table-of-contents',
				title: 'Table Of Contents',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M16 5H3m13 7H3m13 7H3M21 5h.01M21 12h.01M21 19h.01"/></svg>'
			},
			{
				name: 'table-properties',
				title: 'Table Properties',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M15 3v18"/><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M21 9H3m18 6H3"/></svg>'
			},
			{
				name: 'table-rows-split',
				title: 'Table Rows Split',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M14 10h2m-1 12v-8m0-12v4M2 10h2m16 0h2M3 19h18M3 22v-6a2 2 135 0 1 2-2h14a2 2 45 0 1 2 2v6M3 2v2a2 2 45 0 0 2 2h14a2 2 135 0 0 2-2V2M8 10h2M9 22v-8M9 2v4"/></svg>'
			},
			{
				name: 'table',
				title: 'Table',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 3v18"/><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18M3 15h18"/></svg>'
			},
			{
				name: 'tablet-smartphone',
				title: 'Tablet Smartphone',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="10" height="14" x="3" y="8" rx="2"/><path d="M5 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2.4M8 18h.01"/></svg>'
			},
			{
				name: 'tablet',
				title: 'Tablet',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg>'
			},
			{
				name: 'tablets',
				title: 'Tablets',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="7" cy="7" r="5"/><circle cx="17" cy="17" r="5"/><path d="M12 17h10M3.46 10.54l7.08-7.08"/></svg>'
			},
			{
				name: 'tag',
				title: 'Tag',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"/><circle cx="7.5" cy="7.5" r=".5" fill="currentColor"/></svg>'
			},
			{
				name: 'tags',
				title: 'Tags',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M13.172 2a2 2 0 0 1 1.414.586l6.71 6.71a2.4 2.4 0 0 1 0 3.408l-4.592 4.592a2.4 2.4 0 0 1-3.408 0l-6.71-6.71A2 2 0 0 1 6 9.172V3a1 1 0 0 1 1-1zM2 7v6.172a2 2 0 0 0 .586 1.414l6.71 6.71a2.4 2.4 0 0 0 3.191.193"/><circle cx="10.5" cy="6.5" r=".5" fill="currentColor"/></svg>'
			},
			{
				name: 'tally-1',
				title: 'Tally 1',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M4 4v16"/></svg>'
			},
			{
				name: 'tally-2',
				title: 'Tally 2',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M4 4v16M9 4v16"/></svg>'
			},
			{
				name: 'tally-3',
				title: 'Tally 3',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M4 4v16M9 4v16m5-16v16"/></svg>'
			},
			{
				name: 'tally-4',
				title: 'Tally 4',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M4 4v16M9 4v16m5-16v16m5-16v16"/></svg>'
			},
			{
				name: 'tally-5',
				title: 'Tally 5',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M4 4v16M9 4v16m5-16v16m5-16v16m3-14L2 18"/></svg>'
			},
			{
				name: 'tangent',
				title: 'Tangent',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="17" cy="4" r="2"/><path d="M15.59 5.41 5.41 15.59"/><circle cx="4" cy="17" r="2"/><path d="M12 22s-4-9-1.5-11.5S22 12 22 12"/></svg>'
			},
			{
				name: 'target-arrow',
				title: 'Target Arrow',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M19 2v3h3m-8.6 5.6L22 2"/><circle cx="12" cy="12" r="2"/><path d="M12.3 6H12a6 6 0 1 0 6 6v-.3"/><path d="M15 2.5A9.93 9.93 0 1 0 21.5 9M5.3 19.4 4 22m14.7-2.6L20 22"/></svg>'
			},
			{
				name: 'target',
				title: 'Target',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>'
			},
			{
				name: 'telescope',
				title: 'Telescope',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m10.065 12.493-6.18 1.318a.934.934 0 0 1-1.108-.702l-.537-2.15a1.07 1.07 0 0 1 .691-1.265l13.504-4.44m-2.875 6.493 4.332-.924M16 21l-3.105-6.21"/><path d="M16.485 5.94a2 2 0 0 1 1.455-2.425l1.09-.272a1 1 0 0 1 1.212.727l1.515 6.06a1 1 0 0 1-.727 1.213l-1.09.272a2 2 0 0 1-2.425-1.455zM6.158 8.633l1.114 4.456M8 21l3.105-6.21"/><circle cx="12" cy="13" r="2"/></svg>'
			},
			{
				name: 'tennis-ball',
				title: 'Tennis Ball',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M2 12c5.5 0 10-4.5 10-10"/><circle cx="12" cy="12" r="10"/><path d="M22 12c-5.5 0-10 4.5-10 10"/></svg>'
			},
			{
				name: 'tennis-racket',
				title: 'Tennis Racket',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10.7 4.7c3-3 7.4-3.6 9.8-1.2s1.8 6.8-1.2 9.8a9.5 9.5 0 0 1-4.3 2.5c-2.1.5-4.1.1-5.5-1.3S7.7 11.1 8.2 9a9.5 9.5 0 0 1 2.5-4.3"/><path d="M8.2 9 6 18l9-2.2M2 22l4-4"/><circle cx="20" cy="20" r="2"/></svg>'
			},
			{
				name: 'tent-tree',
				title: 'Tent Tree',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="4" cy="4" r="2"/><path d="m14 5 3-3 3 3m-6 5 3-3 3 3m-3 4V2m0 12H7l-5 8h20Zm-9 0v8m1-8 5 8"/></svg>'
			},
			{
				name: 'tent',
				title: 'Tent',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M3.5 21 14 3m6.5 18L10 3m5.5 18L12 15l-3.5 6M2 21h20"/></svg>'
			},
			{
				name: 'terminal',
				title: 'Terminal',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 19h8M4 17l6-6-6-6"/></svg>'
			},
			{
				name: 'test-tube-diagonal',
				title: 'Test Tube Diagonal',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M21 7 6.82 21.18a2.83 2.83 0 0 1-3.99-.01 2.83 2.83 0 0 1 0-4L17 3m-1-1 6 6m-10 8H4"/></svg>'
			},
			{
				name: 'test-tube',
				title: 'Test Tube',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5s-2.5-1.1-2.5-2.5V2m-1 0h7m-1 14h-5"/></svg>'
			},
			{
				name: 'test-tubes',
				title: 'Test Tubes',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M9 2v17.5A2.5 2.5 0 0 1 6.5 22 2.5 2.5 0 0 1 4 19.5V2m16 0v17.5a2.5 2.5 0 0 1-2.5 2.5 2.5 2.5 0 0 1-2.5-2.5V2M3 2h7m4 0h7M9 16H4m16 0h-5"/></svg>'
			},
			{
				name: 'text-align-center',
				title: 'Text Align Center',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M21 5H3m14 7H7m12 7H5"/></svg>'
			},
			{
				name: 'text-align-end',
				title: 'Text Align End',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M21 5H3m18 7H9m12 7H7"/></svg>'
			},
			{
				name: 'text-align-justify',
				title: 'Text Align Justify',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M3 5h18M3 12h18M3 19h18"/></svg>'
			},
			{
				name: 'text-align-start',
				title: 'Text Align Start',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M21 5H3m12 7H3m14 7H3"/></svg>'
			},
			{
				name: 'text-cursor-input',
				title: 'Text Cursor Input',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 20h-1a2 2 0 0 1-2-2 2 2 0 0 1-2 2H6m7-12h7a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-7m-8 0H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h1m1-4h1a2 2 0 0 1 2 2 2 2 0 0 1 2-2h1M9 6v12"/></svg>'
			},
			{
				name: 'text-cursor',
				title: 'Text Cursor',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M17 22h-1a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h1M7 22h1a4 4 0 0 0 4-4v-1M7 2h1a4 4 0 0 1 4 4v1"/></svg>'
			},
			{
				name: 'text-initial',
				title: 'Text Initial',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M15 5h6m-6 7h6M3 19h18M3 12l3.553-7.724a.5.5 0 0 1 .894 0L11 12m-7.08-2h6.16"/></svg>'
			},
			{
				name: 'text-quote',
				title: 'Text Quote',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M17 5H3m18 7H8m13 7H8m-5-7v7"/></svg>'
			},
			{
				name: 'text-search',
				title: 'Text Search',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M21 5H3m7 7H3m7 7H3"/><circle cx="17" cy="15" r="3"/><path d="m21 19-1.9-1.9"/></svg>'
			},
			{
				name: 'text-select',
				title: 'Text Select',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M14 21h1M14 3h1m4 0a2 2 0 0 1 2 2m0 9v1m0 4a2 2 0 0 1-2 2m2-12v1M3 14v1m0-6v1m2 11a2 2 0 0 1-2-2M5 3a2 2 0 0 0-2 2m4 7h10M7 16h6M7 8h8M9 21h1M9 3h1"/></svg>'
			},
			{
				name: 'text-square',
				title: 'Text Square',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 12h10M7 16h6M7 8h8"/></svg>'
			},
			{
				name: 'text-wrap',
				title: 'Text Wrap',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m16 16-3 3 3 3"/><path d="M3 12h14.5a1 1 0 0 1 0 7H13M3 19h6M3 5h18"/></svg>'
			},
			{
				name: 'theater',
				title: 'Theater',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M2 10s3-3 3-8m17 8s-3-3-3-8"/><path d="M10 2c0 4.4-3.6 8-8 8m12-8c0 4.4 3.6 8 8 8M2 10s2 2 2 5m18-5s-2 2-2 5M8 15h8M2 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1m4 0v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1"/></svg>'
			},
			{
				name: 'thermometer-snowflake',
				title: 'Thermometer Snowflake',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m10 20-1.25-2.5L6 18m4-14L8.75 6.5 6 6m4.585 9H10m-8-3h6.5L10 9m10 5.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0z"/><path d="m4 10 1.5 2L4 14m3 7 3-6-1.5-3M7 3l3 6h2"/></svg>'
			},
			{
				name: 'thermometer-sun',
				title: 'Thermometer Sun',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 9a4 4 0 0 0-2 7.5M12 3v2M6.6 18.4l-1.4 1.4M20 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0M4 13H2m4.34-5.66L4.93 5.93"/></svg>'
			},
			{
				name: 'thermometer',
				title: 'Thermometer',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0"/></svg>'
			},
			{
				name: 'thumbs-down',
				title: 'Thumbs Down',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M17 14V2M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88"/></svg>'
			},
			{
				name: 'thumbs-up',
				title: 'Thumbs Up',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M7 10v12m8-16.12L14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88"/></svg>'
			},
			{
				name: 'ticket-check',
				title: 'Ticket Check',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/><path d="m9 12 2 2 4-4"/></svg>'
			},
			{
				name: 'ticket-minus',
				title: 'Ticket Minus',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Zm7 3h6"/></svg>'
			},
			{
				name: 'ticket-percent',
				title: 'Ticket Percent',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M2 9a3 3 0 1 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 1 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Zm7 0h.01M15 9l-6 6m6 0h.01"/></svg>'
			},
			{
				name: 'ticket-plus',
				title: 'Ticket Plus',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Zm7 3h6m-3-3v6"/></svg>'
			},
			{
				name: 'ticket-slash',
				title: 'Ticket Slash',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Zm7.5 5.5 5-5"/></svg>'
			},
			{
				name: 'ticket-x',
				title: 'Ticket X',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Zm7.5 5.5 5-5m-5 0 5 5"/></svg>'
			},
			{
				name: 'ticket',
				title: 'Ticket',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Zm11-4v2m0 10v2m0-8v2"/></svg>'
			},
			{
				name: 'tickets-plane',
				title: 'Tickets Plane',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10.5 17h1.227a2 2 0 0 0 1.345-.52L18 12m-6 1.5 3.75.5M4.5 8l10.58-5.06a1 1 0 0 1 1.342.488L18.5 8M6 10V8m0 6v1m0 4v2"/><rect width="20" height="13" x="2" y="8" rx="2"/></svg>'
			},
			{
				name: 'tickets',
				title: 'Tickets',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m4.5 8 10.58-5.06a1 1 0 0 1 1.342.488L18.5 8M6 10V8m0 6v1m0 4v2"/><rect width="20" height="13" x="2" y="8" rx="2"/></svg>'
			},
			{
				name: 'tie-bow-ribbon',
				title: 'Tie Bow Ribbon',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 7h4v4h-4zM8 9h2"/><path d="M10 7C8.8 5.5 6.6 4 4 4 2.9 4 2 6.2 2 9s.9 5 2 5c2.6 0 4.8-1.5 6-3m4-2h2m-2 2c1.2 1.5 3.4 3 6 3 1.1 0 2-2.2 2-5s-.9-5-2-5c-2.6 0-4.8 1.5-6 3"/><path d="M5.5 13.83 4 20l3-1 2 2 2.5-10m7 2.83L20 20l-3-1-2 2-2.5-10"/></svg>'
			},
			{
				name: 'tie-bow',
				title: 'Tie Bow',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 10h4v4h-4zm-2 2h2"/><path d="M10 10C8.8 8.5 6.6 7 4 7c-1.1 0-2 2.2-2 5s.9 5 2 5c2.6 0 4.8-1.5 6-3m4-2h2m-2 2c1.2 1.5 3.4 3 6 3 1.1 0 2-2.2 2-5s-.9-5-2-5c-2.6 0-4.8 1.5-6 3"/></svg>'
			},
			{
				name: 'tie',
				title: 'Tie',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M2.9 3c.1-.6.5-1 1.1-1h4c.6 0 1 .4 1.1 1l.9 15-4 4-4-4Zm5.95-.6L16 11.8m-6.3 1.35 6.5 8.5M22 5v16c0 .6-.4 1-1 1h-4c-.6 0-1-.4-1-1V5l3-3Z"/></svg>'
			},
			{
				name: 'timer-off',
				title: 'Timer Off',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 2h4m-9.4 9a8 8 0 0 0 1.7 8.7 8 8 0 0 0 8.7 1.7m-7.6-14a8 8 0 0 1 10.3 1 8 8 0 0 1 .9 10.2M2 2l20 20M12 12v-2"/></svg>'
			},
			{
				name: 'timer-reset',
				title: 'Timer Reset',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 2h4m-2 12v-4m-8 3a8 8 0 0 1 8-7 8 8 0 1 1-5.3 14L4 17.6"/><path d="M9 17H4v5"/></svg>'
			},
			{
				name: 'timer',
				title: 'Timer',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 2h4m-2 12 3-3"/><circle cx="12" cy="14" r="8"/></svg>'
			},
			{
				name: 'tire',
				title: 'Tire',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="2"/><circle cx="12" cy="12" r="6"/><path d="M12 14v4m-1.9-5.38-3.8 1.23m4.52-3.47L8.47 7.15m5.43 5.47 3.8 1.23m-4.52-3.47 2.35-3.23"/></svg>'
			},
			{
				name: 'toast',
				title: 'Toast',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M5.5 3A3.5 3.5 0 0 0 3 8.9V19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.9A3.5 3.5 0 0 0 18.5 3Z"/><path d="M7.5 10c0-1.8 1.2-3 3.2-3 2.5 0 2.4 1.5 3.8 2.5s2.5 1 2.5 3c0 2.2-1.2 3.2-3.5 3.2-1.2 0-1.2 1.2-3 1.2S7 16 7 14.2c0-1.5.8-1.5.8-2.5 0-.7-.3-1.2-.3-1.7"/></svg>'
			},
			{
				name: 'toaster',
				title: 'Toaster',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M16 10V5.7A2 2 0 0 0 15 2H9a2 2 0 0 0-1 3.7V10m-2 0h12"/><path d="M4 7a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2"/><circle cx="8" cy="16" r="2"/><path d="M14 16h4m-2-2v8"/></svg>'
			},
			{
				name: 'toggle-left',
				title: 'Toggle Left',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="9" cy="12" r="3"/><rect width="20" height="14" x="2" y="5" rx="7"/></svg>'
			},
			{
				name: 'toggle-right',
				title: 'Toggle Right',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="15" cy="12" r="3"/><rect width="20" height="14" x="2" y="5" rx="7"/></svg>'
			},
			{
				name: 'toilet-roll',
				title: 'Toilet Roll',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><ellipse cx="10" cy="8" rx="3" ry="2"/><ellipse cx="10" cy="8" rx="7" ry="6"/><path d="M3 8v8c0 3.3 3.1 6 7 6s7-2.7 7-6V8c0 2.2 2.2 4 5 4v8c-2.8 0-5-1.8-5-4m-7-2v2m0 4v2"/></svg>'
			},
			{
				name: 'toilet',
				title: 'Toilet',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M7 12h13a1 1 0 0 1 1 1 5 5 0 0 1-5 5h-.598a.5.5 0 0 0-.424.765l1.544 2.47a.5.5 0 0 1-.424.765H5.402a.5.5 0 0 1-.424-.765L7 18"/><path d="M8 18a5 5 0 0 1-5-5V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8"/></svg>'
			},
			{
				name: 'tool-case',
				title: 'Tool Case',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 15h4m.817-4.005-.971-1.45 1.034-1.232a2 2 0 0 0-2.025-3.238l-1.82.364L9.91 3.885a2 2 0 0 0-3.625.748L6.141 6.55l-1.725.426a2 2 0 0 0-.19 3.756l.657.27"/><path d="m18.822 10.995 2.26-5.38a1 1 0 0 0-.557-1.318L16.954 2.9a1 1 0 0 0-1.281.533l-.924 2.122M4 12.006A1 1 0 0 1 4.994 11H19a1 1 0 0 1 1 1v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"/></svg>'
			},
			{
				name: 'toolbox-2',
				title: 'Toolbox 2',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M4 21a2 2 0 0 1-2-2v-7c0-.6.3-1.3.7-1.7l2.6-2.6C5.7 7.3 6.4 7 7 7h10c.6 0 1.3.3 1.7.7l2.6 2.6c.4.4.7 1.2.7 1.7v7a2 2 0 0 1-2 2Zm-2-7h20M9 16v-4m6 4v-4"/></svg>'
			},
			{
				name: 'toolbox',
				title: 'Toolbox',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><path d="M8 21a2 2 0 0 0 2-2v-8a4 4 0 0 0-8 0v8a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-8a4 4 0 0 0-4-4H6m-4 6h20m-8 2v-4m4 4v-4"/></svg>'
			},
			{
				name: 'top-crop',
				title: 'Top Crop',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M2 17a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5c-1.7 0-3-1.3-3-3V5h-4v1a3 3 0 1 1-6 0V5H5v4c0 1.7-1.3 3-3 3Z"/></svg>'
			},
			{
				name: 'tornado',
				title: 'Tornado',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M21 4H3m15 4H6m13 4H9m7 4h-6m1 4H9"/></svg>'
			},
			{
				name: 'torus',
				title: 'Torus',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><ellipse cx="12" cy="11" rx="3" ry="2"/><ellipse cx="12" cy="12.5" rx="10" ry="8.5"/></svg>'
			},
			{
				name: 'touchpad-off',
				title: 'Touchpad Off',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 20v-6m7.656 0H22M2 14h12M2 2l20 20m-2-2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2m5.656 0H20a2 2 0 0 1 2 2v10.344"/></svg>'
			},
			{
				name: 'touchpad',
				title: 'Touchpad',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="M2 14h20m-10 6v-6"/></svg>'
			},
			{
				name: 'towel-folded',
				title: 'Towel Folded',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M7 13h10a4 4 0 0 1 0 8H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v10"/><path d="M17 17H7a4 4 0 0 1-4-4"/></svg>'
			},
			{
				name: 'towel-rack',
				title: 'Towel Rack',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M8 6H2m4-4h12a2 2 0 0 1 2 2v18H8V4a2 2 0 0 0-4 0v15h4M22 6h-2M8 18h12"/></svg>'
			},
			{
				name: 'tower-control',
				title: 'Tower Control',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M18.2 12.27 20 6H4l1.8 6.27a1 1 0 0 0 .95.73h10.5a1 1 0 0 0 .96-.73ZM8 13v9m8 0v-9M9 6l1 7m5-7-1 7m-2-7V2m1 0h-2"/></svg>'
			},
			{
				name: 'toy-brick',
				title: 'Toy Brick',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="18" height="12" x="3" y="8" rx="1"/><path d="M10 8V5c0-.6-.4-1-1-1H6a1 1 0 0 0-1 1v3m14 0V5c0-.6-.4-1-1-1h-3a1 1 0 0 0-1 1v3"/></svg>'
			},
			{
				name: 'tractor',
				title: 'Tractor',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m10 11 11 .9a1 1 0 0 1 .8 1.1l-.665 4.158a1 1 0 0 1-.988.842H20m-4 0h-5"/><path d="M18 5a1 1 0 0 0-1 1v5.573M3 4h8.129a1 1 0 0 1 .99.863L13 11.246M4 11V4m3 11h.01M8 10.1V4"/><circle cx="18" cy="18" r="2"/><circle cx="7" cy="15" r="5"/></svg>'
			},
			{
				name: 'traffic-cone',
				title: 'Traffic Cone',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M16.05 10.966a5 2.5 0 0 1-8.1 0m8.973 3.083 4.48 2.04a1 1 0 0 1 .001 1.831l-8.574 3.9a2 2 0 0 1-1.66 0l-8.574-3.91a1 1 0 0 1 0-1.83l4.484-2.04"/><path d="M16.949 14.14a5 2.5 0 1 1-9.9 0L10.063 3.5a2 2 0 0 1 3.874 0z"/><path d="M9.194 6.57a5 2.5 0 0 0 5.61 0"/></svg>'
			},
			{
				name: 'train-front-tunnel',
				title: 'Train Front Tunnel',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M2 22V12a10 10 0 1 1 20 0v10"/><path d="M15 6.8v1.4a3 2.8 0 1 1-6 0V6.8m1 8.2h.01M14 15h.01"/><path d="M10 19a4 4 0 0 1-4-4v-3a6 6 0 1 1 12 0v3a4 4 0 0 1-4 4Zm-1 0-2 3m8-3 2 3"/></svg>'
			},
			{
				name: 'train-front',
				title: 'Train Front',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M8 3.1V7a4 4 0 0 0 8 0V3.1M9 15l-1-1m7 1 1-1"/><path d="M9 19c-2.8 0-5-2.2-5-5v-4a8 8 0 0 1 16 0v4c0 2.8-2.2 5-5 5Zm-1 0-2 3m10-3 2 3"/></svg>'
			},
			{
				name: 'train-track',
				title: 'Train Track',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M2 17 17 2M2 14l8 8M5 11l8 8M8 8l8 8M11 5l8 8M14 2l8 8M7 22 22 7"/></svg>'
			},
			{
				name: 'tram-front',
				title: 'Tram Front',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="16" height="16" x="4" y="3" rx="2"/><path d="M4 11h16m-8-8v8m-4 8-2 3m12 0-2-3m-8-4h.01M16 15h.01"/></svg>'
			},
			{
				name: 'transgender',
				title: 'Transgender',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 16v6m2-2h-4m8-18h4v4M2 2l7.17 7.17M2 5.355V2h3.357M22 2l-7.17 7.17M8 5 5 8"/><circle cx="12" cy="12" r="4"/></svg>'
			},
			{
				name: 'trash-2',
				title: 'Trash 2',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 11v6m4-6v6m5-11v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>'
			},
			{
				name: 'trash',
				title: 'Trash',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>'
			},
			{
				name: 'tree-deciduous',
				title: 'Tree Deciduous',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M8 19a4 4 0 0 1-2.24-7.32A3.5 3.5 0 0 1 9 6.03V6a3 3 0 1 1 6 0v.04a3.5 3.5 0 0 1 3.24 5.65A4 4 0 0 1 16 19Zm4 0v3"/></svg>'
			},
			{
				name: 'tree-palm',
				title: 'Tree Palm',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M13 8c0-2.76-2.46-5-5.5-5S2 5.24 2 8h2l1-1 1 1h4m3-.86A5.82 5.82 0 0 1 16.5 6c3.04 0 5.5 2.24 5.5 5h-3l-1-1-1 1h-3"/><path d="M5.89 9.71c-2.15 2.15-2.3 5.47-.35 7.43l4.24-4.25.7-.7.71-.71 2.12-2.12c-1.95-1.96-5.27-1.8-7.42.35"/><path d="M11 15.5c.5 2.5-.17 4.5-1 6.5h4c2-5.5-.5-12-1-14"/></svg>'
			},
			{
				name: 'tree-pine',
				title: 'Tree Pine',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m17 14 3 3.3a1 1 0 0 1-.7 1.7H4.7a1 1 0 0 1-.7-1.7L7 14h-.3a1 1 0 0 1-.7-1.7L9 9h-.2A1 1 0 0 1 8 7.3L12 3l4 4.3a1 1 0 0 1-.8 1.7H15l3 3.3a1 1 0 0 1-.7 1.7zm-5 8v-3"/></svg>'
			},
			{
				name: 'trees-forest',
				title: 'Trees Forest',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m9 5 3-3 3 3m-6 5 3-3 3 3m-3 2V2M2 15l3-3 3 3m-6 5 3-3 3 3m-3 2V12m11 3 3-3 3 3m-6 5 3-3 3 3m-3 2V12"/></svg>'
			},
			{
				name: 'trees',
				title: 'Trees',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0m-3 6v6m6-3v3"/><path d="M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5"/></svg>'
			},
			{
				name: 'trello',
				title: 'Trello',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><path d="M7 7h3v9H7zm7 0h3v5h-3z"/></svg>'
			},
			{
				name: 'trending-down',
				title: 'Trending Down',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M16 17h6v-6"/><path d="m22 17-8.5-8.5-5 5L2 7"/></svg>'
			},
			{
				name: 'trending-up-down',
				title: 'Trending Up Down',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M14.828 14.828 21 21m0-5v5h-5m5-18-9 9-4-4-6 6"/><path d="M21 8V3h-5"/></svg>'
			},
			{
				name: 'trending-up',
				title: 'Trending Up',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M16 7h6v6"/><path d="m22 7-8.5 8.5-5-5L2 17"/></svg>'
			},
			{
				name: 'triangle-alert',
				title: 'Triangle Alert',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3M12 9v4m0 4h.01"/></svg>'
			},
			{
				name: 'triangle-dashed',
				title: 'Triangle Dashed',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10.17 4.193a2 2 0 0 1 3.666.013M14 21h2m-.126-13.257 1 1.732m1.975 3.477 1 1.732m1.975 3.496a2 2 0 0 1-1.835 2.824M4.024 21a2 2 0 0 1-1.839-2.839m2.951-5.209-1 1.732M8 21h2M8.102 7.743l-1 1.732"/></svg>'
			},
			{
				name: 'triangle-right',
				title: 'Triangle Right',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M22 18a2 2 0 0 1-2 2H3c-1.1 0-1.3-.6-.4-1.3L20.4 4.3c.9-.7 1.6-.4 1.6.7Z"/></svg>'
			},
			{
				name: 'triangle-stripes',
				title: 'Triangle Stripes',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M13.75 4a2 2 0 0 0-3.5 0L2.2 18A2 2.1 0 0 0 4 21h16a2 2 0 0 0 1.75-3ZM7.5 9h9m-11 4h13M3 17h18"/></svg>'
			},
			{
				name: 'triangle',
				title: 'Triangle',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/></svg>'
			},
			{
				name: 'trophy',
				title: 'Trophy',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978m7-7.318v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978M18 9h1.5a1 1 0 0 0 0-5H18M4 22h16"/><path d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm0 0H4.5a1 1 0 0 1 0-5H6"/></svg>'
			},
			{
				name: 'trousers',
				title: 'Trousers',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M4 6h16M6 22a2 2 0 0 1-2-2V3c0-.6.4-1 1-1h14c.6 0 1 .4 1 1v17a2 2 0 0 1-2 2h-3l-3-10-3 10Zm0-11-2 1m5-3.5V6m6 0v2.5m5 3.5-2-1M4 18h6m4 0h6"/></svg>'
			},
			{
				name: 'truck-electric',
				title: 'Truck Electric',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M14 19V7a2 2 0 0 0-2-2H9m6 14H9m10 0h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.62L18.3 9.38a1 1 0 0 0-.78-.38H14M2 13v5a1 1 0 0 0 1 1h2M4 3 2.15 5.15a.495.495 0 0 0 .35.86h2.15a.47.47 0 0 1 .35.86L3 9.02"/><circle cx="17" cy="19" r="2"/><circle cx="7" cy="19" r="2"/></svg>'
			},
			{
				name: 'truck',
				title: 'Truck',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2m10 0H9m10 0h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/></svg>'
			},
			{
				name: 'turkish-lira',
				title: 'Turkish Lira',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M15 4 5 9m10-.5-10 5M18 12a9 9 0 0 1-9 9V3"/></svg>'
			},
			{
				name: 'turntable',
				title: 'Turntable',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 12.01h.01M18 8v4a8 8 0 0 1-1.07 4"/><circle cx="10" cy="12" r="4"/><rect width="20" height="16" x="2" y="4" rx="2"/></svg>'
			},
			{
				name: 'turtle',
				title: 'Turtle',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m12 10 2 4v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3a8 8 0 1 0-16 0v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3l2-4zM4.82 7.9 8 10m7.18-2.1L12 10"/><path d="M16.93 10H20a2 2 0 0 1 0 4H2"/></svg>'
			},
			{
				name: 'tuxedo',
				title: 'Tuxedo',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 3v2l4-2v2Z"/><path d="M18 3h1a2 2 0 0 1 1.7 3A5271 5271 0 0 0 12 21S6.8 12 3.3 6A2 2 0 0 1 5 3h1m6 6h.01M12 13h.01"/><path d="M21 5v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5"/></svg>'
			},
			{
				name: 'tv-minimal-play',
				title: 'Tv Minimal Play',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M15.033 9.44a.647.647 0 0 1 0 1.12l-4.065 2.352a.645.645 0 0 1-.968-.56V7.648a.645.645 0 0 1 .967-.56zM7 21h10"/><rect width="20" height="14" x="2" y="3" rx="2"/></svg>'
			},
			{
				name: 'tv-minimal',
				title: 'Tv Minimal',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M7 21h10"/><rect width="20" height="14" x="2" y="3" rx="2"/></svg>'
			},
			{
				name: 'tv',
				title: 'Tv',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m17 2-5 5-5-5"/><rect width="20" height="15" x="2" y="7" rx="2"/></svg>'
			},
			{
				name: 'twitch',
				title: 'Twitch',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M21 2H3v16h5v4l4-4h5l4-4zm-10 9V7m5 4V7"/></svg>'
			},
			{
				name: 'twitter',
				title: 'Twitter',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2"/></svg>'
			},
			{
				name: 'type-outline',
				title: 'Type Outline',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M14 16.5a.5.5 0 0 0 .5.5h.5a2 2 0 0 1 0 4H9a2 2 0 0 1 0-4h.5a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5V8a2 2 0 0 1-4 0V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v3a2 2 0 0 1-4 0v-.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5Z"/></svg>'
			},
			{
				name: 'type-square',
				title: 'Type Square',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 9V7h10v2m-5-2v10m-2 0h4"/></svg>'
			},
			{
				name: 'type',
				title: 'Type',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 4v16M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2M9 20h6"/></svg>'
			},
			{
				name: 'ufo',
				title: 'Ufo',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M18 8c0 1-3 2-6 2S6 9 6 8a6 6 0 0 1 12 0M7 13h.01M12 14h.01M17 13h.01"/><path d="M6 8.1c-2.4 1-4 2.6-4 4.4 0 3 4.5 5.5 10 5.5s10-2.5 10-5.5c0-1.8-1.6-3.4-4-4.4M7 22l2-4m8 4-2-4"/></svg>'
			},
			{
				name: 'umbrella-off',
				title: 'Umbrella Off',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 13v7a2 2 0 0 0 4 0M12 2v2m6.656 9h2.336a1 1 0 0 0 .97-1.274 10.284 10.284 0 0 0-12.07-7.51M2 2l20 20"/><path d="M5.961 5.957a10.28 10.28 0 0 0-3.922 5.769A1 1 0 0 0 3 13h10"/></svg>'
			},
			{
				name: 'umbrella',
				title: 'Umbrella',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 13v7a2 2 0 0 0 4 0M12 2v2"/><path d="M20.992 13a1 1 0 0 0 .97-1.274 10.284 10.284 0 0 0-19.923 0A1 1 0 0 0 3 13z"/></svg>'
			},
			{
				name: 'underline-square',
				title: 'Underline Square',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M15 7v3a3 3 0 1 1-6 0V7M7 17h10"/></svg>'
			},
			{
				name: 'underline',
				title: 'Underline',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M6 4v6a6 6 0 0 0 12 0V4M4 20h16"/></svg>'
			},
			{
				name: 'undo-2',
				title: 'Undo 2',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M9 14 4 9l5-5"/><path d="M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5 5.5 5.5 0 0 1-5.5 5.5H11"/></svg>'
			},
			{
				name: 'undo-dot',
				title: 'Undo Dot',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M21 17a9 9 0 0 0-15-6.7L3 13"/><path d="M3 7v6h6"/><circle cx="12" cy="17" r="1"/></svg>'
			},
			{
				name: 'undo',
				title: 'Undo',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M3 7v6h6"/><path d="M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13"/></svg>'
			},
			{
				name: 'unfold-horizontal',
				title: 'Unfold Horizontal',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M16 12h6M8 12H2M12 2v2m0 4v2m0 4v2m0 4v2m7-7 3-3-3-3M5 9l-3 3 3 3"/></svg>'
			},
			{
				name: 'unfold-vertical',
				title: 'Unfold Vertical',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 22v-6m0-8V2M4 12H2m8 0H8m8 0h-2m8 0h-2m-5 7-3 3-3-3m6-14-3-3-3 3"/></svg>'
			},
			{
				name: 'ungroup',
				title: 'Ungroup',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="8" height="6" x="5" y="4" rx="1"/><rect width="8" height="6" x="11" y="14" rx="1"/></svg>'
			},
			{
				name: 'unicorn-head',
				title: 'Unicorn Head',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m15.6 4.8 2.7 2.3M15.5 10S19 7 22 2c-6 2-10 5-10 5m-.5 5H11"/><path d="M5 15a4 4 0 0 0 4 4h7.8l.3.3a3 3 0 0 0 4-4.46L12 7c0-3-1-5-1-5S8 3 8 7c-4 1-6 3-6 3"/><path d="M2 4.5C4 3 6 3 6 3l2 4M6.14 17.8S4 19 2 22"/></svg>'
			},
			{
				name: 'university',
				title: 'University',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M14 21v-3a2 2 0 0 0-4 0v3m8-9h.01M18 16h.01"/><path d="M22 7a1 1 0 0 0-1-1h-2a2 2 0 0 1-1.143-.359L13.143 2.36a2 2 0 0 0-2.286-.001L6.143 5.64A2 2 0 0 1 5 6H3a1 1 0 0 0-1 1v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2zM6 12h.01M6 16h.01"/><circle cx="12" cy="10" r="2"/></svg>'
			},
			{
				name: 'unlink-2',
				title: 'Unlink 2',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M15 7h2a5 5 0 0 1 0 10h-2m-6 0H7A5 5 0 0 1 7 7h2"/></svg>'
			},
			{
				name: 'unlink',
				title: 'Unlink',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m18.84 12.25 1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07 5.006 5.006 0 0 0-6.95 0l-1.72 1.71m-6.58 6.57-1.71 1.71a5.004 5.004 0 0 0 .12 7.07 5.006 5.006 0 0 0 6.95 0l1.71-1.71M8 2v3M2 8h3m11 11v3m3-6h3"/></svg>'
			},
			{
				name: 'unplug',
				title: 'Unplug',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m19 5 3-3M2 22l3-3m1.3 1.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Zm1.2-6.8L10 11m.5 5.5L13 14m-1-8 6 6 2.3-2.3a2.4 2.4 0 0 0 0-3.4l-2.6-2.6a2.4 2.4 0 0 0-3.4 0Z"/></svg>'
			},
			{
				name: 'upload',
				title: 'Upload',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 3v12m5-7-5-5-5 5m14 7v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/></svg>'
			},
			{
				name: 'usb',
				title: 'Usb',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="10" cy="7" r="1"/><circle cx="4" cy="20" r="1"/><path d="M4.7 19.3 19 5m2-2-3 1 2 2ZM9.26 7.68 5 12l2 5m3-3 5 2 3.5-3.5"/><path d="m18 12 1-1 1 1-1 1Z"/></svg>'
			},
			{
				name: 'user-check',
				title: 'User Check',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m16 11 2 2 4-4m-6 12v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>'
			},
			{
				name: 'user-cog',
				title: 'User Cog',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 15H6a4 4 0 0 0-4 4v2m12.305-4.47.923-.382m0-2.296-.923-.383m2.547-1.241-.383-.923m.383 6.467-.383.924m2.679-6.468.383-.923m-.001 7.391-.382-.924m1.624-3.92.924-.383m-.924 2.679.924.383"/><circle cx="18" cy="15" r="3"/><circle cx="9" cy="7" r="4"/></svg>'
			},
			{
				name: 'user-lock',
				title: 'User Lock',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="10" cy="7" r="4"/><path d="M10.3 15H7a4 4 0 0 0-4 4v2m12-5.5V14a2 2 0 0 1 4 0v1.5"/><rect width="8" height="5" x="13" y="16" rx=".899"/></svg>'
			},
			{
				name: 'user-minus',
				title: 'User Minus',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 11h-6"/></svg>'
			},
			{
				name: 'user-pen',
				title: 'User Pen',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M11.5 15H7a4 4 0 0 0-4 4v2m18.378-4.374a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"/><circle cx="10" cy="7" r="4"/></svg>'
			},
			{
				name: 'user-plus',
				title: 'User Plus',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M19 8v6m3-3h-6"/></svg>'
			},
			{
				name: 'user-round-check',
				title: 'User Round Check',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M2 21a8 8 0 0 1 13.292-6"/><circle cx="10" cy="8" r="5"/><path d="m16 19 2 2 4-4"/></svg>'
			},
			{
				name: 'user-round-cog',
				title: 'User Round Cog',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m14.305 19.53.923-.382m0-2.296-.923-.383m2.547-1.241-.383-.923m.383 6.467-.383.924m2.679-6.468.383-.923m-.001 7.391-.382-.924M2 21a8 8 0 0 1 10.434-7.62m8.338 3.472.924-.383m-.924 2.679.924.383"/><circle cx="10" cy="8" r="5"/><circle cx="18" cy="18" r="3"/></svg>'
			},
			{
				name: 'user-round-minus',
				title: 'User Round Minus',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M2 21a8 8 0 0 1 13.292-6"/><circle cx="10" cy="8" r="5"/><path d="M22 19h-6"/></svg>'
			},
			{
				name: 'user-round-pen',
				title: 'User Round Pen',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M2 21a8 8 0 0 1 10.821-7.487m8.557 3.113a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"/><circle cx="10" cy="8" r="5"/></svg>'
			},
			{
				name: 'user-round-plus',
				title: 'User Round Plus',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M2 21a8 8 0 0 1 13.292-6"/><circle cx="10" cy="8" r="5"/><path d="M19 16v6m3-3h-6"/></svg>'
			},
			{
				name: 'user-round-search',
				title: 'User Round Search',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="10" cy="8" r="5"/><path d="M2 21a8 8 0 0 1 10.434-7.62"/><circle cx="18" cy="18" r="3"/><path d="m22 22-1.9-1.9"/></svg>'
			},
			{
				name: 'user-round-x',
				title: 'User Round X',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M2 21a8 8 0 0 1 11.873-7"/><circle cx="10" cy="8" r="5"/><path d="m17 17 5 5m0-5-5 5"/></svg>'
			},
			{
				name: 'user-round',
				title: 'User Round',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 0 0-16 0"/></svg>'
			},
			{
				name: 'user-search',
				title: 'User Search',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="10" cy="7" r="4"/><path d="M10.3 15H7a4 4 0 0 0-4 4v2"/><circle cx="17" cy="17" r="3"/><path d="m21 21-1.9-1.9"/></svg>'
			},
			{
				name: 'user-star',
				title: 'User Star',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M16.051 12.616a1 1 0 0 1 1.909.024l.737 1.452a1 1 0 0 0 .737.535l1.634.256a1 1 0 0 1 .588 1.806l-1.172 1.168a1 1 0 0 0-.282.866l.259 1.613a1 1 0 0 1-1.541 1.134l-1.465-.75a1 1 0 0 0-.912 0l-1.465.75a1 1 0 0 1-1.539-1.133l.258-1.613a1 1 0 0 0-.282-.866l-1.156-1.153a1 1 0 0 1 .572-1.822l1.633-.256a1 1 0 0 0 .737-.535zM8 15H7a4 4 0 0 0-4 4v2"/><circle cx="10" cy="7" r="4"/></svg>'
			},
			{
				name: 'user-x',
				title: 'User X',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="m17 8 5 5m0-5-5 5"/></svg>'
			},
			{
				name: 'user',
				title: 'User',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>'
			},
			{
				name: 'users-round',
				title: 'Users Round',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M18 21a8 8 0 0 0-16 0"/><circle cx="10" cy="8" r="5"/><path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3"/></svg>'
			},
			{
				name: 'users',
				title: 'Users',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87"/><circle cx="9" cy="7" r="4"/></svg>'
			},
			{
				name: 'utensils-crossed',
				title: 'Utensils Crossed',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8m-7 7L3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0zm0 0 7 7m-19.9-.2 6.4-6.3M19 5l-7 7"/></svg>'
			},
			{
				name: 'utensils',
				title: 'Utensils',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2M7 2v20m14-7V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2zm0 0v7"/></svg>'
			},
			{
				name: 'utility-pole',
				title: 'Utility Pole',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 2v20M2 5h20M3 3v2m4-2v2m10-2v2m4-2v2m-2 0-7 7-7-7"/></svg>'
			},
			{
				name: 'variable',
				title: 'Variable',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M8 21s-4-3-4-9 4-9 4-9m8 0s4 3 4 9-4 9-4 9M15 9l-6 6m0-6 6 6"/></svg>'
			},
			{
				name: 'vault',
				title: 'Vault',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="2"/><circle cx="7.5" cy="7.5" r=".5" fill="currentColor"/><path d="m7.9 7.9 2.7 2.7"/><circle cx="16.5" cy="7.5" r=".5" fill="currentColor"/><path d="m13.4 10.6 2.7-2.7"/><circle cx="7.5" cy="16.5" r=".5" fill="currentColor"/><path d="m7.9 16.1 2.7-2.7"/><circle cx="16.5" cy="16.5" r=".5" fill="currentColor"/><path d="m13.4 13.4 2.7 2.7"/><circle cx="12" cy="12" r="2"/></svg>'
			},
			{
				name: 'vector-square',
				title: 'Vector Square',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M19.5 7a24 24 0 0 1 0 10M4.5 7a24 24 0 0 0 0 10M7 19.5a24 24 0 0 0 10 0M7 4.5a24 24 0 0 1 10 0"/><rect width="5" height="5" x="17" y="17" rx="1"/><rect width="5" height="5" x="17" y="2" rx="1"/><rect width="5" height="5" x="2" y="17" rx="1"/><rect width="5" height="5" x="2" y="2" rx="1"/></svg>'
			},
			{
				name: 'vegan',
				title: 'Vegan',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M16 8q6 0 6-6-6 0-6 6"/><path d="M17.41 3.59a10 10 0 1 0 3 3"/><path d="M2 2a26.6 26.6 0 0 1 10 20c.9-6.82 1.5-9.5 4-14"/></svg>'
			},
			{
				name: 'venetian-mask',
				title: 'Venetian Mask',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M18 11c-1.5 0-2.5.5-3 2"/><path d="M4 6a2 2 0 0 0-2 2v4a5 5 0 0 0 5 5 8 8 0 0 1 5 2 8 8 0 0 1 5-2 5 5 0 0 0 5-5V8a2 2 0 0 0-2-2h-3a8 8 0 0 0-5 2 8 8 0 0 0-5-2z"/><path d="M6 11c1.5 0 2.5.5 3 2"/></svg>'
			},
			{
				name: 'venn',
				title: 'Venn',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="8" cy="12" r="6"/><circle cx="16" cy="12" r="6"/></svg>'
			},
			{
				name: 'venus-and-mars',
				title: 'Venus And Mars',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 20h4m-2-4v6m5-20h4v4m0-4-5.46 5.46"/><circle cx="12" cy="11" r="5"/></svg>'
			},
			{
				name: 'venus',
				title: 'Venus',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 15v7m-3-3h6"/><circle cx="12" cy="9" r="6"/></svg>'
			},
			{
				name: 'vest',
				title: 'Vest',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 4a2 2 0 0 0 4 0V3h4v3c0 1.7 1.3 3 3 3v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9c1.7 0 3-1.3 3-3V3h4Z"/></svg>'
			},
			{
				name: 'vibrate-off',
				title: 'Vibrate Off',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m2 8 2 2-2 2 2 2-2 2m20-8-2 2 2 2-2 2 2 2M8 8v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2m0-5.66V6c0-.55-.45-1-1-1h-4.34M2 2l20 20"/></svg>'
			},
			{
				name: 'vibrate',
				title: 'Vibrate',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m2 8 2 2-2 2 2 2-2 2m20-8-2 2 2 2-2 2 2 2"/><rect width="8" height="14" x="8" y="5" rx="1"/></svg>'
			},
			{
				name: 'video-off',
				title: 'Video Off',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10.66 6H14a2 2 0 0 1 2 2v2.5l5.248-3.062A.5.5 0 0 1 22 7.87v8.196M16 16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2M2 2l20 20"/></svg>'
			},
			{
				name: 'video',
				title: 'Video',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"/><rect width="14" height="12" x="2" y="6" rx="2"/></svg>'
			},
			{
				name: 'videotape',
				title: 'Videotape',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="M2 8h20"/><circle cx="8" cy="14" r="2"/><path d="M8 12h8"/><circle cx="16" cy="14" r="2"/></svg>'
			},
			{
				name: 'view',
				title: 'View',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M21 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2M21 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2"/><circle cx="12" cy="12" r="1"/><path d="M18.944 12.33a1 1 0 0 0 0-.66 7.5 7.5 0 0 0-13.888 0 1 1 0 0 0 0 .66 7.5 7.5 0 0 0 13.888 0"/></svg>'
			},
			{
				name: 'voicemail',
				title: 'Voicemail',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="6" cy="12" r="4"/><circle cx="18" cy="12" r="4"/><path d="M6 16h12"/></svg>'
			},
			{
				name: 'volleyball',
				title: 'Volleyball',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M6.3 3.8a16.55 16.55 0 0 0 1.9 11.5M20.7 17a12.8 12.8 0 0 0-8.7-5 13.3 13.3 0 0 1 0-10"/><path d="M22 11.1c-.8-.6-1.7-1.3-2.6-1.8-3-1.7-6.1-2.5-8.3-2.2m-3.3 14c1-.4 1.9-.8 2.9-1.4 3-1.7 5.2-4 6.1-6.1M12 12a12.6 12.6 0 0 1-8.7 5"/></svg>'
			},
			{
				name: 'volume-1',
				title: 'Volume 1',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298zM16 9a5 5 0 0 1 0 6"/></svg>'
			},
			{
				name: 'volume-2',
				title: 'Volume 2',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298zM16 9a5 5 0 0 1 0 6m3.364 3.364a9 9 0 0 0 0-12.728"/></svg>'
			},
			{
				name: 'volume-off',
				title: 'Volume Off',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M16 9a5 5 0 0 1 .95 2.293m2.414-5.657a9 9 0 0 1 1.889 9.96M2 2l20 20M7 7l-.587.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298V11M9.828 4.172A.686.686 0 0 1 11 4.657v.686"/></svg>'
			},
			{
				name: 'volume-x',
				title: 'Volume X',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298zM22 9l-6 6m0-6 6 6"/></svg>'
			},
			{
				name: 'volume',
				title: 'Volume',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"/></svg>'
			},
			{
				name: 'vote',
				title: 'Vote',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m9 12 2 2 4-4"/><path d="M5 7c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v12H5zm17 12H2"/></svg>'
			},
			{
				name: 'waffle',
				title: 'Waffle',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="m7 14 7-7m-4 10 7-7M7 10l7 7M10 7l7 7"/></svg>'
			},
			{
				name: 'wallet-cards',
				title: 'Wallet Cards',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2M3 11h3c.8 0 1.6.3 2.1.9l1.1.9c1.6 1.6 4.1 1.6 5.7 0l1.1-.9c.5-.5 1.3-.9 2.1-.9H21"/></svg>'
			},
			{
				name: 'wallet-minimal',
				title: 'Wallet Minimal',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M17 14h.01M7 7h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14"/></svg>'
			},
			{
				name: 'wallet',
				title: 'Wallet',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"/><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"/></svg>'
			},
			{
				name: 'wallpaper',
				title: 'Wallpaper',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 17v4m-4 0h8m-7-4 6.1-6.1a2 2 0 0 1 2.81.01L22 15"/><circle cx="8" cy="9" r="2"/><rect width="20" height="14" x="2" y="3" rx="2"/></svg>'
			},
			{
				name: 'wand-sparkles',
				title: 'Wand Sparkles',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72M14 7l3 3M5 6v4m14 4v4M10 2v2M7 8H3m18 8h-4M11 3H9"/></svg>'
			},
			{
				name: 'wand',
				title: 'Wand',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M15 4V2m0 14v-2M8 9h2m10 0h2m-4.2 2.8L19 13m-4-4h.01m2.79-2.8L19 5M3 21l9-9m.2-5.8L11 5"/></svg>'
			},
			{
				name: 'wardrobe',
				title: 'Wardrobe',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="18" height="20" x="3" y="2" rx="2"/><path d="M8 10h.01M12 2v15m4-7h.01M3 17h18"/></svg>'
			},
			{
				name: 'warehouse',
				title: 'Warehouse',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M18 21V10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v11"/><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 1.132-1.803l7.95-3.974a2 2 0 0 1 1.837 0l7.948 3.974A2 2 0 0 1 22 8zM6 13h12M6 17h12"/></svg>'
			},
			{
				name: 'washing-machine',
				title: 'Washing Machine',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M3 6h3m11 0h.01"/><rect width="18" height="20" x="3" y="2" rx="2"/><circle cx="12" cy="13" r="5"/><path d="M12 18a2.5 2.5 0 0 0 0-5 2.5 2.5 0 0 1 0-5"/></svg>'
			},
			{
				name: 'watch-activity',
				title: 'Watch Activity',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m15.8 6-.5-2.4c-.2-1-1-1.6-2-1.6h-2.7a2 2 0 0 0-2 1.6L8.2 6"/><rect width="12" height="12" x="6" y="6" rx="2"/><path d="m8.2 18 .5 2.4c.2 1 1 1.6 2 1.6h2.7a2 2 0 0 0 2-1.6l.5-2.4M6 12h3l2 2 2.2-4 1.8 2h3"/></svg>'
			},
			{
				name: 'watch-alarm',
				title: 'Watch Alarm',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M2.5 9a9.93 9.93 0 0 0 0 6m19 0a9.93 9.93 0 0 0 0-6"/><circle cx="12" cy="12" r="6"/><path d="M12 10v2l1 1m3.13-5.34-.81-4.05a2 2 0 0 0-2-1.61h-2.68a2 2 0 0 0-2 1.61l-.78 4.05m.02 8.7.8 4a2 2 0 0 0 2 1.61h2.72a2 2 0 0 0 2-1.61l.81-4.05"/></svg>'
			},
			{
				name: 'watch-bars',
				title: 'Watch Bars',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m15.8 6-.5-2.4c-.2-1-1-1.6-2-1.6h-2.7a2 2 0 0 0-2 1.6L8.2 6"/><rect width="12" height="12" x="6" y="6" rx="2"/><path d="m8.2 18 .5 2.4c.2 1 1 1.6 2 1.6h2.7a2 2 0 0 0 2-1.6l.5-2.4M10 12v2m4-4v4"/></svg>'
			},
			{
				name: 'watch-charging',
				title: 'Watch Charging',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m15.8 6-.5-2.4c-.2-1-1-1.6-2-1.6h-2.7a2 2 0 0 0-2 1.6L8.2 6"/><rect width="12" height="12" x="6" y="6" rx="2"/><path d="m8.2 18 .5 2.4c.2 1 1 1.6 2 1.6h2.7a2 2 0 0 0 2-1.6l.5-2.4M12 10l-1 2h2l-1 2"/></svg>'
			},
			{
				name: 'watch-check',
				title: 'Watch Check',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m15.8 6-.5-2.4c-.2-1-1-1.6-2-1.6h-2.7a2 2 0 0 0-2 1.6L8.2 6"/><rect width="12" height="12" x="6" y="6" rx="2"/><path d="m8.2 18 .5 2.4c.2 1 1 1.6 2 1.6h2.7a2 2 0 0 0 2-1.6l.5-2.4M14 11l-2.5 2.5L10 12"/></svg>'
			},
			{
				name: 'watch-loader',
				title: 'Watch Loader',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m15.8 6-.5-2.4c-.2-1-1-1.6-2-1.6h-2.7a2 2 0 0 0-2 1.6L8.2 6"/><rect width="12" height="12" x="6" y="6" rx="2"/><path d="m8.2 18 .5 2.4c.2 1 1 1.6 2 1.6h2.7a2 2 0 0 0 2-1.6l.5-2.4M14 12a2 2 0 1 1-2-2"/></svg>'
			},
			{
				name: 'watch-music',
				title: 'Watch Music',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m15.8 6-.5-2.4c-.2-1-1-1.6-2-1.6h-2.7a2 2 0 0 0-2 1.6L8.2 6"/><rect width="12" height="12" x="6" y="6" rx="2"/><path d="m8.2 18 .5 2.4c.2 1 1 1.6 2 1.6h2.7a2 2 0 0 0 2-1.6l.5-2.4"/><circle cx="11.5" cy="13.5" r=".5"/><path d="m14 11-2-1v3.5"/></svg>'
			},
			{
				name: 'watch-square-alarm',
				title: 'Watch Square Alarm',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m15.8 6-.5-2.4c-.2-1-1-1.6-2-1.6h-2.7a2 2 0 0 0-2 1.6L8.2 6"/><rect width="12" height="12" x="6" y="6" rx="2"/><path d="m8.2 18 .5 2.4c.2 1 1 1.6 2 1.6h2.7a2 2 0 0 0 2-1.6l.5-2.4M12 10v2l1 1M2 16c0 2.1 1.1 4 2.7 5M22 8c0-2.1-1.1-4-2.7-5"/></svg>'
			},
			{
				name: 'watch-square',
				title: 'Watch Square',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m15.8 6-.5-2.4c-.2-1-1-1.6-2-1.6h-2.7a2 2 0 0 0-2 1.6L8.2 6"/><rect width="12" height="12" x="6" y="6" rx="2"/><path d="m8.2 18 .5 2.4c.2 1 1 1.6 2 1.6h2.7a2 2 0 0 0 2-1.6l.5-2.4M12 10v2l1 1"/></svg>'
			},
			{
				name: 'watch-text',
				title: 'Watch Text',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m15.8 6-.5-2.4c-.2-1-1-1.6-2-1.6h-2.7a2 2 0 0 0-2 1.6L8.2 6"/><rect width="12" height="12" x="6" y="6" rx="2"/><path d="m8.2 18 .5 2.4c.2 1 1 1.6 2 1.6h2.7a2 2 0 0 0 2-1.6l.5-2.4M10 10h2m2 4h-4"/></svg>'
			},
			{
				name: 'watch',
				title: 'Watch',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 10v2.2l1.6 1m2.53-5.54-.81-4.05a2 2 0 0 0-2-1.61h-2.68a2 2 0 0 0-2 1.61l-.78 4.05m.02 8.7.8 4a2 2 0 0 0 2 1.61h2.72a2 2 0 0 0 2-1.61l.81-4.05"/><circle cx="12" cy="12" r="6"/></svg>'
			},
			{
				name: 'watermelon',
				title: 'Watermelon',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M21.7 17.7a1.08 1.08 0 0 1-.08 1.57A12 12 0 0 1 4.73 2.38a1.1 1.1 0 0 1 1.61-.04Z"/><path d="M19.7 15.7A8 8 0 0 1 8.35 4.34M10 11h.01M13 14h.01"/></svg>'
			},
			{
				name: 'wave-circle',
				title: 'Wave Circle',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M16.5 20.93a5 5 0 1 1-.6-9 7 7 0 0 0-13.9.6"/></svg>'
			},
			{
				name: 'waves-birds',
				title: 'Waves Birds',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M2 3c3-1 5 2 5 2s2-2.1 5-1.2M10 8c3-1 5 2 5 2s2-3 5-2M2 15c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/></svg>'
			},
			{
				name: 'waves-ladder',
				title: 'Waves Ladder',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M19 5a2 2 0 0 0-2 2v11"/><path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1M7 13h10M7 9h10"/><path d="M9 5a2 2 0 0 0-2 2v11"/></svg>'
			},
			{
				name: 'waves-shark-fin',
				title: 'Waves Shark Fin',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M17.3 14.8C15.3 11 15.8 6.2 19 3 11.6 3 5.6 8.7 5.1 16"/><path d="M2 15c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/></svg>'
			},
			{
				name: 'waves',
				title: 'Waves',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/></svg>'
			},
			{
				name: 'waypoints',
				title: 'Waypoints',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="4.5" r="2.5"/><path d="m10.2 6.3-3.9 3.9"/><circle cx="4.5" cy="12" r="2.5"/><path d="M7 12h10"/><circle cx="19.5" cy="12" r="2.5"/><path d="m13.8 17.7 3.9-3.9"/><circle cx="12" cy="19.5" r="2.5"/></svg>'
			},
			{
				name: 'webcam',
				title: 'Webcam',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="10" r="8"/><circle cx="12" cy="10" r="3"/><path d="M7 22h10m-5 0v-4"/></svg>'
			},
			{
				name: 'webhook-off',
				title: 'Webhook Off',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M17 17h-5c-1.09-.02-1.94.92-2.5 1.9A3 3 0 1 1 2.57 15M9 3.4a4 4 0 0 1 6.52.66"/><path d="m6 17 3.1-5.8a2.5 2.5 0 0 0 .057-2.05M20.3 20.3a4 4 0 0 1-2.3.7m.6-8a4 4 0 0 1 3.357 3.414M12 6l.6 1M2 2l20 20"/></svg>'
			},
			{
				name: 'webhook',
				title: 'Webhook',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2"/><path d="m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06"/><path d="m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8"/></svg>'
			},
			{
				name: 'weight',
				title: 'Weight',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="5" r="3"/><path d="M6.5 8a2 2 0 0 0-1.905 1.46L2.1 18.5A2 2 0 0 0 4 21h16a2 2 0 0 0 1.925-2.54L19.4 9.5A2 2 0 0 0 17.48 8Z"/></svg>'
			},
			{
				name: 'whale-narwhal',
				title: 'Whale Narwhal',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M20 9.98s1-3 1-7c-3 2-5 6-5 6.08"/><path d="M6 9.7 3.9 8.4C2.7 7.7 2 6.4 2 5V3c2 0 4 2 4 2s2-2 4-2v2c0 1.4-.7 2.7-1.9 3.4l-3.8 2.4A5 5 0 0 0 7 20h12c1.7 0 3-1.3 3-3v-3c0-2.8-2.2-5-5-5-2.7 0-5.1 1.4-6.4 3.6L9.7 14A2 2 0 0 1 6 13Zm9 5.3h.01"/></svg>'
			},
			{
				name: 'whale',
				title: 'Whale',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M18 9.1V5a2 2 0 0 0-4 0m4 0a2 2 0 0 1 4 0"/><path d="M6 9.7 3.9 8.4C2.7 7.7 2 6.4 2 5V3c2 0 4 2 4 2s2-2 4-2v2c0 1.4-.7 2.7-1.9 3.4l-3.8 2.4A5 5 0 0 0 7 20h12c1.7 0 3-1.3 3-3v-3c0-2.8-2.2-5-5-5-2.7 0-5.1 1.4-6.4 3.6L9.7 14A2 2 0 0 1 6 13Zm9 5.3h.01"/></svg>'
			},
			{
				name: 'wheat-off',
				title: 'Wheat Off',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m2 22 10-10m4-4-1.17 1.17M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94M8 8l-.53.53a3.5 3.5 0 0 0 0 4.94L9 15l1.53-1.53c.55-.55.88-1.25.98-1.97m-.6-6.24c.15-.26.34-.51.56-.73L13 3l1.53 1.53a3.5 3.5 0 0 1 .28 4.62M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4"/><path d="M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0M16 16l-.53.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.5 3.5 0 0 1 1.97-.98m6.24.6c.26-.15.51-.34.73-.56L21 11l-1.53-1.53a3.5 3.5 0 0 0-4.62-.28M2 2l20 20"/></svg>'
			},
			{
				name: 'wheat',
				title: 'Wheat',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M2 22 16 8M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94m4-4L9 7l1.53 1.53a3.5 3.5 0 0 1 0 4.94L9 15l-1.53-1.53a3.5 3.5 0 0 1 0-4.94m4-4L13 3l1.53 1.53a3.5 3.5 0 0 1 0 4.94L13 11l-1.53-1.53a3.5 3.5 0 0 1 0-4.94M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4"/><path d="M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0m4-4L17 15l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.5 3.5 0 0 1 4.94 0m4-4L21 11l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L13 11l1.53-1.53a3.5 3.5 0 0 1 4.94 0"/></svg>'
			},
			{
				name: 'wheel',
				title: 'Wheel',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="2.5"/><path d="M12 2v7.5M19 5l-5.23 5.23M22 12h-7.5m4.5 7-5.23-5.23M12 14.5V22m-1.77-8.23L5 19m4.5-7H2m8.23-1.77L5 5"/></svg>'
			},
			{
				name: 'whisk-fork-knife',
				title: 'Whisk Fork Knife',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M6 2C3.8 2 2 3.8 2 6s4 8 4 8 4-5.8 4-8-1.8-4-4-4m0 20V2m12 20v-4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v4m4 0V2m8 11h-2a2 2 0 0 1-2-2V6a4 4 0 0 1 4-4v20"/></svg>'
			},
			{
				name: 'whisk',
				title: 'Whisk',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M22 2 3.45 20.55m.05-7.05a5 5 0 1 0 7.1 7.1C12.6 18.6 15 9 15 9s-9.6 2.5-11.5 4.5"/></svg>'
			},
			{
				name: 'whisks',
				title: 'Whisks',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M6 2v20m0-12s-4 5.8-4 8 1.8 4 4 4 4-1.8 4-4-4-8-4-8m12-8v20m0-12s-4 5.8-4 8 1.8 4 4 4 4-1.8 4-4-4-8-4-8"/></svg>'
			},
			{
				name: 'whole-word',
				title: 'Whole Word',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="7" cy="12" r="3"/><path d="M10 9v6"/><circle cx="17" cy="12" r="3"/><path d="M14 7v8m8 2v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1"/></svg>'
			},
			{
				name: 'wifi-cog',
				title: 'Wifi Cog',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m14.305 19.53.923-.382m0-2.296-.923-.383m2.547-1.241-.383-.923m.383 6.467-.383.924m2.679-6.468.383-.923m-.001 7.391-.382-.924M2 7.82a15 15 0 0 1 20 0m-1.228 9.032.924-.383m-.924 2.679.924.383M5 11.858a10 10 0 0 1 11.5-1.785m-8 5.356a5 5 0 0 1 2.413-1.31"/><circle cx="18" cy="18" r="3"/></svg>'
			},
			{
				name: 'wifi-high',
				title: 'Wifi High',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 20h.01M5 12.859a10 10 0 0 1 14 0m-10.5 3.57a5 5 0 0 1 7 0"/></svg>'
			},
			{
				name: 'wifi-low',
				title: 'Wifi Low',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 20h.01M8.5 16.429a5 5 0 0 1 7 0"/></svg>'
			},
			{
				name: 'wifi-off',
				title: 'Wifi Off',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 20h.01M8.5 16.429a5 5 0 0 1 7 0M5 12.859a10 10 0 0 1 5.17-2.69m8.83 2.69a10 10 0 0 0-2.007-1.523M2 8.82a15 15 0 0 1 4.177-2.643M22 8.82a15 15 0 0 0-11.288-3.764M2 2l20 20"/></svg>'
			},
			{
				name: 'wifi-pen',
				title: 'Wifi Pen',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M2 8.82a15 15 0 0 1 20 0m-.622 7.806a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506zM5 12.859a10 10 0 0 1 10.5-2.222m-7 5.792a5 5 0 0 1 3-1.406"/></svg>'
			},
			{
				name: 'wifi-sync',
				title: 'Wifi Sync',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M11.965 10.105v4L13.5 12.5a5 5 0 0 1 8 1.5m-9.535.105h4m2 4h4L20.43 19.71a5 5 0 0 1-8-1.5M2 8.82a15 15 0 0 1 20 0m-.035 13.285v-4M5 12.86a10 10 0 0 1 3-2.032m.5 5.601h.01"/></svg>'
			},
			{
				name: 'wifi-zero',
				title: 'Wifi Zero',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 20h.01"/></svg>'
			},
			{
				name: 'wifi',
				title: 'Wifi',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 20h.01M2 8.82a15 15 0 0 1 20 0M5 12.859a10 10 0 0 1 14 0m-10.5 3.57a5 5 0 0 1 7 0"/></svg>'
			},
			{
				name: 'wind-arrow-down',
				title: 'Wind Arrow Down',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 2v8m2.8 11.6A2 2 0 1 0 14 18H2m15.5-8a2.5 2.5 0 1 1 2 4H2m4-8 4 4 4-4"/></svg>'
			},
			{
				name: 'wind',
				title: 'Wind',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12.8 19.6A2 2 0 1 0 14 16H2m15.5-8a2.5 2.5 0 1 1 2 4H2m7.8-7.6A2 2 0 1 1 11 8H2"/></svg>'
			},
			{
				name: 'windmill',
				title: 'Windmill',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m10 14 8 4 2-4L4 6l2-4 8 4"/><path d="m8 8-4 8 4 2m8-6 4-8-4-2L6 22m13 0-2.4-4.6M12.5 20v2M4 22h17"/></svg>'
			},
			{
				name: 'wine-glass-bottle',
				title: 'Wine Glass Bottle',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M3 13h8M5 7s-2 3-2 6a4 4 0 0 0 8 0c0-3-2-6-2-6Zm2 10v5m-3 0h6m8-18c0 3-3 3-3 6v11c0 .6.4 1 1 1h4c.6 0 1-.4 1-1V10c0-3-3-3-3-6m0 0V2"/></svg>'
			},
			{
				name: 'wine-off',
				title: 'Wine Off',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M8 22h8M7 10h3m7 0h-1.343M12 15v7M7.307 7.307A12.3 12.3 0 0 0 7 10a5 5 0 0 0 7.391 4.391M8.638 2.981Q8.807 2.511 9 2h6c1.5 4 2 6 2 8q-.001.613-.145 1.198M2 2l20 20"/></svg>'
			},
			{
				name: 'wine',
				title: 'Wine',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M8 22h8M7 10h10m-5 5v7m0-7a5 5 0 0 0 5-5c0-2-.5-4-2-8H9c-1.5 4-2 6-2 8a5 5 0 0 0 5 5"/></svg>'
			},
			{
				name: 'workflow',
				title: 'Workflow',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="8" height="8" x="3" y="3" rx="2"/><path d="M7 11v4a2 2 0 0 0 2 2h4"/><rect width="8" height="8" x="13" y="13" rx="2"/></svg>'
			},
			{
				name: 'worm',
				title: 'Worm',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m19 12-1.5 3m2.13 3.81L22 20M6.47 8.23a1.68 1.68 0 0 1 2.44 1.93l-.64 2.08a6.76 6.76 0 0 0 10.16 7.67l.42-.27a1 1 0 1 0-2.73-4.21l-.42.27a1.76 1.76 0 0 1-2.63-1.99l.64-2.08A6.66 6.66 0 0 0 3.94 3.9l-.7.4a1 1 0 1 0 2.55 4.34z"/></svg>'
			},
			{
				name: 'wrench',
				title: 'Wrench',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z"/></svg>'
			},
			{
				name: 'x',
				title: 'X',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M18 6 6 18M6 6l12 12"/></svg>'
			},
			{
				name: 'yarn-ball',
				title: 'Yarn Ball',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M10 6h10m-6 4h7.8M7.2 3.2l13.6 13.6M4 6l15.3 15.3c.4.4 1.2.7 1.7.7h1M2.2 10.2l11.6 11.6"/></svg>'
			},
			{
				name: 'yin-yang',
				title: 'Yin Yang',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="7" r=".5"/><path d="M12 22a5 5 0 1 0 0-10 5 5 0 1 1 0-10"/><circle cx="12" cy="17" r=".5"/></svg>'
			},
			{
				name: 'youtube',
				title: 'Youtube',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M2.5 17a24.1 24.1 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.6 49.6 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.1 24.1 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.6 49.6 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>'
			},
			{
				name: 'zap-off',
				title: 'Zap Off',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10.513 4.856 13.12 2.17a.5.5 0 0 1 .86.46l-1.377 4.317M15.656 10H20a1 1 0 0 1 .78 1.63l-1.72 1.773m-2.787 2.87L10.88 21.83a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14H4a1 1 0 0 1-.78-1.63l4.507-4.643M2 2l20 20"/></svg>'
			},
			{
				name: 'zap',
				title: 'Zap',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/></svg>'
			},
			{
				name: 'zoom-in',
				title: 'Zoom In',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35M11 8v6m-3-3h6"/></svg>'
			},
			{
				name: 'zoom-out',
				title: 'Zoom Out',
				icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35M8 11h6"/></svg>'
			}
		];

		const customIconCategories = [
			{
				name: 'lucide',
				title: __('Lucide', 'icon-block-lucide'),
			},
		];

		const customIconType = [
			{
				isDefault: true,
				type: 'lucide-icons',
				title: __('Lucide Icons', 'icon-block-lucide'),
				icons: customIcons,
				categories: customIconCategories,
			},
		];

		const allIcons = [].concat(icons, customIconType);

		return allIcons;
	}

	addFilter('iconBlock.icons', 'icon-block-lucide', addCustomIcons);
});
