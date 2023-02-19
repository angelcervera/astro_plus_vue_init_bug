<template>
	<div>
		<pre>In the other component: {{ counter.count }}</pre>
	</div>
</template>

<script setup lang="ts">
import { useCounter } from "./Storage"
const counter = useCounter()
</script>
