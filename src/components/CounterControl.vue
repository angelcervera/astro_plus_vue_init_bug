<template>
	<div>
		<button @click="counter.subtract()">-</button>		<button @click="counter.add()">+</button>
		<pre>In control component: {{ counter.count }}</pre>
	</div>
</template>

<script setup lang="ts">
import { useCounter } from "./Storage"
const counter = useCounter()
</script>


