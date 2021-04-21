<template>
	<header class="header">
        <h1 class="header__title">Vue Habit Tracker</h1>
    </header>
	<main class="app">
        <p class="app__prompt">What habit would you like to track?</p>
        <div class="form">
            <input class="form__input" type="text">
            <button class="form__submit">Submit</button>
        </div>
	</main>
	<footer>
        <p>footer</p>
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
