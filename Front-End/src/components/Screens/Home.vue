<template>
    <div>

        <section class="py-8 px-4">
            <div class="flex flex-wrap -mx-4 -mb-8">
                <div class="md:w-1/5 px-4 mb-8"><img class="rounded shadow-md" src="https://source.unsplash.com/random/1280x720" alt="">
                    <div><router-link to="/usert/id" >User Avetar - User Name</router-link></div>
                    <div>Lorem ipsum dolor sit ametjdhfkwaebfckauyr</div>
                </div>
                <div class="md:w-1/5 px-4 mb-8"><img class="rounded shadow-md" src="https://source.unsplash.com/random/1280x720" alt=""></div>
                <div class="md:w-1/5 px-4 mb-8"><img class="rounded shadow-md" src="https://source.unsplash.com/random/1280x720" alt=""></div>
                <div class="md:w-1/5 px-4 mb-8"><img class="rounded shadow-md" src="https://source.unsplash.com/random/1280x720" alt=""></div>
                <div class="md:w-1/5 px-4 mb-8"><img class="rounded shadow-md" src="https://source.unsplash.com/random/1280x720" alt=""></div>
                <div class="md:w-1/5 px-4 mb-8"><img class="rounded shadow-md" src="https://source.unsplash.com/random/1280x720" alt=""></div>
                <div class="md:w-1/5 px-4 mb-8"><img class="rounded shadow-md" src="https://source.unsplash.com/random/1280x720" alt=""></div>
                <div class="md:w-1/5 px-4 mb-8"><img class="rounded shadow-md" src="https://source.unsplash.com/random/1280x720" alt=""></div>
                <div class="md:w-1/5 px-4 mb-8"><img class="rounded shadow-md" src="https://source.unsplash.com/random/1280x720" alt=""></div>
                <div class="md:w-1/5 px-4 mb-8"><img class="rounded shadow-md" src="https://source.unsplash.com/random/1280x720" alt=""></div>
                <div class="md:w-1/5 px-4 mb-8"><img class="rounded shadow-md" src="https://source.unsplash.com/random/1280x720" alt=""></div>
                <div class="md:w-1/5 px-4 mb-8"><img class="rounded shadow-md" src="https://source.unsplash.com/random/1280x720" alt=""></div>
                <div class="md:w-1/5 px-4 mb-8"><img class="rounded shadow-md" src="https://source.unsplash.com/random/1280x720" alt=""></div>
                <div class="md:w-1/5 px-4 mb-8"><img class="rounded shadow-md" src="https://source.unsplash.com/random/1280x720" alt=""></div>
                <div class="md:w-1/5 px-4 mb-8"><img class="rounded shadow-md" src="https://source.unsplash.com/random/1280x720" alt=""></div>
                <div class="md:w-1/5 px-4 mb-8"><img class="rounded shadow-md" src="https://source.unsplash.com/random/1280x720" alt=""></div>
                <div class="md:w-1/5 px-4 mb-8"><img class="rounded shadow-md" src="https://source.unsplash.com/random/1280x720" alt=""></div>
            </div>
        </section>
    </div>
</template>

<script>
import axios from "axios";
export default {
    name: "Home",
    methods : {
    },
    beforeCreate() {
        axios.get("/")
        .then((res)=>{
            console.log(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    },

}
</script>

<style scoped>

</style>