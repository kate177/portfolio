<template>
  <nav>
    <div>
      <select v-model="lang" @change="handleChange($event)">
        <option value="en">English</option>

        <option value="ru">Русский</option>
      </select>
    </div>
  </nav>
</template>

<script>
export default {
  data: function () {
    const lang = localStorage.getItem("lang") || "ru";
    return {
      lang: lang,
    };
  },
  methods: {
    handleChange(event) {
      localStorage.setItem("lang", event.target.value);
      this.$i18n.locale = this.lang;
    },
  },
  mounted() {
    this.$i18n.locale = this.lang;
  },
};
</script>

<style lang="scss">
select {
  background-color: var(--app-background-body);
  color: var(--app-title-color);
}
</style>
