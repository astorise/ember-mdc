import Ember from 'ember';
import layout from 'ember-mdc/templates/components/mdc-list';

export default Ember.Component.extend({
  /**************
   * Attributes *
   **************/
  /** @var {Boolean} */
  avatars: false,

  /** @var {?String} */
  class: null,

  /** @var {Boolean} */
  dense: false,

  /** @var {?String} */
  group: null,

  /** @var {Boolean} */
  hasEndDetail: false,

  /** @var {Boolean} */
  hasStartDetail: false,

  /** @var {?String} */
  id: null,

  /** @var {?Object[]} */
  items: null,

  /** @var {Boolean} */
  menu: false,

  /** @var {Boolean} */
  nav: false,

  /** @var {Boolean} */
  permanentDrawer: false,

  /** @var {Boolean} */
  persistentDrawer: false,

  /** @var {Boolean} */
  ripple: false,

  /** @var {Boolean} */
  temporaryDrawer: false,

  /** @var {Boolean} */
  twoLines: false,

  /***************
   * Ember Hooks *
   ***************/
  /** @var {String[]} */
  attributeBindings: ['aria-hidden', 'id', 'role'],

  /** @var {String[]} */
  classNameBindings: [
    'avatars:mdc-list--avatar-list',
    'dense:mdc-list--dense',
    'isGroupContainer:mdc-list-group:mdc-list',
    'menu:mdc-simple-menu__items',
    'persistentDrawer:mdc-persistent-drawer__content',
    'temporaryDrawer:mdc-temporary-drawer__content',
    'twoLines:mdc-list--two-line'
  ],

  /** @var {Function} */
  didInsertElement() {
    const group = this.get('group');
    if (group) {
      const id = this.get('id');
      const root = window.document.getElementById(id);

      const h3 = window.document.createElement('h3');
      h3.className = 'mdc-list-group__subheader';
      h3.textContent = group;

      root.parentNode.insertBefore(h3, root);
    }
  },

  /** @var {Function} */
  init() {
    this._super(...arguments);

    const id = this.get('id');
    if (!id) {
      this.set('id', Ember.generateGuid());
    }

    if (this.get('avatars')) {
      this.set('hasStartDetail', true);
    }

    if (this.get('permanentDrawer') || this.get('persistentDrawer') || this.get('temporaryDrawer')) {
      this.set('hasStartDetail', true);
      this.set('nav', true);
    }

    if (this.get('menu')) {
      this.set('aria-hidden', 'true');
      this.set('role', 'menu');
    }

    if (this.get('nav')) {
      this.set('tagName', 'nav');
    }

    if (this.get('isGroupContainer')) {
      this.set('tagName', 'div');
    }
  },

  /** @var {Object} */
  layout,

  /** @var {String} */
  tagName: 'ul',

  /**************
   * Properties *
   **************/
  /** @var {Boolean} */
  isGroupContainer: Ember.computed('items', function() {
    return this.get('items') === null;
  }),

  /** @var {String} */
  role: null,

  /** @var {Object} */
  yieldDivider: {divider: true},

  /** @var {Object} */
  yieldEndDetail: {endDetail: true},

  /** @var {Object} */
  yieldPrimary: {primary: true},

  /** @var {Object} */
  yieldSecondary: {secondary: true},

  /** @var {Object} */
  yieldStartDetail: {startDetail: true}
});
