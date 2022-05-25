import { App, Editor, MarkdownView, Modal, Notice, Plugin, PluginSettingTab, Setting } from 'obsidian';

interface Click {
	(this: HTMLElement, ev: MouseEvent): void;
}

export default class openPDFDefault extends Plugin {
	click: Click;

	async onload() {
		console.log("loading open-pdf-default");
		const rExp : RegExp = /\.(PDF|pdf)$/;






































		// If the plugin hooks up any global DOM events (on parts of the app that doesn't belong to this plugin)
		// Using this function will automatically remove the event listener when this plugin is disabled.
		// this.registerDomEvent(document, 'click', (evt: MouseEvent) => {
		// 	console.log('click', evt);
		// });
		// listen to click event

		// this.click = this.openPDF.bind(this);

		//this.registerEvent(this.app.workspace.on("click", ev.stopPropagation));

		// const openPDF = async (evt: MouseEvent): Promise<void> => {
		// 	const el = evt.target as HTMLElement
		// 	if(el.classList.contains("cm-hmd-internal-link") && rExp.test(el.innerText)){
		//
		//
		// 	}
		// }
	}

	// async openPDF(mouse: MouseEvent): Promise<void> {
	// 	mouse.stopImmediatePropagation();
	// 	mouse.stopPropagation();
	// 	mouse.preventDefault();
	// 	const clickTarget = mouse.target as HTMLElement; //so intellisense will work (errors show up in IDE if I don't say as HTMLElement
	//
	// 	console.log(clickTarget);
	// }

	onunload() {
		console.log("unloading open-pdf-default");
	}


}
