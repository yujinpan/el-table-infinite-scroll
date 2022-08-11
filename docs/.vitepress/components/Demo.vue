<template>
  <div class="demo">
    <div ref="demoExampleWrapper">
      <div ref="demoExampleContent">
        <component ref="component" :is="component" />
      </div>
    </div>
    <details v-if="code" class="custom-block details">
      <summary>Click me to view the code</summary>
      <span v-html="code"></span>
    </details>
  </div>
</template>

<script>
import raws from './raws';

export default {
  props: {
    component: String,
  },
  data() {
    return {
      code: raws[this.component],
    };
  },
  methods: {
    renderShadowStyle(shadowElem) {
      const baseStyle = document.createElement('style');
      baseStyle.type = 'text/css';
      baseStyle.innerHTML = `
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

ul,
ol {
  list-style: none;
}
      `;

      const componentStyle = Array.from(
        document.head.querySelectorAll('style,link')
      );

      [baseStyle, ...componentStyle].forEach((item) => {
        shadowElem.appendChild(item.cloneNode(true));
      });
    },
    renderShadowComponent(shadowElem) {
      shadowElem.appendChild(this.$refs.demoExampleContent);
    },
  },
  mounted() {
    this.$nextTick(() => {
      const elem = this.$refs.demoExampleWrapper.attachShadow({ mode: 'open' });
      this.renderShadowStyle(elem);
      this.renderShadowComponent(elem);
    });
  },
};
</script>

<style lang="scss">
@import '../styles/var.scss';

.demo {
  border: 1px solid var(--vp-c-divider-light);
  border-radius: $spacing-base;
  padding: $spacing-medium $spacing-medium 0;
  margin: $spacing-medium 0;

  // set demo examples code font size same with normal
  div[class*='language-'] {
    font-size: 16px;
  }

  .details {
    margin-top: $spacing-medium;
  }
}
</style>
