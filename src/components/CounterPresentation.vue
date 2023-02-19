<template>
	<div>
		<p style="font-size: x-large">This should change => : <strong>{{ counter.count }}</strong></p>
		<p>
			Checking the state in the Vue console, components are not sharing the state and Pinia is initialized two times.
		</p>
	</div>
</template>

<script setup lang="ts">
import { useCounter } from "./Storage"
const counter = useCounter()
</script>
