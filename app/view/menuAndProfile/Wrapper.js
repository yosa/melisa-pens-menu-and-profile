Ext.define('Melisa.pens.view.menuAndProfile.Wrapper', {
    extend: 'Ext.Container',
    
    requires: [
        'Melisa.pens.view.menuAndProfile.WrapperController',
        'Melisa.pens.view.menuAndProfile.menu.Modal',
        'Melisa.pens.view.menuAndProfile.profile.Wrapper',
        'Melisa.pens.view.menuAndProfile.Home'
    ],
    
    controller: 'wrapper',
    layout: 'card',
    items: [
        {
            xtype: 'home'
        },
        {
            xtype: 'profilewrapper'
        }
    ]
});
