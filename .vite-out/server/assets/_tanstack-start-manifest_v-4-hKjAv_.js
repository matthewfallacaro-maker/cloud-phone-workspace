//#region \0tanstack-start-manifest:v
var tsrStartManifest = () => ({ routes: {
	__root__: {
		filePath: "/home/user/src/routes/__root.tsx",
		children: ["/", "/app"],
		css: ["/assets/index-DJ4M0j1v.css"],
		preloads: ["/assets/index-BEL1KcVm.js"],
		scripts: [{ attrs: {
			type: "module",
			async: !0,
			src: "/assets/index-BEL1KcVm.js"
		} }]
	},
	"/": {
		filePath: "/home/user/src/routes/index.tsx",
		children: void 0,
		preloads: ["/assets/routes-DIWu5PlA.js", "/assets/x-BIQmS2S4.js"]
	},
	"/app": {
		filePath: "/home/user/src/routes/app.tsx",
		children: ["/app/"],
		preloads: ["/assets/app-BgAeIQzm.js", "/assets/x-BIQmS2S4.js"]
	},
	"/app/": {
		filePath: "/home/user/src/routes/app/index.tsx",
		children: void 0,
		preloads: ["/assets/app-CycGe1GK.js"]
	}
} });
//#endregion
export { tsrStartManifest };
