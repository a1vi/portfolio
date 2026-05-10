<script lang="ts">
	import { createEventDispatcher, onMount, onDestroy } from 'svelte';
	import { fade } from 'svelte/transition';

	const dispatch = createEventDispatcher();

	let canvas: HTMLCanvasElement;
	let animationFrameId: number;
	let visible = true;

	onMount(() => {
		const ctx = canvas.getContext('2d')!;
		let width = window.innerWidth;
		let height = window.innerHeight;
		canvas.width = width;
		canvas.height = height;

		let stars: Star[] = [];

		class Star {
			x: number;
			y: number;
			z: number;
			pz: number;

			constructor() {
				this.x = 0;
				this.y = 0;
				this.z = 0;
				this.pz = 0;
				this.reset();
			}

			reset() {
				this.x = (Math.random() - 0.5) * width;
				this.y = (Math.random() - 0.5) * height;
				this.z = Math.random() * width;
				this.pz = this.z;
			}

			update(speed: number) {
				this.z -= speed;
				if (this.z < 1) {
					this.reset();
					this.z = width;
					this.pz = this.z;
				}
			}

			draw(globalAlpha: number) {
				const x = (this.x / this.z) * width + width / 2;
				const y = (this.y / this.z) * height + height / 2;
				const px = (this.x / this.pz) * width + width / 2;
				const py = (this.y / this.pz) * height + height / 2;
				this.pz = this.z;

				if (x < 0 || x > width || y < 0 || y > height) return;

				const size = (1 - this.z / width) * 4;
				const alpha = (1 - this.z / width) * globalAlpha;

				ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
				ctx.lineWidth = size;
				ctx.beginPath();
				ctx.moveTo(px, py);
				ctx.lineTo(x, y);
				ctx.stroke();
			}
		}

		for (let i = 0; i < 400; i++) {
			stars.push(new Star());
		}

		let speed = 2;
		let time = 0;
		let globalAlpha = 1;

		const animate = () => {
			ctx.clearRect(0, 0, width, height);
			time++;

			if (time < 150) {
				speed *= 1.02;
				if (speed > 50) speed = 50;
			}

			if (time > 150) {
				globalAlpha -= 0.05;
			}

			stars.forEach((star) => {
				star.update(speed);
				star.draw(Math.max(0, globalAlpha));
			});

			if (globalAlpha > 0) {
				animationFrameId = requestAnimationFrame(animate);
			} else {
				visible = false;
				dispatch('complete');
			}
		};

		const handleResize = () => {
			width = window.innerWidth;
			height = window.innerHeight;
			canvas.width = width;
			canvas.height = height;
		};

		window.addEventListener('resize', handleResize);
		animate();

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	});

	onDestroy(() => {
		if (animationFrameId) cancelAnimationFrame(animationFrameId);
	});
</script>

{#if visible}
	<div
		transition:fade={{ duration: 500 }}
		style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: #000000; z-index: 9999;"
	>
		<canvas bind:this={canvas} style="display: block;" />
	</div>
{/if}
