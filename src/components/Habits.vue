<template>
    <div v-if="habit.length > 0" class="habits">
        <ul class="habits__container">
            <li class="habit">{{ habit }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        habit: String,
        timeline: String,
        count: Number,
        daysOfTheWeek: Array,
        colour: String,
    }
};
</script>
