/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
import { registerBlockType, createBlock } from "@wordpress/blocks";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './style.scss';

/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
registerBlockType("lax/alertbox", {
	transforms: {
		from: [
			{
				type: "block",
				priority: 20,
				blocks: ["core/paragraph"],
				transform: (attributes) => {
					return createBlock("lax/alertbox", {
						content: attributes.content,
					});
				},
			},
			{
				type: "raw",
				isMatch: (node) => {
					console.log({node});
  					if (node.nodeName === "DIV" && node.className === "callout") {
						return true;
					}
					return false;
				},
				priority: 5,
				transform: (node) => {
					return createBlock("lax/alertbox", {
						content: node.textContent,
					});
				},
			},
		],
		to: [
			{
				type: "block",
				blocks: ["core/paragraph"],
				transform: (attributes) => {
					return createBlock("core/paragraph", {
						content: attributes.content,
					});
				},
			},
		],
	},
	/**
	 * @see ./edit.js
	 */
	edit: Edit,

	/**
	 * @see ./save.js
	 */
	save,
});
