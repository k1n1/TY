<template>
    <div class="message">
        <center>
            <h1>{{ verifyMessage }}</h1>
            <router-link to="/account/login">
                <button
                    class="w-1/4 p-2 mt-4 bg-indigo-600 text-white rounded shadow"
                >
                    Login
                </button>
            </router-link>
        </center>
    </div>
</template>

<script>
import axios from "axios";
export default {
    name: "Verify",
    data() {
        return {
            uid: this.$route.params.id,
            verifyMessage : null
        };
    },
    beforeCreate() {
        axios.get(`account/varifying/${this.$route.params.id}`)
        .then((res)=>{
            if(res.status == 201){
                this.verifyMessage = res.data.message
            }
            else{
                this.verifyMessage = res.data.message
            }

        })
        .catch((err)=>{
            this.verifyMessage = "Please Try Again"
            console.log(err)
        })
        // alert(this.$route.params.id);
    },
};
</script>

<style>
</style>