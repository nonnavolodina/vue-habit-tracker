<template>
    <div>
        <ul>
            <li>{{ habit }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        habit: String,
        timeline: String,
        daysOfTheWeek: Array,
        colour: String,
    }
};
</script>
