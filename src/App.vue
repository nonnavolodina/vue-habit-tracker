<template>
	<main class="app">
        <div class="app__description">
            <p class="app__description-copy">
                Vue Habit Tracker is a simple app built using the Vue CLI. Enter a habit that you would like to work on (e.g., drink 8 glasses of water, go for a 30 minute walk, go to bed by 9 o'clock PM), and follow the prompts to let the Vue Habit Tracker help you stay on top of your goals and lead a more productive lifestyle.
            </p>
            <p class="app__description-copy">Expert tip: Make sure your habit goal is specific. Instead of 'drink more water', your habit should aim for a certain goal. So instead of 'drink more water', you should try 'drink 8 glasses of water a day'.</p>
        </div>
        <p class="app__prompt">What habit would you like to track?</p>
        <habit-track></habit-track>
	</main>
</template>

<script>

export default {
	name: 'App',
}
</script>

<style lang="scss">
	@import "./styles/styles.scss";
</style>
