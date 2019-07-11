export default {
  meta: {
    scope: "mobile",
    parameters: {
      minHeight: {
        type: "number"
      },
      paddingVertical: {
        type: "number"
      },
      paddingHorizontal: {
        type: "number"
      },
      backgroundColor: {
        type: "string"
      },
      borderBottomWidth: {
        type: "string"
      },
      borderBottomColor: {
        type: "string"
      },
      titleTextAlign: {
        type: "string"
      },
      titleFontSize: {
        type: "number"
      },
      titleLineHeight: {
        type: "number"
      },
      titleFontWeight: {
        type: "string"
      },
      titleColor: {
        type: "string"
      },
      subtitleTextAlign: {
        type: "string"
      },
      subtitleFontSize: {
        type: "number"
      },
      subtitleLineHeight: {
        type: "number"
      },
      subtitleFontWeight: {
        type: "string"
      },
      subtitleColor: {
        type: "string"
      }
    },
    appearances: {
      default: {
        default: true
      }
    },
    variantGroups: {
      alignment: {
        start: {
          default: true
        },
        center: {
          default: false
        }
      }
    },
    states: {}
  },
  appearances: {
    default: {
      mapping: {
        minHeight: 56,
        paddingVertical: 8,
        paddingHorizontal: 8,
        borderBottomWidth: 1,
        borderBottomColor: "background-basic-color-3",
        backgroundColor: "background-basic-color-1",
        titleFontSize: "text-subtitle-1-font-size",
        titleLineHeight: "text-subtitle-1-line-height",
        titleFontWeight: "text-subtitle-1-font-weight",
        titleColor: "text-basic-color",
        subtitleFontSize: "text-caption-1-font-size",
        subtitleLineHeight: "text-caption-1-line-height",
        subtitleFontWeight: "text-caption-1-font-weight",
        subtitleColor: "text-hint-color"
      },
      variantGroups: {
        alignment: {
          start: {
            titleTextAlign: "left",
            subtitleTextAlign: "left"
          },
          center: {
            titleTextAlign: "center",
            subtitleTextAlign: "center"
          }
        }
      }
    }
  }
};
