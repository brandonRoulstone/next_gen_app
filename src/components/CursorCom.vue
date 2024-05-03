<template lang="">

    <div class="outer-cursor" :style="{ top: cursorY + 'px', left: cursorX + 'px' }"><div class="inner-cursor"></div></div>
    
</template>
<script>
export default {
    data(){
        return {
            cursorX: 0,
            cursorY: 0
        }
    },
    mounted() {
        // Add event listeners for mouse movement
        document.addEventListener("mousemove", this.updateCursorPosition);
    },
    before() {
        // Remove event listeners when component is destroyed
        document.removeEventListener("mousemove", this.updateCursorPosition);
    },
    methods: {
        updateCursorPosition(event) {
          this.cursorX = event.clientX;
          this.cursorY = event.clientY;
        }
    },
}
</script>
<style>

.outer-cursor {
    position: fixed;
    left: 10px;
    width: 26px;
    height: 26px;
    border: 1px solid #9641f8;
    border-radius: 50%;
    /* mix-blend-mode: difference; */
    transform: translate(-50%,-50%);
    pointer-events: none;
    z-index: 9999;
    transition: none !important;
}

.inner-cursor {
    position: fixed;
    width: 9.5px;
    height: 9.5px;
    left: 12px;
    top: 12px;
    border-radius: 50%;
    background-color: #000000;
    z-index: 5000;
    transform: translate(-50%, -50%);
    /* mix-blend-mode: difference; */
    pointer-events: none;
    box-shadow: 1px 1px 7px 1px black;
    transition: width 0.9s, height 0.9s ease-in-out !important;
}

@media (max-width: 489px) {
    .outer-cursor {
        display: none;
    }
    
    .inner-cursor {
        display: none;
    }
}

    
</style>