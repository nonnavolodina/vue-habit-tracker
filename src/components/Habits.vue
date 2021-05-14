<template>
    <div v-if="habit.length > 0" class="habits">
        <ul class="habits__container">
            <li class="habit" @click="showStyleOnClick" :style="isClicked ? style : 'background-color: #EEE'">{{ habit }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isClicked: false
        }
    },
    props: {
        habit: String,
        timeline: String,
        count: Number,
        daysOfTheWeek: Array,
        colour: String,
    },
    computed: {
        style() {
            return 'background-color: ' + this.colour

        }
    },
    methods: {
        showStyleOnClick() {
            this.isClicked = !this.isClicked;
        }
    }
};
</script>
