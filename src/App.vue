<template>
	<main class="app">
        <div class="app__description">
            <p class="app__description-copy">
                Vue Habit Tracker is a simple app built using the Vue CLI. Enter a habit that you would like to keep track of (e.g., drink 8 glasses of water, go for a 30 minute walk, go to bed by 9 o'clock PM), and follow the prompts to let the Vue Habit Tracker help you stay on top of your goals and lead a more productive lifestyle.
            </p>
        </div>
        <div class="app__main">
            <div class="app__form">
                <p class="app__prompt">What habit would you like to track?</p>
                <habit-track-form @add-habit="addHabit"></habit-track-form>
            </div>
            <div class="my-habits">
                <h2 class="my-habits__heading">Your Habits</h2>
                <habits 
                    v-for="hab in habits"
                    :key="hab.id"
                    :habit="hab.habit"
                    :count="hab.count"
                    :timeline="hab.timeline"
                    :daysOfTheWeek="hab.daysOfTheWeek"
                    :colour="hab.colour">
                </habits>
            </div>
        </div>
	</main>
</template>

<script>

export default {
	name: 'App',
    data() {
        return {
            habits: [
                {
                    id: null,
                    habit: '',
                    timeline: '',
                    count: 1,
                    daysOfTheWeek: [],
                    colour: '',
                },
            ],
        }
    },
    methods: {
        addHabit(habit, timeline, count, daysOfTheWeek, colour) {
            const newHabit = {
                id: new Date().toISOString(),
                habit: habit,
                timeline: timeline,
                count: count,
                daysOfTheWeek: daysOfTheWeek,
                colour: colour
            };
            this.habits.push(newHabit);
        },
    }
}
</script>

<style lang="scss">
	@import "./styles/styles.scss";
</style>
