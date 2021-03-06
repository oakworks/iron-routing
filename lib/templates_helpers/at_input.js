/* global
  AccountsTemplates: false,
  Router: false
*/
'use strict';

AccountsTemplates.atInputRendered = function(){
  var fieldId = this.data._id;
  var queryKey = this.data.options && this.data.options.queryKey || fieldId;
  var inputQueryVal = Router.current().params.query[queryKey];
  if (inputQueryVal) {
    this.$("input#at-field-" + fieldId).val(inputQueryVal);
  }

  var parentData = Template.currentData();
  var state = (parentData && parentData.state) || AccountsTemplates.getState();

  if (AccountsTemplates.options.focusFirstInput) {
    var firstVisibleInput = _.find(AccountsTemplates.getFields(), function(f){
      return _.contains(f.visible, state);
    });

    if (firstVisibleInput && firstVisibleInput._id === fieldId) {
      this.$("input#at-field-" + fieldId).focus();
    }
  }
};
