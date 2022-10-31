import { attr, css, customElement, FASTElement, html, ref, repeat, volatile, when } from '@microsoft/fast-element';
import { srOnly } from '../../../shared/components/styles/a11y';
import { elementBase } from '../../../shared/components/styles/base';

const template = html<AvatarItem>`<template tabindex="${x => x.tabIndex ?? '0'}">
	<slot></slot>
</template>`;

const styles = css`
	${elementBase}

	:host {
		display: inline-flex;
		width: var(--avatar-size);
		height: var(--avatar-size);
		justify-content: center;
		align-items: center;
		border-radius: 50%;
		border: 1px solid var(--color-background);
		background-color: var(--avatar-bg);
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		transition: transform ease 200ms, z-index ease 0 200ms;
		font-size: calc(var(--avatar-size) * 0.42);
	}

	:host(:hover) {
		transform: translateY(-0.2em);
	}

	${srOnly}
`;

@customElement({ name: 'avatar-item', template: template, styles: styles })
export class AvatarItem extends FASTElement {
	@attr
	media = '';

	override attributeChangedCallback(name: string, oldValue: string, newValue: string): void {
		super.attributeChangedCallback(name, oldValue, newValue);

		if (name !== 'media' || oldValue === newValue) {
			return;
		}

		this.style.backgroundImage = `url(${this.media})`;
	}
}
