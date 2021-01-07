<template>
    <div>
        <div class="container mx-auto pt-16">
                    <div class="flex justify-center">
                        <div class="w-6/12 sm:w-4/12 px-4 flex justify-center">
                            <div v-if="selectedImg == null">
                                <img v-if="profileImg != null" v-bind:src="'http://localhost:3000/'+profileImg" alt="..." class="shadow rounded-full w-64 h-64 align-middle border-none" />
                                <h4 v-else>Dont Have Profile Picture</h4>
                            </div>
                            <div v-else>
                                <img v-bind:src="selectedImg" alt="..." class="shadow rounded-full w-64 h-64 align-middle border-none" />
                            </div>
                        </div>
                    </div>
            <div class="pt-8">
                <input type="file" accept="image/*" @change="selectImg()" ref="selectImg"> <br>
                <div v-if="upload == true" class="mt-3 h-3 relative max-w-full rounded-full overflow-hidden">
                    <div class="w-full h-full bg-gray-200 absolute"></div>
                    <div id="bar" class="h-full bg-green-500 relative w-0"></div>
                </div>
                <br>
                    <button @click="updateProfileImg()" class=" bg-blue-500 rounded-full font-bold text-white mt-2 px-4 py-1 transition duration-300 ease-in-out hover:bg-blue-600 mr-6">
                        Update Image
                    </button>
            </div>
                    <div class="mt-16">
                        <div v-if="idUpdateed == true" class="flex bg-green-300 w-full mb-4">
                            <div class="w-auto text-grey-darker items-center p-4">
                              <span class="text-lg font-bold pb-4">

                                  {{updateMessage}}
                              </span>
                            </div>
                        </div>
                        <div class="mb-3 pt-0">
                            <label
                                class="block mb-2 text-sm font-medium text-gray-600"
                                for="UserName"
                            >UserName</label
                            >
                            <input type="text" v-model="userName" placeholder="UserName" class="px-3 py-3 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded outline-none focus:outline-none focus:text-sm shadow shadow-outline w-full"/>
                        </div>
                        <div class="mb-3 pt-0">
                            <label
                                class="block mb-2 text-sm font-medium text-gray-600"
                                for="Email"
                            >Email</label
                            >
                            <input type="email" v-model="email" placeholder="Email" class="px-3 py-3 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded outline-none focus:outline-none focus:text-sm shadow shadow-outline w-full"/>
                        </div>
                        <div class="mb-3 pt-0">
                            <label
                                class="block mb-2 text-sm font-medium text-gray-600"
                                for="displayName"
                            >Display Name</label
                            >
                            <input for="DisplayName" type="text" v-model="displayName" placeholder="Display Name" class="px-3 py-3 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded outline-none focus:outline-none focus:text-sm shadow shadow-outline w-full"/>
                        </div>
                        <div class="mb-3 pt-0">
                            <button @click="update()" class="bg-blue-500 rounded-full font-bold text-white px-4 py-3 transition duration-300 ease-in-out hover:bg-blue-600 mr-6">
                                Update
                            </button>

                        </div>
                    </div>
        </div>
    </div>

</template>

<script>
import axios from "axios";

export default {
name: "Profile",
    data(){
        return{
            userName : null,
            email : null,
            displayName : null,
            profileImg : null,
            selectedImg : null,
            upload :false,
            idUpdateed : null,
            updateMessage : null
        }
    },
    methods :  {
        update(){
            axios.post("/profile/update", {
                email : this.email,
                username : this.userName,
                displayname : this.displayName
            })
            .then((data)=>{
                this.idUpdateed = true
                this.updateMessage = data.data.message
            })
            .catch((err)=>{
                console.log(err)
                this.idUpdateed = true
                this.updateMessage = "Somthing Wrong"
            })
        },
        selectImg(){

            var selectedImg = this.$refs.selectImg.files[0]
            this.selectedImg = URL.createObjectURL(selectedImg)
        },
        updateProfileImg(){
            let formData = new FormData();
            formData.append("file", this.$refs.selectImg.files[0]);
            this.upload = true
            axios.post("profile/changeimg", formData, {
                onUploadProgress: uploadEvent =>{
                    let progress = Math.round(uploadEvent.loaded / uploadEvent.total * 100)
                    let bar = document.getElementById('bar');
                    bar.style.width = progress + "%";
                }
            })
            .then((res)=>{
                this.$refs.selectImg.value = null
                this.profileImg = res.data.img
                localStorage.setItem("AuthToken", res.data.token)
                window.location.reload()
            })
            .catch((err)=>{
                console.log(err)
            })
        }
    },
    beforeCreate() {
        axios.get('/profile/')
        .then((res)=>{
            this.email = res.data.email
            this.userName = res.data.username
            this.displayName = res.data.displayname
            this.profileImg = res.data.img
        })
        .catch((err) =>{
            console.log(err)
        })
    }
}
</script>

<style scoped>

</style>