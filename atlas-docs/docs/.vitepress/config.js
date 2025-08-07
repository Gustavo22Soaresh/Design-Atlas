export default {
  title: 'Atlas',
  description: 'Atlas design system for OSM',
  ignoreDeadLinks: true,
  themeConfig: {
    nav: [
      { text: 'Using Atlas', link: '/using-atlas/accessing-atlas', activeMatch: '/using-atlas/' },
      { text: 'Contributing', link: '/contributing/overview', activeMatch: '/contributing/' },
      { text: 'Style Guide', link: '/style-guide/overview', activeMatch: '/style-guide/' },
      {
        text: 'Toolkit',
        items: [
          { text: 'Design tokens', link: '/design-tokens/overview', activeMatch: '/design-tokens/' },
          { text: 'Components', link: '/components/overview', activeMatch: '/components/' },
        ]
      }
    ],

    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/Gustavo22Soaresh/Design-Atlas',
        ariaLabel: 'Atlas on GitHub'
      }
    ],

    search: {
      provider: 'local',
      options: {
        miniSearch: {
          searchOptions: {
            fuzzy: 0.2,
            prefix: true,
            boost: {
              title: 50,
              text: 2,
              titles: 1
            }
          }
        }
      }
    },

    sidebar: {
      '/using-atlas/': [
        {
          text: 'Using Atlas',
          items: [
            { text: 'Accessing Atlas', link: '/using-atlas/accessing-atlas' },
            { text: 'Designing with Atlas', link: '/using-atlas/designing' },
            { text: 'Developing with Atlas', link: '/using-atlas/developing' },
            { text: 'Guiding principles', link: '/using-atlas/guiding-principles' },
            { text: 'Architecture decisions', link: '/using-atlas/adrs/overview' },
            { text: 'Contact', link: '/using-atlas/contact' }
          ]
        }
      ],
      '/contributing/': [
        {
          text: 'Getting started',
          items: [
            { text: 'How to contribute', link: '/contributing/overview' },
            { text: 'Design basics', link: '/contributing/design-basics' },
            { text: 'Development basics', link: '/contributing/development-basics' }
          ]
        },
        {
          text: 'Contributions',
          items: [
            { text: 'Documentation', link: '/contributing/contributing-documentation' },
            { text: 'Design Tokens', link: '/contributing/contributing-tokens' },
            { text: 'Icons', link: '/contributing/contributing-icons' },
            {
              text: 'Components',
              link: '/contributing/contributing-components',
              items: [
                { text: 'Reporting and validating', link: '/contributing/reporting-and-validating' },
                { text: 'Designing components', link: '/contributing/designing-components' },
                { text: 'Developing components', link: '/contributing/developing-components' },
                { text: 'Testing components', link: '/contributing/testing-components' },
                { text: 'Component demos', link: '/contributing/component-demos' },
                { text: 'Working with TypeScript', link: '/contributing/typescript' },
                { text: 'Reviewing and documenting', link: '/contributing/reviewing-and-documenting' }
              ]
            }
          ]
        }
      ],
      '/style-guide/': [
        {
          text: 'Style Guide',
          items: [
            { text: 'Overview', link: '/style-guide/overview' },
            { text: 'Statement of Purpose', link: '/style-guide/statement-of-purpose' }
          ]
        },
        {
          text: 'Design Principles',
          items: [
            { text: 'Overview', link: '/style-guide/design-principles-overview' },
            { text: 'Accessibility', link: '/style-guide/accessibility' },
            { text: 'Bidirectionality', link: '/style-guide/bidirectionality' }
          ]
        },
        {
          text: 'Visual Styles',
          items: [
            { text: 'Theme', link: '/style-guide/theme' },
            { text: 'Typography', link: '/style-guide/typography' },
            { text: 'Icons', link: '/style-guide/icons' },
            { text: 'Images', link: '/style-guide/images' },
            { text: 'Illustrations', link: '/style-guide/illustrations' }
          ]
        },
        {
          text: 'Layout Guidelines',
          items: [
            { text: 'Content overflow', link: '/style-guide/content-overflow' },
            { text: 'Using links and buttons', link: '/style-guide/using-links-and-buttons' },
            { text: 'Constructing forms', link: '/style-guide/constructing-forms' }
          ]
        },
        {
          text: 'Content Guidelines',
          items: [
            { text: 'Voice and tone', link: '/style-guide/voice-and-tone' },
            { text: 'Writing for copy', link: '/style-guide/writing-for-copy' },
            { text: 'Additional resources', link: '/style-guide/additional-resources' }
          ]
        }
      ],
      '/design-tokens/': [
        {
          text: 'Design tokens',
          items: [
            { text: 'Overview', link: '/design-tokens/overview' },
            { text: 'Definition and structure', link: '/design-tokens/definition-and-structure' }
          ]
        },
        {
          text: '',
          items: [
            { text: 'Border', link: '/design-tokens/border' },
            { text: 'Box-shadow', link: '/design-tokens/box-shadow' },
            { text: 'Colors', link: '/design-tokens/colors' },
            { text: 'Cursor', link: '/design-tokens/cursor' },
            { text: 'Font', link: '/design-tokens/font' },
            { text: 'Opacity', link: '/design-tokens/opacity' },
            { text: 'Size', link: '/design-tokens/size' },
            { text: 'Spacing', link: '/design-tokens/spacing' }
          ]
        }
      ],
      '/components/': [
        {
          text: 'Components',
          items: [
            { text: 'Overview', link: '/components/overview' }
          ]
        },
        {
          text: '',
          items: [
            { text: 'Accordion', link: '/components/demos/accordion' },
            { text: 'Alert', link: '/components/demos/alert' },
            { text: 'Button', link: '/components/demos/button' },
            { text: 'Button-Group', link: '/components/demos/button-group' },
            { text: 'Checkbox', link: '/components/demos/checkbox' },
            { text: 'Container', link: '/components/demos/container' },
            { text: 'Field', link: '/components/demos/field' },
            { text: 'Label', link: '/components/demos/label' },
            { text: 'Link', link: '/components/demos/link' },
            { text: 'Menu', link: '/components/demos/menu' },
            { text: 'Radio', link: '/components/demos/radio' },
            { text: 'Select', link: '/components/demos/select' },
            { text: 'Tabs', link: '/components/demos/tabs' },
            { text: 'TextArea', link: '/components/demos/text-area' },
            { text: 'TextInput', link: '/components/demos/textinput' },
            { text: 'ToggleSwitch', link: '/components/demos/toggleswitch' },
            { text: 'Tooltip', link: '/components/demos/tooltip' },
          ]
        }
      ],
      '/icons/': [
        {
          text: 'Icons',
          items: [
            { text: 'Overview', link: '/icons/overview' },
            { text: 'List of all icons', link: '/icons/all-icons' }
          ]
        }
      ],
      '/composables/': [
        {
          text: 'Composables',
          items: [
            { text: 'Overview', link: '/composables/overview' }
          ]
        },
        {
          text: '',
          items: [
            { text: 'useComputedDirection', link: '/composables/demos/use-computed-direction' },
            { text: 'useComputedLanguage', link: '/composables/demos/use-computed-language' },
            { text: 'useFloatingMenu', link: '/composables/demos/use-floating-menu' },
            { text: 'useIntersectionObserver', link: '/composables/demos/use-intersection-observer' },
            { text: 'useModelWrapper', link: '/composables/demos/use-model-wrapper' },
            { text: 'useResizeObserver', link: '/composables/demos/use-resize-observer' }
          ]
        }
      ]
    }
  }
};
