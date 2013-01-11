switch(fl.getDocumentDOM().getTimeline().getLayerProperty('layerType')){
	case "normal":
		fl.getDocumentDOM().getTimeline().setLayerProperty('layerType', 'guide');
		//fl.trace(fl.getDocumentDOM().getTimeline().getLayerProperty('name')+"normal > guide");
		break;
	case "guide":
		fl.getDocumentDOM().getTimeline().setLayerProperty('layerType', 'normal');
		//fl.trace(fl.getDocumentDOM().getTimeline().getLayerProperty('name')+"guide > normal");
		break;
}