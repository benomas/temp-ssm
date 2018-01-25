import crudService from './crudService'

export default function(services){
	let customizedCrudService = new crudService(services,"users");
	/*
		Here your declare your own methods
	*/
	return customizedCrudService;
};