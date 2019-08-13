editor.block("timeline", {
  label: "Timeline",

  icon: "check",

  props: {
    content: String,
    attrs: [Array, Object]
  },

  computed: {
    fields() {
      return {
        title: {
          label: "Title",
          type: "text",
          icon: "text"
        },
        css: {
          label: this.$t("editor.blocks.image.css.label"),
          type: "text",
          icon: "code"
        },
        iconCode: {
          label: "Icon Code",
          type: "text",
          icon: "code"
        }
      };
    }
  },

  methods: {
    focus(cursor) {
      this.$refs.input.focus(cursor);
    },
    onBack(event) {
      this.$emit("back", event);
    },
    onCheck() {
      this.$emit("input", {
        attrs: {
          done: !this.attrs.done
        }
      });
    },
    onEnter() {
      if (this.content.length === 0) {
        this.$emit("convert", "paragraph");
      } else {
        this.$emit("append", {
          type: "timeline"
        });
      }
    },
    onInput(html) {
      this.$emit("input", {
        content: html
      });
    },
    onNext(cursor) {
      this.$emit("next", cursor);
    },
    onPrev(cursor) {
      this.$emit("prev", cursor);
    },
    onSplit(data) {
      this.$emit("split", data);
    },

    saveSettings() {
      this.$refs.settings.close();
      this.input(this.attrs);
    },

    input(data) {
      this.$emit("input", {
        attrs: {
          ...this.attrs,
          ...data
        }
      });
    },

    menu() {
      return [
        {
          icon: "cog",
          label: "Timeline Settings",
          click: this.$refs.settings.open
        }
      ];
    }
  },
  template: `
    <p>
      <span style="font-weight: bold">{{ attrs.title }}</span>
      <k-editable
        ref="input"
        :content="content"
        @back="onBack"
        @enter="onEnter"
        @input="onInput"
        @next="onNext"
        @prev="onPrev"
        @split="onSplit"
      />
      <k-dialog ref="settings" @submit="saveSettings" size="medium">
        <k-form :fields="fields" v-model="attrs" @submit="saveSettings" />
      </k-dialog>
    </p>
  `
});
