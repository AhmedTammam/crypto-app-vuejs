<template>
    <form v-on:submit="formSubmit">
        <div class="form-group">
            <div class="input-group mb-3 my-3">
                <input type="text" class="form-control" placeholder="Search for coin" v-model="keyWord" >
                <div class="input-group-append">
                    <button class="btn btn-primary" type="submit" id="button-addon2">Search</button>
                </div>
            </div>
        </div>
    </form>
</template>

<script>
export default {
    data(){
        return{
            keyWord: ''
        }
    },
    methods:{
        formSubmit(e){
            e.preventDefault();
            this.$emit('formSubmit', this.keyWord);
            this.keyWord = '';
        }
    }
}
</script>

<style scoped>

</style>


