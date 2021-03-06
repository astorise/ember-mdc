import Ember from 'ember';

export default Ember.Checkbox.extend({
  /**************
   * Attributes *
   **************/
  /** @var {Object} */
  attributes: {},

  /***************
   * Ember Hooks *
   ***************/
  /** @var {String[]} */
  attributeBindings: ['id', 'value'],

  /** @var {String[]} */
  classNames: ['mdc-checkbox__native-control'],

  /** @var {Function} */
  init() {
    this._super(...arguments);

    const id = this.get('id');
    this.set('id', `${id}-checkbox`);

    const attributes = this.get('attributes');
    Object.keys(attributes || {}).forEach((key) => {
      this.set(key, attributes[key]);
    });
  }
});
