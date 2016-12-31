Ext.define('Melisa.pens.view.menuAndProfile.menu.Modal', {
    extend: 'Ext.Container',
    alias: 'widget.menumodal',
    
    requires: [
        'Melisa.pens.view.menuAndProfile.menu.Options',
        'Melisa.pens.view.menuAndProfile.menu.Header'
    ],
    
    cls: 'menu-modal',
    scrollable: 'vertical',
    hideAnimation: 'slideOut',
    width: '80%',
    top: 0,
    left: 0,
    bottom: 0,
    zIndex: 9999,    
    hideOnMaskTap: true,
    modal: false,    
    showAnimation: {
        type: 'slide',
        direction: 'right'
    },
    items: [
        {
            xtype: 'menuheader'
        },
        {
            xtype: 'menuoptions'
        }        
    ]
});
