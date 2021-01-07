<template>
    <div>
        <div class="font-sans text-gray-700">
            <div class="container mx-auto p-8 flex">
                <div class="max-w-md w-full mx-auto">
                    <h1 class="text-4xl text-center mb-12 font-thin">
                        YT : Forgot Password
                    </h1>
                    <div v-if="forgotStatus" class="flex bg-green-300 rounded-full w-full mb-4">
                        <div class="w-auto text-grey-darker items-center p-4">
                              <span class="text-lg font-bold pb-4">
                                  Password Changed, <router-link to="/account/login">Login</router-link>
                              </span>
                        </div>
                    </div>
                    <div v-if="forgotMessage" class="flex bg-red-300 rounded-full w-full mb-4">
                        <div class="w-auto text-grey-darker items-center p-4">
                              <span class="text-lg font-bold pb-4">
                                  {{forgotMessage}}
                              </span>
                        </div>
                    </div>

                    <div class="bg-white rounded-lg overflow-hidden shadow-2xl">
                        <div class="p-8">
                            <div>
                                <div class="mb-3">
                                    <label
                                        ref="passwordMessage"
                                        for="email"
                                        class="block mb-2 text-sm font-medium text-gray-600"
                                    >Password</label
                                    >

                                    <input
                                        type="password"
                                        v-model="password"
                                        class="block w-full p-2 rounded bg-gray-200 border border-transparent focus:outline-none"
                                    />
                                </div>
                                <div class="mb-3">
                                    <label
                                        for="email"
                                        class="block mb-2 text-sm font-medium text-gray-600"
                                    >Conform Password</label
                                    >

                                    <input
                                        type="password"
                                        v-model="confirmPassword"
                                        class="block w-full p-2 rounded bg-gray-200 border border-transparent focus:outline-none"
                                    />
                                </div>
                                <button
                                    @click="ChangePassword()"
                                    class="w-full p-2 mt-4 bg-indigo-600 text-white rounded shadow"
                                >
                                    Change Password
                                </button>
                            </div>
                        </div>

                        <div
                            class="flex justify-between p-8 text-sm border-t border-gray-300 bg-gray-100"
                        >
                            <router-link to="/account/register" class="text-green-600 text-xl"
                            >Create Account
                            </router-link
                            >
                            <router-link to="/account/login" class="text-green-600 text-xl">Login
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
name: "Setnewpassword",
    data(){
    return{
        password : null,
        confirmPassword : null,
        forgotStatus : false,
        validPassword : false,
        forgotMessage : null
    }
    },
    methods : {
        ChangePassword(){
            if(this.password !== null && this.validPassword === true){
                if(this.password === this.confirmPassword){
                    axios.post(`account/setnewpassword/${this.$route.params.id}`, {
                        "password" : this.password,
                        "confirmPassword" : this.confirmPassword
                    })
                    .then((res)=>{
                        if(res.status == 204){
                            this.forgotStatus = true
                        }
                        else{
                            this.forgotMessage = res.data.message
                        }
                    })
                    .catch((err)=>{
                        this.forgotMessage = "Please Try Again"
                        console.log(err)
                    })
                }else{
                    this.forgotMessage = "Password Not Same"
                }
            }
            else {
                this.forgotMessage = "Invalid Password"
            }
        },

    },
    watch : {
        password: function () {
            this.forgotMessage = null
            if (this.password !== null) {
                const re = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
                var bool = re.test(this.password);
                if (bool) {
                    this.$refs.passwordMessage.innerText = "Password";
                    this.$refs.passwordMessage.style.color = "green";
                    this.validPassword = true;


                } else {
                    this.$refs.passwordMessage.innerText =
                        "Password Must have minimum of 8 characters, Uppercase, lowercase, Number, and Special characters.";
                    this.$refs.passwordMessage.style.color = "red";
                }
            }
        }
    },

}
</script>

<style scoped>

</style>