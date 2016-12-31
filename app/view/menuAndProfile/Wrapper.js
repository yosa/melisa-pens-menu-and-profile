Ext.define('Melisa.pens.view.menuAndProfile.Wrapper', {
    extend: 'Ext.Container',
    
    requires: [
        'Melisa.pens.view.menuAndProfile.WrapperController',
        'Melisa.pens.view.menuAndProfile.menu.Modal',
        'Melisa.pens.view.menuAndProfile.profile.Wrapper',
        'Melisa.pens.view.menuAndProfile.Home',
        'Melisa.pens.view.menuAndProfile.menu.Separator'
    ],
    
    controller: 'wrapper',
    layout: 'card',
    defaults: {
        hideAnimation: 'fadeOut',
        showAnimation: {
            type: 'slide',
            direction: 'right'
        }
    },
    items: [
        {
            xtype: 'home'
        },
        {
            xtype: 'profilewrapper'
        }
    ],
    listeners: {
        painted: 'onFirstPainted'
    }
});
