<template>
	<div>
		<p style="font-size: x-large">This should change => : <strong>{{ counter }}</strong></p>
	</div>
</template>

<script setup lang="ts">
import { counterStore } from "./Storage"
import {useStore} from "@nanostores/vue";

const counter = useStore(counterStore)

</script>
