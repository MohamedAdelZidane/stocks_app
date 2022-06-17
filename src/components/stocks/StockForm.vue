<template>
    <form @submit.prevent="submitForm">
        <div class="form-control" :class="{ invalid: !stock_name.isValid }">
            <label for="stock_name">Stock Name </label>
            <input type="text" id="stock_name" v-model.trim="stock_name.val" @blur="clearValidity('stock_name')">
            <p v-if="!stock_name.isValid">Stock Name must not be empty</p>
        </div>
        <div class="form-control" :class="{ invalid: !high.isValid }">
            <label for="high">High </label>
            <input type="number" id="high_value" v-model.trim="high.val" @blur="clearValidity('high')">
            <p v-if="!high.isValid">High number must be greater then 0</p>
        </div>
        <div class="form-control" :class="{ invalid: !low.isValid }">
            <label for="low">Low </label>
            <input type="number" id="low_value" v-model.trim="low.val" @blur="clearValidity('low')">
            <p v-if="!low.isValid">Low number must be greater then 0</p>
        </div>
        <div class="form-control" :class="{ invalid: !open.isValid }">
            <label for="open">Open </label>
            <input type="number" id="open_value" v-model.trim="open.val" @blur="clearValidity('open')">
            <p v-if="!open.isValid">Open number must be greater then 0</p>
        </div>
        <div class="form-control" :class="{ invalid: !close.isValid }">
            <label for="close">Close </label>
            <input type="number" id="close_value" v-model.trim="close.val" @blur="clearValidity('close')">
            <p v-if="!close.isValid">Close number must be greater then 0</p>
        </div>
        <p v-if="!formIsValid">Please fix the above errors and submit again.</p>
        <base-button>Add</base-button>
    </form>
</template>

<script>
export default {
    emits: ['save-data'],
    data() {
        return {
            stock_name: {
                val: '',
                isValid: true
            },
            high: {
                val: null,
                isValid: true
            },
            low: {
                val: null,
                isValid: true
            },
            open: {
                val: null,
                isValid: true
            },
            close: {
                val: null,
                isValid: true
            },
            formIsValid: true
        }
    },
    methods: {
        clearValidity(input) {
            this[input].isValid = true
        },
        validateForm() {
            this.formIsValid = true;
            if (this.stock_name.val === '') {
                this.stock_name.isValid = false;
                this.formIsValid = false
            }
            if (!this.high.val || this.high.val < 0) {
                this.high.isValid = false;
                this.formIsValid = false
            }
            if (!this.low.val || this.low.val < 0) {
                this.low.isValid = false;
                this.formIsValid = false
            }
            if (!this.open.val || this.open.val < 0) {
                this.open.isValid = false;
                this.formIsValid = false
            }
            if (!this.close.val || this.close.val < 0) {
                this.close.isValid = false;
                this.formIsValid = false
            }
        },
        submitForm() {
            this.validateForm();
            if (!this.formIsValid) {
                // alert('Inputs not valid')
                return
            }
            const formData = {
                id: Math.floor(Math.random() * 100),
                stock_name: this.stock_name.val,
                high: this.high.val,
                low: this.low.val,
                open: this.open.val,
                close: this.close.val
            }
            var showList = [];
            showList.push(formData);
            var finalArr = localStorage.getItem('showList') != undefined ? [...showList, ...JSON.parse(localStorage.getItem('showList'))] : showList;
            localStorage.setItem("showList", JSON.stringify(finalArr));


            this.$emit('save-data', formData)
            console.log(formData);


        }
    }

}
</script>
