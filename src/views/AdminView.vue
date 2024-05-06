<template lang="">
    <div v-if="$cookies.get('role') === 'admin'">
        <div class="admin_dashboard">
            admin
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .admin_dashboard{
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
    }
</style>