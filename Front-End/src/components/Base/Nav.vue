<template>
  <div>
    <div class="nav-background">
      <nav class="h-16 text-white flex items-center shadow">
        <div class="mx-auto w-full">
          <div class="flex justify-between items-center">
            <router-link to="/" class="text-white font-semibold rounded-lg px-4 py-2">
              <h3>YT</h3>
            </router-link>
            <router-link to="/" class="text-white font-semibold rounded-lg px-4 py-2">
              <h5>Treding</h5>
            </router-link>
            <router-link to="/" class="text-white font-semibold rounded-lg px-4 py-2">
              <h5>Subscrib</h5>
            </router-link>
            <div class="flex">
                
              <input
                v-model="search_quary"
                class="search text-black rounded-full focus:outline-none"
                type="text"
                placeholder="Search"
              />
              <button @click="search" class="focus:outline-none px-8"> <h5>Search</h5></button>
            </div>

            <div class="flex pr-3">
              <div v-if="login === true" class="relative">
                <button
                  class="user-text rounded-full overflow-hidden border-2 border-purple-500 w-10 h-10 flex justify-center items-center | focus:outline-none focus:border-white"
                  @click="isOpen = true"
                >
                  <img v-if="userImage !== null"
                       v-bind:src="'http://localhost:3000/'+userImage"

                    alt="User's avatar"
                  />
                    <div v-else style="color: black" class="user-text text-xl">
                        {{ userText }}
                    </div>

                </button>

                <div
                  v-if="isOpen"
                  class="fixed inset-0 w-full h-screen z-20 bg-black opacity-25"
                  @click="isOpen = false"
                ></div>
                <div
                  v-if="isOpen"
                  class="absolute z-30 right-0 mt-2"
                  :class="{ hidden: !isOpen }"
                >
                  <div class="bg-white rounded-lg shadow-lg py-2 w-48">
                    <router-link to="/profile"
                                 @click="Open"
                      class="block text-purple-600 font-semibold px-4 py-2 | hover:text-white hover:bg-purple-500"
                      >Your profile</router-link
                    >
                    <router-link
                      to="/Studio"
                      class="block text-purple-600 font-semibold px-4 py-2 | hover:text-white hover:bg-purple-500"
                      >Studio</router-link
                    >
                    <a
                      ><button class="block text-purple-600 font-semibold px-4 py-2" @click="Logout()">Logout</button></a
                    >
                  </div>
                </div>
              </div>
              <div v-else>
                <router-link
                  to="/account/login"
                  class="text-white font-semibold rounded-lg px-4 py-2"
                >
                  <h5>Login</h5>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Nav",
  data() {
    return {
      isOpen: false,
      search_quary: null,
      login: false,
        userImage : null,
        userText : null
    };
  },
  methods: {
    search() {
        var url = `/search/${this.search_quary}`
        this.$router.push(url)
        this.search_quary = null
    },
      Logout(){
          localStorage.removeItem("AuthToken")
          this.login = false
            this.$store.state.isLogin = false
      }
  },
    beforeCreate() {
      axios.get("getuser")
        .then((res)=>{
            if(res.status == 200){
                this.$store.state.user = res.data.user
                this.$store.state.isLogin = true
                this.login = true
                if(res.data.user.img == null){
                    this.userText = res.data.user.displayname.charAt(0).toLocaleUpperCase()
                }else{
                    this.userImage = res.data.user.img
                }
            }
        })
        .catch((err)=>{
            console.log(err)
        })
    },
    watch : {
        '$route' () {
            this.isOpen = false
        },

    }
};
</script>

<style>
.nav-background {
  background: rgb(209, 107, 165);
  background: linear-gradient(
    128deg,
    rgba(209, 107, 165, 1) 0%,
    rgba(134, 168, 231, 1) 100%,
    rgba(95, 251, 241, 1) 100%
  );
}
.search {
  width: 500px;
  margin: 10px;
  padding: 0 30px;
  height: 35px;
  
}
</style>