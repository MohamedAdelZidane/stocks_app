<template>
    <form @submit.prevent="submitForm" class="form-control">

        <div class="form-spacing" :class="{ invalid: !stock_name.isValid }">
            <div class="row">
                <div class="col">
                    <label for="stock_name">Stock Name: </label>
                </div>
                <div class="col">
                    <input type="text" id="stock_name" v-model.trim="stock_name.val"
                        @blur="clearValidity('stock_name')">
                    <p class="error_msg" v-if="!stock_name.isValid">Stock Name must not be empty</p>
                </div>
            </div>
        </div>
        <div class="form-spacing" :class="{ invalid: !high.isValid }">
            <div class="row">
                <div class="col">
                    <label for="high">High Number: </label>

                </div>
                <div class="col">
                    <input type="number" id="high_value" v-model.trim="high.val" @blur="clearValidity('high')">
                    <p class="error_msg" v-if="!high.isValid">High number must be greater then 0</p>
                </div>
            </div>


        </div>
        <div class="form-spacing" :class="{ invalid: !low.isValid }">
            <div class="row">
                <div class="col">
                    <label for="low">Low Number: </label>


                </div>
                <div class="col">
                    <input type="number" id="low_value" v-model.trim="low.val" @blur="clearValidity('low')">
                    <p class="error_msg" v-if="!low.isValid">Low number must be greater then 0</p>
                </div>
            </div>


        </div>
        <div class="form-spacing" :class="{ invalid: !open.isValid }">
            <div class="row">
                <div class="col">
                    <label for="open">Open Number: </label>



                </div>
                <div class="col">
                    <input type="number" id="open_value" v-model.trim="open.val" @blur="clearValidity('open')">
                    <p class="error_msg" v-if="!open.isValid">Open number must be greater then 0</p>
                </div>
            </div>


        </div>
        <div class="form-spacing" :class="{ invalid: !close.isValid }">

            <div class="row">
                <div class="col">
                    <label for="close">Close Number: </label>




                </div>
                <div class="col">
                    <input type="number" id="close_value" v-model.trim="close.val" @blur="clearValidity('close')">
                    <p class="error_msg" v-if="!close.isValid">Close number must be greater then 0</p>
                </div>
            </div>


        </div>
        <p class="error_msg" v-if="!formIsValid">Please fix the above errors and submit again.</p>


        <div class="row">
            <div class="col stock_form_add_btn">
                <base-button>Add</base-button>

            </div>

        </div>


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

<style scoped>
.form-control {
    margin-top: 2%;
    margin-bottom: 2%;

}

.form-spacing {
    margin: 2%;
}

.stock_form_add_btn {
    margin-left: 2%;
}

.error_msg {
    color: red;
}
</style>
