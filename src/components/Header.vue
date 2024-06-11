<template>
	<div>
		<h1>
			{{  text  }}
		</h1>
		<slot></slot>
		<slot name="Header_part1" :param1="data.param_from_slot"></slot>
	</div>
</template>

<script setup>

import { reactive } from 'vue';

const data = reactive ({
	param_from_slot: "Hello from the other side"
})

	defineProps({
		text: {
			type: String,
			default: ""
		}
	})
</script>