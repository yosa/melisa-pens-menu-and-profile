Ext.define('Melisa.pens.view.menuAndProfile.WrapperController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.wrapper',
    
    onTapBtnMenu: function() {
        
        var me = this,
            menu = me.getMenu();
        
        menu.show();
        
    },
    
    getMenu: function() {
        
        var me = this;
        
        if( !me.menu) {
            
            me.menu = Ext.create('widget.menumodal');            
            Ext.Viewport.add(me.menu);
            
        }
        
        return me.menu;
        
    },
    
    onTapBtnProfile: function() {
        alert('asd')
        var me = this;
        console.log('entro');
        me.getView().setActiveItem(1);
        
    }
    
});
