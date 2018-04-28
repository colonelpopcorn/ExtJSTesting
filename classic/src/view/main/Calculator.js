Ext.define('TestTesting.view.main.Calculator', {
    extend: 'Ext.form.Panel',
    title: 'Calculator',
    xtype: 'calculator',
    controller: 'calculator',
    viewModel: {
        data: {
            currentOperation: 'Dirty?'
        }
    },
    items: [
        {
            xtype: 'textfield',
            width: '100%',
            emptyText: 'Numbers go here...',
            listeners: {
                change: 'onChange'
            }
        },
        {
            xtype: 'container',
            items: [
                {xtype: 'button', text: '1', width: '20%', margin: '10px'},
                {xtype: 'button', text: '2', width: '20%', margin: '10px'},
                {xtype: 'button', text: '3', width: '20%', margin: '10px'},
                {xtype: 'button', text: '+', width: '20%', margin: '10px'}
            ]
        },
        {
            xtype: 'container',
            items: [
                {xtype: 'button', text: '4', width: '20%', margin: '10px'},
                {xtype: 'button', text: '5', width: '20%', margin: '10px'},
                {xtype: 'button', text: '6', width: '20%', margin: '10px'},
                {xtype: 'button', text: '-', width: '20%', margin: '10px'}
            ]
        },     
        {
            xtype: 'container',
            items: [
                {xtype: 'button', text: '7', width: '20%', margin: '10px'},
                {xtype: 'button', text: '8', width: '20%', margin: '10px'},
                {xtype: 'button', text: '9', width: '20%', margin: '10px'},
                {xtype: 'button', text: '*', width: '20%', margin: '10px'}
            ]
        },
        {
            xtype: 'container',
            items: [
                {xtype: 'button', text: '/', width: '20%', margin: '10px'},
                {xtype: 'button', text: '0', width: '20%', margin: '10px'},
                {xtype: 'button', text: '=', width: '20%', margin: '10px'}
            ]
        },
        {
            xtype: 'component',
            bind: { html: '{currentOperation}'}
        }
    ]

});