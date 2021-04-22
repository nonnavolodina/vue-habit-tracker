<template>
    <div class="habit-track">
        <div class="habit-track__form">
            <input v-model="habit" @input="setHabit" class="habit-track__input" type="text">
            <button @click="showHabitTrackingPrompts" class="habit-track__submit">Submit</button>
        </div>
        <div v-if="isHidden === true" class="habit-tracking-prompts">
            <div class="timeline">
                <p class="timeline__description">How often do you want to track this habit?</p>
                <div class="timeline__form">
                    <div class="timeline__radio">
                        <input id="daily" class="timeline__input" type="radio" name="timeline" value="daily" v-model="checked">
                        <label for="daily" class="timeline__label">Daily</label>
                    </div>
                    <div class="timeline__radio">
                        <input id="weekly" class="timeline__input" type="radio" name="timeline" value="weekly" v-model="checked">
                        <label for="weekly" class="timeline__label">Weekly</label>
                    </div>
                    <div class="timeline__radio">
                        <input id="monthly" class="timeline__input" type="radio" name="timeline" value="monthly" v-model="checked">
                        <label for="monthly" class="timeline__label">Monthly</label>
                    </div>
                    <div class="timeline__radio">
                        <input id="yearly" class="timeline__input" type="radio" name="timeline" value="yearly" v-model="checked">
                        <label for="yearly" class="timeline__label">Yearly</label>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            habit: '',
            isHidden: false,
            checked: ''
        };
    },
    methods: {
        setHabit(event) {
            this.habit = event.target.value;
        },
        showHabitTrackingPrompts() {
            this.isHidden = !this.isHidden;
        },
    },

};
</script>
