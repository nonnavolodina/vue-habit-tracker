<template>
	<main class="app">
        <p class="app__description">Vue Habit Tracker is a simple app built using the Vue CLI. Enter a habit that you would like to work on (e.g., drink more water, walk 30 minutes a day, go to bed by 10 o'clock PM), and follow the prompts to let the Vue Habit Tracker help you stay on top of your goals and lead a more productive lifestyle.</p>
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
