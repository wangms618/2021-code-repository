<template>
	<div class="index-page flex-ct-y">
		<h1>
			<span class="gradient">bruce-cli</span>
			<img src="./assets/img/logo.svg">
		</h1>
		<p>How to configure this <strong class="vue">Vue</strong> project</p>
		<p>Check out the `<a href="https://github.com/JowayYoung/bruce-cli" class="gradient">bruce-cli docs</a>`</p>
	</div>
</template>

<style lang="less">
.index-page {
	overflow: hidden;
	height: 100vh;
	background-color: #282c34;
	h1 {
		margin: 20px 0;
		font-size: 10vmin;
	}
	span {
		animation-duration: 10s !important;
	}
	img {
		display: inline-block;
		height: 10vmin;
		vertical-align: super;
		animation: swing 3s infinite;
	}
	p {
		line-height: 1.5;
		font-size: 20px;
		color: #fff;
	}
	strong {
		display: inline-block;
		margin: 0 3px;
		padding: 0 6px;
		border-radius: 5px;
		line-height: 20px;
		font-size: 18px;
		color: #fff;
		&.default {
			background-color: #f66;
		}
		&.react {
			background-color: #61dafb;
		}
		&.vue {
			background-color: #42b983;
		}
	}
	.gradient {
		background-image: linear-gradient(92deg, #f66 0%, #f90 100%);
		background-clip: text;
		color: #f66;
		animation: hue 60s infinite linear;
		-webkit-text-fill-color: transparent;
	}
}
@keyframes hue {
	from {
		filter: hue-rotate(0);
	}
	to {
		filter: hue-rotate(-360deg);
	}
}
@keyframes swing {
	0%,
	65% {
		transform: rotate(0);
	}
	70% {
		transform: rotate(6deg);
	}
	75% {
		transform: rotate(-6deg);
	}
	80% {
		transform: rotate(6deg);
	}
	85% {
		transform: rotate(-6deg);
	}
	90% {
		transform: rotate(6deg);
	}
	95% {
		transform: rotate(-6deg);
	}
	100% {
		transform: rotate(0);
	}
}
</style>

<script>
export default {};
</script>