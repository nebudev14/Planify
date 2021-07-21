<template>
    <h1>{{ plans }}</h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

var month:string = (new Date().getMonth()+1).toString();
var day:string = new Date().getDate().toString();
var year:string = new Date().getFullYear().toString();

export default defineComponent({
    name: 'Calendar',
    data() {
        return {
            plans: month + "/" + day + "/" + year
        }
    }
})
</script>

<style scoped>

</style>