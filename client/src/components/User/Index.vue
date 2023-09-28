<template>
    <div>
        <h1>Get all users</h1>
        <div>
            <h2>จํานวนผู้ใช้งาน {{ users.length }}</h2>
        </div>
        <div v-for="user in users" v-bind:key="user.id">
            <p>ID : {{ user.id }}</p>
            <p>ชื่อ : {{ user.name }}</p>
            <p>นามสกุล : {{ user.lastname }}</p>
            <p>Status : {{ user.status }}</p>
            <p>Email : {{ user.email }}</p>
            <p>Password : {{ user.password }}</p>
            <p>Type : {{ user.type }}</p>
            <p><button v-on:click="navigateTo('/user/' + user.id)">ดูข้อมูลผู้ใช้</button></p>
            <p><button v-on:click="navigateTo('/users')">กลับ</button></p>
            <button v-on:click="deleteUser(user)">ลบข้อมูล</button>
            <hr>
        </div>
    </div>
</template>
<script>
import UsersService from '@/services/UsersService'
export default {
    data() {
        return {
            users: []
        }
    },
    async created() {
        this.users = (await UsersService.index()).data
    },
    methods: {
        navigateTo(route) {
            this.$router.push(route)
        },
    },

    methods: {
        navigateTo(route) {
            this.$router.push(route)
        },
        async deleteUser(user) {
            let result = confirm("want to delete?")
            if (result) {
                try {
                    await UsersService.delete(user)
                    this.refreshData()
                } catch (err) {
                    console.log(err)
                }
            }
        },
        async refreshData() {
            this.users = (await UsersService.index()).data
        }
    },


    catch(error) {
        console.log(error)
    }
}
</script>
<style scoped></style>
   