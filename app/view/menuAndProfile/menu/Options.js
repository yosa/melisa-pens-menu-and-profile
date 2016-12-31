Ext.define('Melisa.pens.view.menuAndProfile.menu.Options', {
    extend: 'Ext.Container',
    alias: 'widget.menuoptions',
    
    requires: [
        'Melisa.pens.view.menuAndProfile.menu.OptionsController'
    ],
    
    controller: 'options',
    layout: 'vbox',
    cls: 'options',
    defaults: {
        xtype: 'button',
        textAlign: 'left'
    },
    items: [
        {
            text: 'Home',
            iconCls: 'x-fa fa fa-home'
        },
        {
            text: 'Catalog',
            iconCls: 'x-fa fa fa-home'
        },
        {
            text: 'Support',
            iconCls: 'x-fa fa fa-heart'
        },
        {
            xtype: 'separator'
        },
        {
            text: 'Favourites',
            iconCls: 'x-fa fa fa-star-o'
        },
        {
            text: 'My services',
            badgeText: 3,
            iconCls: 'x-fa fa fa-lightbulb-o'
        },
        {
            text: 'History',
            iconCls: 'x-fa fa fa-history'
        },
        {
            text: 'Profile',
            iconCls: 'x-fa fa fa-user'
        },
        {
            xtype: 'separator'
        },
        {
            text: 'About',
            iconCls: 'x-fa fa fa-info'
        }
    ]
});
