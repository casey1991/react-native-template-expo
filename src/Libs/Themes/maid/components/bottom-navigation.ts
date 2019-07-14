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
      backgroundColor: {
        type: "string"
      },
      borderTopColor: {
        type: "string"
      },
      borderTopWidth: {
        type: "number"
      },
      indicatorHeight: {
        type: "number"
      },
      indicatorBackgroundColor: {
        type: "string"
      }
    },
    appearances: {
      default: {
        default: true
      },
      noIndicator: {
        default: false
      }
    },
    variantGroups: {},
    states: {}
  },
  appearances: {
    default: {
      mapping: {
        minHeight: 56,
        paddingVertical: 4,
        backgroundColor: "background-basic-color-1",
        indicatorHeight: 4,
        indicatorBackgroundColor: "background-basic-color-1"
        // indicatorBackgroundColor: "color-primary-default"
      }
    },
    noIndicator: {
      mapping: {
        indicatorHeight: 0,
        indicatorBackgroundColor: "transparent"
      }
    }
  }
};
