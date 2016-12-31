Ext.define('Melisa.pens.view.menuAndProfile.Home', {
    extend: 'Ext.Container',
    alias: 'widget.home',
    
    layout: 'vbox',
    cls: 'home',
    items: [
        {
            xtype: 'titlebar',
            docked: 'top',
            items: [
                {
                    xtype: 'button',
                    text: 'Menu and Profile',
                    iconCls: 'x-fa fa fa-bars',
                    listeners: {
                        tap: 'onTapBtnMenu'
                    }
                },
                {
                    iconCls: 'x-fa fa fa-search',
                    align: 'right'
                }
            ]
        },
        {
            xtype: 'container',
            cls: 'map'
        }
    ]
});
