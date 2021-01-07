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
                                  Check Email for Valification Link
                              </span>
                        </div>
                    </div>
                    <div class="bg-white rounded-lg overflow-hidden shadow-2xl">
                        <div class="p-8">
                            <div>
                                <div class="mb-3">
                                    <label
                                        for="email"
                                        class="block mb-2 text-sm font-medium text-gray-600"
                                    >Email</label
                                    >

                                    <input
                                        type="text"
                                        name="email"
                                        v-model="email"
                                        class="block w-full p-2 rounded bg-gray-200 border border-transparent focus:outline-none"
                                    />
                                </div>
                                <button
                                    @click="Forgot()"
                                    class="w-full p-2 mt-4 bg-indigo-600 text-white rounded shadow"
                                >
                                    Forgot Password
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
  name: "Forgot",
    data(){
      return {
          email : null,
          forgotStatus : false,
          forgotMessage : null
      }
    },
    methods :{
        Forgot(){
            axios.post('/account/forgot', {
                "email" : this.email
            })
            .then((res)=>{
                if(res.status == 200){
                    this.forgotStatus = true
                    this.forgotMessage = res.data.message
                }else{
                    this.forgotMessage = res.data.message
                }
            })
            .catch((err)=>{
                console.log(err)
                this.forgotMessage = "Please Try Again"
            })
        }
    }
};
</script>


<style scoped>
</style>