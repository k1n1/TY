<template>
  <div>
    <div class="font-sans text-gray-700">
      <div class="container mx-auto p-8 flex">
        <div class="max-w-md w-full mx-auto">
          <h1 class="text-4xl text-center mb-12 font-thin">
            YT : Create Account
          </h1>
            <div v-if="respondMessage" class="flex bg-green-300 rounded-full w-full mb-4">
                <div class="w-auto text-grey-darker items-center p-4">
                  <span class="text-lg font-bold pb-4">
                      {{ respondMessage }}
                  </span>
                </div>
            </div>
           <div v-if="checkEmail" class="flex bg-green-300 rounded-full w-full mb-4">
              <div class="w-auto text-grey-darker items-center p-4">
                  <span class="text-lg font-bold pb-4">
                      Verification link sent to your email address
                  </span>
              </div>
          </div>
          <div class="bg-white rounded-lg overflow-hidden shadow-2xl">
            <div class="p-8">
              <div>
                <div class="mb-3">
                  <label
                    for="username"
                    class="block mb-2 text-sm font-medium text-gray-600"
                    ref="usernameMessage"
                    >Username</label
                  >
                  <input
                    type="text"
                    name="username"
                    v-model="username"
                    class="block w-full p-2 rounded bg-gray-200 border border-transparent focus:outline-none"
                  />
                </div>

                  <div class="mb-3">
                      <label
                          for="fullname"
                          class="block mb-2 text-sm font-medium text-gray-600"

                      >Display Name</label
                      >
                      <input
                          type="text"
                          name="displayname"
                          v-model="displayName"
                          class="block w-full p-2 rounded bg-gray-200 border border-transparent focus:outline-none"
                      />
                  </div>
                <div class="mb-3">
                  <label
                    for="email"
                    class="block mb-2 text-sm font-medium text-gray-600"
                    ref="emailMessage"
                    >Email</label
                  >

                  <input
                    type="email"
                    name="email"
                    v-model="email"
                    class="block w-full p-2 rounded bg-gray-200 border border-transparent focus:outline-none"
                  />
                </div>

                <div class="mb-3">
                  <label
                    for="password"
                    class="block mb-2 text-sm font-medium text-gray-600"
                    ref="passwordMessage"
                    >Password</label
                  >

                  <input
                    type="password"
                    name="password"
                    v-model="password"
                    class="block w-full p-2 rounded bg-gray-200 border border-transparent focus:outline-none"
                  />
                </div>

                <button
                  @click="Register()"
                  class="w-full p-2 mt-4 bg-indigo-600 text-white rounded shadow"
                >
                  Create account
                </button>
              </div>
            </div>

            <div
              class="flex justify-between p-8 text-sm border-t border-gray-300 bg-gray-100"
            >
              <router-link to="/account/login" class="text-green-600 text-xl"
                >Login</router-link
              >
              <router-link to="/account/forgot" class="text-red-600 text-xl">Forgot password?</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios"
export default {
  name: "Register",
  data() {
    return {
      username: null,
      email: null,
      password: null,
        displayName : null,
      validEmail: false,
      validPassword: false,
      validUsername: false,
      checkEmail : false,
      respondMessage:null
    };
  },
  methods: {
    Register() {
      if (this.validEmail && this.validPassword && this.validUsername && this.displayName) {
          axios.post("account/register", {
              "username" : this.username,
              "email" : this.email,
              "password" : this.password,
              "displayname" : this.displayName
          })
          .then((res)=>{

              if(res.status == 202 && res.data.message == "Please Varifying Email"){
                  this.email = this.password = this.username = null;
                  this.validEmail = this.validPassword = this.validUsername = false;
                  this.checkEmail = true
              }
              else{
                  this.respondMessage = res.data.message
              }
          })
          .catch((err)=>{
              console.log(err)
          })
      } else {
        this.respondMessage = "Username, Email, or Password is not Valid"
      }
    },
  },
  watch: {
    email: function () {
      if (this.email !== null) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var bool = re.test(String(this.email).toLowerCase());
        if (bool) {
          this.$refs.emailMessage.innerText = "Email";
          this.$refs.emailMessage.style.color = "Green";
          this.validEmail = true;
        } else {
          this.$refs.emailMessage.innerText = "Email Is Not Valid.";
          this.$refs.emailMessage.style.color = "red";
        }
      }
    },
    password: function () {
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
    },
    username: function () {
      if (this.username !== null) {
        const re = /^[a-z]{5,30}$/;
        var bool = re.test(this.username);
        if (bool) {
          this.$refs.usernameMessage.innerText = "Username";
          this.$refs.usernameMessage.style.color = "green";
          this.validUsername = true;
        } else {
          this.$refs.usernameMessage.innerText =
            "Username must have lowercase and minimum 5 characters.";
          this.$refs.usernameMessage.style.color = "red";
        }
      }
    },
  },
};
</script>

<style>
</style>