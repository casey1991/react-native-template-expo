export default {
        "meta": {
            "scope": "all",
            "parameters": {
                "minWidth": {
                    "type": "number"
                },
                "minHeight": {
                    "type": "number"
                },
                "paddingHorizontal": {
                    "type": "number"
                },
                "paddingVertical": {
                    "type": "number"
                },
                "borderRadius": {
                    "type": "number"
                },
                "borderColor": {
                    "type": "string"
                },
                "borderWidth": {
                    "type": "number"
                },
                "backgroundColor": {
                    "type": "string"
                },
                "textMarginHorizontal": {
                    "type": "number"
                },
                "textFontSize": {
                    "type": "number"
                },
                "textLineHeight": {
                    "type": "number"
                },
                "textFontWeight": {
                    "type": "string"
                },
                "textColor": {
                    "type": "string"
                },
                "iconWidth": {
                    "type": "number"
                },
                "iconHeight": {
                    "type": "number"
                },
                "iconTintColor": {
                    "type": "string"
                },
                "iconMarginHorizontal": {
                    "type": "number"
                }
            },
            "appearances": {
                "filled": {
                    "default": true
                },
                "outline": {
                    "default": false
                },
                "ghost": {
                    "default": false
                }
            },
            "variantGroups": {
                "status": {
                    "primary": {
                        "default": true
                    },
                    "success": {
                        "default": false
                    },
                    "info": {
                        "default": false
                    },
                    "warning": {
                        "default": false
                    },
                    "danger": {
                        "default": false
                    },
                    "white": {
                        "default": false
                    }
                },
                "size": {
                    "tiny": {
                        "default": false
                    },
                    "small": {
                        "default": false
                    },
                    "medium": {
                        "default": true
                    },
                    "large": {
                        "default": false
                    },
                    "giant": {
                        "default": false
                    }
                }
            },
            "states": {
                "disabled": {
                    "default": false,
                    "priority": 0,
                    "scope": "all"
                },
                "active": {
                    "default": false,
                    "priority": 1,
                    "scope": "all"
                }
            }
        },
        "appearances": {
            "filled": {
                "mapping": {
                    "borderRadius": 4,
                    "borderWidth": 2,
                    "textColor": "text-control-color",
                    "iconTintColor": "text-control-color",
                    "iconMarginHorizontal": 4,
                    "state": {
                        "disabled": {
                            "borderColor": "border-basic-color-3",
                            "backgroundColor": "border-basic-color-3",
                            "textColor": "text-disabled-color",
                            "iconTintColor": "text-disabled-color"
                        }
                    }
                },
                "variantGroups": {
                    "status": {
                        "primary": {
                            "borderColor": "color-primary-default",
                            "backgroundColor": "color-primary-default",
                            "state": {
                                "active": {
                                    "borderColor": "color-primary-active",
                                    "backgroundColor": "color-primary-active"
                                }
                            }
                        },
                        "success": {
                            "borderColor": "color-success-default",
                            "backgroundColor": "color-success-default",
                            "state": {
                                "active": {
                                    "borderColor": "color-success-active",
                                    "backgroundColor": "color-success-active"
                                }
                            }
                        },
                        "info": {
                            "borderColor": "color-info-default",
                            "backgroundColor": "color-info-default",
                            "state": {
                                "active": {
                                    "borderColor": "color-info-active",
                                    "backgroundColor": "color-info-active"
                                }
                            }
                        },
                        "warning": {
                            "borderColor": "color-warning-default",
                            "backgroundColor": "color-warning-default",
                            "state": {
                                "active": {
                                    "borderColor": "color-warning-active",
                                    "backgroundColor": "color-warning-active"
                                }
                            }
                        },
                        "danger": {
                            "borderColor": "color-danger-default",
                            "backgroundColor": "color-danger-default",
                            "state": {
                                "active": {
                                    "borderColor": "color-danger-active",
                                    "backgroundColor": "color-danger-active"
                                }
                            }
                        },
                        "white": {
                            "backgroundColor": "color-white",
                            "textColor": "color-primary-default",
                            "iconTintColor": "color-primary-default",
                            "state": {
                                "active": {
                                    "backgroundColor": "color-white",
                                    "textColor": "color-primary-active",
                                    "iconTintColor": "color-primary-active"
                                },
                                "disabled": {
                                    "backgroundColor": "color-white",
                                    "textColor": "color-primary-disabled",
                                    "iconTintColor": "color-primary-disabled"
                                }
                            }
                        }
                    },
                    "size": {
                        "tiny": {
                            "minWidth": 24,
                            "minHeight": 24,
                            "paddingHorizontal": 6,
                            "paddingVertical": 6,
                            "textFontSize": 10,
                            "textLineHeight": 12,
                            "textFontWeight": "bold",
                            "textMarginHorizontal": 6,
                            "iconWidth": 12,
                            "iconHeight": 12,
                            "iconMarginHorizontal": 6
                        },
                        "small": {
                            "minHeight": 32,
                            "minWidth": 32,
                            "paddingHorizontal": 8,
                            "paddingVertical": 8,
                            "textFontSize": 12,
                            "textLineHeight": 16,
                            "textFontWeight": "bold",
                            "textMarginHorizontal": 8,
                            "iconWidth": 16,
                            "iconHeight": 16,
                            "iconMarginHorizontal": 8
                        },
                        "medium": {
                            "minHeight": 40,
                            "minWidth": 40,
                            "paddingHorizontal": 10,
                            "paddingVertical": 12,
                            "textFontSize": 14,
                            "textLineHeight": 16,
                            "textFontWeight": "bold",
                            "textMarginHorizontal": 10,
                            "iconWidth": 16,
                            "iconHeight": 16,
                            "iconMarginHorizontal": 10
                        },
                        "large": {
                            "minHeight": 48,
                            "minWidth": 48,
                            "paddingHorizontal": 10,
                            "paddingVertical": 14,
                            "textFontSize": 16,
                            "textLineHeight": 20,
                            "textFontWeight": "bold",
                            "textMarginHorizontal": 10,
                            "iconWidth": 20,
                            "iconHeight": 20,
                            "iconMarginHorizontal": 10
                        },
                        "giant": {
                            "minHeight": 56,
                            "minWidth": 56,
                            "paddingHorizontal": 12,
                            "paddingVertical": 16,
                            "textFontSize": 18,
                            "textLineHeight": 24,
                            "textMarginHorizontal": 12,
                            "iconWidth": 24,
                            "iconHeight": 24,
                            "iconMarginHorizontal": 12
                        }
                    }
                }
            },
            "outline": {
                "mapping": {
                    "state": {
                        "disabled": {
                            "backgroundColor": "background-basic-color-2"
                        }
                    }
                },
                "variantGroups": {
                    "status": {
                        "primary": {
                            "backgroundColor": "background-basic-color-2",
                            "textColor": "text-primary-color",
                            "iconTintColor": "text-primary-color",
                            "state": {
                                "active": {
                                    "backgroundColor": "background-basic-color-2",
                                    "textColor": "text-primary-active-color",
                                    "iconTintColor": "text-primary-active-color"
                                }
                            }
                        },
                        "success": {
                            "backgroundColor": "background-basic-color-2",
                            "textColor": "text-success-color",
                            "iconTintColor": "text-success-color",
                            "state": {
                                "active": {
                                    "backgroundColor": "background-basic-color-2",
                                    "textColor": "text-success-active-color",
                                    "iconTintColor": "text-success-active-color"
                                }
                            }
                        },
                        "info": {
                            "backgroundColor": "background-basic-color-2",
                            "textColor": "text-info-color",
                            "iconTintColor": "text-info-color",
                            "state": {
                                "active": {
                                    "backgroundColor": "background-basic-color-2",
                                    "textColor": "text-info-active-color",
                                    "iconTintColor": "text-info-active-color"
                                }
                            }
                        },
                        "warning": {
                            "backgroundColor": "background-basic-color-2",
                            "textColor": "text-warning-color",
                            "iconTintColor": "text-warning-color",
                            "state": {
                                "active": {
                                    "backgroundColor": "background-basic-color-2",
                                    "textColor": "text-warning-active-color",
                                    "iconTintColor": "text-warning-active-color"
                                }
                            }
                        },
                        "danger": {
                            "backgroundColor": "background-basic-color-2",
                            "textColor": "text-danger-color",
                            "iconTintColor": "text-danger-color",
                            "state": {
                                "active": {
                                    "backgroundColor": "background-basic-color-2",
                                    "textColor": "text-danger-active-color",
                                    "iconTintColor": "text-danger-active-color"
                                }
                            }
                        },
                        "white": {
                            "backgroundColor": "transparent",
                            "state": {
                                "active": {
                                    "backgroundColor": "transparent"
                                },
                                "disabled": {
                                    "backgroundColor": "transparent",
                                    "borderColor": "transparent",
                                    "textColor": "text-primary-disabled-color"
                                }
                            }
                        }
                    }
                }
            },
            "ghost": {
                "mapping": {
                    "state": {
                        "disabled": {
                            "backgroundColor": "transparent"
                        }
                    }
                },
                "variantGroups": {
                    "status": {
                        "primary": {
                            "borderColor": "transparent",
                            "backgroundColor": "transparent",
                            "textColor": "text-primary-color",
                            "iconTintColor": "text-primary-color",
                            "state": {
                                "active": {
                                    "borderColor": "transparent",
                                    "backgroundColor": "transparent",
                                    "textColor": "text-primary-active-color",
                                    "iconTintColor": "text-primary-active-color"
                                },
                                "disabled": {
                                    "borderColor": "transparent"
                                }
                            }
                        },
                        "success": {
                            "borderColor": "transparent",
                            "backgroundColor": "transparent",
                            "textColor": "text-success-color",
                            "iconTintColor": "text-success-color",
                            "state": {
                                "active": {
                                    "borderColor": "transparent",
                                    "backgroundColor": "transparent",
                                    "textColor": "text-success-active-color",
                                    "iconTintColor": "text-success-active-color"
                                },
                                "disabled": {
                                    "borderColor": "transparent"
                                }
                            }
                        },
                        "info": {
                            "borderColor": "transparent",
                            "backgroundColor": "transparent",
                            "textColor": "text-info-color",
                            "iconTintColor": "text-info-color",
                            "state": {
                                "active": {
                                    "borderColor": "transparent",
                                    "backgroundColor": "transparent",
                                    "textColor": "text-info-active-color",
                                    "iconTintColor": "text-info-active-color"
                                },
                                "disabled": {
                                    "borderColor": "transparent"
                                }
                            }
                        },
                        "warning": {
                            "borderColor": "transparent",
                            "backgroundColor": "transparent",
                            "textColor": "text-warning-color",
                            "iconTintColor": "text-warning-color",
                            "state": {
                                "active": {
                                    "borderColor": "transparent",
                                    "backgroundColor": "transparent",
                                    "textColor": "text-warning-active-color",
                                    "iconTintColor": "text-warning-active-color"
                                },
                                "disabled": {
                                    "borderColor": "transparent"
                                }
                            }
                        },
                        "danger": {
                            "borderColor": "transparent",
                            "backgroundColor": "transparent",
                            "textColor": "text-danger-color",
                            "iconTintColor": "text-danger-color",
                            "state": {
                                "active": {
                                    "borderColor": "transparent",
                                    "backgroundColor": "transparent",
                                    "textColor": "text-danger-active-color",
                                    "iconTintColor": "text-danger-active-color"
                                },
                                "disabled": {
                                    "borderColor": "transparent"
                                }
                            }
                        },
                        "white": {
                            "backgroundColor": "transparent",
                            "state": {
                                "active": {
                                    "backgroundColor": "transparent"
                                },
                                "disabled": {
                                    "backgroundColor": "transparent",
                                    "textColor": "text-primary-disabled-color"
                                }
                            }
                        }
                    }
                }
            }
        }
};
