<script setup>
import router from '@/router'
import { inject, reactive } from 'vue'
import { useTxnStore } from '@/stores/transaction'

const transaction = useTxnStore()

const dataTF = reactive({
	// ID: 0,
	AccountID: '',
	BankID: '',
	Amount: '',
	TransactionDate: '',
	snackbar: false,
	pesanTF: ''
})

const myAxios = inject('myAxios')

const Tf = () => {
	console.log('Tf clicked', dataTF)

	myAxios
		.post('/transfer/transferbank', {
			// ID: dataTF.ID,
			AccountID: dataTF.AccountID,
			BankID: dataTF.BankID,
			Amount: dataTF.Amount,
			TransactionDate: dataTF.TransactionDate
		})
		.then(
			(res) => {
				if (res.status == 200) {
					dataTF.pesanTF = 'Transfer Anda Berhasil'
					transaction.authenticatedTxn()
					router.push('about')
				}
				dataTF.snackbar = true
			},
			(err) => {
				dataTF.pesanTF = 'Gagal Transfer'
				dataTF.snackbar = true
			}
		)
}
</script>

<template>
	<v-card class="pa-2">
		<div class="container">
			<!-- <div>
				<label>ID</label>
				<v-text-field type="text" v-model="dataTF.ID" />
			</div> -->
			<div>
				<label>Account ID</label>
				<v-text-field type="text" v-model="dataTF.AccountID" />
			</div>
			<div>
				<label>Bank ID</label>
				<v-text-field type="text" v-model="dataTF.BankID" />
			</div>
			<div>
				<label>Amount</label>
				<v-text-field type="text" v-model="dataTF.Amount" />
			</div>
			<div>
				<label>Transaction Date</label>
				<v-text-field type="text" v-model="dataTF.TransactionDate" />
			</div>

			<div>
				<v-btn @click="Tf">Send Transfer</v-btn>
			</div>
			<v-snackbar v-model="dataTF.snackbar">
				{{ dataTF.pesanTF }}
				<template v-slot:actions>
					<v-btn color="pink" variant="text" @click="dataTF.snackbar = false"> Close </v-btn>
				</template>
			</v-snackbar>
		</div>
	</v-card>
</template>