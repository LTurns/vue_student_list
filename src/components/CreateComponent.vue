<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <h3 class="text-center">Create Student</h3>
            <form @submit.prevent="handleSubmitForm">
                <div class="form-group">
                    <label>Name</label>
                    <input type="text" class="name" v-model="student.name" required>
                </div>
                <div class="form-group">
                    <label>Email</label>
                    <input type="email" class="form-control" v-model="student.email" required>
                </div>
                <div class="form-group">
                    <label>Phone</label>
                    <input type="text" class="form-control" v-model="student.phone" required>
                </div>
                <div class="form-group">
                    <button data-cy="button" class="btn btn-danger btn-block">Create</button>
                </div> 
            </form>
            <ul data-cy="links">
                <li><a href="www.google.com">google</a></li>
                <li><a href="www.google.com">google</a></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            student: {
                name: '', 
                email: '',
                phone: ''
            }

        }
    }, 
    methods: {
        handleSubmitForm(){ }
    }
}
</script>

<style scoped>

</style>