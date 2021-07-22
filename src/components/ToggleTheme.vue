<template>
    <ul class="list">
        <li class="themeButtonList">
            <button class="themeBtn" v-on:click="switchTheme">
                <img src="../assets/toggle-theme.svg" id="themeImage">
            </button>
        </li>        
    </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ToggleTheme',
  methods: {
    switchTheme() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        console.log(currentTheme);
        if (currentTheme == null || currentTheme == '') {
            document.documentElement.setAttribute('data-theme', 'darkMode');
        }
        else if (currentTheme == 'darkMode') {
            document.documentElement.setAttribute('data-theme', '');
        }
        
    }
  }
});
</script>

<style>
    .list {
        list-style: none;
        display: flex;
        flex-direction: row;
        margin: 0;
    }

    .themeBtn {
        border: none;
    }

    .themeBtn:hover {
        cursor: pointer;
    }

    #themeImage {
        margin: 1rem 2rem 0 2rem;
        width: 40px;
        height: 40px;
    }

    .themeButtonList:last-child {
        margin-left: auto;
    }
</style>