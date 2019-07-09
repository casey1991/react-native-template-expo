export default {
  meta: {
    scope: "mobile",
    parameters: {
      paddingHorizontal: {
        type: "number"
      },
      paddingVertical: {
        type: "number"
      },
      iconMarginVertical: {
        type: "number"
      },
      iconWidth: {
        type: "number"
      },
      iconHeight: {
        type: "number"
      },
      iconTintColor: {
        type: "string"
      },
      textMarginVertical: {
        type: "number"
      },
      textColor: {
        type: "string"
      },
      textFontSize: {
        type: "number"
      },
      textLineHeight: {
        type: "number"
      },
      textFontWeight: {
        type: "string"
      }
    },
    appearances: {
      default: {
        default: true
      }
    },
    variantGroups: {},
    states: {
      selected: {
        default: false,
        priority: 1,
        scope: "mobile"
      }
    }
  },
  appearances: {
    default: {
      mapping: {
        iconWidth: 24,
        iconHeight: 24,
        iconMarginVertical: 2,
        iconTintColor: "color-basic-500",
        textMarginVertical: 2,
        textFontSize: "text-caption-2-font-size",
        textLineHeight: "text-caption-2-line-height",
        textFontWeight: "text-caption-2-font-weight",
        textColor: "color-basic-600",
        state: {
          selected: {
            iconTintColor: "color-primary-default",
            textColor: "text-primary-color"
          }
        }
      }
    }
  }
};
