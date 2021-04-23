<template>
    <div class="habit-track">
        <div class="habit-track__form">
            <input v-model="habit" @input="setHabit" @keyup.enter="showTimelinePrompt" placeholder="Examples: walk 30 minutes a day, drink more water" class="habit-track__input" type="text">
            <button @click="showTimelinePrompt" class="habit-track__submit">Submit</button>
        </div>
        <div class="habit-tracking-prompts">
            <div v-if="timelineHidden === true" class="timeline">
                <p class="timeline__description">How often do you want to {{ habit }}?</p>
                <div class="timeline__form">
                    <div class="timeline__radio">
                        <input id="daily" class="timeline__input" type="radio" name="timeline" value="day" v-model="timeline" @click="showGoalPrompt">
                        <label for="daily" class="timeline__label">Daily</label>
                    </div>
                    <div class="timeline__radio">
                        <input id="weekly" class="timeline__input" type="radio" name="timeline" value="week" v-model="timeline" @click="showGoalPrompt">
                        <label for="weekly" class="timeline__label">Weekly</label>
                    </div>
                </div>
            </div>
            <div v-if="timeline === 'week'" class="weekly-schedule">
                <p class="weekly-schedule__description">Which days of the week do you want to {{ habit }}?</p>
                <div class="weekly-schedule__form">
                    <div class="weekly-schedule__checkbox">
                        <input id="sunday" class="weekly__schedule" type="checkbox" name="week" value="sunday" v-model="daysOfTheWeek" @click="showColoursPrompt">
                        <label for="sunday" class="weekly-schedule__label">Sunday</label>
                    </div>
                    <div class="weekly-schedule__checkbox">
                        <input id="monday" class="weekly__schedule" type="checkbox" name="week" value="monday" v-model="daysOfTheWeek" @click="showColoursPrompt">
                        <label for="monday" class="weekly-schedule__label">Monday</label>
                    </div>
                    <div class="weekly-schedule__checkbox">
                        <input id="tuesday" class="weekly__schedule" type="checkbox" name="week" value="tuesday" v-model="daysOfTheWeek" @click="showColoursPrompt">
                        <label for="tuesday" class="weekly-schedule__label">Tuesday</label>
                    </div>
                    <div class="weekly-schedule__checkbox">
                        <input id="wednesday" class="weekly__schedule" type="checkbox" name="week" value="wednesday" v-model="daysOfTheWeek" @click="showColoursPrompt">
                        <label for="wednesday" class="weekly-schedule__label">Wednesday</label>
                    </div>
                    <div class="weekly-schedule__checkbox">
                        <input id="thursday" class="weekly__schedule" type="checkbox" name="week" value="thursday" v-model="daysOfTheWeek" @click="showColoursPrompt">
                        <label for="thursday" class="weekly-schedule__label">Thursday</label>
                    </div>
                    <div class="weekly-schedule__checkbox">
                        <input id="friday" class="weekly__schedule" type="checkbox" name="week" value="friday" v-model="daysOfTheWeek" @click="showColoursPrompt">
                        <label for="friday" class="weekly-schedule__label">Friday</label>
                    </div>
                    <div class="weekly-schedule__checkbox">
                        <input id="saturday" class="weekly__schedule" type="checkbox" name="week" value="saturday" v-model="daysOfTheWeek" @click="showColoursPrompt">
                        <label for="saturday" class="weekly-schedule__label">Saturday</label>
                    </div>
                </div>
            </div>
            <div v-if="coloursHidden === true || timeline === 'day'" class="colour">
                <p class="colour__description">Pick a colour for your {{ habit }} goal:</p>
                <div class="colour__form">
                    <div class="colour__radio">
                        <input id="red" class="colur__input colour__input--red;" type="radio" name="colur" value="red" v-model="colur">
                        <label for="red">
                            <span class="colour__label red"></span>
                        </label>
                    </div>
                    <div class="colour__radio">
                        <input id="green" class="colour__input" type="radio" name="colour" value="green" v-model="colour">
                        <label for="green">
                            <span class="colour__label green"></span>
                        </label>
                    </div>
                    <div class="colour__radio">
                        <input id="yellow" class="colour__input" type="radio" name="colour" value="yellow" v-model="colour">
                        <label for="yellow">
                            <span class="colour__label yellow"></span>
                        </label>
                    </div>
                    <div class="colour__radio">
                        <input id="olive" class="colour__input" type="radio" name="colour" value="olive" v-model="colour">
                        <label for="olive">
                            <span class="colour__label olive"></span>
                        </label>
                    </div>
                    <div class="colour__radio">
                        <input id="orange" class="colour__input" type="radio" name="colour" value="orange" v-model="colour">
                        <label for="orange">
                            <span class="colour__label orange"></span>
                        </label>
                    </div>
                    <div class="colour__radio">
                        <input id="teal" class="colour__input" type="radio" name="colour" value="teal" v-model="colour">
                        <label for="teal">
                            <span class="colour__label teal"></span>
                        </label>
                    </div>
                    <div class="colour__radio">
                        <input id="blue" class="colour__input" type="radio" name="colour" value="blue" v-model="colour">
                        <label for="blue">
                            <span class="colour__label blue"></span>
                        </label>
                    </div>
                    <div class="colour__radio">
                        <input id="violet" class="colour__input" type="radio" name="colour" value="violet" v-model="colour">
                        <label for="violet">
                            <span class="colour__label violet"></span>
                        </label>
                    </div>
                    <div class="colour__radio">
                        <input id="purple" class="colour__input" type="radio" name="colour" value="purple" v-model="colour">
                        <label for="purple">
                            <span class="colour__label purple"></span>
                        </label>
                    </div>
                    <div class="colour__radio">
                        <input id="pink" class="colour__input" type="radio" name="colour" value="pink" v-model="colour">
                        <label for="pink">
                            <span class="colour__label pink"></span>
                        </label>
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
            timelineHidden: false,
            timeline: '',
            daysOfTheWeek: [],
            weeklyScheduleHidden: false,
            colour: '',
            coloursHidden: false
        };
    },
    methods: {
        setHabit(event) {
            this.habit = event.target.value;
        },
        showTimelinePrompt() {
            this.timelineHidden = !this.timelineHidden;
        },
        showWeeklySchedulePrompt() {
            this.weeklyScheduleHidden = !this.weeklyScheduleHidden;
        },
        showColoursPrompt() {
            this.coloursHidden = !this.coloursHidden;
        }
    },

};
</script>
