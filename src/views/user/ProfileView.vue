<script setup>
import { ref, onMounted } from 'vue';
import UserLayout from '@/layouts/UserLayout.vue'

const profileImageUrl = ref('https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp')
const email = ref('')
const name = ref('')

const handleFileUpload = (event) => {
    const file = event.target.files[0]
    
    if(file){
        const reader = new FileReader()
        reader.onload = (e) => {
            profileImageUrl.value = e.target.result
        }
        reader.readAsDataURL(file)
    }
}

const updateProfile = () => {
    const profileData = {
        imageUrl: profileImageUrl.value,
        name: name.value,
        email: email.value
    }
    localStorage.setItem('profile-data' , JSON.stringify(profileData))
    alert('Success update profile')
}

onMounted(()=>{
    const profileData = JSON.parse(localStorage.getItem('profile-data'))
    if(profileData){
        profileImageUrl.value = profileData.imageUrl
        email.value = profileData.email
        name.value = profileData.name
    }
})
</script>

<template>
    <UserLayout>
        <div class="max-w-2xl mx-auto border border-base-200 shadow-xl p-8 my-4">
            <div class="font-bold text-2xl">Your Profile</div>

            <div class="flex flex-col items-center">
                <div>
                    <img class="w-24 h-24 rounded-full" 
                    :src="profileImageUrl">
                </div>
                <input type="file" @change="handleFileUpload" class="file-input file-input-bordered mt-4">
                <div class="form-control w-full">
                    <label class="label">
                        <span class="label-text">Email</span>
                    </label>
                    <input v-model="email" type="text" placeholder="Type here" class="input input-bordered w-full">
                </div>
                <div class="form-control w-full">
                    <label class="label">
                        <span class="label-text">Name</span>
                    </label>
                    <input v-model="name" type="text" placeholder="Type here" class="input input-bordered w-full">
                </div>
                <button @click="updateProfile" class="btn btn-neutral w-full mt-4">Update profile</button>
            </div>
        </div>
    </UserLayout>
</template>