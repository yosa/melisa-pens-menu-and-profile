/**
 * inspirate by https://material.uplabs.com/posts/menu-and-profile
 * source code in https://github.com/yosa/melisa-pens-menu-and-profile
 */

Ext.manifest = {
	melisa: {
		server: window.location.href.indexOf('codepen') === -1 ? window.location.href :
            'https://yosa.github.io/melisa-pens-menu-and-profile/'
	}
};

Ext.application({
    name: 'Melisa.pens',
    
    paths: {
        'Melisa.pens': Ext.manifest.melisa.server + 'app'
    },
    
    requires: [
        'Melisa.pens.view.menuAndProfile.Wrapper'
    ],
    
    mainView: 'Melisa.pens.view.menuAndProfile.Wrapper'
    
});
