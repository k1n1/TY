<template>
    <div>
        <div class="font-sans text-gray-700">
            <div class="container mx-auto p-8 flex">
                <div class="max-w-md w-full mx-auto">
                    <h1 class="text-4xl text-center mb-12 font-thin">
                        YT : Login
                    </h1>
                    <div v-if="loginStatus" class="flex bg-green-300 rounded-full w-full mb-4">
                        <div class="w-auto text-grey-darker items-center p-4">
                              <span class="text-lg font-bold pb-4">
                                  Login Successfully
                              </span>
                        </div>
                    </div>
                    <div v-if="loginStatus === false" class="flex bg-red-300 rounded-full w-full mb-4">
                        <div class="w-auto text-grey-darker items-center p-4">
                              <span class="text-lg font-bold pb-4">
                                  {{ respondMessage }}
                              </span>
                        </div>
                    </div>
                    <div class="bg-white rounded-lg overflow-hidden shadow-2xl">
                        <div class="p-8">
                            <div>
                                <div class="mb-3">
                                    <label
                                        class="block mb-2 text-sm font-medium text-gray-600"
                                        for="email"
                                    >Email</label
                                    >

                                    <input
                                        v-model="email"
                                        class="block w-full p-2 rounded bg-gray-200 border border-transparent focus:outline-none"
                                        name="email"
                                        type="text"
                                    />
                                </div>

                                <div class="mb-3">
                                    <label
                                        class="block mb-2 text-sm font-medium text-gray-600"
                                        for="password"
                                    >Password</label
                                    >

                                    <input
                                        v-model="password"
                                        class="block w-full p-2 rounded bg-gray-200 border border-transparent focus:outline-none"
                                        name="password"
                                        type="password"
                                    />
                                </div>

                                <button
                                    class="w-full p-2 mt-4 bg-indigo-600 text-white rounded shadow"
                                    @click="Login()"
                                >
                                    Login
                                </button>
                            </div>
                        </div>

                        <div
                            class="flex justify-between p-8 text-sm border-t border-gray-300 bg-gray-100"
                        >
                            <router-link class="text-green-600 text-xl" to="/account/register"
                            >Create Account
                            </router-link
                            >
                            <router-link class="text-red-600 text-xl" to="/account/forgot">Forgot password?
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
    name: "Login",
    data() {
        return {
            email: null,
            password: null,
            loginStatus: null,
            respondMessage: null,
            token: null
        }
    },

    methods: {
        Login() {
            axios.post("/account/login", {
                "email": this.email,
                "password": this.password
            })
                .then((res) => {
                    if (res.status == 200) {
                        this.loginStatus = true
                        localStorage.setItem("AuthToken", res.data.token)
                        this.$store.state.isLogin = true
                        window.location.replace("/")
                    } else {
                        this.loginStatus = false
                        this.respondMessage = res.data.message
                    }
                })
                .catch((err) => {
                    this.respondMessage = "Please Try Again Latter"
                    console.log(err)
                })
        }
    }

};
</script>


<style scoped>
.auth {
    height: 100vh;
    display: flex;
    align-items: center;
}

.login-form {
    width: 340px;
    margin: 50px auto;
    font-size: 15px;
}

.login-form form {
    margin-bottom: 15px;
    background: #f7f7f7;
    box-shadow: 0px 10px 10px black;
    padding: 30px;
}

.login-form h2 {
    margin: 0 0 15px;
}

.form-control,
.btn {
    min-height: 38px;
    border-radius: 2px;
}

.btn {
    font-size: 15px;
    font-weight: bold;
}
</style>