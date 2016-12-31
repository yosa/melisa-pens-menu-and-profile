Ext.define('Melisa.pens.view.menuAndProfile.WrapperController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.wrapper',
    
    listen: {
        global: {
            activemodule: 'onActiveModule'
        }        
    },
    
    onFirstPainted: function() {
        
        var me = this;
        
        me.getView().un('onFirstPainted', me.onFirstPainted);
        me.onTapBtnMenu();
        
    },
    
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
    
    onActiveModule: function(module) {
        
        var me = this;
        
        me.getView().setActiveItem(module);
        
    },
    
    onBtnProfileClose: function() {
        
        this.getView().setActiveItem(0);
    }
    
});
