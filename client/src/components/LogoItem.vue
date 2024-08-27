<script setup>
defineProps({
    size: {
        type: String,
        required: false
    }
})
</script>


<template>
    <svg width="0" height="0">
        <radialGradient id="rg" r="135%" cx="50%" cy="120%">
            <stop stop-color="#FFA732" offset="0" />
            <stop stop-color="#FFA732" offset="0.05" />
            <stop stop-color="#EF4040" offset="0.45" />
            <stop stop-color="#C21292" offset="0.6" />
            <stop stop-color="#711DB0" offset="0.9" />
        </radialGradient>
    </svg>
    <div class="logo" width="200" height="200">
        <font-awesome-icon :icon="['fas', 'palette']" size={{size}} rotation='0' />
    </div>
</template>


<style scoped>
.logo {
    font-size: 100px;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    display: inline-block;
    position: relative;
}

div svg * {
    fill: url(#rg);
}

</style>