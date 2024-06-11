import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useTxnStore = defineStore('transaction', () => {
	const isTF = ref(false)

	function authenticatedTxn(){
		isTF.value = true
	}

	return { isTF, authenticatedTxn}
},
{
	persist: {
		storage: sessionStorage
	}
}
)