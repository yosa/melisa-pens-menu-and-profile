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
            html: '<img class="avatar" src="images/zooey.png" />'
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
