<template>
	<header class="header">
        <h1 class="header__title">Vue Habit Tracker</h1>
    </header>
	<main class="app">
        <p class="app__description">Vue Habit Tracker is a simple app built using the Vue CLI. Enter a habit that you would like to work on (e.g., drink more water, walk 30 minutes a day, go to bed by 10 o'clock PM), and follow the prompts to let the Vue Habit Tracker help you stay on top of your goals and lead a more productive lifestyle.</p>
        <p class="app__prompt">What habit would you like to track?</p>
        <habit-track></habit-track>
	</main>
	<footer class="footer">
        <div class="social">
            <a class="social__links" href="https://ca.linkedin.com/in/nonna-volodina-83367054" target="_blank">
                <i class="social__icons fab fa-linkedin-in"></i>
            </a>
            <a class="social__links" href="https://github.com/nonnavolodina" target="_blank">
                <i class="social__icons fab fa-github"></i>
            </a>
        </div>
        <p class="footer__copyright">&copy; <a class="footer__link" href="http://nvolodina.com/">Nonna Volodina</a> 2021 </p>
    </footer>
</template>

<script>

export default {
	name: 'App',
}
</script>

<style lang="scss">
	@import "./styles/styles.scss";
</style>
