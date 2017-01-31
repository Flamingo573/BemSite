([{
    tag: 'html',
    content: [{
            tag: 'head',
            content: [{
                    tag: 'meta',
                    attrs: {
                        charset: 'utf-8'
                    }
                },
                {
                    tag: 'title',
                    content: 'BemSite'
                },
                {
                    tag: 'link',
                    attrs: {
                        rel: 'stylesheet',
                        href: 'styles.css'
                    }
                },
                {
                    tag: 'script',
                    attrs: {
                        src: 'https://yastatic.net/bem-core/latest/desktop/bem-core.js+bemhtml.js'
                    }
                },

                {
                    tag: 'script',
                    attrs: {
                        src: 'app.min.js'
                    }
                }



            ]
        },
        {
            block: 'page',
            tag: 'body',
            content: [{
                    block: 'side-bar',
                    content: [{
                            block: 'logo',
                            tag: 'a',
                            attrs: [{
                                href: '#'
                            }],
                            content: 'CreativeCRM'
                        },
                        {
                            block: 'menu-side-bar',
                            tag: 'nav',
                            content: [{
                                block: 'item-list',
                                tag: 'ul',
                                content: [{
                                        elem: 'item',
                                        content: [{
                                            elem: 'link',
                                            tag: 'a',
                                            attrs: {
                                                href: '#'
                                            },
                                            content: 'Dashboard',
                                            elemMods: {
                                                icon: 'dash'
                                            }
                                        }]
                                    },
                                    {
                                        elem: 'item',
                                        content: [{
                                            elem: 'link',
                                            tag: 'a',
                                            attrs: {
                                                href: '#'
                                            },
                                            content: 'Reports',
                                            elemMods: {
                                                icon: 'rep'
                                            }
                                        }]
                                    },
                                    {
                                        elem: 'item',
                                        elemMods: {
                                            active: true
                                        },
                                        content: [{
                                            elem: 'link',
                                            tag: 'a',
                                            attrs: {
                                                href: '#'
                                            },
                                            content: 'Customers',
                                            elemMods: {
                                                icon: 'cust'
                                            }
                                        }]
                                    },
                                    {
                                        elem: 'item',
                                        content: [{
                                            elem: 'link',
                                            tag: 'a',
                                            attrs: {
                                                href: '#'
                                            },
                                            content: 'Calendar',
                                            elemMods: {
                                                icon: 'cal'
                                            }
                                        }]
                                    },
                                    {
                                        elem: 'item',
                                        content: [{
                                            elem: 'link',
                                            tag: 'a',
                                            attrs: {
                                                href: '#'
                                            },
                                            content: 'Tasks',
                                            elemMods: {
                                                icon: 'task'
                                            }
                                        }]
                                    }

                                ]

                            }]
                        }
                    ]
                },
                {
                    block: 'main-content',
                    content: [{
                            block: 'info-line',
                            tag: 'header',
                            content: [{
                                    block: 'breadcrumb',
                                    tag: 'ul',
                                    content: [{
                                            elem: 'crumb',
                                            tag: 'li',
                                            content: {
                                                elem: 'link',
                                                tag: 'a',
                                                attrs: {
                                                    href: '#'
                                                },
                                                content: 'Customers'
                                            }
                                        },
                                        {
                                            elem: 'crumb',
                                            tag: 'li',
                                            content: {
                                                elem: 'link',
                                                tag: 'a',
                                                attrs: {
                                                    href: '#'
                                                },
                                                content: 'Max Jones'
                                            }
                                        }
                                    ]

                                },
                                {
                                    block: 'search-field',
                                    tag: 'form',
                                    mix: {
                                        block: 'info-line',
                                        elem: 'search-field'
                                    },
                                    content: [{
                                            elem: 'input',
                                            tag: 'input',
                                            attrs: {
                                                type: 'input',
                                                placeholder: 'SEARCH'
                                            }
                                        },
                                        {
                                            elem: 'search-btn',
                                            tag: 'input',
                                            attrs: {
                                                type: 'submit',
                                                value: ''
                                            }
                                        }
                                    ]

                                },
                                {
                                    block: 'notify-wrapper',
                                    content: [{
                                            block: 'notify-block',
                                            mods: {
                                                type: 'message',
                                                new: true
                                            }
                                        },
                                        {
                                            block: 'notify-block',
                                            mods: {
                                                type: 'notify'
                                            }
                                        },
                                    ]
                                },
                                {
                                    block: 'user',
                                    content: [{
                                            elem: 'avatar-user',
                                            tag: 'img',
                                            attrs: {
                                                src: 'image/avatar-user.png',
                                                alt: 'Your photo'
                                            }
                                        },
                                        {
                                            elem: 'username',
                                            tag: 'span',
                                            content: 'Hello Lauren'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            block: 'customer',
                            mix: {block: 'main-content', elem: 'customer'},
                            content: [{
                                    block: 'customer-avatar',
                                    content: {
                                        elem: 'avatar',
                                        tag: 'img',
                                        attrs: {
                                            src: 'image/customer-avatar.png',
                                            alt: 'Customer-avatar'
                                        }
                                    }
                                },
                                {
                                    block: 'customer-worksheet',
                                    content: [{
                                            block: 'customer-headline',
                                            content: [{
                                                    block: 'customer-info',
                                                    content: [{
                                                            block: 'status-name',
                                                            content: [{
                                                                elem: 'name',
                                                                content: 'MAX JONES'
                                                            }],
                                                            mods: {
                                                                type: 'gold'
                                                            }
                                                        },
                                                        {
                                                            elem: 'organization',
                                                            content: 'Sales & Marketing'
                                                        }
                                                    ]
                                                },
                                                {
                                                    block: 'social',
                                                    content: [{
                                                            elem: 'headline',
                                                            content: 'INVITE TO SOCIAL'
                                                        },
                                                        {
                                                            block: 'social-links',
                                                            content: [{
                                                                    elem: 'link',
                                                                    tag: 'a',
                                                                    attrs: {
                                                                        href: 'https://ru.linkedin.com/'
                                                                    },
                                                                    elemMods: {
                                                                        'linkedin': true
                                                                    }
                                                                },
                                                                {
                                                                    elem: 'link',
                                                                    tag: 'a',
                                                                    attrs: {
                                                                        href: 'https://ru.linkedin.com/'
                                                                    },
                                                                    elemMods: {
                                                                        'facebook': true
                                                                    }
                                                                },
                                                                {
                                                                    elem: 'link',
                                                                    tag: 'a',
                                                                    attrs: {
                                                                        href: 'https://ru.linkedin.com/'
                                                                    },
                                                                    elemMods: {
                                                                        'twitter': true
                                                                    }
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            block: 'contact-info',
                                            tag: 'form',
                                            content: [{
                                                    block: 'contact-field',
                                                    mods: {
                                                        phone: true
                                                    },
                                                    attrs: {
                                                        value: '(+31) 140 175 468',
                                                        type: 'tel',
                                                        required: true
                                                    }
                                                },
                                                {
                                                    block: 'contact-field',
                                                    mods: {
                                                        email: true
                                                    },
                                                    attrs: {
                                                        value: 'maxjones@gmail.com',
                                                        type: 'email',
                                                        required: true
                                                    }
                                                },
                                                {
                                                    block: 'contact-field',
                                                    mods: {
                                                        address: true
                                                    },
                                                    attrs: {
                                                        value: 'Binnenweg 50, Rotterdam',
                                                        type: 'text',
                                                        required: true
                                                    }
                                                },
                                                {
                                                    elem: 'save-btn',
                                                    tag: 'input',
                                                    attrs: {
                                                        type: 'submit',
                                                        value: 'Save'
                                                    }
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            block: 'customer-activity',
                            js: true,
                            content: [{
                                    elem: 'tabs',                                    
                                    content: [{
                                            elem: 'tab',
                                            content: 'OVERVIEW',
                                            elemMods: {
                                                selected: true
                                            },
                                            attrs: {'data-tab': 'overview'}
                                        },
                                        {
                                            elem: 'tab',
                                            content: 'ORDERS',
                                            attrs: {'data-tab': 'orders'}
                                        },
                                        {
                                            elem: 'tab',
                                            content: 'PAYMENTS',
                                            attrs: {'data-tab': 'payments'}
                                        },
                                        {
                                            elem: 'tab',
                                            content: 'INTERACTIONS',
                                            attrs: {'data-tab': 'interactions'}
                                        },
                                        {
                                            elem: 'tab',
                                            content: 'CUSTOMER FEEDBACK',
                                            attrs: {'data-tab': 'feedback'}
                                        }
                                    ]
                                },
                                {
                                    elem: 'content',
                                    elemMods: {on: 'overview'},
                                    content: [
                                      {
                                        elem: 'overview',
                                        content: [{
                                                block: 'customer-happiness'
                                            },
                                            {
                                                block: 'total-turnover'
                                            },
                                            {
                                                block: 'customer-state',
                                            }
                                        ]
                                    },
                                    {
                                      elem: 'orders',
                                      content: 'Orders page'
                                    },
                                    {
                                      elem: 'payments',
                                      content: 'Payments page'
                                    },
                                    {
                                      elem: 'interactions',
                                      content: 'Interactions page'
                                    },
                                    {
                                      elem: 'Feedback',
                                      content: 'Feedback page'
                                    }
                                  ]
                                }

                            ]
                        }
                    ]
                }
            ]
        }
    ]
}])
