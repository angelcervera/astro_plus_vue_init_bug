<template>
	<div>
		<button @click="subtract()">-</button>		<button @click="add()">+</button>
		<pre>In control component: {{ counter }}</pre>
	</div>
</template>

<script setup lang="ts">
import { counterStore, add, subtract } from "./Storage"
import {useStore} from "@nanostores/vue";

const counter = useStore(counterStore)

</script>


