Ext.define('Melisa.pens.view.menuAndProfile.Home', {
    extend: 'Ext.Container',
    alias: 'widget.home',
    
    items: [
        {
            xtype: 'titlebar',
            title: 'Menu and Profile',
            items: [
                {
                    xtype: 'button',
                    iconCls: 'x-fa fa fa-bars',
                    listeners: {
                        tap: 'onTapBtnMenu'
                    }
                }
            ]
        }
    ]
});
