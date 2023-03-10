/* START OF COMPILED CODE */

import UserComponent from "./UserComponent";
import Phaser from "phaser";

export default class PreloadText extends UserComponent {

	constructor(gameObject: Phaser.GameObjects.Text) {
		super(gameObject);

		this.gameObject = gameObject;
		(gameObject as any)["__PreloadText"] = this;


		this.scene.load.on(Phaser.Loader.Events.PROGRESS, (p: number) => {

			this.gameObject.text = Math.floor(p * 100) + "%";
		});

	}

	static getComponent(gameObject: Phaser.GameObjects.Text): PreloadText {
		return (gameObject as any)["__PreloadText"];
	}

	private gameObject: Phaser.GameObjects.Text;

}

