Ext.define('Melisa.pens.view.menuAndProfile.menu.Header', {
    extend: 'Ext.Container',
    alias: 'widget.menuheader',
    
    cls: 'header',
    layout: {
        type: 'vbox',
        align: 'strech'
    },
    items: [
        {
            xtype: 'container',
            cls: 'avatar-wrapper',
            tpl: '<img class="avatar" src="{server}images/zooey.png" />',
            data: {
                server: Ext.manifest.melisa.server
            }
        },
        {
            xtype: 'button',
            iconCls: 'x-fa fa fa-chevron-down',
            iconAlign: 'right',
            textAlign: 'left',
            cls: 'change-profile',
            text: 'Zooey Claire Deschanel<br>zooey@melisa.mx'
        }
    ]
    
});
