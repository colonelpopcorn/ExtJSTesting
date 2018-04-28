Ext.define('TestTesting.view.main.CalculatorController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.calculator',

    onChange: function(sender, newValue, oldValue, eOpts) {
        
        if (newValue !== oldValue) {
            this.getViewModel().data.currentOperation = newValue;
        }
    }
});
