Ext.define('Melisa.pens.view.menuAndProfile.menu.Options', {
    extend: 'Ext.Container',
    alias: 'widget.menuoptions',
    
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
            xtype: 'container',
            html: '<hr>'
        },
        {
            text: 'Favourites',
            iconCls: 'x-fa fa fa-start'
        },
        {
            text: 'My services',
            iconCls: 'x-fa fa fa-idea'
        },
        {
            text: 'History',
            iconCls: 'x-fa fa fa-heart'
        },
        {
            text: 'Profile',
            iconCls: 'x-fa fa fa-heart'
        },
        {
            xtype: 'container',
            html: '<hr>'
        },
        {
            text: 'About',
            iconCls: 'x-fa fa fa-info'
        }
    ]
});
