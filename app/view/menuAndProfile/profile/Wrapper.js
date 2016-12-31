Ext.define('Melisa.pens.view.menuAndProfile.profile.Wrapper', {
    extend: 'Ext.Container',
    alias: 'widget.profilewrapper',
    
    cls: 'profile',
    scrollable: 'vertical',
    items: [
        {
            xtype: 'titlebar',
            title: 'Profile',
            titleAlign: 'center',
            items: [
                {
                    iconCls: 'x-fa fa fa-arrow-left',
                    listeners: {
                        tap: 'onBtnProfileClose'
                    }
                },
                {
                    iconCls: 'x-fa fa fa-pencil',
                    align: 'right'
                },
                {
                    iconCls: 'x-fa fa fa-ellipsis-v',
                    align: 'right'
                }
            ]
        },
        {
            xtype: 'container',
            cls: 'header',
            layout: {
                type: 'vbox',
                align: 'center'
            },
            items: [
                {
                    xtype: 'button',
                    cls: 'avatar',
                    tpl: '<img src="{server}images/zooey.png" />',
                    data: {
                        server: Ext.manifest.melisa.server
                    }
                },
                {
                    xtype: 'container',
                    cls: 'detail',
                    html: 'Zooey Claire Deschanel<br><small>Private person</small>'
                }
            ]
        },
        {
            xtype: 'separator'
        },
        {
            xtype: 'label',
            html: 'Contacts'
        },
        {
            xtype: 'button',
            iconCls: 'x-fa fa fa-map-marker',
            textAlign: 'left',
            cls: 'data',
            text: '158 Playa La Boquita Street Las Brisas, Manzanillo'
        },
        {
            xtype: 'button',
            iconCls: 'x-fa fa fa-envelope-o',
            textAlign: 'left',
            cls: 'data',
            text: 'zooey@melisa.mx'
        },
        {
            xtype: 'separator'
        },
        {
            xtype: 'label',
            html: 'Banck card'
        },
        {
            xtype: 'button',
            iconCls: 'x-fa fa fa-credit-card',
            textAlign: 'left',
            cls: 'data',
            text: '4276-...'
        },
        {
            xtype: 'separator'
        },
        {
            xtype: 'label',
            html: 'Notifications'
        },
        {
            xtype: 'label',
            cls: 'help-text',
            html: 'You can configure notifications about the services, for which you are enrolled.'
        },
        {
            xtype: 'button',
            text: 'Change settings',
            cls: 'data change-settings',
            iconCls: 'x-fa fa fa-pencil',
            textAlign: 'left'
        },
        {
            xtype: 'separator'
        },
        {
            xtype: 'container',
            cls: 'logout',
            docked: 'bottom',
            layout: {
                type: 'vbox',
                align: 'center'
            },
            items: [
                {
                    xtype: 'button',
                    text: 'LOG OUT'
                }
            ]
        }
    ]
});
